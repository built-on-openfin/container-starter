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
    const btnCheckForDevices = document.querySelector("#btn-check-for-usb-devices");
    if (btnCheckForDevices) {
        btnCheckForDevices.addEventListener("click", checkForUsbDevices);
    }
}
/**
 * Checks to see what devices to connect.
 */
async function requestDevice() {
    await navigator.usb.requestDevice({ filters: [{ vendorId: 1133 }] });
    const list = await navigator.usb.getDevices();
    console.log(list);
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
/**
 * Use the usb.getDevices method to get a list of connected devices.
 */
async function checkForUsbDevices() {
    await requestDevice();
    // Get all connected USB devices the website has been granted access to.
    // if ("usb" in navigator) {
    // 	const usb = navigator.usb;
    // 	await usb.getDevices()
    // 	.then((devices) => {
    // 		if (devices.length > 0) {
    // 			console.log(`There are ${devices.length} detected USB devices.`);
    // 			for (const device of devices) {
    // 				console.log(device.productName); // "Arduino Micro"
    // 				console.log(device.manufacturerName); // "Arduino LLC"
    // 			}
    // 		} else {
    // 			console.log("There are no detected USB devices.");
    // 		}
    // 		return true;
    // 	})
    // 	.catch((error) => {
    // 		console.error(error);
    // 	});
    // } else {
    // 	console.log("There is no USB detection on the Navigator window object for this browser.");
    // }
}

/**
 *
 */
// function addDeviceToList() {
// }

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNKQSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFDeEQsSUFBSSxDQUFDO1FBQ0osTUFBTSxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztRQUNoQixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RCLENBQUM7QUFDRixDQUFDLENBQUMsQ0FBQztBQUVIOztHQUVHO0FBQ0gsS0FBSyxVQUFVLE9BQU87SUFDckIsTUFBTSxvQkFBb0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDaEYsSUFBSSxvQkFBb0IsRUFBRSxDQUFDO1FBQzFCLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBUSxFQUFFLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDLENBQUM7SUFDcEcsQ0FBQztJQUVELE1BQU0sa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQ2hGLElBQUksa0JBQWtCLEVBQUUsQ0FBQztRQUN4QixrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUNsRSxDQUFDO0FBQ0YsQ0FBQztBQUVEOztHQUVHO0FBQ0gsS0FBSyxVQUFVLGFBQWE7SUFDM0IsTUFBTSxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLE1BQU0sSUFBSSxHQUFHLE1BQU0sU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ25CLENBQUM7QUFHRDs7O0dBR0c7QUFDSCxLQUFLLFVBQVUsNEJBQTRCO0lBQzFDLE1BQU0sU0FBUyxHQUFHO1FBQ2pCLElBQUksRUFBRSxPQUFPO1FBQ2IsWUFBWSxFQUFFLEdBQUc7UUFDakIsYUFBYSxFQUFFLEdBQUc7UUFDbEIsR0FBRyxFQUFFLHVGQUF1RjtRQUM1RixLQUFLLEVBQUUsSUFBSTtRQUNYLFFBQVEsRUFBRSxJQUFJO0tBQ2QsQ0FBQztJQUNGLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUVEOztHQUVHO0FBQ0gsS0FBSyxVQUFVLGtCQUFrQjtJQUNoQyxNQUFNLGFBQWEsRUFBRSxDQUFDO0lBQ3RCLHdFQUF3RTtJQUN4RSw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLDBCQUEwQjtJQUMxQix3QkFBd0I7SUFDeEIsOEJBQThCO0lBQzlCLHVFQUF1RTtJQUN2RSxxQ0FBcUM7SUFDckMsMERBQTBEO0lBQzFELDZEQUE2RDtJQUM3RCxPQUFPO0lBQ1AsYUFBYTtJQUNiLHdEQUF3RDtJQUN4RCxNQUFNO0lBQ04saUJBQWlCO0lBQ2pCLE1BQU07SUFDTix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLE9BQU87SUFDUCxXQUFXO0lBQ1gsOEZBQThGO0lBQzlGLElBQUk7QUFDTCxDQUFDOztBQUVEOztHQUVHO0FBQ0gsK0JBQStCO0FBRS9CLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXRlY3QtdXNiLWRldmljZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGV0ZWN0LXVzYi1kZXZpY2VzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGV0ZWN0LXVzYi1kZXZpY2VzLy4vY2xpZW50L3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0eXBlIE9wZW5GaW4gZnJvbSBcIkBvcGVuZmluL2NvcmVcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xuXHR0cnkge1xuXHRcdGF3YWl0IGluaXREb20oKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0fVxufSk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgRE9NIGNvbXBvbmVudHMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXREb20oKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IGJ0bk9wZW5EeW5hbWljV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tb3Blbi1keW5hbWljLXdpbmRvd1wiKTtcblx0aWYgKGJ0bk9wZW5EeW5hbWljV2luZG93KSB7XG5cdFx0YnRuT3BlbkR5bmFtaWNXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIChlOiBFdmVudCkgPT4gb3BlbkR5bmFtaWNBcHBsaWNhdGlvbldpbmRvdygpKTtcblx0fVxuXG5cdGNvbnN0IGJ0bkNoZWNrRm9yRGV2aWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWNoZWNrLWZvci11c2ItZGV2aWNlc1wiKTtcblx0aWYgKGJ0bkNoZWNrRm9yRGV2aWNlcykge1xuXHRcdGJ0bkNoZWNrRm9yRGV2aWNlcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hlY2tGb3JVc2JEZXZpY2VzKTtcblx0fVxufVxuXG4vKipcbiAqIENoZWNrcyB0byBzZWUgd2hhdCBkZXZpY2VzIHRvIGNvbm5lY3QuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHJlcXVlc3REZXZpY2UoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGF3YWl0IG5hdmlnYXRvci51c2IucmVxdWVzdERldmljZSh7IGZpbHRlcnM6IFt7IHZlbmRvcklkOiAxMTMzIH1dIH0pO1xuXHRjb25zdCBsaXN0ID0gYXdhaXQgbmF2aWdhdG9yLnVzYi5nZXREZXZpY2VzKCk7XG5cdGNvbnNvbGUubG9nKGxpc3QpO1xufVxuXG5cbi8qKlxuICogT3BlbiBhIHdpbmRvdyB1c2luZyBkeW5hbWljIG9wdGlvbnMuXG4gKiBAcmV0dXJucyBUaGUgd2luZG93LlxuICovXG5hc3luYyBmdW5jdGlvbiBvcGVuRHluYW1pY0FwcGxpY2F0aW9uV2luZG93KCk6IFByb21pc2U8T3BlbkZpbi5XaW5kb3c+IHtcblx0Y29uc3Qgd2luT3B0aW9uID0ge1xuXHRcdG5hbWU6IFwiY2hpbGRcIixcblx0XHRkZWZhdWx0V2lkdGg6IDgwMCxcblx0XHRkZWZhdWx0SGVpZ2h0OiA4MDAsXG5cdFx0dXJsOiBcImh0dHBzOi8vZGV2ZWxvcGVycy5vcGVuZmluLmNvL29mLWRvY3MvZG9jcy9jb25uZWN0LXVzYi1oaWQjZmluZC1hbGwtY29ubmVjdGVkLWRldmljZXNcIixcblx0XHRmcmFtZTogdHJ1ZSxcblx0XHRhdXRvU2hvdzogdHJ1ZVxuXHR9O1xuXHRyZXR1cm4gZmluLldpbmRvdy5jcmVhdGUod2luT3B0aW9uKTtcbn1cblxuLyoqXG4gKiBVc2UgdGhlIHVzYi5nZXREZXZpY2VzIG1ldGhvZCB0byBnZXQgYSBsaXN0IG9mIGNvbm5lY3RlZCBkZXZpY2VzLlxuICovXG5hc3luYyBmdW5jdGlvbiBjaGVja0ZvclVzYkRldmljZXMoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGF3YWl0IHJlcXVlc3REZXZpY2UoKTtcblx0Ly8gR2V0IGFsbCBjb25uZWN0ZWQgVVNCIGRldmljZXMgdGhlIHdlYnNpdGUgaGFzIGJlZW4gZ3JhbnRlZCBhY2Nlc3MgdG8uXG5cdC8vIGlmIChcInVzYlwiIGluIG5hdmlnYXRvcikge1xuXHQvLyBcdGNvbnN0IHVzYiA9IG5hdmlnYXRvci51c2I7XG5cdC8vIFx0YXdhaXQgdXNiLmdldERldmljZXMoKVxuXHQvLyBcdC50aGVuKChkZXZpY2VzKSA9PiB7XG5cdC8vIFx0XHRpZiAoZGV2aWNlcy5sZW5ndGggPiAwKSB7XG5cdC8vIFx0XHRcdGNvbnNvbGUubG9nKGBUaGVyZSBhcmUgJHtkZXZpY2VzLmxlbmd0aH0gZGV0ZWN0ZWQgVVNCIGRldmljZXMuYCk7XG5cdC8vIFx0XHRcdGZvciAoY29uc3QgZGV2aWNlIG9mIGRldmljZXMpIHtcblx0Ly8gXHRcdFx0XHRjb25zb2xlLmxvZyhkZXZpY2UucHJvZHVjdE5hbWUpOyAvLyBcIkFyZHVpbm8gTWljcm9cIlxuXHQvLyBcdFx0XHRcdGNvbnNvbGUubG9nKGRldmljZS5tYW51ZmFjdHVyZXJOYW1lKTsgLy8gXCJBcmR1aW5vIExMQ1wiXG5cdC8vIFx0XHRcdH1cblx0Ly8gXHRcdH0gZWxzZSB7XG5cdC8vIFx0XHRcdGNvbnNvbGUubG9nKFwiVGhlcmUgYXJlIG5vIGRldGVjdGVkIFVTQiBkZXZpY2VzLlwiKTtcblx0Ly8gXHRcdH1cblx0Ly8gXHRcdHJldHVybiB0cnVlO1xuXHQvLyBcdH0pXG5cdC8vIFx0LmNhdGNoKChlcnJvcikgPT4ge1xuXHQvLyBcdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdC8vIFx0fSk7XG5cdC8vIH0gZWxzZSB7XG5cdC8vIFx0Y29uc29sZS5sb2coXCJUaGVyZSBpcyBubyBVU0IgZGV0ZWN0aW9uIG9uIHRoZSBOYXZpZ2F0b3Igd2luZG93IG9iamVjdCBmb3IgdGhpcyBicm93c2VyLlwiKTtcblx0Ly8gfVxufVxuXG4vKipcbiAqXG4gKi9cbi8vIGZ1bmN0aW9uIGFkZERldmljZVRvTGlzdCgpIHtcblx0XG4vLyB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=