document.addEventListener("DOMContentLoaded", () => {
	const params = new URLSearchParams(window.location.search);
	const viewTitle = params.get("title");
	const viewHeader = document.querySelector("#view-title");
	const testInput = document.querySelector("#test-input");

	document.title = viewTitle;
	viewHeader.innerHTML = viewTitle;

	testInput.addEventListener("input", (event) => {
		if ((event.target as HTMLTextAreaElement).value !== "") {
			window.addEventListener("beforeunload", beforeUnloadListener);
		} else {
			window.removeEventListener("beforeunload", beforeUnloadListener);
		}
	});
});

function beforeUnloadListener(e) {
	e.preventDefault();
	e.returnValue = "";
}
