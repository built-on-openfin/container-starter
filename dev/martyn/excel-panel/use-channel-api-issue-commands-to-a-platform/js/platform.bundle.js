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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNELE9BQU87WUFDTixJQUFJLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJO1lBQy9CLE1BQU0sRUFBRSxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUk7U0FDbkMsQ0FBQztJQUNILENBQUMsQ0FDRCxDQUFDO0FBQ0gsQ0FBQztBQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLElBQUksRUFBRTtJQUN0RCxNQUFNLFFBQVEsR0FBcUIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNqRSxNQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQy9ELENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDakIsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxFQUFFO1FBQ3BDLE1BQU0sUUFBUyxTQUFRLFFBQVE7U0FBRztRQUNsQyxPQUFPLElBQUksUUFBUSxFQUFFLENBQUM7SUFDdkIsQ0FBQztDQUNELENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2UtY2hhbm5lbC1hcGktaXNzdWUtY29tbWFuZHMtdG8tYS1wbGF0Zm9ybS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91c2UtY2hhbm5lbC1hcGktaXNzdWUtY29tbWFuZHMtdG8tYS1wbGF0Zm9ybS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VzZS1jaGFubmVsLWFwaS1pc3N1ZS1jb21tYW5kcy10by1hLXBsYXRmb3JtLy4vY2xpZW50L3NyYy9wcm92aWRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IHt9O1xuXG5hc3luYyBmdW5jdGlvbiBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xuXHQvLyBjcmVhdGUgYSBjaGFubmVsIHRvIHJlY2VpdmUgY29tbWFuZHMgZnJvbSBleHRlcm5hbCBhcHBzXG5cdGNvbnN0IGFjdGlvbkNoYW5uZWw6IE9wZW5GaW4uQ2hhbm5lbFByb3ZpZGVyID0gYXdhaXQgZmluLkludGVyQXBwbGljYXRpb25CdXMuQ2hhbm5lbC5jcmVhdGUoXG5cdFx0XCJwbGF0Zm9ybS1jb21tYW5kXCJcblx0KTtcblxuXHRhY3Rpb25DaGFubmVsLm9uQ29ubmVjdGlvbigoaWRlbnRpdHksIHBheWxvYWQpID0+IHtcblx0XHQvLyBvbiBjb25uZWN0aW9uIHlvdSBjYW4gdmFsaWRhdGUgdGhlIGlkZW50aXR5IGFuZCBvcHRpb25hbGx5IHNwZWNpZnkgdGhhdCBhIHBheWxvYWQgdG8gcHJvdmUgaWQgbmVlZHMgdG8gYmUgcGFzc2VkXG5cdFx0Ly8gaWYgeW91IHdhbnRlZCB0byBkZW55IGEgY29ubmVjdGlvbiB5b3UgY2FuIHRocm93IGFuIGV4Y2VwdGlvbiBoZXJlXG5cdFx0Y29uc29sZS5sb2coXCJBcHBsaWNhdGlvbiBjb25uZWN0aW5nIHRvIGFjdGlvbiBjaGFubmVsOlwiLCBpZGVudGl0eSk7XG5cdFx0Y29uc29sZS5sb2coXCJQYXlsb2FkIHBhc3NlZCBieSBjb25uZWN0aW5nIGFwcGxpY2F0aW9uOlwiLCBwYXlsb2FkKTtcblx0fSk7XG5cblx0Ly8gYW4gZXhhbXBsZSBvZiBhIGNvbW1hbmQgeW91IHdpc2ggdG8gZXhwb3NlLlxuXHQvLyBhbHRlcm5hdGl2ZWx5IHlvdSBjb3VsZCBoYXZlIGEgc2luZ2xlIGNvbW1hbmQgZnVuY3Rpb24gZXhwb3NlZCB3aGljaCBjb3VsZCBoYXZlIGFuIGFjdGlvbiB0eXBlXG5cdGFjdGlvbkNoYW5uZWwucmVnaXN0ZXIoXG5cdFx0XCJjcmVhdGVWaWV3XCIsXG5cdFx0YXN5bmMgKFxuXHRcdFx0cGF5bG9hZDogeyB0YXJnZXQ6IHsgd2luZG93Pzogc3RyaW5nOyB2aWV3Pzogc3RyaW5nIH07IHZpZXdPcHRpb25zOiBPcGVuRmluLlZpZXdPcHRpb25zIH0sXG5cdFx0XHRpZGVudGl0eVxuXHRcdCkgPT4ge1xuXHRcdFx0Ly8gdGhlcmUgd291bGQgbGlrZWx5IGJlIHZhbGlkYXRpb24gYW5kIGFkZGl0aW9uYWwgbG9naWMgaGVyZS5cblx0XHRcdGNvbnN0IHBsYXRmb3JtOiBPcGVuRmluLlBsYXRmb3JtID0gZmluLlBsYXRmb3JtLmdldEN1cnJlbnRTeW5jKCk7XG5cdFx0XHRsZXQgdGFyZ2V0V2luZG93OiBPcGVuRmluLklkZW50aXR5O1xuXHRcdFx0bGV0IHRhcmdldFZpZXc6IE9wZW5GaW4uSWRlbnRpdHk7XG5cdFx0XHRjb25zdCB2aWV3T3B0aW9ucyA9IHsgdGFyZ2V0OiB1bmRlZmluZWQgfSBhcyBPcGVuRmluLlZpZXdPcHRpb25zO1xuXHRcdFx0T2JqZWN0LmFzc2lnbih2aWV3T3B0aW9ucywgcGF5bG9hZC52aWV3T3B0aW9ucyk7XG5cblx0XHRcdGlmIChwYXlsb2FkLnRhcmdldD8ud2luZG93ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGFyZ2V0V2luZG93ID0geyB1dWlkOiBmaW4ubWUuaWRlbnRpdHkudXVpZCwgbmFtZTogcGF5bG9hZC50YXJnZXQud2luZG93IH07XG5cdFx0XHR9XG5cblx0XHRcdGlmIChwYXlsb2FkLnRhcmdldD8udmlldyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRhcmdldFZpZXcgPSB7IHV1aWQ6IGZpbi5tZS5pZGVudGl0eS51dWlkLCBuYW1lOiBwYXlsb2FkLnRhcmdldC52aWV3IH07XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGNyZWF0ZWRWaWV3ID0gYXdhaXQgcGxhdGZvcm0uY3JlYXRlVmlldyh2aWV3T3B0aW9ucywgdGFyZ2V0V2luZG93LCB0YXJnZXRWaWV3KTtcblx0XHRcdGNvbnN0IGN1cnJlbnRXaW5kb3cgPSBhd2FpdCBjcmVhdGVkVmlldy5nZXRDdXJyZW50V2luZG93KCk7XG5cblx0XHRcdGlmIChjdXJyZW50V2luZG93LmlkZW50aXR5Lm5hbWUgPT09IHVuZGVmaW5lZCB8fCBjdXJyZW50V2luZG93LmlkZW50aXR5Lm5hbWUgPT09IGZpbi5tZS5pZGVudGl0eS51dWlkKSB7XG5cdFx0XHRcdGNvbnN0IHdpbmRvd0FsbG9jYXRpb24gPSBuZXcgUHJvbWlzZTx7IHZpZXc6IHN0cmluZzsgd2luZG93OiBzdHJpbmcgfT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRcdGNyZWF0ZWRWaWV3XG5cdFx0XHRcdFx0XHQub25jZShcInRhcmdldC1jaGFuZ2VkXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgaG9zdFdpbmRvdyA9IGF3YWl0IGNyZWF0ZWRWaWV3LmdldEN1cnJlbnRXaW5kb3coKTtcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZSh7XG5cdFx0XHRcdFx0XHRcdFx0dmlldzogY3JlYXRlZFZpZXcuaWRlbnRpdHkubmFtZSxcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3c6IGhvc3RXaW5kb3cuaWRlbnRpdHkubmFtZVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuY2F0Y2goKCkgPT4ge30pO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRyZXR1cm4gd2luZG93QWxsb2NhdGlvbjtcblx0XHRcdH1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHZpZXc6IGNyZWF0ZWRWaWV3LmlkZW50aXR5Lm5hbWUsXG5cdFx0XHRcdHdpbmRvdzogY3VycmVudFdpbmRvdy5pZGVudGl0eS5uYW1lXG5cdFx0XHR9O1xuXHRcdH1cblx0KTtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcblx0Y29uc3QgcGxhdGZvcm06IE9wZW5GaW4uUGxhdGZvcm0gPSBmaW4uUGxhdGZvcm0uZ2V0Q3VycmVudFN5bmMoKTtcblx0YXdhaXQgcGxhdGZvcm0ub25jZShcInBsYXRmb3JtLWFwaS1yZWFkeVwiLCBhc3luYyAoKSA9PiBpbml0KCkpO1xufSk7XG5cbmZpbi5QbGF0Zm9ybS5pbml0KHtcblx0b3ZlcnJpZGVDYWxsYmFjazogYXN5bmMgKFByb3ZpZGVyKSA9PiB7XG5cdFx0Y2xhc3MgT3ZlcnJpZGUgZXh0ZW5kcyBQcm92aWRlciB7fVxuXHRcdHJldHVybiBuZXcgT3ZlcnJpZGUoKTtcblx0fVxufSkuY2F0Y2goKCkgPT4ge30pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9