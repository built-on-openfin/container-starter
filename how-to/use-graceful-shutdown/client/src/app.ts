document.addEventListener("DOMContentLoaded", () => {
	initDom().catch((error) => console.error(error));
});

/**
 * Initialize the DOM. The shutdown handler is registered in the platform provider (provider.html).
 */
async function initDom(): Promise<void> {
	const statusEl = document.querySelector<HTMLElement>("#status");
	if (statusEl) {
		statusEl.textContent =
			"Shutdown handler registered in provider. Close the app and check the OpenFin log (e.g. debug.log) for \"Shutdown handler ran\".";
		statusEl.classList.add("status-ok");
	}
}
