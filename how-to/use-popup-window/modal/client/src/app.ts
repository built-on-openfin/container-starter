export {};

document.addEventListener("DOMContentLoaded", initDom);

/**
 * Initialize the DOM elements.
 */
function initDom(): void {
	const showPopupButton = document.querySelector("#btn-show-popup");
	if (showPopupButton) {
		showPopupButton.addEventListener("click", createPopupWindow);
	}
}

/**
 * Create the popup window from the click.
 */
async function createPopupWindow(): Promise<void> {
	const PARENT_FRAME_OFFSET = 64;
	resetPopupResult();
	const parentWindow = await (fin.me as OpenFin.View).getCurrentWindow();
	const { identity: modalParentIdentity } = parentWindow;
	const parentBounds = await parentWindow.getBounds();
	const qHeight = parentBounds.height / 4;
	const result = await fin.me.showPopupWindow({
		initialOptions: {
			modalParentIdentity
		},
		url: location.href.replace("app", "popup"),
		x: Math.floor(parentBounds.width / 8),
		y: Math.floor(parentBounds.height / 8) - PARENT_FRAME_OFFSET,
		height: Math.floor(parentBounds.height - qHeight),
		width: Math.floor(parentBounds.width - qHeight),
		blurBehavior: "modal"
	});
	renderPopupResult(result);
}

/**
 * Display the popup result.
 * @param result The result to display.
 */
function renderPopupResult(result: OpenFin.PopupResult): void {
	const res = document.querySelector("#popup-result");
	if (res) {
		res.textContent = JSON.stringify(result, undefined, 2);
	}
}

/**
 * Clear the popup result.
 */
function resetPopupResult(): void {
	const res = document.querySelector("#popup-result");
	if (res) {
		res.textContent = "No result";
	}
}
