/* eslint-disable newline-per-chained-call */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import type { OpenFin } from "@openfin/core";
import { HID_DEVICE, USB_DEVICE } from "./device-type";

// Global variables
let loggingElement: HTMLElement | null;

document.addEventListener("DOMContentLoaded", async () => {
	try {
		await init();
	} catch (error) {
		console.error(error);
	}
});

/**
 * Initialize the DOM components.
 */
async function init(): Promise<void> {
	const tag = document.querySelector("#tag") as HTMLSpanElement;
	loggingElement = document.querySelector("#logging");
	// Extract the 'deviceType' parameter from the querystring
	const search = location.search;
	const urlParams = new URLSearchParams(search);
	const deviceTypeParam = urlParams.get("deviceType");
	let deviceType = USB_DEVICE;
	if (deviceTypeParam === HID_DEVICE) {
		deviceType = HID_DEVICE;
		navigator.hid.addEventListener("disconnect", (event) => {
			loggingAddEntry(`HID disconnected: ${event.device.productName}`);
		});
		navigator.hid.addEventListener("connect", (event) => {
			loggingAddEntry(`HID connected: ${event.device.productName}`);
		});
	} else {
		navigator.usb.addEventListener("disconnect", (event) => {
			loggingAddEntry(`USB disconnected: ${event.device.productName}`);
		});
		navigator.usb.addEventListener("connect", (event) => {
			loggingAddEntry(`USB connected: ${event.device.productName}`);
		});
	}

	const btnLoggingClear = document.querySelector("#btnLoggingClear");
	if (btnLoggingClear) {
		btnLoggingClear.addEventListener("click", () => {
			if (loggingElement) {
				loggingElement.textContent = "";
			}
		});
	}

	const btnOpenDevice = document.querySelector("#btnOpenDevice");
	if (btnOpenDevice) {
		btnOpenDevice.addEventListener("click", async () => {
			loggingAddEntry("Gathering devices.");
			let devices: (USBDevice | HIDDevice)[] = [];
			if (deviceTypeParam === HID_DEVICE) {
				devices = await navigator.hid.getDevices();
			} else {
				devices = await navigator.usb.getDevices();
			}

			loggingAddEntry(`Found ${devices.length} ${deviceType} devices.`);
			for (const [index, device] of devices.entries()) {
				loggingAddEntry(
					`Device ${index + 1}: Product Name: ${device.productName}, Vendor ID: ${
						device.vendorId
					}, Product ID: ${device.productId}`
				);
			}

			if (devices.length > 0) {
				loggingAddEntry("Selecting first device.");
				const device = devices[0];
				try {
					if (device.opened) {
						loggingAddEntry("Device already opened. Closing it first.");
						await device.close();
						loggingAddEntry("Device closed.");
					}

					await device.open();
					loggingAddEntry(`Device opened: ${device.productName}`);

					if (deviceTypeParam === HID_DEVICE) {
						// HID device handling
						loggingAddEntry(`Successfully connected to HID device: ${device.productName}`);
						loggingAddEntry(`Vendor ID: ${device.vendorId}, Product ID: ${device.productId}`);
						loggingAddEntry("To receive input events, use the 'inputreport' event listener.");

						// Add a simple input report listener to demonstrate it's working
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						(device as HIDDevice).addEventListener("inputreport", (event: any) => {
							loggingAddEntry("Received input report event.");
							const data = new Uint8Array(event.data.buffer);
							loggingAddEntry(
								`Input report received - Report ID: ${event.reportId}, Data: ${Array.from(data)
									.map((b) => b.toString(16).padStart(2, "0"))
									.join(" ")}`
							);
						});

						loggingAddEntry("Connection successful! Waiting for device input...");
					} else {
						// USB device handling
						const usbDevice = device as USBDevice;
						loggingAddEntry(`Connected to USB device: ${usbDevice.productName}`);
						loggingAddEntry(`Vendor ID: ${usbDevice.vendorId}, Product ID: ${usbDevice.productId}`);

						// Check if a configuration is selected
						if (usbDevice.configuration === null && usbDevice.configurations.length > 0) {
							loggingAddEntry("Selecting the first configuration.");
							await usbDevice.selectConfiguration(usbDevice.configurations[0].configurationValue);
						}

						// Analyze and display device information
						analyzeUSBDevice(usbDevice);
					}
				} catch (error: unknown) {
					const errorMessage =
						typeof error === "object" && error !== null && "message" in error
							? (error as { message?: string }).message ?? "Unknown error"
							: "Unknown error";
					loggingAddEntry(`Error: ${errorMessage}`);

					if (errorMessage.includes("protected class")) {
						loggingAddEntry("\nThis device has protected interfaces that cannot be accessed directly.");
						loggingAddEntry(
							"If this is a HID device (like keyboard, mouse, gamepad), try using the WebHID API instead."
						);
						loggingAddEntry("Protected classes include: HID, Audio, Mass Storage, Video, etc.");
					}
				}
			}
		});
	}

	const btnCodeCopy = document.querySelector("#btnCodeCopy");
	if (btnCodeCopy) {
		btnCodeCopy.addEventListener("click", async () => {
			loggingAddEntry("Copying code to clipboard");
			const codeElement = document.querySelector("#code");
			if (codeElement) {
				try {
					if (location.href.startsWith("https:")) {
						await navigator.clipboard.writeText(codeElement.textContent || "");
					} else {
						await fin.Clipboard.writeText({ data: codeElement.textContent || "" });
					}
					loggingAddEntry("Code copied to clipboard");
				} catch (error) {
					loggingAddEntry(`Failed to copy code to clipboard: ${error}`);
				}
			}
		});
	}

	if (fin) {
		const info = await fin.me.getOptions();
		const permissions = info.permissions;
		writeCode(deviceType === HID_DEVICE, permissions);
		const devices = permissions?.devices;
		let device: OpenFin.DeviceInfo | undefined;
		if (tag) {
			if (devices && devices.length > 0) {
				device = devices[0];
				tag.textContent = `Device Connector - Device Type: ${deviceType} Vendor Id: ${device.vendorId} : Product Id: ${device.productId}`;
			} else {
				tag.textContent = "Device Connector - No device permissions found";
			}
		}
		if (device) {
			loggingAddEntry("Fetching permissions.");
			const logPermissions = `Required permissions:
            
This could be controlled through Domain Setting Rules in the manifest, as permissions in your startup_app or platform configuration in the manifest (the permission will apply to the main/provider window), in your platform configuration as default viewOptions or windowOptions (the platform must define the permission as well) or added to specific window or views.

Permission Block:

"permissions": ${JSON.stringify(permissions, null, 5)}`;
			loggingAddEntry(logPermissions);
		}
	}
}

