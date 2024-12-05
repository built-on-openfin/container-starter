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
    await navigator.usb.requestDevice({ filters: [{ vendorId: 3034, productId: 21783 }] });
    const list = await navigator.usb.getDevices();
    console.log(`listing devices... ${list}`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNKQSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFDeEQsSUFBSSxDQUFDO1FBQ0osTUFBTSxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztRQUNoQixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RCLENBQUM7QUFDRixDQUFDLENBQUMsQ0FBQztBQUVIOztHQUVHO0FBQ0gsS0FBSyxVQUFVLE9BQU87SUFDckIsTUFBTSxvQkFBb0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDaEYsSUFBSSxvQkFBb0IsRUFBRSxDQUFDO1FBQzFCLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBUSxFQUFFLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDLENBQUM7SUFDcEcsQ0FBQztJQUVELE1BQU0sa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQ2hGLElBQUksa0JBQWtCLEVBQUUsQ0FBQztRQUN4QixrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUNsRSxDQUFDO0FBQ0YsQ0FBQztBQUVEOztHQUVHO0FBQ0gsS0FBSyxVQUFVLGFBQWE7SUFDM0IsTUFBTSxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkYsTUFBTSxJQUFJLEdBQUcsTUFBTSxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLElBQUksRUFBRSxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUdEOzs7R0FHRztBQUNILEtBQUssVUFBVSw0QkFBNEI7SUFDMUMsTUFBTSxTQUFTLEdBQUc7UUFDakIsSUFBSSxFQUFFLE9BQU87UUFDYixZQUFZLEVBQUUsR0FBRztRQUNqQixhQUFhLEVBQUUsR0FBRztRQUNsQixHQUFHLEVBQUUsdUZBQXVGO1FBQzVGLEtBQUssRUFBRSxJQUFJO1FBQ1gsUUFBUSxFQUFFLElBQUk7S0FDZCxDQUFDO0lBQ0YsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxLQUFLLFVBQVUsa0JBQWtCO0lBQ2hDLE1BQU0sYUFBYSxFQUFFLENBQUM7SUFDdEIsd0VBQXdFO0lBQ3hFLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4Qiw4QkFBOEI7SUFDOUIsdUVBQXVFO0lBQ3ZFLHFDQUFxQztJQUNyQywwREFBMEQ7SUFDMUQsNkRBQTZEO0lBQzdELE9BQU87SUFDUCxhQUFhO0lBQ2Isd0RBQXdEO0lBQ3hELE1BQU07SUFDTixpQkFBaUI7SUFDakIsTUFBTTtJQUNOLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsT0FBTztJQUNQLFdBQVc7SUFDWCw4RkFBOEY7SUFDOUYsSUFBSTtBQUNMLENBQUM7O0FBRUQ7O0dBRUc7QUFDSCwrQkFBK0I7QUFFL0IsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2RldGVjdC11c2ItZGV2aWNlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZXRlY3QtdXNiLWRldmljZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kZXRlY3QtdXNiLWRldmljZXMvLi9jbGllbnQvc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHR5cGUgT3BlbkZpbiBmcm9tIFwiQG9wZW5maW4vY29yZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0YXdhaXQgaW5pdERvbSgpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHR9XG59KTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBET00gY29tcG9uZW50cy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gaW5pdERvbSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgYnRuT3BlbkR5bmFtaWNXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1vcGVuLWR5bmFtaWMtd2luZG93XCIpO1xuXHRpZiAoYnRuT3BlbkR5bmFtaWNXaW5kb3cpIHtcblx0XHRidG5PcGVuRHluYW1pY1dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGU6IEV2ZW50KSA9PiBvcGVuRHluYW1pY0FwcGxpY2F0aW9uV2luZG93KCkpO1xuXHR9XG5cblx0Y29uc3QgYnRuQ2hlY2tGb3JEZXZpY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tY2hlY2stZm9yLXVzYi1kZXZpY2VzXCIpO1xuXHRpZiAoYnRuQ2hlY2tGb3JEZXZpY2VzKSB7XG5cdFx0YnRuQ2hlY2tGb3JEZXZpY2VzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGVja0ZvclVzYkRldmljZXMpO1xuXHR9XG59XG5cbi8qKlxuICogQ2hlY2tzIHRvIHNlZSB3aGF0IGRldmljZXMgdG8gY29ubmVjdC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gcmVxdWVzdERldmljZSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0YXdhaXQgbmF2aWdhdG9yLnVzYi5yZXF1ZXN0RGV2aWNlKHsgZmlsdGVyczogW3sgdmVuZG9ySWQ6IDMwMzQsIHByb2R1Y3RJZDogMjE3ODMgfV0gfSk7XG5cdGNvbnN0IGxpc3QgPSBhd2FpdCBuYXZpZ2F0b3IudXNiLmdldERldmljZXMoKTtcblx0Y29uc29sZS5sb2coYGxpc3RpbmcgZGV2aWNlcy4uLiAke2xpc3R9YCk7XG59XG5cblxuLyoqXG4gKiBPcGVuIGEgd2luZG93IHVzaW5nIGR5bmFtaWMgb3B0aW9ucy5cbiAqIEByZXR1cm5zIFRoZSB3aW5kb3cuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIG9wZW5EeW5hbWljQXBwbGljYXRpb25XaW5kb3coKTogUHJvbWlzZTxPcGVuRmluLldpbmRvdz4ge1xuXHRjb25zdCB3aW5PcHRpb24gPSB7XG5cdFx0bmFtZTogXCJjaGlsZFwiLFxuXHRcdGRlZmF1bHRXaWR0aDogODAwLFxuXHRcdGRlZmF1bHRIZWlnaHQ6IDgwMCxcblx0XHR1cmw6IFwiaHR0cHM6Ly9kZXZlbG9wZXJzLm9wZW5maW4uY28vb2YtZG9jcy9kb2NzL2Nvbm5lY3QtdXNiLWhpZCNmaW5kLWFsbC1jb25uZWN0ZWQtZGV2aWNlc1wiLFxuXHRcdGZyYW1lOiB0cnVlLFxuXHRcdGF1dG9TaG93OiB0cnVlXG5cdH07XG5cdHJldHVybiBmaW4uV2luZG93LmNyZWF0ZSh3aW5PcHRpb24pO1xufVxuXG4vKipcbiAqIFVzZSB0aGUgdXNiLmdldERldmljZXMgbWV0aG9kIHRvIGdldCBhIGxpc3Qgb2YgY29ubmVjdGVkIGRldmljZXMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNoZWNrRm9yVXNiRGV2aWNlcygpOiBQcm9taXNlPHZvaWQ+IHtcblx0YXdhaXQgcmVxdWVzdERldmljZSgpO1xuXHQvLyBHZXQgYWxsIGNvbm5lY3RlZCBVU0IgZGV2aWNlcyB0aGUgd2Vic2l0ZSBoYXMgYmVlbiBncmFudGVkIGFjY2VzcyB0by5cblx0Ly8gaWYgKFwidXNiXCIgaW4gbmF2aWdhdG9yKSB7XG5cdC8vIFx0Y29uc3QgdXNiID0gbmF2aWdhdG9yLnVzYjtcblx0Ly8gXHRhd2FpdCB1c2IuZ2V0RGV2aWNlcygpXG5cdC8vIFx0LnRoZW4oKGRldmljZXMpID0+IHtcblx0Ly8gXHRcdGlmIChkZXZpY2VzLmxlbmd0aCA+IDApIHtcblx0Ly8gXHRcdFx0Y29uc29sZS5sb2coYFRoZXJlIGFyZSAke2RldmljZXMubGVuZ3RofSBkZXRlY3RlZCBVU0IgZGV2aWNlcy5gKTtcblx0Ly8gXHRcdFx0Zm9yIChjb25zdCBkZXZpY2Ugb2YgZGV2aWNlcykge1xuXHQvLyBcdFx0XHRcdGNvbnNvbGUubG9nKGRldmljZS5wcm9kdWN0TmFtZSk7IC8vIFwiQXJkdWlubyBNaWNyb1wiXG5cdC8vIFx0XHRcdFx0Y29uc29sZS5sb2coZGV2aWNlLm1hbnVmYWN0dXJlck5hbWUpOyAvLyBcIkFyZHVpbm8gTExDXCJcblx0Ly8gXHRcdFx0fVxuXHQvLyBcdFx0fSBlbHNlIHtcblx0Ly8gXHRcdFx0Y29uc29sZS5sb2coXCJUaGVyZSBhcmUgbm8gZGV0ZWN0ZWQgVVNCIGRldmljZXMuXCIpO1xuXHQvLyBcdFx0fVxuXHQvLyBcdFx0cmV0dXJuIHRydWU7XG5cdC8vIFx0fSlcblx0Ly8gXHQuY2F0Y2goKGVycm9yKSA9PiB7XG5cdC8vIFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0Ly8gXHR9KTtcblx0Ly8gfSBlbHNlIHtcblx0Ly8gXHRjb25zb2xlLmxvZyhcIlRoZXJlIGlzIG5vIFVTQiBkZXRlY3Rpb24gb24gdGhlIE5hdmlnYXRvciB3aW5kb3cgb2JqZWN0IGZvciB0aGlzIGJyb3dzZXIuXCIpO1xuXHQvLyB9XG59XG5cbi8qKlxuICpcbiAqL1xuLy8gZnVuY3Rpb24gYWRkRGV2aWNlVG9MaXN0KCkge1xuXHRcbi8vIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==