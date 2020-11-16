export class DropManager
{
	private _domElement: HTMLElement;
	private _uploadArea: HTMLElement;
	private _inputElement: HTMLInputElement;

	public onFileSelected: (url: string) => void = () => {};

	constructor(domElement: HTMLElement)
	{
		this._domElement = domElement;
		this._inputElement = document.createElement("input");
		this._inputElement.type = "file";
		this._inputElement.accept = ".glb";
		this._inputElement.addEventListener("change", (event: Event) =>
		{
			const file = this._inputElement.files[0];
			this.processFile(file);
		});

		this._uploadArea = document.getElementById("uploadArea");

		this.init();
	}

	private async init()
	{
		document.addEventListener("dragover", (event: Event) =>
		{
			event.preventDefault();
		});

		this._domElement.addEventListener("drop", (event: DragEvent) =>
		{
			event.preventDefault();

			const file = event.dataTransfer.files[0];
			this.processFile(file);
		});

		this._uploadArea.addEventListener("click", () =>
		{
			this._inputElement.click();
		});

		this._domElement.classList.remove("hidden");
	}

	private processFile(file: File)
	{
		this.onFileSelected(URL.createObjectURL(file));
	}
}