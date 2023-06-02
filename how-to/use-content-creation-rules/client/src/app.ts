document.addEventListener("DOMContentLoaded", async () => {
	const openView = document.querySelector("#open-view");
	openView.addEventListener("click", (e) => {
		window.open("https://www.google.com");
	});

	const openViewTarget = document.querySelector("#open-view-target");
	const viewTargets = [
		"https://www.examples.com/category/business/advertising",
		"https://www.examples.com/category/business/agenda",
		"https://www.examples.com/category/business/agreement"
	];

	let viewTargetIndex = 0;
	openViewTarget.addEventListener("click", (e) => {
		window.open(viewTargets[viewTargetIndex++ % viewTargets.length], "examples");
	});

	const openWindow = document.querySelector("#open-window");
	openWindow.addEventListener("click", (e) => {
		window.open("https://www.bing.com");
	});

	const openWindowTarget = document.querySelector("#open-window-target");
	const windowTargets = [
		"https://www.examples.com/category/education/case-study",
		"https://www.examples.com/category/education/essays",
		"https://www.examples.com/category/education/finance"
	];

	let windowTargetIndex = 0;
	openWindowTarget.addEventListener("click", (e) => {
		window.open(windowTargets[windowTargetIndex++ % windowTargets.length], "examples2");
	});

	const openBrowser = document.querySelector("#open-browser");
	openBrowser.addEventListener("click", (e) => {
		window.open("https://www.microsoft.com");
	});

	const openBlocked = document.querySelector("#open-blocked");
	openBlocked.addEventListener("click", (e) => {
		window.open("https://www.apple.com");
	});
});
