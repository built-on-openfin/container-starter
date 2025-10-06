/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client/src/device-type.ts":
/*!***********************************!*\
  !*** ./client/src/device-type.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HID_DEVICE: () => (/* binding */ HID_DEVICE),
/* harmony export */   USB_DEVICE: () => (/* binding */ USB_DEVICE)
/* harmony export */ });
const USB_DEVICE = "USB";
const HID_DEVICE = "HID";


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!****************************************!*\
  !*** ./client/src/device-connector.ts ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _device_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./device-type */ "./client/src/device-type.ts");

// Global variables
let loggingElement;
document.addEventListener("DOMContentLoaded", async () => {
    try {
        await init();
    }
    catch (error) {
        console.error(error);
    }
});
/**
 * Initialize the DOM components.
 */
async function init() {
    const tag = document.querySelector("#tag");
    loggingElement = document.querySelector("#logging");
    // Extract the 'deviceType' parameter from the querystring
    const search = location.search;
    const urlParams = new URLSearchParams(search);
    const deviceTypeParam = urlParams.get("deviceType");
    let deviceType = _device_type__WEBPACK_IMPORTED_MODULE_0__.USB_DEVICE;
    if (deviceTypeParam === _device_type__WEBPACK_IMPORTED_MODULE_0__.HID_DEVICE) {
        deviceType = _device_type__WEBPACK_IMPORTED_MODULE_0__.HID_DEVICE;
        navigator.hid.addEventListener("disconnect", (event) => {
            loggingAddEntry(`HID disconnected: ${event.device.productName}`);
        });
        navigator.hid.addEventListener("connect", (event) => {
            loggingAddEntry(`HID connected: ${event.device.productName}`);
        });
    }
    else {
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
            let devices = [];
            if (deviceTypeParam === _device_type__WEBPACK_IMPORTED_MODULE_0__.HID_DEVICE) {
                devices = await navigator.hid.getDevices();
            }
            else {
                devices = await navigator.usb.getDevices();
            }
            loggingAddEntry(`Found ${devices.length} ${deviceType} devices.`);
            for (const [index, device] of devices.entries()) {
                loggingAddEntry(`Device ${index + 1}: Product Name: ${device.productName}, Vendor ID: ${device.vendorId}, Product ID: ${device.productId}`);
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
                    if (deviceTypeParam === _device_type__WEBPACK_IMPORTED_MODULE_0__.HID_DEVICE) {
                        // HID device handling
                        loggingAddEntry(`Successfully connected to HID device: ${device.productName}`);
                        loggingAddEntry(`Vendor ID: ${device.vendorId}, Product ID: ${device.productId}`);
                        loggingAddEntry("To receive input events, use the 'inputreport' event listener.");
                        // Add a simple input report listener to demonstrate it's working
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        device.addEventListener("inputreport", (event) => {
                            loggingAddEntry("Received input report event.");
                            const data = new Uint8Array(event.data.buffer);
                            loggingAddEntry(`Input report received - Report ID: ${event.reportId}, Data: ${Array.from(data)
                                .map((b) => b.toString(16).padStart(2, "0"))
                                .join(" ")}`);
                        });
                        loggingAddEntry("Connection successful! Waiting for device input...");
                    }
                    else {
                        // USB device handling
                        const usbDevice = device;
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
                }
                catch (error) {
                    const errorMessage = typeof error === "object" && error !== null && "message" in error
                        ? error.message ?? "Unknown error"
                        : "Unknown error";
                    loggingAddEntry(`Error: ${errorMessage}`);
                    if (errorMessage.includes("protected class")) {
                        loggingAddEntry("\nThis device has protected interfaces that cannot be accessed directly.");
                        loggingAddEntry("If this is a HID device (like keyboard, mouse, gamepad), try using the WebHID API instead.");
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
                    }
                    else {
                        await fin.Clipboard.writeText({ data: codeElement.textContent || "" });
                    }
                    loggingAddEntry("Code copied to clipboard");
                }
                catch (error) {
                    loggingAddEntry(`Failed to copy code to clipboard: ${error}`);
                }
            }
        });
    }
    if (fin) {
        const info = await fin.me.getOptions();
        const permissions = info.permissions;
        writeCode(deviceType === _device_type__WEBPACK_IMPORTED_MODULE_0__.HID_DEVICE, permissions);
        const devices = permissions?.devices;
        let device;
        if (tag) {
            if (devices && devices.length > 0) {
                device = devices[0];
                tag.textContent = `Device Connector - Device Type: ${deviceType} Vendor Id: ${device.vendorId} : Product Id: ${device.productId}`;
            }
            else {
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
function loggingAddEntry(entry) {
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
function writeCode(isHidDevice, permissions) {
    const codeElement = document.querySelector("#code");
    if (codeElement) {
        let code = "// Ensure your application has the appropriate permissions in the manifest or window or view options.\n\n";
        code += "// Example permissions block:\n";
        code += `/*\n"permissions": ${JSON.stringify(permissions, null, 5)}\n*/\n\n`;
        code += "// Listen for device connection and disconnection events\n";
        if (isHidDevice) {
            code +=
                "navigator.hid.addEventListener(\"disconnect\", (event) => {\n    console.log('HID disconnected: ' + event.device.productName);\n});\n";
            code +=
                "navigator.hid.addEventListener(\"connect\", (event) => {\n    console.log('HID connected: ' + event.device.productName);\n});\n\n";
        }
        else {
            code +=
                "navigator.usb.addEventListener(\"disconnect\", (event) => {\n    console.log('USB disconnected: ' + event.device.productName);\n});\n";
            code +=
                "navigator.usb.addEventListener(\"connect\", (event) => {\n    console.log('USB connected: ' + event.device.productName);\n});\n\n";
        }
        code += `// Getting ${isHidDevice ? "HID" : "USB"} devices\n`;
        code +=
            "// You don't need to call requestDevice as the device has already been given permissions through the manifest/window/view permission settings. You can call getDevices to interact with the device.\n";
        code += `const devices = ${isHidDevice ? "await navigator.hid.getDevices();" : "await navigator.usb.getDevices();"}\n`;
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
        }
        else {
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
function analyzeUSBDevice(device) {
    // Define known USB classes
    const knownClasses = {
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
    }
    else if (hasProtectedClass) {
        loggingAddEntry("⚠️ This device has interfaces that are likely protected classes.");
        loggingAddEntry("   Browser security restrictions may prevent WebUSB from accessing some interfaces.");
        if (hasVendorSpecific) {
            loggingAddEntry("✅ However, the device has vendor-specific interfaces that might be accessible.");
        }
    }
    else if (hasVendorSpecific) {
        loggingAddEntry("✅ This device has vendor-specific interfaces which are typically accessible via WebUSB.");
    }
    else {
        loggingAddEntry("❓ This device may or may not be compatible with WebUSB, depending on its specific interfaces.");
    }
    loggingAddEntry("\nConnection established successfully. The device is now ready for communication.");
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7WUFDdkIsZUFBZSxDQUFDLGdGQUFnRixDQUFDLENBQUM7UUFDbkcsQ0FBQztJQUNGLENBQUM7U0FBTSxJQUFJLGlCQUFpQixFQUFFLENBQUM7UUFDOUIsZUFBZSxDQUNkLHlGQUF5RixDQUN6RixDQUFDO0lBQ0gsQ0FBQztTQUFNLENBQUM7UUFDUCxlQUFlLENBQ2QsK0ZBQStGLENBQy9GLENBQUM7SUFDSCxDQUFDO0lBRUQsZUFBZSxDQUFDLG1GQUFtRixDQUFDLENBQUM7QUFDdEcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RldGVjdC11c2ItZGV2aWNlcy8uL2NsaWVudC9zcmMvZGV2aWNlLXR5cGUudHMiLCJ3ZWJwYWNrOi8vZGV0ZWN0LXVzYi1kZXZpY2VzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RldGVjdC11c2ItZGV2aWNlcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGV0ZWN0LXVzYi1kZXZpY2VzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGV0ZWN0LXVzYi1kZXZpY2VzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGV0ZWN0LXVzYi1kZXZpY2VzLy4vY2xpZW50L3NyYy9kZXZpY2UtY29ubmVjdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBVU0JfREVWSUNFID0gXCJVU0JcIjtcbmV4cG9ydCBjb25zdCBISURfREVWSUNFID0gXCJISURcIjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgbmV3bGluZS1wZXItY2hhaW5lZC1jYWxsICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJlZmVyLW51bGxpc2gtY29hbGVzY2luZyAqL1xuaW1wb3J0IHR5cGUgeyBPcGVuRmluIH0gZnJvbSBcIkBvcGVuZmluL2NvcmVcIjtcbmltcG9ydCB7IEhJRF9ERVZJQ0UsIFVTQl9ERVZJQ0UgfSBmcm9tIFwiLi9kZXZpY2UtdHlwZVwiO1xuXG4vLyBHbG9iYWwgdmFyaWFibGVzXG5sZXQgbG9nZ2luZ0VsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbDtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xuXHR0cnkge1xuXHRcdGF3YWl0IGluaXQoKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0fVxufSk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgRE9NIGNvbXBvbmVudHMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXQoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IHRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFnXCIpIGFzIEhUTUxTcGFuRWxlbWVudDtcblx0bG9nZ2luZ0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvZ2dpbmdcIik7XG5cdC8vIEV4dHJhY3QgdGhlICdkZXZpY2VUeXBlJyBwYXJhbWV0ZXIgZnJvbSB0aGUgcXVlcnlzdHJpbmdcblx0Y29uc3Qgc2VhcmNoID0gbG9jYXRpb24uc2VhcmNoO1xuXHRjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaCk7XG5cdGNvbnN0IGRldmljZVR5cGVQYXJhbSA9IHVybFBhcmFtcy5nZXQoXCJkZXZpY2VUeXBlXCIpO1xuXHRsZXQgZGV2aWNlVHlwZSA9IFVTQl9ERVZJQ0U7XG5cdGlmIChkZXZpY2VUeXBlUGFyYW0gPT09IEhJRF9ERVZJQ0UpIHtcblx0XHRkZXZpY2VUeXBlID0gSElEX0RFVklDRTtcblx0XHRuYXZpZ2F0b3IuaGlkLmFkZEV2ZW50TGlzdGVuZXIoXCJkaXNjb25uZWN0XCIsIChldmVudCkgPT4ge1xuXHRcdFx0bG9nZ2luZ0FkZEVudHJ5KGBISUQgZGlzY29ubmVjdGVkOiAke2V2ZW50LmRldmljZS5wcm9kdWN0TmFtZX1gKTtcblx0XHR9KTtcblx0XHRuYXZpZ2F0b3IuaGlkLmFkZEV2ZW50TGlzdGVuZXIoXCJjb25uZWN0XCIsIChldmVudCkgPT4ge1xuXHRcdFx0bG9nZ2luZ0FkZEVudHJ5KGBISUQgY29ubmVjdGVkOiAke2V2ZW50LmRldmljZS5wcm9kdWN0TmFtZX1gKTtcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRuYXZpZ2F0b3IudXNiLmFkZEV2ZW50TGlzdGVuZXIoXCJkaXNjb25uZWN0XCIsIChldmVudCkgPT4ge1xuXHRcdFx0bG9nZ2luZ0FkZEVudHJ5KGBVU0IgZGlzY29ubmVjdGVkOiAke2V2ZW50LmRldmljZS5wcm9kdWN0TmFtZX1gKTtcblx0XHR9KTtcblx0XHRuYXZpZ2F0b3IudXNiLmFkZEV2ZW50TGlzdGVuZXIoXCJjb25uZWN0XCIsIChldmVudCkgPT4ge1xuXHRcdFx0bG9nZ2luZ0FkZEVudHJ5KGBVU0IgY29ubmVjdGVkOiAke2V2ZW50LmRldmljZS5wcm9kdWN0TmFtZX1gKTtcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IGJ0bkxvZ2dpbmdDbGVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuTG9nZ2luZ0NsZWFyXCIpO1xuXHRpZiAoYnRuTG9nZ2luZ0NsZWFyKSB7XG5cdFx0YnRuTG9nZ2luZ0NsZWFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRpZiAobG9nZ2luZ0VsZW1lbnQpIHtcblx0XHRcdFx0bG9nZ2luZ0VsZW1lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3QgYnRuT3BlbkRldmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuT3BlbkRldmljZVwiKTtcblx0aWYgKGJ0bk9wZW5EZXZpY2UpIHtcblx0XHRidG5PcGVuRGV2aWNlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRsb2dnaW5nQWRkRW50cnkoXCJHYXRoZXJpbmcgZGV2aWNlcy5cIik7XG5cdFx0XHRsZXQgZGV2aWNlczogKFVTQkRldmljZSB8IEhJRERldmljZSlbXSA9IFtdO1xuXHRcdFx0aWYgKGRldmljZVR5cGVQYXJhbSA9PT0gSElEX0RFVklDRSkge1xuXHRcdFx0XHRkZXZpY2VzID0gYXdhaXQgbmF2aWdhdG9yLmhpZC5nZXREZXZpY2VzKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkZXZpY2VzID0gYXdhaXQgbmF2aWdhdG9yLnVzYi5nZXREZXZpY2VzKCk7XG5cdFx0XHR9XG5cblx0XHRcdGxvZ2dpbmdBZGRFbnRyeShgRm91bmQgJHtkZXZpY2VzLmxlbmd0aH0gJHtkZXZpY2VUeXBlfSBkZXZpY2VzLmApO1xuXHRcdFx0Zm9yIChjb25zdCBbaW5kZXgsIGRldmljZV0gb2YgZGV2aWNlcy5lbnRyaWVzKCkpIHtcblx0XHRcdFx0bG9nZ2luZ0FkZEVudHJ5KFxuXHRcdFx0XHRcdGBEZXZpY2UgJHtpbmRleCArIDF9OiBQcm9kdWN0IE5hbWU6ICR7ZGV2aWNlLnByb2R1Y3ROYW1lfSwgVmVuZG9yIElEOiAke1xuXHRcdFx0XHRcdFx0ZGV2aWNlLnZlbmRvcklkXG5cdFx0XHRcdFx0fSwgUHJvZHVjdCBJRDogJHtkZXZpY2UucHJvZHVjdElkfWBcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGRldmljZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRsb2dnaW5nQWRkRW50cnkoXCJTZWxlY3RpbmcgZmlyc3QgZGV2aWNlLlwiKTtcblx0XHRcdFx0Y29uc3QgZGV2aWNlID0gZGV2aWNlc1swXTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpZiAoZGV2aWNlLm9wZW5lZCkge1xuXHRcdFx0XHRcdFx0bG9nZ2luZ0FkZEVudHJ5KFwiRGV2aWNlIGFscmVhZHkgb3BlbmVkLiBDbG9zaW5nIGl0IGZpcnN0LlwiKTtcblx0XHRcdFx0XHRcdGF3YWl0IGRldmljZS5jbG9zZSgpO1xuXHRcdFx0XHRcdFx0bG9nZ2luZ0FkZEVudHJ5KFwiRGV2aWNlIGNsb3NlZC5cIik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YXdhaXQgZGV2aWNlLm9wZW4oKTtcblx0XHRcdFx0XHRsb2dnaW5nQWRkRW50cnkoYERldmljZSBvcGVuZWQ6ICR7ZGV2aWNlLnByb2R1Y3ROYW1lfWApO1xuXG5cdFx0XHRcdFx0aWYgKGRldmljZVR5cGVQYXJhbSA9PT0gSElEX0RFVklDRSkge1xuXHRcdFx0XHRcdFx0Ly8gSElEIGRldmljZSBoYW5kbGluZ1xuXHRcdFx0XHRcdFx0bG9nZ2luZ0FkZEVudHJ5KGBTdWNjZXNzZnVsbHkgY29ubmVjdGVkIHRvIEhJRCBkZXZpY2U6ICR7ZGV2aWNlLnByb2R1Y3ROYW1lfWApO1xuXHRcdFx0XHRcdFx0bG9nZ2luZ0FkZEVudHJ5KGBWZW5kb3IgSUQ6ICR7ZGV2aWNlLnZlbmRvcklkfSwgUHJvZHVjdCBJRDogJHtkZXZpY2UucHJvZHVjdElkfWApO1xuXHRcdFx0XHRcdFx0bG9nZ2luZ0FkZEVudHJ5KFwiVG8gcmVjZWl2ZSBpbnB1dCBldmVudHMsIHVzZSB0aGUgJ2lucHV0cmVwb3J0JyBldmVudCBsaXN0ZW5lci5cIik7XG5cblx0XHRcdFx0XHRcdC8vIEFkZCBhIHNpbXBsZSBpbnB1dCByZXBvcnQgbGlzdGVuZXIgdG8gZGVtb25zdHJhdGUgaXQncyB3b3JraW5nXG5cdFx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuXHRcdFx0XHRcdFx0KGRldmljZSBhcyBISUREZXZpY2UpLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dHJlcG9ydFwiLCAoZXZlbnQ6IGFueSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRsb2dnaW5nQWRkRW50cnkoXCJSZWNlaXZlZCBpbnB1dCByZXBvcnQgZXZlbnQuXCIpO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoZXZlbnQuZGF0YS5idWZmZXIpO1xuXHRcdFx0XHRcdFx0XHRsb2dnaW5nQWRkRW50cnkoXG5cdFx0XHRcdFx0XHRcdFx0YElucHV0IHJlcG9ydCByZWNlaXZlZCAtIFJlcG9ydCBJRDogJHtldmVudC5yZXBvcnRJZH0sIERhdGE6ICR7QXJyYXkuZnJvbShkYXRhKVxuXHRcdFx0XHRcdFx0XHRcdFx0Lm1hcCgoYikgPT4gYi50b1N0cmluZygxNikucGFkU3RhcnQoMiwgXCIwXCIpKVxuXHRcdFx0XHRcdFx0XHRcdFx0LmpvaW4oXCIgXCIpfWBcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHRsb2dnaW5nQWRkRW50cnkoXCJDb25uZWN0aW9uIHN1Y2Nlc3NmdWwhIFdhaXRpbmcgZm9yIGRldmljZSBpbnB1dC4uLlwiKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gVVNCIGRldmljZSBoYW5kbGluZ1xuXHRcdFx0XHRcdFx0Y29uc3QgdXNiRGV2aWNlID0gZGV2aWNlIGFzIFVTQkRldmljZTtcblx0XHRcdFx0XHRcdGxvZ2dpbmdBZGRFbnRyeShgQ29ubmVjdGVkIHRvIFVTQiBkZXZpY2U6ICR7dXNiRGV2aWNlLnByb2R1Y3ROYW1lfWApO1xuXHRcdFx0XHRcdFx0bG9nZ2luZ0FkZEVudHJ5KGBWZW5kb3IgSUQ6ICR7dXNiRGV2aWNlLnZlbmRvcklkfSwgUHJvZHVjdCBJRDogJHt1c2JEZXZpY2UucHJvZHVjdElkfWApO1xuXG5cdFx0XHRcdFx0XHQvLyBDaGVjayBpZiBhIGNvbmZpZ3VyYXRpb24gaXMgc2VsZWN0ZWRcblx0XHRcdFx0XHRcdGlmICh1c2JEZXZpY2UuY29uZmlndXJhdGlvbiA9PT0gbnVsbCAmJiB1c2JEZXZpY2UuY29uZmlndXJhdGlvbnMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0XHRsb2dnaW5nQWRkRW50cnkoXCJTZWxlY3RpbmcgdGhlIGZpcnN0IGNvbmZpZ3VyYXRpb24uXCIpO1xuXHRcdFx0XHRcdFx0XHRhd2FpdCB1c2JEZXZpY2Uuc2VsZWN0Q29uZmlndXJhdGlvbih1c2JEZXZpY2UuY29uZmlndXJhdGlvbnNbMF0uY29uZmlndXJhdGlvblZhbHVlKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gQW5hbHl6ZSBhbmQgZGlzcGxheSBkZXZpY2UgaW5mb3JtYXRpb25cblx0XHRcdFx0XHRcdGFuYWx5emVVU0JEZXZpY2UodXNiRGV2aWNlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0XHRcdFx0Y29uc3QgZXJyb3JNZXNzYWdlID1cblx0XHRcdFx0XHRcdHR5cGVvZiBlcnJvciA9PT0gXCJvYmplY3RcIiAmJiBlcnJvciAhPT0gbnVsbCAmJiBcIm1lc3NhZ2VcIiBpbiBlcnJvclxuXHRcdFx0XHRcdFx0XHQ/IChlcnJvciBhcyB7IG1lc3NhZ2U/OiBzdHJpbmcgfSkubWVzc2FnZSA/PyBcIlVua25vd24gZXJyb3JcIlxuXHRcdFx0XHRcdFx0XHQ6IFwiVW5rbm93biBlcnJvclwiO1xuXHRcdFx0XHRcdGxvZ2dpbmdBZGRFbnRyeShgRXJyb3I6ICR7ZXJyb3JNZXNzYWdlfWApO1xuXG5cdFx0XHRcdFx0aWYgKGVycm9yTWVzc2FnZS5pbmNsdWRlcyhcInByb3RlY3RlZCBjbGFzc1wiKSkge1xuXHRcdFx0XHRcdFx0bG9nZ2luZ0FkZEVudHJ5KFwiXFxuVGhpcyBkZXZpY2UgaGFzIHByb3RlY3RlZCBpbnRlcmZhY2VzIHRoYXQgY2Fubm90IGJlIGFjY2Vzc2VkIGRpcmVjdGx5LlwiKTtcblx0XHRcdFx0XHRcdGxvZ2dpbmdBZGRFbnRyeShcblx0XHRcdFx0XHRcdFx0XCJJZiB0aGlzIGlzIGEgSElEIGRldmljZSAobGlrZSBrZXlib2FyZCwgbW91c2UsIGdhbWVwYWQpLCB0cnkgdXNpbmcgdGhlIFdlYkhJRCBBUEkgaW5zdGVhZC5cIlxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGxvZ2dpbmdBZGRFbnRyeShcIlByb3RlY3RlZCBjbGFzc2VzIGluY2x1ZGU6IEhJRCwgQXVkaW8sIE1hc3MgU3RvcmFnZSwgVmlkZW8sIGV0Yy5cIik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBidG5Db2RlQ29weSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuQ29kZUNvcHlcIik7XG5cdGlmIChidG5Db2RlQ29weSkge1xuXHRcdGJ0bkNvZGVDb3B5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRsb2dnaW5nQWRkRW50cnkoXCJDb3B5aW5nIGNvZGUgdG8gY2xpcGJvYXJkXCIpO1xuXHRcdFx0Y29uc3QgY29kZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvZGVcIik7XG5cdFx0XHRpZiAoY29kZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpZiAobG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKFwiaHR0cHM6XCIpKSB7XG5cdFx0XHRcdFx0XHRhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb2RlRWxlbWVudC50ZXh0Q29udGVudCB8fCBcIlwiKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YXdhaXQgZmluLkNsaXBib2FyZC53cml0ZVRleHQoeyBkYXRhOiBjb2RlRWxlbWVudC50ZXh0Q29udGVudCB8fCBcIlwiIH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRsb2dnaW5nQWRkRW50cnkoXCJDb2RlIGNvcGllZCB0byBjbGlwYm9hcmRcIik7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0bG9nZ2luZ0FkZEVudHJ5KGBGYWlsZWQgdG8gY29weSBjb2RlIHRvIGNsaXBib2FyZDogJHtlcnJvcn1gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0aWYgKGZpbikge1xuXHRcdGNvbnN0IGluZm8gPSBhd2FpdCBmaW4ubWUuZ2V0T3B0aW9ucygpO1xuXHRcdGNvbnN0IHBlcm1pc3Npb25zID0gaW5mby5wZXJtaXNzaW9ucztcblx0XHR3cml0ZUNvZGUoZGV2aWNlVHlwZSA9PT0gSElEX0RFVklDRSwgcGVybWlzc2lvbnMpO1xuXHRcdGNvbnN0IGRldmljZXMgPSBwZXJtaXNzaW9ucz8uZGV2aWNlcztcblx0XHRsZXQgZGV2aWNlOiBPcGVuRmluLkRldmljZUluZm8gfCB1bmRlZmluZWQ7XG5cdFx0aWYgKHRhZykge1xuXHRcdFx0aWYgKGRldmljZXMgJiYgZGV2aWNlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGRldmljZSA9IGRldmljZXNbMF07XG5cdFx0XHRcdHRhZy50ZXh0Q29udGVudCA9IGBEZXZpY2UgQ29ubmVjdG9yIC0gRGV2aWNlIFR5cGU6ICR7ZGV2aWNlVHlwZX0gVmVuZG9yIElkOiAke2RldmljZS52ZW5kb3JJZH0gOiBQcm9kdWN0IElkOiAke2RldmljZS5wcm9kdWN0SWR9YDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRhZy50ZXh0Q29udGVudCA9IFwiRGV2aWNlIENvbm5lY3RvciAtIE5vIGRldmljZSBwZXJtaXNzaW9ucyBmb3VuZFwiO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoZGV2aWNlKSB7XG5cdFx0XHRsb2dnaW5nQWRkRW50cnkoXCJGZXRjaGluZyBwZXJtaXNzaW9ucy5cIik7XG5cdFx0XHRjb25zdCBsb2dQZXJtaXNzaW9ucyA9IGBSZXF1aXJlZCBwZXJtaXNzaW9uczpcbiAgICAgICAgICAgIFxuVGhpcyBjb3VsZCBiZSBjb250cm9sbGVkIHRocm91Z2ggRG9tYWluIFNldHRpbmcgUnVsZXMgaW4gdGhlIG1hbmlmZXN0LCBhcyBwZXJtaXNzaW9ucyBpbiB5b3VyIHN0YXJ0dXBfYXBwIG9yIHBsYXRmb3JtIGNvbmZpZ3VyYXRpb24gaW4gdGhlIG1hbmlmZXN0ICh0aGUgcGVybWlzc2lvbiB3aWxsIGFwcGx5IHRvIHRoZSBtYWluL3Byb3ZpZGVyIHdpbmRvdyksIGluIHlvdXIgcGxhdGZvcm0gY29uZmlndXJhdGlvbiBhcyBkZWZhdWx0IHZpZXdPcHRpb25zIG9yIHdpbmRvd09wdGlvbnMgKHRoZSBwbGF0Zm9ybSBtdXN0IGRlZmluZSB0aGUgcGVybWlzc2lvbiBhcyB3ZWxsKSBvciBhZGRlZCB0byBzcGVjaWZpYyB3aW5kb3cgb3Igdmlld3MuXG5cblBlcm1pc3Npb24gQmxvY2s6XG5cblwicGVybWlzc2lvbnNcIjogJHtKU09OLnN0cmluZ2lmeShwZXJtaXNzaW9ucywgbnVsbCwgNSl9YDtcblx0XHRcdGxvZ2dpbmdBZGRFbnRyeShsb2dQZXJtaXNzaW9ucyk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGVudHJ5IGluIHRvIHRoZSBsb2dnaW5nIHdpbmRvdyB3aXRoIGEgdGltZXN0YW1wLlxuICogQHBhcmFtIGVudHJ5IFRoZSBlbnRyeSB0byBhZGQuXG4gKi9cbmZ1bmN0aW9uIGxvZ2dpbmdBZGRFbnRyeShlbnRyeTogc3RyaW5nKTogdm9pZCB7XG5cdGlmIChsb2dnaW5nRWxlbWVudCkge1xuXHRcdC8vIENyZWF0ZSB0aW1lc3RhbXAgaW4gZm9ybWF0IEhIOk1NOlNTOm1tbVxuXHRcdGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cdFx0Y29uc3QgaG91cnMgPSBub3cuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcblx0XHRjb25zdCBtaW51dGVzID0gbm93LmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcblx0XHRjb25zdCBzZWNvbmRzID0gbm93LmdldFNlY29uZHMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcblx0XHRjb25zdCBtaWxsaXNlY29uZHMgPSBub3cuZ2V0TWlsbGlzZWNvbmRzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgzLCBcIjBcIik7XG5cdFx0Y29uc3QgdGltZXN0YW1wID0gYCR7aG91cnN9OiR7bWludXRlc306JHtzZWNvbmRzfToke21pbGxpc2Vjb25kc31gO1xuXG5cdFx0bG9nZ2luZ0VsZW1lbnQudGV4dENvbnRlbnQgPSBgWyR7dGltZXN0YW1wfV06ICR7ZW50cnl9XFxuXFxuJHtsb2dnaW5nRWxlbWVudC50ZXh0Q29udGVudH1gO1xuXHR9XG59XG5cbi8qKlxuICogV3JpdGVzIGV4YW1wbGUgY29kZSB0byB0aGUgY29kZSBibG9jayBiYXNlZCBvbiBkZXZpY2UgdHlwZSBhbmQgcGVybWlzc2lvbnMuXG4gKiBAcGFyYW0gaXNIaWREZXZpY2UgVHJ1ZSBpZiB0aGUgZGV2aWNlIGlzIEhJRCwgZmFsc2UgaWYgVVNCLlxuICogQHBhcmFtIHBlcm1pc3Npb25zIFRoZSBwZXJtaXNzaW9ucyB0byBpbmNsdWRlIGluIHRoZSBleGFtcGxlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHdyaXRlQ29kZShpc0hpZERldmljZTogYm9vbGVhbiwgcGVybWlzc2lvbnM/OiBPcGVuRmluLlBlcm1pc3Npb25zKTogdm9pZCB7XG5cdGNvbnN0IGNvZGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb2RlXCIpO1xuXHRpZiAoY29kZUVsZW1lbnQpIHtcblx0XHRsZXQgY29kZSA9XG5cdFx0XHRcIi8vIEVuc3VyZSB5b3VyIGFwcGxpY2F0aW9uIGhhcyB0aGUgYXBwcm9wcmlhdGUgcGVybWlzc2lvbnMgaW4gdGhlIG1hbmlmZXN0IG9yIHdpbmRvdyBvciB2aWV3IG9wdGlvbnMuXFxuXFxuXCI7XG5cdFx0Y29kZSArPSBcIi8vIEV4YW1wbGUgcGVybWlzc2lvbnMgYmxvY2s6XFxuXCI7XG5cdFx0Y29kZSArPSBgLypcXG5cInBlcm1pc3Npb25zXCI6ICR7SlNPTi5zdHJpbmdpZnkocGVybWlzc2lvbnMsIG51bGwsIDUpfVxcbiovXFxuXFxuYDtcblx0XHRjb2RlICs9IFwiLy8gTGlzdGVuIGZvciBkZXZpY2UgY29ubmVjdGlvbiBhbmQgZGlzY29ubmVjdGlvbiBldmVudHNcXG5cIjtcblx0XHRpZiAoaXNIaWREZXZpY2UpIHtcblx0XHRcdGNvZGUgKz1cblx0XHRcdFx0XCJuYXZpZ2F0b3IuaGlkLmFkZEV2ZW50TGlzdGVuZXIoXFxcImRpc2Nvbm5lY3RcXFwiLCAoZXZlbnQpID0+IHtcXG4gICAgY29uc29sZS5sb2coJ0hJRCBkaXNjb25uZWN0ZWQ6ICcgKyBldmVudC5kZXZpY2UucHJvZHVjdE5hbWUpO1xcbn0pO1xcblwiO1xuXHRcdFx0Y29kZSArPVxuXHRcdFx0XHRcIm5hdmlnYXRvci5oaWQuYWRkRXZlbnRMaXN0ZW5lcihcXFwiY29ubmVjdFxcXCIsIChldmVudCkgPT4ge1xcbiAgICBjb25zb2xlLmxvZygnSElEIGNvbm5lY3RlZDogJyArIGV2ZW50LmRldmljZS5wcm9kdWN0TmFtZSk7XFxufSk7XFxuXFxuXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvZGUgKz1cblx0XHRcdFx0XCJuYXZpZ2F0b3IudXNiLmFkZEV2ZW50TGlzdGVuZXIoXFxcImRpc2Nvbm5lY3RcXFwiLCAoZXZlbnQpID0+IHtcXG4gICAgY29uc29sZS5sb2coJ1VTQiBkaXNjb25uZWN0ZWQ6ICcgKyBldmVudC5kZXZpY2UucHJvZHVjdE5hbWUpO1xcbn0pO1xcblwiO1xuXHRcdFx0Y29kZSArPVxuXHRcdFx0XHRcIm5hdmlnYXRvci51c2IuYWRkRXZlbnRMaXN0ZW5lcihcXFwiY29ubmVjdFxcXCIsIChldmVudCkgPT4ge1xcbiAgICBjb25zb2xlLmxvZygnVVNCIGNvbm5lY3RlZDogJyArIGV2ZW50LmRldmljZS5wcm9kdWN0TmFtZSk7XFxufSk7XFxuXFxuXCI7XG5cdFx0fVxuXHRcdGNvZGUgKz0gYC8vIEdldHRpbmcgJHtpc0hpZERldmljZSA/IFwiSElEXCIgOiBcIlVTQlwifSBkZXZpY2VzXFxuYDtcblx0XHRjb2RlICs9XG5cdFx0XHRcIi8vIFlvdSBkb24ndCBuZWVkIHRvIGNhbGwgcmVxdWVzdERldmljZSBhcyB0aGUgZGV2aWNlIGhhcyBhbHJlYWR5IGJlZW4gZ2l2ZW4gcGVybWlzc2lvbnMgdGhyb3VnaCB0aGUgbWFuaWZlc3Qvd2luZG93L3ZpZXcgcGVybWlzc2lvbiBzZXR0aW5ncy4gWW91IGNhbiBjYWxsIGdldERldmljZXMgdG8gaW50ZXJhY3Qgd2l0aCB0aGUgZGV2aWNlLlxcblwiO1xuXHRcdGNvZGUgKz0gYGNvbnN0IGRldmljZXMgPSAke1xuXHRcdFx0aXNIaWREZXZpY2UgPyBcImF3YWl0IG5hdmlnYXRvci5oaWQuZ2V0RGV2aWNlcygpO1wiIDogXCJhd2FpdCBuYXZpZ2F0b3IudXNiLmdldERldmljZXMoKTtcIlxuXHRcdH1cXG5gO1xuXHRcdGNvZGUgKz0gYGNvbnNvbGUubG9nKCdGb3VuZCAnICsgZGV2aWNlcy5sZW5ndGggKyAnICR7aXNIaWREZXZpY2UgPyBcIkhJRFwiIDogXCJVU0JcIn0gZGV2aWNlcy4nKTtcXG5gO1xuXHRcdGNvZGUgKz1cblx0XHRcdFwiZGV2aWNlcy5mb3JFYWNoKChkZXZpY2UsIGluZGV4KSA9PiB7XFxuICAgIGNvbnNvbGUubG9nKCdEZXZpY2UgJyArIChpbmRleCArIDEpICsgJzogUHJvZHVjdCBOYW1lOiAnICsgZGV2aWNlLnByb2R1Y3ROYW1lICsgJywgVmVuZG9yIElEOiAnICsgZGV2aWNlLnZlbmRvcklkICsgJywgUHJvZHVjdCBJRDogJyArIGRldmljZS5wcm9kdWN0SWQpO1xcbn0pO1xcblxcblwiO1xuXHRcdGNvZGUgKz0gXCIvLyBTZWxlY3RpbmcgdGhlIGZpcnN0IGRldmljZSAoaWYgYW55KVxcblwiO1xuXHRcdGNvZGUgKz0gXCJjb25zdCBkZXZpY2UgPSBkZXZpY2VzLmxlbmd0aCA+IDAgPyBkZXZpY2VzWzBdIDogbnVsbDtcXG5cXG5cIjtcblx0XHRjb2RlICs9IFwiLy8gT3BlbmluZyB0aGUgZGV2aWNlXFxuXCI7XG5cdFx0Y29kZSArPVxuXHRcdFx0XCJpZiAoZGV2aWNlKSB7XFxuICAgIGF3YWl0IGRldmljZS5vcGVuKCk7XFxuICAgIGNvbnNvbGUubG9nKCdEZXZpY2Ugb3BlbmVkOicsIGRldmljZS5wcm9kdWN0TmFtZSk7XFxuXCI7XG5cdFx0aWYgKCFpc0hpZERldmljZSkge1xuXHRcdFx0Y29kZSArPSBcIiAgICAvLyBDb250aW51ZSB3aXRoIGludGVyZmFjZSBjbGFpbWluZyBhbmQgY29tbXVuaWNhdGlvbiBhcyBuZWVkZWRcXG5cIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29kZSArPSBcIiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzIGZvciBpbnB1dCByZXBvcnRzXFxuXCI7XG5cdFx0XHRjb2RlICs9IFwiICAgIGRldmljZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dHJlcG9ydCcsIChldmVudCkgPT4ge1xcblwiO1xuXHRcdFx0Y29kZSArPSBcIiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBVaW50OEFycmF5KGV2ZW50LmRhdGEuYnVmZmVyKTtcXG5cIjtcblx0XHRcdGNvZGUgKz0gXCIgICAgICAgIGNvbnNvbGUubG9nKCdJbnB1dCByZXBvcnQgcmVjZWl2ZWQ6JywgZGF0YSk7XFxuICAgIH0pO1xcblwiO1xuXHRcdH1cblx0XHRjb2RlICs9IFwifSBlbHNlIHtcXG4gICAgY29uc29sZS5sb2coJ05vIGRldmljZSBzZWxlY3RlZCcpO1xcbn1cXG5cIjtcblxuXHRcdGNvZGVFbGVtZW50LnRleHRDb250ZW50ID0gY29kZTtcblx0fVxufVxuXG4vKipcbiAqIEFuYWx5emUgYW5kIGRpc3BsYXkgaW5mb3JtYXRpb24gYWJvdXQgYSBVU0IgZGV2aWNlIHRvIGhlbHAgZGV0ZXJtaW5lIGNvbXBhdGliaWxpdHkuXG4gKiBAcGFyYW0gZGV2aWNlIFRoZSBVU0IgZGV2aWNlIHRvIGFuYWx5emVcbiAqL1xuZnVuY3Rpb24gYW5hbHl6ZVVTQkRldmljZShkZXZpY2U6IFVTQkRldmljZSk6IHZvaWQge1xuXHQvLyBEZWZpbmUga25vd24gVVNCIGNsYXNzZXNcblx0Y29uc3Qga25vd25DbGFzc2VzOiB7IFtrZXk6IG51bWJlcl06IHN0cmluZyB9ID0ge1xuXHRcdDA6IFwiSW50ZXJmYWNlLXNwZWNpZmljXCIsXG5cdFx0MTogXCJBdWRpb1wiLFxuXHRcdDI6IFwiQ29tbXVuaWNhdGlvbnMgYW5kIENEQyBDb250cm9sXCIsXG5cdFx0MzogXCJISUQgKEh1bWFuIEludGVyZmFjZSBEZXZpY2UpXCIsXG5cdFx0NTogXCJQaHlzaWNhbFwiLFxuXHRcdDY6IFwiSW1hZ2VcIixcblx0XHQ3OiBcIlByaW50ZXJcIixcblx0XHQ4OiBcIk1hc3MgU3RvcmFnZVwiLFxuXHRcdDk6IFwiSHViXCIsXG5cdFx0MTA6IFwiQ0RDLURhdGFcIixcblx0XHQxMTogXCJTbWFydCBDYXJkXCIsXG5cdFx0MTM6IFwiQ29udGVudCBTZWN1cml0eVwiLFxuXHRcdDE0OiBcIlZpZGVvXCIsXG5cdFx0MTU6IFwiUGVyc29uYWwgSGVhbHRoY2FyZVwiLFxuXHRcdDIyMDogXCJEaWFnbm9zdGljIERldmljZVwiLFxuXHRcdDIyNDogXCJXaXJlbGVzcyBDb250cm9sbGVyXCIsXG5cdFx0MjM5OiBcIk1pc2NlbGxhbmVvdXNcIixcblx0XHQyNTQ6IFwiQXBwbGljYXRpb24gU3BlY2lmaWNcIixcblx0XHQyNTU6IFwiVmVuZG9yIFNwZWNpZmljXCJcblx0fTtcblxuXHQvLyBJZiBubyBjb25maWd1cmF0aW9uIGlzIHNlbGVjdGVkIG9yIGF2YWlsYWJsZVxuXHRpZiAoIWRldmljZS5jb25maWd1cmF0aW9uKSB7XG5cdFx0bG9nZ2luZ0FkZEVudHJ5KFwiRGV2aWNlIGhhcyBubyBhY3RpdmUgY29uZmlndXJhdGlvbi5cIik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bG9nZ2luZ0FkZEVudHJ5KFwiXFxuRGV2aWNlIEFuYWx5c2lzOlwiKTtcblx0bG9nZ2luZ0FkZEVudHJ5KGBEZXZpY2UgTmFtZTogJHtkZXZpY2UucHJvZHVjdE5hbWUgPz8gXCJVbmtub3duXCJ9YCk7XG5cdGxvZ2dpbmdBZGRFbnRyeShgTWFudWZhY3R1cmVyOiAke2RldmljZS5tYW51ZmFjdHVyZXJOYW1lID8/IFwiVW5rbm93blwifWApO1xuXHRsb2dnaW5nQWRkRW50cnkoYFNlcmlhbCBOdW1iZXI6ICR7ZGV2aWNlLnNlcmlhbE51bWJlciA/PyBcIk5vdCBhdmFpbGFibGVcIn1gKTtcblxuXHQvLyBEaXNwbGF5IGNvbmZpZ3VyYXRpb25zXG5cdGxvZ2dpbmdBZGRFbnRyeShgXFxuRGV2aWNlIGhhcyAke2RldmljZS5jb25maWd1cmF0aW9ucy5sZW5ndGh9IGNvbmZpZ3VyYXRpb24ocykuYCk7XG5cdGxvZ2dpbmdBZGRFbnRyeShgQWN0aXZlIENvbmZpZ3VyYXRpb246ICR7ZGV2aWNlLmNvbmZpZ3VyYXRpb24uY29uZmlndXJhdGlvblZhbHVlfS5gKTtcblxuXHQvLyBBbmFseXplIGludGVyZmFjZXNcblx0Y29uc3QgaW50ZXJmYWNlcyA9IGRldmljZS5jb25maWd1cmF0aW9uLmludGVyZmFjZXM7XG5cdGxvZ2dpbmdBZGRFbnRyeShgXFxuSW50ZXJmYWNlcyAoJHtpbnRlcmZhY2VzLmxlbmd0aH0pOmApO1xuXG5cdGxldCBoYXNQcm90ZWN0ZWRDbGFzcyA9IGZhbHNlO1xuXHRsZXQgaXNIaWREZXZpY2UgPSBmYWxzZTtcblx0bGV0IGhhc1ZlbmRvclNwZWNpZmljID0gZmFsc2U7XG5cblx0Zm9yIChjb25zdCBbaW5kZXgsIGlmYWNlXSBvZiBpbnRlcmZhY2VzLmVudHJpZXMoKSkge1xuXHRcdGNvbnN0IGlmYWNlQ2xhc3MgPSBpZmFjZS5hbHRlcm5hdGUuaW50ZXJmYWNlQ2xhc3M7XG5cdFx0Y29uc3QgY2xhc3NOYW1lID0ga25vd25DbGFzc2VzW2lmYWNlQ2xhc3NdIHx8IGBVbmtub3duIENsYXNzICgke2lmYWNlQ2xhc3N9KWA7XG5cblx0XHRsb2dnaW5nQWRkRW50cnkoYEludGVyZmFjZSAke2luZGV4fTogQ2xhc3MgJHtpZmFjZUNsYXNzfSAtICR7Y2xhc3NOYW1lfWApO1xuXG5cdFx0Ly8gQ2hlY2sgZm9yIHNwZWNpZmljIGNsYXNzZXNcblx0XHRpZiAoaWZhY2VDbGFzcyA9PT0gMykge1xuXHRcdFx0aXNIaWREZXZpY2UgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGlmIChpZmFjZUNsYXNzID09PSAyNTUpIHtcblx0XHRcdGhhc1ZlbmRvclNwZWNpZmljID0gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBDaGVjayBpZiB0aGlzIGlzIGxpa2VseSBhIHByb3RlY3RlZCBjbGFzc1xuXHRcdGlmIChbMSwgMywgNywgOCwgOSwgMTQsIDE1XS5pbmNsdWRlcyhpZmFjZUNsYXNzKSkge1xuXHRcdFx0aGFzUHJvdGVjdGVkQ2xhc3MgPSB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdC8vIFByb3ZpZGUgcmVjb21tZW5kYXRpb25zXG5cdGxvZ2dpbmdBZGRFbnRyeShcIlxcblJlY29tbWVuZGF0aW9uczpcIik7XG5cblx0aWYgKGlzSGlkRGV2aWNlKSB7XG5cdFx0bG9nZ2luZ0FkZEVudHJ5KFwi4pyW77iPIFRoaXMgYXBwZWFycyB0byBiZSBhbiBISUQgZGV2aWNlLiBXZWJVU0IgY2Fubm90IGFjY2VzcyBISUQgaW50ZXJmYWNlcy5cIik7XG5cdFx0bG9nZ2luZ0FkZEVudHJ5KFwi4pyFIFBsZWFzZSB1c2UgV2ViSElEIEFQSSBpbnN0ZWFkIGZvciB0aGlzIGRldmljZS5cIik7XG5cdH0gZWxzZSBpZiAoaGFzUHJvdGVjdGVkQ2xhc3MpIHtcblx0XHRsb2dnaW5nQWRkRW50cnkoXCLimqDvuI8gVGhpcyBkZXZpY2UgaGFzIGludGVyZmFjZXMgdGhhdCBhcmUgbGlrZWx5IHByb3RlY3RlZCBjbGFzc2VzLlwiKTtcblx0XHRsb2dnaW5nQWRkRW50cnkoXCIgICBCcm93c2VyIHNlY3VyaXR5IHJlc3RyaWN0aW9ucyBtYXkgcHJldmVudCBXZWJVU0IgZnJvbSBhY2Nlc3Npbmcgc29tZSBpbnRlcmZhY2VzLlwiKTtcblxuXHRcdGlmIChoYXNWZW5kb3JTcGVjaWZpYykge1xuXHRcdFx0bG9nZ2luZ0FkZEVudHJ5KFwi4pyFIEhvd2V2ZXIsIHRoZSBkZXZpY2UgaGFzIHZlbmRvci1zcGVjaWZpYyBpbnRlcmZhY2VzIHRoYXQgbWlnaHQgYmUgYWNjZXNzaWJsZS5cIik7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGhhc1ZlbmRvclNwZWNpZmljKSB7XG5cdFx0bG9nZ2luZ0FkZEVudHJ5KFxuXHRcdFx0XCLinIUgVGhpcyBkZXZpY2UgaGFzIHZlbmRvci1zcGVjaWZpYyBpbnRlcmZhY2VzIHdoaWNoIGFyZSB0eXBpY2FsbHkgYWNjZXNzaWJsZSB2aWEgV2ViVVNCLlwiXG5cdFx0KTtcblx0fSBlbHNlIHtcblx0XHRsb2dnaW5nQWRkRW50cnkoXG5cdFx0XHRcIuKdkyBUaGlzIGRldmljZSBtYXkgb3IgbWF5IG5vdCBiZSBjb21wYXRpYmxlIHdpdGggV2ViVVNCLCBkZXBlbmRpbmcgb24gaXRzIHNwZWNpZmljIGludGVyZmFjZXMuXCJcblx0XHQpO1xuXHR9XG5cblx0bG9nZ2luZ0FkZEVudHJ5KFwiXFxuQ29ubmVjdGlvbiBlc3RhYmxpc2hlZCBzdWNjZXNzZnVsbHkuIFRoZSBkZXZpY2UgaXMgbm93IHJlYWR5IGZvciBjb21tdW5pY2F0aW9uLlwiKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==