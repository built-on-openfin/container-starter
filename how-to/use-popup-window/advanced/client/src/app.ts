export {};

document.addEventListener("DOMContentLoaded", init);

async function init(): Promise<void> {
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
	document.querySelector("#popup-result").textContent = JSON.stringify(result, undefined, 2);
}

function resetPopupResult(): void {
	document.querySelector("#popup-result").textContent = "No result";
}
