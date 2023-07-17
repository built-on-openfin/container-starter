if (window !== window.top) {
	console.log("We don't want to load execute when running in an iframe.");
} else if (document.readyState === "complete") {
	initPlatformPreload();
} else {
	window.addEventListener("load", () => {
		initPlatformPreload();
	});
}

/**
 * Initialize the platform preload.
 */
function initPlatformPreload(): void {
	console.log("Platform preload loaded.");
}
