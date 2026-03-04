/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************************!*\
  !*** ./client/src/provider.ts ***!
  \********************************/

/**
 * When system shutdown runs, it logs "Shutdown handler ran" then calls proceed().
 * We await the log so shutdown doesn't proceed before the message is written.
 */
fin.System.registerShutdownHandler(async (shutdownEvent) => {
    await fin.System.log("info", "Shutdown handler ran").catch(() => { });
    shutdownEvent.proceed();
}).catch((err) => console.error("Failed to register shutdown handler:", err));
fin.Platform.init({}).catch((error) => console.error(error));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7R0FHRztBQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsS0FBSyxFQUFFLGFBQWEsRUFBRSxFQUFFO0lBQzFELE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLHNCQUFzQixDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN6QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsc0NBQXNDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUU5RSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZS1ncmFjZWZ1bC1zaHV0ZG93bi8uL2NsaWVudC9zcmMvcHJvdmlkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXaGVuIHN5c3RlbSBzaHV0ZG93biBydW5zLCBpdCBsb2dzIFwiU2h1dGRvd24gaGFuZGxlciByYW5cIiB0aGVuIGNhbGxzIHByb2NlZWQoKS5cbiAqIFdlIGF3YWl0IHRoZSBsb2cgc28gc2h1dGRvd24gZG9lc24ndCBwcm9jZWVkIGJlZm9yZSB0aGUgbWVzc2FnZSBpcyB3cml0dGVuLlxuICovXG5maW4uU3lzdGVtLnJlZ2lzdGVyU2h1dGRvd25IYW5kbGVyKGFzeW5jIChzaHV0ZG93bkV2ZW50KSA9PiB7XG5cdGF3YWl0IGZpbi5TeXN0ZW0ubG9nKFwiaW5mb1wiLCBcIlNodXRkb3duIGhhbmRsZXIgcmFuXCIpLmNhdGNoKCgpID0+IHt9KTtcblx0c2h1dGRvd25FdmVudC5wcm9jZWVkKCk7XG59KS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHJlZ2lzdGVyIHNodXRkb3duIGhhbmRsZXI6XCIsIGVycikpO1xuXG5maW4uUGxhdGZvcm0uaW5pdCh7fSkuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9