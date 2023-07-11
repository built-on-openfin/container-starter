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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztZQUVILE9BQU8sZ0JBQWdCLENBQUM7U0FDeEI7UUFDRCxPQUFPO1lBQ04sSUFBSSxFQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSTtZQUMvQixNQUFNLEVBQUUsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJO1NBQ25DLENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFDdEQsTUFBTSxRQUFRLEdBQXFCLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDakUsTUFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLEtBQUssSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUMvRCxDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ2pCLGdCQUFnQixFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsRUFBRTtRQUNwQyxNQUFNLFFBQVMsU0FBUSxRQUFRO1NBQUc7UUFDbEMsT0FBTyxJQUFJLFFBQVEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Q0FDRCxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlLWNoYW5uZWwtYXBpLWlzc3VlLWNvbW1hbmRzLXRvLWEtcGxhdGZvcm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdXNlLWNoYW5uZWwtYXBpLWlzc3VlLWNvbW1hbmRzLXRvLWEtcGxhdGZvcm0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91c2UtY2hhbm5lbC1hcGktaXNzdWUtY29tbWFuZHMtdG8tYS1wbGF0Zm9ybS8uL2NsaWVudC9zcmMvcHJvdmlkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCB7fTtcblxuYXN5bmMgZnVuY3Rpb24gaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Ly8gY3JlYXRlIGEgY2hhbm5lbCB0byByZWNlaXZlIGNvbW1hbmRzIGZyb20gZXh0ZXJuYWwgYXBwc1xuXHRjb25zdCBhY3Rpb25DaGFubmVsOiBPcGVuRmluLkNoYW5uZWxQcm92aWRlciA9IGF3YWl0IGZpbi5JbnRlckFwcGxpY2F0aW9uQnVzLkNoYW5uZWwuY3JlYXRlKFxuXHRcdFwicGxhdGZvcm0tY29tbWFuZFwiXG5cdCk7XG5cblx0YWN0aW9uQ2hhbm5lbC5vbkNvbm5lY3Rpb24oKGlkZW50aXR5LCBwYXlsb2FkKSA9PiB7XG5cdFx0Ly8gb24gY29ubmVjdGlvbiB5b3UgY2FuIHZhbGlkYXRlIHRoZSBpZGVudGl0eSBhbmQgb3B0aW9uYWxseSBzcGVjaWZ5IHRoYXQgYSBwYXlsb2FkIHRvIHByb3ZlIGlkIG5lZWRzIHRvIGJlIHBhc3NlZFxuXHRcdC8vIGlmIHlvdSB3YW50ZWQgdG8gZGVueSBhIGNvbm5lY3Rpb24geW91IGNhbiB0aHJvdyBhbiBleGNlcHRpb24gaGVyZVxuXHRcdGNvbnNvbGUubG9nKFwiQXBwbGljYXRpb24gY29ubmVjdGluZyB0byBhY3Rpb24gY2hhbm5lbDpcIiwgaWRlbnRpdHkpO1xuXHRcdGNvbnNvbGUubG9nKFwiUGF5bG9hZCBwYXNzZWQgYnkgY29ubmVjdGluZyBhcHBsaWNhdGlvbjpcIiwgcGF5bG9hZCk7XG5cdH0pO1xuXG5cdC8vIGFuIGV4YW1wbGUgb2YgYSBjb21tYW5kIHlvdSB3aXNoIHRvIGV4cG9zZS5cblx0Ly8gYWx0ZXJuYXRpdmVseSB5b3UgY291bGQgaGF2ZSBhIHNpbmdsZSBjb21tYW5kIGZ1bmN0aW9uIGV4cG9zZWQgd2hpY2ggY291bGQgaGF2ZSBhbiBhY3Rpb24gdHlwZVxuXHRhY3Rpb25DaGFubmVsLnJlZ2lzdGVyKFwiY3JlYXRlVmlld1wiLCBhc3luYyAodW5rbm93blBheWxvYWQ6IHVua25vd24sIGlkZW50aXR5KSA9PiB7XG5cdFx0Y29uc3QgcGF5bG9hZCA9IHVua25vd25QYXlsb2FkIGFzIHtcblx0XHRcdHRhcmdldDogeyB3aW5kb3c/OiBzdHJpbmc7IHZpZXc/OiBzdHJpbmcgfTtcblx0XHRcdHZpZXdPcHRpb25zOiBPcGVuRmluLlZpZXdPcHRpb25zO1xuXHRcdH07XG5cdFx0Ly8gdGhlcmUgd291bGQgbGlrZWx5IGJlIHZhbGlkYXRpb24gYW5kIGFkZGl0aW9uYWwgbG9naWMgaGVyZS5cblx0XHRjb25zdCBwbGF0Zm9ybTogT3BlbkZpbi5QbGF0Zm9ybSA9IGZpbi5QbGF0Zm9ybS5nZXRDdXJyZW50U3luYygpO1xuXHRcdGxldCB0YXJnZXRXaW5kb3c6IE9wZW5GaW4uSWRlbnRpdHkgfCB1bmRlZmluZWQ7XG5cdFx0bGV0IHRhcmdldFZpZXc6IE9wZW5GaW4uSWRlbnRpdHkgfCB1bmRlZmluZWQ7XG5cdFx0Y29uc3Qgdmlld09wdGlvbnM6IFBhcnRpYWw8T3BlbkZpbi5WaWV3T3B0aW9ucz4gPSB7IHRhcmdldDogdW5kZWZpbmVkIH07XG5cdFx0T2JqZWN0LmFzc2lnbih2aWV3T3B0aW9ucywgcGF5bG9hZC52aWV3T3B0aW9ucyk7XG5cblx0XHRpZiAocGF5bG9hZC50YXJnZXQ/LndpbmRvdyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0YXJnZXRXaW5kb3cgPSB7IHV1aWQ6IGZpbi5tZS5pZGVudGl0eS51dWlkLCBuYW1lOiBwYXlsb2FkLnRhcmdldC53aW5kb3cgfTtcblx0XHR9XG5cblx0XHRpZiAocGF5bG9hZC50YXJnZXQ/LnZpZXcgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGFyZ2V0VmlldyA9IHsgdXVpZDogZmluLm1lLmlkZW50aXR5LnV1aWQsIG5hbWU6IHBheWxvYWQudGFyZ2V0LnZpZXcgfTtcblx0XHR9XG5cblx0XHRjb25zdCBjcmVhdGVkVmlldyA9IGF3YWl0IHBsYXRmb3JtLmNyZWF0ZVZpZXcoXG5cdFx0XHR2aWV3T3B0aW9ucyBhcyBPcGVuRmluLlZpZXdPcHRpb25zLFxuXHRcdFx0dGFyZ2V0V2luZG93LFxuXHRcdFx0dGFyZ2V0Vmlld1xuXHRcdCk7XG5cdFx0Y29uc3QgY3VycmVudFdpbmRvdyA9IGF3YWl0IGNyZWF0ZWRWaWV3LmdldEN1cnJlbnRXaW5kb3coKTtcblxuXHRcdGlmIChjdXJyZW50V2luZG93LmlkZW50aXR5Lm5hbWUgPT09IHVuZGVmaW5lZCB8fCBjdXJyZW50V2luZG93LmlkZW50aXR5Lm5hbWUgPT09IGZpbi5tZS5pZGVudGl0eS51dWlkKSB7XG5cdFx0XHRjb25zdCB3aW5kb3dBbGxvY2F0aW9uID0gbmV3IFByb21pc2U8eyB2aWV3OiBzdHJpbmc7IHdpbmRvdzogc3RyaW5nIH0+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0Y3JlYXRlZFZpZXdcblx0XHRcdFx0XHQub25jZShcInRhcmdldC1jaGFuZ2VkXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IGhvc3RXaW5kb3cgPSBhd2FpdCBjcmVhdGVkVmlldy5nZXRDdXJyZW50V2luZG93KCk7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHtcblx0XHRcdFx0XHRcdFx0dmlldzogY3JlYXRlZFZpZXcuaWRlbnRpdHkubmFtZSxcblx0XHRcdFx0XHRcdFx0d2luZG93OiBob3N0V2luZG93LmlkZW50aXR5Lm5hbWVcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmNhdGNoKCgpID0+IHt9KTtcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gd2luZG93QWxsb2NhdGlvbjtcblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdHZpZXc6IGNyZWF0ZWRWaWV3LmlkZW50aXR5Lm5hbWUsXG5cdFx0XHR3aW5kb3c6IGN1cnJlbnRXaW5kb3cuaWRlbnRpdHkubmFtZVxuXHRcdH07XG5cdH0pO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBwbGF0Zm9ybTogT3BlbkZpbi5QbGF0Zm9ybSA9IGZpbi5QbGF0Zm9ybS5nZXRDdXJyZW50U3luYygpO1xuXHRhd2FpdCBwbGF0Zm9ybS5vbmNlKFwicGxhdGZvcm0tYXBpLXJlYWR5XCIsIGFzeW5jICgpID0+IGluaXQoKSk7XG59KTtcblxuZmluLlBsYXRmb3JtLmluaXQoe1xuXHRvdmVycmlkZUNhbGxiYWNrOiBhc3luYyAoUHJvdmlkZXIpID0+IHtcblx0XHRjbGFzcyBPdmVycmlkZSBleHRlbmRzIFByb3ZpZGVyIHt9XG5cdFx0cmV0dXJuIG5ldyBPdmVycmlkZSgpO1xuXHR9XG59KS5jYXRjaCgoKSA9PiB7fSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=