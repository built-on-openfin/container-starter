document.addEventListener("DOMContentLoaded", () => {
	const params = new URLSearchParams(window.location.search);
	const viewTitle = params.get("title");
	const viewHeader = document.querySelector("#view-title");
	const testInput = document.querySelector("#test-input");

	if (document && viewTitle) {
		document.title = viewTitle;
	}
	if (viewHeader && viewTitle) {
		viewHeader.innerHTML = viewTitle;
	}

	if (testInput) {
		testInput.addEventListener("input", (event) => {
			if ((event.target as HTMLTextAreaElement).value !== "") {
				window.addEventListener("beforeunload", beforeUnloadListener);
			} else {
				window.removeEventListener("beforeunload", beforeUnloadListener);
			}
		});
	}
});

function beforeUnloadListener(e: Event): void {
	e.preventDefault();
}
