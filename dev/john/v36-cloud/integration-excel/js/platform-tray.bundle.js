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
/*!*************************************!*\
  !*** ./client/src/provider-tray.ts ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
window.addEventListener("DOMContentLoaded", async () => {
    const platform = fin.Platform.getCurrentSync();
    await platform.once("platform-api-ready", async () => initDom());
});
fin.Platform.init().catch(() => { });
/**
 * Initialize the DOM elements.
 */
async function initDom() {
    console.log("Platform Init");
    const application = await fin.Application.getCurrent();
    await application.setTrayIcon("https://built-on-openfin.github.io/container-starter/dev/john/v36-cloud/integration-excel/favicon.ico");
    let visible = false;
    let win;
    await application.addListener("tray-icon-clicked", async (trayInfo) => {
        if (!visible) {
            if (win) {
                try {
                    // Try showing window, if it fails we need to create it
                    await win.show();
                }
                catch {
                    win = undefined;
                }
            }
            if (!win) {
                // Work out which monitor the tray icon is on
                const monitors = [
                    trayInfo.monitorInfo.primaryMonitor,
                    ...trayInfo.monitorInfo.nonPrimaryMonitors
                ];
                const foundMonitor = monitors.find((mi) => pointInRect(mi.monitorRect, { x: trayInfo.x, y: trayInfo.y }));
                const winWidth = 250;
                const winOption = {
                    name: "excel-tray-view",
                    includeInSnapshot: false,
                    showTaskbarIcon: false,
                    saveWindowState: false,
                    defaultTop: foundMonitor?.availableRect.top,
                    defaultLeft: foundMonitor ? foundMonitor?.availableRect?.right - winWidth : undefined,
                    defaultWidth: winWidth,
                    defaultHeight: foundMonitor
                        ? foundMonitor.availableRect.bottom - foundMonitor.availableRect.top
                        : undefined,
                    url: "https://built-on-openfin.github.io/container-starter/dev/john/v36-cloud/integration-excel/views/excel.html",
                    frame: false,
                    autoShow: true,
                    alwaysOnTop: true,
                    resizable: false,
                    permissions: {
                        System: {
                            launchExternalProcess: true,
                            downloadAsset: true,
                            openUrlWithBrowser: {
                                enabled: true,
                                protocols: ["mailto"]
                            }
                        }
                    }
                };
                win = await fin.Window.create(winOption);
            }
        }
        else if (win) {
            await win.hide();
        }
        visible = !visible;
    });
}
/**
 * Is the point inside the rectangle.
 * @param rect The rectangle to test.
 * @param rect.left The rectangle left position.
 * @param rect.top The rectangle top position.
 * @param rect.right The rectangle right position.
 * @param rect.bottom The rectangle bottom position.
 * @param pt The point to check.
 * @param pt.x The point x position.
 * @param pt.y The point y position.
 * @returns True if the point is in the rect.
 */
