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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxDQUFDO1lBQ3ZCLGVBQWUsQ0FBQyxnRkFBZ0YsQ0FBQyxDQUFDO1FBQ25HLENBQUM7SUFDRixDQUFDO1NBQU0sSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1FBQzlCLGVBQWUsQ0FDZCx5RkFBeUYsQ0FDekYsQ0FBQztJQUNILENBQUM7U0FBTSxDQUFDO1FBQ1AsZUFBZSxDQUNkLCtGQUErRixDQUMvRixDQUFDO0lBQ0gsQ0FBQztJQUVELGVBQWUsQ0FBQyxtRkFBbUYsQ0FBQyxDQUFDO0FBQ3RHLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXRlY3QtdXNiLWRldmljZXMvLi9jbGllbnQvc3JjL2RldmljZS10eXBlLnRzIiwid2VicGFjazovL2RldGVjdC11c2ItZGV2aWNlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZXRlY3QtdXNiLWRldmljZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RldGVjdC11c2ItZGV2aWNlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2RldGVjdC11c2ItZGV2aWNlcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RldGVjdC11c2ItZGV2aWNlcy8uL2NsaWVudC9zcmMvZGV2aWNlLWNvbm5lY3Rvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgVVNCX0RFVklDRSA9IFwiVVNCXCI7XG5leHBvcnQgY29uc3QgSElEX0RFVklDRSA9IFwiSElEXCI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIG5ld2xpbmUtcGVyLWNoYWluZWQtY2FsbCAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1udWxsaXNoLWNvYWxlc2NpbmcgKi9cbmltcG9ydCB0eXBlIHsgT3BlbkZpbiB9IGZyb20gXCJAb3BlbmZpbi9jb3JlXCI7XG5pbXBvcnQgeyBISURfREVWSUNFLCBVU0JfREVWSUNFIH0gZnJvbSBcIi4vZGV2aWNlLXR5cGVcIjtcblxuLy8gR2xvYmFsIHZhcmlhYmxlc1xubGV0IGxvZ2dpbmdFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBpbml0KCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdH1cbn0pO1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIERPTSBjb21wb25lbnRzLlxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCB0YWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhZ1wiKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XG5cdGxvZ2dpbmdFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2dnaW5nXCIpO1xuXHQvLyBFeHRyYWN0IHRoZSAnZGV2aWNlVHlwZScgcGFyYW1ldGVyIGZyb20gdGhlIHF1ZXJ5c3RyaW5nXG5cdGNvbnN0IHNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaDtcblx0Y29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhzZWFyY2gpO1xuXHRjb25zdCBkZXZpY2VUeXBlUGFyYW0gPSB1cmxQYXJhbXMuZ2V0KFwiZGV2aWNlVHlwZVwiKTtcblx0bGV0IGRldmljZVR5cGUgPSBVU0JfREVWSUNFO1xuXHRpZiAoZGV2aWNlVHlwZVBhcmFtID09PSBISURfREVWSUNFKSB7XG5cdFx0ZGV2aWNlVHlwZSA9IEhJRF9ERVZJQ0U7XG5cdFx0bmF2aWdhdG9yLmhpZC5hZGRFdmVudExpc3RlbmVyKFwiZGlzY29ubmVjdFwiLCAoZXZlbnQpID0+IHtcblx0XHRcdGxvZ2dpbmdBZGRFbnRyeShgSElEIGRpc2Nvbm5lY3RlZDogJHtldmVudC5kZXZpY2UucHJvZHVjdE5hbWV9YCk7XG5cdFx0fSk7XG5cdFx0bmF2aWdhdG9yLmhpZC5hZGRFdmVudExpc3RlbmVyKFwiY29ubmVjdFwiLCAoZXZlbnQpID0+IHtcblx0XHRcdGxvZ2dpbmdBZGRFbnRyeShgSElEIGNvbm5lY3RlZDogJHtldmVudC5kZXZpY2UucHJvZHVjdE5hbWV9YCk7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0bmF2aWdhdG9yLnVzYi5hZGRFdmVudExpc3RlbmVyKFwiZGlzY29ubmVjdFwiLCAoZXZlbnQpID0+IHtcblx0XHRcdGxvZ2dpbmdBZGRFbnRyeShgVVNCIGRpc2Nvbm5lY3RlZDogJHtldmVudC5kZXZpY2UucHJvZHVjdE5hbWV9YCk7XG5cdFx0fSk7XG5cdFx0bmF2aWdhdG9yLnVzYi5hZGRFdmVudExpc3RlbmVyKFwiY29ubmVjdFwiLCAoZXZlbnQpID0+IHtcblx0XHRcdGxvZ2dpbmdBZGRFbnRyeShgVVNCIGNvbm5lY3RlZDogJHtldmVudC5kZXZpY2UucHJvZHVjdE5hbWV9YCk7XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBidG5Mb2dnaW5nQ2xlYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bkxvZ2dpbmdDbGVhclwiKTtcblx0aWYgKGJ0bkxvZ2dpbmdDbGVhcikge1xuXHRcdGJ0bkxvZ2dpbmdDbGVhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0aWYgKGxvZ2dpbmdFbGVtZW50KSB7XG5cdFx0XHRcdGxvZ2dpbmdFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IGJ0bk9wZW5EZXZpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bk9wZW5EZXZpY2VcIik7XG5cdGlmIChidG5PcGVuRGV2aWNlKSB7XG5cdFx0YnRuT3BlbkRldmljZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0bG9nZ2luZ0FkZEVudHJ5KFwiR2F0aGVyaW5nIGRldmljZXMuXCIpO1xuXHRcdFx0bGV0IGRldmljZXM6IChVU0JEZXZpY2UgfCBISUREZXZpY2UpW10gPSBbXTtcblx0XHRcdGlmIChkZXZpY2VUeXBlUGFyYW0gPT09IEhJRF9ERVZJQ0UpIHtcblx0XHRcdFx0ZGV2aWNlcyA9IGF3YWl0IG5hdmlnYXRvci5oaWQuZ2V0RGV2aWNlcygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGV2aWNlcyA9IGF3YWl0IG5hdmlnYXRvci51c2IuZ2V0RGV2aWNlcygpO1xuXHRcdFx0fVxuXG5cdFx0XHRsb2dnaW5nQWRkRW50cnkoYEZvdW5kICR7ZGV2aWNlcy5sZW5ndGh9ICR7ZGV2aWNlVHlwZX0gZGV2aWNlcy5gKTtcblx0XHRcdGZvciAoY29uc3QgW2luZGV4LCBkZXZpY2VdIG9mIGRldmljZXMuZW50cmllcygpKSB7XG5cdFx0XHRcdGxvZ2dpbmdBZGRFbnRyeShcblx0XHRcdFx0XHRgRGV2aWNlICR7aW5kZXggKyAxfTogUHJvZHVjdCBOYW1lOiAke2RldmljZS5wcm9kdWN0TmFtZX0sIFZlbmRvciBJRDogJHtcblx0XHRcdFx0XHRcdGRldmljZS52ZW5kb3JJZFxuXHRcdFx0XHRcdH0sIFByb2R1Y3QgSUQ6ICR7ZGV2aWNlLnByb2R1Y3RJZH1gXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChkZXZpY2VzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0bG9nZ2luZ0FkZEVudHJ5KFwiU2VsZWN0aW5nIGZpcnN0IGRldmljZS5cIik7XG5cdFx0XHRcdGNvbnN0IGRldmljZSA9IGRldmljZXNbMF07XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aWYgKGRldmljZS5vcGVuZWQpIHtcblx0XHRcdFx0XHRcdGxvZ2dpbmdBZGRFbnRyeShcIkRldmljZSBhbHJlYWR5IG9wZW5lZC4gQ2xvc2luZyBpdCBmaXJzdC5cIik7XG5cdFx0XHRcdFx0XHRhd2FpdCBkZXZpY2UuY2xvc2UoKTtcblx0XHRcdFx0XHRcdGxvZ2dpbmdBZGRFbnRyeShcIkRldmljZSBjbG9zZWQuXCIpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGF3YWl0IGRldmljZS5vcGVuKCk7XG5cdFx0XHRcdFx0bG9nZ2luZ0FkZEVudHJ5KGBEZXZpY2Ugb3BlbmVkOiAke2RldmljZS5wcm9kdWN0TmFtZX1gKTtcblxuXHRcdFx0XHRcdGlmIChkZXZpY2VUeXBlUGFyYW0gPT09IEhJRF9ERVZJQ0UpIHtcblx0XHRcdFx0XHRcdC8vIEhJRCBkZXZpY2UgaGFuZGxpbmdcblx0XHRcdFx0XHRcdGxvZ2dpbmdBZGRFbnRyeShgU3VjY2Vzc2Z1bGx5IGNvbm5lY3RlZCB0byBISUQgZGV2aWNlOiAke2RldmljZS5wcm9kdWN0TmFtZX1gKTtcblx0XHRcdFx0XHRcdGxvZ2dpbmdBZGRFbnRyeShgVmVuZG9yIElEOiAke2RldmljZS52ZW5kb3JJZH0sIFByb2R1Y3QgSUQ6ICR7ZGV2aWNlLnByb2R1Y3RJZH1gKTtcblx0XHRcdFx0XHRcdGxvZ2dpbmdBZGRFbnRyeShcIlRvIHJlY2VpdmUgaW5wdXQgZXZlbnRzLCB1c2UgdGhlICdpbnB1dHJlcG9ydCcgZXZlbnQgbGlzdGVuZXIuXCIpO1xuXG5cdFx0XHRcdFx0XHQvLyBBZGQgYSBzaW1wbGUgaW5wdXQgcmVwb3J0IGxpc3RlbmVyIHRvIGRlbW9uc3RyYXRlIGl0J3Mgd29ya2luZ1xuXHRcdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0XHRcdFx0XHRcdChkZXZpY2UgYXMgSElERGV2aWNlKS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRyZXBvcnRcIiwgKGV2ZW50OiBhbnkpID0+IHtcblx0XHRcdFx0XHRcdFx0bG9nZ2luZ0FkZEVudHJ5KFwiUmVjZWl2ZWQgaW5wdXQgcmVwb3J0IGV2ZW50LlwiKTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgZGF0YSA9IG5ldyBVaW50OEFycmF5KGV2ZW50LmRhdGEuYnVmZmVyKTtcblx0XHRcdFx0XHRcdFx0bG9nZ2luZ0FkZEVudHJ5KFxuXHRcdFx0XHRcdFx0XHRcdGBJbnB1dCByZXBvcnQgcmVjZWl2ZWQgLSBSZXBvcnQgSUQ6ICR7ZXZlbnQucmVwb3J0SWR9LCBEYXRhOiAke0FycmF5LmZyb20oZGF0YSlcblx0XHRcdFx0XHRcdFx0XHRcdC5tYXAoKGIpID0+IGIudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsIFwiMFwiKSlcblx0XHRcdFx0XHRcdFx0XHRcdC5qb2luKFwiIFwiKX1gXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0bG9nZ2luZ0FkZEVudHJ5KFwiQ29ubmVjdGlvbiBzdWNjZXNzZnVsISBXYWl0aW5nIGZvciBkZXZpY2UgaW5wdXQuLi5cIik7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIFVTQiBkZXZpY2UgaGFuZGxpbmdcblx0XHRcdFx0XHRcdGNvbnN0IHVzYkRldmljZSA9IGRldmljZSBhcyBVU0JEZXZpY2U7XG5cdFx0XHRcdFx0XHRsb2dnaW5nQWRkRW50cnkoYENvbm5lY3RlZCB0byBVU0IgZGV2aWNlOiAke3VzYkRldmljZS5wcm9kdWN0TmFtZX1gKTtcblx0XHRcdFx0XHRcdGxvZ2dpbmdBZGRFbnRyeShgVmVuZG9yIElEOiAke3VzYkRldmljZS52ZW5kb3JJZH0sIFByb2R1Y3QgSUQ6ICR7dXNiRGV2aWNlLnByb2R1Y3RJZH1gKTtcblxuXHRcdFx0XHRcdFx0Ly8gQ2hlY2sgaWYgYSBjb25maWd1cmF0aW9uIGlzIHNlbGVjdGVkXG5cdFx0XHRcdFx0XHRpZiAodXNiRGV2aWNlLmNvbmZpZ3VyYXRpb24gPT09IG51bGwgJiYgdXNiRGV2aWNlLmNvbmZpZ3VyYXRpb25zLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdFx0bG9nZ2luZ0FkZEVudHJ5KFwiU2VsZWN0aW5nIHRoZSBmaXJzdCBjb25maWd1cmF0aW9uLlwiKTtcblx0XHRcdFx0XHRcdFx0YXdhaXQgdXNiRGV2aWNlLnNlbGVjdENvbmZpZ3VyYXRpb24odXNiRGV2aWNlLmNvbmZpZ3VyYXRpb25zWzBdLmNvbmZpZ3VyYXRpb25WYWx1ZSk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIEFuYWx5emUgYW5kIGRpc3BsYXkgZGV2aWNlIGluZm9ybWF0aW9uXG5cdFx0XHRcdFx0XHRhbmFseXplVVNCRGV2aWNlKHVzYkRldmljZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdFx0XHRcdGNvbnN0IGVycm9yTWVzc2FnZSA9XG5cdFx0XHRcdFx0XHR0eXBlb2YgZXJyb3IgPT09IFwib2JqZWN0XCIgJiYgZXJyb3IgIT09IG51bGwgJiYgXCJtZXNzYWdlXCIgaW4gZXJyb3Jcblx0XHRcdFx0XHRcdFx0PyAoZXJyb3IgYXMgeyBtZXNzYWdlPzogc3RyaW5nIH0pLm1lc3NhZ2UgPz8gXCJVbmtub3duIGVycm9yXCJcblx0XHRcdFx0XHRcdFx0OiBcIlVua25vd24gZXJyb3JcIjtcblx0XHRcdFx0XHRsb2dnaW5nQWRkRW50cnkoYEVycm9yOiAke2Vycm9yTWVzc2FnZX1gKTtcblxuXHRcdFx0XHRcdGlmIChlcnJvck1lc3NhZ2UuaW5jbHVkZXMoXCJwcm90ZWN0ZWQgY2xhc3NcIikpIHtcblx0XHRcdFx0XHRcdGxvZ2dpbmdBZGRFbnRyeShcIlxcblRoaXMgZGV2aWNlIGhhcyBwcm90ZWN0ZWQgaW50ZXJmYWNlcyB0aGF0IGNhbm5vdCBiZSBhY2Nlc3NlZCBkaXJlY3RseS5cIik7XG5cdFx0XHRcdFx0XHRsb2dnaW5nQWRkRW50cnkoXG5cdFx0XHRcdFx0XHRcdFwiSWYgdGhpcyBpcyBhIEhJRCBkZXZpY2UgKGxpa2Uga2V5Ym9hcmQsIG1vdXNlLCBnYW1lcGFkKSwgdHJ5IHVzaW5nIHRoZSBXZWJISUQgQVBJIGluc3RlYWQuXCJcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRsb2dnaW5nQWRkRW50cnkoXCJQcm90ZWN0ZWQgY2xhc3NlcyBpbmNsdWRlOiBISUQsIEF1ZGlvLCBNYXNzIFN0b3JhZ2UsIFZpZGVvLCBldGMuXCIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3QgYnRuQ29kZUNvcHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bkNvZGVDb3B5XCIpO1xuXHRpZiAoYnRuQ29kZUNvcHkpIHtcblx0XHRidG5Db2RlQ29weS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0bG9nZ2luZ0FkZEVudHJ5KFwiQ29weWluZyBjb2RlIHRvIGNsaXBib2FyZFwiKTtcblx0XHRcdGNvbnN0IGNvZGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb2RlXCIpO1xuXHRcdFx0aWYgKGNvZGVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aWYgKGxvY2F0aW9uLmhyZWYuc3RhcnRzV2l0aChcImh0dHBzOlwiKSkge1xuXHRcdFx0XHRcdFx0YXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29kZUVsZW1lbnQudGV4dENvbnRlbnQgfHwgXCJcIik7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGF3YWl0IGZpbi5DbGlwYm9hcmQud3JpdGVUZXh0KHsgZGF0YTogY29kZUVsZW1lbnQudGV4dENvbnRlbnQgfHwgXCJcIiB9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bG9nZ2luZ0FkZEVudHJ5KFwiQ29kZSBjb3BpZWQgdG8gY2xpcGJvYXJkXCIpO1xuXHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdGxvZ2dpbmdBZGRFbnRyeShgRmFpbGVkIHRvIGNvcHkgY29kZSB0byBjbGlwYm9hcmQ6ICR7ZXJyb3J9YCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGlmIChmaW4pIHtcblx0XHRjb25zdCBpbmZvID0gYXdhaXQgZmluLm1lLmdldE9wdGlvbnMoKTtcblx0XHRjb25zdCBwZXJtaXNzaW9ucyA9IGluZm8ucGVybWlzc2lvbnM7XG5cdFx0d3JpdGVDb2RlKGRldmljZVR5cGUgPT09IEhJRF9ERVZJQ0UsIHBlcm1pc3Npb25zKTtcblx0XHRjb25zdCBkZXZpY2VzID0gcGVybWlzc2lvbnM/LmRldmljZXM7XG5cdFx0bGV0IGRldmljZTogT3BlbkZpbi5EZXZpY2VJbmZvIHwgdW5kZWZpbmVkO1xuXHRcdGlmICh0YWcpIHtcblx0XHRcdGlmIChkZXZpY2VzICYmIGRldmljZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRkZXZpY2UgPSBkZXZpY2VzWzBdO1xuXHRcdFx0XHR0YWcudGV4dENvbnRlbnQgPSBgRGV2aWNlIENvbm5lY3RvciAtIERldmljZSBUeXBlOiAke2RldmljZVR5cGV9IFZlbmRvciBJZDogJHtkZXZpY2UudmVuZG9ySWR9IDogUHJvZHVjdCBJZDogJHtkZXZpY2UucHJvZHVjdElkfWA7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0YWcudGV4dENvbnRlbnQgPSBcIkRldmljZSBDb25uZWN0b3IgLSBObyBkZXZpY2UgcGVybWlzc2lvbnMgZm91bmRcIjtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGRldmljZSkge1xuXHRcdFx0bG9nZ2luZ0FkZEVudHJ5KFwiRmV0Y2hpbmcgcGVybWlzc2lvbnMuXCIpO1xuXHRcdFx0Y29uc3QgbG9nUGVybWlzc2lvbnMgPSBgUmVxdWlyZWQgcGVybWlzc2lvbnM6XG4gICAgICAgICAgICBcblRoaXMgY291bGQgYmUgY29udHJvbGxlZCB0aHJvdWdoIERvbWFpbiBTZXR0aW5nIFJ1bGVzIGluIHRoZSBtYW5pZmVzdCwgYXMgcGVybWlzc2lvbnMgaW4geW91ciBzdGFydHVwX2FwcCBvciBwbGF0Zm9ybSBjb25maWd1cmF0aW9uIGluIHRoZSBtYW5pZmVzdCAodGhlIHBlcm1pc3Npb24gd2lsbCBhcHBseSB0byB0aGUgbWFpbi9wcm92aWRlciB3aW5kb3cpLCBpbiB5b3VyIHBsYXRmb3JtIGNvbmZpZ3VyYXRpb24gYXMgZGVmYXVsdCB2aWV3T3B0aW9ucyBvciB3aW5kb3dPcHRpb25zICh0aGUgcGxhdGZvcm0gbXVzdCBkZWZpbmUgdGhlIHBlcm1pc3Npb24gYXMgd2VsbCkgb3IgYWRkZWQgdG8gc3BlY2lmaWMgd2luZG93IG9yIHZpZXdzLlxuXG5QZXJtaXNzaW9uIEJsb2NrOlxuXG5cInBlcm1pc3Npb25zXCI6ICR7SlNPTi5zdHJpbmdpZnkocGVybWlzc2lvbnMsIG51bGwsIDUpfWA7XG5cdFx0XHRsb2dnaW5nQWRkRW50cnkobG9nUGVybWlzc2lvbnMpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBlbnRyeSBpbiB0byB0aGUgbG9nZ2luZyB3aW5kb3cgd2l0aCBhIHRpbWVzdGFtcC5cbiAqIEBwYXJhbSBlbnRyeSBUaGUgZW50cnkgdG8gYWRkLlxuICovXG5mdW5jdGlvbiBsb2dnaW5nQWRkRW50cnkoZW50cnk6IHN0cmluZyk6IHZvaWQge1xuXHRpZiAobG9nZ2luZ0VsZW1lbnQpIHtcblx0XHQvLyBDcmVhdGUgdGltZXN0YW1wIGluIGZvcm1hdCBISDpNTTpTUzptbW1cblx0XHRjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXHRcdGNvbnN0IGhvdXJzID0gbm93LmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG5cdFx0Y29uc3QgbWludXRlcyA9IG5vdy5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG5cdFx0Y29uc3Qgc2Vjb25kcyA9IG5vdy5nZXRTZWNvbmRzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG5cdFx0Y29uc3QgbWlsbGlzZWNvbmRzID0gbm93LmdldE1pbGxpc2Vjb25kcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgXCIwXCIpO1xuXHRcdGNvbnN0IHRpbWVzdGFtcCA9IGAke2hvdXJzfToke21pbnV0ZXN9OiR7c2Vjb25kc306JHttaWxsaXNlY29uZHN9YDtcblxuXHRcdGxvZ2dpbmdFbGVtZW50LnRleHRDb250ZW50ID0gYFske3RpbWVzdGFtcH1dOiAke2VudHJ5fVxcblxcbiR7bG9nZ2luZ0VsZW1lbnQudGV4dENvbnRlbnR9YDtcblx0fVxufVxuXG4vKipcbiAqIFdyaXRlcyBleGFtcGxlIGNvZGUgdG8gdGhlIGNvZGUgYmxvY2sgYmFzZWQgb24gZGV2aWNlIHR5cGUgYW5kIHBlcm1pc3Npb25zLlxuICogQHBhcmFtIGlzSGlkRGV2aWNlIFRydWUgaWYgdGhlIGRldmljZSBpcyBISUQsIGZhbHNlIGlmIFVTQi5cbiAqIEBwYXJhbSBwZXJtaXNzaW9ucyBUaGUgcGVybWlzc2lvbnMgdG8gaW5jbHVkZSBpbiB0aGUgZXhhbXBsZSBjb2RlLlxuICovXG5mdW5jdGlvbiB3cml0ZUNvZGUoaXNIaWREZXZpY2U6IGJvb2xlYW4sIHBlcm1pc3Npb25zPzogT3BlbkZpbi5QZXJtaXNzaW9ucyk6IHZvaWQge1xuXHRjb25zdCBjb2RlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29kZVwiKTtcblx0aWYgKGNvZGVFbGVtZW50KSB7XG5cdFx0bGV0IGNvZGUgPVxuXHRcdFx0XCIvLyBFbnN1cmUgeW91ciBhcHBsaWNhdGlvbiBoYXMgdGhlIGFwcHJvcHJpYXRlIHBlcm1pc3Npb25zIGluIHRoZSBtYW5pZmVzdCBvciB3aW5kb3cgb3IgdmlldyBvcHRpb25zLlxcblxcblwiO1xuXHRcdGNvZGUgKz0gXCIvLyBFeGFtcGxlIHBlcm1pc3Npb25zIGJsb2NrOlxcblwiO1xuXHRcdGNvZGUgKz0gYC8qXFxuXCJwZXJtaXNzaW9uc1wiOiAke0pTT04uc3RyaW5naWZ5KHBlcm1pc3Npb25zLCBudWxsLCA1KX1cXG4qL1xcblxcbmA7XG5cdFx0Y29kZSArPSBcIi8vIExpc3RlbiBmb3IgZGV2aWNlIGNvbm5lY3Rpb24gYW5kIGRpc2Nvbm5lY3Rpb24gZXZlbnRzXFxuXCI7XG5cdFx0aWYgKGlzSGlkRGV2aWNlKSB7XG5cdFx0XHRjb2RlICs9XG5cdFx0XHRcdFwibmF2aWdhdG9yLmhpZC5hZGRFdmVudExpc3RlbmVyKFxcXCJkaXNjb25uZWN0XFxcIiwgKGV2ZW50KSA9PiB7XFxuICAgIGNvbnNvbGUubG9nKCdISUQgZGlzY29ubmVjdGVkOiAnICsgZXZlbnQuZGV2aWNlLnByb2R1Y3ROYW1lKTtcXG59KTtcXG5cIjtcblx0XHRcdGNvZGUgKz1cblx0XHRcdFx0XCJuYXZpZ2F0b3IuaGlkLmFkZEV2ZW50TGlzdGVuZXIoXFxcImNvbm5lY3RcXFwiLCAoZXZlbnQpID0+IHtcXG4gICAgY29uc29sZS5sb2coJ0hJRCBjb25uZWN0ZWQ6ICcgKyBldmVudC5kZXZpY2UucHJvZHVjdE5hbWUpO1xcbn0pO1xcblxcblwiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb2RlICs9XG5cdFx0XHRcdFwibmF2aWdhdG9yLnVzYi5hZGRFdmVudExpc3RlbmVyKFxcXCJkaXNjb25uZWN0XFxcIiwgKGV2ZW50KSA9PiB7XFxuICAgIGNvbnNvbGUubG9nKCdVU0IgZGlzY29ubmVjdGVkOiAnICsgZXZlbnQuZGV2aWNlLnByb2R1Y3ROYW1lKTtcXG59KTtcXG5cIjtcblx0XHRcdGNvZGUgKz1cblx0XHRcdFx0XCJuYXZpZ2F0b3IudXNiLmFkZEV2ZW50TGlzdGVuZXIoXFxcImNvbm5lY3RcXFwiLCAoZXZlbnQpID0+IHtcXG4gICAgY29uc29sZS5sb2coJ1VTQiBjb25uZWN0ZWQ6ICcgKyBldmVudC5kZXZpY2UucHJvZHVjdE5hbWUpO1xcbn0pO1xcblxcblwiO1xuXHRcdH1cblx0XHRjb2RlICs9IGAvLyBHZXR0aW5nICR7aXNIaWREZXZpY2UgPyBcIkhJRFwiIDogXCJVU0JcIn0gZGV2aWNlc1xcbmA7XG5cdFx0Y29kZSArPVxuXHRcdFx0XCIvLyBZb3UgZG9uJ3QgbmVlZCB0byBjYWxsIHJlcXVlc3REZXZpY2UgYXMgdGhlIGRldmljZSBoYXMgYWxyZWFkeSBiZWVuIGdpdmVuIHBlcm1pc3Npb25zIHRocm91Z2ggdGhlIG1hbmlmZXN0L3dpbmRvdy92aWV3IHBlcm1pc3Npb24gc2V0dGluZ3MuIFlvdSBjYW4gY2FsbCBnZXREZXZpY2VzIHRvIGludGVyYWN0IHdpdGggdGhlIGRldmljZS5cXG5cIjtcblx0XHRjb2RlICs9IGBjb25zdCBkZXZpY2VzID0gJHtcblx0XHRcdGlzSGlkRGV2aWNlID8gXCJhd2FpdCBuYXZpZ2F0b3IuaGlkLmdldERldmljZXMoKTtcIiA6IFwiYXdhaXQgbmF2aWdhdG9yLnVzYi5nZXREZXZpY2VzKCk7XCJcblx0XHR9XFxuYDtcblx0XHRjb2RlICs9IGBjb25zb2xlLmxvZygnRm91bmQgJyArIGRldmljZXMubGVuZ3RoICsgJyAke2lzSGlkRGV2aWNlID8gXCJISURcIiA6IFwiVVNCXCJ9IGRldmljZXMuJyk7XFxuYDtcblx0XHRjb2RlICs9XG5cdFx0XHRcImRldmljZXMuZm9yRWFjaCgoZGV2aWNlLCBpbmRleCkgPT4ge1xcbiAgICBjb25zb2xlLmxvZygnRGV2aWNlICcgKyAoaW5kZXggKyAxKSArICc6IFByb2R1Y3QgTmFtZTogJyArIGRldmljZS5wcm9kdWN0TmFtZSArICcsIFZlbmRvciBJRDogJyArIGRldmljZS52ZW5kb3JJZCArICcsIFByb2R1Y3QgSUQ6ICcgKyBkZXZpY2UucHJvZHVjdElkKTtcXG59KTtcXG5cXG5cIjtcblx0XHRjb2RlICs9IFwiLy8gU2VsZWN0aW5nIHRoZSBmaXJzdCBkZXZpY2UgKGlmIGFueSlcXG5cIjtcblx0XHRjb2RlICs9IFwiY29uc3QgZGV2aWNlID0gZGV2aWNlcy5sZW5ndGggPiAwID8gZGV2aWNlc1swXSA6IG51bGw7XFxuXFxuXCI7XG5cdFx0Y29kZSArPSBcIi8vIE9wZW5pbmcgdGhlIGRldmljZVxcblwiO1xuXHRcdGNvZGUgKz1cblx0XHRcdFwiaWYgKGRldmljZSkge1xcbiAgICBhd2FpdCBkZXZpY2Uub3BlbigpO1xcbiAgICBjb25zb2xlLmxvZygnRGV2aWNlIG9wZW5lZDonLCBkZXZpY2UucHJvZHVjdE5hbWUpO1xcblwiO1xuXHRcdGlmICghaXNIaWREZXZpY2UpIHtcblx0XHRcdGNvZGUgKz0gXCIgICAgLy8gQ29udGludWUgd2l0aCBpbnRlcmZhY2UgY2xhaW1pbmcgYW5kIGNvbW11bmljYXRpb24gYXMgbmVlZGVkXFxuXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvZGUgKz0gXCIgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVycyBmb3IgaW5wdXQgcmVwb3J0c1xcblwiO1xuXHRcdFx0Y29kZSArPSBcIiAgICBkZXZpY2UuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXRyZXBvcnQnLCAoZXZlbnQpID0+IHtcXG5cIjtcblx0XHRcdGNvZGUgKz0gXCIgICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheShldmVudC5kYXRhLmJ1ZmZlcik7XFxuXCI7XG5cdFx0XHRjb2RlICs9IFwiICAgICAgICBjb25zb2xlLmxvZygnSW5wdXQgcmVwb3J0IHJlY2VpdmVkOicsIGRhdGEpO1xcbiAgICB9KTtcXG5cIjtcblx0XHR9XG5cdFx0Y29kZSArPSBcIn0gZWxzZSB7XFxuICAgIGNvbnNvbGUubG9nKCdObyBkZXZpY2Ugc2VsZWN0ZWQnKTtcXG59XFxuXCI7XG5cblx0XHRjb2RlRWxlbWVudC50ZXh0Q29udGVudCA9IGNvZGU7XG5cdH1cbn1cblxuLyoqXG4gKiBBbmFseXplIGFuZCBkaXNwbGF5IGluZm9ybWF0aW9uIGFib3V0IGEgVVNCIGRldmljZSB0byBoZWxwIGRldGVybWluZSBjb21wYXRpYmlsaXR5LlxuICogQHBhcmFtIGRldmljZSBUaGUgVVNCIGRldmljZSB0byBhbmFseXplXG4gKi9cbmZ1bmN0aW9uIGFuYWx5emVVU0JEZXZpY2UoZGV2aWNlOiBVU0JEZXZpY2UpOiB2b2lkIHtcblx0Ly8gRGVmaW5lIGtub3duIFVTQiBjbGFzc2VzXG5cdGNvbnN0IGtub3duQ2xhc3NlczogeyBba2V5OiBudW1iZXJdOiBzdHJpbmcgfSA9IHtcblx0XHQwOiBcIkludGVyZmFjZS1zcGVjaWZpY1wiLFxuXHRcdDE6IFwiQXVkaW9cIixcblx0XHQyOiBcIkNvbW11bmljYXRpb25zIGFuZCBDREMgQ29udHJvbFwiLFxuXHRcdDM6IFwiSElEIChIdW1hbiBJbnRlcmZhY2UgRGV2aWNlKVwiLFxuXHRcdDU6IFwiUGh5c2ljYWxcIixcblx0XHQ2OiBcIkltYWdlXCIsXG5cdFx0NzogXCJQcmludGVyXCIsXG5cdFx0ODogXCJNYXNzIFN0b3JhZ2VcIixcblx0XHQ5OiBcIkh1YlwiLFxuXHRcdDEwOiBcIkNEQy1EYXRhXCIsXG5cdFx0MTE6IFwiU21hcnQgQ2FyZFwiLFxuXHRcdDEzOiBcIkNvbnRlbnQgU2VjdXJpdHlcIixcblx0XHQxNDogXCJWaWRlb1wiLFxuXHRcdDE1OiBcIlBlcnNvbmFsIEhlYWx0aGNhcmVcIixcblx0XHQyMjA6IFwiRGlhZ25vc3RpYyBEZXZpY2VcIixcblx0XHQyMjQ6IFwiV2lyZWxlc3MgQ29udHJvbGxlclwiLFxuXHRcdDIzOTogXCJNaXNjZWxsYW5lb3VzXCIsXG5cdFx0MjU0OiBcIkFwcGxpY2F0aW9uIFNwZWNpZmljXCIsXG5cdFx0MjU1OiBcIlZlbmRvciBTcGVjaWZpY1wiXG5cdH07XG5cblx0Ly8gSWYgbm8gY29uZmlndXJhdGlvbiBpcyBzZWxlY3RlZCBvciBhdmFpbGFibGVcblx0aWYgKCFkZXZpY2UuY29uZmlndXJhdGlvbikge1xuXHRcdGxvZ2dpbmdBZGRFbnRyeShcIkRldmljZSBoYXMgbm8gYWN0aXZlIGNvbmZpZ3VyYXRpb24uXCIpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxvZ2dpbmdBZGRFbnRyeShcIlxcbkRldmljZSBBbmFseXNpczpcIik7XG5cdGxvZ2dpbmdBZGRFbnRyeShgRGV2aWNlIE5hbWU6ICR7ZGV2aWNlLnByb2R1Y3ROYW1lID8/IFwiVW5rbm93blwifWApO1xuXHRsb2dnaW5nQWRkRW50cnkoYE1hbnVmYWN0dXJlcjogJHtkZXZpY2UubWFudWZhY3R1cmVyTmFtZSA/PyBcIlVua25vd25cIn1gKTtcblx0bG9nZ2luZ0FkZEVudHJ5KGBTZXJpYWwgTnVtYmVyOiAke2RldmljZS5zZXJpYWxOdW1iZXIgPz8gXCJOb3QgYXZhaWxhYmxlXCJ9YCk7XG5cblx0Ly8gRGlzcGxheSBjb25maWd1cmF0aW9uc1xuXHRsb2dnaW5nQWRkRW50cnkoYFxcbkRldmljZSBoYXMgJHtkZXZpY2UuY29uZmlndXJhdGlvbnMubGVuZ3RofSBjb25maWd1cmF0aW9uKHMpLmApO1xuXHRsb2dnaW5nQWRkRW50cnkoYEFjdGl2ZSBDb25maWd1cmF0aW9uOiAke2RldmljZS5jb25maWd1cmF0aW9uLmNvbmZpZ3VyYXRpb25WYWx1ZX0uYCk7XG5cblx0Ly8gQW5hbHl6ZSBpbnRlcmZhY2VzXG5cdGNvbnN0IGludGVyZmFjZXMgPSBkZXZpY2UuY29uZmlndXJhdGlvbi5pbnRlcmZhY2VzO1xuXHRsb2dnaW5nQWRkRW50cnkoYFxcbkludGVyZmFjZXMgKCR7aW50ZXJmYWNlcy5sZW5ndGh9KTpgKTtcblxuXHRsZXQgaGFzUHJvdGVjdGVkQ2xhc3MgPSBmYWxzZTtcblx0bGV0IGlzSGlkRGV2aWNlID0gZmFsc2U7XG5cdGxldCBoYXNWZW5kb3JTcGVjaWZpYyA9IGZhbHNlO1xuXG5cdGZvciAoY29uc3QgW2luZGV4LCBpZmFjZV0gb2YgaW50ZXJmYWNlcy5lbnRyaWVzKCkpIHtcblx0XHRjb25zdCBpZmFjZUNsYXNzID0gaWZhY2UuYWx0ZXJuYXRlLmludGVyZmFjZUNsYXNzO1xuXHRcdGNvbnN0IGNsYXNzTmFtZSA9IGtub3duQ2xhc3Nlc1tpZmFjZUNsYXNzXSB8fCBgVW5rbm93biBDbGFzcyAoJHtpZmFjZUNsYXNzfSlgO1xuXG5cdFx0bG9nZ2luZ0FkZEVudHJ5KGBJbnRlcmZhY2UgJHtpbmRleH06IENsYXNzICR7aWZhY2VDbGFzc30gLSAke2NsYXNzTmFtZX1gKTtcblxuXHRcdC8vIENoZWNrIGZvciBzcGVjaWZpYyBjbGFzc2VzXG5cdFx0aWYgKGlmYWNlQ2xhc3MgPT09IDMpIHtcblx0XHRcdGlzSGlkRGV2aWNlID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoaWZhY2VDbGFzcyA9PT0gMjU1KSB7XG5cdFx0XHRoYXNWZW5kb3JTcGVjaWZpYyA9IHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gQ2hlY2sgaWYgdGhpcyBpcyBsaWtlbHkgYSBwcm90ZWN0ZWQgY2xhc3Ncblx0XHRpZiAoWzEsIDMsIDcsIDgsIDksIDE0LCAxNV0uaW5jbHVkZXMoaWZhY2VDbGFzcykpIHtcblx0XHRcdGhhc1Byb3RlY3RlZENsYXNzID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHQvLyBQcm92aWRlIHJlY29tbWVuZGF0aW9uc1xuXHRsb2dnaW5nQWRkRW50cnkoXCJcXG5SZWNvbW1lbmRhdGlvbnM6XCIpO1xuXG5cdGlmIChpc0hpZERldmljZSkge1xuXHRcdGxvZ2dpbmdBZGRFbnRyeShcIuKclu+4jyBUaGlzIGFwcGVhcnMgdG8gYmUgYW4gSElEIGRldmljZS4gV2ViVVNCIGNhbm5vdCBhY2Nlc3MgSElEIGludGVyZmFjZXMuXCIpO1xuXHRcdGxvZ2dpbmdBZGRFbnRyeShcIuKchSBQbGVhc2UgdXNlIFdlYkhJRCBBUEkgaW5zdGVhZCBmb3IgdGhpcyBkZXZpY2UuXCIpO1xuXHR9IGVsc2UgaWYgKGhhc1Byb3RlY3RlZENsYXNzKSB7XG5cdFx0bG9nZ2luZ0FkZEVudHJ5KFwi4pqg77iPIFRoaXMgZGV2aWNlIGhhcyBpbnRlcmZhY2VzIHRoYXQgYXJlIGxpa2VseSBwcm90ZWN0ZWQgY2xhc3Nlcy5cIik7XG5cdFx0bG9nZ2luZ0FkZEVudHJ5KFwiICAgQnJvd3NlciBzZWN1cml0eSByZXN0cmljdGlvbnMgbWF5IHByZXZlbnQgV2ViVVNCIGZyb20gYWNjZXNzaW5nIHNvbWUgaW50ZXJmYWNlcy5cIik7XG5cblx0XHRpZiAoaGFzVmVuZG9yU3BlY2lmaWMpIHtcblx0XHRcdGxvZ2dpbmdBZGRFbnRyeShcIuKchSBIb3dldmVyLCB0aGUgZGV2aWNlIGhhcyB2ZW5kb3Itc3BlY2lmaWMgaW50ZXJmYWNlcyB0aGF0IG1pZ2h0IGJlIGFjY2Vzc2libGUuXCIpO1xuXHRcdH1cblx0fSBlbHNlIGlmIChoYXNWZW5kb3JTcGVjaWZpYykge1xuXHRcdGxvZ2dpbmdBZGRFbnRyeShcblx0XHRcdFwi4pyFIFRoaXMgZGV2aWNlIGhhcyB2ZW5kb3Itc3BlY2lmaWMgaW50ZXJmYWNlcyB3aGljaCBhcmUgdHlwaWNhbGx5IGFjY2Vzc2libGUgdmlhIFdlYlVTQi5cIlxuXHRcdCk7XG5cdH0gZWxzZSB7XG5cdFx0bG9nZ2luZ0FkZEVudHJ5KFxuXHRcdFx0XCLinZMgVGhpcyBkZXZpY2UgbWF5IG9yIG1heSBub3QgYmUgY29tcGF0aWJsZSB3aXRoIFdlYlVTQiwgZGVwZW5kaW5nIG9uIGl0cyBzcGVjaWZpYyBpbnRlcmZhY2VzLlwiXG5cdFx0KTtcblx0fVxuXG5cdGxvZ2dpbmdBZGRFbnRyeShcIlxcbkNvbm5lY3Rpb24gZXN0YWJsaXNoZWQgc3VjY2Vzc2Z1bGx5LiBUaGUgZGV2aWNlIGlzIG5vdyByZWFkeSBmb3IgY29tbXVuaWNhdGlvbi5cIik7XG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9