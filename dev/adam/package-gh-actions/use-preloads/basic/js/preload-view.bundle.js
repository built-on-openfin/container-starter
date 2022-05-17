/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./client/src/preload-view.ts ***!
  \************************************/
if (window !== window.top) {
    console.log("We don't want to load execute when running in an iframe.");
}
else {
    function initViewPreload() {
        console.log("View preload loaded.");
    }
    if (document.readyState === "complete") {
        initViewPreload();
    }
    else {
        window.addEventListener('load', () => {
            initViewPreload();
        });
    }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC12aWV3LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQUksTUFBTSxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUU7SUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQywwREFBMEQsQ0FBQyxDQUFDO0NBQzNFO0tBQU07SUFDSCxTQUFTLGVBQWU7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxJQUFHLFFBQVEsQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFDO1FBQ2xDLGVBQWUsRUFBRSxDQUFDO0tBQ3JCO1NBQU07UUFDSCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNqQyxlQUFlLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztLQUNOO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2UtcHJlbG9hZHMtaGVsbG8td29ybGQvLi9jbGllbnQvc3JjL3ByZWxvYWQtdmlldy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpZiAod2luZG93ICE9PSB3aW5kb3cudG9wKSB7XG4gICAgY29uc29sZS5sb2coXCJXZSBkb24ndCB3YW50IHRvIGxvYWQgZXhlY3V0ZSB3aGVuIHJ1bm5pbmcgaW4gYW4gaWZyYW1lLlwiKTsgICBcbn0gZWxzZSB7XG4gICAgZnVuY3Rpb24gaW5pdFZpZXdQcmVsb2FkKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlZpZXcgcHJlbG9hZCBsb2FkZWQuXCIpO1xuICAgIH1cbiAgICBpZihkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpe1xuICAgICAgICBpbml0Vmlld1ByZWxvYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgIGluaXRWaWV3UHJlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9