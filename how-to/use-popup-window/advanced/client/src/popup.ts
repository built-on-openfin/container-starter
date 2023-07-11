export {};

const me = fin.me as OpenFin.Window;

document.addEventListener("DOMContentLoaded", init);

async function init(): Promise<void> {
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

	await renderShownDate();
	await me.on("shown", renderShownDate);
}

async function renderShownDate(): Promise<void> {
	const shownDateEl = document.querySelector("#shown-date");
	const { customData } = await me.getOptions();
	const { shownAsPopup }: { shownAsPopup: number } = customData;
	if (shownDateEl) {
		shownDateEl.textContent = new Date(shownAsPopup).toTimeString();
	}
}
