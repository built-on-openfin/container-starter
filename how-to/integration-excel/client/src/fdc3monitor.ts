import { getCurrentChannel } from "@finos/fdc3";

document.addEventListener("DOMContentLoaded", async () => {
	try {
		await initDom();
	} catch (error) {
		console.error(error);
	}
});

/**
 * Initialize the DOM elements.
 */
async function initDom(): Promise<void> {
	try {
		const appChannel = await getCurrentChannel();

		if (appChannel) {
			await appChannel.addContextListener(null, (ctx) => {
				if (ctx.type === "fdc3.instrument") {
					const receiveElement = document.querySelector<HTMLInputElement>("#received-instrument");
					if (receiveElement) {
						receiveElement.value = ctx.id?.ticker;
					}
				}
			});
		}
	} catch (err) {
		showError(err);
	}
}

/**
 * Show an error on the UI.
 * @param err The error to display.
 */
function showError(err: unknown): void {
	const errDom = document.querySelector("#error");
	if (errDom) {
		errDom.innerHTML = err instanceof Error ? err.message : JSON.stringify(err);
	}
}
