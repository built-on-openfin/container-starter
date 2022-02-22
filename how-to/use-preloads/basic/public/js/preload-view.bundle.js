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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC12aWV3LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQUksTUFBTSxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUU7SUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQywwREFBMEQsQ0FBQyxDQUFDO0NBQzNFO0tBQU07SUFDSCxTQUFTLGVBQWU7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxJQUFHLFFBQVEsQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFDO1FBQ2xDLGVBQWUsRUFBRSxDQUFDO0tBQ3JCO1NBQU07UUFDSCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNqQyxlQUFlLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztLQUNOO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2UtcHJlbG9hZHMtaGVsbG8td29ybGQvLi9jbGllbnQvc3JjL3ByZWxvYWQtdmlldy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpZiAod2luZG93ICE9PSB3aW5kb3cudG9wKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIldlIGRvbid0IHdhbnQgdG8gbG9hZCBleGVjdXRlIHdoZW4gcnVubmluZyBpbiBhbiBpZnJhbWUuXCIpOyAgIFxyXG59IGVsc2Uge1xyXG4gICAgZnVuY3Rpb24gaW5pdFZpZXdQcmVsb2FkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVmlldyBwcmVsb2FkIGxvYWRlZC5cIik7XHJcbiAgICB9XHJcbiAgICBpZihkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpe1xyXG4gICAgICAgIGluaXRWaWV3UHJlbG9hZCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgICAgICAgaW5pdFZpZXdQcmVsb2FkKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=