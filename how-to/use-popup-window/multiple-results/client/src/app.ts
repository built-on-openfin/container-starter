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
	document.querySelector("#popup-result").textContent = JSON.stringify(result, undefined, 2);
}

function resetPopupResult(): void {
	document.querySelector("#popup-result").textContent = "";
}
