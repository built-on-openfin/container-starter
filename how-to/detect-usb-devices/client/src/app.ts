/* eslint-disable @typescript-eslint/dot-notation */
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

/**
 * Connect to the specified device.
 * @returns The window that was opened to connect to the device, if any.
 * @throws An error if the connection fails.
 */
async function connectDevice(): Promise<OpenFin.Window | undefined> {
	const vendorIdInput = document.querySelector("#vendorId") as HTMLInputElement;
	const productIdInput = document.querySelector("#productId") as HTMLInputElement;

	const vendorId = Number.parseInt(vendorIdInput.value, 10);
	const productId = Number.parseInt(productIdInput.value, 10);

	if (Number.isNaN(vendorId) || Number.isNaN(productId)) {
		// eslint-disable-next-line no-alert
		alert("Please enter valid numeric values for Vendor ID and Product ID.");
		return;
	}

	try {
		// Here you would typically open a connection to the device using WebUSB or WebHID APIs.
		console.log(`Connecting to device with Vendor ID: ${vendorId}, Product ID: ${productId}`);
		const deviceType = (document.querySelector("#deviceType") as HTMLSelectElement).value;
		const deviceConnectionUrl = `${location.href.replace("app.html", "device-connector.html")}?deviceType=${deviceType}`;
		const name = `connect-device-${vendorId}-${productId}`;
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
							vendorId,
							productId
						}
					]
				}
			};
			return await fin.Window.create(winOption);
		}
	} catch (error) {
		console.error("Error connecting to device:", error);
	}
}

/**
 * Brings an existing window to the front if it exists.
 * @param name The name of the window to bring to the front.
 * @returns True if the window was found and brought to the front, false otherwise.
 */
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
	} catch {
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
	const deviceIdentifierUrl = `${location.href.replace("app.html", "device-identifier.html")}?fins=${manifestUrl.replace("http", "fin")}`;
	await fin.System.openUrlWithBrowser(deviceIdentifierUrl);
}

/**
 * Listens for device information passed via the HERE runtime and processes it.
 */
async function listenForDeviceInfo(): Promise<void> {
	const app = fin.Application.getCurrentSync();
	const appInfo = await app.getInfo();
	const customInitOptions = appInfo.initialOptions as OpenFin.ApplicationCreationOptions & {
		userAppConfigArgs?: OpenFin.UserAppConfigArgs;
	};
	processPassedInformation(customInitOptions?.userAppConfigArgs);

	// eslint-disable-next-line no-void
	await app.addListener("run-requested", (event: { userAppConfigArgs?: OpenFin.UserAppConfigArgs }) => {
		processPassedInformation(event?.userAppConfigArgs);
	});
}

/**
 * Processes the information passed via userAppConfigArgs.
 * @param args The user application configuration arguments.
 */
function processPassedInformation(args?: OpenFin.UserAppConfigArgs): void {
	if (args) {
		const vendorIdInput = document.querySelector("#vendorId") as HTMLInputElement;
		const productIdInput = document.querySelector("#productId") as HTMLInputElement;
		const deviceTypeSelect = document.querySelector("#deviceType") as HTMLSelectElement;

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
		url: "https://resources.here.io/docs/core/develop/security/connect-usb-hid/#find-all-connected-devices",
		frame: true,
		autoShow: true
	};
	return fin.Window.create(winOption);
}
