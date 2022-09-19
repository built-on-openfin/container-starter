window.addEventListener("DOMContentLoaded", async () => {
	const me = fin.me as OpenFin.Window;
	const CONTAINER_ID = "layout-container";
	await fin.Platform.Layout.init({ containerId: CONTAINER_ID });

	const minimizeBtn = document.querySelector("#minimize-button");
	minimizeBtn.addEventListener("click", async () => {
		await me.minimize().catch(console.error);
	});

	const maximizeBtn = document.querySelector("#expand-button");
	maximizeBtn.addEventListener("click", async () => {
		await maxOrRestore().catch(console.error);
	});

	const closeBtn = document.querySelector("#close-button");
	closeBtn.addEventListener("click", async (e) => {
		await me.close();
	});

	async function maxOrRestore() {
		if ((await me.getState()) === "normal") {
			return me.maximize();
		}

		return me.restore();
	}
	const p = fin.Platform.getCurrentSync();
	await me.on("child-view-created", async (e) => {
		const viewOptions = { url: e.childOptions.url, target: fin.me.identity };
		await p.createView(viewOptions as OpenFin.PlatformViewCreationOptions, fin.me.identity);
	});

	await me.on("view-child-view-created", async (e) => {
		const viewOptions = { url: e.childOptions.url, target: fin.me.identity };
		await p.createView(viewOptions as OpenFin.PlatformViewCreationOptions, fin.me.identity);
	});
});
