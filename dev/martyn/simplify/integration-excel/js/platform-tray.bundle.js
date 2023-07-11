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
function pointInRect({ left, top, right, bottom }, { x, y }) {
    return x > left && x < right && y > top && y < bottom;
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsQ0FBQzs2QkFDckI7eUJBQ0Q7cUJBQ0Q7aUJBQ0QsQ0FBQztnQkFFRixHQUFHLEdBQUcsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUN6QztTQUNEO2FBQU07WUFDTixNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNqQjtRQUVELE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUNwQixDQUFDLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtJQUMxRCxPQUFPLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDdkQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ludGVncmF0aW9uLWV4Y2VsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ludGVncmF0aW9uLWV4Y2VsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRpb24tZXhjZWwvLi9jbGllbnQvc3JjL3Byb3ZpZGVyLXRyYXkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCB7fTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcblx0Y29uc3QgcGxhdGZvcm06IE9wZW5GaW4uUGxhdGZvcm0gPSBmaW4uUGxhdGZvcm0uZ2V0Q3VycmVudFN5bmMoKTtcblx0YXdhaXQgcGxhdGZvcm0ub25jZShcInBsYXRmb3JtLWFwaS1yZWFkeVwiLCBhc3luYyAoKSA9PiBpbml0KCkpO1xufSk7XG5cbmZpbi5QbGF0Zm9ybS5pbml0KCkuY2F0Y2goKCkgPT4ge30pO1xuXG5hc3luYyBmdW5jdGlvbiBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zb2xlLmxvZyhcIlBsYXRmb3JtIEluaXRcIik7XG5cblx0Y29uc3QgYXBwbGljYXRpb24gPSBhd2FpdCBmaW4uQXBwbGljYXRpb24uZ2V0Q3VycmVudCgpO1xuXHRhd2FpdCBhcHBsaWNhdGlvbi5zZXRUcmF5SWNvbihcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MC9mYXZpY29uLmljb1wiKTtcblxuXHRsZXQgdmlzaWJsZSA9IGZhbHNlO1xuXHRsZXQgd2luOiBPcGVuRmluLldpbmRvdyB8IHVuZGVmaW5lZDtcblxuXHRhd2FpdCBhcHBsaWNhdGlvbi5hZGRMaXN0ZW5lcihcInRyYXktaWNvbi1jbGlja2VkXCIsIGFzeW5jICh0cmF5SW5mbzogT3BlbkZpbi5UcmF5SW5mbykgPT4ge1xuXHRcdGlmICghdmlzaWJsZSkge1xuXHRcdFx0aWYgKHdpbikge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRyeSBzaG93aW5nIHdpbmRvdywgaWYgaXQgZmFpbHMgd2UgbmVlZCB0byBjcmVhdGUgaXRcblx0XHRcdFx0XHRhd2FpdCB3aW4uc2hvdygpO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHR3aW4gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKCF3aW4pIHtcblx0XHRcdFx0Ly8gV29yayBvdXQgd2hpY2ggbW9uaXRvciB0aGUgdHJheSBpY29uIGlzIG9uXG5cdFx0XHRcdGNvbnN0IG1vbml0b3JzOiBPcGVuRmluLk1vbml0b3JEZXRhaWxzW10gPSBbXG5cdFx0XHRcdFx0dHJheUluZm8ubW9uaXRvckluZm8ucHJpbWFyeU1vbml0b3IsXG5cdFx0XHRcdFx0Li4udHJheUluZm8ubW9uaXRvckluZm8ubm9uUHJpbWFyeU1vbml0b3JzXG5cdFx0XHRcdF07XG5cblx0XHRcdFx0Y29uc3QgZm91bmRNb25pdG9yID0gbW9uaXRvcnMuZmluZCgobWkpID0+XG5cdFx0XHRcdFx0cG9pbnRJblJlY3QobWkubW9uaXRvclJlY3QsIHsgeDogdHJheUluZm8ueCwgeTogdHJheUluZm8ueSB9KVxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdGNvbnN0IHdpbldpZHRoID0gMjUwO1xuXG5cdFx0XHRcdGNvbnN0IHdpbk9wdGlvbiA9IHtcblx0XHRcdFx0XHRuYW1lOiBcImV4Y2VsLXRyYXktdmlld1wiLFxuXHRcdFx0XHRcdGluY2x1ZGVJblNuYXBzaG90OiBmYWxzZSxcblx0XHRcdFx0XHRzaG93VGFza2Jhckljb246IGZhbHNlLFxuXHRcdFx0XHRcdHNhdmVXaW5kb3dTdGF0ZTogZmFsc2UsXG5cdFx0XHRcdFx0ZGVmYXVsdFRvcDogZm91bmRNb25pdG9yLmF2YWlsYWJsZVJlY3QudG9wLFxuXHRcdFx0XHRcdGRlZmF1bHRMZWZ0OiBmb3VuZE1vbml0b3IuYXZhaWxhYmxlUmVjdC5yaWdodCAtIHdpbldpZHRoLFxuXHRcdFx0XHRcdGRlZmF1bHRXaWR0aDogd2luV2lkdGgsXG5cdFx0XHRcdFx0ZGVmYXVsdEhlaWdodDogZm91bmRNb25pdG9yLmF2YWlsYWJsZVJlY3QuYm90dG9tIC0gZm91bmRNb25pdG9yLmF2YWlsYWJsZVJlY3QudG9wLFxuXHRcdFx0XHRcdHVybDogXCJodHRwOi8vbG9jYWxob3N0OjUwNTAvdmlld3MvZXhjZWwuaHRtbFwiLFxuXHRcdFx0XHRcdGZyYW1lOiBmYWxzZSxcblx0XHRcdFx0XHRhdXRvU2hvdzogdHJ1ZSxcblx0XHRcdFx0XHRhbHdheXNPblRvcDogdHJ1ZSxcblx0XHRcdFx0XHRyZXNpemFibGU6IGZhbHNlLFxuXHRcdFx0XHRcdHBlcm1pc3Npb25zOiB7XG5cdFx0XHRcdFx0XHRTeXN0ZW06IHtcblx0XHRcdFx0XHRcdFx0bGF1bmNoRXh0ZXJuYWxQcm9jZXNzOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRkb3dubG9hZEFzc2V0OiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRvcGVuVXJsV2l0aEJyb3dzZXI6IHtcblx0XHRcdFx0XHRcdFx0XHRlbmFibGVkOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdHByb3RvY29sczogW1wibWFpbHRvXCJdXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0d2luID0gYXdhaXQgZmluLldpbmRvdy5jcmVhdGUod2luT3B0aW9uKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0YXdhaXQgd2luLmhpZGUoKTtcblx0XHR9XG5cblx0XHR2aXNpYmxlID0gIXZpc2libGU7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBwb2ludEluUmVjdCh7IGxlZnQsIHRvcCwgcmlnaHQsIGJvdHRvbSB9LCB7IHgsIHkgfSk6IGJvb2xlYW4ge1xuXHRyZXR1cm4geCA+IGxlZnQgJiYgeCA8IHJpZ2h0ICYmIHkgPiB0b3AgJiYgeSA8IGJvdHRvbTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==