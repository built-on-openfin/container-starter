import type OpenFin from "@openfin/core";

export const CONTAINER_ID = "layout-container";
const openfinWindow: OpenFin.Window = fin.Window.getCurrentSync();
const openfinApplication: OpenFin.Application = fin.Application.getCurrentSync();

let lastFocusedView: OpenFin.Identity;

openfinApplication
	.on("view-focused", (viewEvent): void => {
		lastFocusedView = viewEvent.viewIdentity;
	})
	.catch((error) => console.error(error));

window.addEventListener("DOMContentLoaded", async () => {
	await fin.Platform.Layout.init({ containerId: CONTAINER_ID });
	await setupTitleBar();
});

/**
 * Setup the content for the title bar.
 */
async function setupTitleBar(): Promise<void> {
	const printBtn = document.querySelector("#print-button");
	const minBtn = document.querySelector("#minimize-button");
	const maxBtn = document.querySelector("#expand-button");
	const closeBtn = document.querySelector("#close-button");

	if (printBtn && minBtn && maxBtn && closeBtn) {
		printBtn.addEventListener("click", printView);
		minBtn.addEventListener("click", minimizeWindow);
		maxBtn.addEventListener("click", maxOrRestore);
		closeBtn.addEventListener("click", closeWindow);
	}
}

/**
 * Print the view.
 */
async function printView(): Promise<void> {
	await openfinWindow.print({content: "views", includeSelf: false});
}
/**
 * Maximize or restore the window.
 * @returns Nothing.
 */
async function maxOrRestore(): Promise<void> {
	if ((await openfinWindow.getState()) === "normal") {
		return openfinWindow.maximize();
	}

	return openfinWindow.restore();
}

/**
 * Close the window.
 * @returns Nothing.
 */
async function closeWindow(): Promise<void> {
	return openfinWindow.close();
}

/**
 * Minimize the window.
 * @returns Nothing.
 */
async function minimizeWindow(): Promise<void> {
	return openfinWindow.minimize();
}
