/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./client/src/preload-view.ts ***!
  \************************************/

if (window !== window.top) {
    console.log("We don't want to load execute when running in an iframe.");
}
else if (document.readyState === "complete") {
    initViewPreload().catch(() => { });
}
else {
    window.addEventListener("load", async () => {
        await initViewPreload();
    });
}
/**
 * Initialize the view preload.
 */
async function initViewPreload() {
    console.log("View preload loaded.");
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC12aWV3LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsSUFBSSxNQUFNLEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRTtJQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7Q0FDeEU7S0FBTSxJQUFJLFFBQVEsQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFO0lBQzlDLGVBQWUsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUMsQ0FBQztDQUNsQztLQUFNO0lBQ04sTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxLQUFLLElBQUksRUFBRTtRQUMxQyxNQUFNLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0NBQ0g7QUFFRDs7R0FFRztBQUNILEtBQUssVUFBVSxlQUFlO0lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUNyQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlLXByZWxvYWRzLWhlbGxvLXdvcmxkLy4vY2xpZW50L3NyYy9wcmVsb2FkLXZpZXcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaWYgKHdpbmRvdyAhPT0gd2luZG93LnRvcCkge1xuXHRjb25zb2xlLmxvZyhcIldlIGRvbid0IHdhbnQgdG8gbG9hZCBleGVjdXRlIHdoZW4gcnVubmluZyBpbiBhbiBpZnJhbWUuXCIpO1xufSBlbHNlIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcblx0aW5pdFZpZXdQcmVsb2FkKCkuY2F0Y2goKCkgPT4ge30pO1xufSBlbHNlIHtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGFzeW5jICgpID0+IHtcblx0XHRhd2FpdCBpbml0Vmlld1ByZWxvYWQoKTtcblx0fSk7XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgdmlldyBwcmVsb2FkLlxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0Vmlld1ByZWxvYWQoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnNvbGUubG9nKFwiVmlldyBwcmVsb2FkIGxvYWRlZC5cIik7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=