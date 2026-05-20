/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!************************************!*\
  !*** ./client/src/preload-view.ts ***!
  \************************************/

if (window !== window.top) {
    console.log("We don't want to load execute when running in an iframe.");
}
else if (document.readyState === "complete") {
    initViewPreload().catch(() => { });
}
else {
    window.addEventListener("load", async () => {
        await initViewPreload();
    });
}
/**
 * Initialize the view preload.
 */
async function initViewPreload() {
    console.log("View preload loaded.");
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC12aWV3LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFJLE1BQU0sS0FBSyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQywwREFBMEQsQ0FBQyxDQUFDO0FBQ3pFLENBQUM7S0FBTSxJQUFJLFFBQVEsQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFLENBQUM7SUFDL0MsZUFBZSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ25DLENBQUM7S0FBTSxDQUFDO0lBQ1AsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxLQUFLLElBQUksRUFBRTtRQUMxQyxNQUFNLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVEOztHQUVHO0FBQ0gsS0FBSyxVQUFVLGVBQWU7SUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQ3JDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2UtcHJlbG9hZHMtaGVsbG8td29ybGQvLi9jbGllbnQvc3JjL3ByZWxvYWQtdmlldy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpZiAod2luZG93ICE9PSB3aW5kb3cudG9wKSB7XG5cdGNvbnNvbGUubG9nKFwiV2UgZG9uJ3Qgd2FudCB0byBsb2FkIGV4ZWN1dGUgd2hlbiBydW5uaW5nIGluIGFuIGlmcmFtZS5cIik7XG59IGVsc2UgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIikge1xuXHRpbml0Vmlld1ByZWxvYWQoKS5jYXRjaCgoKSA9PiB7fSk7XG59IGVsc2Uge1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdGF3YWl0IGluaXRWaWV3UHJlbG9hZCgpO1xuXHR9KTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSB2aWV3IHByZWxvYWQuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXRWaWV3UHJlbG9hZCgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc29sZS5sb2coXCJWaWV3IHByZWxvYWQgbG9hZGVkLlwiKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==