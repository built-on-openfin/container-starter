document.addEventListener("DOMContentLoaded", () => {
	const params = new URLSearchParams(window.location.search);
	const viewTitle = params.get("title");
	const viewHeader = document.querySelector("#view-title");
	const testInput = document.querySelector("#test-input");

	if (document && viewTitle) {
		document.title = viewTitle;
	}
	if (viewHeader && viewTitle) {
		viewHeader.textContent = viewTitle;
	}

	if (testInput) {
		testInput.addEventListener("input", (event) => {
			if ((event.target as HTMLInputElement).value !== "") {
				window.addEventListener("beforeunload", beforeUnloadListener);
			} else {
				window.removeEventListener("beforeunload", beforeUnloadListener);
			}
		});
	}
});

/**
 * Handle the before unload listener.
 * @param e The event to handle.
 */
function beforeUnloadListener(e: Event): void {
	e.preventDefault();
}
