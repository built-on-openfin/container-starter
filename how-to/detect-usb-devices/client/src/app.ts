import type OpenFin from "@openfin/core";

document.addEventListener("DOMContentLoaded", async () => {
	try {
		await initDom();
	} catch (error) {
		console.error(error);
	}
});

/**
 * Initialize the DOM components.
 */
async function initDom(): Promise<void> {
	const btnOpenDynamicWindow = document.querySelector("#btn-open-dynamic-window");
	if (btnOpenDynamicWindow) {
		btnOpenDynamicWindow.addEventListener("click", async (e: Event) => openDynamicApplicationWindow());
	}

	const btnCheckForDevices = document.querySelector("#btn-check-for-usb-devices");
	if (btnCheckForDevices) {
		btnCheckForDevices.addEventListener("click", async (e: Event) => requestDevice());
	}
}

/**
 * Checks to see what devices to connect.
 */
async function requestDevice(): Promise<void> {
	await navigator.usb.requestDevice({ filters: [{ vendorId: 3034, productId: 21783 }] });
	const list = await navigator.usb.getDevices();

	const deviceList = document.querySelector("#devices-list");
	if (deviceList) {
		for (const item of list) {
			const itemElement = document.createElement("li");
			const product = item.productName ?? "";
			const manufacturer = item.manufacturerName ?? "";
			itemElement.textContent = `${manufacturer} : ${product}`;
			deviceList.append(itemElement);
		}
	}
}


/**
 * Open a window using dynamic options.
 * @returns The window.
 */
async function openDynamicApplicationWindow(): Promise<OpenFin.Window> {
	const winOption = {
		name: "child",
		defaultWidth: 800,
		defaultHeight: 800,
		url: "https://developers.openfin.co/of-docs/docs/connect-usb-hid#find-all-connected-devices",
		frame: true,
		autoShow: true
	};
	return fin.Window.create(winOption);
}