/**
 * Add a new entry in to the logging window with a timestamp.
 * @param entry The entry to add.
 */
function loggingAddEntry(entry: string): void {
	if (loggingElement) {
		// Create timestamp in format HH:MM:SS:mmm
		const now = new Date();
		const hours = now.getHours().toString().padStart(2, "0");
		const minutes = now.getMinutes().toString().padStart(2, "0");
		const seconds = now.getSeconds().toString().padStart(2, "0");
		const milliseconds = now.getMilliseconds().toString().padStart(3, "0");
		const timestamp = `${hours}:${minutes}:${seconds}:${milliseconds}`;

		loggingElement.textContent = `[${timestamp}]: ${entry}\n\n${loggingElement.textContent}`;
	}
}

/**
 * Writes example code to the code block based on device type and permissions.
 * @param isHidDevice True if the device is HID, false if USB.
 * @param permissions The permissions to include in the example code.
 */
function writeCode(isHidDevice: boolean, permissions?: OpenFin.Permissions): void {
	const codeElement = document.querySelector("#code");
	if (codeElement) {
		let code =
			"// Ensure your application has the appropriate permissions in the manifest or window or view options.\n\n";
		code += "// Example permissions block:\n";
		code += `/*\n"permissions": ${JSON.stringify(permissions, null, 5)}\n*/\n\n`;
		code += "// Listen for device connection and disconnection events\n";
		if (isHidDevice) {
			code +=
				"navigator.hid.addEventListener(\"disconnect\", (event) => {\n    console.log('HID disconnected: ' + event.device.productName);\n});\n";
			code +=
				"navigator.hid.addEventListener(\"connect\", (event) => {\n    console.log('HID connected: ' + event.device.productName);\n});\n\n";
		} else {
			code +=
				"navigator.usb.addEventListener(\"disconnect\", (event) => {\n    console.log('USB disconnected: ' + event.device.productName);\n});\n";
			code +=
				"navigator.usb.addEventListener(\"connect\", (event) => {\n    console.log('USB connected: ' + event.device.productName);\n});\n\n";
		}
		code += `// Getting ${isHidDevice ? "HID" : "USB"} devices\n`;
		code +=
			"// You don't need to call requestDevice as the device has already been given permissions through the manifest/window/view permission settings. You can call getDevices to interact with the device.\n";
		code += `const devices = ${
			isHidDevice ? "await navigator.hid.getDevices();" : "await navigator.usb.getDevices();"
		}\n`;
		code += `console.log('Found ' + devices.length + ' ${isHidDevice ? "HID" : "USB"} devices.');\n`;
		code +=
			"devices.forEach((device, index) => {\n    console.log('Device ' + (index + 1) + ': Product Name: ' + device.productName + ', Vendor ID: ' + device.vendorId + ', Product ID: ' + device.productId);\n});\n\n";
		code += "// Selecting the first device (if any)\n";
		code += "const device = devices.length > 0 ? devices[0] : null;\n\n";
		code += "// Opening the device\n";
		code +=
			"if (device) {\n    await device.open();\n    console.log('Device opened:', device.productName);\n";
		if (!isHidDevice) {
			code += "    // Continue with interface claiming and communication as needed\n";
		} else {
			code += "    // Add event listeners for input reports\n";
			code += "    device.addEventListener('inputreport', (event) => {\n";
			code += "        const data = new Uint8Array(event.data.buffer);\n";
			code += "        console.log('Input report received:', data);\n    });\n";
		}
		code += "} else {\n    console.log('No device selected');\n}\n";

		codeElement.textContent = code;
	}
}

