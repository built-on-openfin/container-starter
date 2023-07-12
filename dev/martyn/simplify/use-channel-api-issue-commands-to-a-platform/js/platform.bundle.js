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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO29CQUN4RCxPQUFPLENBQUM7d0JBQ1AsSUFBSSxFQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSTt3QkFDL0IsTUFBTSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSTtxQkFDaEMsQ0FBQyxDQUFDO2dCQUNKLENBQUMsQ0FBQztxQkFDRCxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkIsQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPLGdCQUFnQixDQUFDO1NBQ3hCO1FBQ0QsT0FBTztZQUNOLElBQUksRUFBRSxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUk7WUFDL0IsTUFBTSxFQUFFLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSTtTQUNuQyxDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDakIsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxFQUFFO1FBQ3BDOztXQUVHO1FBQ0gsTUFBTSxRQUFTLFNBQVEsUUFBUTtTQUFHO1FBQ2xDLE9BQU8sSUFBSSxRQUFRLEVBQUUsQ0FBQztJQUN2QixDQUFDO0NBQ0QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZS1jaGFubmVsLWFwaS1pc3N1ZS1jb21tYW5kcy10by1hLXBsYXRmb3JtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VzZS1jaGFubmVsLWFwaS1pc3N1ZS1jb21tYW5kcy10by1hLXBsYXRmb3JtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdXNlLWNoYW5uZWwtYXBpLWlzc3VlLWNvbW1hbmRzLXRvLWEtcGxhdGZvcm0vLi9jbGllbnQvc3JjL3Byb3ZpZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQge307XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IHBsYXRmb3JtOiBPcGVuRmluLlBsYXRmb3JtID0gZmluLlBsYXRmb3JtLmdldEN1cnJlbnRTeW5jKCk7XG5cdGF3YWl0IHBsYXRmb3JtLm9uY2UoXCJwbGF0Zm9ybS1hcGktcmVhZHlcIiwgYXN5bmMgKCkgPT4gaW5pdCgpKTtcbn0pO1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIGNvbXBvbmVudHMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXQoKTogUHJvbWlzZTx2b2lkPiB7XG5cdC8vIGNyZWF0ZSBhIGNoYW5uZWwgdG8gcmVjZWl2ZSBjb21tYW5kcyBmcm9tIGV4dGVybmFsIGFwcHNcblx0Y29uc3QgYWN0aW9uQ2hhbm5lbDogT3BlbkZpbi5DaGFubmVsUHJvdmlkZXIgPSBhd2FpdCBmaW4uSW50ZXJBcHBsaWNhdGlvbkJ1cy5DaGFubmVsLmNyZWF0ZShcblx0XHRcInBsYXRmb3JtLWNvbW1hbmRcIlxuXHQpO1xuXG5cdGFjdGlvbkNoYW5uZWwub25Db25uZWN0aW9uKChpZGVudGl0eSwgcGF5bG9hZCkgPT4ge1xuXHRcdC8vIG9uIGNvbm5lY3Rpb24geW91IGNhbiB2YWxpZGF0ZSB0aGUgaWRlbnRpdHkgYW5kIG9wdGlvbmFsbHkgc3BlY2lmeSB0aGF0IGEgcGF5bG9hZCB0byBwcm92ZSBpZCBuZWVkcyB0byBiZSBwYXNzZWRcblx0XHQvLyBpZiB5b3Ugd2FudGVkIHRvIGRlbnkgYSBjb25uZWN0aW9uIHlvdSBjYW4gdGhyb3cgYW4gZXhjZXB0aW9uIGhlcmVcblx0XHRjb25zb2xlLmxvZyhcIkFwcGxpY2F0aW9uIGNvbm5lY3RpbmcgdG8gYWN0aW9uIGNoYW5uZWw6XCIsIGlkZW50aXR5KTtcblx0XHRjb25zb2xlLmxvZyhcIlBheWxvYWQgcGFzc2VkIGJ5IGNvbm5lY3RpbmcgYXBwbGljYXRpb246XCIsIHBheWxvYWQpO1xuXHR9KTtcblxuXHQvLyBhbiBleGFtcGxlIG9mIGEgY29tbWFuZCB5b3Ugd2lzaCB0byBleHBvc2UuXG5cdC8vIGFsdGVybmF0aXZlbHkgeW91IGNvdWxkIGhhdmUgYSBzaW5nbGUgY29tbWFuZCBmdW5jdGlvbiBleHBvc2VkIHdoaWNoIGNvdWxkIGhhdmUgYW4gYWN0aW9uIHR5cGVcblx0YWN0aW9uQ2hhbm5lbC5yZWdpc3RlcihcImNyZWF0ZVZpZXdcIiwgYXN5bmMgKHVua25vd25QYXlsb2FkOiB1bmtub3duLCBpZGVudGl0eSkgPT4ge1xuXHRcdGNvbnN0IHBheWxvYWQgPSB1bmtub3duUGF5bG9hZCBhcyB7XG5cdFx0XHR0YXJnZXQ6IHsgd2luZG93Pzogc3RyaW5nOyB2aWV3Pzogc3RyaW5nIH07XG5cdFx0XHR2aWV3T3B0aW9uczogT3BlbkZpbi5WaWV3T3B0aW9ucztcblx0XHR9O1xuXHRcdC8vIHRoZXJlIHdvdWxkIGxpa2VseSBiZSB2YWxpZGF0aW9uIGFuZCBhZGRpdGlvbmFsIGxvZ2ljIGhlcmUuXG5cdFx0Y29uc3QgcGxhdGZvcm06IE9wZW5GaW4uUGxhdGZvcm0gPSBmaW4uUGxhdGZvcm0uZ2V0Q3VycmVudFN5bmMoKTtcblx0XHRsZXQgdGFyZ2V0V2luZG93OiBPcGVuRmluLklkZW50aXR5IHwgdW5kZWZpbmVkO1xuXHRcdGxldCB0YXJnZXRWaWV3OiBPcGVuRmluLklkZW50aXR5IHwgdW5kZWZpbmVkO1xuXHRcdGNvbnN0IHZpZXdPcHRpb25zOiBQYXJ0aWFsPE9wZW5GaW4uVmlld09wdGlvbnM+ID0geyB0YXJnZXQ6IHVuZGVmaW5lZCB9O1xuXHRcdE9iamVjdC5hc3NpZ24odmlld09wdGlvbnMsIHBheWxvYWQudmlld09wdGlvbnMpO1xuXG5cdFx0aWYgKHBheWxvYWQudGFyZ2V0Py53aW5kb3cgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGFyZ2V0V2luZG93ID0geyB1dWlkOiBmaW4ubWUuaWRlbnRpdHkudXVpZCwgbmFtZTogcGF5bG9hZC50YXJnZXQud2luZG93IH07XG5cdFx0fVxuXG5cdFx0aWYgKHBheWxvYWQudGFyZ2V0Py52aWV3ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRhcmdldFZpZXcgPSB7IHV1aWQ6IGZpbi5tZS5pZGVudGl0eS51dWlkLCBuYW1lOiBwYXlsb2FkLnRhcmdldC52aWV3IH07XG5cdFx0fVxuXG5cdFx0Y29uc3QgY3JlYXRlZFZpZXcgPSBhd2FpdCBwbGF0Zm9ybS5jcmVhdGVWaWV3KFxuXHRcdFx0dmlld09wdGlvbnMgYXMgT3BlbkZpbi5WaWV3T3B0aW9ucyxcblx0XHRcdHRhcmdldFdpbmRvdyxcblx0XHRcdHRhcmdldFZpZXdcblx0XHQpO1xuXHRcdGNvbnN0IGN1cnJlbnRXaW5kb3cgPSBhd2FpdCBjcmVhdGVkVmlldy5nZXRDdXJyZW50V2luZG93KCk7XG5cblx0XHRpZiAoY3VycmVudFdpbmRvdy5pZGVudGl0eS5uYW1lID09PSB1bmRlZmluZWQgfHwgY3VycmVudFdpbmRvdy5pZGVudGl0eS5uYW1lID09PSBmaW4ubWUuaWRlbnRpdHkudXVpZCkge1xuXHRcdFx0Y29uc3Qgd2luZG93QWxsb2NhdGlvbiA9IG5ldyBQcm9taXNlPHsgdmlldzogc3RyaW5nOyB3aW5kb3c6IHN0cmluZyB9PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdGNyZWF0ZWRWaWV3XG5cdFx0XHRcdFx0Lm9uY2UoXCJ0YXJnZXQtY2hhbmdlZFwiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBob3N0V2luZG93ID0gYXdhaXQgY3JlYXRlZFZpZXcuZ2V0Q3VycmVudFdpbmRvdygpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZSh7XG5cdFx0XHRcdFx0XHRcdHZpZXc6IGNyZWF0ZWRWaWV3LmlkZW50aXR5Lm5hbWUsXG5cdFx0XHRcdFx0XHRcdHdpbmRvdzogaG9zdFdpbmRvdy5pZGVudGl0eS5uYW1lXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5jYXRjaCgoKSA9PiB7fSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHdpbmRvd0FsbG9jYXRpb247XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHR2aWV3OiBjcmVhdGVkVmlldy5pZGVudGl0eS5uYW1lLFxuXHRcdFx0d2luZG93OiBjdXJyZW50V2luZG93LmlkZW50aXR5Lm5hbWVcblx0XHR9O1xuXHR9KTtcbn1cblxuZmluLlBsYXRmb3JtLmluaXQoe1xuXHRvdmVycmlkZUNhbGxiYWNrOiBhc3luYyAoUHJvdmlkZXIpID0+IHtcblx0XHQvKipcblx0XHQgKiBPdmVycmlkZSB0aGUgcHJvdmlkZXIgY2xhc3MuXG5cdFx0ICovXG5cdFx0Y2xhc3MgT3ZlcnJpZGUgZXh0ZW5kcyBQcm92aWRlciB7fVxuXHRcdHJldHVybiBuZXcgT3ZlcnJpZGUoKTtcblx0fVxufSkuY2F0Y2goKCkgPT4ge30pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9