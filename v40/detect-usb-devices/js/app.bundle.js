/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/*!***************************!*\
  !*** ./client/src/app.ts ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
document.addEventListener("DOMContentLoaded", async () => {
    try {
        await initDom();
    }
    catch (error) {
        console.error(error);
    }
});
/**
 * Initialize the DOM components.
 */
async function initDom() {
    const btnOpenDynamicWindow = document.querySelector("#btn-open-dynamic-window");
    if (btnOpenDynamicWindow) {
        btnOpenDynamicWindow.addEventListener("click", async (e) => openDynamicApplicationWindow());
    }
    const btnCheckForDevices = document.querySelector("#btn-identify-device");
    if (btnCheckForDevices) {
        btnCheckForDevices.addEventListener("click", async (e) => requestDevice());
    }
    const btnConnectDevice = document.querySelector("#btn-connect-device");
    if (btnConnectDevice) {
        btnConnectDevice.addEventListener("click", async (e) => connectDevice());
    }
    await listenForDeviceInfo();
}
/**
 * Connect to the specified device.
 * @returns The window that was opened to connect to the device, if any.
 * @throws An error if the connection fails.
 */
async function connectDevice() {
    const vendorIdInput = document.querySelector("#vendorId");
    const productIdInput = document.querySelector("#productId");
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
        const deviceType = document.querySelector("#deviceType").value;
        const deviceConnectionUrl = `${location.href.replace("app.html", "device-connector.html")}?deviceType=${deviceType}`;
        const name = `connect-device-${vendorId}-${productId}`;
        const exists = await bringToFrontIfExists(name);
        if (!exists) {
            // Open a new window to indicate connection (replace with actual connection logic)
            const winOption = {
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
    }
    catch (error) {
        console.error("Error connecting to device:", error);
    }
}
/**
 * Brings an existing window to the front if it exists.
 * @param name The name of the window to bring to the front.
 * @returns True if the window was found and brought to the front, false otherwise.
 */
async function bringToFrontIfExists(name) {
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
    }
    catch {
        // Window does not exist
    }
    return false;
}
/**
 * Checks to see what devices to connect.
 */
async function requestDevice() {
    const runtimeInfo = await fin.System.getRuntimeInfo();
    const manifestUrl = runtimeInfo.manifestUrl ?? "";
    const deviceIdentifierUrl = `${location.href.replace("app.html", "device-identifier.html")}?fins=${manifestUrl.replace("http", "fin")}`;
    await fin.System.openUrlWithBrowser(deviceIdentifierUrl);
}
/**
 * Listens for device information passed via the HERE runtime and processes it.
 */
async function listenForDeviceInfo() {
    const app = fin.Application.getCurrentSync();
    const appInfo = await app.getInfo();
    const customInitOptions = appInfo.initialOptions;
    processPassedInformation(customInitOptions?.userAppConfigArgs);
    // eslint-disable-next-line no-void
    await app.addListener("run-requested", (event) => {
        processPassedInformation(event?.userAppConfigArgs);
    });
}
/**
 * Processes the information passed via userAppConfigArgs.
 * @param args The user application configuration arguments.
 */
function processPassedInformation(args) {
    if (args) {
        const vendorIdInput = document.querySelector("#vendorId");
        const productIdInput = document.querySelector("#productId");
        const deviceTypeSelect = document.querySelector("#deviceType");
        if (args["deviceType"]) {
            const deviceType = args["deviceType"];
            if (deviceType === "HID" || deviceType === "USB") {
                deviceTypeSelect.value = deviceType;
            }
        }
        if (args["vendorId"]) {
            const vendorId = args["vendorId"];
            vendorIdInput.value = vendorId;
        }
        if (args["productId"]) {
            const productId = args["productId"];
            productIdInput.value = productId;
        }
    }
}
/**
 * Open a window using dynamic options.
 * @returns The window.
 */
