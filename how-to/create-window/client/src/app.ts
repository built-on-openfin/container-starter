import { fin } from "@openfin/core";

document.addEventListener("DOMContentLoaded", async () => {
	try {
		await init();
	} catch (error) {
		console.error(error);
	}
});

async function openDynamicApplicationWindow() {
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

async function openManifestApplicationWindow() {
	fin.Application.startFromManifest("http://localhost:5050/app.fin.json")
		.then((app) => console.log("App is running"))
		.catch((err) => console.log(err));
}

async function init(): Promise<void> {
	const btn = document.querySelector("#btn-open-dynamic-window");
	btn.addEventListener("click", async (e: Event) => openDynamicApplicationWindow());
	const btn1 = document.querySelector("#btn-open-manifest-window");
	btn1.addEventListener("click", async (e: Event) => openManifestApplicationWindow());
}
