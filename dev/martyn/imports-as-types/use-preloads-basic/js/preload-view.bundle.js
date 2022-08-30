/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
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
async function initViewPreload() {
    console.log("View preload loaded.");
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC12aWV3LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQUksTUFBTSxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUU7SUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQywwREFBMEQsQ0FBQyxDQUFDO0NBQ3hFO0tBQU0sSUFBSSxRQUFRLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBRTtJQUM5QyxlQUFlLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDLENBQUM7Q0FDbEM7S0FBTTtJQUNOLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDMUMsTUFBTSxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztDQUNIO0FBRUQsS0FBSyxVQUFVLGVBQWU7SUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQ3JDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2UtcHJlbG9hZHMtaGVsbG8td29ybGQvLi9jbGllbnQvc3JjL3ByZWxvYWQtdmlldy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpZiAod2luZG93ICE9PSB3aW5kb3cudG9wKSB7XG5cdGNvbnNvbGUubG9nKFwiV2UgZG9uJ3Qgd2FudCB0byBsb2FkIGV4ZWN1dGUgd2hlbiBydW5uaW5nIGluIGFuIGlmcmFtZS5cIik7XG59IGVsc2UgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIikge1xuXHRpbml0Vmlld1ByZWxvYWQoKS5jYXRjaCgoKSA9PiB7fSk7XG59IGVsc2Uge1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdGF3YWl0IGluaXRWaWV3UHJlbG9hZCgpO1xuXHR9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5pdFZpZXdQcmVsb2FkKCkge1xuXHRjb25zb2xlLmxvZyhcIlZpZXcgcHJlbG9hZCBsb2FkZWQuXCIpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9