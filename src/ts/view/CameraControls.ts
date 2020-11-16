import {BoundedConvergence} from "../utils/BoundedConvergence";
import {SceneManager} from "./SceneManager";
import {Constants} from "../utils/Constants";
import {Easing} from "utils/Convergence";
import {VectorUtils} from "utils/VectorUtils";

export class CameraControls
{
	private _domElement: HTMLElement;
	private _isPointerDown: boolean = false;
	private _sceneManager: SceneManager;
	private _mouseMoved: boolean = true;
	private _triggerClickThreshold: {
		deltaCursor: number;
		deltaTime: number
	} = {
		deltaCursor: 3,
		deltaTime: 1000
	};
	private _pointer: {
		downTimeStamp: number;
		startX: number;
		startY: number;
		prevX: number;
		prevY: number;
		prevDeltaX: number;
		prevDeltaY: number;
		prevTimeStamp: number;
		prevDeltaTime: number;
		triggerClickOnPointerUp: boolean;
	} = {
		downTimeStamp: null,
		startX: null,
		startY: null,
		prevX: null,
		prevY: null,
		prevDeltaX: 0,
		prevDeltaY: 0,
		prevTimeStamp: 0,
		prevDeltaTime: 1,
		triggerClickOnPointerUp: false
	};
	private _u: BoundedConvergence = new BoundedConvergence(0, 0, -Infinity, Infinity, Easing.EASE_OUT, Constants.DAMPING_DURATION);
	private _v: BoundedConvergence = new BoundedConvergence(Math.PI / 2, Math.PI / 2, 0.01, 3.14, Easing.EASE_OUT, Constants.DAMPING_DURATION);
	private _pinch: {
		startValue: {
			touchDistance: number;
			distanceValue: number;
		};
		currentValue: {
			touchDistance: number;
			distanceValue: number;
		};
	} = {
		startValue: {
			touchDistance: null,
			distanceValue: null
		},
		currentValue: {
			touchDistance: null,
			distanceValue: null
		}
	};
	private _cameraNormalizedPosition: number[] = VectorUtils.normalize([0, 0, 1]);
	private _timeoutID: number = null;
	private _dampOnPointerUp: boolean = false;

	private _enabled: boolean = false;
	public autoRotate: boolean = true;
	private autoRotateSpeed: number = 2 * Math.PI / 12 / 1000; // in radians / ms, derived from the requested full circle (2*PI) / 12 sec

	private readonly SENSITIVITY = 1.2;
	private _prevSpeed: number[] = [];

	constructor(domElement: HTMLElement, sceneManager: SceneManager)
	{
		this._domElement = domElement;
		this._sceneManager = sceneManager;
	}

	/**
	 * Returns the distance between 2 touch points
	 * @param touch0 
	 * @param touch1 
	 */
	private getTouchDistance(event: TouchEvent)
	{
		const touch0 = {
			x: event.touches[0].clientX,
			y: event.touches[0].clientY
		};

		const touch1 = {
			x: event.touches[1].clientX,
			y: event.touches[1].clientY
		};

		const delta = {
			x: touch1.x - touch0.x,
			y: touch1.y - touch0.y
		};

		const distance = Math.sqrt(delta.x * delta.x + delta.y * delta.y);

		return distance;
	}

	private onWheel = (event: MouseWheelEvent) =>
	{
		event.preventDefault();
		const zoomStepSize = 1.1;

		const distance = this._sceneManager.distance;
		const newDistanceValue = Math.sign(-event.deltaY) > 0 ? distance.end / zoomStepSize : distance.end * zoomStepSize;
		distance.setEnd(newDistanceValue, true);
	};

	private onMouseDown = (event: MouseEvent) =>
	{
		if (event.button === Constants.MOUSE_BUTTON.LEFT)
		{
			this.onPointerDown(event.clientX, event.clientY);
		}
	};

	private onTouchStart = (event: TouchEvent) =>
	{
		event.preventDefault();

		if (event.touches.length === 1)
		{
			this.onPointerDown(event.touches[0].clientX, event.touches[0].clientY);
		}
		else if (event.touches.length === 2)
		{
			this._isPointerDown = false;
			this._pinch.startValue.touchDistance = this.getTouchDistance(event);
			this._pinch.startValue.distanceValue = this._sceneManager.distance.value;
		}
		else
		{
			this.onPointerUp(event);
		}
	};

