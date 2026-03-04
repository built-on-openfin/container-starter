/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************************!*\
  !*** ./client/src/provider.ts ***!
  \********************************/

/**
 * When system shutdown runs, it logs "Shutdown handler ran" then calls proceed().
 * If closing the app does not write that message to the log, the handler is not being called.
 */
fin.System.registerShutdownHandler((shutdownEvent) => {
    fin.System.log("info", "Shutdown handler ran").catch(() => { });
    shutdownEvent.proceed();
}).catch((err) => console.error("Failed to register shutdown handler:", err));
fin.Platform.init({}).catch((error) => console.error(error));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7R0FHRztBQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxhQUFhLEVBQUUsRUFBRTtJQUNwRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsc0JBQXNCLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0QsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3pCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxzQ0FBc0MsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBRTlFLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlLWdyYWNlZnVsLXNodXRkb3duLy4vY2xpZW50L3NyYy9wcm92aWRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdoZW4gc3lzdGVtIHNodXRkb3duIHJ1bnMsIGl0IGxvZ3MgXCJTaHV0ZG93biBoYW5kbGVyIHJhblwiIHRoZW4gY2FsbHMgcHJvY2VlZCgpLlxuICogSWYgY2xvc2luZyB0aGUgYXBwIGRvZXMgbm90IHdyaXRlIHRoYXQgbWVzc2FnZSB0byB0aGUgbG9nLCB0aGUgaGFuZGxlciBpcyBub3QgYmVpbmcgY2FsbGVkLlxuICovXG5maW4uU3lzdGVtLnJlZ2lzdGVyU2h1dGRvd25IYW5kbGVyKChzaHV0ZG93bkV2ZW50KSA9PiB7XG5cdGZpbi5TeXN0ZW0ubG9nKFwiaW5mb1wiLCBcIlNodXRkb3duIGhhbmRsZXIgcmFuXCIpLmNhdGNoKCgpID0+IHt9KTtcblx0c2h1dGRvd25FdmVudC5wcm9jZWVkKCk7XG59KS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHJlZ2lzdGVyIHNodXRkb3duIGhhbmRsZXI6XCIsIGVycikpO1xuXG5maW4uUGxhdGZvcm0uaW5pdCh7fSkuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9