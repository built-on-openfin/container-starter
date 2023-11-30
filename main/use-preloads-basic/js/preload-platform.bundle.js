/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC1wbGF0Zm9ybS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQUksTUFBTSxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7QUFDekUsQ0FBQztLQUFNLElBQUksUUFBUSxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUUsQ0FBQztJQUMvQyxtQkFBbUIsRUFBRSxDQUFDO0FBQ3ZCLENBQUM7S0FBTSxDQUFDO0lBQ1AsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7UUFDcEMsbUJBQW1CLEVBQUUsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsbUJBQW1CO0lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUN6QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlLXByZWxvYWRzLWhlbGxvLXdvcmxkLy4vY2xpZW50L3NyYy9wcmVsb2FkLXBsYXRmb3JtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImlmICh3aW5kb3cgIT09IHdpbmRvdy50b3ApIHtcblx0Y29uc29sZS5sb2coXCJXZSBkb24ndCB3YW50IHRvIGxvYWQgZXhlY3V0ZSB3aGVuIHJ1bm5pbmcgaW4gYW4gaWZyYW1lLlwiKTtcbn0gZWxzZSBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKSB7XG5cdGluaXRQbGF0Zm9ybVByZWxvYWQoKTtcbn0gZWxzZSB7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG5cdFx0aW5pdFBsYXRmb3JtUHJlbG9hZCgpO1xuXHR9KTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBwbGF0Zm9ybSBwcmVsb2FkLlxuICovXG5mdW5jdGlvbiBpbml0UGxhdGZvcm1QcmVsb2FkKCk6IHZvaWQge1xuXHRjb25zb2xlLmxvZyhcIlBsYXRmb3JtIHByZWxvYWQgbG9hZGVkLlwiKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==