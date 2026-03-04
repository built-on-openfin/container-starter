/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!***************************!*\
  !*** ./client/src/app.ts ***!
  \***************************/

document.addEventListener("DOMContentLoaded", () => {
    const statusEl = document.querySelector("#status");
    if (statusEl) {
        statusEl.textContent = "Shutdown handler is registered in the provider. Close the app and check the log.";
        statusEl.classList.add("status-ok");
    }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO0lBQ2xELE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQWMsU0FBUyxDQUFDLENBQUM7SUFDaEUsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUNkLFFBQVEsQ0FBQyxXQUFXLEdBQUcsa0ZBQWtGLENBQUM7UUFDMUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDckMsQ0FBQztBQUNGLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlLWdyYWNlZnVsLXNodXRkb3duLy4vY2xpZW50L3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuXHRjb25zdCBzdGF0dXNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI3N0YXR1c1wiKTtcblx0aWYgKHN0YXR1c0VsKSB7XG5cdFx0c3RhdHVzRWwudGV4dENvbnRlbnQgPSBcIlNodXRkb3duIGhhbmRsZXIgaXMgcmVnaXN0ZXJlZCBpbiB0aGUgcHJvdmlkZXIuIENsb3NlIHRoZSBhcHAgYW5kIGNoZWNrIHRoZSBsb2cuXCI7XG5cdFx0c3RhdHVzRWwuY2xhc3NMaXN0LmFkZChcInN0YXR1cy1va1wiKTtcblx0fVxufSk7XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9