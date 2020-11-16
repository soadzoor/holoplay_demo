import {Scene, WebGLRenderer, AmbientLight, DirectionalLight, HemisphereLight, Vector3} from "three";
import * as HoloPlay from "holoplay/dist/holoplay.module";
import {CameraControls} from "./CameraControls";
import {SceneLoader} from "./SceneLoader";
import {VignetteBackground} from "./VignetteBackground";
import {Convergence, Easing} from "utils/Convergence";
import {BoundedConvergence} from "utils/BoundedConvergence";
import {Constants} from "utils/Constants";

export class SceneManager
{
	private _domElement: HTMLDivElement = document.getElementById("playGround") as HTMLDivElement;
	private _canvas: HTMLCanvasElement;
	private _scene: Scene;
	private _camera = new HoloPlay.Camera();
	private _controls: CameraControls;
	private _holoRenderer;
	private _webglRenderer: WebGLRenderer;
	private _distance: BoundedConvergence = new BoundedConvergence(10, 10, 1, 100, Easing.EASE_OUT, Constants.ANIMATION_DURATION);
	private _normalizedCameraPosition: number[] = [0, 0, 1];
	private _sceneLoader: SceneLoader;
	private static _timeStamp: number = 0;
	private static _deltaFrame: number = 1000;
	private static _prevTimeStamp: number = 0;
	private _origin: Vector3 = new Vector3(0, 0, 0);
	private _lastFPSDrawTimeStamp: number = 0;
	private _fpsValues: number[] = [];
	public needsRender = true;
	private _requestAnimationFrameId: number = null;

	private _isInitialized: boolean = false;

	constructor()
	{
		this._scene = new Scene();
	}

	public async init()
	{
		if (!this._isInitialized)
		{
			this._isInitialized = true;
			this.initBackground();
			this.initLights();
			this.initControls();
			this.initRenderer();
			this._sceneLoader = new SceneLoader(this);
			await this._sceneLoader.init();
		}
	}

	public async loadModel(glbURL: string)
	{
		await this._sceneLoader.loadScene(glbURL);
		this._controls.autoRotate = true;
		this.onWindowResize();
		this.animate(0);
	}

	private initBackground()
	{
		const IS_IOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !((<any>window).MSStream);

		this._scene.add(new VignetteBackground({
			aspect: this._camera.aspect,
			grainScale: IS_IOS ? 0 : 0.001, // mattdesl/three-vignette-background#1
			colors: ["#ffffff", "#353535"]
		}).mesh);
	}

	private initLights()
	{
		const light1 = new AmbientLight(0xFFFFFF, 0.1);

		const light2 = new DirectionalLight(0xFFFFFF, 0.1);
		light2.position.set(0.5, 0, 0.866); // ~60ยบ

		const light3 = new HemisphereLight(0xffffbb, 0x080820, 0.8);

		this._scene.add(light1, light2, light3);
	}

	private initControls()
	{
		this._controls = new CameraControls(this._domElement, this);
		this._controls.activate();
	}

	private initRenderer()
	{
		// const contextAttributes = {
		// 	alpha: false,
		// 	antialias: true
		// };
		// const context = this._canvas.getContext("webgl2", contextAttributes) || this._canvas.getContext("experimental-webgl2", contextAttributes);
		// this._renderer = new WebGLRenderer({
		// 	canvas: this._canvas,
		// 	context: context as WebGL2RenderingContext,
		// 	...contextAttributes
		// });
		// this._renderer.setPixelRatio(window.devicePixelRatio);
		// this._renderer.setClearColor(0xECF8FF);
		// this._renderer.outputEncoding = GammaEncoding;
		this._holoRenderer = new HoloPlay.Renderer();
		this._canvas = this._holoRenderer.domElement;
		this._domElement.appendChild(this._canvas);

		this._webglRenderer = this._holoRenderer.webglRenderer;

		this._canvas.addEventListener("webglcontextlost", this.onContextLost);

		window.addEventListener("resize", this.onWindowResize);
	}

	private onWindowResize = () =>
	{
		// this._canvas.width = 0;
		// this._canvas.height = 0;

		// const width = window.innerWidth;
		// const height = window.innerHeight;

		// this._renderer.setSize(width, height);
		// this._camera.aspect = width / height;
		// this._camera.updateProjectionMatrix();
	};

	private onContextLost = (event: Event) =>
	{
		event.preventDefault();

		alert("Unfortunately WebGL has crashed. Please reload the page to continue!");
	};

	public get scene()
	{
		return this._scene;
	}

	private update = (time: number) =>
	{
		SceneManager._timeStamp = performance.now();
		SceneManager._deltaFrame = SceneManager._timeStamp - SceneManager._prevTimeStamp;
		SceneManager._prevTimeStamp = SceneManager._timeStamp;

		this._requestAnimationFrameId = requestAnimationFrame(this.update);

		this.needsRender = Convergence.updateActiveOnes(SceneManager._timeStamp) || this.needsRender;
		if (this.needsRender)
		{
			this._fpsValues.push(1000 / SceneManager._deltaFrame);
			if (SceneManager._timeStamp - this._lastFPSDrawTimeStamp > 1000)
			{
				if (this._fpsValues.length > 0)
				{
					const avgFPS = Math.round(this._fpsValues.reduce((previous: number, current: number) => previous + current) / this._fpsValues.length);
					console.log(`FPS: ${avgFPS}`);
					this._lastFPSDrawTimeStamp = SceneManager._timeStamp;
					this._fpsValues.length = 0;
				}
			}
			this._normalizedCameraPosition = this._controls.update();
			this._camera.position.set(
				this._normalizedCameraPosition[0] * this._distance.value,
				this._normalizedCameraPosition[1] * this._distance.value,
				this._normalizedCameraPosition[2] * this._distance.value
			);
			this._camera.lookAt(this._origin);
			this._holoRenderer.render(this._scene, this._camera);
			this.needsRender = false;
		}
	};

	private animate = (time: number) =>
	{
		cancelAnimationFrame(this._requestAnimationFrameId);
		this.update(time);
	};

	/** Returns the timestamp of the newest render run  */
	public static get timeStamp()
	{
		return SceneManager._timeStamp;
	}

	/** Returns the time between the last 2 frames, so we can get an idea of the user's FPS */
	public static get deltaFrame()
	{
		return SceneManager._deltaFrame;
	}

	public get webglRenderer()
	{
		return this._webglRenderer;
	}

	public get distance()
	{
		return this._distance;
	}

	public get domElement()
	{
		return this._domElement;
	}
}