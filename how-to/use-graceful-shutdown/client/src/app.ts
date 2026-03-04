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
			"Shutdown handler registered in provider. Close the window, then check the OpenFin log for \"Graceful shutdown: before-unload ran (window close)\".";
		statusEl.classList.add("status-ok");
	}
}
