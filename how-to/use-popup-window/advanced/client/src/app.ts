import { fin } from "@openfin/core";

document.addEventListener("DOMContentLoaded", init);

async function init() {
	// provision about:blank window to later show as popup
	await fin.Window.create({ name: "popup", autoShow: false });
	const showPopupButton = document.querySelector("#btn-show-popup");
	showPopupButton.addEventListener("click", createPopupWindow);
}

async function createPopupWindow(event): Promise<void> {
	resetPopupResult();
	const { top, right, height }: { top: number; right: number; height: number } =
		event.target.getBoundingClientRect();
	const hHeight = height / 2;
	const result = await fin.me.showPopupWindow({
		name: "popup",
		additionalOptions: {
			customData: {
				shownAsPopup: Date.now()
			}
		},
		url: location.href.replace("app", "popup"),
		x: right + 6,
		y: Math.round(top + hHeight),
		height: 150,
		width: 300,
		hideOnClose: true
	});
	renderPopupResult(result);
}

function renderPopupResult(result: OpenFin.PopupResult): void {
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
