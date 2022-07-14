import { fin } from "@openfin/core";

async function init(): Promise<void> {
	// create a channel to receive commands from external apps
	const actionChannel: OpenFin.ChannelProvider = await fin.InterApplicationBus.Channel.create(
		"platform-command"
	);

	actionChannel.onConnection((identity, payload) => {
		// on connection you can validate the identity and optionally specify that a payload to prove id needs to be passed
		// if you wanted to deny a connection you can throw an exception here
		console.log("Application connecting to action channel:", identity);
		console.log("Payload passed by connecting application:", payload);
	});

	// an example of a command you wish to expose.
	// alternatively you could have a single command function exposed which could have an action type
	actionChannel.register(
		"createView",
		async (
			payload: { target: { window?: string; view?: string }; viewOptions: OpenFin.ViewOptions },
			identity
		) => {
			// there would likely be validation and additional logic here.
			const platform: OpenFin.Platform = fin.Platform.getCurrentSync();
			let targetWindow: OpenFin.Identity;
			let targetView: OpenFin.Identity;
			const viewOptions = { target: undefined } as OpenFin.ViewOptions;
			Object.assign(viewOptions, payload.viewOptions);

			if (payload.target?.window !== undefined) {
				targetWindow = { uuid: fin.me.identity.uuid, name: payload.target.window };
			}

			if (payload.target?.view !== undefined) {
				targetView = { uuid: fin.me.identity.uuid, name: payload.target.view };
			}

			const createdView = await platform.createView(viewOptions, targetWindow, targetView);
			const currentWindow = await createdView.getCurrentWindow();

			if (currentWindow.identity.name === undefined || currentWindow.identity.name === fin.me.identity.uuid) {
				const windowAllocation = new Promise<{ view: string; window: string }>((resolve, reject) => {
					createdView
						.once("target-changed", async () => {
							const hostWindow = await createdView.getCurrentWindow();
							resolve({
								view: createdView.identity.name,
								window: hostWindow.identity.name
							});
						})
						.catch(() => {});
				});

				return windowAllocation;
			}
			return {
				view: createdView.identity.name,
				window: currentWindow.identity.name
			};
		}
	);
}

window.addEventListener("DOMContentLoaded", async () => {
	const platform: OpenFin.Platform = fin.Platform.getCurrentSync();
	await platform.once("platform-api-ready", async () => init());
});

fin.Platform.init({
	overrideCallback: async (Provider) => {
		class Override extends Provider {}
		return new Override();
	}
}).catch(() => {});
