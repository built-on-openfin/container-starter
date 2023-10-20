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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsZUFBZSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NldHVwLWNyb3NzLXBsYXRmb3JtLWludGVyb3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2V0dXAtY3Jvc3MtcGxhdGZvcm0taW50ZXJvcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NldHVwLWNyb3NzLXBsYXRmb3JtLWludGVyb3AvLi9jbGllbnQvc3JjL3Byb3ZpZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdHlwZSBPcGVuRmluIGZyb20gXCJAb3BlbmZpbi9jb3JlXCI7XG5pbXBvcnQgdHlwZSB7IEV4dGVybmFsQ2xpZW50TWFwLCBFeHRlcm5hbENvbnRleHQgfSBmcm9tIFwiLi9zaGFwZXNcIjtcblxuLyoqXG4gKiBPdmVycmlkZSB0aGUgaW50ZXJvcCBicm9rZXIuXG4gKiBAcGFyYW0gSW50ZXJvcEJyb2tlciBjbGFzcyB1c2VkIHRvIGV4dGVuZCB0aGUgY3VzdG9tIG92ZXJyaWRlIHN1YmNsYXNzLlxuICogQHJldHVybnMgVGhlIG92ZXJyaWRlLlxuICovXG5mdW5jdGlvbiBpbnRlcm9wT3ZlcnJpZGUoSW50ZXJvcEJyb2tlcjogT3BlbkZpbi5Db25zdHJ1Y3RvcjxPcGVuRmluLkludGVyb3BCcm9rZXI+KTogT3BlbkZpbi5JbnRlcm9wQnJva2VyIHtcblx0LyoqXG5cdCAqIENsYXNzIHRoYXQgaW5oZXJpdHMgdGhlIHB1YmxpYyBJbnRlcm9wQnJva2VyIG1ldGhvZHMgdGhhdCBhbGxvd3MgeW91IHRvIG92ZXJyaWRlIGV4aXN0aW5nXG5cdCAqIEludGVyb3BCcm9rZXIgbWV0aG9kcyBhbmQgYWRkIGFueSBjdXN0b20gbG9naWMgdG8gdGhlIHJldHVybmVkIEludGVyb3BCcm9rZXIgaW5zdGFuY2UgdXNlZCBieSB5b3VyIHBsYXRmb3JtLlxuXHQgKi9cblx0Y2xhc3MgT3ZlcnJpZGUgZXh0ZW5kcyBJbnRlcm9wQnJva2VyIHtcblx0XHRwdWJsaWMgZXh0ZXJuYWxCcm9rZXI6IHN0cmluZztcblxuXHRcdHB1YmxpYyBleHRlcm5hbENsaWVudHM6IEV4dGVybmFsQ2xpZW50TWFwO1xuXG5cdFx0LyoqXG5cdFx0ICogSW5pdGlhbGl6ZSBhbmQgY29ubmVjdCB0byBleHRlcm5hbCBicm9rZXIuXG5cdFx0ICovXG5cdFx0Y29uc3RydWN0b3IoKSB7XG5cdFx0XHRzdXBlcigpO1xuXHRcdFx0dGhpcy5leHRlcm5hbEJyb2tlciA9IFwicGxhdGZvcm0tMlwiO1xuXHRcdFx0dGhpcy5leHRlcm5hbENsaWVudHMgPSBuZXcgTWFwKCk7XG5cdFx0XHR0aGlzLmluaXRpYWxpemVCcm9rZXJzKCkuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogSW5pdGlhbGl6ZSB0aGUgYnJva2Vycy5cblx0XHQgKiAxLiBHZXRzIHRoZSBpbnN0YW5jZSBvZiB0aGUgc3BlY2lmaWVkIGV4dGVybmFsIHBsYXRmb3JtLlxuXHRcdCAqIDIuIEVuc3VyZSB0aGUgZXh0ZXJuYWwgcGxhdGZvcm0gYXBwbGljYXRpb24gaXMgcnVubmluZy5cblx0XHQgKiAzLiBFbnN1cmUgdGhhdCB0aGUgcGxhdGZvcm0gYXBpIGlzIGZpbmlzaGVkIGluaXRpYWxpemluZy5cblx0XHQgKiA0LiBSZXNldCB0aGUgbWFwIHRyYWNraW5nIHRoZSBleHRlcm5hbENsaWVudCBjb25uZWN0aW9ucy5cblx0XHQgKi9cblx0XHRwdWJsaWMgYXN5bmMgaW5pdGlhbGl6ZUJyb2tlcnMoKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0XHRjb25zdCBwbGF0Zm9ybTogT3BlbkZpbi5QbGF0Zm9ybSA9IGZpbi5QbGF0Zm9ybS53cmFwU3luYyh7IHV1aWQ6IHRoaXMuZXh0ZXJuYWxCcm9rZXIgfSk7XG5cblx0XHRcdGlmIChhd2FpdCBwbGF0Zm9ybS5BcHBsaWNhdGlvbi5pc1J1bm5pbmcoKSkge1xuXHRcdFx0XHRhd2FpdCB0aGlzLnNldHVwQ29udGV4dEdyb3VwcygpO1xuXHRcdFx0fVxuXG5cdFx0XHRhd2FpdCBwbGF0Zm9ybS5vbihcInBsYXRmb3JtLWFwaS1yZWFkeVwiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdGF3YWl0IHRoaXMuc2V0dXBDb250ZXh0R3JvdXBzKCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0YXdhaXQgcGxhdGZvcm0uQXBwbGljYXRpb24ub25jZShcImNsb3NlZFwiLCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMuZXh0ZXJuYWxDbGllbnRzID0gbmV3IE1hcCgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogU2V0dXAgdGhlIGNvbnRleHQgZ3JvdXBzXG5cdFx0ICogMS4gQ3JlYXRlIGEgSW50ZXJvcENsaWVudCBpbnN0YW5jZSBieSBjb25uZWN0aW5nIHRvIGEgbWVtYmVyIG9mIE92ZXJyaWRlLmV4dGVybmFsQnJva2Vycy5cblx0XHQgKiAyLiBleHRlcm5hbENvbnRleHRHcm91cHM6IHVzaW5nIHRoZSBjcmVhdGVkIGNsaWVudCBpbnN0YW5jZSwgcmV0cmlldmUgdGhlIGV4dGVybmFsQnJva2VyJ3MgY29udGV4dCBncm91cHMuXG5cdFx0ICogMy4gQ3JlYXRlIGEgSW50ZXJvcENsaWVudCBpbnN0YW5jZSBieSBjb25uZWN0aW5nIHRvIHRoZSBjdXJyZW50IHBsYXRmb3JtcyBpbnRlcm9wIGJyb2tlci5cblx0XHQgKiA0LiBQbGF0Zm9ybUNvbnRleHRHcm91cHM6IHVzaW5nIHRoZSBjcmVhdGVkIGNsaWVudCBpbnN0YW5jZSwgcmV0cmlldmUgdGhlIGN1cnJlbnQgcGxhdGZvcm0gY29udGV4dCBncm91cHMuXG5cdFx0ICogNS4gQ2hlY2sgdG8gd2hpY2ggZXh0ZXJuYWxDb250ZXh0R3JvdXBzIGFuZCBwbGF0Zm9ybUNvbnRleHRHcm91cHMgYXJlIHRoZSBzYW1lLlxuXHRcdCAqIDYuIElmIHRoZSBwbGF0Zm9ybUNvbnRleHRHcm91cCBpcyBzaGFyZWQgd2l0aCBhbiBleHRlcm5hbENvbnRleHRHcm91cCBjcmVhdGUgYSBjb2xvckNsaWVudCBhbmQgam9pbiB0aGUgc2hhcmVkIGNvbnRleHQgZ3JvdXAgZnJvbSB0aGUgY29sb3JDbGllbnQuXG5cdFx0ICogNy4gQ3JlYXRlIGEgY29udGV4dCBoYW5kbGVyIGZvciB0aGUgY29sb3JDbGllbnQuXG5cdFx0ICovXG5cdFx0cHVibGljIGFzeW5jIHNldHVwQ29udGV4dEdyb3VwcygpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRcdGNvbnN0IGV4dGVybmFsSW50ZXJvcENsaWVudDogT3BlbkZpbi5JbnRlcm9wQ2xpZW50ID0gZmluLkludGVyb3AuY29ubmVjdFN5bmModGhpcy5leHRlcm5hbEJyb2tlciwge30pO1xuXHRcdFx0Y29uc3QgZXh0ZXJuYWxDb250ZXh0R3JvdXBzOiBPcGVuRmluLkNvbnRleHRHcm91cEluZm9bXSA9XG5cdFx0XHRcdGF3YWl0IGV4dGVybmFsSW50ZXJvcENsaWVudC5nZXRDb250ZXh0R3JvdXBzKCk7XG5cblx0XHRcdGNvbnN0IHBsYXRmb3JtSW50ZXJvcENsaWVudDogT3BlbkZpbi5JbnRlcm9wQ2xpZW50ID0gZmluLkludGVyb3AuY29ubmVjdFN5bmMoZmluLm1lLnV1aWQsIHt9KTtcblx0XHRcdGNvbnN0IHBsYXRmb3JtQ29udGV4dEdyb3VwczogT3BlbkZpbi5Db250ZXh0R3JvdXBJbmZvW10gPVxuXHRcdFx0XHRhd2FpdCBwbGF0Zm9ybUludGVyb3BDbGllbnQuZ2V0Q29udGV4dEdyb3VwcygpO1xuXG5cdFx0XHQvLyBBcnJheSBvZiBFeHRlcm5hbENsaWVudE1hcCBQcm9taXNlc1xuXHRcdFx0Y29uc3QgZXh0ZXJuYWxDb250ZXh0R3JvdXBQcm9taXNlczogUHJvbWlzZTxFeHRlcm5hbENsaWVudE1hcCB8IHVuZGVmaW5lZD5bXSA9XG5cdFx0XHRcdGV4dGVybmFsQ29udGV4dEdyb3Vwcy5tYXAoXG5cdFx0XHRcdFx0YXN5bmMgKFxuXHRcdFx0XHRcdFx0ZXh0ZXJuYWxDb250ZXh0R3JvdXBJbmZvOiBPcGVuRmluLkNvbnRleHRHcm91cEluZm9cblx0XHRcdFx0XHQpOiBQcm9taXNlPEV4dGVybmFsQ2xpZW50TWFwIHwgdW5kZWZpbmVkPiA9PiB7XG5cdFx0XHRcdFx0XHQvLyBjaGVjayB0byBzZWUgaWYgYSBQbGF0Zm9ybSBDbGllbnQncyBjb250ZXh0IGdyb3VwIGhhcyBhbnkgb2YgdGhlIGNoYW5uZWxzIGFzIGEgZXh0ZXJuYWxDb250ZXh0R3JvdXBcblx0XHRcdFx0XHRcdGNvbnN0IGhhc1BsYXRmb3JtQ29udGV4dEdyb3VwOiBib29sZWFuID0gcGxhdGZvcm1Db250ZXh0R3JvdXBzLnNvbWUoXG5cdFx0XHRcdFx0XHRcdCh7IGlkIH06IE9wZW5GaW4uQ29udGV4dEdyb3VwSW5mbykgPT4gaWQgPT09IGV4dGVybmFsQ29udGV4dEdyb3VwSW5mby5pZFxuXHRcdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdFx0aWYgKGhhc1BsYXRmb3JtQ29udGV4dEdyb3VwKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGNvbG9yQ2xpZW50OiBPcGVuRmluLkludGVyb3BDbGllbnQgPSBmaW4uSW50ZXJvcC5jb25uZWN0U3luYyh0aGlzLmV4dGVybmFsQnJva2VyLCB7fSk7XG5cdFx0XHRcdFx0XHRcdGF3YWl0IGNvbG9yQ2xpZW50LmpvaW5Db250ZXh0R3JvdXAoZXh0ZXJuYWxDb250ZXh0R3JvdXBJbmZvLmlkKTtcblx0XHRcdFx0XHRcdFx0LyoqXG5cdFx0XHRcdFx0XHRcdCAqIEhhbmRsZSBhIGNvbnRleHQuXG5cdFx0XHRcdFx0XHRcdCAqIEBwYXJhbSBjb250ZXh0IG9iamVjdCBwYXNzZWQgZnJvbSB0aGUgc2V0Q29udGV4dCBtZXRob2QuXG5cdFx0XHRcdFx0XHRcdCAqIElmIHRoZSBuZXdDb250ZXh0IHZhcmlhYmxlIGhhcyBhIF9jbGllbnRJbmZvIG9iamVjdCB3aXRoIGEgdXVpZCByZXR1cm4gdGhlIGNvbnRleHQgYXMgaXNcblx0XHRcdFx0XHRcdFx0ICogYmVjYXVzZSBpdCBpcyBpbml0aWFsbHkgc2V0IG9uIHRoZSBwbGF0Zm9ybUludGVyb3BDbGllbnQncyBicm9rZXIuXG5cdFx0XHRcdFx0XHRcdCAqIG90aGVyd2lzZSBjb3B5IHRoZSBjb250ZXh0IGF0dHJpYnV0ZXMgYW5kIHZhbHVlcyB0byBhIG5ldyBvYmplY3QgY29udGFpbmluZ1xuXHRcdFx0XHRcdFx0XHQgKiBhIF9jbGllbnRJbmZvIGF0dHJpYnV0ZSB3aXRoIHRoZSB1dWlkIG9mIHRoZSBjb25uZWN0ZWQgZXh0ZXJuYWxCcm9rZXIuXG5cdFx0XHRcdFx0XHRcdCAqL1xuXHRcdFx0XHRcdFx0XHRjb25zdCBjb250ZXh0SGFuZGxlciA9IGFzeW5jIChjb250ZXh0OiBFeHRlcm5hbENvbnRleHQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdFx0XHRcdFx0XHRhd2FpdCBwbGF0Zm9ybUludGVyb3BDbGllbnQuam9pbkNvbnRleHRHcm91cChleHRlcm5hbENvbnRleHRHcm91cEluZm8uaWQpO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IG5ld0NvbnRleHQgPSBjb250ZXh0Ll9jbGllbnRJbmZvPy51dWlkXG5cdFx0XHRcdFx0XHRcdFx0XHQ/IGNvbnRleHRcblx0XHRcdFx0XHRcdFx0XHRcdDogeyAuLi5jb250ZXh0LCBfY2xpZW50SW5mbzogeyB1dWlkOiB0aGlzLmV4dGVybmFsQnJva2VyIH0gfTtcblx0XHRcdFx0XHRcdFx0XHRhd2FpdCBwbGF0Zm9ybUludGVyb3BDbGllbnQuc2V0Q29udGV4dChuZXdDb250ZXh0KTtcblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0YXdhaXQgY29sb3JDbGllbnQuYWRkQ29udGV4dEhhbmRsZXIoY29udGV4dEhhbmRsZXIpO1xuXHRcdFx0XHRcdFx0XHQvLyByZXR1cm4gdGhlIGNvbm5lY3RlZCBjb250ZXh0IGdyb3VwIGFuZCBjb3JyZXNwb25kZWQgY29sb3IgY2xpZW50LlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5leHRlcm5hbENsaWVudHMuc2V0KGV4dGVybmFsQ29udGV4dEdyb3VwSW5mby5pZCwgY29sb3JDbGllbnQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IFByb21pc2UuYWxsKGV4dGVybmFsQ29udGV4dEdyb3VwUHJvbWlzZXMpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBOb3QgYWJsZSB0byBzZXR1cCBoYW5kbGVycyBmb3IgZXh0ZXJuYWwgYnJva2VyczogJHtlcnJvcn1gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTZXQgdGhlIGNvbnRleHQgb24gYW4gZXh0ZXJuYWwgY2xpZW50LlxuXHRcdCAqIGlmIHRoZSBleHRlcm5hbENsaWVudHNNYXAgaGFzIHByZXZpb3VzbHkgZGVyaXZlZCBjb250ZXh0R3JvdXAgZ2V0IHRoZSBjb3JyZXNwb25kaW5nXG5cdFx0ICogY29sb3JDbGllbnQgYW5kIHNldCB0aGUgY29udGV4dCBvbiB0aGUgbWF0Y2hpbmcgY29sb3JDbGllbnQuXG5cdFx0ICogQHBhcmFtIGNvbnRleHQgY29udGV4dCBvYmplY3QgcGFzc2VkIGluIGZyb20gdGhlIEBzZXRDb250ZXh0IG1ldGhvZC5cblx0XHQgKiBAcGFyYW0gY2xpZW50SWRlbnRpdHkgY2xpZW50SWRlbnRpdHkgb2JqZWN0IHBhc3NlZCBpbiBmcm9tIHRoZSBAc2V0Q29udGV4dCBtZXRob2QuXG5cdFx0ICovXG5cdFx0cHVibGljIGFzeW5jIHNldENvbnRleHRPbkV4dGVybmFsQ2xpZW50KFxuXHRcdFx0Y29udGV4dDogRXh0ZXJuYWxDb250ZXh0LFxuXHRcdFx0Y2xpZW50SWRlbnRpdHk6IE9wZW5GaW4uQ2xpZW50SWRlbnRpdHlcblx0XHQpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRcdC8vIHVzZSBhY2Nlc3NvciBzeW50YXggZm9yIHRoaXMuZ2V0Q2xpZW50U3RhdGUgYXMgaXQgaXMgbm90IGEgcHVibGljIGluaGVyaXRlZCBtZXRob2QgZnJvbSBJbnRlcm9wQnJva2VyXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2RvdC1ub3RhdGlvblxuXHRcdFx0Y29uc3Qgc3RhdGUgPSB0aGlzW1wiZ2V0Q2xpZW50U3RhdGVcIl0oY2xpZW50SWRlbnRpdHkpO1xuXHRcdFx0Y29uc3QgY3R4R3JvdXBJZCA9IHN0YXRlLmNvbnRleHRHcm91cElkIGFzIHN0cmluZztcblx0XHRcdGlmICh0aGlzLmV4dGVybmFsQ2xpZW50cy5oYXMoY3R4R3JvdXBJZCkpIHtcblx0XHRcdFx0Y29uc3QgY29sb3JDbGllbnQgPSB0aGlzLmV4dGVybmFsQ2xpZW50cy5nZXQoY3R4R3JvdXBJZCk7XG5cdFx0XHRcdGlmIChjb2xvckNsaWVudCkge1xuXHRcdFx0XHRcdGF3YWl0IGNvbG9yQ2xpZW50LnNldENvbnRleHQoY29udGV4dCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTZXQgdGhlIGNvbnRleHQuXG5cdFx0ICogQHBhcmFtIHBheWxvYWQgb2JqZWN0IHRoYXQgaXMgcGFzc2VkIGluIHdoZW4gc2V0IGNvbnRleHQgaXMgY2FsbGVkIGZyb20gYW4gT3BlbkZpbiBlbnRpdHkgdXNpbmcgdGhlIGludGVyb3AgYXBpLlxuXHRcdCAqIEBwYXJhbSBwYXlsb2FkLmNvbnRleHQgVGhlIGNvbnRleHQgZm9yIHRoZSBwYXlsb2FkLlxuXHRcdCAqIEBwYXJhbSBjbGllbnRJZGVudGl0eSBvYmplY3QgY29udGFpbmluZyB0aGUgY2xpZW50SWRlbnRpdHkgb2YgdGhlIHNlbmRlci5cblx0XHQgKi9cblx0XHRwdWJsaWMgYXN5bmMgc2V0Q29udGV4dChcblx0XHRcdHBheWxvYWQ6IHsgY29udGV4dDogRXh0ZXJuYWxDb250ZXh0IH0sXG5cdFx0XHRjbGllbnRJZGVudGl0eTogT3BlbkZpbi5DbGllbnRJZGVudGl0eVxuXHRcdCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdFx0Ly8gY3JlYXRlIGEgbmV3IGNvbnRleHQgb2JqZWN0IGZvciBpbnRlcm9wIHNldENvbnRleHQgY2FsbHMgZnJvbSB0aGUgaW50ZXJvcCBvYmplY3Qgd2l0aGluIHRoZSBQbGF0Zm9ybSBDbGllbnQncyB3aW5kb3dzIG9yIHZpZXdzLlxuXHRcdFx0Y29uc3QgeyBjb250ZXh0IH0gPSBwYXlsb2FkO1xuXHRcdFx0aWYgKGNvbnRleHQuX2NsaWVudEluZm8pIHtcblx0XHRcdFx0Y29uc3Qge1xuXHRcdFx0XHRcdF9jbGllbnRJbmZvOiB7IHV1aWQgfVxuXHRcdFx0XHR9ID0gY29udGV4dDtcblx0XHRcdFx0Ly8gc2V0IGNvbnRleHQgb24gZXh0ZXJuYWwgYnJva2VyXG5cdFx0XHRcdGlmICgodXVpZCAhPT0gZmluLm1lLnV1aWQgJiYgdXVpZCAhPT0gdGhpcy5leHRlcm5hbEJyb2tlcikgfHwgdXVpZCA9PT0gdGhpcy5leHRlcm5hbEJyb2tlcikge1xuXHRcdFx0XHRcdGNvbnN0IG5ld0NvbnRleHQgPSBjb250ZXh0O1xuXHRcdFx0XHRcdGRlbGV0ZSBuZXdDb250ZXh0Ll9jbGllbnRJbmZvO1xuXHRcdFx0XHRcdHN1cGVyLnNldENvbnRleHQoeyAuLi5wYXlsb2FkLCBjb250ZXh0OiBuZXdDb250ZXh0IH0sIGNsaWVudElkZW50aXR5KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gSWYgdGhlcmUgaXMgbm8gX2NsaWVudEluZm8gb2JqZWN0IHByZXNlbnQgb24gdGhlIGNvbnRleHQgb2JqZWN0IHdlIHRyZWF0IGl0IGFzIGEgYnJhbmQgbmV3IG9iamVjdCBhbmQgc2V0IGl0IG9uIGJvdGggdGhlIHBsYXRmb3JtIGFuZCBleHRlcm5hbCBjbGllbnRzLlxuXHRcdFx0XHRjb25zdCBuZXdDb250ZXh0ID0geyAuLi5jb250ZXh0LCBfY2xpZW50SW5mbzogeyB1dWlkOiBmaW4ubWUudXVpZCB9IH07XG5cdFx0XHRcdGF3YWl0IHRoaXMuc2V0Q29udGV4dE9uRXh0ZXJuYWxDbGllbnQobmV3Q29udGV4dCwgY2xpZW50SWRlbnRpdHkpO1xuXHRcdFx0XHRzdXBlci5zZXRDb250ZXh0KHBheWxvYWQsIGNsaWVudElkZW50aXR5KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIG5ldyBPdmVycmlkZSgpO1xufVxuXG5maW4uUGxhdGZvcm0uaW5pdCh7IGludGVyb3BPdmVycmlkZSB9KS5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==