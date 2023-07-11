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
    await platform.once("platform-api-ready", async () => init());
});
fin.Platform.init().catch(() => { });
async function init() {
    console.log("Platform Init");
    const application = await fin.Application.getCurrent();
    await application.setTrayIcon("http://localhost:5050/favicon.ico");
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
                    url: "http://localhost:5050/views/excel.html",
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
function pointInRect(rect, pt) {
    return pt.x > rect.left && pt.x < rect.right && pt.y > rect.top && pt.y < rect.bottom;
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEJBQzNCLGFBQWEsRUFBRSxJQUFJOzRCQUNuQixrQkFBa0IsRUFBRTtnQ0FDbkIsT0FBTyxFQUFFLElBQUk7Z0NBQ2IsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDOzZCQUNyQjt5QkFDRDtxQkFDRDtpQkFDRCxDQUFDO2dCQUVGLEdBQUcsR0FBRyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3pDO1NBQ0Q7YUFBTSxJQUFJLEdBQUcsRUFBRTtZQUNmLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2pCO1FBRUQsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQ3BCLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsV0FBVyxDQUNuQixJQUFrRSxFQUNsRSxFQUE0QjtJQUU1QixPQUFPLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUN2RixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW50ZWdyYXRpb24tZXhjZWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRpb24tZXhjZWwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9pbnRlZ3JhdGlvbi1leGNlbC8uL2NsaWVudC9zcmMvcHJvdmlkZXItdHJheS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IHt9O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBwbGF0Zm9ybTogT3BlbkZpbi5QbGF0Zm9ybSA9IGZpbi5QbGF0Zm9ybS5nZXRDdXJyZW50U3luYygpO1xuXHRhd2FpdCBwbGF0Zm9ybS5vbmNlKFwicGxhdGZvcm0tYXBpLXJlYWR5XCIsIGFzeW5jICgpID0+IGluaXQoKSk7XG59KTtcblxuZmluLlBsYXRmb3JtLmluaXQoKS5jYXRjaCgoKSA9PiB7fSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXQoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnNvbGUubG9nKFwiUGxhdGZvcm0gSW5pdFwiKTtcblxuXHRjb25zdCBhcHBsaWNhdGlvbiA9IGF3YWl0IGZpbi5BcHBsaWNhdGlvbi5nZXRDdXJyZW50KCk7XG5cdGF3YWl0IGFwcGxpY2F0aW9uLnNldFRyYXlJY29uKFwiaHR0cDovL2xvY2FsaG9zdDo1MDUwL2Zhdmljb24uaWNvXCIpO1xuXG5cdGxldCB2aXNpYmxlID0gZmFsc2U7XG5cdGxldCB3aW46IE9wZW5GaW4uV2luZG93IHwgdW5kZWZpbmVkO1xuXG5cdGF3YWl0IGFwcGxpY2F0aW9uLmFkZExpc3RlbmVyKFwidHJheS1pY29uLWNsaWNrZWRcIiwgYXN5bmMgKHRyYXlJbmZvOiBPcGVuRmluLlRyYXlJbmZvKSA9PiB7XG5cdFx0aWYgKCF2aXNpYmxlKSB7XG5cdFx0XHRpZiAod2luKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVHJ5IHNob3dpbmcgd2luZG93LCBpZiBpdCBmYWlscyB3ZSBuZWVkIHRvIGNyZWF0ZSBpdFxuXHRcdFx0XHRcdGF3YWl0IHdpbi5zaG93KCk7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdHdpbiA9IHVuZGVmaW5lZDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIXdpbikge1xuXHRcdFx0XHQvLyBXb3JrIG91dCB3aGljaCBtb25pdG9yIHRoZSB0cmF5IGljb24gaXMgb25cblx0XHRcdFx0Y29uc3QgbW9uaXRvcnM6IE9wZW5GaW4uTW9uaXRvckRldGFpbHNbXSA9IFtcblx0XHRcdFx0XHR0cmF5SW5mby5tb25pdG9ySW5mby5wcmltYXJ5TW9uaXRvcixcblx0XHRcdFx0XHQuLi50cmF5SW5mby5tb25pdG9ySW5mby5ub25QcmltYXJ5TW9uaXRvcnNcblx0XHRcdFx0XTtcblxuXHRcdFx0XHRjb25zdCBmb3VuZE1vbml0b3IgPSBtb25pdG9ycy5maW5kKChtaSkgPT5cblx0XHRcdFx0XHRwb2ludEluUmVjdChtaS5tb25pdG9yUmVjdCwgeyB4OiB0cmF5SW5mby54LCB5OiB0cmF5SW5mby55IH0pXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0Y29uc3Qgd2luV2lkdGggPSAyNTA7XG5cblx0XHRcdFx0Y29uc3Qgd2luT3B0aW9uID0ge1xuXHRcdFx0XHRcdG5hbWU6IFwiZXhjZWwtdHJheS12aWV3XCIsXG5cdFx0XHRcdFx0aW5jbHVkZUluU25hcHNob3Q6IGZhbHNlLFxuXHRcdFx0XHRcdHNob3dUYXNrYmFySWNvbjogZmFsc2UsXG5cdFx0XHRcdFx0c2F2ZVdpbmRvd1N0YXRlOiBmYWxzZSxcblx0XHRcdFx0XHRkZWZhdWx0VG9wOiBmb3VuZE1vbml0b3I/LmF2YWlsYWJsZVJlY3QudG9wLFxuXHRcdFx0XHRcdGRlZmF1bHRMZWZ0OiBmb3VuZE1vbml0b3IgPyBmb3VuZE1vbml0b3I/LmF2YWlsYWJsZVJlY3Q/LnJpZ2h0IC0gd2luV2lkdGggOiB1bmRlZmluZWQsXG5cdFx0XHRcdFx0ZGVmYXVsdFdpZHRoOiB3aW5XaWR0aCxcblx0XHRcdFx0XHRkZWZhdWx0SGVpZ2h0OiBmb3VuZE1vbml0b3Jcblx0XHRcdFx0XHRcdD8gZm91bmRNb25pdG9yLmF2YWlsYWJsZVJlY3QuYm90dG9tIC0gZm91bmRNb25pdG9yLmF2YWlsYWJsZVJlY3QudG9wXG5cdFx0XHRcdFx0XHQ6IHVuZGVmaW5lZCxcblx0XHRcdFx0XHR1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo1MDUwL3ZpZXdzL2V4Y2VsLmh0bWxcIixcblx0XHRcdFx0XHRmcmFtZTogZmFsc2UsXG5cdFx0XHRcdFx0YXV0b1Nob3c6IHRydWUsXG5cdFx0XHRcdFx0YWx3YXlzT25Ub3A6IHRydWUsXG5cdFx0XHRcdFx0cmVzaXphYmxlOiBmYWxzZSxcblx0XHRcdFx0XHRwZXJtaXNzaW9uczoge1xuXHRcdFx0XHRcdFx0U3lzdGVtOiB7XG5cdFx0XHRcdFx0XHRcdGxhdW5jaEV4dGVybmFsUHJvY2VzczogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0ZG93bmxvYWRBc3NldDogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0b3BlblVybFdpdGhCcm93c2VyOiB7XG5cdFx0XHRcdFx0XHRcdFx0ZW5hYmxlZDogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHRwcm90b2NvbHM6IFtcIm1haWx0b1wiXVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdHdpbiA9IGF3YWl0IGZpbi5XaW5kb3cuY3JlYXRlKHdpbk9wdGlvbik7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmICh3aW4pIHtcblx0XHRcdGF3YWl0IHdpbi5oaWRlKCk7XG5cdFx0fVxuXG5cdFx0dmlzaWJsZSA9ICF2aXNpYmxlO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gcG9pbnRJblJlY3QoXG5cdHJlY3Q6IHsgbGVmdDogbnVtYmVyOyB0b3A6IG51bWJlcjsgcmlnaHQ6IG51bWJlcjsgYm90dG9tOiBudW1iZXIgfSxcblx0cHQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVxuKTogYm9vbGVhbiB7XG5cdHJldHVybiBwdC54ID4gcmVjdC5sZWZ0ICYmIHB0LnggPCByZWN0LnJpZ2h0ICYmIHB0LnkgPiByZWN0LnRvcCAmJiBwdC55IDwgcmVjdC5ib3R0b207XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=