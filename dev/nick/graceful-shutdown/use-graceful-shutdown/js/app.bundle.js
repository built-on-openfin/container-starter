/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!***************************!*\
  !*** ./client/src/app.ts ***!
  \***************************/

document.addEventListener("DOMContentLoaded", () => {
    initDom().catch((error) => console.error(error));
});
/**
 * Initialize the DOM. The shutdown handler is registered in the platform provider (provider.html).
 */
async function initDom() {
    const statusEl = document.querySelector("#status");
    if (statusEl) {
        statusEl.textContent =
            "Shutdown handler registered in provider. Close the window, then check the OpenFin log for \"Graceful shutdown: before-unload ran (window close)\".";
        statusEl.classList.add("status-ok");
    }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO0lBQ2xELE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ2xELENBQUMsQ0FBQyxDQUFDO0FBRUg7O0dBRUc7QUFDSCxLQUFLLFVBQVUsT0FBTztJQUNyQixNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFjLFNBQVMsQ0FBQyxDQUFDO0lBQ2hFLElBQUksUUFBUSxFQUFFLENBQUM7UUFDZCxRQUFRLENBQUMsV0FBVztZQUNuQixvSkFBb0osQ0FBQztRQUN0SixRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZS1ncmFjZWZ1bC1zaHV0ZG93bi8uL2NsaWVudC9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblx0aW5pdERvbSgpLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xufSk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgRE9NLiBUaGUgc2h1dGRvd24gaGFuZGxlciBpcyByZWdpc3RlcmVkIGluIHRoZSBwbGF0Zm9ybSBwcm92aWRlciAocHJvdmlkZXIuaHRtbCkuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXREb20oKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IHN0YXR1c0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjc3RhdHVzXCIpO1xuXHRpZiAoc3RhdHVzRWwpIHtcblx0XHRzdGF0dXNFbC50ZXh0Q29udGVudCA9XG5cdFx0XHRcIlNodXRkb3duIGhhbmRsZXIgcmVnaXN0ZXJlZCBpbiBwcm92aWRlci4gQ2xvc2UgdGhlIHdpbmRvdywgdGhlbiBjaGVjayB0aGUgT3BlbkZpbiBsb2cgZm9yIFxcXCJHcmFjZWZ1bCBzaHV0ZG93bjogYmVmb3JlLXVubG9hZCByYW4gKHdpbmRvdyBjbG9zZSlcXFwiLlwiO1xuXHRcdHN0YXR1c0VsLmNsYXNzTGlzdC5hZGQoXCJzdGF0dXMtb2tcIik7XG5cdH1cbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=