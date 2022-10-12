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
let id;
async function init() {
    const clientAction = document.querySelector("#clientAction");
    clientAction.addEventListener("click", launchclientAction);
    async function launchclientAction() {
        let a = await actionChannel.dispatch(id, 'getApps', 'Hello, World!');
    }
    // create a channel to receive commands from external apps
    const actionChannel = await fin.InterApplicationBus.Channel.create("platform-command");
    actionChannel.onConnection(async (identity, payload) => {
        id = identity;
        // on connection you can validate the identity and optionally specify that a payload to prove id needs to be passed
        // if you wanted to deny a connection you can throw an exception here
        console.log("Application connecting to action channel:", identity);
        console.log("Payload passed by connecting application:", payload);
        let a = await actionChannel.dispatch(identity, 'getApps', 'Hello, World!');
    });
    // an example of a command you wish to expose.
    // alternatively you could have a single command function exposed which could have an action type
    actionChannel.register("createView", async (payload, identity) => {
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
window.addEventListener("DOMContentLoaded", async () => {
    const platform = fin.Platform.getCurrentSync();
    await platform.once("platform-api-ready", async () => init());
});
fin.Platform.init({
    overrideCallback: async (Provider) => {
        class Override extends Provider {
        }
        return new Override();
    }
}).catch(() => { });


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2UtY2hhbm5lbC1hcGktaXNzdWUtY29tbWFuZHMtdG8tYS1wbGF0Zm9ybS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91c2UtY2hhbm5lbC1hcGktaXNzdWUtY29tbWFuZHMtdG8tYS1wbGF0Zm9ybS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VzZS1jaGFubmVsLWFwaS1pc3N1ZS1jb21tYW5kcy10by1hLXBsYXRmb3JtLy4vY2xpZW50L3NyYy9wcm92aWRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IHt9O1xubGV0IGlkO1xuYXN5bmMgZnVuY3Rpb24gaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgY2xpZW50QWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbGllbnRBY3Rpb25cIik7XG5cdGNsaWVudEFjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbGF1bmNoY2xpZW50QWN0aW9uKTtcblxuXG5cdGFzeW5jIGZ1bmN0aW9uIGxhdW5jaGNsaWVudEFjdGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRsZXQgYSA9IGF3YWl0IGFjdGlvbkNoYW5uZWwuZGlzcGF0Y2goaWQsICdnZXRBcHBzJywgJ0hlbGxvLCBXb3JsZCEnKTtcblx0fVxuXHQvLyBjcmVhdGUgYSBjaGFubmVsIHRvIHJlY2VpdmUgY29tbWFuZHMgZnJvbSBleHRlcm5hbCBhcHBzXG5cdGNvbnN0IGFjdGlvbkNoYW5uZWw6IE9wZW5GaW4uQ2hhbm5lbFByb3ZpZGVyID0gYXdhaXQgZmluLkludGVyQXBwbGljYXRpb25CdXMuQ2hhbm5lbC5jcmVhdGUoXG5cdFx0XCJwbGF0Zm9ybS1jb21tYW5kXCJcblx0KTtcblxuXHRhY3Rpb25DaGFubmVsLm9uQ29ubmVjdGlvbihhc3luYyAoaWRlbnRpdHksIHBheWxvYWQpID0+IHtcblx0XHRpZCA9IGlkZW50aXR5XG5cdFx0Ly8gb24gY29ubmVjdGlvbiB5b3UgY2FuIHZhbGlkYXRlIHRoZSBpZGVudGl0eSBhbmQgb3B0aW9uYWxseSBzcGVjaWZ5IHRoYXQgYSBwYXlsb2FkIHRvIHByb3ZlIGlkIG5lZWRzIHRvIGJlIHBhc3NlZFxuXHRcdC8vIGlmIHlvdSB3YW50ZWQgdG8gZGVueSBhIGNvbm5lY3Rpb24geW91IGNhbiB0aHJvdyBhbiBleGNlcHRpb24gaGVyZVxuXHRcdGNvbnNvbGUubG9nKFwiQXBwbGljYXRpb24gY29ubmVjdGluZyB0byBhY3Rpb24gY2hhbm5lbDpcIiwgaWRlbnRpdHkpO1xuXHRcdGNvbnNvbGUubG9nKFwiUGF5bG9hZCBwYXNzZWQgYnkgY29ubmVjdGluZyBhcHBsaWNhdGlvbjpcIiwgcGF5bG9hZCk7XG5cdFx0bGV0IGEgPSBhd2FpdCBhY3Rpb25DaGFubmVsLmRpc3BhdGNoKGlkZW50aXR5LCAnZ2V0QXBwcycsICdIZWxsbywgV29ybGQhJyk7XG5cdH0pO1xuXG5cdC8vIGFuIGV4YW1wbGUgb2YgYSBjb21tYW5kIHlvdSB3aXNoIHRvIGV4cG9zZS5cblx0Ly8gYWx0ZXJuYXRpdmVseSB5b3UgY291bGQgaGF2ZSBhIHNpbmdsZSBjb21tYW5kIGZ1bmN0aW9uIGV4cG9zZWQgd2hpY2ggY291bGQgaGF2ZSBhbiBhY3Rpb24gdHlwZVxuXHRhY3Rpb25DaGFubmVsLnJlZ2lzdGVyKFxuXHRcdFwiY3JlYXRlVmlld1wiLFxuXHRcdGFzeW5jIChcblx0XHRcdHBheWxvYWQ6IHsgdGFyZ2V0OiB7IHdpbmRvdz86IHN0cmluZzsgdmlldz86IHN0cmluZyB9OyB2aWV3T3B0aW9uczogT3BlbkZpbi5WaWV3T3B0aW9ucyB9LFxuXHRcdFx0aWRlbnRpdHlcblx0XHQpID0+IHtcblx0XHRcdC8vIHRoZXJlIHdvdWxkIGxpa2VseSBiZSB2YWxpZGF0aW9uIGFuZCBhZGRpdGlvbmFsIGxvZ2ljIGhlcmUuXG5cdFx0XHRjb25zdCBwbGF0Zm9ybTogT3BlbkZpbi5QbGF0Zm9ybSA9IGZpbi5QbGF0Zm9ybS5nZXRDdXJyZW50U3luYygpO1xuXHRcdFx0bGV0IHRhcmdldFdpbmRvdzogT3BlbkZpbi5JZGVudGl0eTtcblx0XHRcdGxldCB0YXJnZXRWaWV3OiBPcGVuRmluLklkZW50aXR5O1xuXHRcdFx0Y29uc3Qgdmlld09wdGlvbnMgPSB7IHRhcmdldDogdW5kZWZpbmVkIH0gYXMgT3BlbkZpbi5WaWV3T3B0aW9ucztcblx0XHRcdE9iamVjdC5hc3NpZ24odmlld09wdGlvbnMsIHBheWxvYWQudmlld09wdGlvbnMpO1xuXG5cdFx0XHRpZiAocGF5bG9hZC50YXJnZXQ/LndpbmRvdyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRhcmdldFdpbmRvdyA9IHsgdXVpZDogZmluLm1lLmlkZW50aXR5LnV1aWQsIG5hbWU6IHBheWxvYWQudGFyZ2V0LndpbmRvdyB9O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAocGF5bG9hZC50YXJnZXQ/LnZpZXcgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0YXJnZXRWaWV3ID0geyB1dWlkOiBmaW4ubWUuaWRlbnRpdHkudXVpZCwgbmFtZTogcGF5bG9hZC50YXJnZXQudmlldyB9O1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBjcmVhdGVkVmlldyA9IGF3YWl0IHBsYXRmb3JtLmNyZWF0ZVZpZXcodmlld09wdGlvbnMsIHRhcmdldFdpbmRvdywgdGFyZ2V0Vmlldyk7XG5cdFx0XHRjb25zdCBjdXJyZW50V2luZG93ID0gYXdhaXQgY3JlYXRlZFZpZXcuZ2V0Q3VycmVudFdpbmRvdygpO1xuXG5cdFx0XHRpZiAoY3VycmVudFdpbmRvdy5pZGVudGl0eS5uYW1lID09PSB1bmRlZmluZWQgfHwgY3VycmVudFdpbmRvdy5pZGVudGl0eS5uYW1lID09PSBmaW4ubWUuaWRlbnRpdHkudXVpZCkge1xuXHRcdFx0XHRjb25zdCB3aW5kb3dBbGxvY2F0aW9uID0gbmV3IFByb21pc2U8eyB2aWV3OiBzdHJpbmc7IHdpbmRvdzogc3RyaW5nIH0+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0XHRjcmVhdGVkVmlld1xuXHRcdFx0XHRcdFx0Lm9uY2UoXCJ0YXJnZXQtY2hhbmdlZFwiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGhvc3RXaW5kb3cgPSBhd2FpdCBjcmVhdGVkVmlldy5nZXRDdXJyZW50V2luZG93KCk7XG5cdFx0XHRcdFx0XHRcdHJlc29sdmUoe1xuXHRcdFx0XHRcdFx0XHRcdHZpZXc6IGNyZWF0ZWRWaWV3LmlkZW50aXR5Lm5hbWUsXG5cdFx0XHRcdFx0XHRcdFx0d2luZG93OiBob3N0V2luZG93LmlkZW50aXR5Lm5hbWVcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LmNhdGNoKCgpID0+IHt9KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0cmV0dXJuIHdpbmRvd0FsbG9jYXRpb247XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR2aWV3OiBjcmVhdGVkVmlldy5pZGVudGl0eS5uYW1lLFxuXHRcdFx0XHR3aW5kb3c6IGN1cnJlbnRXaW5kb3cuaWRlbnRpdHkubmFtZVxuXHRcdFx0fTtcblx0XHR9XG5cdCk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IHBsYXRmb3JtOiBPcGVuRmluLlBsYXRmb3JtID0gZmluLlBsYXRmb3JtLmdldEN1cnJlbnRTeW5jKCk7XG5cdGF3YWl0IHBsYXRmb3JtLm9uY2UoXCJwbGF0Zm9ybS1hcGktcmVhZHlcIiwgYXN5bmMgKCkgPT4gaW5pdCgpKTtcbn0pO1xuXG5cbmZpbi5QbGF0Zm9ybS5pbml0KHtcblx0b3ZlcnJpZGVDYWxsYmFjazogYXN5bmMgKFByb3ZpZGVyKSA9PiB7XG5cdFx0Y2xhc3MgT3ZlcnJpZGUgZXh0ZW5kcyBQcm92aWRlciB7fVxuXHRcdHJldHVybiBuZXcgT3ZlcnJpZGUoKTtcblx0fVxuXHRcbn0pLmNhdGNoKCgpID0+IHt9KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==