function pointInRect(rect, pt) {
    return pt.x > rect.left && pt.x < rect.right && pt.y > rect.top && pt.y < rect.bottom;
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixXQUFXLEVBQUU7d0JBQ1osTUFBTSxFQUFFOzRCQUNQLHFCQUFxQixFQUFFLElBQUk7NEJBQzNCLGFBQWEsRUFBRSxJQUFJOzRCQUNuQixrQkFBa0IsRUFBRTtnQ0FDbkIsT0FBTyxFQUFFLElBQUk7Z0NBQ2IsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDOzZCQUNyQjt5QkFDRDtxQkFDRDtpQkFDRCxDQUFDO2dCQUVGLEdBQUcsR0FBRyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzFDLENBQUM7UUFDRixDQUFDO2FBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNoQixNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsQixDQUFDO1FBRUQsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQ3BCLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVEOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsU0FBUyxXQUFXLENBQ25CLElBQWtFLEVBQ2xFLEVBQTRCO0lBRTVCLE9BQU8sRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3ZGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRlZ3JhdGlvbi1leGNlbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbnRlZ3JhdGlvbi1leGNlbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ludGVncmF0aW9uLWV4Y2VsLy4vY2xpZW50L3NyYy9wcm92aWRlci10cmF5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdHlwZSBPcGVuRmluIGZyb20gXCJAb3BlbmZpbi9jb3JlXCI7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IHBsYXRmb3JtOiBPcGVuRmluLlBsYXRmb3JtID0gZmluLlBsYXRmb3JtLmdldEN1cnJlbnRTeW5jKCk7XG5cdGF3YWl0IHBsYXRmb3JtLm9uY2UoXCJwbGF0Zm9ybS1hcGktcmVhZHlcIiwgYXN5bmMgKCkgPT4gaW5pdERvbSgpKTtcbn0pO1xuXG5maW4uUGxhdGZvcm0uaW5pdCgpLmNhdGNoKCgpID0+IHt9KTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBET00gZWxlbWVudHMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXREb20oKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnNvbGUubG9nKFwiUGxhdGZvcm0gSW5pdFwiKTtcblxuXHRjb25zdCBhcHBsaWNhdGlvbiA9IGF3YWl0IGZpbi5BcHBsaWNhdGlvbi5nZXRDdXJyZW50KCk7XG5cdGF3YWl0IGFwcGxpY2F0aW9uLnNldFRyYXlJY29uKFwiaHR0cDovL2xvY2FsaG9zdDo1MDUwL2Zhdmljb24uaWNvXCIpO1xuXG5cdGxldCB2aXNpYmxlID0gZmFsc2U7XG5cdGxldCB3aW46IE9wZW5GaW4uV2luZG93IHwgdW5kZWZpbmVkO1xuXG5cdGF3YWl0IGFwcGxpY2F0aW9uLmFkZExpc3RlbmVyKFwidHJheS1pY29uLWNsaWNrZWRcIiwgYXN5bmMgKHRyYXlJbmZvOiBPcGVuRmluLlRyYXlJbmZvKSA9PiB7XG5cdFx0aWYgKCF2aXNpYmxlKSB7XG5cdFx0XHRpZiAod2luKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVHJ5IHNob3dpbmcgd2luZG93LCBpZiBpdCBmYWlscyB3ZSBuZWVkIHRvIGNyZWF0ZSBpdFxuXHRcdFx0XHRcdGF3YWl0IHdpbi5zaG93KCk7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdHdpbiA9IHVuZGVmaW5lZDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIXdpbikge1xuXHRcdFx0XHQvLyBXb3JrIG91dCB3aGljaCBtb25pdG9yIHRoZSB0cmF5IGljb24gaXMgb25cblx0XHRcdFx0Y29uc3QgbW9uaXRvcnM6IE9wZW5GaW4uTW9uaXRvckRldGFpbHNbXSA9IFtcblx0XHRcdFx0XHR0cmF5SW5mby5tb25pdG9ySW5mby5wcmltYXJ5TW9uaXRvcixcblx0XHRcdFx0XHQuLi50cmF5SW5mby5tb25pdG9ySW5mby5ub25QcmltYXJ5TW9uaXRvcnNcblx0XHRcdFx0XTtcblxuXHRcdFx0XHRjb25zdCBmb3VuZE1vbml0b3IgPSBtb25pdG9ycy5maW5kKChtaSkgPT5cblx0XHRcdFx0XHRwb2ludEluUmVjdChtaS5tb25pdG9yUmVjdCwgeyB4OiB0cmF5SW5mby54LCB5OiB0cmF5SW5mby55IH0pXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0Y29uc3Qgd2luV2lkdGggPSAyNTA7XG5cblx0XHRcdFx0Y29uc3Qgd2luT3B0aW9uID0ge1xuXHRcdFx0XHRcdG5hbWU6IFwiZXhjZWwtdHJheS12aWV3XCIsXG5cdFx0XHRcdFx0aW5jbHVkZUluU25hcHNob3Q6IGZhbHNlLFxuXHRcdFx0XHRcdHNob3dUYXNrYmFySWNvbjogZmFsc2UsXG5cdFx0XHRcdFx0c2F2ZVdpbmRvd1N0YXRlOiBmYWxzZSxcblx0XHRcdFx0XHRkZWZhdWx0VG9wOiBmb3VuZE1vbml0b3I/LmF2YWlsYWJsZVJlY3QudG9wLFxuXHRcdFx0XHRcdGRlZmF1bHRMZWZ0OiBmb3VuZE1vbml0b3IgPyBmb3VuZE1vbml0b3I/LmF2YWlsYWJsZVJlY3Q/LnJpZ2h0IC0gd2luV2lkdGggOiB1bmRlZmluZWQsXG5cdFx0XHRcdFx0ZGVmYXVsdFdpZHRoOiB3aW5XaWR0aCxcblx0XHRcdFx0XHRkZWZhdWx0SGVpZ2h0OiBmb3VuZE1vbml0b3Jcblx0XHRcdFx0XHRcdD8gZm91bmRNb25pdG9yLmF2YWlsYWJsZVJlY3QuYm90dG9tIC0gZm91bmRNb25pdG9yLmF2YWlsYWJsZVJlY3QudG9wXG5cdFx0XHRcdFx0XHQ6IHVuZGVmaW5lZCxcblx0XHRcdFx0XHR1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo1MDUwL3ZpZXdzL2V4Y2VsLmh0bWxcIixcblx0XHRcdFx0XHRmcmFtZTogZmFsc2UsXG5cdFx0XHRcdFx0YXV0b1Nob3c6IHRydWUsXG5cdFx0XHRcdFx0YWx3YXlzT25Ub3A6IHRydWUsXG5cdFx0XHRcdFx0cmVzaXphYmxlOiBmYWxzZSxcblx0XHRcdFx0XHRwZXJtaXNzaW9uczoge1xuXHRcdFx0XHRcdFx0U3lzdGVtOiB7XG5cdFx0XHRcdFx0XHRcdGxhdW5jaEV4dGVybmFsUHJvY2VzczogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0ZG93bmxvYWRBc3NldDogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0b3BlblVybFdpdGhCcm93c2VyOiB7XG5cdFx0XHRcdFx0XHRcdFx0ZW5hYmxlZDogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHRwcm90b2NvbHM6IFtcIm1haWx0b1wiXVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdHdpbiA9IGF3YWl0IGZpbi5XaW5kb3cuY3JlYXRlKHdpbk9wdGlvbik7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmICh3aW4pIHtcblx0XHRcdGF3YWl0IHdpbi5oaWRlKCk7XG5cdFx0fVxuXG5cdFx0dmlzaWJsZSA9ICF2aXNpYmxlO1xuXHR9KTtcbn1cblxuLyoqXG4gKiBJcyB0aGUgcG9pbnQgaW5zaWRlIHRoZSByZWN0YW5nbGUuXG4gKiBAcGFyYW0gcmVjdCBUaGUgcmVjdGFuZ2xlIHRvIHRlc3QuXG4gKiBAcGFyYW0gcmVjdC5sZWZ0IFRoZSByZWN0YW5nbGUgbGVmdCBwb3NpdGlvbi5cbiAqIEBwYXJhbSByZWN0LnRvcCBUaGUgcmVjdGFuZ2xlIHRvcCBwb3NpdGlvbi5cbiAqIEBwYXJhbSByZWN0LnJpZ2h0IFRoZSByZWN0YW5nbGUgcmlnaHQgcG9zaXRpb24uXG4gKiBAcGFyYW0gcmVjdC5ib3R0b20gVGhlIHJlY3RhbmdsZSBib3R0b20gcG9zaXRpb24uXG4gKiBAcGFyYW0gcHQgVGhlIHBvaW50IHRvIGNoZWNrLlxuICogQHBhcmFtIHB0LnggVGhlIHBvaW50IHggcG9zaXRpb24uXG4gKiBAcGFyYW0gcHQueSBUaGUgcG9pbnQgeSBwb3NpdGlvbi5cbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHBvaW50IGlzIGluIHRoZSByZWN0LlxuICovXG5mdW5jdGlvbiBwb2ludEluUmVjdChcblx0cmVjdDogeyBsZWZ0OiBudW1iZXI7IHRvcDogbnVtYmVyOyByaWdodDogbnVtYmVyOyBib3R0b206IG51bWJlciB9LFxuXHRwdDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG4pOiBib29sZWFuIHtcblx0cmV0dXJuIHB0LnggPiByZWN0LmxlZnQgJiYgcHQueCA8IHJlY3QucmlnaHQgJiYgcHQueSA+IHJlY3QudG9wICYmIHB0LnkgPCByZWN0LmJvdHRvbTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==