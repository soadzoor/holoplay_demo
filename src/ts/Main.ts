import {SceneManager} from "./view/SceneManager";
import {Model} from "./model/Model";
import {DropManager} from "view/DropManager";

export class Main
{
	public static instance: Main;
	public static getInstance(): Main
	{
		return Main.instance || new Main();
	}

	private _model: Model;
	private _sceneManager: SceneManager;
	private _dropManager: DropManager;

	constructor()
	{
		Main.instance = this;

		this._model = new Model();
		this._sceneManager = new SceneManager();
		this.init();
	}

	private init()
	{
		this._dropManager = new DropManager(this._sceneManager.domElement);
		this._dropManager.onFileSelected = async (url: string) =>
		{
			await this._sceneManager.init();
			this._sceneManager.loadModel(url);
		};
	}

	public get scene()
	{
		return this._sceneManager;
	}

	public get model()
	{
		return this._model;
	}
}

const main = Main.getInstance();