	private onPointerDown(clientX: number, clientY: number)
	{
		this.stopRotating();
		this._isPointerDown = true;
		this._mouseMoved = false;

		this._pointer.startX = this._pointer.prevX = clientX;
		this._pointer.startY = this._pointer.prevY = clientY;

		this._pointer.downTimeStamp = performance.now();
		this._pointer.prevTimeStamp = this._pointer.downTimeStamp;
		this._pointer.triggerClickOnPointerUp = true;

		this._domElement.classList.add("rotating");

		this._u.reset(this._u.value, this._u.value);
		this._v.reset(this._v.value, this._v.value);
	}

	private onMouseMove = (event: MouseEvent) =>
	{
		this.onPointerMove(event.clientX, event.clientY);
	};

	private onTouchMove = (event: TouchEvent) =>
	{
		if (event.touches.length === 1)
		{
			this.onPointerMove(event.touches[0].clientX, event.touches[0].clientY);
		}
		else if (event.touches.length === 2 && this._pinch.startValue.touchDistance)
		{
			this._pinch.currentValue.touchDistance = this.getTouchDistance(event);
			this._pinch.currentValue.distanceValue = (this._pinch.startValue.touchDistance / this._pinch.currentValue.touchDistance) * this._pinch.startValue.distanceValue;

			this._sceneManager.distance.setEnd(this._pinch.currentValue.distanceValue);
		}
		else
		{
			this.onPointerUp(event);
		}
	};

	private onPointerMove(clientX: number, clientY: number)
	{
		if (this._isPointerDown)
		{
			this._mouseMoved = clientX !== this._pointer.prevX || clientY !== this._pointer.prevY; /** Sometimes pointermove is fired when the mouse is clicked, but the mouse doesn't even move. We have to check if the mouse really moved, or not */

			if (this._mouseMoved)
			{
				this._domElement.classList.add("rotating");

				if (this._pointer.prevX != null && this._pointer.prevY != null)
				{
					const distance = this._sceneManager.distance.value;
					const pointerDeltaX = this._pointer.prevX - clientX;
					const pointerDeltaY = clientY - this._pointer.prevY;
					const deltaU = (pointerDeltaX * this.SENSITIVITY / window.innerHeight) * distance;
					const deltaV = (pointerDeltaY * this.SENSITIVITY / window.innerHeight) * distance;

					const currentXToStartX = this._pointer.startX - clientX;
					const currentYToStartY = this._pointer.startY - clientY;

					if (this._triggerClickThreshold.deltaCursor < Math.abs(currentXToStartX) || this._triggerClickThreshold.deltaCursor < Math.abs(currentYToStartY))
					{
						this._pointer.triggerClickOnPointerUp = false;
					}

					this._pointer.prevDeltaX = this._pointer.prevX - clientX;
					this._pointer.prevDeltaY = clientY - this._pointer.prevY;

					this._u.reset(this._u.end - deltaU, this._u.end - deltaU);
					this._v.reset(this._v.end - deltaV, this._v.end - deltaV);
				}

				this._pointer.prevX = clientX;
				this._pointer.prevY = clientY;

				const timeStamp = performance.now();

				if (this._triggerClickThreshold.deltaTime < (timeStamp - this._pointer.downTimeStamp))
				{
					this._pointer.triggerClickOnPointerUp = false;
				}

				this._pointer.prevDeltaTime = timeStamp - this._pointer.prevTimeStamp;
				this._pointer.prevTimeStamp = timeStamp;

				this._dampOnPointerUp = true;
				clearTimeout(this._timeoutID);
				this._timeoutID = setTimeout(this.cancelDamping, 100) as any;
			}
		}
	}

