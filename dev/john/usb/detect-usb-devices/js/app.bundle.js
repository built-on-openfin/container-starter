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
async function connectDevice() {
    const vendorIdInput = document.getElementById("vendorId");
    const productIdInput = document.getElementById("productId");
    const vendorId = parseInt(vendorIdInput.value, 10);
    const productId = parseInt(productIdInput.value, 10);
    if (isNaN(vendorId) || isNaN(productId)) {
        alert("Please enter valid numeric values for Vendor ID and Product ID.");
        return;
    }
    try {
        // Here you would typically open a connection to the device using WebUSB or WebHID APIs.
        console.log(`Connecting to device with Vendor ID: ${vendorId}, Product ID: ${productId}`);
        const deviceType = document.getElementById("deviceType").value;
        const deviceConnectionUrl = location.href.replace("app.html", "device-connector.html") + `?deviceType=${deviceType}`;
        const name = "connect-device-" + vendorId + "-" + productId;
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
                            vendorId: vendorId,
                            productId: productId
                        }
                    ]
                }
            };
            return fin.Window.create(winOption);
        }
    }
    catch (error) {
        console.error("Error connecting to device:", error);
    }
}
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
    catch (error) {
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
    const deviceIdentifierUrl = location.href.replace("app.html", "device-identifier.html") +
        "?fins=" +
        manifestUrl.replace("http", "fin");
    await fin.System.openUrlWithBrowser(deviceIdentifierUrl);
}
async function listenForDeviceInfo() {
    const app = fin.Application.getCurrentSync();
    const appInfo = await app.getInfo();
    const customInitOptions = appInfo.initialOptions;
    processPassedInformation(customInitOptions?.userAppConfigArgs);
    app.addListener("run-requested", (event) => {
        processPassedInformation(event?.userAppConfigArgs);
    });
}
function processPassedInformation(args) {
    if (args) {
        const vendorIdInput = document.getElementById("vendorId");
        const productIdInput = document.getElementById("productId");
        const deviceTypeSelect = document.getElementById("deviceType");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly9kZXRlY3QtdXNiLWRldmljZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGV0ZWN0LXVzYi1kZXZpY2VzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGV0ZWN0LXVzYi1kZXZpY2VzLy4vY2xpZW50L3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0eXBlIE9wZW5GaW4gZnJvbSBcIkBvcGVuZmluL2NvcmVcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xuXHR0cnkge1xuXHRcdGF3YWl0IGluaXREb20oKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0fVxufSk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgRE9NIGNvbXBvbmVudHMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXREb20oKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IGJ0bk9wZW5EeW5hbWljV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tb3Blbi1keW5hbWljLXdpbmRvd1wiKTtcblx0aWYgKGJ0bk9wZW5EeW5hbWljV2luZG93KSB7XG5cdFx0YnRuT3BlbkR5bmFtaWNXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIChlOiBFdmVudCkgPT4gb3BlbkR5bmFtaWNBcHBsaWNhdGlvbldpbmRvdygpKTtcblx0fVxuXG5cdGNvbnN0IGJ0bkNoZWNrRm9yRGV2aWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWlkZW50aWZ5LWRldmljZVwiKTtcblx0aWYgKGJ0bkNoZWNrRm9yRGV2aWNlcykge1xuXHRcdGJ0bkNoZWNrRm9yRGV2aWNlcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGU6IEV2ZW50KSA9PiByZXF1ZXN0RGV2aWNlKCkpO1xuXHR9XG5cblx0Y29uc3QgYnRuQ29ubmVjdERldmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWNvbm5lY3QtZGV2aWNlXCIpO1xuXHRpZiAoYnRuQ29ubmVjdERldmljZSkge1xuXHRcdGJ0bkNvbm5lY3REZXZpY2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIChlOiBFdmVudCkgPT4gY29ubmVjdERldmljZSgpKTtcblx0fVxuXHRhd2FpdCBsaXN0ZW5Gb3JEZXZpY2VJbmZvKCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNvbm5lY3REZXZpY2UoKTogUHJvbWlzZTxPcGVuRmluLldpbmRvdyB8IHVuZGVmaW5lZD4ge1xuXHRjb25zdCB2ZW5kb3JJZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2ZW5kb3JJZFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXHRjb25zdCBwcm9kdWN0SWRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdElkXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cblx0Y29uc3QgdmVuZG9ySWQgPSBwYXJzZUludCh2ZW5kb3JJZElucHV0LnZhbHVlLCAxMCk7XG5cdGNvbnN0IHByb2R1Y3RJZCA9IHBhcnNlSW50KHByb2R1Y3RJZElucHV0LnZhbHVlLCAxMCk7XG5cblx0aWYgKGlzTmFOKHZlbmRvcklkKSB8fCBpc05hTihwcm9kdWN0SWQpKSB7XG5cdFx0YWxlcnQoXCJQbGVhc2UgZW50ZXIgdmFsaWQgbnVtZXJpYyB2YWx1ZXMgZm9yIFZlbmRvciBJRCBhbmQgUHJvZHVjdCBJRC5cIik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dHJ5IHtcblx0XHQvLyBIZXJlIHlvdSB3b3VsZCB0eXBpY2FsbHkgb3BlbiBhIGNvbm5lY3Rpb24gdG8gdGhlIGRldmljZSB1c2luZyBXZWJVU0Igb3IgV2ViSElEIEFQSXMuXG5cdFx0Y29uc29sZS5sb2coYENvbm5lY3RpbmcgdG8gZGV2aWNlIHdpdGggVmVuZG9yIElEOiAke3ZlbmRvcklkfSwgUHJvZHVjdCBJRDogJHtwcm9kdWN0SWR9YCk7XG5cdFx0Y29uc3QgZGV2aWNlVHlwZSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldmljZVR5cGVcIikgYXMgSFRNTFNlbGVjdEVsZW1lbnQpLnZhbHVlO1xuXHRcdGNvbnN0IGRldmljZUNvbm5lY3Rpb25VcmwgPVxuXHRcdFx0bG9jYXRpb24uaHJlZi5yZXBsYWNlKFwiYXBwLmh0bWxcIiwgXCJkZXZpY2UtY29ubmVjdG9yLmh0bWxcIikgKyBgP2RldmljZVR5cGU9JHtkZXZpY2VUeXBlfWA7XG5cdFx0Y29uc3QgbmFtZSA9IFwiY29ubmVjdC1kZXZpY2UtXCIgKyB2ZW5kb3JJZCArIFwiLVwiICsgcHJvZHVjdElkO1xuXHRcdGNvbnN0IGV4aXN0cyA9IGF3YWl0IGJyaW5nVG9Gcm9udElmRXhpc3RzKG5hbWUpO1xuXHRcdGlmICghZXhpc3RzKSB7XG5cdFx0XHQvLyBPcGVuIGEgbmV3IHdpbmRvdyB0byBpbmRpY2F0ZSBjb25uZWN0aW9uIChyZXBsYWNlIHdpdGggYWN0dWFsIGNvbm5lY3Rpb24gbG9naWMpXG5cdFx0XHRjb25zdCB3aW5PcHRpb246IE9wZW5GaW4uV2luZG93Q3JlYXRpb25PcHRpb25zID0ge1xuXHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRkZWZhdWx0V2lkdGg6IDEyMDAsXG5cdFx0XHRcdHdpZHRoOiAxMjAwLFxuXHRcdFx0XHRkZWZhdWx0SGVpZ2h0OiA4MDAsXG5cdFx0XHRcdHVybDogZGV2aWNlQ29ubmVjdGlvblVybCxcblx0XHRcdFx0ZnJhbWU6IHRydWUsXG5cdFx0XHRcdGF1dG9TaG93OiB0cnVlLFxuXHRcdFx0XHRwZXJtaXNzaW9uczoge1xuXHRcdFx0XHRcdHdlYkFQSXM6IFtcImhpZFwiLCBcInVzYlwiXSxcblx0XHRcdFx0XHRkZXZpY2VzOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHZlbmRvcklkOiB2ZW5kb3JJZCxcblx0XHRcdFx0XHRcdFx0cHJvZHVjdElkOiBwcm9kdWN0SWRcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRyZXR1cm4gZmluLldpbmRvdy5jcmVhdGUod2luT3B0aW9uKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIGNvbm5lY3RpbmcgdG8gZGV2aWNlOlwiLCBlcnJvcik7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gYnJpbmdUb0Zyb250SWZFeGlzdHMobmFtZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgZXhpc3RpbmdXaW5kb3cgPSBhd2FpdCBmaW4uV2luZG93LndyYXAoeyB1dWlkOiBmaW4ubWUudXVpZCwgbmFtZSB9KTtcblx0XHRjb25zdCBpbmZvID0gYXdhaXQgZXhpc3RpbmdXaW5kb3cuZ2V0SW5mbygpO1xuXHRcdGNvbnNvbGUubG9nKGBCcmluZyB3aW5kb3cgd2l0aCB1cmwgJHtpbmZvLnVybH0gdG8gZnJvbnRgKTtcblx0XHRpZiAoZXhpc3RpbmdXaW5kb3cpIHtcblx0XHRcdGF3YWl0IGV4aXN0aW5nV2luZG93LnJlc3RvcmUoKTtcblx0XHRcdGF3YWl0IGV4aXN0aW5nV2luZG93LmJyaW5nVG9Gcm9udCgpO1xuXHRcdFx0YXdhaXQgZXhpc3RpbmdXaW5kb3cuZm9jdXMoKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBXaW5kb3cgZG9lcyBub3QgZXhpc3Rcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ2hlY2tzIHRvIHNlZSB3aGF0IGRldmljZXMgdG8gY29ubmVjdC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gcmVxdWVzdERldmljZSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgcnVudGltZUluZm8gPSBhd2FpdCBmaW4uU3lzdGVtLmdldFJ1bnRpbWVJbmZvKCk7XG5cdGNvbnN0IG1hbmlmZXN0VXJsID0gcnVudGltZUluZm8ubWFuaWZlc3RVcmwgPz8gXCJcIjtcblx0Y29uc3QgZGV2aWNlSWRlbnRpZmllclVybCA9XG5cdFx0bG9jYXRpb24uaHJlZi5yZXBsYWNlKFwiYXBwLmh0bWxcIiwgXCJkZXZpY2UtaWRlbnRpZmllci5odG1sXCIpICtcblx0XHRcIj9maW5zPVwiICtcblx0XHRtYW5pZmVzdFVybC5yZXBsYWNlKFwiaHR0cFwiLCBcImZpblwiKTtcblx0YXdhaXQgZmluLlN5c3RlbS5vcGVuVXJsV2l0aEJyb3dzZXIoZGV2aWNlSWRlbnRpZmllclVybCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxpc3RlbkZvckRldmljZUluZm8oKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IGFwcCA9IGZpbi5BcHBsaWNhdGlvbi5nZXRDdXJyZW50U3luYygpO1xuXHRjb25zdCBhcHBJbmZvID0gYXdhaXQgYXBwLmdldEluZm8oKTtcblx0Y29uc3QgY3VzdG9tSW5pdE9wdGlvbnMgPSBhcHBJbmZvLmluaXRpYWxPcHRpb25zIGFzIE9wZW5GaW4uQXBwbGljYXRpb25DcmVhdGlvbk9wdGlvbnMgJiB7XG5cdFx0dXNlckFwcENvbmZpZ0FyZ3M/OiBPcGVuRmluLlVzZXJBcHBDb25maWdBcmdzO1xuXHR9O1xuXHRwcm9jZXNzUGFzc2VkSW5mb3JtYXRpb24oY3VzdG9tSW5pdE9wdGlvbnM/LnVzZXJBcHBDb25maWdBcmdzKTtcblxuXHRhcHAuYWRkTGlzdGVuZXIoXCJydW4tcmVxdWVzdGVkXCIsIChldmVudDogeyB1c2VyQXBwQ29uZmlnQXJncz86IE9wZW5GaW4uVXNlckFwcENvbmZpZ0FyZ3MgfSkgPT4ge1xuXHRcdHByb2Nlc3NQYXNzZWRJbmZvcm1hdGlvbihldmVudD8udXNlckFwcENvbmZpZ0FyZ3MpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc1Bhc3NlZEluZm9ybWF0aW9uKGFyZ3M/OiBPcGVuRmluLlVzZXJBcHBDb25maWdBcmdzKSB7XG5cdGlmIChhcmdzKSB7XG5cdFx0Y29uc3QgdmVuZG9ySWRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVuZG9ySWRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcblx0XHRjb25zdCBwcm9kdWN0SWRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdElkXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cdFx0Y29uc3QgZGV2aWNlVHlwZVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV2aWNlVHlwZVwiKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcblxuXHRcdGlmIChhcmdzW1wiZGV2aWNlVHlwZVwiXSkge1xuXHRcdFx0Y29uc3QgZGV2aWNlVHlwZSA9IGFyZ3NbXCJkZXZpY2VUeXBlXCJdIGFzIHN0cmluZztcblx0XHRcdGlmIChkZXZpY2VUeXBlID09PSBcIkhJRFwiIHx8IGRldmljZVR5cGUgPT09IFwiVVNCXCIpIHtcblx0XHRcdFx0ZGV2aWNlVHlwZVNlbGVjdC52YWx1ZSA9IGRldmljZVR5cGU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChhcmdzW1widmVuZG9ySWRcIl0pIHtcblx0XHRcdGNvbnN0IHZlbmRvcklkID0gYXJnc1tcInZlbmRvcklkXCJdIGFzIHN0cmluZztcblx0XHRcdHZlbmRvcklkSW5wdXQudmFsdWUgPSB2ZW5kb3JJZDtcblx0XHR9XG5cdFx0aWYgKGFyZ3NbXCJwcm9kdWN0SWRcIl0pIHtcblx0XHRcdGNvbnN0IHByb2R1Y3RJZCA9IGFyZ3NbXCJwcm9kdWN0SWRcIl0gYXMgc3RyaW5nO1xuXHRcdFx0cHJvZHVjdElkSW5wdXQudmFsdWUgPSBwcm9kdWN0SWQ7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogT3BlbiBhIHdpbmRvdyB1c2luZyBkeW5hbWljIG9wdGlvbnMuXG4gKiBAcmV0dXJucyBUaGUgd2luZG93LlxuICovXG5hc3luYyBmdW5jdGlvbiBvcGVuRHluYW1pY0FwcGxpY2F0aW9uV2luZG93KCk6IFByb21pc2U8T3BlbkZpbi5XaW5kb3c+IHtcblx0Y29uc3Qgd2luT3B0aW9uID0ge1xuXHRcdG5hbWU6IFwiY2hpbGRcIixcblx0XHRkZWZhdWx0V2lkdGg6IDgwMCxcblx0XHRkZWZhdWx0SGVpZ2h0OiA4MDAsXG5cdFx0dXJsOiBcImh0dHBzOi8vZGV2ZWxvcGVycy5vcGVuZmluLmNvL29mLWRvY3MvZG9jcy9jb25uZWN0LXVzYi1oaWQjZmluZC1hbGwtY29ubmVjdGVkLWRldmljZXNcIixcblx0XHRmcmFtZTogdHJ1ZSxcblx0XHRhdXRvU2hvdzogdHJ1ZVxuXHR9O1xuXHRyZXR1cm4gZmluLldpbmRvdy5jcmVhdGUod2luT3B0aW9uKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==