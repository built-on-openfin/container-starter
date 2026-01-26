import type OpenFin from "@openfin/core";
document.addEventListener("DOMContentLoaded", async () => {
	await fin.Platform.init({
		overrideCallback: async (Provider) => {
			/**
			 * Override the provider class.
			 */
			class Override extends Provider {
				// eslint-disable-next-line @typescript-eslint/explicit-function-return-type

				// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, jsdoc/require-jsdoc
				public async createWindow(
					options: OpenFin.PlatformWindowCreationOptions,
					callerIdentity: { uuid: string; name: string } | undefined
				) {
					console.log("createWindow called", options, callerIdentity);
					// default behavior for all other creation reasons
					const win = await super.createWindow(options, callerIdentity);
					console.log("createWindow completed", win.identity.name);
					return win;
				}
			}
			return new Override();
		}
	});
	const platform = fin.Platform.getCurrentSync();

	const launchOneBtn: HTMLButtonElement = document.querySelector("#launch-one") as HTMLButtonElement;
	const launchTenBtn: HTMLButtonElement = document.querySelector("#launch-ten") as HTMLButtonElement;
	const launchTwentyBtn: HTMLButtonElement = document.querySelector("#launch-twenty") as HTMLButtonElement;
	const baseUrl = "http://localhost:5050";
	const url: HTMLInputElement = document.querySelector("#url") as HTMLInputElement;
	await platform.on("window-created", async (event) => {
		console.log("Window created", event);
	});
	await platform.on("window-did-start-loading", async (event) => {
		console.log("Window did start loading", event);
	});
	await platform.on("window-did-finish-load", async (event) => {
		console.log("Window did finish load", event);
	});
	await platform.on("window-end-load", async (event) => {
		console.log("Window end load", event);
	});
	await platform.on("window-initialized", async (event) => {
		console.log("Window initialized", event);
	});
	await platform.on("window-performance-report", async (event) => {
		console.log("Window performance report", event);
	});
	await platform.on("window-start-load", async (event) => {
		console.log("Window start load", event);
	});

	if (launchOneBtn || launchTenBtn || launchTwentyBtn) {
		launchOneBtn.addEventListener("click", async () => {
			const snapshot = await fetch(`${baseUrl}/common/snapshots/snapshot-one.json`);
			if (url.value.trim() === "") {
				const payload = await snapshot.json();
				await platform.applySnapshot(payload);
			} else {
				const snapshotJson = await snapshot.text();
				const snapshotString = snapshotJson.replace(/about:blank/g, url.value.trim());
				await platform.applySnapshot(JSON.parse(snapshotString));
			}
		});
		launchTenBtn.addEventListener("click", async () => {
			const snapshot = await fetch(`${baseUrl}/common/snapshots/snapshot-ten.json`);
			if (url.value.trim() === "") {
				const payload = await snapshot.json();
				await platform.applySnapshot(payload);
			} else {
				const snapshotJson = await snapshot.text();
				const snapshotString = snapshotJson.replace(/about:blank/g, url.value.trim());
				await platform.applySnapshot(JSON.parse(snapshotString));
			}
		});
		launchTwentyBtn.addEventListener("click", async () => {
			const snapshot = await fetch(`${baseUrl}/common/snapshots/snapshot-twenty.json`);
			if (url.value.trim() === "") {
				const payload = await snapshot.json();
				await platform.applySnapshot(payload);
			} else {
				const snapshotJson = await snapshot.text();
				const snapshotString = snapshotJson.replace(/about:blank/g, url.value.trim());
				await platform.applySnapshot(JSON.parse(snapshotString));
			}
		});
	}
});