	private onPointerUp = (event: MouseEvent | TouchEvent) =>
	{
		if (this._isPointerDown)
		{
			const timeStamp = performance.now();
			this._domElement.classList.remove("rotating");

			const speed = this._prevSpeed;
			const speedAbsSq = VectorUtils.lengthOfSquared(speed);

			if (this._dampOnPointerUp && !isNaN(speedAbsSq) && 0 < speedAbsSq && speedAbsSq < Infinity)
			{
				this._dampOnPointerUp = false;

				const multiplicator = this._u.derivateAt0;

				// s = v * t => delta
				const time = this._u.originalAnimationDuration;
				const delta = [
					time * speed[0] / multiplicator,
					time * speed[1] / multiplicator
				];

				this._u.setEnd(this._u.value + delta[0]);
				this._v.setEnd(this._v.value + delta[1]);
			}

			if (this._triggerClickThreshold.deltaTime < (timeStamp - this._pointer.downTimeStamp))
			{
				this._pointer.triggerClickOnPointerUp = false;
			}

			if (this._pointer.triggerClickOnPointerUp)
			{
				//this.signals.click.dispatch({clientX: this._pointer.prevX, clientY: this._pointer.prevY});
			}
		}

		this._isPointerDown = false;
		this._pointer.triggerClickOnPointerUp = false;
		this._pointer.downTimeStamp = null;
		this._pointer.startX = null;
		this._pointer.startY = null;
		this._pointer.prevX = null;
		this._pointer.prevY = null;
		this._pointer.prevTimeStamp = 0;
		this._pointer.prevDeltaX = 0;
		this._pointer.prevDeltaY = 0;
		this._pointer.prevDeltaTime = 1;

		this._pinch.startValue.touchDistance = this._pinch.startValue.distanceValue =
			this._pinch.currentValue.touchDistance = this._pinch.currentValue.distanceValue = null;
	};

	private cancelDamping = () =>
	{
		this._dampOnPointerUp = false;
	};

	/** See this for explanation: https://en.wikipedia.org/wiki/UV_mapping#Finding_UV_on_a_sphere */
	private setUVFromSphereSufracePoint(point: number[])
	{
		const u = Math.PI - Math.atan2(point[2], point[0]);
		this._u.reset(u, u);
		const v = (Math.PI / 2) - Math.asin(point[1]);
		this._v.reset(v, v);
	}

	public activate()
	{
		if (!this._enabled)
		{
			this._enabled = true;
			this.setUVFromSphereSufracePoint(this._cameraNormalizedPosition);

			this._domElement.addEventListener("mousedown", this.onMouseDown);
			this._domElement.addEventListener("touchstart", this.onTouchStart);
			this._domElement.addEventListener("wheel", this.onWheel);

			window.addEventListener("mousemove", this.onMouseMove);
			window.addEventListener("touchmove", this.onTouchMove);

			window.addEventListener("mouseup", this.onPointerUp);
			window.addEventListener("touchend", this.onPointerUp);
			window.addEventListener("touchcancel", this.onPointerUp);

			window.addEventListener("keyup", this.onKeyUp);
		}
	}

	public deactivate()
	{
		if (this._enabled)
		{
			this._enabled = false;
			this._isPointerDown = false;

			this._domElement.classList.remove("rotating");

			this._domElement.removeEventListener("mousedown", this.onMouseDown);
			this._domElement.removeEventListener("touchstart", this.onTouchStart);
			this._domElement.removeEventListener("wheel", this.onWheel);

			window.removeEventListener("mousemove", this.onMouseMove);
			window.removeEventListener("touchmove", this.onTouchMove);

			window.removeEventListener("mouseup", this.onPointerUp);
			window.removeEventListener("touchend", this.onPointerUp);
			window.removeEventListener("touchcancel", this.onPointerUp);

			window.removeEventListener("keyup", this.onKeyUp);
		}
	}

	private onKeyUp = (event: KeyboardEvent) =>
	{
		switch (event.code)
		{
			case "Space":
				this.autoRotate = !this.autoRotate;
				this._sceneManager.needsRender = true;
				break;
		}
	};

	private stopRotating()
	{
		this.autoRotate = false;

		this._u.reset(this._u.value, this._u.value);
		this._v.reset(this._v.value, this._v.value);
	}

	public update()
	{
		if (this._enabled)
		{
			if (this.autoRotate)
			{
				const nextUValue = this._u.end + this.autoRotateSpeed * SceneManager.deltaFrame;
				this._u.reset(nextUValue, nextUValue);
			}

			if (this._u.hasChangedSinceLastTick || this._v.hasChangedSinceLastTick)
			{
				this._prevSpeed[0] = this._u.prevDeltaValue / this._u.prevDeltaTime;
				this._prevSpeed[1] = this._v.prevDeltaValue / this._v.prevDeltaTime;
				this._cameraNormalizedPosition = VectorUtils.getWorldPositionFromUV(this._u.value, this._v.value);
				this._sceneManager.needsRender = true;
			}

			return this._cameraNormalizedPosition;
		}
	}
}