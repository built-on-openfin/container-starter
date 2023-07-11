if (window !== window.top) {
	console.log("We don't want to load execute when running in an iframe.");
} else if (document.readyState === "complete") {
	initWindowPreload();
} else {
	window.addEventListener("load", () => {
		initWindowPreload();
	});
}

function initWindowPreload(): void {
	console.log("Window preload loaded.");
}
