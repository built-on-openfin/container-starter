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
    await application.setTrayIcon("https://built-on-openfin.github.io/container-starter/dev/nick/v43-updates/integration-excel/favicon.ico");
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
                    url: "https://built-on-openfin.github.io/container-starter/dev/nick/v43-updates/integration-excel/views/excel.html",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2hCLFdBQVcsRUFBRTt3QkFDWixNQUFNLEVBQUU7NEJBQ1AscUJBQXFCLEVBQUUsSUFBSTs0QkFDM0IsYUFBYSxFQUFFLElBQUk7NEJBQ25CLGtCQUFrQixFQUFFO2dDQUNuQixPQUFPLEVBQUUsSUFBSTtnQ0FDYixTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7NkJBQ3JCO3lCQUNEO3FCQUNEO2lCQUNELENBQUM7Z0JBRUYsR0FBRyxHQUFHLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDMUMsQ0FBQztRQUNGLENBQUM7YUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xCLENBQUM7UUFFRCxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDcEIsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQ7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCxTQUFTLFdBQVcsQ0FDbkIsSUFBa0UsRUFDbEUsRUFBNEI7SUFFNUIsT0FBTyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDdkYsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ludGVncmF0aW9uLWV4Y2VsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ludGVncmF0aW9uLWV4Y2VsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRpb24tZXhjZWwvLi9jbGllbnQvc3JjL3Byb3ZpZGVyLXRyYXkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0eXBlIE9wZW5GaW4gZnJvbSBcIkBvcGVuZmluL2NvcmVcIjtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcblx0Y29uc3QgcGxhdGZvcm06IE9wZW5GaW4uUGxhdGZvcm0gPSBmaW4uUGxhdGZvcm0uZ2V0Q3VycmVudFN5bmMoKTtcblx0YXdhaXQgcGxhdGZvcm0ub25jZShcInBsYXRmb3JtLWFwaS1yZWFkeVwiLCBhc3luYyAoKSA9PiBpbml0RG9tKCkpO1xufSk7XG5cbmZpbi5QbGF0Zm9ybS5pbml0KCkuY2F0Y2goKCkgPT4ge30pO1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIERPTSBlbGVtZW50cy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gaW5pdERvbSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc29sZS5sb2coXCJQbGF0Zm9ybSBJbml0XCIpO1xuXG5cdGNvbnN0IGFwcGxpY2F0aW9uID0gYXdhaXQgZmluLkFwcGxpY2F0aW9uLmdldEN1cnJlbnQoKTtcblx0YXdhaXQgYXBwbGljYXRpb24uc2V0VHJheUljb24oXCJodHRwOi8vbG9jYWxob3N0OjUwNTAvZmF2aWNvbi5pY29cIik7XG5cblx0bGV0IHZpc2libGUgPSBmYWxzZTtcblx0bGV0IHdpbjogT3BlbkZpbi5XaW5kb3cgfCB1bmRlZmluZWQ7XG5cblx0YXdhaXQgYXBwbGljYXRpb24uYWRkTGlzdGVuZXIoXCJ0cmF5LWljb24tY2xpY2tlZFwiLCBhc3luYyAodHJheUluZm86IE9wZW5GaW4uVHJheUluZm8pID0+IHtcblx0XHRpZiAoIXZpc2libGUpIHtcblx0XHRcdGlmICh3aW4pIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUcnkgc2hvd2luZyB3aW5kb3csIGlmIGl0IGZhaWxzIHdlIG5lZWQgdG8gY3JlYXRlIGl0XG5cdFx0XHRcdFx0YXdhaXQgd2luLnNob3coKTtcblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0d2luID0gdW5kZWZpbmVkO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICghd2luKSB7XG5cdFx0XHRcdC8vIFdvcmsgb3V0IHdoaWNoIG1vbml0b3IgdGhlIHRyYXkgaWNvbiBpcyBvblxuXHRcdFx0XHRjb25zdCBtb25pdG9yczogT3BlbkZpbi5Nb25pdG9yRGV0YWlsc1tdID0gW1xuXHRcdFx0XHRcdHRyYXlJbmZvLm1vbml0b3JJbmZvLnByaW1hcnlNb25pdG9yLFxuXHRcdFx0XHRcdC4uLnRyYXlJbmZvLm1vbml0b3JJbmZvLm5vblByaW1hcnlNb25pdG9yc1xuXHRcdFx0XHRdO1xuXG5cdFx0XHRcdGNvbnN0IGZvdW5kTW9uaXRvciA9IG1vbml0b3JzLmZpbmQoKG1pKSA9PlxuXHRcdFx0XHRcdHBvaW50SW5SZWN0KG1pLm1vbml0b3JSZWN0LCB7IHg6IHRyYXlJbmZvLngsIHk6IHRyYXlJbmZvLnkgfSlcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRjb25zdCB3aW5XaWR0aCA9IDI1MDtcblxuXHRcdFx0XHRjb25zdCB3aW5PcHRpb24gPSB7XG5cdFx0XHRcdFx0bmFtZTogXCJleGNlbC10cmF5LXZpZXdcIixcblx0XHRcdFx0XHRpbmNsdWRlSW5TbmFwc2hvdDogZmFsc2UsXG5cdFx0XHRcdFx0c2hvd1Rhc2tiYXJJY29uOiBmYWxzZSxcblx0XHRcdFx0XHRzYXZlV2luZG93U3RhdGU6IGZhbHNlLFxuXHRcdFx0XHRcdGRlZmF1bHRUb3A6IGZvdW5kTW9uaXRvcj8uYXZhaWxhYmxlUmVjdC50b3AsXG5cdFx0XHRcdFx0ZGVmYXVsdExlZnQ6IGZvdW5kTW9uaXRvciA/IGZvdW5kTW9uaXRvcj8uYXZhaWxhYmxlUmVjdD8ucmlnaHQgLSB3aW5XaWR0aCA6IHVuZGVmaW5lZCxcblx0XHRcdFx0XHRkZWZhdWx0V2lkdGg6IHdpbldpZHRoLFxuXHRcdFx0XHRcdGRlZmF1bHRIZWlnaHQ6IGZvdW5kTW9uaXRvclxuXHRcdFx0XHRcdFx0PyBmb3VuZE1vbml0b3IuYXZhaWxhYmxlUmVjdC5ib3R0b20gLSBmb3VuZE1vbml0b3IuYXZhaWxhYmxlUmVjdC50b3Bcblx0XHRcdFx0XHRcdDogdW5kZWZpbmVkLFxuXHRcdFx0XHRcdHVybDogXCJodHRwOi8vbG9jYWxob3N0OjUwNTAvdmlld3MvZXhjZWwuaHRtbFwiLFxuXHRcdFx0XHRcdGZyYW1lOiBmYWxzZSxcblx0XHRcdFx0XHRhdXRvU2hvdzogdHJ1ZSxcblx0XHRcdFx0XHRhbHdheXNPblRvcDogdHJ1ZSxcblx0XHRcdFx0XHRyZXNpemFibGU6IGZhbHNlLFxuXHRcdFx0XHRcdHBlcm1pc3Npb25zOiB7XG5cdFx0XHRcdFx0XHRTeXN0ZW06IHtcblx0XHRcdFx0XHRcdFx0bGF1bmNoRXh0ZXJuYWxQcm9jZXNzOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRkb3dubG9hZEFzc2V0OiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRvcGVuVXJsV2l0aEJyb3dzZXI6IHtcblx0XHRcdFx0XHRcdFx0XHRlbmFibGVkOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdHByb3RvY29sczogW1wibWFpbHRvXCJdXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0d2luID0gYXdhaXQgZmluLldpbmRvdy5jcmVhdGUod2luT3B0aW9uKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHdpbikge1xuXHRcdFx0YXdhaXQgd2luLmhpZGUoKTtcblx0XHR9XG5cblx0XHR2aXNpYmxlID0gIXZpc2libGU7XG5cdH0pO1xufVxuXG4vKipcbiAqIElzIHRoZSBwb2ludCBpbnNpZGUgdGhlIHJlY3RhbmdsZS5cbiAqIEBwYXJhbSByZWN0IFRoZSByZWN0YW5nbGUgdG8gdGVzdC5cbiAqIEBwYXJhbSByZWN0LmxlZnQgVGhlIHJlY3RhbmdsZSBsZWZ0IHBvc2l0aW9uLlxuICogQHBhcmFtIHJlY3QudG9wIFRoZSByZWN0YW5nbGUgdG9wIHBvc2l0aW9uLlxuICogQHBhcmFtIHJlY3QucmlnaHQgVGhlIHJlY3RhbmdsZSByaWdodCBwb3NpdGlvbi5cbiAqIEBwYXJhbSByZWN0LmJvdHRvbSBUaGUgcmVjdGFuZ2xlIGJvdHRvbSBwb3NpdGlvbi5cbiAqIEBwYXJhbSBwdCBUaGUgcG9pbnQgdG8gY2hlY2suXG4gKiBAcGFyYW0gcHQueCBUaGUgcG9pbnQgeCBwb3NpdGlvbi5cbiAqIEBwYXJhbSBwdC55IFRoZSBwb2ludCB5IHBvc2l0aW9uLlxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgcG9pbnQgaXMgaW4gdGhlIHJlY3QuXG4gKi9cbmZ1bmN0aW9uIHBvaW50SW5SZWN0KFxuXHRyZWN0OiB7IGxlZnQ6IG51bWJlcjsgdG9wOiBudW1iZXI7IHJpZ2h0OiBudW1iZXI7IGJvdHRvbTogbnVtYmVyIH0sXG5cdHB0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbik6IGJvb2xlYW4ge1xuXHRyZXR1cm4gcHQueCA+IHJlY3QubGVmdCAmJiBwdC54IDwgcmVjdC5yaWdodCAmJiBwdC55ID4gcmVjdC50b3AgJiYgcHQueSA8IHJlY3QuYm90dG9tO1xufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==