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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNsQyxNQUFNLFVBQVUsR0FBRyxNQUFNLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO29CQUN4RCxPQUFPLENBQUM7d0JBQ1AsSUFBSSxFQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSTt3QkFDL0IsTUFBTSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSTtxQkFDaEMsQ0FBQyxDQUFDO2dCQUNKLENBQUMsQ0FBQztxQkFDRCxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkIsQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPLGdCQUFnQixDQUFDO1FBQ3pCLENBQUM7UUFDRCxPQUFPO1lBQ04sSUFBSSxFQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSTtZQUMvQixNQUFNLEVBQUUsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJO1NBQ25DLENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztJQUNqQixnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQUU7UUFDcEM7O1dBRUc7UUFDSCxNQUFNLFFBQVMsU0FBUSxRQUFRO1NBQUc7UUFDbEMsT0FBTyxJQUFJLFFBQVEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Q0FDRCxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlLWNoYW5uZWwtYXBpLWlzc3VlLWNvbW1hbmRzLXRvLWEtcGxhdGZvcm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdXNlLWNoYW5uZWwtYXBpLWlzc3VlLWNvbW1hbmRzLXRvLWEtcGxhdGZvcm0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91c2UtY2hhbm5lbC1hcGktaXNzdWUtY29tbWFuZHMtdG8tYS1wbGF0Zm9ybS8uL2NsaWVudC9zcmMvcHJvdmlkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0eXBlIE9wZW5GaW4gZnJvbSBcIkBvcGVuZmluL2NvcmVcIjtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcblx0Y29uc3QgcGxhdGZvcm06IE9wZW5GaW4uUGxhdGZvcm0gPSBmaW4uUGxhdGZvcm0uZ2V0Q3VycmVudFN5bmMoKTtcblx0YXdhaXQgcGxhdGZvcm0ub25jZShcInBsYXRmb3JtLWFwaS1yZWFkeVwiLCBhc3luYyAoKSA9PiBpbml0KCkpO1xufSk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgY29tcG9uZW50cy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Ly8gY3JlYXRlIGEgY2hhbm5lbCB0byByZWNlaXZlIGNvbW1hbmRzIGZyb20gZXh0ZXJuYWwgYXBwc1xuXHRjb25zdCBhY3Rpb25DaGFubmVsOiBPcGVuRmluLkNoYW5uZWxQcm92aWRlciA9XG5cdFx0YXdhaXQgZmluLkludGVyQXBwbGljYXRpb25CdXMuQ2hhbm5lbC5jcmVhdGUoXCJwbGF0Zm9ybS1jb21tYW5kXCIpO1xuXG5cdGFjdGlvbkNoYW5uZWwub25Db25uZWN0aW9uKChpZGVudGl0eSwgcGF5bG9hZCkgPT4ge1xuXHRcdC8vIG9uIGNvbm5lY3Rpb24geW91IGNhbiB2YWxpZGF0ZSB0aGUgaWRlbnRpdHkgYW5kIG9wdGlvbmFsbHkgc3BlY2lmeSB0aGF0IGEgcGF5bG9hZCB0byBwcm92ZSBpZCBuZWVkcyB0byBiZSBwYXNzZWRcblx0XHQvLyBpZiB5b3Ugd2FudGVkIHRvIGRlbnkgYSBjb25uZWN0aW9uIHlvdSBjYW4gdGhyb3cgYW4gZXhjZXB0aW9uIGhlcmVcblx0XHRjb25zb2xlLmxvZyhcIkFwcGxpY2F0aW9uIGNvbm5lY3RpbmcgdG8gYWN0aW9uIGNoYW5uZWw6XCIsIGlkZW50aXR5KTtcblx0XHRjb25zb2xlLmxvZyhcIlBheWxvYWQgcGFzc2VkIGJ5IGNvbm5lY3RpbmcgYXBwbGljYXRpb246XCIsIHBheWxvYWQpO1xuXHR9KTtcblxuXHQvLyBhbiBleGFtcGxlIG9mIGEgY29tbWFuZCB5b3Ugd2lzaCB0byBleHBvc2UuXG5cdC8vIGFsdGVybmF0aXZlbHkgeW91IGNvdWxkIGhhdmUgYSBzaW5nbGUgY29tbWFuZCBmdW5jdGlvbiBleHBvc2VkIHdoaWNoIGNvdWxkIGhhdmUgYW4gYWN0aW9uIHR5cGVcblx0YWN0aW9uQ2hhbm5lbC5yZWdpc3RlcihcImNyZWF0ZVZpZXdcIiwgYXN5bmMgKHVua25vd25QYXlsb2FkOiB1bmtub3duLCBpZGVudGl0eSkgPT4ge1xuXHRcdGNvbnN0IHBheWxvYWQgPSB1bmtub3duUGF5bG9hZCBhcyB7XG5cdFx0XHR0YXJnZXQ6IHsgd2luZG93Pzogc3RyaW5nOyB2aWV3Pzogc3RyaW5nIH07XG5cdFx0XHR2aWV3T3B0aW9uczogT3BlbkZpbi5WaWV3T3B0aW9ucztcblx0XHR9O1xuXHRcdC8vIHRoZXJlIHdvdWxkIGxpa2VseSBiZSB2YWxpZGF0aW9uIGFuZCBhZGRpdGlvbmFsIGxvZ2ljIGhlcmUuXG5cdFx0Y29uc3QgcGxhdGZvcm06IE9wZW5GaW4uUGxhdGZvcm0gPSBmaW4uUGxhdGZvcm0uZ2V0Q3VycmVudFN5bmMoKTtcblx0XHRsZXQgdGFyZ2V0V2luZG93OiBPcGVuRmluLklkZW50aXR5IHwgdW5kZWZpbmVkO1xuXHRcdGxldCB0YXJnZXRWaWV3OiBPcGVuRmluLklkZW50aXR5IHwgdW5kZWZpbmVkO1xuXHRcdGNvbnN0IHZpZXdPcHRpb25zOiBQYXJ0aWFsPE9wZW5GaW4uVmlld09wdGlvbnM+ID0geyB0YXJnZXQ6IHVuZGVmaW5lZCB9O1xuXHRcdE9iamVjdC5hc3NpZ24odmlld09wdGlvbnMsIHBheWxvYWQudmlld09wdGlvbnMpO1xuXG5cdFx0aWYgKHBheWxvYWQudGFyZ2V0Py53aW5kb3cgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGFyZ2V0V2luZG93ID0geyB1dWlkOiBmaW4ubWUuaWRlbnRpdHkudXVpZCwgbmFtZTogcGF5bG9hZC50YXJnZXQud2luZG93IH07XG5cdFx0fVxuXG5cdFx0aWYgKHBheWxvYWQudGFyZ2V0Py52aWV3ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRhcmdldFZpZXcgPSB7IHV1aWQ6IGZpbi5tZS5pZGVudGl0eS51dWlkLCBuYW1lOiBwYXlsb2FkLnRhcmdldC52aWV3IH07XG5cdFx0fVxuXG5cdFx0Y29uc3QgY3JlYXRlZFZpZXcgPSBhd2FpdCBwbGF0Zm9ybS5jcmVhdGVWaWV3KFxuXHRcdFx0dmlld09wdGlvbnMgYXMgT3BlbkZpbi5WaWV3T3B0aW9ucyxcblx0XHRcdHRhcmdldFdpbmRvdyxcblx0XHRcdHRhcmdldFZpZXdcblx0XHQpO1xuXHRcdGNvbnN0IGN1cnJlbnRXaW5kb3cgPSBhd2FpdCBjcmVhdGVkVmlldy5nZXRDdXJyZW50V2luZG93KCk7XG5cblx0XHRpZiAoY3VycmVudFdpbmRvdy5pZGVudGl0eS5uYW1lID09PSB1bmRlZmluZWQgfHwgY3VycmVudFdpbmRvdy5pZGVudGl0eS5uYW1lID09PSBmaW4ubWUuaWRlbnRpdHkudXVpZCkge1xuXHRcdFx0Y29uc3Qgd2luZG93QWxsb2NhdGlvbiA9IG5ldyBQcm9taXNlPHsgdmlldzogc3RyaW5nOyB3aW5kb3c6IHN0cmluZyB9PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdGNyZWF0ZWRWaWV3XG5cdFx0XHRcdFx0Lm9uY2UoXCJ0YXJnZXQtY2hhbmdlZFwiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBob3N0V2luZG93ID0gYXdhaXQgY3JlYXRlZFZpZXcuZ2V0Q3VycmVudFdpbmRvdygpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZSh7XG5cdFx0XHRcdFx0XHRcdHZpZXc6IGNyZWF0ZWRWaWV3LmlkZW50aXR5Lm5hbWUsXG5cdFx0XHRcdFx0XHRcdHdpbmRvdzogaG9zdFdpbmRvdy5pZGVudGl0eS5uYW1lXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5jYXRjaCgoKSA9PiB7fSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHdpbmRvd0FsbG9jYXRpb247XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHR2aWV3OiBjcmVhdGVkVmlldy5pZGVudGl0eS5uYW1lLFxuXHRcdFx0d2luZG93OiBjdXJyZW50V2luZG93LmlkZW50aXR5Lm5hbWVcblx0XHR9O1xuXHR9KTtcbn1cblxuZmluLlBsYXRmb3JtLmluaXQoe1xuXHRvdmVycmlkZUNhbGxiYWNrOiBhc3luYyAoUHJvdmlkZXIpID0+IHtcblx0XHQvKipcblx0XHQgKiBPdmVycmlkZSB0aGUgcHJvdmlkZXIgY2xhc3MuXG5cdFx0ICovXG5cdFx0Y2xhc3MgT3ZlcnJpZGUgZXh0ZW5kcyBQcm92aWRlciB7fVxuXHRcdHJldHVybiBuZXcgT3ZlcnJpZGUoKTtcblx0fVxufSkuY2F0Y2goKCkgPT4ge30pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9