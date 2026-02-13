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
/**
 * Initialize the components.
 */
async function init() {
    // create a channel to receive commands from external apps
    const actionChannel = await fin.InterApplicationBus.Channel.create("platform-command");
    actionChannel.onConnection((identity, payload) => {
        // on connection you can validate the identity and optionally specify that a payload to prove id needs to be passed
        // if you wanted to deny a connection you can throw an exception here
        console.log("Application connecting to action channel:", identity);
        console.log("Payload passed by connecting application:", payload);
    });
    // an example of a command you wish to expose.
    // alternatively you could have a single command function exposed which could have an action type
    actionChannel.register("createView", async (unknownPayload, identity) => {
        const payload = unknownPayload;
        // there would likely be validation and additional logic here.
        const platform = fin.Platform.getCurrentSync();
        let targetWindow;
        let targetView;
        const viewOptions = { target: undefined };
        Object.assign(viewOptions, payload.viewOptions);
        if (payload.target?.window !== undefined) {
            targetWindow = { uuid: fin.me.identity.uuid, name: payload.target.window };
        }
        if (payload.target?.view !== undefined) {
            targetView = { uuid: fin.me.identity.uuid, name: payload.target.view };
        }
        const createdView = await platform.createView(viewOptions, targetWindow, targetView);
        const currentWindow = await createdView.getCurrentWindow();
        if (currentWindow.identity.name === undefined || currentWindow.identity.name === fin.me.identity.uuid) {
            const windowAllocation = new Promise((resolve, reject) => {
                createdView
                    .once("target-changed", async () => {
                    const hostWindow = await createdView.getCurrentWindow();
                    resolve({
                        view: createdView.identity.name,
                        window: hostWindow.identity.name
                    });
                })
                    .catch(() => { });
            });
            return windowAllocation;
        }
        return {
            view: createdView.identity.name,
            window: currentWindow.identity.name
        };
    });
}
fin.Platform.init({
    overrideCallback: async (Provider) => {
        /**
         * Override the provider class.
         */
        class Override extends Provider {
        }
        return new Override();
    }
}).catch(() => { });


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0JBQ2xDLE1BQU0sVUFBVSxHQUFHLE1BQU0sV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUM7b0JBQ3hELE9BQU8sQ0FBQzt3QkFDUCxJQUFJLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJO3dCQUMvQixNQUFNLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJO3FCQUNoQyxDQUFDLENBQUM7Z0JBQ0osQ0FBQyxDQUFDO3FCQUNELEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUMsQ0FBQztZQUNuQixDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8sZ0JBQWdCLENBQUM7UUFDekIsQ0FBQztRQUNELE9BQU87WUFDTixJQUFJLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJO1lBQy9CLE1BQU0sRUFBRSxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUk7U0FDbkMsQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ2pCLGdCQUFnQixFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsRUFBRTtRQUNwQzs7V0FFRztRQUNILE1BQU0sUUFBUyxTQUFRLFFBQVE7U0FBRztRQUNsQyxPQUFPLElBQUksUUFBUSxFQUFFLENBQUM7SUFDdkIsQ0FBQztDQUNELENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2UtY2hhbm5lbC1hcGktaXNzdWUtY29tbWFuZHMtdG8tYS1wbGF0Zm9ybS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91c2UtY2hhbm5lbC1hcGktaXNzdWUtY29tbWFuZHMtdG8tYS1wbGF0Zm9ybS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VzZS1jaGFubmVsLWFwaS1pc3N1ZS1jb21tYW5kcy10by1hLXBsYXRmb3JtLy4vY2xpZW50L3NyYy9wcm92aWRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHR5cGUgT3BlbkZpbiBmcm9tIFwiQG9wZW5maW4vY29yZVwiO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBwbGF0Zm9ybTogT3BlbkZpbi5QbGF0Zm9ybSA9IGZpbi5QbGF0Zm9ybS5nZXRDdXJyZW50U3luYygpO1xuXHRhd2FpdCBwbGF0Zm9ybS5vbmNlKFwicGxhdGZvcm0tYXBpLXJlYWR5XCIsIGFzeW5jICgpID0+IGluaXQoKSk7XG59KTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBjb21wb25lbnRzLlxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xuXHQvLyBjcmVhdGUgYSBjaGFubmVsIHRvIHJlY2VpdmUgY29tbWFuZHMgZnJvbSBleHRlcm5hbCBhcHBzXG5cdGNvbnN0IGFjdGlvbkNoYW5uZWw6IE9wZW5GaW4uQ2hhbm5lbFByb3ZpZGVyID1cblx0XHRhd2FpdCBmaW4uSW50ZXJBcHBsaWNhdGlvbkJ1cy5DaGFubmVsLmNyZWF0ZShcInBsYXRmb3JtLWNvbW1hbmRcIik7XG5cblx0YWN0aW9uQ2hhbm5lbC5vbkNvbm5lY3Rpb24oKGlkZW50aXR5LCBwYXlsb2FkKSA9PiB7XG5cdFx0Ly8gb24gY29ubmVjdGlvbiB5b3UgY2FuIHZhbGlkYXRlIHRoZSBpZGVudGl0eSBhbmQgb3B0aW9uYWxseSBzcGVjaWZ5IHRoYXQgYSBwYXlsb2FkIHRvIHByb3ZlIGlkIG5lZWRzIHRvIGJlIHBhc3NlZFxuXHRcdC8vIGlmIHlvdSB3YW50ZWQgdG8gZGVueSBhIGNvbm5lY3Rpb24geW91IGNhbiB0aHJvdyBhbiBleGNlcHRpb24gaGVyZVxuXHRcdGNvbnNvbGUubG9nKFwiQXBwbGljYXRpb24gY29ubmVjdGluZyB0byBhY3Rpb24gY2hhbm5lbDpcIiwgaWRlbnRpdHkpO1xuXHRcdGNvbnNvbGUubG9nKFwiUGF5bG9hZCBwYXNzZWQgYnkgY29ubmVjdGluZyBhcHBsaWNhdGlvbjpcIiwgcGF5bG9hZCk7XG5cdH0pO1xuXG5cdC8vIGFuIGV4YW1wbGUgb2YgYSBjb21tYW5kIHlvdSB3aXNoIHRvIGV4cG9zZS5cblx0Ly8gYWx0ZXJuYXRpdmVseSB5b3UgY291bGQgaGF2ZSBhIHNpbmdsZSBjb21tYW5kIGZ1bmN0aW9uIGV4cG9zZWQgd2hpY2ggY291bGQgaGF2ZSBhbiBhY3Rpb24gdHlwZVxuXHRhY3Rpb25DaGFubmVsLnJlZ2lzdGVyKFwiY3JlYXRlVmlld1wiLCBhc3luYyAodW5rbm93blBheWxvYWQ6IHVua25vd24sIGlkZW50aXR5KSA9PiB7XG5cdFx0Y29uc3QgcGF5bG9hZCA9IHVua25vd25QYXlsb2FkIGFzIHtcblx0XHRcdHRhcmdldDogeyB3aW5kb3c/OiBzdHJpbmc7IHZpZXc/OiBzdHJpbmcgfTtcblx0XHRcdHZpZXdPcHRpb25zOiBPcGVuRmluLlZpZXdPcHRpb25zO1xuXHRcdH07XG5cdFx0Ly8gdGhlcmUgd291bGQgbGlrZWx5IGJlIHZhbGlkYXRpb24gYW5kIGFkZGl0aW9uYWwgbG9naWMgaGVyZS5cblx0XHRjb25zdCBwbGF0Zm9ybTogT3BlbkZpbi5QbGF0Zm9ybSA9IGZpbi5QbGF0Zm9ybS5nZXRDdXJyZW50U3luYygpO1xuXHRcdGxldCB0YXJnZXRXaW5kb3c6IE9wZW5GaW4uSWRlbnRpdHkgfCB1bmRlZmluZWQ7XG5cdFx0bGV0IHRhcmdldFZpZXc6IE9wZW5GaW4uSWRlbnRpdHkgfCB1bmRlZmluZWQ7XG5cdFx0Y29uc3Qgdmlld09wdGlvbnM6IFBhcnRpYWw8T3BlbkZpbi5WaWV3T3B0aW9ucz4gPSB7IHRhcmdldDogdW5kZWZpbmVkIH07XG5cdFx0T2JqZWN0LmFzc2lnbih2aWV3T3B0aW9ucywgcGF5bG9hZC52aWV3T3B0aW9ucyk7XG5cblx0XHRpZiAocGF5bG9hZC50YXJnZXQ/LndpbmRvdyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0YXJnZXRXaW5kb3cgPSB7IHV1aWQ6IGZpbi5tZS5pZGVudGl0eS51dWlkLCBuYW1lOiBwYXlsb2FkLnRhcmdldC53aW5kb3cgfTtcblx0XHR9XG5cblx0XHRpZiAocGF5bG9hZC50YXJnZXQ/LnZpZXcgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGFyZ2V0VmlldyA9IHsgdXVpZDogZmluLm1lLmlkZW50aXR5LnV1aWQsIG5hbWU6IHBheWxvYWQudGFyZ2V0LnZpZXcgfTtcblx0XHR9XG5cblx0XHRjb25zdCBjcmVhdGVkVmlldyA9IGF3YWl0IHBsYXRmb3JtLmNyZWF0ZVZpZXcoXG5cdFx0XHR2aWV3T3B0aW9ucyBhcyBPcGVuRmluLlZpZXdPcHRpb25zLFxuXHRcdFx0dGFyZ2V0V2luZG93LFxuXHRcdFx0dGFyZ2V0Vmlld1xuXHRcdCk7XG5cdFx0Y29uc3QgY3VycmVudFdpbmRvdyA9IGF3YWl0IGNyZWF0ZWRWaWV3LmdldEN1cnJlbnRXaW5kb3coKTtcblxuXHRcdGlmIChjdXJyZW50V2luZG93LmlkZW50aXR5Lm5hbWUgPT09IHVuZGVmaW5lZCB8fCBjdXJyZW50V2luZG93LmlkZW50aXR5Lm5hbWUgPT09IGZpbi5tZS5pZGVudGl0eS51dWlkKSB7XG5cdFx0XHRjb25zdCB3aW5kb3dBbGxvY2F0aW9uID0gbmV3IFByb21pc2U8eyB2aWV3OiBzdHJpbmc7IHdpbmRvdzogc3RyaW5nIH0+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0Y3JlYXRlZFZpZXdcblx0XHRcdFx0XHQub25jZShcInRhcmdldC1jaGFuZ2VkXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IGhvc3RXaW5kb3cgPSBhd2FpdCBjcmVhdGVkVmlldy5nZXRDdXJyZW50V2luZG93KCk7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHtcblx0XHRcdFx0XHRcdFx0dmlldzogY3JlYXRlZFZpZXcuaWRlbnRpdHkubmFtZSxcblx0XHRcdFx0XHRcdFx0d2luZG93OiBob3N0V2luZG93LmlkZW50aXR5Lm5hbWVcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmNhdGNoKCgpID0+IHt9KTtcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gd2luZG93QWxsb2NhdGlvbjtcblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdHZpZXc6IGNyZWF0ZWRWaWV3LmlkZW50aXR5Lm5hbWUsXG5cdFx0XHR3aW5kb3c6IGN1cnJlbnRXaW5kb3cuaWRlbnRpdHkubmFtZVxuXHRcdH07XG5cdH0pO1xufVxuXG5maW4uUGxhdGZvcm0uaW5pdCh7XG5cdG92ZXJyaWRlQ2FsbGJhY2s6IGFzeW5jIChQcm92aWRlcikgPT4ge1xuXHRcdC8qKlxuXHRcdCAqIE92ZXJyaWRlIHRoZSBwcm92aWRlciBjbGFzcy5cblx0XHQgKi9cblx0XHRjbGFzcyBPdmVycmlkZSBleHRlbmRzIFByb3ZpZGVyIHt9XG5cdFx0cmV0dXJuIG5ldyBPdmVycmlkZSgpO1xuXHR9XG59KS5jYXRjaCgoKSA9PiB7fSk7XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9