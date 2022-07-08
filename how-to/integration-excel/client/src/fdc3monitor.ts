import { getCurrentChannel } from "@finos/fdc3";

document.addEventListener("DOMContentLoaded", async () => {
	try {
		await init();
	} catch (error) {
		console.error(error);
	}
});

async function init(): Promise<void> {
	try {
		const appChannel = await getCurrentChannel();

		appChannel.addContextListener(null, (ctx) => {
			if (ctx.type === "fdc3.instrument") {
				const receiveElement = document.querySelector<HTMLInputElement>("#received-instrument");
				receiveElement.value = ctx.id.ticker;
			}
		});
	} catch (err) {
		showError(err);
	}
}

function showError(err) {
	const errDom = document.querySelector("#error");
	errDom.innerHTML = err.message;
}
