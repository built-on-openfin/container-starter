export {};

document.addEventListener("DOMContentLoaded", init);

async function init(): Promise<void> {
	// provision about:blank window to later show as popup
	await fin.Window.create({ name: "popup", autoShow: false });
	const showPopupButton = document.querySelector<HTMLButtonElement>("#btn-show-popup");
	if (showPopupButton) {
		showPopupButton.addEventListener("click", createPopupWindow);
	}
}

async function createPopupWindow(event: MouseEvent): Promise<void> {
	resetPopupResult();
	const { top, right, height }: { top: number; right: number; height: number } = (
		event.target as HTMLElement
	).getBoundingClientRect();
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
	const res = document.querySelector("#popup-result");
	if (res) {
		res.textContent = JSON.stringify(result, undefined, 2);
	}
}

function resetPopupResult(): void {
	const res = document.querySelector("#popup-result");
	if (res) {
		res.textContent = "No result";
	}
}
