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
		btnCheckForDevices.addEventListener("click", checkForUsbDevices);
	}
}

/**
 * Checks to see what devices to connect.
 */
async function requestDevice(): Promise<void> {
	await navigator.usb.requestDevice({ filters: [{ vendorId: 1133, productId: 2140 }] });
	const list = await navigator.usb.getDevices();
	console.log(list);
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

/**
 * Use the usb.getDevices method to get a list of connected devices.
 */
async function checkForUsbDevices(): Promise<void> {
	await requestDevice();
	// Get all connected USB devices the website has been granted access to.
	// if ("usb" in navigator) {
	// 	const usb = navigator.usb;
	// 	await usb.getDevices()
	// 	.then((devices) => {
	// 		if (devices.length > 0) {
	// 			console.log(`There are ${devices.length} detected USB devices.`);
	// 			for (const device of devices) {
	// 				console.log(device.productName); // "Arduino Micro"
	// 				console.log(device.manufacturerName); // "Arduino LLC"
	// 			}
	// 		} else {
	// 			console.log("There are no detected USB devices.");
	// 		}
	// 		return true;
	// 	})
	// 	.catch((error) => {
	// 		console.error(error);
	// 	});
	// } else {
	// 	console.log("There is no USB detection on the Navigator window object for this browser.");
	// }
}

/**
 *
 */
// function addDeviceToList() {
	
// }
