/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC13aW5kb3cuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUksTUFBTSxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7QUFDekUsQ0FBQztLQUFNLElBQUksUUFBUSxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUUsQ0FBQztJQUMvQyxpQkFBaUIsRUFBRSxDQUFDO0FBQ3JCLENBQUM7S0FBTSxDQUFDO0lBQ1AsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7UUFDcEMsaUJBQWlCLEVBQUUsQ0FBQztJQUNyQixDQUFDLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsaUJBQWlCO0lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUN2QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlLXByZWxvYWRzLWhlbGxvLXdvcmxkLy4vY2xpZW50L3NyYy9wcmVsb2FkLXdpbmRvdy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpZiAod2luZG93ICE9PSB3aW5kb3cudG9wKSB7XG5cdGNvbnNvbGUubG9nKFwiV2UgZG9uJ3Qgd2FudCB0byBsb2FkIGV4ZWN1dGUgd2hlbiBydW5uaW5nIGluIGFuIGlmcmFtZS5cIik7XG59IGVsc2UgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIikge1xuXHRpbml0V2luZG93UHJlbG9hZCgpO1xufSBlbHNlIHtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcblx0XHRpbml0V2luZG93UHJlbG9hZCgpO1xuXHR9KTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSB3aW5kb3cgcHJlbG9hZC5cbiAqL1xuZnVuY3Rpb24gaW5pdFdpbmRvd1ByZWxvYWQoKTogdm9pZCB7XG5cdGNvbnNvbGUubG9nKFwiV2luZG93IHByZWxvYWQgbG9hZGVkLlwiKTtcbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=