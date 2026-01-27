/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!****************************************!*\
  !*** ./client/src/preload-platform.ts ***!
  \****************************************/

if (window !== window.top) {
    console.log("We don't want to load execute when running in an iframe.");
}
else if (document.readyState === "complete") {
    initPlatformPreload();
}
else {
    window.addEventListener("load", () => {
        initPlatformPreload();
    });
}
/**
 * Initialize the platform preload.
 */
function initPlatformPreload() {
    console.log("Platform preload loaded.");
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC1wbGF0Zm9ybS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBSSxNQUFNLEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMERBQTBELENBQUMsQ0FBQztBQUN6RSxDQUFDO0tBQU0sSUFBSSxRQUFRLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBRSxDQUFDO0lBQy9DLG1CQUFtQixFQUFFLENBQUM7QUFDdkIsQ0FBQztLQUFNLENBQUM7SUFDUCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtRQUNwQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxtQkFBbUI7SUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQ3pDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2UtcHJlbG9hZHMtaGVsbG8td29ybGQvLi9jbGllbnQvc3JjL3ByZWxvYWQtcGxhdGZvcm0udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaWYgKHdpbmRvdyAhPT0gd2luZG93LnRvcCkge1xuXHRjb25zb2xlLmxvZyhcIldlIGRvbid0IHdhbnQgdG8gbG9hZCBleGVjdXRlIHdoZW4gcnVubmluZyBpbiBhbiBpZnJhbWUuXCIpO1xufSBlbHNlIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcblx0aW5pdFBsYXRmb3JtUHJlbG9hZCgpO1xufSBlbHNlIHtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcblx0XHRpbml0UGxhdGZvcm1QcmVsb2FkKCk7XG5cdH0pO1xufVxuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIHBsYXRmb3JtIHByZWxvYWQuXG4gKi9cbmZ1bmN0aW9uIGluaXRQbGF0Zm9ybVByZWxvYWQoKTogdm9pZCB7XG5cdGNvbnNvbGUubG9nKFwiUGxhdGZvcm0gcHJlbG9hZCBsb2FkZWQuXCIpO1xufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==