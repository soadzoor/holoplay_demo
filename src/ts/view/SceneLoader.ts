import {Group, Mesh, MeshStandardMaterial, Object3D, PMREMGenerator, Texture, UnsignedByteType} from "three";
import {GLTFLoader, GLTF} from "three/examples/jsm/loaders/GLTFLoader";
import {RGBELoader} from "three/examples/jsm/loaders/RGBELoader";
import {THREEUtils} from "utils/THREEUtils";
import {SceneManager} from "./SceneManager";

export class SceneLoader
{
	private _sceneManager: SceneManager;
	private _object: Group;

	private _pmremGenerator: PMREMGenerator;
	private _envMap: Texture;
	private _gltfLoader: GLTFLoader = new GLTFLoader();

	constructor(scene: SceneManager)
	{
		this._sceneManager = scene;

		this._pmremGenerator = new PMREMGenerator(this._sceneManager.webglRenderer);
		this._pmremGenerator.compileEquirectangularShader();
	}

	public async init()
	{
		this._envMap = await this.getCubeMapTexture("assets/images/venice_sunset_1k.hdr");
	}

	private getCubeMapTexture(path: string)
	{
		return new Promise<Texture>((resolve, reject) =>
		{
			new RGBELoader()
				.setDataType(UnsignedByteType)
				.load(path, (texture) =>
				{
					const envMap = this._pmremGenerator.fromEquirectangular(texture).texture;
					this._pmremGenerator.dispose();

					resolve(envMap);
				}, undefined, reject);
		});
	}

	public loadScene(url: string)
	{
		return new Promise<void>((resolve, reject) =>
		{
			this._gltfLoader.load(url, (gltf: GLTF) =>
			{
				this.dispose();
				this._object = gltf.scene;
				this._object.traverse((object: Object3D) =>
				{
					if (object instanceof Mesh)
					{
						if (object.material instanceof MeshStandardMaterial)
						{
							object.material.envMap = this._envMap;
						}
					}
				});
				this._sceneManager.scene.add(this._object);
				this._sceneManager.needsRender = true;
				resolve();
			});
		});
	};

	public dispose()
	{
		if (this._object)
		{
			THREEUtils.disposeAndClearContainer(this._object);
			this._object.parent?.remove(this._object);
		}
	}
}