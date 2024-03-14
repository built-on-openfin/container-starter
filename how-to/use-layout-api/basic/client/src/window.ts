import type OpenFin from "@openfin/core";
import type { LayoutManager, LayoutManagerConstructor, LayoutManagerItem } from "./shapes";

export const CONTAINER_ID = "layout-container";
window.addEventListener("DOMContentLoaded", async () => {
	const me = fin.me as OpenFin.Window;
	await setupTitleBar(me);
	await fin.Platform.Layout.init({ layoutManagerOverride: basicLayoutManagerOverride });
});

/**
 * Function that returns a class for the Layout.init to invoke.
 * @param Base base constructor
 * @returns LayoutManager child class
 */
function basicLayoutManagerOverride(Base: LayoutManagerConstructor): LayoutManagerConstructor {
	/**
	 * @class LayoutManagerBasic
	 * This implementation is the fundamental
	 */
	return class LayoutManagerBasic extends Base implements LayoutManager {
		public layoutMapArray: LayoutManagerItem[] = [];

		public layoutContainer: HTMLElement = document.querySelector("#layout-container") as HTMLElement;
		/**
		 * @function applyLayoutSnapshot create a layout once per layout in a snapshot.
		 * @param snapshot layout snapshot
		 * @returns nothing
		 */

		public applyLayoutSnapshot = async ({ layouts }: OpenFin.LayoutSnapshot): Promise<void> => {
			console.log("Applying Layout Snapshot", JSON.stringify(layouts, null, 4));
			this.layoutMapArray = Object.keys(layouts).map((k) => ({ layoutName: k, layout: layouts[k] }));
			if (this.layoutContainer !== undefined) {
				for (const layoutItem of this.layoutMapArray) {
					await fin.Platform.Layout.create({
							container: this.layoutContainer,
							layout: layoutItem.layout,
							layoutName: layoutItem.layoutName
						});
				}
			}
		};

	/**
	 * The showLayout hook is called when a hidden layout receives a focus event or a notification event.
	 * @param layoutSnapshot layout snapshot item to show
	 * @param layoutSnapshot.layoutName the name of the layout to show
	 */
	// public async showLayout({ layoutName }: OpenFin.LayoutIdentity): Promise<void> {
	// 	if (layoutName) {
	// 		const { uuid, name } = fin.me.identity;
	// 		await this.showLayout({ layoutName, uuid, name });
	// 	}
	// }
};
}

/**
 * Setup window buttons
 * @param w the defaultWindow
 * @returns nothing.
 */
async function setupTitleBar(w: OpenFin.Window): Promise<void> {
	const title = document.querySelector("#title");
	const minBtn = document.querySelector("#minimize-button");
	const maxBtn = document.querySelector("#expand-button");
	const closeBtn = document.querySelector("#close-button");
	if (title && minBtn && maxBtn && closeBtn) {
		title.innerHTML = fin.me.identity.uuid;

		minBtn.addEventListener("click", async () => minimizeWindow(w));
		maxBtn.addEventListener("click", async () => maxOrRestore(w));
		closeBtn.addEventListener("click", async () => closeWindow(w));
	}
}

/**
 * Maximize or restore the window.
 * @param w the defaultWindow
 * @returns Nothing.
 */
async function maxOrRestore(w: OpenFin.Window): Promise<void> {
	if ((await w.getState()) === "normal") {
		return w.maximize();
	}

	return w.restore();
}

/**
 * Close the window.
 * @param w the defaultWindow
 * @returns Nothing.
 */
async function closeWindow(w: OpenFin.Window): Promise<void> {
	return w.close();
}

/**
 * Minimize the window.
 * @param w the defaultWindow
 * @returns Nothing.
 */
async function minimizeWindow(w: OpenFin.Window): Promise<void> {
	return w.minimize();
}
