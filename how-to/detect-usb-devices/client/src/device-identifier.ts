// Store the selected device and its type
/**
 * A type to describe the device selection.
 */
interface DeviceSelection {
	/**
	 *
	 */
	deviceType: "HID" | "USB" | null;
	/**
	 *
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	device: any;
}

// Global variable to store the currently selected device
let selectedDevice: DeviceSelection = {
	deviceType: null,
	device: null
};

// Global variable to store if fins parameter was passed
let hasFinsParameter = false;

let finsLink = "";

document.addEventListener("DOMContentLoaded", async () => {
	try {
		await initDom();
	} catch (error) {
		console.error(error);
	}
});

/**
 * Initializes the controls available on the detection page.
 */
async function initDom(): Promise<void> {
	const search = location.search;
	// Extract the 'fins' parameter from the querystring
	const urlParams = new URLSearchParams(search);
	const finsParam = urlParams.get("fins");

	// Set up event listeners for USB and HID buttons
	setupButtonEventListeners();

	if (finsParam !== null) {
		console.log("Fins parameter value:", finsParam);
		if (finsParam.includes("fin://") || finsParam.includes("fins://")) {
			hasFinsParameter = true;
			finsLink = decodeURIComponent(finsParam);
			console.log("Fins protocol URL detected:", finsLink);
		}
	}

	// Initially hide the fin-launch-container
	updateFinLaunchContainerVisibility();
}

/**
 * Requests HID devices and stores the selected device.
 * @returns An array of selected HID devices.
 */
async function requestHidDevices(): Promise<HIDDevice[]> {
	// Clear the current selection
	clearDeviceSelection();

	if ("hid" in navigator) {
		try {
			const devices = await navigator.hid.requestDevice({ filters: [] });
			console.log("Selected HID devices:", devices);

			// Store the first HID device if available
			if (devices && devices.length > 0) {
				selectedDevice = {
					deviceType: "HID",
					device: devices[0] // Store the first device or handle multiple as needed
				};
				console.log("Stored selected HID device:", selectedDevice);

				// Update visibility of fin-launch-container
				updateFinLaunchContainerVisibility();
			}

			displayHIDDevices(devices);
			return devices;
		} catch (error) {
			console.error("Error requesting HID devices:", error);
		}
	} else {
		console.log("WebHID API is not supported in this browser");
	}
	return [];
}

/**
 * Displays HID device information in the UI.
 * @param devices the devices to list.
 */
function displayHIDDevices(devices: HIDDevice[]): void {
	if (!devices || devices.length === 0) {
		return;
	}

	const deviceList = document.querySelector("#device-list");
	if (deviceList) {
		// Clear previous entries
		deviceList.innerHTML = "";

		// Create list items for each device
		for (const [index, device] of devices.entries()) {
			const listItem = document.createElement("li");

			// Highlight the first device which is stored as the selected device
			if (index === 0) {
				listItem.textContent = `HID (Selected): ${device.productName || "Unknown"} - Vendor ID: ${
					device.vendorId
				}, Product ID: ${device.productId}`;
				listItem.style.fontWeight = "bold";
			} else {
				listItem.textContent = `HID: ${device.productName || "Unknown"} - Vendor ID: ${
					device.vendorId
				}, Product ID: ${device.productId}`;
			}

			deviceList.append(listItem);
		}
	}
}

/**
 * Requests USB devices and stores the selected device.
 * @returns The selected USB device or null if none was selected.
 */
async function requestUSBDevices(): Promise<USBDevice | null> {
	// Clear the current selection
	clearDeviceSelection();

	if ("usb" in navigator) {
		try {
			const device = await navigator.usb.requestDevice({ filters: [] });
			console.log("Selected USB device:", device);

			// Store the USB device
			if (device) {
				selectedDevice = {
					deviceType: "USB",
					device
				};
				console.log("Stored selected USB device:", selectedDevice);

				// Update visibility of fin-launch-container
				updateFinLaunchContainerVisibility();
			}

			displayUSBDevice(device);
			return device;
		} catch (error) {
			console.error("Error requesting USB device:", error);
		}
	} else {
		console.log("WebUSB API is not supported in this browser");
	}
	return null;
}

/**
 * Sets up the event listeners for all buttons.
 */
function setupButtonEventListeners(): void {
	// Wire up USB device request button
	const usbButton = document.querySelector("#btn-request-usb-device");
	if (usbButton) {
		usbButton.addEventListener("click", async () => {
			try {
				// Clear the UI before showing the device picker dialog
				clearDeviceSelection();
				await requestUSBDevices();
			} catch (error) {
				console.error("Error requesting USB device:", error);
			}
		});
	}

	// Wire up HID device request button
	const hidButton = document.querySelector("#btn-request-hid-device");
	if (hidButton) {
		hidButton.addEventListener("click", async () => {
			try {
				// Clear the UI before showing the device picker dialog
				clearDeviceSelection();
				await requestHidDevices();
			} catch (error) {
				console.error("Error requesting HID devices:", error);
			}
		});
	}

	// Wire up clear device button
	const clearSelectionButton = document.querySelector("#btn-clear-device");
	if (clearSelectionButton) {
		clearSelectionButton.addEventListener("click", () => {
			try {
				// Just clear the selection state and UI
				clearDeviceSelection();
				console.log("Device selection cleared");
			} catch (error) {
				console.error("Error clearing device selection:", error);
			}
		});
	}

	// Wire up fin launch button
	const finLaunchButton = document.querySelector("#btn-fin-launch");
	if (finLaunchButton) {
		finLaunchButton.addEventListener("click", () => {
			try {
				// Store device info
				const deviceInfo = {
					type: selectedDevice.deviceType,
					vendorId: selectedDevice.device?.vendorId,
					productId: selectedDevice.device?.productId,
					productName: selectedDevice.device?.productName
				};

				// Pass the device info to the starter
				console.log("Device info passed to starter:", deviceInfo);

				const url = `${finsLink.replace("?", "")}?$$deviceType=${deviceInfo.type}&$$vendorId=${deviceInfo.vendorId}&$$productId=${deviceInfo.productId}`;
				window.open(url, "_blank");

				// Clear selection state and UI
				clearDeviceSelection();

				// You could add additional code here to navigate away or close the window
			} catch (error) {
				console.error("Error in fin launch process:", error);
			}
		});
	}
}

/**
 * Displays USB device information in the UI.
 * @param device The device to list.
 */
function displayUSBDevice(device: USBDevice | null): void {
	if (!device) {
		return;
	}

	const deviceList = document.querySelector("#device-list");
	if (deviceList) {
		// Clear previous entries
		deviceList.innerHTML = "";

		// Create a list item for the device
		const listItem = document.createElement("li");
		listItem.textContent = `USB: ${device.productName ?? "Unknown"} - Vendor ID: ${
			device.vendorId
		}, Product ID: ${device.productId}`;
		deviceList.append(listItem);
	}
}

/**
 * Clears the selected device and updates the UI.
 */
function clearDeviceSelection(): void {
	// Reset the selected device
	selectedDevice = {
		deviceType: null,
		device: null
	};

	// Clear the device list in the UI
	const deviceList = document.querySelector("#device-list");
	if (deviceList) {
		deviceList.innerHTML = "";
	}

	// Update the visibility of the fin-launch container
	updateFinLaunchContainerVisibility();

	console.log("Device selection cleared");
}

/**
 * Updates the visibility of the containers based on device selection and fins parameter.
 */
function updateFinLaunchContainerVisibility(): void {
	const finLaunchContainer: HTMLElement | null = document.querySelector("#fin-launch-container");
	const deviceContainer: HTMLElement | null = document.querySelector("#device-container");

	// Check if we have a selected device
	const hasDeviceSelected = selectedDevice.device !== null;

	// Update device container visibility
	if (deviceContainer) {
		deviceContainer.style.display = hasDeviceSelected ? "block" : "none";
		console.log(`Device container visibility set to ${hasDeviceSelected ? "visible" : "hidden"}`);
	}

	// Update fin launch container visibility
	if (finLaunchContainer) {
		// Show the container only if we have both a fins parameter and a selected device
		const shouldShow = hasFinsParameter && hasDeviceSelected;

		finLaunchContainer.style.display = shouldShow ? "block" : "none";
		console.log(`Fin launch container visibility set to ${shouldShow ? "visible" : "hidden"}`);
	}
}
