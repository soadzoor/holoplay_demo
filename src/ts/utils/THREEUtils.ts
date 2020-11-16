import {BufferGeometry, Mesh, MeshStandardMaterial, Object3D} from "three";

export class THREEUtils
{
	public static clearContainer(container: Object3D)
	{
		for (let i = container.children.length - 1; i >= 0; --i)
		{
			if (container.children[i].children.length > 0)
			{
				THREEUtils.clearContainer(container.children[i]);
			}
			container.remove(container.children[i]);
		}
	}

	public static disposeContainer(container: Object3D)
	{
		container.traverse((node: Object3D) =>
		{
			if (node instanceof Mesh)
			{
				const material = node.material as MeshStandardMaterial;
				material.map?.dispose();
				material.normalMap?.dispose();
				material.metalnessMap?.dispose();
				material.roughnessMap?.dispose();
				material.aoMap?.dispose();
				material.dispose();

				(node.geometry as BufferGeometry).dispose();
			}
		});
	}

	public static disposeAndClearContainer(container: Object3D)
	{
		THREEUtils.disposeContainer(container);
		THREEUtils.clearContainer(container);
	}
}