export {};

async function initApp(): Promise<void> {
	const container = document.querySelector("#context-container");
	const viewOptions = await fin.me.getOptions();
	container.textContent = JSON.stringify(viewOptions.customData);
}

if (document.readyState === "complete") {
	initApp().catch(() => {});
} else {
	window.addEventListener("load", async () => {
		await initApp();
	});
}
