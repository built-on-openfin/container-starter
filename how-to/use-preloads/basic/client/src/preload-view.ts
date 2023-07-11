if (window !== window.top) {
	console.log("We don't want to load execute when running in an iframe.");
} else if (document.readyState === "complete") {
	initViewPreload().catch(() => {});
} else {
	window.addEventListener("load", async () => {
		await initViewPreload();
	});
}

async function initViewPreload(): Promise<void> {
	console.log("View preload loaded.");
}
