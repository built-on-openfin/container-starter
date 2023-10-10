import type OpenFin from "@openfin/core";

window.addEventListener("DOMContentLoaded", async () => {
	const platform: OpenFin.Platform = fin.Platform.getCurrentSync();
	await platform.once("platform-api-ready", async () => initDom());
});

fin.Platform.init().catch(() => {});

/**
 * Initialize the DOM elements.
 */
async function initDom(): Promise<void> {
	console.log("Platform Init");
}
