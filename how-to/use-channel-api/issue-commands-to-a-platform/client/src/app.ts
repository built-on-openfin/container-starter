import { fin } from "@openfin/core";

const me = fin.me as OpenFin.View;

async function initApp(): Promise<void> {
	const container = document.querySelector("#context-container");
	const viewOptions = await me.getOptions();
	container.textContent = JSON.stringify(viewOptions.customData);
}

if (document.readyState === "complete") {
	initApp().catch(() => {});
} else {
	window.addEventListener("load", async () => {
		await initApp();
	});
}
