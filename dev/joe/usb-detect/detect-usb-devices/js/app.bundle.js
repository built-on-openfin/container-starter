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
    await navigator.usb.requestDevice({ filters: [{ vendorId: 1133, productId: 2140 }] });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNKQSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFDeEQsSUFBSSxDQUFDO1FBQ0osTUFBTSxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztRQUNoQixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RCLENBQUM7QUFDRixDQUFDLENBQUMsQ0FBQztBQUVIOztHQUVHO0FBQ0gsS0FBSyxVQUFVLE9BQU87SUFDckIsTUFBTSxvQkFBb0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDaEYsSUFBSSxvQkFBb0IsRUFBRSxDQUFDO1FBQzFCLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBUSxFQUFFLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDLENBQUM7SUFDcEcsQ0FBQztJQUVELE1BQU0sa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQ2hGLElBQUksa0JBQWtCLEVBQUUsQ0FBQztRQUN4QixrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUNsRSxDQUFDO0FBQ0YsQ0FBQztBQUVEOztHQUVHO0FBQ0gsS0FBSyxVQUFVLGFBQWE7SUFDM0IsTUFBTSxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEYsTUFBTSxJQUFJLEdBQUcsTUFBTSxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbkIsQ0FBQztBQUdEOzs7R0FHRztBQUNILEtBQUssVUFBVSw0QkFBNEI7SUFDMUMsTUFBTSxTQUFTLEdBQUc7UUFDakIsSUFBSSxFQUFFLE9BQU87UUFDYixZQUFZLEVBQUUsR0FBRztRQUNqQixhQUFhLEVBQUUsR0FBRztRQUNsQixHQUFHLEVBQUUsdUZBQXVGO1FBQzVGLEtBQUssRUFBRSxJQUFJO1FBQ1gsUUFBUSxFQUFFLElBQUk7S0FDZCxDQUFDO0lBQ0YsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxLQUFLLFVBQVUsa0JBQWtCO0lBQ2hDLE1BQU0sYUFBYSxFQUFFLENBQUM7SUFDdEIsd0VBQXdFO0lBQ3hFLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4Qiw4QkFBOEI7SUFDOUIsdUVBQXVFO0lBQ3ZFLHFDQUFxQztJQUNyQywwREFBMEQ7SUFDMUQsNkRBQTZEO0lBQzdELE9BQU87SUFDUCxhQUFhO0lBQ2Isd0RBQXdEO0lBQ3hELE1BQU07SUFDTixpQkFBaUI7SUFDakIsTUFBTTtJQUNOLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsT0FBTztJQUNQLFdBQVc7SUFDWCw4RkFBOEY7SUFDOUYsSUFBSTtBQUNMLENBQUM7O0FBRUQ7O0dBRUc7QUFDSCwrQkFBK0I7QUFFL0IsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2RldGVjdC11c2ItZGV2aWNlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZXRlY3QtdXNiLWRldmljZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kZXRlY3QtdXNiLWRldmljZXMvLi9jbGllbnQvc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHR5cGUgT3BlbkZpbiBmcm9tIFwiQG9wZW5maW4vY29yZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0YXdhaXQgaW5pdERvbSgpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHR9XG59KTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBET00gY29tcG9uZW50cy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gaW5pdERvbSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgYnRuT3BlbkR5bmFtaWNXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1vcGVuLWR5bmFtaWMtd2luZG93XCIpO1xuXHRpZiAoYnRuT3BlbkR5bmFtaWNXaW5kb3cpIHtcblx0XHRidG5PcGVuRHluYW1pY1dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGU6IEV2ZW50KSA9PiBvcGVuRHluYW1pY0FwcGxpY2F0aW9uV2luZG93KCkpO1xuXHR9XG5cblx0Y29uc3QgYnRuQ2hlY2tGb3JEZXZpY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tY2hlY2stZm9yLXVzYi1kZXZpY2VzXCIpO1xuXHRpZiAoYnRuQ2hlY2tGb3JEZXZpY2VzKSB7XG5cdFx0YnRuQ2hlY2tGb3JEZXZpY2VzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGVja0ZvclVzYkRldmljZXMpO1xuXHR9XG59XG5cbi8qKlxuICogQ2hlY2tzIHRvIHNlZSB3aGF0IGRldmljZXMgdG8gY29ubmVjdC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gcmVxdWVzdERldmljZSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0YXdhaXQgbmF2aWdhdG9yLnVzYi5yZXF1ZXN0RGV2aWNlKHsgZmlsdGVyczogW3sgdmVuZG9ySWQ6IDExMzMsIHByb2R1Y3RJZDogMjE0MCB9XSB9KTtcblx0Y29uc3QgbGlzdCA9IGF3YWl0IG5hdmlnYXRvci51c2IuZ2V0RGV2aWNlcygpO1xuXHRjb25zb2xlLmxvZyhsaXN0KTtcbn1cblxuXG4vKipcbiAqIE9wZW4gYSB3aW5kb3cgdXNpbmcgZHluYW1pYyBvcHRpb25zLlxuICogQHJldHVybnMgVGhlIHdpbmRvdy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gb3BlbkR5bmFtaWNBcHBsaWNhdGlvbldpbmRvdygpOiBQcm9taXNlPE9wZW5GaW4uV2luZG93PiB7XG5cdGNvbnN0IHdpbk9wdGlvbiA9IHtcblx0XHRuYW1lOiBcImNoaWxkXCIsXG5cdFx0ZGVmYXVsdFdpZHRoOiA4MDAsXG5cdFx0ZGVmYXVsdEhlaWdodDogODAwLFxuXHRcdHVybDogXCJodHRwczovL2RldmVsb3BlcnMub3BlbmZpbi5jby9vZi1kb2NzL2RvY3MvY29ubmVjdC11c2ItaGlkI2ZpbmQtYWxsLWNvbm5lY3RlZC1kZXZpY2VzXCIsXG5cdFx0ZnJhbWU6IHRydWUsXG5cdFx0YXV0b1Nob3c6IHRydWVcblx0fTtcblx0cmV0dXJuIGZpbi5XaW5kb3cuY3JlYXRlKHdpbk9wdGlvbik7XG59XG5cbi8qKlxuICogVXNlIHRoZSB1c2IuZ2V0RGV2aWNlcyBtZXRob2QgdG8gZ2V0IGEgbGlzdCBvZiBjb25uZWN0ZWQgZGV2aWNlcy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gY2hlY2tGb3JVc2JEZXZpY2VzKCk6IFByb21pc2U8dm9pZD4ge1xuXHRhd2FpdCByZXF1ZXN0RGV2aWNlKCk7XG5cdC8vIEdldCBhbGwgY29ubmVjdGVkIFVTQiBkZXZpY2VzIHRoZSB3ZWJzaXRlIGhhcyBiZWVuIGdyYW50ZWQgYWNjZXNzIHRvLlxuXHQvLyBpZiAoXCJ1c2JcIiBpbiBuYXZpZ2F0b3IpIHtcblx0Ly8gXHRjb25zdCB1c2IgPSBuYXZpZ2F0b3IudXNiO1xuXHQvLyBcdGF3YWl0IHVzYi5nZXREZXZpY2VzKClcblx0Ly8gXHQudGhlbigoZGV2aWNlcykgPT4ge1xuXHQvLyBcdFx0aWYgKGRldmljZXMubGVuZ3RoID4gMCkge1xuXHQvLyBcdFx0XHRjb25zb2xlLmxvZyhgVGhlcmUgYXJlICR7ZGV2aWNlcy5sZW5ndGh9IGRldGVjdGVkIFVTQiBkZXZpY2VzLmApO1xuXHQvLyBcdFx0XHRmb3IgKGNvbnN0IGRldmljZSBvZiBkZXZpY2VzKSB7XG5cdC8vIFx0XHRcdFx0Y29uc29sZS5sb2coZGV2aWNlLnByb2R1Y3ROYW1lKTsgLy8gXCJBcmR1aW5vIE1pY3JvXCJcblx0Ly8gXHRcdFx0XHRjb25zb2xlLmxvZyhkZXZpY2UubWFudWZhY3R1cmVyTmFtZSk7IC8vIFwiQXJkdWlubyBMTENcIlxuXHQvLyBcdFx0XHR9XG5cdC8vIFx0XHR9IGVsc2Uge1xuXHQvLyBcdFx0XHRjb25zb2xlLmxvZyhcIlRoZXJlIGFyZSBubyBkZXRlY3RlZCBVU0IgZGV2aWNlcy5cIik7XG5cdC8vIFx0XHR9XG5cdC8vIFx0XHRyZXR1cm4gdHJ1ZTtcblx0Ly8gXHR9KVxuXHQvLyBcdC5jYXRjaCgoZXJyb3IpID0+IHtcblx0Ly8gXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHQvLyBcdH0pO1xuXHQvLyB9IGVsc2Uge1xuXHQvLyBcdGNvbnNvbGUubG9nKFwiVGhlcmUgaXMgbm8gVVNCIGRldGVjdGlvbiBvbiB0aGUgTmF2aWdhdG9yIHdpbmRvdyBvYmplY3QgZm9yIHRoaXMgYnJvd3Nlci5cIik7XG5cdC8vIH1cbn1cblxuLyoqXG4gKlxuICovXG4vLyBmdW5jdGlvbiBhZGREZXZpY2VUb0xpc3QoKSB7XG5cdFxuLy8gfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9