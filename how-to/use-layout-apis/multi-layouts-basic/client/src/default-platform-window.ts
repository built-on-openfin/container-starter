import type OpenFin from "@openfin/core";

document.addEventListener("DOMContentLoaded", async () => {
	await fin.Platform.getCurrentSync().once("platform-api-ready", async () => {
		await initDom();
	});
});

/**
 * Initialize the DOM elements.
 */
async function initDom(): Promise<void> {
	// const platform = fin.Platform.getCurrentSync();
	const me = fin.me as OpenFin.Window;
	// Get the default layout
	const layoutSnapshot = await getDefaultLayout();

	if (layoutSnapshot === undefined) {
		console.error("Unable to run the sample as we have been unable to load the default snapshot.");
		return;
	}
	// Get the dom element that should host the layout
	const layoutContainer = document.querySelector<HTMLElement>("#layout_container");
	if (layoutContainer === null) {
		console.error(
			"Please ensure the document has an element with the following id #layout_container so that the web-layout can be applied."
		);
		return;
	}
	await fin.Platform.Layout.init({
		container: layoutContainer
	});

	const minimizeBtn = document.querySelector("#minimize-button");
	if (minimizeBtn) {
		minimizeBtn.addEventListener("click", async () => {
			await me.minimize().catch(console.error);
		});
	}

	const maximizeBtn = document.querySelector("#expand-button");
	if (maximizeBtn) {
		maximizeBtn.addEventListener("click", async () => {
			await maxOrRestore(me).catch(console.error);
		});
	}

	const closeBtn = document.querySelector("#close-button");
	if (closeBtn) {
		closeBtn.addEventListener("click", async (e) => {
			await me.close();
		});
	}

	/**
	 * Maximize of restore the window.
	 * @param win The window to perform the action on.
	 * @returns Nothing.
	 */
	async function maxOrRestore(win: OpenFin.Window): Promise<void> {
		if ((await win.getState()) === "normal") {
			return win.maximize();
		}

		return win.restore();
	}
}

/**
 * Gets the default layout for this app.
 * @returns The default layout for this app.
 */
async function getDefaultLayout(): Promise<OpenFin.LayoutSnapshot> {
	const layoutResponse = await fetch("http://localhost:5050/layouts/default.layout.fin.json");
	const layoutJson = (await layoutResponse.json()) as OpenFin.LayoutSnapshot;
	return layoutJson;
}