async function openDynamicApplicationWindow() {
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7Ozs7OztBQ0hBLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLElBQUksRUFBRTtJQUN4RCxJQUFJLENBQUM7UUFDSixNQUFNLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEIsQ0FBQztBQUNGLENBQUMsQ0FBQyxDQUFDO0FBRUg7O0dBRUc7QUFDSCxLQUFLLFVBQVUsT0FBTztJQUNyQixNQUFNLG9CQUFvQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUNoRixJQUFJLG9CQUFvQixFQUFFLENBQUM7UUFDMUIsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFRLEVBQUUsRUFBRSxDQUFDLDRCQUE0QixFQUFFLENBQUMsQ0FBQztJQUNwRyxDQUFDO0lBRUQsTUFBTSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDMUUsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1FBQ3hCLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBUSxFQUFFLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFRCxNQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN2RSxJQUFJLGdCQUFnQixFQUFFLENBQUM7UUFDdEIsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFRLEVBQUUsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUNELE1BQU0sbUJBQW1CLEVBQUUsQ0FBQztBQUM3QixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILEtBQUssVUFBVSxhQUFhO0lBQzNCLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFxQixDQUFDO0lBQzlFLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFxQixDQUFDO0lBRWhGLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxRCxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFNUQsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztRQUN2RCxvQ0FBb0M7UUFDcEMsS0FBSyxDQUFDLGlFQUFpRSxDQUFDLENBQUM7UUFDekUsT0FBTztJQUNSLENBQUM7SUFFRCxJQUFJLENBQUM7UUFDSix3RkFBd0Y7UUFDeEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsUUFBUSxpQkFBaUIsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUMxRixNQUFNLFVBQVUsR0FBSSxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBdUIsQ0FBQyxLQUFLLENBQUM7UUFDdEYsTUFBTSxtQkFBbUIsR0FBRyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxlQUFlLFVBQVUsRUFBRSxDQUFDO1FBQ3JILE1BQU0sSUFBSSxHQUFHLGtCQUFrQixRQUFRLElBQUksU0FBUyxFQUFFLENBQUM7UUFDdkQsTUFBTSxNQUFNLEdBQUcsTUFBTSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDYixrRkFBa0Y7WUFDbEYsTUFBTSxTQUFTLEdBQWtDO2dCQUNoRCxJQUFJO2dCQUNKLFlBQVksRUFBRSxJQUFJO2dCQUNsQixLQUFLLEVBQUUsSUFBSTtnQkFDWCxhQUFhLEVBQUUsR0FBRztnQkFDbEIsR0FBRyxFQUFFLG1CQUFtQjtnQkFDeEIsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsV0FBVyxFQUFFO29CQUNaLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7b0JBQ3ZCLE9BQU8sRUFBRTt3QkFDUjs0QkFDQyxRQUFROzRCQUNSLFNBQVM7eUJBQ1Q7cUJBQ0Q7aUJBQ0Q7YUFDRCxDQUFDO1lBQ0YsT0FBTyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNDLENBQUM7SUFDRixDQUFDO0lBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztRQUNoQixPQUFPLENBQUMsS0FBSyxDQUFDLDZCQUE2QixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3JELENBQUM7QUFDRixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILEtBQUssVUFBVSxvQkFBb0IsQ0FBQyxJQUFZO0lBQy9DLElBQUksQ0FBQztRQUNKLE1BQU0sY0FBYyxHQUFHLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMxRSxNQUFNLElBQUksR0FBRyxNQUFNLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixJQUFJLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQztRQUMxRCxJQUFJLGNBQWMsRUFBRSxDQUFDO1lBQ3BCLE1BQU0sY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQy9CLE1BQU0sY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BDLE1BQU0sY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzdCLE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQztJQUNGLENBQUM7SUFBQyxNQUFNLENBQUM7UUFDUix3QkFBd0I7SUFDekIsQ0FBQztJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2QsQ0FBQztBQUVEOztHQUVHO0FBQ0gsS0FBSyxVQUFVLGFBQWE7SUFDM0IsTUFBTSxXQUFXLEdBQUcsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3RELE1BQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDO0lBQ2xELE1BQU0sbUJBQW1CLEdBQUcsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsd0JBQXdCLENBQUMsU0FBUyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDO0lBQ3hJLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQzFELENBQUM7QUFFRDs7R0FFRztBQUNILEtBQUssVUFBVSxtQkFBbUI7SUFDakMsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUM3QyxNQUFNLE9BQU8sR0FBRyxNQUFNLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNwQyxNQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxjQUVqQyxDQUFDO0lBQ0Ysd0JBQXdCLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUUvRCxtQ0FBbUM7SUFDbkMsTUFBTSxHQUFHLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQXdELEVBQUUsRUFBRTtRQUNuRyx3QkFBd0IsQ0FBQyxLQUFLLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUNwRCxDQUFDLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxTQUFTLHdCQUF3QixDQUFDLElBQWdDO0lBQ2pFLElBQUksSUFBSSxFQUFFLENBQUM7UUFDVixNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBcUIsQ0FBQztRQUM5RSxNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBcUIsQ0FBQztRQUNoRixNQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFzQixDQUFDO1FBRXBGLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDeEIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBVyxDQUFDO1lBQ2hELElBQUksVUFBVSxLQUFLLEtBQUssSUFBSSxVQUFVLEtBQUssS0FBSyxFQUFFLENBQUM7Z0JBQ2xELGdCQUFnQixDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7WUFDckMsQ0FBQztRQUNGLENBQUM7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1lBQ3RCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQVcsQ0FBQztZQUM1QyxhQUFhLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUNoQyxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztZQUN2QixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFXLENBQUM7WUFDOUMsY0FBYyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDbEMsQ0FBQztJQUNGLENBQUM7QUFDRixDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsS0FBSyxVQUFVLDRCQUE0QjtJQUMxQyxNQUFNLFNBQVMsR0FBRztRQUNqQixJQUFJLEVBQUUsT0FBTztRQUNiLFlBQVksRUFBRSxHQUFHO1FBQ2pCLGFBQWEsRUFBRSxHQUFHO1FBQ2xCLEdBQUcsRUFBRSxrR0FBa0c7UUFDdkcsS0FBSyxFQUFFLElBQUk7UUFDWCxRQUFRLEVBQUUsSUFBSTtLQUNkLENBQUM7SUFDRixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3JDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXRlY3QtdXNiLWRldmljZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGV0ZWN0LXVzYi1kZXZpY2VzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGV0ZWN0LXVzYi1kZXZpY2VzLy4vY2xpZW50L3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9kb3Qtbm90YXRpb24gKi9cbmltcG9ydCB0eXBlIE9wZW5GaW4gZnJvbSBcIkBvcGVuZmluL2NvcmVcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xuXHR0cnkge1xuXHRcdGF3YWl0IGluaXREb20oKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0fVxufSk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgRE9NIGNvbXBvbmVudHMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXREb20oKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IGJ0bk9wZW5EeW5hbWljV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tb3Blbi1keW5hbWljLXdpbmRvd1wiKTtcblx0aWYgKGJ0bk9wZW5EeW5hbWljV2luZG93KSB7XG5cdFx0YnRuT3BlbkR5bmFtaWNXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIChlOiBFdmVudCkgPT4gb3BlbkR5bmFtaWNBcHBsaWNhdGlvbldpbmRvdygpKTtcblx0fVxuXG5cdGNvbnN0IGJ0bkNoZWNrRm9yRGV2aWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWlkZW50aWZ5LWRldmljZVwiKTtcblx0aWYgKGJ0bkNoZWNrRm9yRGV2aWNlcykge1xuXHRcdGJ0bkNoZWNrRm9yRGV2aWNlcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGU6IEV2ZW50KSA9PiByZXF1ZXN0RGV2aWNlKCkpO1xuXHR9XG5cblx0Y29uc3QgYnRuQ29ubmVjdERldmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWNvbm5lY3QtZGV2aWNlXCIpO1xuXHRpZiAoYnRuQ29ubmVjdERldmljZSkge1xuXHRcdGJ0bkNvbm5lY3REZXZpY2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIChlOiBFdmVudCkgPT4gY29ubmVjdERldmljZSgpKTtcblx0fVxuXHRhd2FpdCBsaXN0ZW5Gb3JEZXZpY2VJbmZvKCk7XG59XG5cbi8qKlxuICogQ29ubmVjdCB0byB0aGUgc3BlY2lmaWVkIGRldmljZS5cbiAqIEByZXR1cm5zIFRoZSB3aW5kb3cgdGhhdCB3YXMgb3BlbmVkIHRvIGNvbm5lY3QgdG8gdGhlIGRldmljZSwgaWYgYW55LlxuICogQHRocm93cyBBbiBlcnJvciBpZiB0aGUgY29ubmVjdGlvbiBmYWlscy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gY29ubmVjdERldmljZSgpOiBQcm9taXNlPE9wZW5GaW4uV2luZG93IHwgdW5kZWZpbmVkPiB7XG5cdGNvbnN0IHZlbmRvcklkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ZlbmRvcklkXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cdGNvbnN0IHByb2R1Y3RJZElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9kdWN0SWRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcblxuXHRjb25zdCB2ZW5kb3JJZCA9IE51bWJlci5wYXJzZUludCh2ZW5kb3JJZElucHV0LnZhbHVlLCAxMCk7XG5cdGNvbnN0IHByb2R1Y3RJZCA9IE51bWJlci5wYXJzZUludChwcm9kdWN0SWRJbnB1dC52YWx1ZSwgMTApO1xuXG5cdGlmIChOdW1iZXIuaXNOYU4odmVuZG9ySWQpIHx8IE51bWJlci5pc05hTihwcm9kdWN0SWQpKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XG5cdFx0YWxlcnQoXCJQbGVhc2UgZW50ZXIgdmFsaWQgbnVtZXJpYyB2YWx1ZXMgZm9yIFZlbmRvciBJRCBhbmQgUHJvZHVjdCBJRC5cIik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dHJ5IHtcblx0XHQvLyBIZXJlIHlvdSB3b3VsZCB0eXBpY2FsbHkgb3BlbiBhIGNvbm5lY3Rpb24gdG8gdGhlIGRldmljZSB1c2luZyBXZWJVU0Igb3IgV2ViSElEIEFQSXMuXG5cdFx0Y29uc29sZS5sb2coYENvbm5lY3RpbmcgdG8gZGV2aWNlIHdpdGggVmVuZG9yIElEOiAke3ZlbmRvcklkfSwgUHJvZHVjdCBJRDogJHtwcm9kdWN0SWR9YCk7XG5cdFx0Y29uc3QgZGV2aWNlVHlwZSA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RldmljZVR5cGVcIikgYXMgSFRNTFNlbGVjdEVsZW1lbnQpLnZhbHVlO1xuXHRcdGNvbnN0IGRldmljZUNvbm5lY3Rpb25VcmwgPSBgJHtsb2NhdGlvbi5ocmVmLnJlcGxhY2UoXCJhcHAuaHRtbFwiLCBcImRldmljZS1jb25uZWN0b3IuaHRtbFwiKX0/ZGV2aWNlVHlwZT0ke2RldmljZVR5cGV9YDtcblx0XHRjb25zdCBuYW1lID0gYGNvbm5lY3QtZGV2aWNlLSR7dmVuZG9ySWR9LSR7cHJvZHVjdElkfWA7XG5cdFx0Y29uc3QgZXhpc3RzID0gYXdhaXQgYnJpbmdUb0Zyb250SWZFeGlzdHMobmFtZSk7XG5cdFx0aWYgKCFleGlzdHMpIHtcblx0XHRcdC8vIE9wZW4gYSBuZXcgd2luZG93IHRvIGluZGljYXRlIGNvbm5lY3Rpb24gKHJlcGxhY2Ugd2l0aCBhY3R1YWwgY29ubmVjdGlvbiBsb2dpYylcblx0XHRcdGNvbnN0IHdpbk9wdGlvbjogT3BlbkZpbi5XaW5kb3dDcmVhdGlvbk9wdGlvbnMgPSB7XG5cdFx0XHRcdG5hbWUsXG5cdFx0XHRcdGRlZmF1bHRXaWR0aDogMTIwMCxcblx0XHRcdFx0d2lkdGg6IDEyMDAsXG5cdFx0XHRcdGRlZmF1bHRIZWlnaHQ6IDgwMCxcblx0XHRcdFx0dXJsOiBkZXZpY2VDb25uZWN0aW9uVXJsLFxuXHRcdFx0XHRmcmFtZTogdHJ1ZSxcblx0XHRcdFx0YXV0b1Nob3c6IHRydWUsXG5cdFx0XHRcdHBlcm1pc3Npb25zOiB7XG5cdFx0XHRcdFx0d2ViQVBJczogW1wiaGlkXCIsIFwidXNiXCJdLFxuXHRcdFx0XHRcdGRldmljZXM6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dmVuZG9ySWQsXG5cdFx0XHRcdFx0XHRcdHByb2R1Y3RJZFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdHJldHVybiBhd2FpdCBmaW4uV2luZG93LmNyZWF0ZSh3aW5PcHRpb24pO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiRXJyb3IgY29ubmVjdGluZyB0byBkZXZpY2U6XCIsIGVycm9yKTtcblx0fVxufVxuXG4vKipcbiAqIEJyaW5ncyBhbiBleGlzdGluZyB3aW5kb3cgdG8gdGhlIGZyb250IGlmIGl0IGV4aXN0cy5cbiAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB3aW5kb3cgdG8gYnJpbmcgdG8gdGhlIGZyb250LlxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgd2luZG93IHdhcyBmb3VuZCBhbmQgYnJvdWdodCB0byB0aGUgZnJvbnQsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gYnJpbmdUb0Zyb250SWZFeGlzdHMobmFtZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgZXhpc3RpbmdXaW5kb3cgPSBhd2FpdCBmaW4uV2luZG93LndyYXAoeyB1dWlkOiBmaW4ubWUudXVpZCwgbmFtZSB9KTtcblx0XHRjb25zdCBpbmZvID0gYXdhaXQgZXhpc3RpbmdXaW5kb3cuZ2V0SW5mbygpO1xuXHRcdGNvbnNvbGUubG9nKGBCcmluZyB3aW5kb3cgd2l0aCB1cmwgJHtpbmZvLnVybH0gdG8gZnJvbnRgKTtcblx0XHRpZiAoZXhpc3RpbmdXaW5kb3cpIHtcblx0XHRcdGF3YWl0IGV4aXN0aW5nV2luZG93LnJlc3RvcmUoKTtcblx0XHRcdGF3YWl0IGV4aXN0aW5nV2luZG93LmJyaW5nVG9Gcm9udCgpO1xuXHRcdFx0YXdhaXQgZXhpc3RpbmdXaW5kb3cuZm9jdXMoKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fSBjYXRjaCB7XG5cdFx0Ly8gV2luZG93IGRvZXMgbm90IGV4aXN0XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENoZWNrcyB0byBzZWUgd2hhdCBkZXZpY2VzIHRvIGNvbm5lY3QuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHJlcXVlc3REZXZpY2UoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IHJ1bnRpbWVJbmZvID0gYXdhaXQgZmluLlN5c3RlbS5nZXRSdW50aW1lSW5mbygpO1xuXHRjb25zdCBtYW5pZmVzdFVybCA9IHJ1bnRpbWVJbmZvLm1hbmlmZXN0VXJsID8/IFwiXCI7XG5cdGNvbnN0IGRldmljZUlkZW50aWZpZXJVcmwgPSBgJHtsb2NhdGlvbi5ocmVmLnJlcGxhY2UoXCJhcHAuaHRtbFwiLCBcImRldmljZS1pZGVudGlmaWVyLmh0bWxcIil9P2ZpbnM9JHttYW5pZmVzdFVybC5yZXBsYWNlKFwiaHR0cFwiLCBcImZpblwiKX1gO1xuXHRhd2FpdCBmaW4uU3lzdGVtLm9wZW5VcmxXaXRoQnJvd3NlcihkZXZpY2VJZGVudGlmaWVyVXJsKTtcbn1cblxuLyoqXG4gKiBMaXN0ZW5zIGZvciBkZXZpY2UgaW5mb3JtYXRpb24gcGFzc2VkIHZpYSB0aGUgSEVSRSBydW50aW1lIGFuZCBwcm9jZXNzZXMgaXQuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGxpc3RlbkZvckRldmljZUluZm8oKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IGFwcCA9IGZpbi5BcHBsaWNhdGlvbi5nZXRDdXJyZW50U3luYygpO1xuXHRjb25zdCBhcHBJbmZvID0gYXdhaXQgYXBwLmdldEluZm8oKTtcblx0Y29uc3QgY3VzdG9tSW5pdE9wdGlvbnMgPSBhcHBJbmZvLmluaXRpYWxPcHRpb25zIGFzIE9wZW5GaW4uQXBwbGljYXRpb25DcmVhdGlvbk9wdGlvbnMgJiB7XG5cdFx0dXNlckFwcENvbmZpZ0FyZ3M/OiBPcGVuRmluLlVzZXJBcHBDb25maWdBcmdzO1xuXHR9O1xuXHRwcm9jZXNzUGFzc2VkSW5mb3JtYXRpb24oY3VzdG9tSW5pdE9wdGlvbnM/LnVzZXJBcHBDb25maWdBcmdzKTtcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdm9pZFxuXHRhd2FpdCBhcHAuYWRkTGlzdGVuZXIoXCJydW4tcmVxdWVzdGVkXCIsIChldmVudDogeyB1c2VyQXBwQ29uZmlnQXJncz86IE9wZW5GaW4uVXNlckFwcENvbmZpZ0FyZ3MgfSkgPT4ge1xuXHRcdHByb2Nlc3NQYXNzZWRJbmZvcm1hdGlvbihldmVudD8udXNlckFwcENvbmZpZ0FyZ3MpO1xuXHR9KTtcbn1cblxuLyoqXG4gKiBQcm9jZXNzZXMgdGhlIGluZm9ybWF0aW9uIHBhc3NlZCB2aWEgdXNlckFwcENvbmZpZ0FyZ3MuXG4gKiBAcGFyYW0gYXJncyBUaGUgdXNlciBhcHBsaWNhdGlvbiBjb25maWd1cmF0aW9uIGFyZ3VtZW50cy5cbiAqL1xuZnVuY3Rpb24gcHJvY2Vzc1Bhc3NlZEluZm9ybWF0aW9uKGFyZ3M/OiBPcGVuRmluLlVzZXJBcHBDb25maWdBcmdzKTogdm9pZCB7XG5cdGlmIChhcmdzKSB7XG5cdFx0Y29uc3QgdmVuZG9ySWRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdmVuZG9ySWRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcblx0XHRjb25zdCBwcm9kdWN0SWRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZHVjdElkXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cdFx0Y29uc3QgZGV2aWNlVHlwZVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGV2aWNlVHlwZVwiKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcblxuXHRcdGlmIChhcmdzW1wiZGV2aWNlVHlwZVwiXSkge1xuXHRcdFx0Y29uc3QgZGV2aWNlVHlwZSA9IGFyZ3NbXCJkZXZpY2VUeXBlXCJdIGFzIHN0cmluZztcblx0XHRcdGlmIChkZXZpY2VUeXBlID09PSBcIkhJRFwiIHx8IGRldmljZVR5cGUgPT09IFwiVVNCXCIpIHtcblx0XHRcdFx0ZGV2aWNlVHlwZVNlbGVjdC52YWx1ZSA9IGRldmljZVR5cGU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChhcmdzW1widmVuZG9ySWRcIl0pIHtcblx0XHRcdGNvbnN0IHZlbmRvcklkID0gYXJnc1tcInZlbmRvcklkXCJdIGFzIHN0cmluZztcblx0XHRcdHZlbmRvcklkSW5wdXQudmFsdWUgPSB2ZW5kb3JJZDtcblx0XHR9XG5cdFx0aWYgKGFyZ3NbXCJwcm9kdWN0SWRcIl0pIHtcblx0XHRcdGNvbnN0IHByb2R1Y3RJZCA9IGFyZ3NbXCJwcm9kdWN0SWRcIl0gYXMgc3RyaW5nO1xuXHRcdFx0cHJvZHVjdElkSW5wdXQudmFsdWUgPSBwcm9kdWN0SWQ7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogT3BlbiBhIHdpbmRvdyB1c2luZyBkeW5hbWljIG9wdGlvbnMuXG4gKiBAcmV0dXJucyBUaGUgd2luZG93LlxuICovXG5hc3luYyBmdW5jdGlvbiBvcGVuRHluYW1pY0FwcGxpY2F0aW9uV2luZG93KCk6IFByb21pc2U8T3BlbkZpbi5XaW5kb3c+IHtcblx0Y29uc3Qgd2luT3B0aW9uID0ge1xuXHRcdG5hbWU6IFwiY2hpbGRcIixcblx0XHRkZWZhdWx0V2lkdGg6IDgwMCxcblx0XHRkZWZhdWx0SGVpZ2h0OiA4MDAsXG5cdFx0dXJsOiBcImh0dHBzOi8vcmVzb3VyY2VzLmhlcmUuaW8vZG9jcy9jb3JlL2RldmVsb3Avc2VjdXJpdHkvY29ubmVjdC11c2ItaGlkLyNmaW5kLWFsbC1jb25uZWN0ZWQtZGV2aWNlc1wiLFxuXHRcdGZyYW1lOiB0cnVlLFxuXHRcdGF1dG9TaG93OiB0cnVlXG5cdH07XG5cdHJldHVybiBmaW4uV2luZG93LmNyZWF0ZSh3aW5PcHRpb24pO1xufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==