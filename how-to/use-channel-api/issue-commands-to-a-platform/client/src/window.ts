export {};

document.addEventListener("DOMContentLoaded", async () => {
	try {
		await initDom();
	} catch (error) {
		console.error(error);
	}
});

let lastCreatedView:
	| {
			view: string;
			window: string;
	  }
	| undefined;
let channelClient: OpenFin.ChannelClient;

/**
 * Initialize the DOM elements.
 */
async function initDom(): Promise<void> {
	const launchPlatformButton = document.querySelector("#launch-platform");
	const requestViewButton = document.querySelector("#request-view");
	const requestViewInSameWindowButton = document.querySelector("#request-view-same-window");
	if (launchPlatformButton) {
		launchPlatformButton.addEventListener("click", launchPlatform);
	}
	if (requestViewButton) {
		requestViewButton.addEventListener("click", requestView);
	}
	if (requestViewInSameWindowButton) {
		requestViewInSameWindowButton.addEventListener("click", requestViewInLastWindow);
	}
}

/**
 * Launch a platform from a manifest.
 */
async function launchPlatform(): Promise<void> {
	try {
		await fin.System.launchManifest("http://localhost:5050/platform.fin.json");
	} catch (error) {
		console.error("Error launching target platform app:", error);
	}
	try {
		channelClient = await fin.InterApplicationBus.Channel.connect("platform-command", {
			payload: { token: "an example token" }
		});
	} catch (error) {
		console.error("Error launching target platform app:", error);
	}
}

/**
 * Create a view using a channel.
 */
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

/**
 * Create a view using a channel with a specific target.
 */
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
