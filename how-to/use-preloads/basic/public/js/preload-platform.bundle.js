/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************************!*\
  !*** ./client/src/preload-platform.ts ***!
  \****************************************/
if (window !== window.top) {
    console.log("We don't want to load execute when running in an iframe.");
}
else {
    function initPlatformPreload() {
        console.log("Platform preload loaded.");
    }
    if (document.readyState === "complete") {
        initPlatformPreload();
    }
    else {
        window.addEventListener('load', () => {
            initPlatformPreload();
        });
    }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC1wbGF0Zm9ybS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFJLE1BQU0sS0FBSyxNQUFNLENBQUMsR0FBRyxFQUFFO0lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMERBQTBELENBQUMsQ0FBQztDQUMzRTtLQUFNO0lBQ0gsU0FBUyxtQkFBbUI7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCxJQUFHLFFBQVEsQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFDO1FBQ2xDLG1CQUFtQixFQUFFLENBQUM7S0FDekI7U0FBTTtRQUNILE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO1lBQ2pDLG1CQUFtQixFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7S0FDTjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlLXByZWxvYWRzLWhlbGxvLXdvcmxkLy4vY2xpZW50L3NyYy9wcmVsb2FkLXBsYXRmb3JtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImlmICh3aW5kb3cgIT09IHdpbmRvdy50b3ApIHtcclxuICAgIGNvbnNvbGUubG9nKFwiV2UgZG9uJ3Qgd2FudCB0byBsb2FkIGV4ZWN1dGUgd2hlbiBydW5uaW5nIGluIGFuIGlmcmFtZS5cIik7ICAgXHJcbn0gZWxzZSB7XHJcbiAgICBmdW5jdGlvbiBpbml0UGxhdGZvcm1QcmVsb2FkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxhdGZvcm0gcHJlbG9hZCBsb2FkZWQuXCIpO1xyXG4gICAgfVxyXG4gICAgaWYoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKXtcclxuICAgICAgICBpbml0UGxhdGZvcm1QcmVsb2FkKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpbml0UGxhdGZvcm1QcmVsb2FkKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=