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
            this.externalBroker = "platform-2";
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
            if (await platform.Application.isRunning()) {
                await this.setupContextGroups();
            }
            await platform.on("platform-api-ready", async () => {
                await this.setupContextGroups();
            });
            await platform.Application.once("closed", () => {
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
         * 7. Create a context handler for the colorClient.
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
                    /**
                     * Handle a context.
                     * @param context object passed from the setContext method.
                     * If the newContext variable has a _clientInfo object with a uuid return the context as is
                     * because it is initially set on the platformInteropClient's broker.
                     * otherwise copy the context attributes and values to a new object containing
                     * a _clientInfo attribute with the uuid of the connected externalBroker.
                     */
                    const contextHandler = async (context) => {
                        await platformInteropClient.joinContextGroup(externalContextGroupInfo.id);
                        const newContext = context._clientInfo?.uuid
                            ? context
                            : { ...context, _clientInfo: { uuid: this.externalBroker } };
                        await platformInteropClient.setContext(newContext);
                    };
                    await colorClient.addContextHandler(contextHandler);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0YsQ0FBQztLQUNEO0lBQ0QsT0FBTyxJQUFJLFFBQVEsRUFBRSxDQUFDO0FBQ3ZCLENBQUM7QUFFRCxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXR1cC1jcm9zcy1wbGF0Zm9ybS1pbnRlcm9wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NldHVwLWNyb3NzLXBsYXRmb3JtLWludGVyb3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zZXR1cC1jcm9zcy1wbGF0Zm9ybS1pbnRlcm9wLy4vY2xpZW50L3NyYy9wcm92aWRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHR5cGUgT3BlbkZpbiBmcm9tIFwiQG9wZW5maW4vY29yZVwiO1xuaW1wb3J0IHR5cGUgeyBFeHRlcm5hbENsaWVudE1hcCwgRXh0ZXJuYWxDb250ZXh0IH0gZnJvbSBcIi4vc2hhcGVzXCI7XG5cbi8qKlxuICogT3ZlcnJpZGUgdGhlIGludGVyb3AgYnJva2VyLlxuICogQHBhcmFtIEludGVyb3BCcm9rZXIgY2xhc3MgdXNlZCB0byBleHRlbmQgdGhlIGN1c3RvbSBvdmVycmlkZSBzdWJjbGFzcy5cbiAqIEByZXR1cm5zIFRoZSBvdmVycmlkZS5cbiAqL1xuZnVuY3Rpb24gaW50ZXJvcE92ZXJyaWRlKEludGVyb3BCcm9rZXI6IE9wZW5GaW4uQ29uc3RydWN0b3I8T3BlbkZpbi5JbnRlcm9wQnJva2VyPik6IE9wZW5GaW4uSW50ZXJvcEJyb2tlciB7XG5cdC8qKlxuXHQgKiBDbGFzcyB0aGF0IGluaGVyaXRzIHRoZSBwdWJsaWMgSW50ZXJvcEJyb2tlciBtZXRob2RzIHRoYXQgYWxsb3dzIHlvdSB0byBvdmVycmlkZSBleGlzdGluZ1xuXHQgKiBJbnRlcm9wQnJva2VyIG1ldGhvZHMgYW5kIGFkZCBhbnkgY3VzdG9tIGxvZ2ljIHRvIHRoZSByZXR1cm5lZCBJbnRlcm9wQnJva2VyIGluc3RhbmNlIHVzZWQgYnkgeW91ciBwbGF0Zm9ybS5cblx0ICovXG5cdGNsYXNzIE92ZXJyaWRlIGV4dGVuZHMgSW50ZXJvcEJyb2tlciB7XG5cdFx0cHVibGljIGV4dGVybmFsQnJva2VyOiBzdHJpbmc7XG5cblx0XHRwdWJsaWMgZXh0ZXJuYWxDbGllbnRzOiBFeHRlcm5hbENsaWVudE1hcDtcblxuXHRcdC8qKlxuXHRcdCAqIEluaXRpYWxpemUgYW5kIGNvbm5lY3QgdG8gZXh0ZXJuYWwgYnJva2VyLlxuXHRcdCAqL1xuXHRcdGNvbnN0cnVjdG9yKCkge1xuXHRcdFx0c3VwZXIoKTtcblx0XHRcdHRoaXMuZXh0ZXJuYWxCcm9rZXIgPSBcInBsYXRmb3JtLTJcIjtcblx0XHRcdHRoaXMuZXh0ZXJuYWxDbGllbnRzID0gbmV3IE1hcCgpO1xuXHRcdFx0dGhpcy5pbml0aWFsaXplQnJva2VycygpLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEluaXRpYWxpemUgdGhlIGJyb2tlcnMuXG5cdFx0ICogMS4gR2V0cyB0aGUgaW5zdGFuY2Ugb2YgdGhlIHNwZWNpZmllZCBleHRlcm5hbCBwbGF0Zm9ybS5cblx0XHQgKiAyLiBFbnN1cmUgdGhlIGV4dGVybmFsIHBsYXRmb3JtIGFwcGxpY2F0aW9uIGlzIHJ1bm5pbmcuXG5cdFx0ICogMy4gRW5zdXJlIHRoYXQgdGhlIHBsYXRmb3JtIGFwaSBpcyBmaW5pc2hlZCBpbml0aWFsaXppbmcuXG5cdFx0ICogNC4gUmVzZXQgdGhlIG1hcCB0cmFja2luZyB0aGUgZXh0ZXJuYWxDbGllbnQgY29ubmVjdGlvbnMuXG5cdFx0ICovXG5cdFx0cHVibGljIGFzeW5jIGluaXRpYWxpemVCcm9rZXJzKCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdFx0Y29uc3QgcGxhdGZvcm06IE9wZW5GaW4uUGxhdGZvcm0gPSBmaW4uUGxhdGZvcm0ud3JhcFN5bmMoeyB1dWlkOiB0aGlzLmV4dGVybmFsQnJva2VyIH0pO1xuXG5cdFx0XHRpZiAoYXdhaXQgcGxhdGZvcm0uQXBwbGljYXRpb24uaXNSdW5uaW5nKCkpIHtcblx0XHRcdFx0YXdhaXQgdGhpcy5zZXR1cENvbnRleHRHcm91cHMoKTtcblx0XHRcdH1cblxuXHRcdFx0YXdhaXQgcGxhdGZvcm0ub24oXCJwbGF0Zm9ybS1hcGktcmVhZHlcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRhd2FpdCB0aGlzLnNldHVwQ29udGV4dEdyb3VwcygpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGF3YWl0IHBsYXRmb3JtLkFwcGxpY2F0aW9uLm9uY2UoXCJjbG9zZWRcIiwgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmV4dGVybmFsQ2xpZW50cyA9IG5ldyBNYXAoKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNldHVwIHRoZSBjb250ZXh0IGdyb3Vwc1xuXHRcdCAqIDEuIENyZWF0ZSBhIEludGVyb3BDbGllbnQgaW5zdGFuY2UgYnkgY29ubmVjdGluZyB0byBhIG1lbWJlciBvZiBPdmVycmlkZS5leHRlcm5hbEJyb2tlcnMuXG5cdFx0ICogMi4gZXh0ZXJuYWxDb250ZXh0R3JvdXBzOiB1c2luZyB0aGUgY3JlYXRlZCBjbGllbnQgaW5zdGFuY2UsIHJldHJpZXZlIHRoZSBleHRlcm5hbEJyb2tlcidzIGNvbnRleHQgZ3JvdXBzLlxuXHRcdCAqIDMuIENyZWF0ZSBhIEludGVyb3BDbGllbnQgaW5zdGFuY2UgYnkgY29ubmVjdGluZyB0byB0aGUgY3VycmVudCBwbGF0Zm9ybXMgaW50ZXJvcCBicm9rZXIuXG5cdFx0ICogNC4gUGxhdGZvcm1Db250ZXh0R3JvdXBzOiB1c2luZyB0aGUgY3JlYXRlZCBjbGllbnQgaW5zdGFuY2UsIHJldHJpZXZlIHRoZSBjdXJyZW50IHBsYXRmb3JtIGNvbnRleHQgZ3JvdXBzLlxuXHRcdCAqIDUuIENoZWNrIHRvIHdoaWNoIGV4dGVybmFsQ29udGV4dEdyb3VwcyBhbmQgcGxhdGZvcm1Db250ZXh0R3JvdXBzIGFyZSB0aGUgc2FtZS5cblx0XHQgKiA2LiBJZiB0aGUgcGxhdGZvcm1Db250ZXh0R3JvdXAgaXMgc2hhcmVkIHdpdGggYW4gZXh0ZXJuYWxDb250ZXh0R3JvdXAgY3JlYXRlIGEgY29sb3JDbGllbnQgYW5kIGpvaW4gdGhlIHNoYXJlZCBjb250ZXh0IGdyb3VwIGZyb20gdGhlIGNvbG9yQ2xpZW50LlxuXHRcdCAqIDcuIENyZWF0ZSBhIGNvbnRleHQgaGFuZGxlciBmb3IgdGhlIGNvbG9yQ2xpZW50LlxuXHRcdCAqL1xuXHRcdHB1YmxpYyBhc3luYyBzZXR1cENvbnRleHRHcm91cHMoKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0XHRjb25zdCBleHRlcm5hbEludGVyb3BDbGllbnQ6IE9wZW5GaW4uSW50ZXJvcENsaWVudCA9IGZpbi5JbnRlcm9wLmNvbm5lY3RTeW5jKHRoaXMuZXh0ZXJuYWxCcm9rZXIsIHt9KTtcblx0XHRcdGNvbnN0IGV4dGVybmFsQ29udGV4dEdyb3VwczogT3BlbkZpbi5Db250ZXh0R3JvdXBJbmZvW10gPVxuXHRcdFx0XHRhd2FpdCBleHRlcm5hbEludGVyb3BDbGllbnQuZ2V0Q29udGV4dEdyb3VwcygpO1xuXG5cdFx0XHRjb25zdCBwbGF0Zm9ybUludGVyb3BDbGllbnQ6IE9wZW5GaW4uSW50ZXJvcENsaWVudCA9IGZpbi5JbnRlcm9wLmNvbm5lY3RTeW5jKGZpbi5tZS51dWlkLCB7fSk7XG5cdFx0XHRjb25zdCBwbGF0Zm9ybUNvbnRleHRHcm91cHM6IE9wZW5GaW4uQ29udGV4dEdyb3VwSW5mb1tdID1cblx0XHRcdFx0YXdhaXQgcGxhdGZvcm1JbnRlcm9wQ2xpZW50LmdldENvbnRleHRHcm91cHMoKTtcblxuXHRcdFx0Ly8gQXJyYXkgb2YgRXh0ZXJuYWxDbGllbnRNYXAgUHJvbWlzZXNcblx0XHRcdGNvbnN0IGV4dGVybmFsQ29udGV4dEdyb3VwUHJvbWlzZXM6IFByb21pc2U8RXh0ZXJuYWxDbGllbnRNYXAgfCB1bmRlZmluZWQ+W10gPVxuXHRcdFx0XHRleHRlcm5hbENvbnRleHRHcm91cHMubWFwKFxuXHRcdFx0XHRcdGFzeW5jIChcblx0XHRcdFx0XHRcdGV4dGVybmFsQ29udGV4dEdyb3VwSW5mbzogT3BlbkZpbi5Db250ZXh0R3JvdXBJbmZvXG5cdFx0XHRcdFx0KTogUHJvbWlzZTxFeHRlcm5hbENsaWVudE1hcCB8IHVuZGVmaW5lZD4gPT4ge1xuXHRcdFx0XHRcdFx0Ly8gY2hlY2sgdG8gc2VlIGlmIGEgUGxhdGZvcm0gQ2xpZW50J3MgY29udGV4dCBncm91cCBoYXMgYW55IG9mIHRoZSBjaGFubmVscyBhcyBhIGV4dGVybmFsQ29udGV4dEdyb3VwXG5cdFx0XHRcdFx0XHRjb25zdCBoYXNQbGF0Zm9ybUNvbnRleHRHcm91cDogYm9vbGVhbiA9IHBsYXRmb3JtQ29udGV4dEdyb3Vwcy5zb21lKFxuXHRcdFx0XHRcdFx0XHQoeyBpZCB9OiBPcGVuRmluLkNvbnRleHRHcm91cEluZm8pID0+IGlkID09PSBleHRlcm5hbENvbnRleHRHcm91cEluZm8uaWRcblx0XHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRcdGlmIChoYXNQbGF0Zm9ybUNvbnRleHRHcm91cCkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBjb2xvckNsaWVudDogT3BlbkZpbi5JbnRlcm9wQ2xpZW50ID0gZmluLkludGVyb3AuY29ubmVjdFN5bmModGhpcy5leHRlcm5hbEJyb2tlciwge30pO1xuXHRcdFx0XHRcdFx0XHRhd2FpdCBjb2xvckNsaWVudC5qb2luQ29udGV4dEdyb3VwKGV4dGVybmFsQ29udGV4dEdyb3VwSW5mby5pZCk7XG5cdFx0XHRcdFx0XHRcdC8qKlxuXHRcdFx0XHRcdFx0XHQgKiBIYW5kbGUgYSBjb250ZXh0LlxuXHRcdFx0XHRcdFx0XHQgKiBAcGFyYW0gY29udGV4dCBvYmplY3QgcGFzc2VkIGZyb20gdGhlIHNldENvbnRleHQgbWV0aG9kLlxuXHRcdFx0XHRcdFx0XHQgKiBJZiB0aGUgbmV3Q29udGV4dCB2YXJpYWJsZSBoYXMgYSBfY2xpZW50SW5mbyBvYmplY3Qgd2l0aCBhIHV1aWQgcmV0dXJuIHRoZSBjb250ZXh0IGFzIGlzXG5cdFx0XHRcdFx0XHRcdCAqIGJlY2F1c2UgaXQgaXMgaW5pdGlhbGx5IHNldCBvbiB0aGUgcGxhdGZvcm1JbnRlcm9wQ2xpZW50J3MgYnJva2VyLlxuXHRcdFx0XHRcdFx0XHQgKiBvdGhlcndpc2UgY29weSB0aGUgY29udGV4dCBhdHRyaWJ1dGVzIGFuZCB2YWx1ZXMgdG8gYSBuZXcgb2JqZWN0IGNvbnRhaW5pbmdcblx0XHRcdFx0XHRcdFx0ICogYSBfY2xpZW50SW5mbyBhdHRyaWJ1dGUgd2l0aCB0aGUgdXVpZCBvZiB0aGUgY29ubmVjdGVkIGV4dGVybmFsQnJva2VyLlxuXHRcdFx0XHRcdFx0XHQgKi9cblx0XHRcdFx0XHRcdFx0Y29uc3QgY29udGV4dEhhbmRsZXIgPSBhc3luYyAoY29udGV4dDogRXh0ZXJuYWxDb250ZXh0KTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0YXdhaXQgcGxhdGZvcm1JbnRlcm9wQ2xpZW50LmpvaW5Db250ZXh0R3JvdXAoZXh0ZXJuYWxDb250ZXh0R3JvdXBJbmZvLmlkKTtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBuZXdDb250ZXh0ID0gY29udGV4dC5fY2xpZW50SW5mbz8udXVpZFxuXHRcdFx0XHRcdFx0XHRcdFx0PyBjb250ZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHQ6IHsgLi4uY29udGV4dCwgX2NsaWVudEluZm86IHsgdXVpZDogdGhpcy5leHRlcm5hbEJyb2tlciB9IH07XG5cdFx0XHRcdFx0XHRcdFx0YXdhaXQgcGxhdGZvcm1JbnRlcm9wQ2xpZW50LnNldENvbnRleHQobmV3Q29udGV4dCk7XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdGF3YWl0IGNvbG9yQ2xpZW50LmFkZENvbnRleHRIYW5kbGVyKGNvbnRleHRIYW5kbGVyKTtcblx0XHRcdFx0XHRcdFx0Ly8gcmV0dXJuIHRoZSBjb25uZWN0ZWQgY29udGV4dCBncm91cCBhbmQgY29ycmVzcG9uZGVkIGNvbG9yIGNsaWVudC5cblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuZXh0ZXJuYWxDbGllbnRzLnNldChleHRlcm5hbENvbnRleHRHcm91cEluZm8uaWQsIGNvbG9yQ2xpZW50KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBQcm9taXNlLmFsbChleHRlcm5hbENvbnRleHRHcm91cFByb21pc2VzKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgTm90IGFibGUgdG8gc2V0dXAgaGFuZGxlcnMgZm9yIGV4dGVybmFsIGJyb2tlcnM6ICR7ZXJyb3J9YCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogU2V0IHRoZSBjb250ZXh0IG9uIGFuIGV4dGVybmFsIGNsaWVudC5cblx0XHQgKiBpZiB0aGUgZXh0ZXJuYWxDbGllbnRzTWFwIGhhcyBwcmV2aW91c2x5IGRlcml2ZWQgY29udGV4dEdyb3VwIGdldCB0aGUgY29ycmVzcG9uZGluZ1xuXHRcdCAqIGNvbG9yQ2xpZW50IGFuZCBzZXQgdGhlIGNvbnRleHQgb24gdGhlIG1hdGNoaW5nIGNvbG9yQ2xpZW50LlxuXHRcdCAqIEBwYXJhbSBjb250ZXh0IGNvbnRleHQgb2JqZWN0IHBhc3NlZCBpbiBmcm9tIHRoZSBAc2V0Q29udGV4dCBtZXRob2QuXG5cdFx0ICogQHBhcmFtIGNsaWVudElkZW50aXR5IGNsaWVudElkZW50aXR5IG9iamVjdCBwYXNzZWQgaW4gZnJvbSB0aGUgQHNldENvbnRleHQgbWV0aG9kLlxuXHRcdCAqL1xuXHRcdHB1YmxpYyBhc3luYyBzZXRDb250ZXh0T25FeHRlcm5hbENsaWVudChcblx0XHRcdGNvbnRleHQ6IEV4dGVybmFsQ29udGV4dCxcblx0XHRcdGNsaWVudElkZW50aXR5OiBPcGVuRmluLkNsaWVudElkZW50aXR5XG5cdFx0KTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0XHQvLyB1c2UgYWNjZXNzb3Igc3ludGF4IGZvciB0aGlzLmdldENsaWVudFN0YXRlIGFzIGl0IGlzIG5vdCBhIHB1YmxpYyBpbmhlcml0ZWQgbWV0aG9kIGZyb20gSW50ZXJvcEJyb2tlclxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9kb3Qtbm90YXRpb25cblx0XHRcdGNvbnN0IHN0YXRlID0gdGhpc1tcImdldENsaWVudFN0YXRlXCJdKGNsaWVudElkZW50aXR5KTtcblx0XHRcdGNvbnN0IGN0eEdyb3VwSWQgPSBzdGF0ZS5jb250ZXh0R3JvdXBJZCBhcyBzdHJpbmc7XG5cdFx0XHRpZiAodGhpcy5leHRlcm5hbENsaWVudHMuaGFzKGN0eEdyb3VwSWQpKSB7XG5cdFx0XHRcdGNvbnN0IGNvbG9yQ2xpZW50ID0gdGhpcy5leHRlcm5hbENsaWVudHMuZ2V0KGN0eEdyb3VwSWQpO1xuXHRcdFx0XHRpZiAoY29sb3JDbGllbnQpIHtcblx0XHRcdFx0XHRhd2FpdCBjb2xvckNsaWVudC5zZXRDb250ZXh0KGNvbnRleHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogU2V0IHRoZSBjb250ZXh0LlxuXHRcdCAqIEBwYXJhbSBwYXlsb2FkIG9iamVjdCB0aGF0IGlzIHBhc3NlZCBpbiB3aGVuIHNldCBjb250ZXh0IGlzIGNhbGxlZCBmcm9tIGFuIE9wZW5GaW4gZW50aXR5IHVzaW5nIHRoZSBpbnRlcm9wIGFwaS5cblx0XHQgKiBAcGFyYW0gcGF5bG9hZC5jb250ZXh0IFRoZSBjb250ZXh0IGZvciB0aGUgcGF5bG9hZC5cblx0XHQgKiBAcGFyYW0gY2xpZW50SWRlbnRpdHkgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGNsaWVudElkZW50aXR5IG9mIHRoZSBzZW5kZXIuXG5cdFx0ICovXG5cdFx0cHVibGljIGFzeW5jIHNldENvbnRleHQoXG5cdFx0XHRwYXlsb2FkOiB7IGNvbnRleHQ6IEV4dGVybmFsQ29udGV4dCB9LFxuXHRcdFx0Y2xpZW50SWRlbnRpdHk6IE9wZW5GaW4uQ2xpZW50SWRlbnRpdHlcblx0XHQpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRcdC8vIGNyZWF0ZSBhIG5ldyBjb250ZXh0IG9iamVjdCBmb3IgaW50ZXJvcCBzZXRDb250ZXh0IGNhbGxzIGZyb20gdGhlIGludGVyb3Agb2JqZWN0IHdpdGhpbiB0aGUgUGxhdGZvcm0gQ2xpZW50J3Mgd2luZG93cyBvciB2aWV3cy5cblx0XHRcdGNvbnN0IHsgY29udGV4dCB9ID0gcGF5bG9hZDtcblx0XHRcdGlmIChjb250ZXh0Ll9jbGllbnRJbmZvKSB7XG5cdFx0XHRcdGNvbnN0IHtcblx0XHRcdFx0XHRfY2xpZW50SW5mbzogeyB1dWlkIH1cblx0XHRcdFx0fSA9IGNvbnRleHQ7XG5cdFx0XHRcdC8vIHNldCBjb250ZXh0IG9uIGV4dGVybmFsIGJyb2tlclxuXHRcdFx0XHRpZiAoKHV1aWQgIT09IGZpbi5tZS51dWlkICYmIHV1aWQgIT09IHRoaXMuZXh0ZXJuYWxCcm9rZXIpIHx8IHV1aWQgPT09IHRoaXMuZXh0ZXJuYWxCcm9rZXIpIHtcblx0XHRcdFx0XHRjb25zdCBuZXdDb250ZXh0ID0gY29udGV4dDtcblx0XHRcdFx0XHRkZWxldGUgbmV3Q29udGV4dC5fY2xpZW50SW5mbztcblx0XHRcdFx0XHRzdXBlci5zZXRDb250ZXh0KHsgLi4ucGF5bG9hZCwgY29udGV4dDogbmV3Q29udGV4dCB9LCBjbGllbnRJZGVudGl0eSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIElmIHRoZXJlIGlzIG5vIF9jbGllbnRJbmZvIG9iamVjdCBwcmVzZW50IG9uIHRoZSBjb250ZXh0IG9iamVjdCB3ZSB0cmVhdCBpdCBhcyBhIGJyYW5kIG5ldyBvYmplY3QgYW5kIHNldCBpdCBvbiBib3RoIHRoZSBwbGF0Zm9ybSBhbmQgZXh0ZXJuYWwgY2xpZW50cy5cblx0XHRcdFx0Y29uc3QgbmV3Q29udGV4dCA9IHsgLi4uY29udGV4dCwgX2NsaWVudEluZm86IHsgdXVpZDogZmluLm1lLnV1aWQgfSB9O1xuXHRcdFx0XHRhd2FpdCB0aGlzLnNldENvbnRleHRPbkV4dGVybmFsQ2xpZW50KG5ld0NvbnRleHQsIGNsaWVudElkZW50aXR5KTtcblx0XHRcdFx0c3VwZXIuc2V0Q29udGV4dChwYXlsb2FkLCBjbGllbnRJZGVudGl0eSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBuZXcgT3ZlcnJpZGUoKTtcbn1cblxuZmluLlBsYXRmb3JtLmluaXQoeyBpbnRlcm9wT3ZlcnJpZGUgfSkuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=