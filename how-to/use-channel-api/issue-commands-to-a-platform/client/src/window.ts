import { fin } from "@openfin/core";

document.addEventListener("DOMContentLoaded", async () => {
	try {
		await init();
	} catch (error) {
		console.error(error);
	}
});

let lastCreatedView;
let channelClient: OpenFin.ChannelClient;

async function init(): Promise<void> {
	const launchPlatformButton = document.querySelector("#launch-platform");
	const requestViewButton = document.querySelector("#request-view");
	const requestViewInSameWindowButton = document.querySelector("#request-view-same-window");
	launchPlatformButton.addEventListener("click", launchPlatform);
	requestViewButton.addEventListener("click", requestView);
	requestViewInSameWindowButton.addEventListener("click", requestViewInLastWindow);
}

async function launchPlatform(): Promise<void> {
	try {
		await fin.System.launchManifest("http://localhost:5050/platform.fin.json");
		channelClient = await fin.InterApplicationBus.Channel.connect("platform-command", {
			payload: { token: "an example token" }
		});
	} catch (error) {
		console.error("Error launching target platform app:", error);
	}
}

async function requestView(): Promise<void> {
	try {
		// you have the option of letting the connected app to provide view options or maybe you will provide a more restrictive option where they can just specify an id of a view to load
		// and the platform app does a lookup.
		lastCreatedView = await channelClient.dispatch("createView", {
			viewOptions: {
				url: "http://localhost:5050/html/app.html",
				customData: {
					dateNow: Date.now()
				}
			}
		});
	} catch (error) {
		console.error("Error issuing command to platform:", error);
	}
}

async function requestViewInLastWindow(): Promise<void> {
	try {
		// you have the option of letting the connected app to provide view options or maybe you will provide a more restrictive option where they can just specify an id of a view to load
		// and the platform app does a lookup.
		lastCreatedView = await channelClient.dispatch("createView", {
			viewOptions: {
				url: "http://localhost:5050/html/app.html",
				customData: {
					dateNow: Date.now()
				}
			},
			target: lastCreatedView
		});
	} catch (error) {
		console.error("Error issuing command to platform:", error);
	}
}
