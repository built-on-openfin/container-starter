import { fin } from "@openfin/core";

async function init(): Promise<void> {
	console.log("Platform Init");
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
