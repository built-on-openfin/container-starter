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
                const pointInRect = ({ left, top, right, bottom }, { x, y }) => x > left && x < right && y > top && y < bottom;
                const foundMonitor = monitors.find((mi) => pointInRect(mi.monitorRect, { x: trayInfo.x, y: trayInfo.y }));
                const winWidth = 250;
                const winOption = {
                    name: "excel-tray-view",
                    includeInSnapshot: false,
                    showTaskbarIcon: false,
                    saveWindowState: false,
                    defaultTop: foundMonitor.availableRect.top,
                    defaultLeft: foundMonitor.availableRect.right - winWidth,
                    defaultWidth: winWidth,
                    defaultHeight: foundMonitor.availableRect.bottom - foundMonitor.availableRect.top,
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
        else {
            await win.hide();
        }
        visible = !visible;
    });
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsRUFBRSxJQUFJO29CQUNkLFdBQVcsRUFBRSxJQUFJO29CQUNqQixTQUFTLEVBQUUsS0FBSztvQkFDaEIsV0FBVyxFQUFFO3dCQUNaLE1BQU0sRUFBRTs0QkFDUCxxQkFBcUIsRUFBRSxJQUFJOzRCQUMzQixhQUFhLEVBQUUsSUFBSTs0QkFDbkIsa0JBQWtCLEVBQUU7Z0NBQ25CLE9BQU8sRUFBRSxJQUFJO2dDQUNiLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs2QkFDckI7eUJBQ0Q7cUJBQ0Q7aUJBQ0QsQ0FBQztnQkFFRixHQUFHLEdBQUcsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUN6QztTQUNEO2FBQU07WUFDTixNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNqQjtRQUVELE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUNwQixDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRlZ3JhdGlvbi1leGNlbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbnRlZ3JhdGlvbi1leGNlbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ludGVncmF0aW9uLWV4Y2VsLy4vY2xpZW50L3NyYy9wcm92aWRlci10cmF5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQge307XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IHBsYXRmb3JtOiBPcGVuRmluLlBsYXRmb3JtID0gZmluLlBsYXRmb3JtLmdldEN1cnJlbnRTeW5jKCk7XG5cdGF3YWl0IHBsYXRmb3JtLm9uY2UoXCJwbGF0Zm9ybS1hcGktcmVhZHlcIiwgYXN5bmMgKCkgPT4gaW5pdCgpKTtcbn0pO1xuXG5maW4uUGxhdGZvcm0uaW5pdCgpLmNhdGNoKCgpID0+IHt9KTtcblxuYXN5bmMgZnVuY3Rpb24gaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc29sZS5sb2coXCJQbGF0Zm9ybSBJbml0XCIpO1xuXG5cdGNvbnN0IGFwcGxpY2F0aW9uID0gYXdhaXQgZmluLkFwcGxpY2F0aW9uLmdldEN1cnJlbnQoKTtcblx0YXdhaXQgYXBwbGljYXRpb24uc2V0VHJheUljb24oXCJodHRwOi8vbG9jYWxob3N0OjUwNTAvZmF2aWNvbi5pY29cIik7XG5cblx0bGV0IHZpc2libGUgPSBmYWxzZTtcblx0bGV0IHdpbjogT3BlbkZpbi5XaW5kb3cgfCB1bmRlZmluZWQ7XG5cblx0YXdhaXQgYXBwbGljYXRpb24uYWRkTGlzdGVuZXIoXCJ0cmF5LWljb24tY2xpY2tlZFwiLCBhc3luYyAodHJheUluZm86IE9wZW5GaW4uVHJheUluZm8pID0+IHtcblx0XHRpZiAoIXZpc2libGUpIHtcblx0XHRcdGlmICh3aW4pIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUcnkgc2hvd2luZyB3aW5kb3csIGlmIGl0IGZhaWxzIHdlIG5lZWQgdG8gY3JlYXRlIGl0XG5cdFx0XHRcdFx0YXdhaXQgd2luLnNob3coKTtcblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0d2luID0gdW5kZWZpbmVkO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICghd2luKSB7XG5cdFx0XHRcdC8vIFdvcmsgb3V0IHdoaWNoIG1vbml0b3IgdGhlIHRyYXkgaWNvbiBpcyBvblxuXHRcdFx0XHRjb25zdCBtb25pdG9yczogT3BlbkZpbi5Nb25pdG9yRGV0YWlsc1tdID0gW1xuXHRcdFx0XHRcdHRyYXlJbmZvLm1vbml0b3JJbmZvLnByaW1hcnlNb25pdG9yLFxuXHRcdFx0XHRcdC4uLnRyYXlJbmZvLm1vbml0b3JJbmZvLm5vblByaW1hcnlNb25pdG9yc1xuXHRcdFx0XHRdO1xuXG5cdFx0XHRcdGNvbnN0IHBvaW50SW5SZWN0ID0gKHsgbGVmdCwgdG9wLCByaWdodCwgYm90dG9tIH0sIHsgeCwgeSB9KSA9PlxuXHRcdFx0XHRcdHggPiBsZWZ0ICYmIHggPCByaWdodCAmJiB5ID4gdG9wICYmIHkgPCBib3R0b207XG5cblx0XHRcdFx0Y29uc3QgZm91bmRNb25pdG9yID0gbW9uaXRvcnMuZmluZCgobWkpID0+XG5cdFx0XHRcdFx0cG9pbnRJblJlY3QobWkubW9uaXRvclJlY3QsIHsgeDogdHJheUluZm8ueCwgeTogdHJheUluZm8ueSB9KVxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdGNvbnN0IHdpbldpZHRoID0gMjUwO1xuXG5cdFx0XHRcdGNvbnN0IHdpbk9wdGlvbiA9IHtcblx0XHRcdFx0XHRuYW1lOiBcImV4Y2VsLXRyYXktdmlld1wiLFxuXHRcdFx0XHRcdGluY2x1ZGVJblNuYXBzaG90OiBmYWxzZSxcblx0XHRcdFx0XHRzaG93VGFza2Jhckljb246IGZhbHNlLFxuXHRcdFx0XHRcdHNhdmVXaW5kb3dTdGF0ZTogZmFsc2UsXG5cdFx0XHRcdFx0ZGVmYXVsdFRvcDogZm91bmRNb25pdG9yLmF2YWlsYWJsZVJlY3QudG9wLFxuXHRcdFx0XHRcdGRlZmF1bHRMZWZ0OiBmb3VuZE1vbml0b3IuYXZhaWxhYmxlUmVjdC5yaWdodCAtIHdpbldpZHRoLFxuXHRcdFx0XHRcdGRlZmF1bHRXaWR0aDogd2luV2lkdGgsXG5cdFx0XHRcdFx0ZGVmYXVsdEhlaWdodDogZm91bmRNb25pdG9yLmF2YWlsYWJsZVJlY3QuYm90dG9tIC0gZm91bmRNb25pdG9yLmF2YWlsYWJsZVJlY3QudG9wLFxuXHRcdFx0XHRcdHVybDogXCJodHRwOi8vbG9jYWxob3N0OjUwNTAvdmlld3MvZXhjZWwuaHRtbFwiLFxuXHRcdFx0XHRcdGZyYW1lOiBmYWxzZSxcblx0XHRcdFx0XHRhdXRvU2hvdzogdHJ1ZSxcblx0XHRcdFx0XHRhbHdheXNPblRvcDogdHJ1ZSxcblx0XHRcdFx0XHRyZXNpemFibGU6IGZhbHNlLFxuXHRcdFx0XHRcdHBlcm1pc3Npb25zOiB7XG5cdFx0XHRcdFx0XHRTeXN0ZW06IHtcblx0XHRcdFx0XHRcdFx0bGF1bmNoRXh0ZXJuYWxQcm9jZXNzOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRkb3dubG9hZEFzc2V0OiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRvcGVuVXJsV2l0aEJyb3dzZXI6IHtcblx0XHRcdFx0XHRcdFx0XHRlbmFibGVkOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdHByb3RvY29sczogW1wibWFpbHRvXCJdXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0d2luID0gYXdhaXQgZmluLldpbmRvdy5jcmVhdGUod2luT3B0aW9uKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0YXdhaXQgd2luLmhpZGUoKTtcblx0XHR9XG5cblx0XHR2aXNpYmxlID0gIXZpc2libGU7XG5cdH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9