/**
 * Analyze and display information about a USB device to help determine compatibility.
 * @param device The USB device to analyze
 */
function analyzeUSBDevice(device: USBDevice): void {
	// Define known USB classes
	const knownClasses: { [key: number]: string } = {
		0: "Interface-specific",
		1: "Audio",
		2: "Communications and CDC Control",
		3: "HID (Human Interface Device)",
		5: "Physical",
		6: "Image",
		7: "Printer",
		8: "Mass Storage",
		9: "Hub",
		10: "CDC-Data",
		11: "Smart Card",
		13: "Content Security",
		14: "Video",
		15: "Personal Healthcare",
		220: "Diagnostic Device",
		224: "Wireless Controller",
		239: "Miscellaneous",
		254: "Application Specific",
		255: "Vendor Specific"
	};

	// If no configuration is selected or available
	if (!device.configuration) {
		loggingAddEntry("Device has no active configuration.");
		return;
	}

	loggingAddEntry("\nDevice Analysis:");
	loggingAddEntry(`Device Name: ${device.productName ?? "Unknown"}`);
	loggingAddEntry(`Manufacturer: ${device.manufacturerName ?? "Unknown"}`);
	loggingAddEntry(`Serial Number: ${device.serialNumber ?? "Not available"}`);

	// Display configurations
	loggingAddEntry(`\nDevice has ${device.configurations.length} configuration(s).`);
	loggingAddEntry(`Active Configuration: ${device.configuration.configurationValue}.`);

	// Analyze interfaces
	const interfaces = device.configuration.interfaces;
	loggingAddEntry(`\nInterfaces (${interfaces.length}):`);

	let hasProtectedClass = false;
	let isHidDevice = false;
	let hasVendorSpecific = false;

	for (const [index, iface] of interfaces.entries()) {
		const ifaceClass = iface.alternate.interfaceClass;
		const className = knownClasses[ifaceClass] || `Unknown Class (${ifaceClass})`;

		loggingAddEntry(`Interface ${index}: Class ${ifaceClass} - ${className}`);

		// Check for specific classes
		if (ifaceClass === 3) {
			isHidDevice = true;
		}

		if (ifaceClass === 255) {
			hasVendorSpecific = true;
		}

		// Check if this is likely a protected class
		if ([1, 3, 7, 8, 9, 14, 15].includes(ifaceClass)) {
			hasProtectedClass = true;
		}
	}

	// Provide recommendations
	loggingAddEntry("\nRecommendations:");

	if (isHidDevice) {
		loggingAddEntry("✖️ This appears to be an HID device. WebUSB cannot access HID interfaces.");
		loggingAddEntry("✅ Please use WebHID API instead for this device.");
	} else if (hasProtectedClass) {
		loggingAddEntry("⚠️ This device has interfaces that are likely protected classes.");
		loggingAddEntry("   Browser security restrictions may prevent WebUSB from accessing some interfaces.");

		if (hasVendorSpecific) {
			loggingAddEntry("✅ However, the device has vendor-specific interfaces that might be accessible.");
		}
	} else if (hasVendorSpecific) {
		loggingAddEntry(
			"✅ This device has vendor-specific interfaces which are typically accessible via WebUSB."
		);
	} else {
		loggingAddEntry(
			"❓ This device may or may not be compatible with WebUSB, depending on its specific interfaces."
		);
	}

	loggingAddEntry("\nConnection established successfully. The device is now ready for communication.");
}
