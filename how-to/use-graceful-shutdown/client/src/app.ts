document.addEventListener("DOMContentLoaded", () => {
	const statusEl = document.querySelector<HTMLElement>("#status");
	if (statusEl) {
		statusEl.textContent = "Shutdown handler is registered in the provider. Close the app and check the log.";
		statusEl.classList.add("status-ok");
	}
});
