document.addEventListener("DOMContentLoaded", async () => {
	const openView = document.querySelector("#open-view");
	openView.addEventListener("click", (e) => {
		const win = window.open("https://www.google.com");
		logWindowResult(win);
	});

	const openViewTarget = document.querySelector("#open-view-target");
	const viewTargets = [
		"https://www.examples.com/category/business/advertising",
		"https://www.examples.com/category/business/agenda",
		"https://www.examples.com/category/business/agreement"
	];

	let viewTargetIndex = 0;
	openViewTarget.addEventListener("click", (e) => {
		const win = window.open(viewTargets[viewTargetIndex++ % viewTargets.length], "examples", "blah=foo");
		logWindowResult(win);
	});

	const openWindow = document.querySelector("#open-window");
	openWindow.addEventListener("click", (e) => {
		const win = window.open("https://www.bing.com");
		logWindowResult(win);
	});

	const openWindowTarget = document.querySelector("#open-window-target");
	const windowTargets = [
		"https://www.examples.com/category/education/case-study",
		"https://www.examples.com/category/education/essays",
		"https://www.examples.com/category/education/finance"
	];

	let windowTargetIndex = 0;
	openWindowTarget.addEventListener("click", (e) => {
		const win = window.open(windowTargets[windowTargetIndex++ % windowTargets.length], "examples2");
		logWindowResult(win);
	});

	const openBrowser = document.querySelector("#open-browser");
	openBrowser.addEventListener("click", (e) => {
		const win = window.open("https://www.microsoft.com");
		logWindowResult(win);
	});

	const openBlocked = document.querySelector("#open-blocked");
	openBlocked.addEventListener("click", (e) => {
		const win = window.open("https://www.apple.com");
		logWindowResult(win);
	});
});

function logWindowResult(win: WindowProxy): void {
	try {
		win.addEventListener("DOMContentLoaded", () => {
			console.log("Window Location", win.location);
		});
	} catch (err) {
		console.error("Error logging window results", err);
	}
}
