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
    // create a channel to receive commands from external apps
    const actionChannel = await fin.InterApplicationBus.Channel.create("platform-command");
    actionChannel.onConnection(async (identity, payload) => {
        id = identity;
        // on connection you can validate the identity and optionally specify that a payload to prove id needs to be passed
        // if you wanted to deny a connection you can throw an exception here
        console.log("Application connecting to action channel:", identity);
        console.log("Payload passed by connecting application:", payload);
        // await actionChannel.dispatch(identity, 'getApps', 'Hello, World!');
    });
    async function launchclientAction() {
        await actionChannel.dispatch(id, 'getApps', 'Hello, World!');
    }
    actionChannel.register('getApps', async (payload) => {
        console.log('getApps called with payload: ', payload);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVELENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2UtY2hhbm5lbC1hcGktaXNzdWUtY29tbWFuZHMtdG8tYS1wbGF0Zm9ybS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91c2UtY2hhbm5lbC1hcGktaXNzdWUtY29tbWFuZHMtdG8tYS1wbGF0Zm9ybS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VzZS1jaGFubmVsLWFwaS1pc3N1ZS1jb21tYW5kcy10by1hLXBsYXRmb3JtLy4vY2xpZW50L3NyYy9wcm92aWRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IHt9O1xubGV0IGlkO1xuYXN5bmMgZnVuY3Rpb24gaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgY2xpZW50QWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbGllbnRBY3Rpb25cIik7XG5cdGNsaWVudEFjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbGF1bmNoY2xpZW50QWN0aW9uKTtcblxuXHQvLyBjcmVhdGUgYSBjaGFubmVsIHRvIHJlY2VpdmUgY29tbWFuZHMgZnJvbSBleHRlcm5hbCBhcHBzXG5cdGNvbnN0IGFjdGlvbkNoYW5uZWw6IE9wZW5GaW4uQ2hhbm5lbFByb3ZpZGVyID0gYXdhaXQgZmluLkludGVyQXBwbGljYXRpb25CdXMuQ2hhbm5lbC5jcmVhdGUoXG5cdFx0XCJwbGF0Zm9ybS1jb21tYW5kXCJcblx0KTtcblxuXHRcblx0YWN0aW9uQ2hhbm5lbC5vbkNvbm5lY3Rpb24oYXN5bmMgKGlkZW50aXR5LCBwYXlsb2FkKSA9PiB7XG5cdFx0aWQgPSBpZGVudGl0eVxuXHRcdC8vIG9uIGNvbm5lY3Rpb24geW91IGNhbiB2YWxpZGF0ZSB0aGUgaWRlbnRpdHkgYW5kIG9wdGlvbmFsbHkgc3BlY2lmeSB0aGF0IGEgcGF5bG9hZCB0byBwcm92ZSBpZCBuZWVkcyB0byBiZSBwYXNzZWRcblx0XHQvLyBpZiB5b3Ugd2FudGVkIHRvIGRlbnkgYSBjb25uZWN0aW9uIHlvdSBjYW4gdGhyb3cgYW4gZXhjZXB0aW9uIGhlcmVcblx0XHRjb25zb2xlLmxvZyhcIkFwcGxpY2F0aW9uIGNvbm5lY3RpbmcgdG8gYWN0aW9uIGNoYW5uZWw6XCIsIGlkZW50aXR5KTtcblx0XHRjb25zb2xlLmxvZyhcIlBheWxvYWQgcGFzc2VkIGJ5IGNvbm5lY3RpbmcgYXBwbGljYXRpb246XCIsIHBheWxvYWQpO1xuXHRcdC8vIGF3YWl0IGFjdGlvbkNoYW5uZWwuZGlzcGF0Y2goaWRlbnRpdHksICdnZXRBcHBzJywgJ0hlbGxvLCBXb3JsZCEnKTtcblx0fSk7XG5cblx0YXN5bmMgZnVuY3Rpb24gbGF1bmNoY2xpZW50QWN0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdGF3YWl0IGFjdGlvbkNoYW5uZWwuZGlzcGF0Y2goaWQsICdnZXRBcHBzJywgJ0hlbGxvLCBXb3JsZCEnKTtcblx0fVxuXG5cdGFjdGlvbkNoYW5uZWwucmVnaXN0ZXIoJ2dldEFwcHMnLCBhc3luYyAocGF5bG9hZCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKCdnZXRBcHBzIGNhbGxlZCB3aXRoIHBheWxvYWQ6ICcsIHBheWxvYWQpO1xuXHR9KTtcblxuXHQvLyBhbiBleGFtcGxlIG9mIGEgY29tbWFuZCB5b3Ugd2lzaCB0byBleHBvc2UuXG5cdC8vIGFsdGVybmF0aXZlbHkgeW91IGNvdWxkIGhhdmUgYSBzaW5nbGUgY29tbWFuZCBmdW5jdGlvbiBleHBvc2VkIHdoaWNoIGNvdWxkIGhhdmUgYW4gYWN0aW9uIHR5cGVcblx0YWN0aW9uQ2hhbm5lbC5yZWdpc3Rlcihcblx0XHRcImNyZWF0ZVZpZXdcIixcblx0XHRhc3luYyAoXG5cdFx0XHRwYXlsb2FkOiB7IHRhcmdldDogeyB3aW5kb3c/OiBzdHJpbmc7IHZpZXc/OiBzdHJpbmcgfTsgdmlld09wdGlvbnM6IE9wZW5GaW4uVmlld09wdGlvbnMgfSxcblx0XHRcdGlkZW50aXR5XG5cdFx0KSA9PiB7XG5cdFx0XHQvLyB0aGVyZSB3b3VsZCBsaWtlbHkgYmUgdmFsaWRhdGlvbiBhbmQgYWRkaXRpb25hbCBsb2dpYyBoZXJlLlxuXHRcdFx0Y29uc3QgcGxhdGZvcm06IE9wZW5GaW4uUGxhdGZvcm0gPSBmaW4uUGxhdGZvcm0uZ2V0Q3VycmVudFN5bmMoKTtcblx0XHRcdGxldCB0YXJnZXRXaW5kb3c6IE9wZW5GaW4uSWRlbnRpdHk7XG5cdFx0XHRsZXQgdGFyZ2V0VmlldzogT3BlbkZpbi5JZGVudGl0eTtcblx0XHRcdGNvbnN0IHZpZXdPcHRpb25zID0geyB0YXJnZXQ6IHVuZGVmaW5lZCB9IGFzIE9wZW5GaW4uVmlld09wdGlvbnM7XG5cdFx0XHRPYmplY3QuYXNzaWduKHZpZXdPcHRpb25zLCBwYXlsb2FkLnZpZXdPcHRpb25zKTtcblxuXHRcdFx0aWYgKHBheWxvYWQudGFyZ2V0Py53aW5kb3cgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0YXJnZXRXaW5kb3cgPSB7IHV1aWQ6IGZpbi5tZS5pZGVudGl0eS51dWlkLCBuYW1lOiBwYXlsb2FkLnRhcmdldC53aW5kb3cgfTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHBheWxvYWQudGFyZ2V0Py52aWV3ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGFyZ2V0VmlldyA9IHsgdXVpZDogZmluLm1lLmlkZW50aXR5LnV1aWQsIG5hbWU6IHBheWxvYWQudGFyZ2V0LnZpZXcgfTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgY3JlYXRlZFZpZXcgPSBhd2FpdCBwbGF0Zm9ybS5jcmVhdGVWaWV3KHZpZXdPcHRpb25zLCB0YXJnZXRXaW5kb3csIHRhcmdldFZpZXcpO1xuXHRcdFx0Y29uc3QgY3VycmVudFdpbmRvdyA9IGF3YWl0IGNyZWF0ZWRWaWV3LmdldEN1cnJlbnRXaW5kb3coKTtcblxuXHRcdFx0aWYgKGN1cnJlbnRXaW5kb3cuaWRlbnRpdHkubmFtZSA9PT0gdW5kZWZpbmVkIHx8IGN1cnJlbnRXaW5kb3cuaWRlbnRpdHkubmFtZSA9PT0gZmluLm1lLmlkZW50aXR5LnV1aWQpIHtcblx0XHRcdFx0Y29uc3Qgd2luZG93QWxsb2NhdGlvbiA9IG5ldyBQcm9taXNlPHsgdmlldzogc3RyaW5nOyB3aW5kb3c6IHN0cmluZyB9PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdFx0Y3JlYXRlZFZpZXdcblx0XHRcdFx0XHRcdC5vbmNlKFwidGFyZ2V0LWNoYW5nZWRcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBob3N0V2luZG93ID0gYXdhaXQgY3JlYXRlZFZpZXcuZ2V0Q3VycmVudFdpbmRvdygpO1xuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKHtcblx0XHRcdFx0XHRcdFx0XHR2aWV3OiBjcmVhdGVkVmlldy5pZGVudGl0eS5uYW1lLFxuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdzogaG9zdFdpbmRvdy5pZGVudGl0eS5uYW1lXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC5jYXRjaCgoKSA9PiB7fSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHJldHVybiB3aW5kb3dBbGxvY2F0aW9uO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dmlldzogY3JlYXRlZFZpZXcuaWRlbnRpdHkubmFtZSxcblx0XHRcdFx0d2luZG93OiBjdXJyZW50V2luZG93LmlkZW50aXR5Lm5hbWVcblx0XHRcdH07XG5cdFx0fVxuXHQpO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBwbGF0Zm9ybTogT3BlbkZpbi5QbGF0Zm9ybSA9IGZpbi5QbGF0Zm9ybS5nZXRDdXJyZW50U3luYygpO1xuXHRhd2FpdCBwbGF0Zm9ybS5vbmNlKFwicGxhdGZvcm0tYXBpLXJlYWR5XCIsIGFzeW5jICgpID0+IGluaXQoKSk7XG59KTtcblxuXG5maW4uUGxhdGZvcm0uaW5pdCh7XG5cdG92ZXJyaWRlQ2FsbGJhY2s6IGFzeW5jIChQcm92aWRlcikgPT4ge1xuXHRcdGNsYXNzIE92ZXJyaWRlIGV4dGVuZHMgUHJvdmlkZXIge31cblx0XHRyZXR1cm4gbmV3IE92ZXJyaWRlKCk7XG5cdH1cblx0XG59KS5jYXRjaCgoKSA9PiB7fSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=