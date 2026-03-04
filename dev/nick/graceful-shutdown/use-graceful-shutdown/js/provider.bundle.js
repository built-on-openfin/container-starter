/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************************!*\
  !*** ./client/src/provider.ts ***!
  \********************************/

/**
 * Platform provider: inits the platform and registers the shutdown handler.
 * The handler runs in the provider context. When system shutdown occurs it logs
 * to the OpenFin log file so you can verify (e.g. check debug.log after closing the app).
 */
fin.System.registerShutdownHandler((shutdownEvent) => {
    fin.System.log("info", "Shutdown handler ran: cleanup before exit").catch(() => { });
    shutdownEvent.proceed();
}).catch((err) => console.error("Failed to register shutdown handler:", err));
fin.Platform.init({}).catch((error) => console.error(error));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0dBSUc7QUFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLENBQUMsYUFBYSxFQUFFLEVBQUU7SUFDcEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLDJDQUEyQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BGLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN6QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsc0NBQXNDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUU5RSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZS1ncmFjZWZ1bC1zaHV0ZG93bi8uL2NsaWVudC9zcmMvcHJvdmlkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBQbGF0Zm9ybSBwcm92aWRlcjogaW5pdHMgdGhlIHBsYXRmb3JtIGFuZCByZWdpc3RlcnMgdGhlIHNodXRkb3duIGhhbmRsZXIuXG4gKiBUaGUgaGFuZGxlciBydW5zIGluIHRoZSBwcm92aWRlciBjb250ZXh0LiBXaGVuIHN5c3RlbSBzaHV0ZG93biBvY2N1cnMgaXQgbG9nc1xuICogdG8gdGhlIE9wZW5GaW4gbG9nIGZpbGUgc28geW91IGNhbiB2ZXJpZnkgKGUuZy4gY2hlY2sgZGVidWcubG9nIGFmdGVyIGNsb3NpbmcgdGhlIGFwcCkuXG4gKi9cbmZpbi5TeXN0ZW0ucmVnaXN0ZXJTaHV0ZG93bkhhbmRsZXIoKHNodXRkb3duRXZlbnQpID0+IHtcblx0ZmluLlN5c3RlbS5sb2coXCJpbmZvXCIsIFwiU2h1dGRvd24gaGFuZGxlciByYW46IGNsZWFudXAgYmVmb3JlIGV4aXRcIikuY2F0Y2goKCkgPT4ge30pO1xuXHRzaHV0ZG93bkV2ZW50LnByb2NlZWQoKTtcbn0pLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gcmVnaXN0ZXIgc2h1dGRvd24gaGFuZGxlcjpcIiwgZXJyKSk7XG5cbmZpbi5QbGF0Zm9ybS5pbml0KHt9KS5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=