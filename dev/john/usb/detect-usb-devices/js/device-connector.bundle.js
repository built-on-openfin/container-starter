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
async function init() {
    const tag = document.querySelector("#tag");
    loggingElement = document.querySelector("#logging");
    // Extract the 'deviceType' parameter from the querystring
    let search = location.search;
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
            devices.forEach((device, index) => {
                loggingAddEntry(`Device ${index + 1}: Product Name: ${device.productName}, Vendor ID: ${device.vendorId}, Product ID: ${device.productId}`);
            });
            if (devices.length > 0) {
                loggingAddEntry("Selecting first device.");
                let device = devices[0];
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
                        loggingAddEntry(`To receive input events, use the 'inputreport' event listener.`);
                        // Add a simple input report listener to demonstrate it's working
                        device.addEventListener("inputreport", (event) => {
                            loggingAddEntry(`Received input report event.`);
                            const data = new Uint8Array(event.data.buffer);
                            loggingAddEntry(`Input report received - Report ID: ${event.reportId}, Data: ${Array.from(data)
                                .map((b) => b.toString(16).padStart(2, "0"))
                                .join(" ")}`);
                        });
                        loggingAddEntry(`Connection successful! Waiting for device input...`);
                    }
                    else {
                        // USB device handling
                        const usbDevice = device;
                        loggingAddEntry(`Connected to USB device: ${usbDevice.productName}`);
                        loggingAddEntry(`Vendor ID: ${usbDevice.vendorId}, Product ID: ${usbDevice.productId}`);
                        // Check if a configuration is selected
                        if (usbDevice.configuration === null && usbDevice.configurations.length > 0) {
                            loggingAddEntry(`Selecting the first configuration.`);
                            await usbDevice.selectConfiguration(usbDevice.configurations[0].configurationValue);
                        }
                        // Analyze and display device information
                        analyzeUSBDevice(usbDevice);
                    }
                }
                catch (error) {
                    const errorMessage = error?.message || "Unknown error";
                    loggingAddEntry(`Error: ${errorMessage}`);
                    if (errorMessage.includes("protected class")) {
                        loggingAddEntry(`\nThis device has protected interfaces that cannot be accessed directly.`);
                        loggingAddEntry(`If this is a HID device (like keyboard, mouse, gamepad), try using the WebHID API instead.`);
                        loggingAddEntry(`Protected classes include: HID, Audio, Mass Storage, Video, etc.`);
                    }
                }
            }
        });
    }
    const btnCodeCopy = document.querySelector("#btnCodeCopy");
    if (btnCodeCopy) {
        btnCodeCopy.addEventListener("click", async () => {
            loggingAddEntry("Copying code to clipboard");
            const codeElement = document.getElementById("code");
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
                    loggingAddEntry("Failed to copy code to clipboard: " + error);
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
            loggingAddEntry(`Fetching permissions.`);
            let logPermissions = `Required permissions:
            
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
function writeCode(isHidDevice, permissions) {
    const codeElement = document.getElementById("code");
    if (codeElement) {
        let code = `// Ensure your application has the appropriate permissions in the manifest or window or view options.\n\n`;
        code += `// Example permissions block:\n`;
        code += `/*\n"permissions": ${JSON.stringify(permissions, null, 5)}\n*/\n\n`;
        code += `// Listen for device connection and disconnection events\n`;
        if (isHidDevice) {
            code += `navigator.hid.addEventListener("disconnect", (event) => {\n    console.log('HID disconnected: ' + event.device.productName);\n});\n`;
            code += `navigator.hid.addEventListener("connect", (event) => {\n    console.log('HID connected: ' + event.device.productName);\n});\n\n`;
        }
        else {
            code += `navigator.usb.addEventListener("disconnect", (event) => {\n    console.log('USB disconnected: ' + event.device.productName);\n});\n`;
            code += `navigator.usb.addEventListener("connect", (event) => {\n    console.log('USB connected: ' + event.device.productName);\n});\n\n`;
        }
        code += `// Getting ${isHidDevice ? "HID" : "USB"} devices\n`;
        code += `// You don't need to call requestDevice as the device has already been given permissions through the manifest/window/view permission settings. You can call getDevices to interact with the device.\n`;
        code += `const devices = ${isHidDevice ? "await navigator.hid.getDevices();" : "await navigator.usb.getDevices();"}\n`;
        code += `console.log('Found ' + devices.length + ' ${isHidDevice ? "HID" : "USB"} devices.');\n`;
        code += `devices.forEach((device, index) => {\n    console.log('Device ' + (index + 1) + ': Product Name: ' + device.productName + ', Vendor ID: ' + device.vendorId + ', Product ID: ' + device.productId);\n});\n\n`;
        code += `// Selecting the first device (if any)\n`;
        code += `const device = devices.length > 0 ? devices[0] : null;\n\n`;
        code += `// Opening the device\n`;
        code += `if (device) {\n    await device.open();\n    console.log('Device opened:', device.productName);\n`;
        if (!isHidDevice) {
            code += `    // Continue with interface claiming and communication as needed\n`;
        }
        else {
            code += `    // Add event listeners for input reports\n`;
            code += `    device.addEventListener('inputreport', (event) => {\n`;
            code += `        const data = new Uint8Array(event.data.buffer);\n`;
            code += `        console.log('Input report received:', data);\n    });\n`;
        }
        code += `} else {\n    console.log('No device selected');\n}\n`;
        codeElement.textContent = code;
    }
}
/**
 * Analyze and display information about a USB device to help determine compatibility
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
    loggingAddEntry(`Device Name: ${device.productName || "Unknown"}`);
    loggingAddEntry(`Manufacturer: ${device.manufacturerName || "Unknown"}`);
    loggingAddEntry(`Serial Number: ${device.serialNumber || "Not available"}`);
    // Display configurations
    loggingAddEntry(`\nDevice has ${device.configurations.length} configuration(s).`);
    loggingAddEntry(`Active Configuration: ${device.configuration.configurationValue}.`);
    // Analyze interfaces
    const interfaces = device.configuration.interfaces;
    loggingAddEntry(`\nInterfaces (${interfaces.length}):`);
    let hasProtectedClass = false;
    let isHidDevice = false;
    let hasVendorSpecific = false;
    interfaces.forEach((iface, index) => {
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
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L0YsQ0FBQztJQUNILENBQUM7SUFFRCxlQUFlLENBQUMsbUZBQW1GLENBQUMsQ0FBQztBQUN0RyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV0ZWN0LXVzYi1kZXZpY2VzLy4vY2xpZW50L3NyYy9kZXZpY2UtdHlwZS50cyIsIndlYnBhY2s6Ly9kZXRlY3QtdXNiLWRldmljZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGV0ZWN0LXVzYi1kZXZpY2VzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kZXRlY3QtdXNiLWRldmljZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZXRlY3QtdXNiLWRldmljZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kZXRlY3QtdXNiLWRldmljZXMvLi9jbGllbnQvc3JjL2RldmljZS1jb25uZWN0b3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFVTQl9ERVZJQ0UgPSBcIlVTQlwiO1xuZXhwb3J0IGNvbnN0IEhJRF9ERVZJQ0UgPSBcIkhJRFwiO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB0eXBlIE9wZW5GaW4gfSBmcm9tIFwiQG9wZW5maW4vY29yZVwiO1xuaW1wb3J0IHsgSElEX0RFVklDRSwgVVNCX0RFVklDRSB9IGZyb20gXCIuL2RldmljZS10eXBlXCI7XG5cbi8vIEdsb2JhbCB2YXJpYWJsZXNcbmxldCBsb2dnaW5nRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0YXdhaXQgaW5pdCgpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHR9XG59KTtcblxuYXN5bmMgZnVuY3Rpb24gaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgdGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWdcIikgYXMgSFRNTFNwYW5FbGVtZW50O1xuXHRsb2dnaW5nRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9nZ2luZ1wiKTtcblx0Ly8gRXh0cmFjdCB0aGUgJ2RldmljZVR5cGUnIHBhcmFtZXRlciBmcm9tIHRoZSBxdWVyeXN0cmluZ1xuXHRsZXQgc2VhcmNoID0gbG9jYXRpb24uc2VhcmNoO1xuXHRjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaCk7XG5cdGNvbnN0IGRldmljZVR5cGVQYXJhbSA9IHVybFBhcmFtcy5nZXQoXCJkZXZpY2VUeXBlXCIpO1xuXHRsZXQgZGV2aWNlVHlwZSA9IFVTQl9ERVZJQ0U7XG5cdGlmIChkZXZpY2VUeXBlUGFyYW0gPT09IEhJRF9ERVZJQ0UpIHtcblx0XHRkZXZpY2VUeXBlID0gSElEX0RFVklDRTtcblx0XHRuYXZpZ2F0b3IuaGlkLmFkZEV2ZW50TGlzdGVuZXIoXCJkaXNjb25uZWN0XCIsIChldmVudCkgPT4ge1xuXHRcdFx0bG9nZ2luZ0FkZEVudHJ5KGBISUQgZGlzY29ubmVjdGVkOiAke2V2ZW50LmRldmljZS5wcm9kdWN0TmFtZX1gKTtcblx0XHR9KTtcblx0XHRuYXZpZ2F0b3IuaGlkLmFkZEV2ZW50TGlzdGVuZXIoXCJjb25uZWN0XCIsIChldmVudCkgPT4ge1xuXHRcdFx0bG9nZ2luZ0FkZEVudHJ5KGBISUQgY29ubmVjdGVkOiAke2V2ZW50LmRldmljZS5wcm9kdWN0TmFtZX1gKTtcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRuYXZpZ2F0b3IudXNiLmFkZEV2ZW50TGlzdGVuZXIoXCJkaXNjb25uZWN0XCIsIChldmVudCkgPT4ge1xuXHRcdFx0bG9nZ2luZ0FkZEVudHJ5KGBVU0IgZGlzY29ubmVjdGVkOiAke2V2ZW50LmRldmljZS5wcm9kdWN0TmFtZX1gKTtcblx0XHR9KTtcblx0XHRuYXZpZ2F0b3IudXNiLmFkZEV2ZW50TGlzdGVuZXIoXCJjb25uZWN0XCIsIChldmVudCkgPT4ge1xuXHRcdFx0bG9nZ2luZ0FkZEVudHJ5KGBVU0IgY29ubmVjdGVkOiAke2V2ZW50LmRldmljZS5wcm9kdWN0TmFtZX1gKTtcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IGJ0bkxvZ2dpbmdDbGVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuTG9nZ2luZ0NsZWFyXCIpO1xuXHRpZiAoYnRuTG9nZ2luZ0NsZWFyKSB7XG5cdFx0YnRuTG9nZ2luZ0NsZWFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRpZiAobG9nZ2luZ0VsZW1lbnQpIHtcblx0XHRcdFx0bG9nZ2luZ0VsZW1lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3QgYnRuT3BlbkRldmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuT3BlbkRldmljZVwiKTtcblx0aWYgKGJ0bk9wZW5EZXZpY2UpIHtcblx0XHRidG5PcGVuRGV2aWNlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRsb2dnaW5nQWRkRW50cnkoXCJHYXRoZXJpbmcgZGV2aWNlcy5cIik7XG5cdFx0XHRsZXQgZGV2aWNlczogKFVTQkRldmljZSB8IEhJRERldmljZSlbXSA9IFtdO1xuXHRcdFx0aWYgKGRldmljZVR5cGVQYXJhbSA9PT0gSElEX0RFVklDRSkge1xuXHRcdFx0XHRkZXZpY2VzID0gYXdhaXQgbmF2aWdhdG9yLmhpZC5nZXREZXZpY2VzKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkZXZpY2VzID0gYXdhaXQgbmF2aWdhdG9yLnVzYi5nZXREZXZpY2VzKCk7XG5cdFx0XHR9XG5cblx0XHRcdGxvZ2dpbmdBZGRFbnRyeShgRm91bmQgJHtkZXZpY2VzLmxlbmd0aH0gJHtkZXZpY2VUeXBlfSBkZXZpY2VzLmApO1xuXHRcdFx0ZGV2aWNlcy5mb3JFYWNoKChkZXZpY2UsIGluZGV4KSA9PiB7XG5cdFx0XHRcdGxvZ2dpbmdBZGRFbnRyeShcblx0XHRcdFx0XHRgRGV2aWNlICR7aW5kZXggKyAxfTogUHJvZHVjdCBOYW1lOiAke2RldmljZS5wcm9kdWN0TmFtZX0sIFZlbmRvciBJRDogJHtcblx0XHRcdFx0XHRcdGRldmljZS52ZW5kb3JJZFxuXHRcdFx0XHRcdH0sIFByb2R1Y3QgSUQ6ICR7ZGV2aWNlLnByb2R1Y3RJZH1gXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKGRldmljZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRsb2dnaW5nQWRkRW50cnkoXCJTZWxlY3RpbmcgZmlyc3QgZGV2aWNlLlwiKTtcblx0XHRcdFx0bGV0IGRldmljZSA9IGRldmljZXNbMF07XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aWYgKGRldmljZS5vcGVuZWQpIHtcblx0XHRcdFx0XHRcdGxvZ2dpbmdBZGRFbnRyeShcIkRldmljZSBhbHJlYWR5IG9wZW5lZC4gQ2xvc2luZyBpdCBmaXJzdC5cIik7XG5cdFx0XHRcdFx0XHRhd2FpdCBkZXZpY2UuY2xvc2UoKTtcblx0XHRcdFx0XHRcdGxvZ2dpbmdBZGRFbnRyeShcIkRldmljZSBjbG9zZWQuXCIpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGF3YWl0IGRldmljZS5vcGVuKCk7XG5cdFx0XHRcdFx0bG9nZ2luZ0FkZEVudHJ5KGBEZXZpY2Ugb3BlbmVkOiAke2RldmljZS5wcm9kdWN0TmFtZX1gKTtcblxuXHRcdFx0XHRcdGlmIChkZXZpY2VUeXBlUGFyYW0gPT09IEhJRF9ERVZJQ0UpIHtcblx0XHRcdFx0XHRcdC8vIEhJRCBkZXZpY2UgaGFuZGxpbmdcblx0XHRcdFx0XHRcdGxvZ2dpbmdBZGRFbnRyeShgU3VjY2Vzc2Z1bGx5IGNvbm5lY3RlZCB0byBISUQgZGV2aWNlOiAke2RldmljZS5wcm9kdWN0TmFtZX1gKTtcblx0XHRcdFx0XHRcdGxvZ2dpbmdBZGRFbnRyeShgVmVuZG9yIElEOiAke2RldmljZS52ZW5kb3JJZH0sIFByb2R1Y3QgSUQ6ICR7ZGV2aWNlLnByb2R1Y3RJZH1gKTtcblx0XHRcdFx0XHRcdGxvZ2dpbmdBZGRFbnRyeShgVG8gcmVjZWl2ZSBpbnB1dCBldmVudHMsIHVzZSB0aGUgJ2lucHV0cmVwb3J0JyBldmVudCBsaXN0ZW5lci5gKTtcblxuXHRcdFx0XHRcdFx0Ly8gQWRkIGEgc2ltcGxlIGlucHV0IHJlcG9ydCBsaXN0ZW5lciB0byBkZW1vbnN0cmF0ZSBpdCdzIHdvcmtpbmdcblx0XHRcdFx0XHRcdChkZXZpY2UgYXMgSElERGV2aWNlKS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRyZXBvcnRcIiwgKGV2ZW50OiBhbnkpID0+IHtcblx0XHRcdFx0XHRcdFx0bG9nZ2luZ0FkZEVudHJ5KGBSZWNlaXZlZCBpbnB1dCByZXBvcnQgZXZlbnQuYCk7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheShldmVudC5kYXRhLmJ1ZmZlcik7XG5cdFx0XHRcdFx0XHRcdGxvZ2dpbmdBZGRFbnRyeShcblx0XHRcdFx0XHRcdFx0XHRgSW5wdXQgcmVwb3J0IHJlY2VpdmVkIC0gUmVwb3J0IElEOiAke2V2ZW50LnJlcG9ydElkfSwgRGF0YTogJHtBcnJheS5mcm9tKGRhdGEpXG5cdFx0XHRcdFx0XHRcdFx0XHQubWFwKChiKSA9PiBiLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCBcIjBcIikpXG5cdFx0XHRcdFx0XHRcdFx0XHQuam9pbihcIiBcIil9YFxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdGxvZ2dpbmdBZGRFbnRyeShgQ29ubmVjdGlvbiBzdWNjZXNzZnVsISBXYWl0aW5nIGZvciBkZXZpY2UgaW5wdXQuLi5gKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gVVNCIGRldmljZSBoYW5kbGluZ1xuXHRcdFx0XHRcdFx0Y29uc3QgdXNiRGV2aWNlID0gZGV2aWNlIGFzIFVTQkRldmljZTtcblx0XHRcdFx0XHRcdGxvZ2dpbmdBZGRFbnRyeShgQ29ubmVjdGVkIHRvIFVTQiBkZXZpY2U6ICR7dXNiRGV2aWNlLnByb2R1Y3ROYW1lfWApO1xuXHRcdFx0XHRcdFx0bG9nZ2luZ0FkZEVudHJ5KGBWZW5kb3IgSUQ6ICR7dXNiRGV2aWNlLnZlbmRvcklkfSwgUHJvZHVjdCBJRDogJHt1c2JEZXZpY2UucHJvZHVjdElkfWApO1xuXG5cdFx0XHRcdFx0XHQvLyBDaGVjayBpZiBhIGNvbmZpZ3VyYXRpb24gaXMgc2VsZWN0ZWRcblx0XHRcdFx0XHRcdGlmICh1c2JEZXZpY2UuY29uZmlndXJhdGlvbiA9PT0gbnVsbCAmJiB1c2JEZXZpY2UuY29uZmlndXJhdGlvbnMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0XHRsb2dnaW5nQWRkRW50cnkoYFNlbGVjdGluZyB0aGUgZmlyc3QgY29uZmlndXJhdGlvbi5gKTtcblx0XHRcdFx0XHRcdFx0YXdhaXQgdXNiRGV2aWNlLnNlbGVjdENvbmZpZ3VyYXRpb24odXNiRGV2aWNlLmNvbmZpZ3VyYXRpb25zWzBdLmNvbmZpZ3VyYXRpb25WYWx1ZSk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIEFuYWx5emUgYW5kIGRpc3BsYXkgZGV2aWNlIGluZm9ybWF0aW9uXG5cdFx0XHRcdFx0XHRhbmFseXplVVNCRGV2aWNlKHVzYkRldmljZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIChlcnJvcjogYW55KSB7XG5cdFx0XHRcdFx0Y29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3I/Lm1lc3NhZ2UgfHwgXCJVbmtub3duIGVycm9yXCI7XG5cdFx0XHRcdFx0bG9nZ2luZ0FkZEVudHJ5KGBFcnJvcjogJHtlcnJvck1lc3NhZ2V9YCk7XG5cblx0XHRcdFx0XHRpZiAoZXJyb3JNZXNzYWdlLmluY2x1ZGVzKFwicHJvdGVjdGVkIGNsYXNzXCIpKSB7XG5cdFx0XHRcdFx0XHRsb2dnaW5nQWRkRW50cnkoYFxcblRoaXMgZGV2aWNlIGhhcyBwcm90ZWN0ZWQgaW50ZXJmYWNlcyB0aGF0IGNhbm5vdCBiZSBhY2Nlc3NlZCBkaXJlY3RseS5gKTtcblx0XHRcdFx0XHRcdGxvZ2dpbmdBZGRFbnRyeShcblx0XHRcdFx0XHRcdFx0YElmIHRoaXMgaXMgYSBISUQgZGV2aWNlIChsaWtlIGtleWJvYXJkLCBtb3VzZSwgZ2FtZXBhZCksIHRyeSB1c2luZyB0aGUgV2ViSElEIEFQSSBpbnN0ZWFkLmBcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRsb2dnaW5nQWRkRW50cnkoYFByb3RlY3RlZCBjbGFzc2VzIGluY2x1ZGU6IEhJRCwgQXVkaW8sIE1hc3MgU3RvcmFnZSwgVmlkZW8sIGV0Yy5gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IGJ0bkNvZGVDb3B5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5Db2RlQ29weVwiKTtcblx0aWYgKGJ0bkNvZGVDb3B5KSB7XG5cdFx0YnRuQ29kZUNvcHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdGxvZ2dpbmdBZGRFbnRyeShcIkNvcHlpbmcgY29kZSB0byBjbGlwYm9hcmRcIik7XG5cdFx0XHRjb25zdCBjb2RlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29kZVwiKTtcblx0XHRcdGlmIChjb2RlRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGlmIChsb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczpcIikpIHtcblx0XHRcdFx0XHRcdGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvZGVFbGVtZW50LnRleHRDb250ZW50IHx8IFwiXCIpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRhd2FpdCBmaW4uQ2xpcGJvYXJkLndyaXRlVGV4dCh7IGRhdGE6IGNvZGVFbGVtZW50LnRleHRDb250ZW50IHx8IFwiXCIgfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGxvZ2dpbmdBZGRFbnRyeShcIkNvZGUgY29waWVkIHRvIGNsaXBib2FyZFwiKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRsb2dnaW5nQWRkRW50cnkoXCJGYWlsZWQgdG8gY29weSBjb2RlIHRvIGNsaXBib2FyZDogXCIgKyBlcnJvcik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGlmIChmaW4pIHtcblx0XHRjb25zdCBpbmZvID0gYXdhaXQgZmluLm1lLmdldE9wdGlvbnMoKTtcblx0XHRjb25zdCBwZXJtaXNzaW9ucyA9IGluZm8ucGVybWlzc2lvbnM7XG5cdFx0d3JpdGVDb2RlKGRldmljZVR5cGUgPT09IEhJRF9ERVZJQ0UsIHBlcm1pc3Npb25zKTtcblx0XHRjb25zdCBkZXZpY2VzID0gcGVybWlzc2lvbnM/LmRldmljZXM7XG5cdFx0bGV0IGRldmljZTogT3BlbkZpbi5EZXZpY2VJbmZvIHwgdW5kZWZpbmVkO1xuXHRcdGlmICh0YWcpIHtcblx0XHRcdGlmIChkZXZpY2VzICYmIGRldmljZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRkZXZpY2UgPSBkZXZpY2VzWzBdO1xuXHRcdFx0XHR0YWcudGV4dENvbnRlbnQgPSBgRGV2aWNlIENvbm5lY3RvciAtIERldmljZSBUeXBlOiAke2RldmljZVR5cGV9IFZlbmRvciBJZDogJHtkZXZpY2UudmVuZG9ySWR9IDogUHJvZHVjdCBJZDogJHtkZXZpY2UucHJvZHVjdElkfWA7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0YWcudGV4dENvbnRlbnQgPSBcIkRldmljZSBDb25uZWN0b3IgLSBObyBkZXZpY2UgcGVybWlzc2lvbnMgZm91bmRcIjtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGRldmljZSkge1xuXHRcdFx0bG9nZ2luZ0FkZEVudHJ5KGBGZXRjaGluZyBwZXJtaXNzaW9ucy5gKTtcblx0XHRcdGxldCBsb2dQZXJtaXNzaW9ucyA9IGBSZXF1aXJlZCBwZXJtaXNzaW9uczpcbiAgICAgICAgICAgIFxuVGhpcyBjb3VsZCBiZSBjb250cm9sbGVkIHRocm91Z2ggRG9tYWluIFNldHRpbmcgUnVsZXMgaW4gdGhlIG1hbmlmZXN0LCBhcyBwZXJtaXNzaW9ucyBpbiB5b3VyIHN0YXJ0dXBfYXBwIG9yIHBsYXRmb3JtIGNvbmZpZ3VyYXRpb24gaW4gdGhlIG1hbmlmZXN0ICh0aGUgcGVybWlzc2lvbiB3aWxsIGFwcGx5IHRvIHRoZSBtYWluL3Byb3ZpZGVyIHdpbmRvdyksIGluIHlvdXIgcGxhdGZvcm0gY29uZmlndXJhdGlvbiBhcyBkZWZhdWx0IHZpZXdPcHRpb25zIG9yIHdpbmRvd09wdGlvbnMgKHRoZSBwbGF0Zm9ybSBtdXN0IGRlZmluZSB0aGUgcGVybWlzc2lvbiBhcyB3ZWxsKSBvciBhZGRlZCB0byBzcGVjaWZpYyB3aW5kb3cgb3Igdmlld3MuXG5cblBlcm1pc3Npb24gQmxvY2s6XG5cblwicGVybWlzc2lvbnNcIjogJHtKU09OLnN0cmluZ2lmeShwZXJtaXNzaW9ucywgbnVsbCwgNSl9YDtcblx0XHRcdGxvZ2dpbmdBZGRFbnRyeShsb2dQZXJtaXNzaW9ucyk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGVudHJ5IGluIHRvIHRoZSBsb2dnaW5nIHdpbmRvdyB3aXRoIGEgdGltZXN0YW1wLlxuICogQHBhcmFtIGVudHJ5IFRoZSBlbnRyeSB0byBhZGQuXG4gKi9cbmZ1bmN0aW9uIGxvZ2dpbmdBZGRFbnRyeShlbnRyeTogc3RyaW5nKTogdm9pZCB7XG5cdGlmIChsb2dnaW5nRWxlbWVudCkge1xuXHRcdC8vIENyZWF0ZSB0aW1lc3RhbXAgaW4gZm9ybWF0IEhIOk1NOlNTOm1tbVxuXHRcdGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cdFx0Y29uc3QgaG91cnMgPSBub3cuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcblx0XHRjb25zdCBtaW51dGVzID0gbm93LmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcblx0XHRjb25zdCBzZWNvbmRzID0gbm93LmdldFNlY29uZHMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcblx0XHRjb25zdCBtaWxsaXNlY29uZHMgPSBub3cuZ2V0TWlsbGlzZWNvbmRzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgzLCBcIjBcIik7XG5cdFx0Y29uc3QgdGltZXN0YW1wID0gYCR7aG91cnN9OiR7bWludXRlc306JHtzZWNvbmRzfToke21pbGxpc2Vjb25kc31gO1xuXG5cdFx0bG9nZ2luZ0VsZW1lbnQudGV4dENvbnRlbnQgPSBgWyR7dGltZXN0YW1wfV06ICR7ZW50cnl9XFxuXFxuJHtsb2dnaW5nRWxlbWVudC50ZXh0Q29udGVudH1gO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHdyaXRlQ29kZShpc0hpZERldmljZTogYm9vbGVhbiwgcGVybWlzc2lvbnM/OiBPcGVuRmluLlBlcm1pc3Npb25zKTogdm9pZCB7XG5cdGNvbnN0IGNvZGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2RlXCIpO1xuXHRpZiAoY29kZUVsZW1lbnQpIHtcblx0XHRsZXQgY29kZSA9IGAvLyBFbnN1cmUgeW91ciBhcHBsaWNhdGlvbiBoYXMgdGhlIGFwcHJvcHJpYXRlIHBlcm1pc3Npb25zIGluIHRoZSBtYW5pZmVzdCBvciB3aW5kb3cgb3IgdmlldyBvcHRpb25zLlxcblxcbmA7XG5cdFx0Y29kZSArPSBgLy8gRXhhbXBsZSBwZXJtaXNzaW9ucyBibG9jazpcXG5gO1xuXHRcdGNvZGUgKz0gYC8qXFxuXCJwZXJtaXNzaW9uc1wiOiAke0pTT04uc3RyaW5naWZ5KHBlcm1pc3Npb25zLCBudWxsLCA1KX1cXG4qL1xcblxcbmA7XG5cdFx0Y29kZSArPSBgLy8gTGlzdGVuIGZvciBkZXZpY2UgY29ubmVjdGlvbiBhbmQgZGlzY29ubmVjdGlvbiBldmVudHNcXG5gO1xuXHRcdGlmIChpc0hpZERldmljZSkge1xuXHRcdFx0Y29kZSArPSBgbmF2aWdhdG9yLmhpZC5hZGRFdmVudExpc3RlbmVyKFwiZGlzY29ubmVjdFwiLCAoZXZlbnQpID0+IHtcXG4gICAgY29uc29sZS5sb2coJ0hJRCBkaXNjb25uZWN0ZWQ6ICcgKyBldmVudC5kZXZpY2UucHJvZHVjdE5hbWUpO1xcbn0pO1xcbmA7XG5cdFx0XHRjb2RlICs9IGBuYXZpZ2F0b3IuaGlkLmFkZEV2ZW50TGlzdGVuZXIoXCJjb25uZWN0XCIsIChldmVudCkgPT4ge1xcbiAgICBjb25zb2xlLmxvZygnSElEIGNvbm5lY3RlZDogJyArIGV2ZW50LmRldmljZS5wcm9kdWN0TmFtZSk7XFxufSk7XFxuXFxuYDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29kZSArPSBgbmF2aWdhdG9yLnVzYi5hZGRFdmVudExpc3RlbmVyKFwiZGlzY29ubmVjdFwiLCAoZXZlbnQpID0+IHtcXG4gICAgY29uc29sZS5sb2coJ1VTQiBkaXNjb25uZWN0ZWQ6ICcgKyBldmVudC5kZXZpY2UucHJvZHVjdE5hbWUpO1xcbn0pO1xcbmA7XG5cdFx0XHRjb2RlICs9IGBuYXZpZ2F0b3IudXNiLmFkZEV2ZW50TGlzdGVuZXIoXCJjb25uZWN0XCIsIChldmVudCkgPT4ge1xcbiAgICBjb25zb2xlLmxvZygnVVNCIGNvbm5lY3RlZDogJyArIGV2ZW50LmRldmljZS5wcm9kdWN0TmFtZSk7XFxufSk7XFxuXFxuYDtcblx0XHR9XG5cdFx0Y29kZSArPSBgLy8gR2V0dGluZyAke2lzSGlkRGV2aWNlID8gXCJISURcIiA6IFwiVVNCXCJ9IGRldmljZXNcXG5gO1xuXHRcdGNvZGUgKz0gYC8vIFlvdSBkb24ndCBuZWVkIHRvIGNhbGwgcmVxdWVzdERldmljZSBhcyB0aGUgZGV2aWNlIGhhcyBhbHJlYWR5IGJlZW4gZ2l2ZW4gcGVybWlzc2lvbnMgdGhyb3VnaCB0aGUgbWFuaWZlc3Qvd2luZG93L3ZpZXcgcGVybWlzc2lvbiBzZXR0aW5ncy4gWW91IGNhbiBjYWxsIGdldERldmljZXMgdG8gaW50ZXJhY3Qgd2l0aCB0aGUgZGV2aWNlLlxcbmA7XG5cdFx0Y29kZSArPSBgY29uc3QgZGV2aWNlcyA9ICR7XG5cdFx0XHRpc0hpZERldmljZSA/IFwiYXdhaXQgbmF2aWdhdG9yLmhpZC5nZXREZXZpY2VzKCk7XCIgOiBcImF3YWl0IG5hdmlnYXRvci51c2IuZ2V0RGV2aWNlcygpO1wiXG5cdFx0fVxcbmA7XG5cdFx0Y29kZSArPSBgY29uc29sZS5sb2coJ0ZvdW5kICcgKyBkZXZpY2VzLmxlbmd0aCArICcgJHtpc0hpZERldmljZSA/IFwiSElEXCIgOiBcIlVTQlwifSBkZXZpY2VzLicpO1xcbmA7XG5cdFx0Y29kZSArPSBgZGV2aWNlcy5mb3JFYWNoKChkZXZpY2UsIGluZGV4KSA9PiB7XFxuICAgIGNvbnNvbGUubG9nKCdEZXZpY2UgJyArIChpbmRleCArIDEpICsgJzogUHJvZHVjdCBOYW1lOiAnICsgZGV2aWNlLnByb2R1Y3ROYW1lICsgJywgVmVuZG9yIElEOiAnICsgZGV2aWNlLnZlbmRvcklkICsgJywgUHJvZHVjdCBJRDogJyArIGRldmljZS5wcm9kdWN0SWQpO1xcbn0pO1xcblxcbmA7XG5cdFx0Y29kZSArPSBgLy8gU2VsZWN0aW5nIHRoZSBmaXJzdCBkZXZpY2UgKGlmIGFueSlcXG5gO1xuXHRcdGNvZGUgKz0gYGNvbnN0IGRldmljZSA9IGRldmljZXMubGVuZ3RoID4gMCA/IGRldmljZXNbMF0gOiBudWxsO1xcblxcbmA7XG5cdFx0Y29kZSArPSBgLy8gT3BlbmluZyB0aGUgZGV2aWNlXFxuYDtcblx0XHRjb2RlICs9IGBpZiAoZGV2aWNlKSB7XFxuICAgIGF3YWl0IGRldmljZS5vcGVuKCk7XFxuICAgIGNvbnNvbGUubG9nKCdEZXZpY2Ugb3BlbmVkOicsIGRldmljZS5wcm9kdWN0TmFtZSk7XFxuYDtcblx0XHRpZiAoIWlzSGlkRGV2aWNlKSB7XG5cdFx0XHRjb2RlICs9IGAgICAgLy8gQ29udGludWUgd2l0aCBpbnRlcmZhY2UgY2xhaW1pbmcgYW5kIGNvbW11bmljYXRpb24gYXMgbmVlZGVkXFxuYDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29kZSArPSBgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lcnMgZm9yIGlucHV0IHJlcG9ydHNcXG5gO1xuXHRcdFx0Y29kZSArPSBgICAgIGRldmljZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dHJlcG9ydCcsIChldmVudCkgPT4ge1xcbmA7XG5cdFx0XHRjb2RlICs9IGAgICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheShldmVudC5kYXRhLmJ1ZmZlcik7XFxuYDtcblx0XHRcdGNvZGUgKz0gYCAgICAgICAgY29uc29sZS5sb2coJ0lucHV0IHJlcG9ydCByZWNlaXZlZDonLCBkYXRhKTtcXG4gICAgfSk7XFxuYDtcblx0XHR9XG5cdFx0Y29kZSArPSBgfSBlbHNlIHtcXG4gICAgY29uc29sZS5sb2coJ05vIGRldmljZSBzZWxlY3RlZCcpO1xcbn1cXG5gO1xuXG5cdFx0Y29kZUVsZW1lbnQudGV4dENvbnRlbnQgPSBjb2RlO1xuXHR9XG59XG5cbi8qKlxuICogQW5hbHl6ZSBhbmQgZGlzcGxheSBpbmZvcm1hdGlvbiBhYm91dCBhIFVTQiBkZXZpY2UgdG8gaGVscCBkZXRlcm1pbmUgY29tcGF0aWJpbGl0eVxuICogQHBhcmFtIGRldmljZSBUaGUgVVNCIGRldmljZSB0byBhbmFseXplXG4gKi9cbmZ1bmN0aW9uIGFuYWx5emVVU0JEZXZpY2UoZGV2aWNlOiBVU0JEZXZpY2UpOiB2b2lkIHtcblx0Ly8gRGVmaW5lIGtub3duIFVTQiBjbGFzc2VzXG5cdGNvbnN0IGtub3duQ2xhc3NlczogeyBba2V5OiBudW1iZXJdOiBzdHJpbmcgfSA9IHtcblx0XHQwOiBcIkludGVyZmFjZS1zcGVjaWZpY1wiLFxuXHRcdDE6IFwiQXVkaW9cIixcblx0XHQyOiBcIkNvbW11bmljYXRpb25zIGFuZCBDREMgQ29udHJvbFwiLFxuXHRcdDM6IFwiSElEIChIdW1hbiBJbnRlcmZhY2UgRGV2aWNlKVwiLFxuXHRcdDU6IFwiUGh5c2ljYWxcIixcblx0XHQ2OiBcIkltYWdlXCIsXG5cdFx0NzogXCJQcmludGVyXCIsXG5cdFx0ODogXCJNYXNzIFN0b3JhZ2VcIixcblx0XHQ5OiBcIkh1YlwiLFxuXHRcdDEwOiBcIkNEQy1EYXRhXCIsXG5cdFx0MTE6IFwiU21hcnQgQ2FyZFwiLFxuXHRcdDEzOiBcIkNvbnRlbnQgU2VjdXJpdHlcIixcblx0XHQxNDogXCJWaWRlb1wiLFxuXHRcdDE1OiBcIlBlcnNvbmFsIEhlYWx0aGNhcmVcIixcblx0XHQyMjA6IFwiRGlhZ25vc3RpYyBEZXZpY2VcIixcblx0XHQyMjQ6IFwiV2lyZWxlc3MgQ29udHJvbGxlclwiLFxuXHRcdDIzOTogXCJNaXNjZWxsYW5lb3VzXCIsXG5cdFx0MjU0OiBcIkFwcGxpY2F0aW9uIFNwZWNpZmljXCIsXG5cdFx0MjU1OiBcIlZlbmRvciBTcGVjaWZpY1wiXG5cdH07XG5cblx0Ly8gSWYgbm8gY29uZmlndXJhdGlvbiBpcyBzZWxlY3RlZCBvciBhdmFpbGFibGVcblx0aWYgKCFkZXZpY2UuY29uZmlndXJhdGlvbikge1xuXHRcdGxvZ2dpbmdBZGRFbnRyeShcIkRldmljZSBoYXMgbm8gYWN0aXZlIGNvbmZpZ3VyYXRpb24uXCIpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxvZ2dpbmdBZGRFbnRyeShcIlxcbkRldmljZSBBbmFseXNpczpcIik7XG5cdGxvZ2dpbmdBZGRFbnRyeShgRGV2aWNlIE5hbWU6ICR7ZGV2aWNlLnByb2R1Y3ROYW1lIHx8IFwiVW5rbm93blwifWApO1xuXHRsb2dnaW5nQWRkRW50cnkoYE1hbnVmYWN0dXJlcjogJHtkZXZpY2UubWFudWZhY3R1cmVyTmFtZSB8fCBcIlVua25vd25cIn1gKTtcblx0bG9nZ2luZ0FkZEVudHJ5KGBTZXJpYWwgTnVtYmVyOiAke2RldmljZS5zZXJpYWxOdW1iZXIgfHwgXCJOb3QgYXZhaWxhYmxlXCJ9YCk7XG5cblx0Ly8gRGlzcGxheSBjb25maWd1cmF0aW9uc1xuXHRsb2dnaW5nQWRkRW50cnkoYFxcbkRldmljZSBoYXMgJHtkZXZpY2UuY29uZmlndXJhdGlvbnMubGVuZ3RofSBjb25maWd1cmF0aW9uKHMpLmApO1xuXHRsb2dnaW5nQWRkRW50cnkoYEFjdGl2ZSBDb25maWd1cmF0aW9uOiAke2RldmljZS5jb25maWd1cmF0aW9uLmNvbmZpZ3VyYXRpb25WYWx1ZX0uYCk7XG5cblx0Ly8gQW5hbHl6ZSBpbnRlcmZhY2VzXG5cdGNvbnN0IGludGVyZmFjZXMgPSBkZXZpY2UuY29uZmlndXJhdGlvbi5pbnRlcmZhY2VzO1xuXHRsb2dnaW5nQWRkRW50cnkoYFxcbkludGVyZmFjZXMgKCR7aW50ZXJmYWNlcy5sZW5ndGh9KTpgKTtcblxuXHRsZXQgaGFzUHJvdGVjdGVkQ2xhc3MgPSBmYWxzZTtcblx0bGV0IGlzSGlkRGV2aWNlID0gZmFsc2U7XG5cdGxldCBoYXNWZW5kb3JTcGVjaWZpYyA9IGZhbHNlO1xuXG5cdGludGVyZmFjZXMuZm9yRWFjaCgoaWZhY2UsIGluZGV4KSA9PiB7XG5cdFx0Y29uc3QgaWZhY2VDbGFzcyA9IGlmYWNlLmFsdGVybmF0ZS5pbnRlcmZhY2VDbGFzcztcblx0XHRjb25zdCBjbGFzc05hbWUgPSBrbm93bkNsYXNzZXNbaWZhY2VDbGFzc10gfHwgYFVua25vd24gQ2xhc3MgKCR7aWZhY2VDbGFzc30pYDtcblxuXHRcdGxvZ2dpbmdBZGRFbnRyeShgSW50ZXJmYWNlICR7aW5kZXh9OiBDbGFzcyAke2lmYWNlQ2xhc3N9IC0gJHtjbGFzc05hbWV9YCk7XG5cblx0XHQvLyBDaGVjayBmb3Igc3BlY2lmaWMgY2xhc3Nlc1xuXHRcdGlmIChpZmFjZUNsYXNzID09PSAzKSB7XG5cdFx0XHRpc0hpZERldmljZSA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKGlmYWNlQ2xhc3MgPT09IDI1NSkge1xuXHRcdFx0aGFzVmVuZG9yU3BlY2lmaWMgPSB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIENoZWNrIGlmIHRoaXMgaXMgbGlrZWx5IGEgcHJvdGVjdGVkIGNsYXNzXG5cdFx0aWYgKFsxLCAzLCA3LCA4LCA5LCAxNCwgMTVdLmluY2x1ZGVzKGlmYWNlQ2xhc3MpKSB7XG5cdFx0XHRoYXNQcm90ZWN0ZWRDbGFzcyA9IHRydWU7XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBQcm92aWRlIHJlY29tbWVuZGF0aW9uc1xuXHRsb2dnaW5nQWRkRW50cnkoXCJcXG5SZWNvbW1lbmRhdGlvbnM6XCIpO1xuXG5cdGlmIChpc0hpZERldmljZSkge1xuXHRcdGxvZ2dpbmdBZGRFbnRyeShcIuKclu+4jyBUaGlzIGFwcGVhcnMgdG8gYmUgYW4gSElEIGRldmljZS4gV2ViVVNCIGNhbm5vdCBhY2Nlc3MgSElEIGludGVyZmFjZXMuXCIpO1xuXHRcdGxvZ2dpbmdBZGRFbnRyeShcIuKchSBQbGVhc2UgdXNlIFdlYkhJRCBBUEkgaW5zdGVhZCBmb3IgdGhpcyBkZXZpY2UuXCIpO1xuXHR9IGVsc2UgaWYgKGhhc1Byb3RlY3RlZENsYXNzKSB7XG5cdFx0bG9nZ2luZ0FkZEVudHJ5KFwi4pqg77iPIFRoaXMgZGV2aWNlIGhhcyBpbnRlcmZhY2VzIHRoYXQgYXJlIGxpa2VseSBwcm90ZWN0ZWQgY2xhc3Nlcy5cIik7XG5cdFx0bG9nZ2luZ0FkZEVudHJ5KFwiICAgQnJvd3NlciBzZWN1cml0eSByZXN0cmljdGlvbnMgbWF5IHByZXZlbnQgV2ViVVNCIGZyb20gYWNjZXNzaW5nIHNvbWUgaW50ZXJmYWNlcy5cIik7XG5cblx0XHRpZiAoaGFzVmVuZG9yU3BlY2lmaWMpIHtcblx0XHRcdGxvZ2dpbmdBZGRFbnRyeShcIuKchSBIb3dldmVyLCB0aGUgZGV2aWNlIGhhcyB2ZW5kb3Itc3BlY2lmaWMgaW50ZXJmYWNlcyB0aGF0IG1pZ2h0IGJlIGFjY2Vzc2libGUuXCIpO1xuXHRcdH1cblx0fSBlbHNlIGlmIChoYXNWZW5kb3JTcGVjaWZpYykge1xuXHRcdGxvZ2dpbmdBZGRFbnRyeShcblx0XHRcdFwi4pyFIFRoaXMgZGV2aWNlIGhhcyB2ZW5kb3Itc3BlY2lmaWMgaW50ZXJmYWNlcyB3aGljaCBhcmUgdHlwaWNhbGx5IGFjY2Vzc2libGUgdmlhIFdlYlVTQi5cIlxuXHRcdCk7XG5cdH0gZWxzZSB7XG5cdFx0bG9nZ2luZ0FkZEVudHJ5KFxuXHRcdFx0XCLinZMgVGhpcyBkZXZpY2UgbWF5IG9yIG1heSBub3QgYmUgY29tcGF0aWJsZSB3aXRoIFdlYlVTQiwgZGVwZW5kaW5nIG9uIGl0cyBzcGVjaWZpYyBpbnRlcmZhY2VzLlwiXG5cdFx0KTtcblx0fVxuXG5cdGxvZ2dpbmdBZGRFbnRyeShcIlxcbkNvbm5lY3Rpb24gZXN0YWJsaXNoZWQgc3VjY2Vzc2Z1bGx5LiBUaGUgZGV2aWNlIGlzIG5vdyByZWFkeSBmb3IgY29tbXVuaWNhdGlvbi5cIik7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=