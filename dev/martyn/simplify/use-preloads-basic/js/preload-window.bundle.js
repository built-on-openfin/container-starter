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
function initWindowPreload() {
    console.log("Window preload loaded.");
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC13aW5kb3cuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFJLE1BQU0sS0FBSyxNQUFNLENBQUMsR0FBRyxFQUFFO0lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMERBQTBELENBQUMsQ0FBQztDQUN4RTtLQUFNLElBQUksUUFBUSxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUU7SUFDOUMsaUJBQWlCLEVBQUUsQ0FBQztDQUNwQjtLQUFNO0lBQ04sTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7UUFDcEMsaUJBQWlCLEVBQUUsQ0FBQztJQUNyQixDQUFDLENBQUMsQ0FBQztDQUNIO0FBRUQsU0FBUyxpQkFBaUI7SUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQ3ZDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2UtcHJlbG9hZHMtaGVsbG8td29ybGQvLi9jbGllbnQvc3JjL3ByZWxvYWQtd2luZG93LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImlmICh3aW5kb3cgIT09IHdpbmRvdy50b3ApIHtcblx0Y29uc29sZS5sb2coXCJXZSBkb24ndCB3YW50IHRvIGxvYWQgZXhlY3V0ZSB3aGVuIHJ1bm5pbmcgaW4gYW4gaWZyYW1lLlwiKTtcbn0gZWxzZSBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKSB7XG5cdGluaXRXaW5kb3dQcmVsb2FkKCk7XG59IGVsc2Uge1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuXHRcdGluaXRXaW5kb3dQcmVsb2FkKCk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBpbml0V2luZG93UHJlbG9hZCgpOiB2b2lkIHtcblx0Y29uc29sZS5sb2coXCJXaW5kb3cgcHJlbG9hZCBsb2FkZWQuXCIpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9