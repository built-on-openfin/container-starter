export {};

const me = fin.me as OpenFin.Window;

document.addEventListener("DOMContentLoaded", initDom);

/**
 * Initialize the DOM elements.
 */
function initDom(): void {
	const okButton = document.querySelector("#btn-ok");
	const confirmButton = document.querySelector("#btn-confirm");
	const cancelButton = document.querySelector("#btn-cancel");

	if (okButton) {
		okButton.addEventListener("click", async () => {
			await me.dispatchPopupResult("ok");
		});
	}

	if (confirmButton) {
		confirmButton.addEventListener("click", async () => {
			await me.dispatchPopupResult("confirm");
		});
	}

	if (cancelButton) {
		cancelButton.addEventListener("click", async () => {
			await me.dispatchPopupResult("cancel");
		});
	}
}
