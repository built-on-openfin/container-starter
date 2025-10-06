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
 * Listens for device information passed via the OpenFin runtime and processes it.
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
        url: "https://developers.openfin.co/of-docs/docs/connect-usb-hid#find-all-connected-devices",
        frame: true,
        autoShow: true
    };
    return fin.Window.create(winOption);
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNIQSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFDeEQsSUFBSSxDQUFDO1FBQ0osTUFBTSxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztRQUNoQixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RCLENBQUM7QUFDRixDQUFDLENBQUMsQ0FBQztBQUVIOztHQUVHO0FBQ0gsS0FBSyxVQUFVLE9BQU87SUFDckIsTUFBTSxvQkFBb0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDaEYsSUFBSSxvQkFBb0IsRUFBRSxDQUFDO1FBQzFCLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBUSxFQUFFLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDLENBQUM7SUFDcEcsQ0FBQztJQUVELE1BQU0sa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQzFFLElBQUksa0JBQWtCLEVBQUUsQ0FBQztRQUN4QixrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQVEsRUFBRSxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQsTUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDdkUsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3RCLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBUSxFQUFFLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFDRCxNQUFNLG1CQUFtQixFQUFFLENBQUM7QUFDN0IsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxLQUFLLFVBQVUsYUFBYTtJQUMzQixNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBcUIsQ0FBQztJQUM5RSxNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBcUIsQ0FBQztJQUVoRixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUQsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRTVELElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7UUFDdkQsb0NBQW9DO1FBQ3BDLEtBQUssQ0FBQyxpRUFBaUUsQ0FBQyxDQUFDO1FBQ3pFLE9BQU87SUFDUixDQUFDO0lBRUQsSUFBSSxDQUFDO1FBQ0osd0ZBQXdGO1FBQ3hGLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0NBQXdDLFFBQVEsaUJBQWlCLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDMUYsTUFBTSxVQUFVLEdBQUksUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQXVCLENBQUMsS0FBSyxDQUFDO1FBQ3RGLE1BQU0sbUJBQW1CLEdBQUcsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsdUJBQXVCLENBQUMsZUFBZSxVQUFVLEVBQUUsQ0FBQztRQUNySCxNQUFNLElBQUksR0FBRyxrQkFBa0IsUUFBUSxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQ3ZELE1BQU0sTUFBTSxHQUFHLE1BQU0sb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2Isa0ZBQWtGO1lBQ2xGLE1BQU0sU0FBUyxHQUFrQztnQkFDaEQsSUFBSTtnQkFDSixZQUFZLEVBQUUsSUFBSTtnQkFDbEIsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsYUFBYSxFQUFFLEdBQUc7Z0JBQ2xCLEdBQUcsRUFBRSxtQkFBbUI7Z0JBQ3hCLEtBQUssRUFBRSxJQUFJO2dCQUNYLFFBQVEsRUFBRSxJQUFJO2dCQUNkLFdBQVcsRUFBRTtvQkFDWixPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO29CQUN2QixPQUFPLEVBQUU7d0JBQ1I7NEJBQ0MsUUFBUTs0QkFDUixTQUFTO3lCQUNUO3FCQUNEO2lCQUNEO2FBQ0QsQ0FBQztZQUNGLE9BQU8sTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQyxDQUFDO0lBQ0YsQ0FBQztJQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7UUFDaEIsT0FBTyxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyRCxDQUFDO0FBQ0YsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxLQUFLLFVBQVUsb0JBQW9CLENBQUMsSUFBWTtJQUMvQyxJQUFJLENBQUM7UUFDSixNQUFNLGNBQWMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDMUUsTUFBTSxJQUFJLEdBQUcsTUFBTSxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUM7UUFDMUQsSUFBSSxjQUFjLEVBQUUsQ0FBQztZQUNwQixNQUFNLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMvQixNQUFNLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQyxNQUFNLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM3QixPQUFPLElBQUksQ0FBQztRQUNiLENBQUM7SUFDRixDQUFDO0lBQUMsTUFBTSxDQUFDO1FBQ1Isd0JBQXdCO0lBQ3pCLENBQUM7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNkLENBQUM7QUFFRDs7R0FFRztBQUNILEtBQUssVUFBVSxhQUFhO0lBQzNCLE1BQU0sV0FBVyxHQUFHLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN0RCxNQUFNLFdBQVcsR0FBRyxXQUFXLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQztJQUNsRCxNQUFNLG1CQUFtQixHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLHdCQUF3QixDQUFDLFNBQVMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQztJQUN4SSxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUMxRCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxLQUFLLFVBQVUsbUJBQW1CO0lBQ2pDLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDN0MsTUFBTSxPQUFPLEdBQUcsTUFBTSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDcEMsTUFBTSxpQkFBaUIsR0FBRyxPQUFPLENBQUMsY0FFakMsQ0FBQztJQUNGLHdCQUF3QixDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFFL0QsbUNBQW1DO0lBQ25DLE1BQU0sR0FBRyxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUF3RCxFQUFFLEVBQUU7UUFDbkcsd0JBQXdCLENBQUMsS0FBSyxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDcEQsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBUyx3QkFBd0IsQ0FBQyxJQUFnQztJQUNqRSxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ1YsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQXFCLENBQUM7UUFDOUUsTUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQXFCLENBQUM7UUFDaEYsTUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBc0IsQ0FBQztRQUVwRixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3hCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQVcsQ0FBQztZQUNoRCxJQUFJLFVBQVUsS0FBSyxLQUFLLElBQUksVUFBVSxLQUFLLEtBQUssRUFBRSxDQUFDO2dCQUNsRCxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO1lBQ3JDLENBQUM7UUFDRixDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztZQUN0QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFXLENBQUM7WUFDNUMsYUFBYSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDaEMsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7WUFDdkIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBVyxDQUFDO1lBQzlDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ2xDLENBQUM7SUFDRixDQUFDO0FBQ0YsQ0FBQztBQUVEOzs7R0FHRztBQUNILEtBQUssVUFBVSw0QkFBNEI7SUFDMUMsTUFBTSxTQUFTLEdBQUc7UUFDakIsSUFBSSxFQUFFLE9BQU87UUFDYixZQUFZLEVBQUUsR0FBRztRQUNqQixhQUFhLEVBQUUsR0FBRztRQUNsQixHQUFHLEVBQUUsdUZBQXVGO1FBQzVGLEtBQUssRUFBRSxJQUFJO1FBQ1gsUUFBUSxFQUFFLElBQUk7S0FDZCxDQUFDO0lBQ0YsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNyQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV0ZWN0LXVzYi1kZXZpY2VzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RldGVjdC11c2ItZGV2aWNlcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RldGVjdC11c2ItZGV2aWNlcy8uL2NsaWVudC9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvZG90LW5vdGF0aW9uICovXG5pbXBvcnQgdHlwZSBPcGVuRmluIGZyb20gXCJAb3BlbmZpbi9jb3JlXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBpbml0RG9tKCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdH1cbn0pO1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIERPTSBjb21wb25lbnRzLlxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0RG9tKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBidG5PcGVuRHluYW1pY1dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLW9wZW4tZHluYW1pYy13aW5kb3dcIik7XG5cdGlmIChidG5PcGVuRHluYW1pY1dpbmRvdykge1xuXHRcdGJ0bk9wZW5EeW5hbWljV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZTogRXZlbnQpID0+IG9wZW5EeW5hbWljQXBwbGljYXRpb25XaW5kb3coKSk7XG5cdH1cblxuXHRjb25zdCBidG5DaGVja0ZvckRldmljZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1pZGVudGlmeS1kZXZpY2VcIik7XG5cdGlmIChidG5DaGVja0ZvckRldmljZXMpIHtcblx0XHRidG5DaGVja0ZvckRldmljZXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIChlOiBFdmVudCkgPT4gcmVxdWVzdERldmljZSgpKTtcblx0fVxuXG5cdGNvbnN0IGJ0bkNvbm5lY3REZXZpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1jb25uZWN0LWRldmljZVwiKTtcblx0aWYgKGJ0bkNvbm5lY3REZXZpY2UpIHtcblx0XHRidG5Db25uZWN0RGV2aWNlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZTogRXZlbnQpID0+IGNvbm5lY3REZXZpY2UoKSk7XG5cdH1cblx0YXdhaXQgbGlzdGVuRm9yRGV2aWNlSW5mbygpO1xufVxuXG4vKipcbiAqIENvbm5lY3QgdG8gdGhlIHNwZWNpZmllZCBkZXZpY2UuXG4gKiBAcmV0dXJucyBUaGUgd2luZG93IHRoYXQgd2FzIG9wZW5lZCB0byBjb25uZWN0IHRvIHRoZSBkZXZpY2UsIGlmIGFueS5cbiAqIEB0aHJvd3MgQW4gZXJyb3IgaWYgdGhlIGNvbm5lY3Rpb24gZmFpbHMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNvbm5lY3REZXZpY2UoKTogUHJvbWlzZTxPcGVuRmluLldpbmRvdyB8IHVuZGVmaW5lZD4ge1xuXHRjb25zdCB2ZW5kb3JJZElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2ZW5kb3JJZFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXHRjb25zdCBwcm9kdWN0SWRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZHVjdElkXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cblx0Y29uc3QgdmVuZG9ySWQgPSBOdW1iZXIucGFyc2VJbnQodmVuZG9ySWRJbnB1dC52YWx1ZSwgMTApO1xuXHRjb25zdCBwcm9kdWN0SWQgPSBOdW1iZXIucGFyc2VJbnQocHJvZHVjdElkSW5wdXQudmFsdWUsIDEwKTtcblxuXHRpZiAoTnVtYmVyLmlzTmFOKHZlbmRvcklkKSB8fCBOdW1iZXIuaXNOYU4ocHJvZHVjdElkKSkge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxuXHRcdGFsZXJ0KFwiUGxlYXNlIGVudGVyIHZhbGlkIG51bWVyaWMgdmFsdWVzIGZvciBWZW5kb3IgSUQgYW5kIFByb2R1Y3QgSUQuXCIpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHRyeSB7XG5cdFx0Ly8gSGVyZSB5b3Ugd291bGQgdHlwaWNhbGx5IG9wZW4gYSBjb25uZWN0aW9uIHRvIHRoZSBkZXZpY2UgdXNpbmcgV2ViVVNCIG9yIFdlYkhJRCBBUElzLlxuXHRcdGNvbnNvbGUubG9nKGBDb25uZWN0aW5nIHRvIGRldmljZSB3aXRoIFZlbmRvciBJRDogJHt2ZW5kb3JJZH0sIFByb2R1Y3QgSUQ6ICR7cHJvZHVjdElkfWApO1xuXHRcdGNvbnN0IGRldmljZVR5cGUgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXZpY2VUeXBlXCIpIGFzIEhUTUxTZWxlY3RFbGVtZW50KS52YWx1ZTtcblx0XHRjb25zdCBkZXZpY2VDb25uZWN0aW9uVXJsID0gYCR7bG9jYXRpb24uaHJlZi5yZXBsYWNlKFwiYXBwLmh0bWxcIiwgXCJkZXZpY2UtY29ubmVjdG9yLmh0bWxcIil9P2RldmljZVR5cGU9JHtkZXZpY2VUeXBlfWA7XG5cdFx0Y29uc3QgbmFtZSA9IGBjb25uZWN0LWRldmljZS0ke3ZlbmRvcklkfS0ke3Byb2R1Y3RJZH1gO1xuXHRcdGNvbnN0IGV4aXN0cyA9IGF3YWl0IGJyaW5nVG9Gcm9udElmRXhpc3RzKG5hbWUpO1xuXHRcdGlmICghZXhpc3RzKSB7XG5cdFx0XHQvLyBPcGVuIGEgbmV3IHdpbmRvdyB0byBpbmRpY2F0ZSBjb25uZWN0aW9uIChyZXBsYWNlIHdpdGggYWN0dWFsIGNvbm5lY3Rpb24gbG9naWMpXG5cdFx0XHRjb25zdCB3aW5PcHRpb246IE9wZW5GaW4uV2luZG93Q3JlYXRpb25PcHRpb25zID0ge1xuXHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRkZWZhdWx0V2lkdGg6IDEyMDAsXG5cdFx0XHRcdHdpZHRoOiAxMjAwLFxuXHRcdFx0XHRkZWZhdWx0SGVpZ2h0OiA4MDAsXG5cdFx0XHRcdHVybDogZGV2aWNlQ29ubmVjdGlvblVybCxcblx0XHRcdFx0ZnJhbWU6IHRydWUsXG5cdFx0XHRcdGF1dG9TaG93OiB0cnVlLFxuXHRcdFx0XHRwZXJtaXNzaW9uczoge1xuXHRcdFx0XHRcdHdlYkFQSXM6IFtcImhpZFwiLCBcInVzYlwiXSxcblx0XHRcdFx0XHRkZXZpY2VzOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHZlbmRvcklkLFxuXHRcdFx0XHRcdFx0XHRwcm9kdWN0SWRcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRyZXR1cm4gYXdhaXQgZmluLldpbmRvdy5jcmVhdGUod2luT3B0aW9uKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIGNvbm5lY3RpbmcgdG8gZGV2aWNlOlwiLCBlcnJvcik7XG5cdH1cbn1cblxuLyoqXG4gKiBCcmluZ3MgYW4gZXhpc3Rpbmcgd2luZG93IHRvIHRoZSBmcm9udCBpZiBpdCBleGlzdHMuXG4gKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgd2luZG93IHRvIGJyaW5nIHRvIHRoZSBmcm9udC5cbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHdpbmRvdyB3YXMgZm91bmQgYW5kIGJyb3VnaHQgdG8gdGhlIGZyb250LCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGJyaW5nVG9Gcm9udElmRXhpc3RzKG5hbWU6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IGV4aXN0aW5nV2luZG93ID0gYXdhaXQgZmluLldpbmRvdy53cmFwKHsgdXVpZDogZmluLm1lLnV1aWQsIG5hbWUgfSk7XG5cdFx0Y29uc3QgaW5mbyA9IGF3YWl0IGV4aXN0aW5nV2luZG93LmdldEluZm8oKTtcblx0XHRjb25zb2xlLmxvZyhgQnJpbmcgd2luZG93IHdpdGggdXJsICR7aW5mby51cmx9IHRvIGZyb250YCk7XG5cdFx0aWYgKGV4aXN0aW5nV2luZG93KSB7XG5cdFx0XHRhd2FpdCBleGlzdGluZ1dpbmRvdy5yZXN0b3JlKCk7XG5cdFx0XHRhd2FpdCBleGlzdGluZ1dpbmRvdy5icmluZ1RvRnJvbnQoKTtcblx0XHRcdGF3YWl0IGV4aXN0aW5nV2luZG93LmZvY3VzKCk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH0gY2F0Y2gge1xuXHRcdC8vIFdpbmRvdyBkb2VzIG5vdCBleGlzdFxuXHR9XG5cdHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBDaGVja3MgdG8gc2VlIHdoYXQgZGV2aWNlcyB0byBjb25uZWN0LlxuICovXG5hc3luYyBmdW5jdGlvbiByZXF1ZXN0RGV2aWNlKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBydW50aW1lSW5mbyA9IGF3YWl0IGZpbi5TeXN0ZW0uZ2V0UnVudGltZUluZm8oKTtcblx0Y29uc3QgbWFuaWZlc3RVcmwgPSBydW50aW1lSW5mby5tYW5pZmVzdFVybCA/PyBcIlwiO1xuXHRjb25zdCBkZXZpY2VJZGVudGlmaWVyVXJsID0gYCR7bG9jYXRpb24uaHJlZi5yZXBsYWNlKFwiYXBwLmh0bWxcIiwgXCJkZXZpY2UtaWRlbnRpZmllci5odG1sXCIpfT9maW5zPSR7bWFuaWZlc3RVcmwucmVwbGFjZShcImh0dHBcIiwgXCJmaW5cIil9YDtcblx0YXdhaXQgZmluLlN5c3RlbS5vcGVuVXJsV2l0aEJyb3dzZXIoZGV2aWNlSWRlbnRpZmllclVybCk7XG59XG5cbi8qKlxuICogTGlzdGVucyBmb3IgZGV2aWNlIGluZm9ybWF0aW9uIHBhc3NlZCB2aWEgdGhlIE9wZW5GaW4gcnVudGltZSBhbmQgcHJvY2Vzc2VzIGl0LlxuICovXG5hc3luYyBmdW5jdGlvbiBsaXN0ZW5Gb3JEZXZpY2VJbmZvKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBhcHAgPSBmaW4uQXBwbGljYXRpb24uZ2V0Q3VycmVudFN5bmMoKTtcblx0Y29uc3QgYXBwSW5mbyA9IGF3YWl0IGFwcC5nZXRJbmZvKCk7XG5cdGNvbnN0IGN1c3RvbUluaXRPcHRpb25zID0gYXBwSW5mby5pbml0aWFsT3B0aW9ucyBhcyBPcGVuRmluLkFwcGxpY2F0aW9uQ3JlYXRpb25PcHRpb25zICYge1xuXHRcdHVzZXJBcHBDb25maWdBcmdzPzogT3BlbkZpbi5Vc2VyQXBwQ29uZmlnQXJncztcblx0fTtcblx0cHJvY2Vzc1Bhc3NlZEluZm9ybWF0aW9uKGN1c3RvbUluaXRPcHRpb25zPy51c2VyQXBwQ29uZmlnQXJncyk7XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXZvaWRcblx0YXdhaXQgYXBwLmFkZExpc3RlbmVyKFwicnVuLXJlcXVlc3RlZFwiLCAoZXZlbnQ6IHsgdXNlckFwcENvbmZpZ0FyZ3M/OiBPcGVuRmluLlVzZXJBcHBDb25maWdBcmdzIH0pID0+IHtcblx0XHRwcm9jZXNzUGFzc2VkSW5mb3JtYXRpb24oZXZlbnQ/LnVzZXJBcHBDb25maWdBcmdzKTtcblx0fSk7XG59XG5cbi8qKlxuICogUHJvY2Vzc2VzIHRoZSBpbmZvcm1hdGlvbiBwYXNzZWQgdmlhIHVzZXJBcHBDb25maWdBcmdzLlxuICogQHBhcmFtIGFyZ3MgVGhlIHVzZXIgYXBwbGljYXRpb24gY29uZmlndXJhdGlvbiBhcmd1bWVudHMuXG4gKi9cbmZ1bmN0aW9uIHByb2Nlc3NQYXNzZWRJbmZvcm1hdGlvbihhcmdzPzogT3BlbkZpbi5Vc2VyQXBwQ29uZmlnQXJncyk6IHZvaWQge1xuXHRpZiAoYXJncykge1xuXHRcdGNvbnN0IHZlbmRvcklkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ZlbmRvcklkXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cdFx0Y29uc3QgcHJvZHVjdElkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2R1Y3RJZFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXHRcdGNvbnN0IGRldmljZVR5cGVTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RldmljZVR5cGVcIikgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG5cblx0XHRpZiAoYXJnc1tcImRldmljZVR5cGVcIl0pIHtcblx0XHRcdGNvbnN0IGRldmljZVR5cGUgPSBhcmdzW1wiZGV2aWNlVHlwZVwiXSBhcyBzdHJpbmc7XG5cdFx0XHRpZiAoZGV2aWNlVHlwZSA9PT0gXCJISURcIiB8fCBkZXZpY2VUeXBlID09PSBcIlVTQlwiKSB7XG5cdFx0XHRcdGRldmljZVR5cGVTZWxlY3QudmFsdWUgPSBkZXZpY2VUeXBlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoYXJnc1tcInZlbmRvcklkXCJdKSB7XG5cdFx0XHRjb25zdCB2ZW5kb3JJZCA9IGFyZ3NbXCJ2ZW5kb3JJZFwiXSBhcyBzdHJpbmc7XG5cdFx0XHR2ZW5kb3JJZElucHV0LnZhbHVlID0gdmVuZG9ySWQ7XG5cdFx0fVxuXHRcdGlmIChhcmdzW1wicHJvZHVjdElkXCJdKSB7XG5cdFx0XHRjb25zdCBwcm9kdWN0SWQgPSBhcmdzW1wicHJvZHVjdElkXCJdIGFzIHN0cmluZztcblx0XHRcdHByb2R1Y3RJZElucHV0LnZhbHVlID0gcHJvZHVjdElkO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIE9wZW4gYSB3aW5kb3cgdXNpbmcgZHluYW1pYyBvcHRpb25zLlxuICogQHJldHVybnMgVGhlIHdpbmRvdy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gb3BlbkR5bmFtaWNBcHBsaWNhdGlvbldpbmRvdygpOiBQcm9taXNlPE9wZW5GaW4uV2luZG93PiB7XG5cdGNvbnN0IHdpbk9wdGlvbiA9IHtcblx0XHRuYW1lOiBcImNoaWxkXCIsXG5cdFx0ZGVmYXVsdFdpZHRoOiA4MDAsXG5cdFx0ZGVmYXVsdEhlaWdodDogODAwLFxuXHRcdHVybDogXCJodHRwczovL2RldmVsb3BlcnMub3BlbmZpbi5jby9vZi1kb2NzL2RvY3MvY29ubmVjdC11c2ItaGlkI2ZpbmQtYWxsLWNvbm5lY3RlZC1kZXZpY2VzXCIsXG5cdFx0ZnJhbWU6IHRydWUsXG5cdFx0YXV0b1Nob3c6IHRydWVcblx0fTtcblx0cmV0dXJuIGZpbi5XaW5kb3cuY3JlYXRlKHdpbk9wdGlvbik7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=