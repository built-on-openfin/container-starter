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
/**
 * Override the interop broker.
 * @param InteropBroker class used to extend the custom override subclass.
 * @returns The override.
 */
function interopOverride(InteropBroker) {
    /**
     * Class that inherits the public InteropBroker methods that allows you to override existing
     * InteropBroker methods and add any custom logic to the returned InteropBroker instance used by your platform.
     */
    class Override extends InteropBroker {
        /**
         * Initialize and connect to external broker.
         */
        constructor() {
            super();
            this.externalBroker = fin.me.uuid === "platform-1" ? "platform-2" : "platform-1";
            this.externalClients = new Map();
            this.initializeBrokers().catch((error) => console.error(error));
        }
        /**
         * Initialize the brokers.
         * 1. Gets the instance of the specified external platform.
         * 2. Ensure the external platform application is running.
         * 3. Ensure that the platform api is finished initializing.
         * 4. Reset the map tracking the externalClient connections.
         */
        async initializeBrokers() {
            const platform = fin.Platform.wrapSync({ uuid: this.externalBroker });
            console.log("***** Inside InitializeBrokers() *****");
            if (await platform.Application.isRunning()) {
                console.log("***** executing isRunning loop *****");
                await this.setupContextGroups();
            }
            else {
                await platform.on("platform-api-ready", async () => {
                    console.log("***** executing platform-api-ready loop *****");
                    await this.setupContextGroups();
                });
            }
            await platform.Application.once("closed", () => {
                console.log("***** external platform closed *****");
                this.externalClients = new Map();
            });
        }
        /**
         * Setup the context groups
         * 1. Create a InteropClient instance by connecting to a member of Override.externalBrokers.
         * 2. externalContextGroups: using the created client instance, retrieve the externalBroker's context groups.
         * 3. Create a InteropClient instance by connecting to the current platforms interop broker.
         * 4. PlatformContextGroups: using the created client instance, retrieve the current platform context groups.
         * 5. Check to which externalContextGroups and platformContextGroups are the same.
         * 6. If the platformContextGroup is shared with an externalContextGroup create a colorClient and join the shared context group from the colorClient.
         */
        async setupContextGroups() {
            const externalInteropClient = fin.Interop.connectSync(this.externalBroker, {});
            const externalContextGroups = await externalInteropClient.getContextGroups();
            const platformInteropClient = fin.Interop.connectSync(fin.me.uuid, {});
            const platformContextGroups = await platformInteropClient.getContextGroups();
            // Array of ExternalClientMap Promises
            const externalContextGroupPromises = externalContextGroups.map(async (externalContextGroupInfo) => {
                // check to see if a Platform Client's context group has any of the channels as a externalContextGroup
                const hasPlatformContextGroup = platformContextGroups.some(({ id }) => id === externalContextGroupInfo.id);
                if (hasPlatformContextGroup) {
                    const colorClient = fin.Interop.connectSync(this.externalBroker, {});
                    await colorClient.joinContextGroup(externalContextGroupInfo.id);
                    // return the connected context group and corresponded color client.
                    return this.externalClients.set(externalContextGroupInfo.id, colorClient);
                }
            });
            try {
                await Promise.all(externalContextGroupPromises);
            }
            catch (error) {
                throw new Error(`Not able to setup handlers for external brokers: ${error}`);
            }
        }
        /**
         * Set the context on an external client.
         * if the externalClientsMap has previously derived contextGroup get the corresponding
         * colorClient and set the context on the matching colorClient.
         * @param context context object passed in from the @setContext method.
         * @param clientIdentity clientIdentity object passed in from the @setContext method.
         */
        async setContextOnExternalClient(context, clientIdentity) {
            // use accessor syntax for this.getClientState as it is not a public inherited method from InteropBroker
            // eslint-disable-next-line @typescript-eslint/dot-notation
            const state = this["getClientState"](clientIdentity);
            const ctxGroupId = state.contextGroupId;
            if (this.externalClients.has(ctxGroupId)) {
                const colorClient = this.externalClients.get(ctxGroupId);
                if (colorClient) {
                    await colorClient.setContext(context);
                }
            }
        }
        /**
         * Set the context.
         * @param payload object that is passed in when set context is called from an OpenFin entity using the interop api.
         * @param payload.context The context for the payload.
         * @param clientIdentity object containing the clientIdentity of the sender.
         */
        async setContext(payload, clientIdentity) {
            // create a new context object for interop setContext calls from the interop object within the Platform Client's windows or views.
            const { context } = payload;
            if (context._clientInfo) {
                const { _clientInfo: { uuid } } = context;
                // set context on external broker
                if ((uuid !== fin.me.uuid && uuid !== this.externalBroker) || uuid === this.externalBroker) {
                    const newContext = context;
                    delete newContext._clientInfo;
                    super.setContext({ ...payload, context: newContext }, clientIdentity);
                }
            }
            else {
                // If there is no _clientInfo object present on the context object we treat it as a brand new object and set it on both the platform and external clients.
                const newContext = { ...context, _clientInfo: { uuid: fin.me.uuid } };
                await this.setContextOnExternalClient(newContext, clientIdentity);
                super.setContext(payload, clientIdentity);
            }
        }
    }
    return new Override();
}
fin.Platform.init({ interopOverride }).catch((error) => console.error(error));


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXR1cC1jcm9zcy1wbGF0Zm9ybS1pbnRlcm9wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NldHVwLWNyb3NzLXBsYXRmb3JtLWludGVyb3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zZXR1cC1jcm9zcy1wbGF0Zm9ybS1pbnRlcm9wLy4vY2xpZW50L3NyYy9wcm92aWRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG5pbXBvcnQgdHlwZSBPcGVuRmluIGZyb20gXCJAb3BlbmZpbi9jb3JlXCI7XG5pbXBvcnQgdHlwZSB7IEV4dGVybmFsQ2xpZW50TWFwLCBFeHRlcm5hbENvbnRleHQgfSBmcm9tIFwiLi9zaGFwZXNcIjtcblxuLyoqXG4gKiBPdmVycmlkZSB0aGUgaW50ZXJvcCBicm9rZXIuXG4gKiBAcGFyYW0gSW50ZXJvcEJyb2tlciBjbGFzcyB1c2VkIHRvIGV4dGVuZCB0aGUgY3VzdG9tIG92ZXJyaWRlIHN1YmNsYXNzLlxuICogQHJldHVybnMgVGhlIG92ZXJyaWRlLlxuICovXG5mdW5jdGlvbiBpbnRlcm9wT3ZlcnJpZGUoSW50ZXJvcEJyb2tlcjogT3BlbkZpbi5Db25zdHJ1Y3RvcjxPcGVuRmluLkludGVyb3BCcm9rZXI+KTogT3BlbkZpbi5JbnRlcm9wQnJva2VyIHtcblx0LyoqXG5cdCAqIENsYXNzIHRoYXQgaW5oZXJpdHMgdGhlIHB1YmxpYyBJbnRlcm9wQnJva2VyIG1ldGhvZHMgdGhhdCBhbGxvd3MgeW91IHRvIG92ZXJyaWRlIGV4aXN0aW5nXG5cdCAqIEludGVyb3BCcm9rZXIgbWV0aG9kcyBhbmQgYWRkIGFueSBjdXN0b20gbG9naWMgdG8gdGhlIHJldHVybmVkIEludGVyb3BCcm9rZXIgaW5zdGFuY2UgdXNlZCBieSB5b3VyIHBsYXRmb3JtLlxuXHQgKi9cblx0Y2xhc3MgT3ZlcnJpZGUgZXh0ZW5kcyBJbnRlcm9wQnJva2VyIHtcblx0XHRwdWJsaWMgZXh0ZXJuYWxCcm9rZXI6IHN0cmluZztcblxuXHRcdHB1YmxpYyBleHRlcm5hbENsaWVudHM6IEV4dGVybmFsQ2xpZW50TWFwO1xuXG5cdFx0LyoqXG5cdFx0ICogSW5pdGlhbGl6ZSBhbmQgY29ubmVjdCB0byBleHRlcm5hbCBicm9rZXIuXG5cdFx0ICovXG5cdFx0Y29uc3RydWN0b3IoKSB7XG5cdFx0XHRzdXBlcigpO1xuXHRcdFx0dGhpcy5leHRlcm5hbEJyb2tlciA9IGZpbi5tZS51dWlkID09PSBcInBsYXRmb3JtLTFcIiA/IFwicGxhdGZvcm0tMlwiIDogXCJwbGF0Zm9ybS0xXCI7XG5cdFx0XHR0aGlzLmV4dGVybmFsQ2xpZW50cyA9IG5ldyBNYXAoKTtcblx0XHRcdHRoaXMuaW5pdGlhbGl6ZUJyb2tlcnMoKS5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBJbml0aWFsaXplIHRoZSBicm9rZXJzLlxuXHRcdCAqIDEuIEdldHMgdGhlIGluc3RhbmNlIG9mIHRoZSBzcGVjaWZpZWQgZXh0ZXJuYWwgcGxhdGZvcm0uXG5cdFx0ICogMi4gRW5zdXJlIHRoZSBleHRlcm5hbCBwbGF0Zm9ybSBhcHBsaWNhdGlvbiBpcyBydW5uaW5nLlxuXHRcdCAqIDMuIEVuc3VyZSB0aGF0IHRoZSBwbGF0Zm9ybSBhcGkgaXMgZmluaXNoZWQgaW5pdGlhbGl6aW5nLlxuXHRcdCAqIDQuIFJlc2V0IHRoZSBtYXAgdHJhY2tpbmcgdGhlIGV4dGVybmFsQ2xpZW50IGNvbm5lY3Rpb25zLlxuXHRcdCAqL1xuXHRcdHB1YmxpYyBhc3luYyBpbml0aWFsaXplQnJva2VycygpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRcdGNvbnN0IHBsYXRmb3JtOiBPcGVuRmluLlBsYXRmb3JtID0gZmluLlBsYXRmb3JtLndyYXBTeW5jKHsgdXVpZDogdGhpcy5leHRlcm5hbEJyb2tlciB9KTtcblx0XHRcdGNvbnNvbGUubG9nKFwiKioqKiogSW5zaWRlIEluaXRpYWxpemVCcm9rZXJzKCkgKioqKipcIik7XG5cblx0XHRcdGlmIChhd2FpdCBwbGF0Zm9ybS5BcHBsaWNhdGlvbi5pc1J1bm5pbmcoKSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIioqKioqIGV4ZWN1dGluZyBpc1J1bm5pbmcgbG9vcCAqKioqKlwiKTtcblx0XHRcdFx0YXdhaXQgdGhpcy5zZXR1cENvbnRleHRHcm91cHMoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGF3YWl0IHBsYXRmb3JtLm9uKFwicGxhdGZvcm0tYXBpLXJlYWR5XCIsIGFzeW5jICgpID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIioqKioqIGV4ZWN1dGluZyBwbGF0Zm9ybS1hcGktcmVhZHkgbG9vcCAqKioqKlwiKTtcblx0XHRcdFx0XHRhd2FpdCB0aGlzLnNldHVwQ29udGV4dEdyb3VwcygpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0YXdhaXQgcGxhdGZvcm0uQXBwbGljYXRpb24ub25jZShcImNsb3NlZFwiLCAoKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiKioqKiogZXh0ZXJuYWwgcGxhdGZvcm0gY2xvc2VkICoqKioqXCIpO1xuXHRcdFx0XHR0aGlzLmV4dGVybmFsQ2xpZW50cyA9IG5ldyBNYXAoKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNldHVwIHRoZSBjb250ZXh0IGdyb3Vwc1xuXHRcdCAqIDEuIENyZWF0ZSBhIEludGVyb3BDbGllbnQgaW5zdGFuY2UgYnkgY29ubmVjdGluZyB0byBhIG1lbWJlciBvZiBPdmVycmlkZS5leHRlcm5hbEJyb2tlcnMuXG5cdFx0ICogMi4gZXh0ZXJuYWxDb250ZXh0R3JvdXBzOiB1c2luZyB0aGUgY3JlYXRlZCBjbGllbnQgaW5zdGFuY2UsIHJldHJpZXZlIHRoZSBleHRlcm5hbEJyb2tlcidzIGNvbnRleHQgZ3JvdXBzLlxuXHRcdCAqIDMuIENyZWF0ZSBhIEludGVyb3BDbGllbnQgaW5zdGFuY2UgYnkgY29ubmVjdGluZyB0byB0aGUgY3VycmVudCBwbGF0Zm9ybXMgaW50ZXJvcCBicm9rZXIuXG5cdFx0ICogNC4gUGxhdGZvcm1Db250ZXh0R3JvdXBzOiB1c2luZyB0aGUgY3JlYXRlZCBjbGllbnQgaW5zdGFuY2UsIHJldHJpZXZlIHRoZSBjdXJyZW50IHBsYXRmb3JtIGNvbnRleHQgZ3JvdXBzLlxuXHRcdCAqIDUuIENoZWNrIHRvIHdoaWNoIGV4dGVybmFsQ29udGV4dEdyb3VwcyBhbmQgcGxhdGZvcm1Db250ZXh0R3JvdXBzIGFyZSB0aGUgc2FtZS5cblx0XHQgKiA2LiBJZiB0aGUgcGxhdGZvcm1Db250ZXh0R3JvdXAgaXMgc2hhcmVkIHdpdGggYW4gZXh0ZXJuYWxDb250ZXh0R3JvdXAgY3JlYXRlIGEgY29sb3JDbGllbnQgYW5kIGpvaW4gdGhlIHNoYXJlZCBjb250ZXh0IGdyb3VwIGZyb20gdGhlIGNvbG9yQ2xpZW50LlxuXHRcdCAqL1xuXHRcdHB1YmxpYyBhc3luYyBzZXR1cENvbnRleHRHcm91cHMoKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0XHRjb25zdCBleHRlcm5hbEludGVyb3BDbGllbnQ6IE9wZW5GaW4uSW50ZXJvcENsaWVudCA9IGZpbi5JbnRlcm9wLmNvbm5lY3RTeW5jKHRoaXMuZXh0ZXJuYWxCcm9rZXIsIHt9KTtcblx0XHRcdGNvbnN0IGV4dGVybmFsQ29udGV4dEdyb3VwczogT3BlbkZpbi5Db250ZXh0R3JvdXBJbmZvW10gPVxuXHRcdFx0XHRhd2FpdCBleHRlcm5hbEludGVyb3BDbGllbnQuZ2V0Q29udGV4dEdyb3VwcygpO1xuXG5cdFx0XHRjb25zdCBwbGF0Zm9ybUludGVyb3BDbGllbnQ6IE9wZW5GaW4uSW50ZXJvcENsaWVudCA9IGZpbi5JbnRlcm9wLmNvbm5lY3RTeW5jKGZpbi5tZS51dWlkLCB7fSk7XG5cdFx0XHRjb25zdCBwbGF0Zm9ybUNvbnRleHRHcm91cHM6IE9wZW5GaW4uQ29udGV4dEdyb3VwSW5mb1tdID1cblx0XHRcdFx0YXdhaXQgcGxhdGZvcm1JbnRlcm9wQ2xpZW50LmdldENvbnRleHRHcm91cHMoKTtcblxuXHRcdFx0Ly8gQXJyYXkgb2YgRXh0ZXJuYWxDbGllbnRNYXAgUHJvbWlzZXNcblx0XHRcdGNvbnN0IGV4dGVybmFsQ29udGV4dEdyb3VwUHJvbWlzZXM6IFByb21pc2U8RXh0ZXJuYWxDbGllbnRNYXAgfCB1bmRlZmluZWQ+W10gPVxuXHRcdFx0XHRleHRlcm5hbENvbnRleHRHcm91cHMubWFwKFxuXHRcdFx0XHRcdGFzeW5jIChcblx0XHRcdFx0XHRcdGV4dGVybmFsQ29udGV4dEdyb3VwSW5mbzogT3BlbkZpbi5Db250ZXh0R3JvdXBJbmZvXG5cdFx0XHRcdFx0KTogUHJvbWlzZTxFeHRlcm5hbENsaWVudE1hcCB8IHVuZGVmaW5lZD4gPT4ge1xuXHRcdFx0XHRcdFx0Ly8gY2hlY2sgdG8gc2VlIGlmIGEgUGxhdGZvcm0gQ2xpZW50J3MgY29udGV4dCBncm91cCBoYXMgYW55IG9mIHRoZSBjaGFubmVscyBhcyBhIGV4dGVybmFsQ29udGV4dEdyb3VwXG5cdFx0XHRcdFx0XHRjb25zdCBoYXNQbGF0Zm9ybUNvbnRleHRHcm91cDogYm9vbGVhbiA9IHBsYXRmb3JtQ29udGV4dEdyb3Vwcy5zb21lKFxuXHRcdFx0XHRcdFx0XHQoeyBpZCB9OiBPcGVuRmluLkNvbnRleHRHcm91cEluZm8pID0+IGlkID09PSBleHRlcm5hbENvbnRleHRHcm91cEluZm8uaWRcblx0XHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRcdGlmIChoYXNQbGF0Zm9ybUNvbnRleHRHcm91cCkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBjb2xvckNsaWVudDogT3BlbkZpbi5JbnRlcm9wQ2xpZW50ID0gZmluLkludGVyb3AuY29ubmVjdFN5bmModGhpcy5leHRlcm5hbEJyb2tlciwge30pO1xuXHRcdFx0XHRcdFx0XHRhd2FpdCBjb2xvckNsaWVudC5qb2luQ29udGV4dEdyb3VwKGV4dGVybmFsQ29udGV4dEdyb3VwSW5mby5pZCk7XG5cdFx0XHRcdFx0XHRcdC8vIHJldHVybiB0aGUgY29ubmVjdGVkIGNvbnRleHQgZ3JvdXAgYW5kIGNvcnJlc3BvbmRlZCBjb2xvciBjbGllbnQuXG5cdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmV4dGVybmFsQ2xpZW50cy5zZXQoZXh0ZXJuYWxDb250ZXh0R3JvdXBJbmZvLmlkLCBjb2xvckNsaWVudCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgUHJvbWlzZS5hbGwoZXh0ZXJuYWxDb250ZXh0R3JvdXBQcm9taXNlcyk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYE5vdCBhYmxlIHRvIHNldHVwIGhhbmRsZXJzIGZvciBleHRlcm5hbCBicm9rZXJzOiAke2Vycm9yfWApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNldCB0aGUgY29udGV4dCBvbiBhbiBleHRlcm5hbCBjbGllbnQuXG5cdFx0ICogaWYgdGhlIGV4dGVybmFsQ2xpZW50c01hcCBoYXMgcHJldmlvdXNseSBkZXJpdmVkIGNvbnRleHRHcm91cCBnZXQgdGhlIGNvcnJlc3BvbmRpbmdcblx0XHQgKiBjb2xvckNsaWVudCBhbmQgc2V0IHRoZSBjb250ZXh0IG9uIHRoZSBtYXRjaGluZyBjb2xvckNsaWVudC5cblx0XHQgKiBAcGFyYW0gY29udGV4dCBjb250ZXh0IG9iamVjdCBwYXNzZWQgaW4gZnJvbSB0aGUgQHNldENvbnRleHQgbWV0aG9kLlxuXHRcdCAqIEBwYXJhbSBjbGllbnRJZGVudGl0eSBjbGllbnRJZGVudGl0eSBvYmplY3QgcGFzc2VkIGluIGZyb20gdGhlIEBzZXRDb250ZXh0IG1ldGhvZC5cblx0XHQgKi9cblx0XHRwdWJsaWMgYXN5bmMgc2V0Q29udGV4dE9uRXh0ZXJuYWxDbGllbnQoXG5cdFx0XHRjb250ZXh0OiBFeHRlcm5hbENvbnRleHQsXG5cdFx0XHRjbGllbnRJZGVudGl0eTogT3BlbkZpbi5DbGllbnRJZGVudGl0eVxuXHRcdCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdFx0Ly8gdXNlIGFjY2Vzc29yIHN5bnRheCBmb3IgdGhpcy5nZXRDbGllbnRTdGF0ZSBhcyBpdCBpcyBub3QgYSBwdWJsaWMgaW5oZXJpdGVkIG1ldGhvZCBmcm9tIEludGVyb3BCcm9rZXJcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZG90LW5vdGF0aW9uXG5cdFx0XHRjb25zdCBzdGF0ZSA9IHRoaXNbXCJnZXRDbGllbnRTdGF0ZVwiXShjbGllbnRJZGVudGl0eSk7XG5cdFx0XHRjb25zdCBjdHhHcm91cElkID0gc3RhdGUuY29udGV4dEdyb3VwSWQgYXMgc3RyaW5nO1xuXHRcdFx0aWYgKHRoaXMuZXh0ZXJuYWxDbGllbnRzLmhhcyhjdHhHcm91cElkKSkge1xuXHRcdFx0XHRjb25zdCBjb2xvckNsaWVudCA9IHRoaXMuZXh0ZXJuYWxDbGllbnRzLmdldChjdHhHcm91cElkKTtcblx0XHRcdFx0aWYgKGNvbG9yQ2xpZW50KSB7XG5cdFx0XHRcdFx0YXdhaXQgY29sb3JDbGllbnQuc2V0Q29udGV4dChjb250ZXh0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNldCB0aGUgY29udGV4dC5cblx0XHQgKiBAcGFyYW0gcGF5bG9hZCBvYmplY3QgdGhhdCBpcyBwYXNzZWQgaW4gd2hlbiBzZXQgY29udGV4dCBpcyBjYWxsZWQgZnJvbSBhbiBPcGVuRmluIGVudGl0eSB1c2luZyB0aGUgaW50ZXJvcCBhcGkuXG5cdFx0ICogQHBhcmFtIHBheWxvYWQuY29udGV4dCBUaGUgY29udGV4dCBmb3IgdGhlIHBheWxvYWQuXG5cdFx0ICogQHBhcmFtIGNsaWVudElkZW50aXR5IG9iamVjdCBjb250YWluaW5nIHRoZSBjbGllbnRJZGVudGl0eSBvZiB0aGUgc2VuZGVyLlxuXHRcdCAqL1xuXHRcdHB1YmxpYyBhc3luYyBzZXRDb250ZXh0KFxuXHRcdFx0cGF5bG9hZDogeyBjb250ZXh0OiBFeHRlcm5hbENvbnRleHQgfSxcblx0XHRcdGNsaWVudElkZW50aXR5OiBPcGVuRmluLkNsaWVudElkZW50aXR5XG5cdFx0KTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0XHQvLyBjcmVhdGUgYSBuZXcgY29udGV4dCBvYmplY3QgZm9yIGludGVyb3Agc2V0Q29udGV4dCBjYWxscyBmcm9tIHRoZSBpbnRlcm9wIG9iamVjdCB3aXRoaW4gdGhlIFBsYXRmb3JtIENsaWVudCdzIHdpbmRvd3Mgb3Igdmlld3MuXG5cdFx0XHRjb25zdCB7IGNvbnRleHQgfSA9IHBheWxvYWQ7XG5cdFx0XHRpZiAoY29udGV4dC5fY2xpZW50SW5mbykge1xuXHRcdFx0XHRjb25zdCB7XG5cdFx0XHRcdFx0X2NsaWVudEluZm86IHsgdXVpZCB9XG5cdFx0XHRcdH0gPSBjb250ZXh0O1xuXHRcdFx0XHQvLyBzZXQgY29udGV4dCBvbiBleHRlcm5hbCBicm9rZXJcblx0XHRcdFx0aWYgKCh1dWlkICE9PSBmaW4ubWUudXVpZCAmJiB1dWlkICE9PSB0aGlzLmV4dGVybmFsQnJva2VyKSB8fCB1dWlkID09PSB0aGlzLmV4dGVybmFsQnJva2VyKSB7XG5cdFx0XHRcdFx0Y29uc3QgbmV3Q29udGV4dCA9IGNvbnRleHQ7XG5cdFx0XHRcdFx0ZGVsZXRlIG5ld0NvbnRleHQuX2NsaWVudEluZm87XG5cdFx0XHRcdFx0c3VwZXIuc2V0Q29udGV4dCh7IC4uLnBheWxvYWQsIGNvbnRleHQ6IG5ld0NvbnRleHQgfSwgY2xpZW50SWRlbnRpdHkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBJZiB0aGVyZSBpcyBubyBfY2xpZW50SW5mbyBvYmplY3QgcHJlc2VudCBvbiB0aGUgY29udGV4dCBvYmplY3Qgd2UgdHJlYXQgaXQgYXMgYSBicmFuZCBuZXcgb2JqZWN0IGFuZCBzZXQgaXQgb24gYm90aCB0aGUgcGxhdGZvcm0gYW5kIGV4dGVybmFsIGNsaWVudHMuXG5cdFx0XHRcdGNvbnN0IG5ld0NvbnRleHQgPSB7IC4uLmNvbnRleHQsIF9jbGllbnRJbmZvOiB7IHV1aWQ6IGZpbi5tZS51dWlkIH0gfTtcblx0XHRcdFx0YXdhaXQgdGhpcy5zZXRDb250ZXh0T25FeHRlcm5hbENsaWVudChuZXdDb250ZXh0LCBjbGllbnRJZGVudGl0eSk7XG5cdFx0XHRcdHN1cGVyLnNldENvbnRleHQocGF5bG9hZCwgY2xpZW50SWRlbnRpdHkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gbmV3IE92ZXJyaWRlKCk7XG59XG5cbmZpbi5QbGF0Zm9ybS5pbml0KHsgaW50ZXJvcE92ZXJyaWRlIH0pLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9