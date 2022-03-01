/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./client/src/preload-window.ts ***!
  \**************************************/
if (window !== window.top) {
    console.log("We don't want to load execute when running in an iframe.");
}
else {
    function initWindowPreload() {
        console.log("Window preload loaded.");
    }
    if (document.readyState === "complete") {
        initWindowPreload();
    }
    else {
        window.addEventListener('load', () => {
            initWindowPreload();
        });
    }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC13aW5kb3cuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBSSxNQUFNLEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRTtJQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7Q0FDM0U7S0FBTTtJQUNILFNBQVMsaUJBQWlCO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ0QsSUFBRyxRQUFRLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBQztRQUNsQyxpQkFBaUIsRUFBRSxDQUFDO0tBQ3ZCO1NBQU07UUFDSCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNqQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0tBQ047Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZS1wcmVsb2Fkcy1oZWxsby13b3JsZC8uL2NsaWVudC9zcmMvcHJlbG9hZC13aW5kb3cudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaWYgKHdpbmRvdyAhPT0gd2luZG93LnRvcCkge1xyXG4gICAgY29uc29sZS5sb2coXCJXZSBkb24ndCB3YW50IHRvIGxvYWQgZXhlY3V0ZSB3aGVuIHJ1bm5pbmcgaW4gYW4gaWZyYW1lLlwiKTsgICBcclxufSBlbHNlIHtcclxuICAgIGZ1bmN0aW9uIGluaXRXaW5kb3dQcmVsb2FkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiV2luZG93IHByZWxvYWQgbG9hZGVkLlwiKTtcclxuICAgIH1cclxuICAgIGlmKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIil7XHJcbiAgICAgICAgaW5pdFdpbmRvd1ByZWxvYWQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGluaXRXaW5kb3dQcmVsb2FkKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=