import type OpenFin from "@openfin/core";

window.addEventListener("DOMContentLoaded", async () => {
	await initDom();
});

/**
 * Initialize the DOM elements.
 */
async function initDom(): Promise<void> {
	const me = fin.me as OpenFin.Window;
	const CONTAINER_ID = "layout-container";
	await fin.Platform.Layout.init({ containerId: CONTAINER_ID });

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
