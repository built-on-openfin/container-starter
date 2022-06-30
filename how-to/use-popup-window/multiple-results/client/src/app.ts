import { fin } from "@openfin/core";

document.addEventListener("DOMContentLoaded", init);

function init() {
	const showPopupButton = document.querySelector<HTMLButtonElement>("#btn-show-popup");
	showPopupButton.addEventListener("click", createPopupWindow);
}

async function createPopupWindow(event): Promise<void> {
	resetPopupResult();
	const { right, height }: { right: number; height: number } = event.target.getBoundingClientRect();
	const hHeight = height / 2;
	const result = await fin.me.showPopupWindow({
		initialOptions: {
			customData: await fin.me.interop.getContextGroups()
		},
		url: location.href.replace("app", "popup"),
		x: right + 5,
		y: Math.round(hHeight + 15),
		height: 30,
		width: 250,
		resultDispatchBehavior: "none",
		onPopupResult: (popupResult) => {
			renderPopupResult(popupResult);
		}
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
