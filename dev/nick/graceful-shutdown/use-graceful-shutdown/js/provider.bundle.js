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
/*!********************************!*\
  !*** ./client/src/provider.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/**
 * Log and allow close. Runs when the user closes a window (before-unload hook).
 * This path runs on window close; registerShutdownHandler may not run when closing the last window.
 */
async function onWindowClose() {
    await fin.System.log("info", "Graceful shutdown: before-unload ran (window close)").catch(() => { });
}
/**
 * Override the platform provider so we log when the user closes the window.
 * getUserDecisionForBeforeUnload is called when a window is about to close.
 * @param PlatformProvider The base platform provider class.
 * @returns The overridden provider instance.
 */
function overrideCallback(PlatformProvider) {
    /** Provider override that logs on window close. */
    class GracefulShutdownOverride extends PlatformProvider {
        /**
         * On window close: log then allow close.
         * @param payload The before-unload payload.
         * @returns Decision to close the window and its views.
         */
        async getUserDecisionForBeforeUnload(payload) {
            const { viewsPreventingUnload, viewsNotPreventingUnload } = payload;
            await onWindowClose();
            return {
                windowShouldClose: true,
                viewsToClose: [...viewsNotPreventingUnload, ...viewsPreventingUnload]
            };
        }
    }
    return new GracefulShutdownOverride();
}
// Log when window closes (runs on close).
fin.System.registerShutdownHandler((shutdownEvent) => {
    fin.System.log("info", "Graceful shutdown: registerShutdownHandler ran (system shutdown)").catch(() => { });
    shutdownEvent.proceed();
}).catch((err) => console.error("Failed to register shutdown handler:", err));
fin.Platform.init({ overrideCallback }).catch((error) => console.error(error));


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7Ozs7O0FDSkE7OztHQUdHO0FBQ0gsS0FBSyxVQUFVLGFBQWE7SUFDM0IsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUscURBQXFELENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckcsQ0FBQztBQUVEOzs7OztHQUtHO0FBQ0gsU0FBUyxnQkFBZ0IsQ0FDeEIsZ0JBQStEO0lBRS9ELG1EQUFtRDtJQUNuRCxNQUFNLHdCQUF5QixTQUFRLGdCQUFnQjtRQUN0RDs7OztXQUlHO1FBQ0ksS0FBSyxDQUFDLDhCQUE4QixDQUMxQyxPQUE2QztZQUU3QyxNQUFNLEVBQUUscUJBQXFCLEVBQUUsd0JBQXdCLEVBQUUsR0FBRyxPQUFPLENBQUM7WUFDcEUsTUFBTSxhQUFhLEVBQUUsQ0FBQztZQUN0QixPQUFPO2dCQUNOLGlCQUFpQixFQUFFLElBQUk7Z0JBQ3ZCLFlBQVksRUFBRSxDQUFDLEdBQUcsd0JBQXdCLEVBQUUsR0FBRyxxQkFBcUIsQ0FBQzthQUNyRSxDQUFDO1FBQ0gsQ0FBQztLQUNEO0lBQ0QsT0FBTyxJQUFJLHdCQUF3QixFQUFFLENBQUM7QUFDdkMsQ0FBQztBQUVELDBDQUEwQztBQUMxQyxHQUFHLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLENBQUMsYUFBYSxFQUFFLEVBQUU7SUFDcEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLGtFQUFrRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNHLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN6QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsc0NBQXNDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUU5RSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZS1ncmFjZWZ1bC1zaHV0ZG93bi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91c2UtZ3JhY2VmdWwtc2h1dGRvd24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91c2UtZ3JhY2VmdWwtc2h1dGRvd24vLi9jbGllbnQvc3JjL3Byb3ZpZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdHlwZSBPcGVuRmluIGZyb20gXCJAb3BlbmZpbi9jb3JlXCI7XG5cbi8qKlxuICogTG9nIGFuZCBhbGxvdyBjbG9zZS4gUnVucyB3aGVuIHRoZSB1c2VyIGNsb3NlcyBhIHdpbmRvdyAoYmVmb3JlLXVubG9hZCBob29rKS5cbiAqIFRoaXMgcGF0aCBydW5zIG9uIHdpbmRvdyBjbG9zZTsgcmVnaXN0ZXJTaHV0ZG93bkhhbmRsZXIgbWF5IG5vdCBydW4gd2hlbiBjbG9zaW5nIHRoZSBsYXN0IHdpbmRvdy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gb25XaW5kb3dDbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0YXdhaXQgZmluLlN5c3RlbS5sb2coXCJpbmZvXCIsIFwiR3JhY2VmdWwgc2h1dGRvd246IGJlZm9yZS11bmxvYWQgcmFuICh3aW5kb3cgY2xvc2UpXCIpLmNhdGNoKCgpID0+IHt9KTtcbn1cblxuLyoqXG4gKiBPdmVycmlkZSB0aGUgcGxhdGZvcm0gcHJvdmlkZXIgc28gd2UgbG9nIHdoZW4gdGhlIHVzZXIgY2xvc2VzIHRoZSB3aW5kb3cuXG4gKiBnZXRVc2VyRGVjaXNpb25Gb3JCZWZvcmVVbmxvYWQgaXMgY2FsbGVkIHdoZW4gYSB3aW5kb3cgaXMgYWJvdXQgdG8gY2xvc2UuXG4gKiBAcGFyYW0gUGxhdGZvcm1Qcm92aWRlciBUaGUgYmFzZSBwbGF0Zm9ybSBwcm92aWRlciBjbGFzcy5cbiAqIEByZXR1cm5zIFRoZSBvdmVycmlkZGVuIHByb3ZpZGVyIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBvdmVycmlkZUNhbGxiYWNrKFxuXHRQbGF0Zm9ybVByb3ZpZGVyOiBPcGVuRmluLkNvbnN0cnVjdG9yPE9wZW5GaW4uUGxhdGZvcm1Qcm92aWRlcj5cbik6IE9wZW5GaW4uUGxhdGZvcm1Qcm92aWRlciB7XG5cdC8qKiBQcm92aWRlciBvdmVycmlkZSB0aGF0IGxvZ3Mgb24gd2luZG93IGNsb3NlLiAqL1xuXHRjbGFzcyBHcmFjZWZ1bFNodXRkb3duT3ZlcnJpZGUgZXh0ZW5kcyBQbGF0Zm9ybVByb3ZpZGVyIHtcblx0XHQvKipcblx0XHQgKiBPbiB3aW5kb3cgY2xvc2U6IGxvZyB0aGVuIGFsbG93IGNsb3NlLlxuXHRcdCAqIEBwYXJhbSBwYXlsb2FkIFRoZSBiZWZvcmUtdW5sb2FkIHBheWxvYWQuXG5cdFx0ICogQHJldHVybnMgRGVjaXNpb24gdG8gY2xvc2UgdGhlIHdpbmRvdyBhbmQgaXRzIHZpZXdzLlxuXHRcdCAqL1xuXHRcdHB1YmxpYyBhc3luYyBnZXRVc2VyRGVjaXNpb25Gb3JCZWZvcmVVbmxvYWQoXG5cdFx0XHRwYXlsb2FkOiBPcGVuRmluLlZpZXdzUHJldmVudGluZ1VubG9hZFBheWxvYWRcblx0XHQpOiBQcm9taXNlPE9wZW5GaW4uQmVmb3JlVW5sb2FkVXNlckRlY2lzaW9uPiB7XG5cdFx0XHRjb25zdCB7IHZpZXdzUHJldmVudGluZ1VubG9hZCwgdmlld3NOb3RQcmV2ZW50aW5nVW5sb2FkIH0gPSBwYXlsb2FkO1xuXHRcdFx0YXdhaXQgb25XaW5kb3dDbG9zZSgpO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0d2luZG93U2hvdWxkQ2xvc2U6IHRydWUsXG5cdFx0XHRcdHZpZXdzVG9DbG9zZTogWy4uLnZpZXdzTm90UHJldmVudGluZ1VubG9hZCwgLi4udmlld3NQcmV2ZW50aW5nVW5sb2FkXVxuXHRcdFx0fTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIG5ldyBHcmFjZWZ1bFNodXRkb3duT3ZlcnJpZGUoKTtcbn1cblxuLy8gTG9nIHdoZW4gd2luZG93IGNsb3NlcyAocnVucyBvbiBjbG9zZSkuXG5maW4uU3lzdGVtLnJlZ2lzdGVyU2h1dGRvd25IYW5kbGVyKChzaHV0ZG93bkV2ZW50KSA9PiB7XG5cdGZpbi5TeXN0ZW0ubG9nKFwiaW5mb1wiLCBcIkdyYWNlZnVsIHNodXRkb3duOiByZWdpc3RlclNodXRkb3duSGFuZGxlciByYW4gKHN5c3RlbSBzaHV0ZG93bilcIikuY2F0Y2goKCkgPT4ge30pO1xuXHRzaHV0ZG93bkV2ZW50LnByb2NlZWQoKTtcbn0pLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gcmVnaXN0ZXIgc2h1dGRvd24gaGFuZGxlcjpcIiwgZXJyKSk7XG5cbmZpbi5QbGF0Zm9ybS5pbml0KHsgb3ZlcnJpZGVDYWxsYmFjayB9KS5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=