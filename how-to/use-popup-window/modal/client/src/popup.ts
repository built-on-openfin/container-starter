import { fin } from "@openfin/core";

const me = fin.me as OpenFin.Window;

document.addEventListener("DOMContentLoaded", init);

function init() {
	const okButton = document.querySelector("#btn-ok");
	const confirmButton = document.querySelector("#btn-confirm");
	const cancelButton = document.querySelector("#btn-cancel");

	okButton.addEventListener("click", async () => {
		await me.dispatchPopupResult("ok");
	});

	confirmButton.addEventListener("click", async () => {
		await me.dispatchPopupResult("confirm");
	});

	cancelButton.addEventListener("click", async () => {
		await me.dispatchPopupResult("cancel");
	});
}
