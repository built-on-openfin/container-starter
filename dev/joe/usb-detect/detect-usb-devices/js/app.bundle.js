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
        btnCheckForDevices.addEventListener("click", async (e) => requestDevice());
    }
}
/**
 * Checks to see what devices to connect.
 */
async function requestDevice() {
    await navigator.usb.requestDevice({ filters: [{ vendorId: 3034, productId: 21783 }] });
    const list = await navigator.usb.getDevices();
    const deviceList = document.querySelector("#devices-list");
    if (deviceList) {
        for (const item of list) {
            const itemElement = document.createElement("li");
            const product = item.productName ?? "";
            const manufacturer = item.manufacturerName ?? "";
            itemElement.textContent = `${manufacturer} : ${product}`;
            deviceList.append(itemElement);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNKQSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFDeEQsSUFBSSxDQUFDO1FBQ0osTUFBTSxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztRQUNoQixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RCLENBQUM7QUFDRixDQUFDLENBQUMsQ0FBQztBQUVIOztHQUVHO0FBQ0gsS0FBSyxVQUFVLE9BQU87SUFDckIsTUFBTSxvQkFBb0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDaEYsSUFBSSxvQkFBb0IsRUFBRSxDQUFDO1FBQzFCLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBUSxFQUFFLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDLENBQUM7SUFDcEcsQ0FBQztJQUVELE1BQU0sa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQ2hGLElBQUksa0JBQWtCLEVBQUUsQ0FBQztRQUN4QixrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQVEsRUFBRSxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUNuRixDQUFDO0FBQ0YsQ0FBQztBQUVEOztHQUVHO0FBQ0gsS0FBSyxVQUFVLGFBQWE7SUFDM0IsTUFBTSxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkYsTUFBTSxJQUFJLEdBQUcsTUFBTSxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBRTlDLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDM0QsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUNoQixLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ3pCLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7WUFDdkMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixJQUFJLEVBQUUsQ0FBQztZQUNqRCxXQUFXLENBQUMsV0FBVyxHQUFHLEdBQUcsWUFBWSxNQUFNLE9BQU8sRUFBRSxDQUFDO1lBQ3pELFVBQVUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEMsQ0FBQztJQUNGLENBQUM7QUFDRixDQUFDO0FBR0Q7OztHQUdHO0FBQ0gsS0FBSyxVQUFVLDRCQUE0QjtJQUMxQyxNQUFNLFNBQVMsR0FBRztRQUNqQixJQUFJLEVBQUUsT0FBTztRQUNiLFlBQVksRUFBRSxHQUFHO1FBQ2pCLGFBQWEsRUFBRSxHQUFHO1FBQ2xCLEdBQUcsRUFBRSx1RkFBdUY7UUFDNUYsS0FBSyxFQUFFLElBQUk7UUFDWCxRQUFRLEVBQUUsSUFBSTtLQUNkLENBQUM7SUFDRixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3JDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXRlY3QtdXNiLWRldmljZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGV0ZWN0LXVzYi1kZXZpY2VzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGV0ZWN0LXVzYi1kZXZpY2VzLy4vY2xpZW50L3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0eXBlIE9wZW5GaW4gZnJvbSBcIkBvcGVuZmluL2NvcmVcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xuXHR0cnkge1xuXHRcdGF3YWl0IGluaXREb20oKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0fVxufSk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgRE9NIGNvbXBvbmVudHMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXREb20oKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IGJ0bk9wZW5EeW5hbWljV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tb3Blbi1keW5hbWljLXdpbmRvd1wiKTtcblx0aWYgKGJ0bk9wZW5EeW5hbWljV2luZG93KSB7XG5cdFx0YnRuT3BlbkR5bmFtaWNXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIChlOiBFdmVudCkgPT4gb3BlbkR5bmFtaWNBcHBsaWNhdGlvbldpbmRvdygpKTtcblx0fVxuXG5cdGNvbnN0IGJ0bkNoZWNrRm9yRGV2aWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWNoZWNrLWZvci11c2ItZGV2aWNlc1wiKTtcblx0aWYgKGJ0bkNoZWNrRm9yRGV2aWNlcykge1xuXHRcdGJ0bkNoZWNrRm9yRGV2aWNlcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGU6IEV2ZW50KSA9PiByZXF1ZXN0RGV2aWNlKCkpO1xuXHR9XG59XG5cbi8qKlxuICogQ2hlY2tzIHRvIHNlZSB3aGF0IGRldmljZXMgdG8gY29ubmVjdC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gcmVxdWVzdERldmljZSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0YXdhaXQgbmF2aWdhdG9yLnVzYi5yZXF1ZXN0RGV2aWNlKHsgZmlsdGVyczogW3sgdmVuZG9ySWQ6IDMwMzQsIHByb2R1Y3RJZDogMjE3ODMgfV0gfSk7XG5cdGNvbnN0IGxpc3QgPSBhd2FpdCBuYXZpZ2F0b3IudXNiLmdldERldmljZXMoKTtcblxuXHRjb25zdCBkZXZpY2VMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXZpY2VzLWxpc3RcIik7XG5cdGlmIChkZXZpY2VMaXN0KSB7XG5cdFx0Zm9yIChjb25zdCBpdGVtIG9mIGxpc3QpIHtcblx0XHRcdGNvbnN0IGl0ZW1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRcdFx0Y29uc3QgcHJvZHVjdCA9IGl0ZW0ucHJvZHVjdE5hbWUgPz8gXCJcIjtcblx0XHRcdGNvbnN0IG1hbnVmYWN0dXJlciA9IGl0ZW0ubWFudWZhY3R1cmVyTmFtZSA/PyBcIlwiO1xuXHRcdFx0aXRlbUVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHttYW51ZmFjdHVyZXJ9IDogJHtwcm9kdWN0fWA7XG5cdFx0XHRkZXZpY2VMaXN0LmFwcGVuZChpdGVtRWxlbWVudCk7XG5cdFx0fVxuXHR9XG59XG5cblxuLyoqXG4gKiBPcGVuIGEgd2luZG93IHVzaW5nIGR5bmFtaWMgb3B0aW9ucy5cbiAqIEByZXR1cm5zIFRoZSB3aW5kb3cuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIG9wZW5EeW5hbWljQXBwbGljYXRpb25XaW5kb3coKTogUHJvbWlzZTxPcGVuRmluLldpbmRvdz4ge1xuXHRjb25zdCB3aW5PcHRpb24gPSB7XG5cdFx0bmFtZTogXCJjaGlsZFwiLFxuXHRcdGRlZmF1bHRXaWR0aDogODAwLFxuXHRcdGRlZmF1bHRIZWlnaHQ6IDgwMCxcblx0XHR1cmw6IFwiaHR0cHM6Ly9kZXZlbG9wZXJzLm9wZW5maW4uY28vb2YtZG9jcy9kb2NzL2Nvbm5lY3QtdXNiLWhpZCNmaW5kLWFsbC1jb25uZWN0ZWQtZGV2aWNlc1wiLFxuXHRcdGZyYW1lOiB0cnVlLFxuXHRcdGF1dG9TaG93OiB0cnVlXG5cdH07XG5cdHJldHVybiBmaW4uV2luZG93LmNyZWF0ZSh3aW5PcHRpb24pO1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=