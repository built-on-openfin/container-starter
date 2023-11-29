import type OpenFin from "@openfin/core";

document.addEventListener("DOMContentLoaded", initDom);

/**
 * Initialize the DOM elements.
 */
function initDom(): void {
	const showPopupButton = document.querySelector<HTMLButtonElement>("#btn-show-popup");
	if (showPopupButton) {
		showPopupButton.addEventListener("click", createPopupWindow);
	}
}

/**
 * Create the popup window from the click.
 * @param event The event to handle.
 */
async function createPopupWindow(event: MouseEvent): Promise<void> {
	resetPopupResult();
	const { right, height }: { right: number; height: number } = (
		event.target as HTMLElement
	).getBoundingClientRect();
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
		res.textContent = "";
	}
}
