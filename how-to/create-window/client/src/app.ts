document.addEventListener("DOMContentLoaded", async () => {
	try {
		await init();
	} catch (error) {
		console.error(error);
	}
});

async function openDynamicApplicationWindow(): Promise<OpenFin.Window> {
	const winOption = {
		name: "child",
		defaultWidth: 800,
		defaultHeight: 800,
		url: "https://cdn.openfin.co/docs/javascript/stable/tutorial-Window.create.html",
		frame: true,
		autoShow: true
	};
	return fin.Window.create(winOption);
}

async function openManifestApplicationWindow(): Promise<void> {
	try {
		await fin.Application.startFromManifest("http://localhost:5050/app.fin.json");
		console.log("App is running");
	} catch (err) {
		console.error(err);
	}
}

async function openDataWindow(): Promise<OpenFin.Window> {
	const winOption = {
		name: "child-data",
		defaultWidth: 800,
		defaultHeight: 800,
		url: "http://localhost:5050/html/window.html",
		frame: true,
		autoShow: true,
		customData: {
			dateNow: Date.now()
		}
	};
	return fin.Window.create(winOption);
}

async function openDataPlatformWindow(): Promise<void> {
	const viewOption: OpenFin.PlatformViewCreationOptions = {
		name: "childview-data",
		url: "http://localhost:5050/html/window.html",
		customData: {
			dateNow: Date.now()
		}
	} as OpenFin.PlatformViewCreationOptions;
	await fin.Platform.getCurrentSync().createView(viewOption);
}

async function init(): Promise<void> {
	const btnOpenDynamicWindow = document.querySelector("#btn-open-dynamic-window");
	if (btnOpenDynamicWindow) {
		btnOpenDynamicWindow.addEventListener("click", async (e: Event) => openDynamicApplicationWindow());
	}

	const btnOpenManifestWindow = document.querySelector("#btn-open-manifest-window");
	if (btnOpenManifestWindow) {
		btnOpenManifestWindow.addEventListener("click", async (e: Event) => openManifestApplicationWindow());
	}

	const btnOpenDataWindow = document.querySelector("#btn-open-data-window");
	if (btnOpenDataWindow) {
		btnOpenDataWindow.addEventListener("click", async (e: Event) => openDataWindow());
	}

	const btnOpenDataPlatformWindow = document.querySelector("#btn-open-data-platform-window");
	if (btnOpenDataPlatformWindow) {
		btnOpenDataPlatformWindow.addEventListener("click", openDataPlatformWindow);
	}
}
