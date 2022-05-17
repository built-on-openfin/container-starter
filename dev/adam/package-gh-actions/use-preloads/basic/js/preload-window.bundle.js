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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC13aW5kb3cuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBSSxNQUFNLEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRTtJQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7Q0FDM0U7S0FBTTtJQUNILFNBQVMsaUJBQWlCO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ0QsSUFBRyxRQUFRLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBQztRQUNsQyxpQkFBaUIsRUFBRSxDQUFDO0tBQ3ZCO1NBQU07UUFDSCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNqQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0tBQ047Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZS1wcmVsb2Fkcy1oZWxsby13b3JsZC8uL2NsaWVudC9zcmMvcHJlbG9hZC13aW5kb3cudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaWYgKHdpbmRvdyAhPT0gd2luZG93LnRvcCkge1xuICAgIGNvbnNvbGUubG9nKFwiV2UgZG9uJ3Qgd2FudCB0byBsb2FkIGV4ZWN1dGUgd2hlbiBydW5uaW5nIGluIGFuIGlmcmFtZS5cIik7ICAgXG59IGVsc2Uge1xuICAgIGZ1bmN0aW9uIGluaXRXaW5kb3dQcmVsb2FkKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIldpbmRvdyBwcmVsb2FkIGxvYWRlZC5cIik7XG4gICAgfVxuICAgIGlmKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIil7XG4gICAgICAgIGluaXRXaW5kb3dQcmVsb2FkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpbml0V2luZG93UHJlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9