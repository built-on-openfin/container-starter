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
            await platform.on("platform-api-ready", async () => {
                console.log("***** executing platform-api-ready loop *****");
                await this.setupContextGroups();
            });
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
         * @param payload object that is passed in when set context is called from an Here entity using the interop api.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2V0dXAtY3Jvc3MtcGxhdGZvcm0taW50ZXJvcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zZXR1cC1jcm9zcy1wbGF0Zm9ybS1pbnRlcm9wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2V0dXAtY3Jvc3MtcGxhdGZvcm0taW50ZXJvcC8uL2NsaWVudC9zcmMvcHJvdmlkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xuaW1wb3J0IHR5cGUgT3BlbkZpbiBmcm9tIFwiQG9wZW5maW4vY29yZVwiO1xuaW1wb3J0IHR5cGUgeyBFeHRlcm5hbENsaWVudE1hcCwgRXh0ZXJuYWxDb250ZXh0IH0gZnJvbSBcIi4vc2hhcGVzXCI7XG5cbi8qKlxuICogT3ZlcnJpZGUgdGhlIGludGVyb3AgYnJva2VyLlxuICogQHBhcmFtIEludGVyb3BCcm9rZXIgY2xhc3MgdXNlZCB0byBleHRlbmQgdGhlIGN1c3RvbSBvdmVycmlkZSBzdWJjbGFzcy5cbiAqIEByZXR1cm5zIFRoZSBvdmVycmlkZS5cbiAqL1xuZnVuY3Rpb24gaW50ZXJvcE92ZXJyaWRlKEludGVyb3BCcm9rZXI6IE9wZW5GaW4uQ29uc3RydWN0b3I8T3BlbkZpbi5JbnRlcm9wQnJva2VyPik6IE9wZW5GaW4uSW50ZXJvcEJyb2tlciB7XG5cdC8qKlxuXHQgKiBDbGFzcyB0aGF0IGluaGVyaXRzIHRoZSBwdWJsaWMgSW50ZXJvcEJyb2tlciBtZXRob2RzIHRoYXQgYWxsb3dzIHlvdSB0byBvdmVycmlkZSBleGlzdGluZ1xuXHQgKiBJbnRlcm9wQnJva2VyIG1ldGhvZHMgYW5kIGFkZCBhbnkgY3VzdG9tIGxvZ2ljIHRvIHRoZSByZXR1cm5lZCBJbnRlcm9wQnJva2VyIGluc3RhbmNlIHVzZWQgYnkgeW91ciBwbGF0Zm9ybS5cblx0ICovXG5cdGNsYXNzIE92ZXJyaWRlIGV4dGVuZHMgSW50ZXJvcEJyb2tlciB7XG5cdFx0cHVibGljIGV4dGVybmFsQnJva2VyOiBzdHJpbmc7XG5cblx0XHRwdWJsaWMgZXh0ZXJuYWxDbGllbnRzOiBFeHRlcm5hbENsaWVudE1hcDtcblxuXHRcdC8qKlxuXHRcdCAqIEluaXRpYWxpemUgYW5kIGNvbm5lY3QgdG8gZXh0ZXJuYWwgYnJva2VyLlxuXHRcdCAqL1xuXHRcdGNvbnN0cnVjdG9yKCkge1xuXHRcdFx0c3VwZXIoKTtcblx0XHRcdHRoaXMuZXh0ZXJuYWxCcm9rZXIgPSBmaW4ubWUudXVpZCA9PT0gXCJwbGF0Zm9ybS0xXCIgPyBcInBsYXRmb3JtLTJcIiA6IFwicGxhdGZvcm0tMVwiO1xuXHRcdFx0dGhpcy5leHRlcm5hbENsaWVudHMgPSBuZXcgTWFwKCk7XG5cdFx0XHR0aGlzLmluaXRpYWxpemVCcm9rZXJzKCkuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogSW5pdGlhbGl6ZSB0aGUgYnJva2Vycy5cblx0XHQgKiAxLiBHZXRzIHRoZSBpbnN0YW5jZSBvZiB0aGUgc3BlY2lmaWVkIGV4dGVybmFsIHBsYXRmb3JtLlxuXHRcdCAqIDIuIEVuc3VyZSB0aGUgZXh0ZXJuYWwgcGxhdGZvcm0gYXBwbGljYXRpb24gaXMgcnVubmluZy5cblx0XHQgKiAzLiBFbnN1cmUgdGhhdCB0aGUgcGxhdGZvcm0gYXBpIGlzIGZpbmlzaGVkIGluaXRpYWxpemluZy5cblx0XHQgKiA0LiBSZXNldCB0aGUgbWFwIHRyYWNraW5nIHRoZSBleHRlcm5hbENsaWVudCBjb25uZWN0aW9ucy5cblx0XHQgKi9cblx0XHRwdWJsaWMgYXN5bmMgaW5pdGlhbGl6ZUJyb2tlcnMoKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0XHRjb25zdCBwbGF0Zm9ybTogT3BlbkZpbi5QbGF0Zm9ybSA9IGZpbi5QbGF0Zm9ybS53cmFwU3luYyh7IHV1aWQ6IHRoaXMuZXh0ZXJuYWxCcm9rZXIgfSk7XG5cdFx0XHRjb25zb2xlLmxvZyhcIioqKioqIEluc2lkZSBJbml0aWFsaXplQnJva2VycygpICoqKioqXCIpO1xuXG5cdFx0XHRpZiAoYXdhaXQgcGxhdGZvcm0uQXBwbGljYXRpb24uaXNSdW5uaW5nKCkpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCIqKioqKiBleGVjdXRpbmcgaXNSdW5uaW5nIGxvb3AgKioqKipcIik7XG5cdFx0XHRcdGF3YWl0IHRoaXMuc2V0dXBDb250ZXh0R3JvdXBzKCk7XG5cdFx0XHR9XG5cblx0XHRcdGF3YWl0IHBsYXRmb3JtLm9uKFwicGxhdGZvcm0tYXBpLXJlYWR5XCIsIGFzeW5jICgpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCIqKioqKiBleGVjdXRpbmcgcGxhdGZvcm0tYXBpLXJlYWR5IGxvb3AgKioqKipcIik7XG5cdFx0XHRcdGF3YWl0IHRoaXMuc2V0dXBDb250ZXh0R3JvdXBzKCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0YXdhaXQgcGxhdGZvcm0uQXBwbGljYXRpb24ub25jZShcImNsb3NlZFwiLCAoKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiKioqKiogZXh0ZXJuYWwgcGxhdGZvcm0gY2xvc2VkICoqKioqXCIpO1xuXHRcdFx0XHR0aGlzLmV4dGVybmFsQ2xpZW50cyA9IG5ldyBNYXAoKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNldHVwIHRoZSBjb250ZXh0IGdyb3Vwc1xuXHRcdCAqIDEuIENyZWF0ZSBhIEludGVyb3BDbGllbnQgaW5zdGFuY2UgYnkgY29ubmVjdGluZyB0byBhIG1lbWJlciBvZiBPdmVycmlkZS5leHRlcm5hbEJyb2tlcnMuXG5cdFx0ICogMi4gZXh0ZXJuYWxDb250ZXh0R3JvdXBzOiB1c2luZyB0aGUgY3JlYXRlZCBjbGllbnQgaW5zdGFuY2UsIHJldHJpZXZlIHRoZSBleHRlcm5hbEJyb2tlcidzIGNvbnRleHQgZ3JvdXBzLlxuXHRcdCAqIDMuIENyZWF0ZSBhIEludGVyb3BDbGllbnQgaW5zdGFuY2UgYnkgY29ubmVjdGluZyB0byB0aGUgY3VycmVudCBwbGF0Zm9ybXMgaW50ZXJvcCBicm9rZXIuXG5cdFx0ICogNC4gUGxhdGZvcm1Db250ZXh0R3JvdXBzOiB1c2luZyB0aGUgY3JlYXRlZCBjbGllbnQgaW5zdGFuY2UsIHJldHJpZXZlIHRoZSBjdXJyZW50IHBsYXRmb3JtIGNvbnRleHQgZ3JvdXBzLlxuXHRcdCAqIDUuIENoZWNrIHRvIHdoaWNoIGV4dGVybmFsQ29udGV4dEdyb3VwcyBhbmQgcGxhdGZvcm1Db250ZXh0R3JvdXBzIGFyZSB0aGUgc2FtZS5cblx0XHQgKiA2LiBJZiB0aGUgcGxhdGZvcm1Db250ZXh0R3JvdXAgaXMgc2hhcmVkIHdpdGggYW4gZXh0ZXJuYWxDb250ZXh0R3JvdXAgY3JlYXRlIGEgY29sb3JDbGllbnQgYW5kIGpvaW4gdGhlIHNoYXJlZCBjb250ZXh0IGdyb3VwIGZyb20gdGhlIGNvbG9yQ2xpZW50LlxuXHRcdCAqL1xuXHRcdHB1YmxpYyBhc3luYyBzZXR1cENvbnRleHRHcm91cHMoKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0XHRjb25zdCBleHRlcm5hbEludGVyb3BDbGllbnQ6IE9wZW5GaW4uSW50ZXJvcENsaWVudCA9IGZpbi5JbnRlcm9wLmNvbm5lY3RTeW5jKHRoaXMuZXh0ZXJuYWxCcm9rZXIsIHt9KTtcblx0XHRcdGNvbnN0IGV4dGVybmFsQ29udGV4dEdyb3VwczogT3BlbkZpbi5Db250ZXh0R3JvdXBJbmZvW10gPVxuXHRcdFx0XHRhd2FpdCBleHRlcm5hbEludGVyb3BDbGllbnQuZ2V0Q29udGV4dEdyb3VwcygpO1xuXG5cdFx0XHRjb25zdCBwbGF0Zm9ybUludGVyb3BDbGllbnQ6IE9wZW5GaW4uSW50ZXJvcENsaWVudCA9IGZpbi5JbnRlcm9wLmNvbm5lY3RTeW5jKGZpbi5tZS51dWlkLCB7fSk7XG5cdFx0XHRjb25zdCBwbGF0Zm9ybUNvbnRleHRHcm91cHM6IE9wZW5GaW4uQ29udGV4dEdyb3VwSW5mb1tdID1cblx0XHRcdFx0YXdhaXQgcGxhdGZvcm1JbnRlcm9wQ2xpZW50LmdldENvbnRleHRHcm91cHMoKTtcblxuXHRcdFx0Ly8gQXJyYXkgb2YgRXh0ZXJuYWxDbGllbnRNYXAgUHJvbWlzZXNcblx0XHRcdGNvbnN0IGV4dGVybmFsQ29udGV4dEdyb3VwUHJvbWlzZXM6IFByb21pc2U8RXh0ZXJuYWxDbGllbnRNYXAgfCB1bmRlZmluZWQ+W10gPVxuXHRcdFx0XHRleHRlcm5hbENvbnRleHRHcm91cHMubWFwKFxuXHRcdFx0XHRcdGFzeW5jIChcblx0XHRcdFx0XHRcdGV4dGVybmFsQ29udGV4dEdyb3VwSW5mbzogT3BlbkZpbi5Db250ZXh0R3JvdXBJbmZvXG5cdFx0XHRcdFx0KTogUHJvbWlzZTxFeHRlcm5hbENsaWVudE1hcCB8IHVuZGVmaW5lZD4gPT4ge1xuXHRcdFx0XHRcdFx0Ly8gY2hlY2sgdG8gc2VlIGlmIGEgUGxhdGZvcm0gQ2xpZW50J3MgY29udGV4dCBncm91cCBoYXMgYW55IG9mIHRoZSBjaGFubmVscyBhcyBhIGV4dGVybmFsQ29udGV4dEdyb3VwXG5cdFx0XHRcdFx0XHRjb25zdCBoYXNQbGF0Zm9ybUNvbnRleHRHcm91cDogYm9vbGVhbiA9IHBsYXRmb3JtQ29udGV4dEdyb3Vwcy5zb21lKFxuXHRcdFx0XHRcdFx0XHQoeyBpZCB9OiBPcGVuRmluLkNvbnRleHRHcm91cEluZm8pID0+IGlkID09PSBleHRlcm5hbENvbnRleHRHcm91cEluZm8uaWRcblx0XHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRcdGlmIChoYXNQbGF0Zm9ybUNvbnRleHRHcm91cCkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBjb2xvckNsaWVudDogT3BlbkZpbi5JbnRlcm9wQ2xpZW50ID0gZmluLkludGVyb3AuY29ubmVjdFN5bmModGhpcy5leHRlcm5hbEJyb2tlciwge30pO1xuXHRcdFx0XHRcdFx0XHRhd2FpdCBjb2xvckNsaWVudC5qb2luQ29udGV4dEdyb3VwKGV4dGVybmFsQ29udGV4dEdyb3VwSW5mby5pZCk7XG5cdFx0XHRcdFx0XHRcdC8vIHJldHVybiB0aGUgY29ubmVjdGVkIGNvbnRleHQgZ3JvdXAgYW5kIGNvcnJlc3BvbmRlZCBjb2xvciBjbGllbnQuXG5cdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmV4dGVybmFsQ2xpZW50cy5zZXQoZXh0ZXJuYWxDb250ZXh0R3JvdXBJbmZvLmlkLCBjb2xvckNsaWVudCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgUHJvbWlzZS5hbGwoZXh0ZXJuYWxDb250ZXh0R3JvdXBQcm9taXNlcyk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYE5vdCBhYmxlIHRvIHNldHVwIGhhbmRsZXJzIGZvciBleHRlcm5hbCBicm9rZXJzOiAke2Vycm9yfWApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNldCB0aGUgY29udGV4dCBvbiBhbiBleHRlcm5hbCBjbGllbnQuXG5cdFx0ICogaWYgdGhlIGV4dGVybmFsQ2xpZW50c01hcCBoYXMgcHJldmlvdXNseSBkZXJpdmVkIGNvbnRleHRHcm91cCBnZXQgdGhlIGNvcnJlc3BvbmRpbmdcblx0XHQgKiBjb2xvckNsaWVudCBhbmQgc2V0IHRoZSBjb250ZXh0IG9uIHRoZSBtYXRjaGluZyBjb2xvckNsaWVudC5cblx0XHQgKiBAcGFyYW0gY29udGV4dCBjb250ZXh0IG9iamVjdCBwYXNzZWQgaW4gZnJvbSB0aGUgQHNldENvbnRleHQgbWV0aG9kLlxuXHRcdCAqIEBwYXJhbSBjbGllbnRJZGVudGl0eSBjbGllbnRJZGVudGl0eSBvYmplY3QgcGFzc2VkIGluIGZyb20gdGhlIEBzZXRDb250ZXh0IG1ldGhvZC5cblx0XHQgKi9cblx0XHRwdWJsaWMgYXN5bmMgc2V0Q29udGV4dE9uRXh0ZXJuYWxDbGllbnQoXG5cdFx0XHRjb250ZXh0OiBFeHRlcm5hbENvbnRleHQsXG5cdFx0XHRjbGllbnRJZGVudGl0eTogT3BlbkZpbi5DbGllbnRJZGVudGl0eVxuXHRcdCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdFx0Ly8gdXNlIGFjY2Vzc29yIHN5bnRheCBmb3IgdGhpcy5nZXRDbGllbnRTdGF0ZSBhcyBpdCBpcyBub3QgYSBwdWJsaWMgaW5oZXJpdGVkIG1ldGhvZCBmcm9tIEludGVyb3BCcm9rZXJcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZG90LW5vdGF0aW9uXG5cdFx0XHRjb25zdCBzdGF0ZSA9IHRoaXNbXCJnZXRDbGllbnRTdGF0ZVwiXShjbGllbnRJZGVudGl0eSk7XG5cdFx0XHRjb25zdCBjdHhHcm91cElkID0gc3RhdGUuY29udGV4dEdyb3VwSWQgYXMgc3RyaW5nO1xuXHRcdFx0aWYgKHRoaXMuZXh0ZXJuYWxDbGllbnRzLmhhcyhjdHhHcm91cElkKSkge1xuXHRcdFx0XHRjb25zdCBjb2xvckNsaWVudCA9IHRoaXMuZXh0ZXJuYWxDbGllbnRzLmdldChjdHhHcm91cElkKTtcblx0XHRcdFx0aWYgKGNvbG9yQ2xpZW50KSB7XG5cdFx0XHRcdFx0YXdhaXQgY29sb3JDbGllbnQuc2V0Q29udGV4dChjb250ZXh0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNldCB0aGUgY29udGV4dC5cblx0XHQgKiBAcGFyYW0gcGF5bG9hZCBvYmplY3QgdGhhdCBpcyBwYXNzZWQgaW4gd2hlbiBzZXQgY29udGV4dCBpcyBjYWxsZWQgZnJvbSBhbiBIZXJlIGVudGl0eSB1c2luZyB0aGUgaW50ZXJvcCBhcGkuXG5cdFx0ICogQHBhcmFtIHBheWxvYWQuY29udGV4dCBUaGUgY29udGV4dCBmb3IgdGhlIHBheWxvYWQuXG5cdFx0ICogQHBhcmFtIGNsaWVudElkZW50aXR5IG9iamVjdCBjb250YWluaW5nIHRoZSBjbGllbnRJZGVudGl0eSBvZiB0aGUgc2VuZGVyLlxuXHRcdCAqL1xuXHRcdHB1YmxpYyBhc3luYyBzZXRDb250ZXh0KFxuXHRcdFx0cGF5bG9hZDogeyBjb250ZXh0OiBFeHRlcm5hbENvbnRleHQgfSxcblx0XHRcdGNsaWVudElkZW50aXR5OiBPcGVuRmluLkNsaWVudElkZW50aXR5XG5cdFx0KTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0XHQvLyBjcmVhdGUgYSBuZXcgY29udGV4dCBvYmplY3QgZm9yIGludGVyb3Agc2V0Q29udGV4dCBjYWxscyBmcm9tIHRoZSBpbnRlcm9wIG9iamVjdCB3aXRoaW4gdGhlIFBsYXRmb3JtIENsaWVudCdzIHdpbmRvd3Mgb3Igdmlld3MuXG5cdFx0XHRjb25zdCB7IGNvbnRleHQgfSA9IHBheWxvYWQ7XG5cdFx0XHRpZiAoY29udGV4dC5fY2xpZW50SW5mbykge1xuXHRcdFx0XHRjb25zdCB7XG5cdFx0XHRcdFx0X2NsaWVudEluZm86IHsgdXVpZCB9XG5cdFx0XHRcdH0gPSBjb250ZXh0O1xuXHRcdFx0XHQvLyBzZXQgY29udGV4dCBvbiBleHRlcm5hbCBicm9rZXJcblx0XHRcdFx0aWYgKCh1dWlkICE9PSBmaW4ubWUudXVpZCAmJiB1dWlkICE9PSB0aGlzLmV4dGVybmFsQnJva2VyKSB8fCB1dWlkID09PSB0aGlzLmV4dGVybmFsQnJva2VyKSB7XG5cdFx0XHRcdFx0Y29uc3QgbmV3Q29udGV4dCA9IGNvbnRleHQ7XG5cdFx0XHRcdFx0ZGVsZXRlIG5ld0NvbnRleHQuX2NsaWVudEluZm87XG5cdFx0XHRcdFx0c3VwZXIuc2V0Q29udGV4dCh7IC4uLnBheWxvYWQsIGNvbnRleHQ6IG5ld0NvbnRleHQgfSwgY2xpZW50SWRlbnRpdHkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBJZiB0aGVyZSBpcyBubyBfY2xpZW50SW5mbyBvYmplY3QgcHJlc2VudCBvbiB0aGUgY29udGV4dCBvYmplY3Qgd2UgdHJlYXQgaXQgYXMgYSBicmFuZCBuZXcgb2JqZWN0IGFuZCBzZXQgaXQgb24gYm90aCB0aGUgcGxhdGZvcm0gYW5kIGV4dGVybmFsIGNsaWVudHMuXG5cdFx0XHRcdGNvbnN0IG5ld0NvbnRleHQgPSB7IC4uLmNvbnRleHQsIF9jbGllbnRJbmZvOiB7IHV1aWQ6IGZpbi5tZS51dWlkIH0gfTtcblx0XHRcdFx0YXdhaXQgdGhpcy5zZXRDb250ZXh0T25FeHRlcm5hbENsaWVudChuZXdDb250ZXh0LCBjbGllbnRJZGVudGl0eSk7XG5cdFx0XHRcdHN1cGVyLnNldENvbnRleHQocGF5bG9hZCwgY2xpZW50SWRlbnRpdHkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gbmV3IE92ZXJyaWRlKCk7XG59XG5cbmZpbi5QbGF0Zm9ybS5pbml0KHsgaW50ZXJvcE92ZXJyaWRlIH0pLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9