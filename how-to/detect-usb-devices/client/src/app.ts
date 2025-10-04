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

	const btnCheckForDevices = document.querySelector("#btn-identify-device");
	if (btnCheckForDevices) {
		btnCheckForDevices.addEventListener("click", async (e: Event) => requestDevice());
	}

	const btnConnectDevice = document.querySelector("#btn-connect-device");
	if (btnConnectDevice) {
		btnConnectDevice.addEventListener("click", async (e: Event) => connectDevice());
	}
	await listenForDeviceInfo();
}

async function connectDevice(): Promise<OpenFin.Window | undefined> {
	const vendorIdInput = document.getElementById("vendorId") as HTMLInputElement;
	const productIdInput = document.getElementById("productId") as HTMLInputElement;

	const vendorId = parseInt(vendorIdInput.value, 10);
	const productId = parseInt(productIdInput.value, 10);

	if (isNaN(vendorId) || isNaN(productId)) {
		alert("Please enter valid numeric values for Vendor ID and Product ID.");
		return;
	}

	try {
		// Here you would typically open a connection to the device using WebUSB or WebHID APIs.
		console.log(`Connecting to device with Vendor ID: ${vendorId}, Product ID: ${productId}`);
		const deviceType = (document.getElementById("deviceType") as HTMLSelectElement).value;
		const deviceConnectionUrl =
			location.href.replace("app.html", "device-connector.html") + `?deviceType=${deviceType}`;
		const name = "connect-device-" + vendorId + "-" + productId;
		const exists = await bringToFrontIfExists(name);
		if (!exists) {
			// Open a new window to indicate connection (replace with actual connection logic)
			const winOption: OpenFin.WindowCreationOptions = {
				name,
				defaultWidth: 1200,
				width: 1200,
				defaultHeight: 800,
				url: deviceConnectionUrl,
				frame: true,
				autoShow: true,
				permissions: {
					webAPIs: ["hid", "usb"],
					devices: [
						{
							vendorId: vendorId,
							productId: productId
						}
					]
				}
			};
			return fin.Window.create(winOption);
		}
	} catch (error) {
		console.error("Error connecting to device:", error);
	}
}

async function bringToFrontIfExists(name: string): Promise<boolean> {
	try {
		const existingWindow = await fin.Window.wrap({ uuid: fin.me.uuid, name });
		const info = await existingWindow.getInfo();
		console.log(`Bring window with url ${info.url} to front`);
		if (existingWindow) {
			await existingWindow.restore();
			await existingWindow.bringToFront();
			await existingWindow.focus();
			return true;
		}
	} catch (error) {
		// Window does not exist
	}
	return false;
}

/**
 * Checks to see what devices to connect.
 */
async function requestDevice(): Promise<void> {
	const runtimeInfo = await fin.System.getRuntimeInfo();
	const manifestUrl = runtimeInfo.manifestUrl ?? "";
	const deviceIdentifierUrl =
		location.href.replace("app.html", "device-identifier.html") +
		"?fins=" +
		manifestUrl.replace("http", "fin");
	await fin.System.openUrlWithBrowser(deviceIdentifierUrl);
}

async function listenForDeviceInfo(): Promise<void> {
	const app = fin.Application.getCurrentSync();
	const appInfo = await app.getInfo();
	const customInitOptions = appInfo.initialOptions as OpenFin.ApplicationCreationOptions & {
		userAppConfigArgs?: OpenFin.UserAppConfigArgs;
	};
	processPassedInformation(customInitOptions?.userAppConfigArgs);

	app.addListener("run-requested", (event: { userAppConfigArgs?: OpenFin.UserAppConfigArgs }) => {
		processPassedInformation(event?.userAppConfigArgs);
	});
}

function processPassedInformation(args?: OpenFin.UserAppConfigArgs) {
	if (args) {
		const vendorIdInput = document.getElementById("vendorId") as HTMLInputElement;
		const productIdInput = document.getElementById("productId") as HTMLInputElement;
		const deviceTypeSelect = document.getElementById("deviceType") as HTMLSelectElement;

		if (args["deviceType"]) {
			const deviceType = args["deviceType"] as string;
			if (deviceType === "HID" || deviceType === "USB") {
				deviceTypeSelect.value = deviceType;
			}
		}
		if (args["vendorId"]) {
			const vendorId = args["vendorId"] as string;
			vendorIdInput.value = vendorId;
		}
		if (args["productId"]) {
			const productId = args["productId"] as string;
			productIdInput.value = productId;
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
