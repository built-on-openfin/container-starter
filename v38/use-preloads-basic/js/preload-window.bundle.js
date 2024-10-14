/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./client/src/preload-window.ts ***!
  \**************************************/

if (window !== window.top) {
    console.log("We don't want to load execute when running in an iframe.");
}
else if (document.readyState === "complete") {
    initWindowPreload();
}
else {
    window.addEventListener("load", () => {
        initWindowPreload();
    });
}
/**
 * Initialize the window preload.
 */
function initWindowPreload() {
    console.log("Window preload loaded.");
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC13aW5kb3cuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFJLE1BQU0sS0FBSyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQywwREFBMEQsQ0FBQyxDQUFDO0FBQ3pFLENBQUM7S0FBTSxJQUFJLFFBQVEsQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFLENBQUM7SUFDL0MsaUJBQWlCLEVBQUUsQ0FBQztBQUNyQixDQUFDO0tBQU0sQ0FBQztJQUNQLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO1FBQ3BDLGlCQUFpQixFQUFFLENBQUM7SUFDckIsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLGlCQUFpQjtJQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFDdkMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZS1wcmVsb2Fkcy1oZWxsby13b3JsZC8uL2NsaWVudC9zcmMvcHJlbG9hZC13aW5kb3cudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaWYgKHdpbmRvdyAhPT0gd2luZG93LnRvcCkge1xuXHRjb25zb2xlLmxvZyhcIldlIGRvbid0IHdhbnQgdG8gbG9hZCBleGVjdXRlIHdoZW4gcnVubmluZyBpbiBhbiBpZnJhbWUuXCIpO1xufSBlbHNlIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcblx0aW5pdFdpbmRvd1ByZWxvYWQoKTtcbn0gZWxzZSB7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG5cdFx0aW5pdFdpbmRvd1ByZWxvYWQoKTtcblx0fSk7XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgd2luZG93IHByZWxvYWQuXG4gKi9cbmZ1bmN0aW9uIGluaXRXaW5kb3dQcmVsb2FkKCk6IHZvaWQge1xuXHRjb25zb2xlLmxvZyhcIldpbmRvdyBwcmVsb2FkIGxvYWRlZC5cIik7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=