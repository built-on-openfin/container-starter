export {};

window.addEventListener("DOMContentLoaded", async () => {
	const platform: OpenFin.Platform = fin.Platform.getCurrentSync();
	await platform.once("platform-api-ready", async () => init());
});

fin.Platform.init().catch(() => {});

async function init(): Promise<void> {
	console.log("Platform Init");
}
