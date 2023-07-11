/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./client/src/provider.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
window.addEventListener("DOMContentLoaded", async () => {
    const platform = fin.Platform.getCurrentSync();
    await platform.once("platform-api-ready", async () => init());
});
fin.Platform.init().catch(() => { });
async function init() {
    console.log("Platform Init");
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7OztBQ0pBLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLElBQUksRUFBRTtJQUN0RCxNQUFNLFFBQVEsR0FBcUIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNqRSxNQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQy9ELENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDLENBQUM7QUFFcEMsS0FBSyxVQUFVLElBQUk7SUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM5QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW50ZWdyYXRpb24tZXhjZWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRpb24tZXhjZWwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9pbnRlZ3JhdGlvbi1leGNlbC8uL2NsaWVudC9zcmMvcHJvdmlkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCB7fTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcblx0Y29uc3QgcGxhdGZvcm06IE9wZW5GaW4uUGxhdGZvcm0gPSBmaW4uUGxhdGZvcm0uZ2V0Q3VycmVudFN5bmMoKTtcblx0YXdhaXQgcGxhdGZvcm0ub25jZShcInBsYXRmb3JtLWFwaS1yZWFkeVwiLCBhc3luYyAoKSA9PiBpbml0KCkpO1xufSk7XG5cbmZpbi5QbGF0Zm9ybS5pbml0KCkuY2F0Y2goKCkgPT4ge30pO1xuXG5hc3luYyBmdW5jdGlvbiBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zb2xlLmxvZyhcIlBsYXRmb3JtIEluaXRcIik7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=