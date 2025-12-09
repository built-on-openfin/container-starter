document.addEventListener("DOMContentLoaded", async () => {
	try {
		await initDom();
	} catch (error) {
		console.error(error);
	}
});

/**
 * Initialize the DOM components.
 */
async function initDom(): Promise<void> {
	const btnPrint = document.querySelector("#btn-print");
	if (btnPrint) {
		btnPrint.addEventListener("click", async (e: Event) => printView());
	}
}

/**
 * Print the view.
 */
async function printView(): Promise<void> {
	try {
		const view = fin.View.getCurrentSync();
        console.log("view", view);
		await view.print({ content: "self" });
		console.log("Print call has been sent to the system");
	} catch (error) {
		console.error("Error printing view:", error);
	}
}

