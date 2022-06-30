import { fin } from "@openfin/core";

document.addEventListener("DOMContentLoaded", init);

function init() {
	const showPopupButton = document.querySelector("#btn-show-popup");
	showPopupButton.addEventListener("click", createPopupWindow);
}

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

function renderPopupResult(result: OpenFin.PopupResult): void {
	resetPopupResult();
	const resultEl = document.createElement("pre");
	resultEl.textContent = JSON.stringify(result, null, 2);
	document.querySelector("#popup-result").append(resultEl);
}

function resetPopupResult(): void {
	const popupResultEl = document.querySelector("#popup-result");
	if (popupResultEl.firstChild) {
		popupResultEl.firstChild.remove();
	}
}
