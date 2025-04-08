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
document.addEventListener("DOMContentLoaded", async () => {
    await fin.Platform.init({
        overrideCallback: async (Provider) => {
            /**
             * Override the provider class.
             */
            class Override extends Provider {
                // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
                // eslint-disable-next-line @typescript-eslint/explicit-function-return-type, jsdoc/require-jsdoc
                async createWindow(options, callerIdentity) {
                    console.log("createWindow called", options, callerIdentity);
                    // default behavior for all other creation reasons
                    const win = await super.createWindow(options, callerIdentity);
                    console.log("createWindow completed", win.identity.name);
                    return win;
                }
            }
            return new Override();
        }
    });
    const platform = fin.Platform.getCurrentSync();
    const launchOneBtn = document.querySelector("#launch-one");
    const launchTenBtn = document.querySelector("#launch-ten");
    const launchTwentyBtn = document.querySelector("#launch-twenty");
    const baseUrl = "https://built-on-openfin.github.io/container-starter/dev/john/update-snapshot-example/use-platform-apply-snapshot";
    const url = document.querySelector("#url");
    await platform.on("window-created", async (event) => {
        console.log("Window created", event);
    });
    await platform.on("window-did-start-loading", async (event) => {
        console.log("Window did start loading", event);
    });
    await platform.on("window-did-finish-load", async (event) => {
        console.log("Window did finish load", event);
    });
    await platform.on("window-end-load", async (event) => {
        console.log("Window end load", event);
    });
    await platform.on("window-initialized", async (event) => {
        console.log("Window initialized", event);
    });
    await platform.on("window-performance-report", async (event) => {
        console.log("Window performance report", event);
    });
    await platform.on("window-start-load", async (event) => {
        console.log("Window start load", event);
    });
    if (launchOneBtn || launchTenBtn || launchTwentyBtn) {
        launchOneBtn.addEventListener("click", async () => {
            const snapshot = await fetch(`${baseUrl}/common/snapshots/snapshot-one.json`);
            const snapshotJson = await snapshot.text();
            const snapshotString = snapshotJson.replace(/about:blank/g, url.value.trim());
            await platform.applySnapshot(JSON.parse(snapshotString));
        });
        launchTenBtn.addEventListener("click", async () => {
            const snapshot = await fetch(`${baseUrl}/common/snapshots/snapshot-ten.json`);
            const snapshotJson = await snapshot.text();
            const snapshotString = snapshotJson.replace(/about:blank/g, url.value.trim());
            await platform.applySnapshot(JSON.parse(snapshotString));
        });
        launchTwentyBtn.addEventListener("click", async () => {
            const snapshot = await fetch(`${baseUrl}/common/snapshots/snapshot-twenty.json`);
            const snapshotJson = await snapshot.text();
            const snapshotString = snapshotJson.replace(/about:blank/g, url.value.trim());
            await platform.applySnapshot(JSON.parse(snapshotString));
        });
    }
});


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQyxDQUFDO1FBQ0gsZUFBZSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtZQUNwRCxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLE9BQU8sd0NBQXdDLENBQUMsQ0FBQztZQUNqRixNQUFNLFlBQVksR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzQyxNQUFNLGNBQWMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDOUUsTUFBTSxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7QUFDRixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcGx5LXNuYXBzaG90L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FwcGx5LXNuYXBzaG90L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXBwbHktc25hcHNob3QvLi9jbGllbnQvc3JjL3Byb3ZpZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdHlwZSBPcGVuRmluIGZyb20gXCJAb3BlbmZpbi9jb3JlXCI7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XG5cdGF3YWl0IGZpbi5QbGF0Zm9ybS5pbml0KHtcblx0XHRvdmVycmlkZUNhbGxiYWNrOiBhc3luYyAoUHJvdmlkZXIpID0+IHtcblx0XHRcdC8qKlxuXHRcdFx0ICogT3ZlcnJpZGUgdGhlIHByb3ZpZGVyIGNsYXNzLlxuXHRcdFx0ICovXG5cdFx0XHRjbGFzcyBPdmVycmlkZSBleHRlbmRzIFByb3ZpZGVyIHtcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZVxuXG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtZnVuY3Rpb24tcmV0dXJuLXR5cGUsIGpzZG9jL3JlcXVpcmUtanNkb2Ncblx0XHRcdFx0cHVibGljIGFzeW5jIGNyZWF0ZVdpbmRvdyhcblx0XHRcdFx0XHRvcHRpb25zOiBPcGVuRmluLlBsYXRmb3JtV2luZG93Q3JlYXRpb25PcHRpb25zLFxuXHRcdFx0XHRcdGNhbGxlcklkZW50aXR5OiB7IHV1aWQ6IHN0cmluZzsgbmFtZTogc3RyaW5nIH0gfCB1bmRlZmluZWRcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJjcmVhdGVXaW5kb3cgY2FsbGVkXCIsIG9wdGlvbnMsIGNhbGxlcklkZW50aXR5KTtcblx0XHRcdFx0XHQvLyBkZWZhdWx0IGJlaGF2aW9yIGZvciBhbGwgb3RoZXIgY3JlYXRpb24gcmVhc29uc1xuXHRcdFx0XHRcdGNvbnN0IHdpbiA9IGF3YWl0IHN1cGVyLmNyZWF0ZVdpbmRvdyhvcHRpb25zLCBjYWxsZXJJZGVudGl0eSk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJjcmVhdGVXaW5kb3cgY29tcGxldGVkXCIsIHdpbi5pZGVudGl0eS5uYW1lKTtcblx0XHRcdFx0XHRyZXR1cm4gd2luO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbmV3IE92ZXJyaWRlKCk7XG5cdFx0fVxuXHR9KTtcblx0Y29uc3QgcGxhdGZvcm0gPSBmaW4uUGxhdGZvcm0uZ2V0Q3VycmVudFN5bmMoKTtcblxuXHRjb25zdCBsYXVuY2hPbmVCdG46IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsYXVuY2gtb25lXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuXHRjb25zdCBsYXVuY2hUZW5CdG46IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsYXVuY2gtdGVuXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuXHRjb25zdCBsYXVuY2hUd2VudHlCdG46IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsYXVuY2gtdHdlbnR5XCIpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuXHRjb25zdCBiYXNlVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjUwNTBcIjtcblx0Y29uc3QgdXJsOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1cmxcIikgYXMgSFRNTElucHV0RWxlbWVudDtcblx0YXdhaXQgcGxhdGZvcm0ub24oXCJ3aW5kb3ctY3JlYXRlZFwiLCBhc3luYyAoZXZlbnQpID0+IHtcblx0XHRjb25zb2xlLmxvZyhcIldpbmRvdyBjcmVhdGVkXCIsIGV2ZW50KTtcblx0fSk7XG5cdGF3YWl0IHBsYXRmb3JtLm9uKFwid2luZG93LWRpZC1zdGFydC1sb2FkaW5nXCIsIGFzeW5jIChldmVudCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKFwiV2luZG93IGRpZCBzdGFydCBsb2FkaW5nXCIsIGV2ZW50KTtcblx0fSk7XG5cdGF3YWl0IHBsYXRmb3JtLm9uKFwid2luZG93LWRpZC1maW5pc2gtbG9hZFwiLCBhc3luYyAoZXZlbnQpID0+IHtcblx0XHRjb25zb2xlLmxvZyhcIldpbmRvdyBkaWQgZmluaXNoIGxvYWRcIiwgZXZlbnQpO1xuXHR9KTtcblx0YXdhaXQgcGxhdGZvcm0ub24oXCJ3aW5kb3ctZW5kLWxvYWRcIiwgYXN5bmMgKGV2ZW50KSA9PiB7XG5cdFx0Y29uc29sZS5sb2coXCJXaW5kb3cgZW5kIGxvYWRcIiwgZXZlbnQpO1xuXHR9KTtcblx0YXdhaXQgcGxhdGZvcm0ub24oXCJ3aW5kb3ctaW5pdGlhbGl6ZWRcIiwgYXN5bmMgKGV2ZW50KSA9PiB7XG5cdFx0Y29uc29sZS5sb2coXCJXaW5kb3cgaW5pdGlhbGl6ZWRcIiwgZXZlbnQpO1xuXHR9KTtcblx0YXdhaXQgcGxhdGZvcm0ub24oXCJ3aW5kb3ctcGVyZm9ybWFuY2UtcmVwb3J0XCIsIGFzeW5jIChldmVudCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKFwiV2luZG93IHBlcmZvcm1hbmNlIHJlcG9ydFwiLCBldmVudCk7XG5cdH0pO1xuXHRhd2FpdCBwbGF0Zm9ybS5vbihcIndpbmRvdy1zdGFydC1sb2FkXCIsIGFzeW5jIChldmVudCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKFwiV2luZG93IHN0YXJ0IGxvYWRcIiwgZXZlbnQpO1xuXHR9KTtcblxuXHRpZiAobGF1bmNoT25lQnRuIHx8IGxhdW5jaFRlbkJ0biB8fCBsYXVuY2hUd2VudHlCdG4pIHtcblx0XHRsYXVuY2hPbmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vY29tbW9uL3NuYXBzaG90cy9zbmFwc2hvdC1vbmUuanNvbmApO1xuXHRcdFx0Y29uc3Qgc25hcHNob3RKc29uID0gYXdhaXQgc25hcHNob3QudGV4dCgpO1xuXHRcdFx0Y29uc3Qgc25hcHNob3RTdHJpbmcgPSBzbmFwc2hvdEpzb24ucmVwbGFjZSgvYWJvdXQ6YmxhbmsvZywgdXJsLnZhbHVlLnRyaW0oKSk7XG5cdFx0XHRhd2FpdCBwbGF0Zm9ybS5hcHBseVNuYXBzaG90KEpTT04ucGFyc2Uoc25hcHNob3RTdHJpbmcpKTtcblx0XHR9KTtcblx0XHRsYXVuY2hUZW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vY29tbW9uL3NuYXBzaG90cy9zbmFwc2hvdC10ZW4uanNvbmApO1xuXHRcdFx0Y29uc3Qgc25hcHNob3RKc29uID0gYXdhaXQgc25hcHNob3QudGV4dCgpO1xuXHRcdFx0Y29uc3Qgc25hcHNob3RTdHJpbmcgPSBzbmFwc2hvdEpzb24ucmVwbGFjZSgvYWJvdXQ6YmxhbmsvZywgdXJsLnZhbHVlLnRyaW0oKSk7XG5cdFx0XHRhd2FpdCBwbGF0Zm9ybS5hcHBseVNuYXBzaG90KEpTT04ucGFyc2Uoc25hcHNob3RTdHJpbmcpKTtcblx0XHR9KTtcblx0XHRsYXVuY2hUd2VudHlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vY29tbW9uL3NuYXBzaG90cy9zbmFwc2hvdC10d2VudHkuanNvbmApO1xuXHRcdFx0Y29uc3Qgc25hcHNob3RKc29uID0gYXdhaXQgc25hcHNob3QudGV4dCgpO1xuXHRcdFx0Y29uc3Qgc25hcHNob3RTdHJpbmcgPSBzbmFwc2hvdEpzb24ucmVwbGFjZSgvYWJvdXQ6YmxhbmsvZywgdXJsLnZhbHVlLnRyaW0oKSk7XG5cdFx0XHRhd2FpdCBwbGF0Zm9ybS5hcHBseVNuYXBzaG90KEpTT04ucGFyc2Uoc25hcHNob3RTdHJpbmcpKTtcblx0XHR9KTtcblx0fVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=