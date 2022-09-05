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
 * @function interopOverride function passed to Platform.init as an InitOption... (i can find where this is later)
 * @param InteropBroker class used to extend the custom override subclass.
 * @param provider channel provider for the initialized platform.
 * @param options default options specified in the manifest attribute "platform.interopBrokerConfiguration".
 * @param args adds any additional parameters passed on instantiation of a new Override instance.
 */
function interopOverride(InteropBroker, provider, options, ...args) {
    /**
     * @remarks
     * Class that inherits the public InteropBroker methods that allows you to override existing InteropBroker methods and add any custom logic to the returned InteropBroker instance used by your platform.
     */
    class Override extends InteropBroker {
        constructor(overrideProvider, overrideOpts, ...overrideArgs) {
            super(overrideProvider, overrideOpts, ...overrideArgs);
            this.externalBroker = "platform-2";
            this.externalClients = new Map();
            this.overrideArgs = overrideArgs;
            this.overrideArgs = [...this.overrideArgs, "connect-external"];
            this.initializeBrokers().catch((error) => console.error(error));
        }
        /**
         * @method initializeBrokers
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
         * @method initializeBrokers
         * 1. Create a InteropClient instance by connecting to a member of Override.externalBrokers.
         * 2. externalContextGroups: using the created client instance, retrieve the externalBroker's context groups.
         * 3. Create a InteropClient instance by connecting to the current platforms interop broker.
         * 4. PlatformContextGroups: using the created client instance, retrieve the current platform context groups.
         * 5. Check to which externalContextGroups and platformCOntextGroups are the same.
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
                     * @function contextHandler
                     * @param context object passed from the setContext method.
                     * @remarks
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
         * @method setContextOnExternalClient
         * @param context context object passed in from the @setContext method.
         * @param clientIdentity clientIdentity object passed in from the @setContext method.
         * @remarks if the externalClientsMap has previously derived contextGroup get the corresponding colorClient and set the context on the matching colorClient.
         */
        async setContextOnExternalClient(context, clientIdentity) {
            // use accessor syntax for this.getClientState as it is not a public inherited method from InteropBroker
            // eslint-disable-next-line @typescript-eslint/dot-notation
            const state = this["getClientState"](clientIdentity);
            const ctxGroupId = state.contextGroupId;
            if (this.externalClients.has(ctxGroupId)) {
                const colorClient = this.externalClients.get(ctxGroupId);
                await colorClient.setContext(context);
            }
        }
        /**
         * @override @method setContext
         * @param payload object that is passed in when set context is called from an OpenFin entity using the interop api.
         * @param clientIdentity object containing the clientIdentity of the sender.
         * @example // please refer to the working examples code panel in this projects interface.
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
    return new Override(provider, options, ...args);
}
fin.Platform.init({ interopOverride }).catch((error) => console.error(error));


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDLDBCQUEwQixDQUFDLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQztnQkFDbEUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7YUFDMUM7UUFDRixDQUFDO0tBQ0Q7SUFDRCxPQUFPLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBRUQsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2V0dXAtY3Jvc3MtcGxhdGZvcm0taW50ZXJvcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zZXR1cC1jcm9zcy1wbGF0Zm9ybS1pbnRlcm9wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2V0dXAtY3Jvc3MtcGxhdGZvcm0taW50ZXJvcC8uL2NsaWVudC9zcmMvcHJvdmlkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7XG5cdFBsYXRmb3JtSW50ZXJvcENsaWVudCxcblx0UGxhdGZvcm1Db250ZXh0R3JvdXBzLFxuXHRQbGF0Zm9ybUNvbnRleHRHcm91cCxcblx0Q29sb3JJbnRlcm9wQ2xpZW50LFxuXHRFeHRlcm5hbEludGVyb3BDbGllbnQsXG5cdEV4dGVybmFsQ2xpZW50TWFwLFxuXHRFeHRlcm5hbENvbnRleHRHcm91cCxcblx0RXh0ZXJuYWxDb250ZXh0R3JvdXBzLFxuXHRFeHRlcm5hbENvbnRleHRcbn0gZnJvbSBcIi4vc2hhcGVzXCI7XG4vKipcbiAqIEBmdW5jdGlvbiBpbnRlcm9wT3ZlcnJpZGUgZnVuY3Rpb24gcGFzc2VkIHRvIFBsYXRmb3JtLmluaXQgYXMgYW4gSW5pdE9wdGlvbi4uLiAoaSBjYW4gZmluZCB3aGVyZSB0aGlzIGlzIGxhdGVyKVxuICogQHBhcmFtIEludGVyb3BCcm9rZXIgY2xhc3MgdXNlZCB0byBleHRlbmQgdGhlIGN1c3RvbSBvdmVycmlkZSBzdWJjbGFzcy5cbiAqIEBwYXJhbSBwcm92aWRlciBjaGFubmVsIHByb3ZpZGVyIGZvciB0aGUgaW5pdGlhbGl6ZWQgcGxhdGZvcm0uXG4gKiBAcGFyYW0gb3B0aW9ucyBkZWZhdWx0IG9wdGlvbnMgc3BlY2lmaWVkIGluIHRoZSBtYW5pZmVzdCBhdHRyaWJ1dGUgXCJwbGF0Zm9ybS5pbnRlcm9wQnJva2VyQ29uZmlndXJhdGlvblwiLlxuICogQHBhcmFtIGFyZ3MgYWRkcyBhbnkgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIHBhc3NlZCBvbiBpbnN0YW50aWF0aW9uIG9mIGEgbmV3IE92ZXJyaWRlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBpbnRlcm9wT3ZlcnJpZGUoXG5cdEludGVyb3BCcm9rZXI6IE9wZW5GaW4uQ29uc3RydWN0b3I8T3BlbkZpbi5JbnRlcm9wQnJva2VyPixcblx0cHJvdmlkZXI/OiBPcGVuRmluLkNoYW5uZWxQcm92aWRlcixcblx0b3B0aW9ucz86IE9wZW5GaW4uSW50ZXJvcEJyb2tlck9wdGlvbnMsXG5cdC4uLmFyZ3M6IHVua25vd25bXVxuKTogT3BlbkZpbi5JbnRlcm9wQnJva2VyIHtcblx0LyoqXG5cdCAqIEByZW1hcmtzXG5cdCAqIENsYXNzIHRoYXQgaW5oZXJpdHMgdGhlIHB1YmxpYyBJbnRlcm9wQnJva2VyIG1ldGhvZHMgdGhhdCBhbGxvd3MgeW91IHRvIG92ZXJyaWRlIGV4aXN0aW5nIEludGVyb3BCcm9rZXIgbWV0aG9kcyBhbmQgYWRkIGFueSBjdXN0b20gbG9naWMgdG8gdGhlIHJldHVybmVkIEludGVyb3BCcm9rZXIgaW5zdGFuY2UgdXNlZCBieSB5b3VyIHBsYXRmb3JtLlxuXHQgKi9cblx0Y2xhc3MgT3ZlcnJpZGUgZXh0ZW5kcyBJbnRlcm9wQnJva2VyIHtcblx0XHRwdWJsaWMgZXh0ZXJuYWxCcm9rZXI6IHN0cmluZztcblxuXHRcdHB1YmxpYyBleHRlcm5hbENsaWVudHM6IEV4dGVybmFsQ2xpZW50TWFwO1xuXG5cdFx0cHVibGljIG92ZXJyaWRlQXJnczogdW5rbm93bltdO1xuXG5cdFx0Y29uc3RydWN0b3IoXG5cdFx0XHRvdmVycmlkZVByb3ZpZGVyOiBPcGVuRmluLkNoYW5uZWxQcm92aWRlcixcblx0XHRcdG92ZXJyaWRlT3B0czogT3BlbkZpbi5JbnRlcm9wQnJva2VyT3B0aW9ucyxcblx0XHRcdC4uLm92ZXJyaWRlQXJnczogdW5rbm93bltdXG5cdFx0KSB7XG5cdFx0XHRzdXBlcihvdmVycmlkZVByb3ZpZGVyLCBvdmVycmlkZU9wdHMsIC4uLm92ZXJyaWRlQXJncyk7XG5cdFx0XHR0aGlzLmV4dGVybmFsQnJva2VyID0gXCJwbGF0Zm9ybS0yXCI7XG5cdFx0XHR0aGlzLmV4dGVybmFsQ2xpZW50cyA9IG5ldyBNYXAoKTtcblx0XHRcdHRoaXMub3ZlcnJpZGVBcmdzID0gb3ZlcnJpZGVBcmdzO1xuXHRcdFx0dGhpcy5vdmVycmlkZUFyZ3MgPSBbLi4udGhpcy5vdmVycmlkZUFyZ3MsIFwiY29ubmVjdC1leHRlcm5hbFwiXTtcblx0XHRcdHRoaXMuaW5pdGlhbGl6ZUJyb2tlcnMoKS5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBAbWV0aG9kIGluaXRpYWxpemVCcm9rZXJzXG5cdFx0ICogMS4gR2V0cyB0aGUgaW5zdGFuY2Ugb2YgdGhlIHNwZWNpZmllZCBleHRlcm5hbCBwbGF0Zm9ybS5cblx0XHQgKiAyLiBFbnN1cmUgdGhlIGV4dGVybmFsIHBsYXRmb3JtIGFwcGxpY2F0aW9uIGlzIHJ1bm5pbmcuXG5cdFx0ICogMy4gRW5zdXJlIHRoYXQgdGhlIHBsYXRmb3JtIGFwaSBpcyBmaW5pc2hlZCBpbml0aWFsaXppbmcuXG5cdFx0ICogNC4gUmVzZXQgdGhlIG1hcCB0cmFja2luZyB0aGUgZXh0ZXJuYWxDbGllbnQgY29ubmVjdGlvbnMuXG5cdFx0ICovXG5cdFx0cHVibGljIGFzeW5jIGluaXRpYWxpemVCcm9rZXJzKCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdFx0Y29uc3QgcGxhdGZvcm06IE9wZW5GaW4uUGxhdGZvcm0gPSBmaW4uUGxhdGZvcm0ud3JhcFN5bmMoeyB1dWlkOiB0aGlzLmV4dGVybmFsQnJva2VyIH0pO1xuXG5cdFx0XHRpZiAoYXdhaXQgcGxhdGZvcm0uQXBwbGljYXRpb24uaXNSdW5uaW5nKCkpIHtcblx0XHRcdFx0YXdhaXQgdGhpcy5zZXR1cENvbnRleHRHcm91cHMoKTtcblx0XHRcdH1cblxuXHRcdFx0YXdhaXQgcGxhdGZvcm0ub24oXCJwbGF0Zm9ybS1hcGktcmVhZHlcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRhd2FpdCB0aGlzLnNldHVwQ29udGV4dEdyb3VwcygpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGF3YWl0IHBsYXRmb3JtLkFwcGxpY2F0aW9uLm9uY2UoXCJjbG9zZWRcIiwgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmV4dGVybmFsQ2xpZW50cyA9IG5ldyBNYXAoKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEBtZXRob2QgaW5pdGlhbGl6ZUJyb2tlcnNcblx0XHQgKiAxLiBDcmVhdGUgYSBJbnRlcm9wQ2xpZW50IGluc3RhbmNlIGJ5IGNvbm5lY3RpbmcgdG8gYSBtZW1iZXIgb2YgT3ZlcnJpZGUuZXh0ZXJuYWxCcm9rZXJzLlxuXHRcdCAqIDIuIGV4dGVybmFsQ29udGV4dEdyb3VwczogdXNpbmcgdGhlIGNyZWF0ZWQgY2xpZW50IGluc3RhbmNlLCByZXRyaWV2ZSB0aGUgZXh0ZXJuYWxCcm9rZXIncyBjb250ZXh0IGdyb3Vwcy5cblx0XHQgKiAzLiBDcmVhdGUgYSBJbnRlcm9wQ2xpZW50IGluc3RhbmNlIGJ5IGNvbm5lY3RpbmcgdG8gdGhlIGN1cnJlbnQgcGxhdGZvcm1zIGludGVyb3AgYnJva2VyLlxuXHRcdCAqIDQuIFBsYXRmb3JtQ29udGV4dEdyb3VwczogdXNpbmcgdGhlIGNyZWF0ZWQgY2xpZW50IGluc3RhbmNlLCByZXRyaWV2ZSB0aGUgY3VycmVudCBwbGF0Zm9ybSBjb250ZXh0IGdyb3Vwcy5cblx0XHQgKiA1LiBDaGVjayB0byB3aGljaCBleHRlcm5hbENvbnRleHRHcm91cHMgYW5kIHBsYXRmb3JtQ09udGV4dEdyb3VwcyBhcmUgdGhlIHNhbWUuXG5cdFx0ICogNi4gSWYgdGhlIHBsYXRmb3JtQ29udGV4dEdyb3VwIGlzIHNoYXJlZCB3aXRoIGFuIGV4dGVybmFsQ29udGV4dEdyb3VwIGNyZWF0ZSBhIGNvbG9yQ2xpZW50IGFuZCBqb2luIHRoZSBzaGFyZWQgY29udGV4dCBncm91cCBmcm9tIHRoZSBjb2xvckNsaWVudC5cblx0XHQgKiA3LiBDcmVhdGUgYSBjb250ZXh0IGhhbmRsZXIgZm9yIHRoZSBjb2xvckNsaWVudC5cblx0XHQgKi9cblx0XHRwdWJsaWMgYXN5bmMgc2V0dXBDb250ZXh0R3JvdXBzKCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdFx0Y29uc3QgZXh0ZXJuYWxJbnRlcm9wQ2xpZW50OiBFeHRlcm5hbEludGVyb3BDbGllbnQgPSBmaW4uSW50ZXJvcC5jb25uZWN0U3luYyh0aGlzLmV4dGVybmFsQnJva2VyLCB7fSk7XG5cdFx0XHRjb25zdCBleHRlcm5hbENvbnRleHRHcm91cHM6IEV4dGVybmFsQ29udGV4dEdyb3VwcyA9IGF3YWl0IGV4dGVybmFsSW50ZXJvcENsaWVudC5nZXRDb250ZXh0R3JvdXBzKCk7XG5cblx0XHRcdGNvbnN0IHBsYXRmb3JtSW50ZXJvcENsaWVudDogUGxhdGZvcm1JbnRlcm9wQ2xpZW50ID0gZmluLkludGVyb3AuY29ubmVjdFN5bmMoZmluLm1lLnV1aWQsIHt9KTtcblx0XHRcdGNvbnN0IHBsYXRmb3JtQ29udGV4dEdyb3VwczogUGxhdGZvcm1Db250ZXh0R3JvdXBzID0gYXdhaXQgcGxhdGZvcm1JbnRlcm9wQ2xpZW50LmdldENvbnRleHRHcm91cHMoKTtcblxuXHRcdFx0Ly8gQXJyYXkgb2YgRXh0ZXJuYWxDbGllbnRNYXAgUHJvbWlzZXNcblx0XHRcdGNvbnN0IGV4dGVybmFsQ29udGV4dEdyb3VwUHJvbWlzZXM6IFByb21pc2U8RXh0ZXJuYWxDbGllbnRNYXA+W10gPSBleHRlcm5hbENvbnRleHRHcm91cHMubWFwKFxuXHRcdFx0XHRhc3luYyAoZXh0ZXJuYWxDb250ZXh0R3JvdXBJbmZvOiBFeHRlcm5hbENvbnRleHRHcm91cCk6IFByb21pc2U8RXh0ZXJuYWxDbGllbnRNYXA+ID0+IHtcblx0XHRcdFx0XHQvLyBjaGVjayB0byBzZWUgaWYgYSBQbGF0Zm9ybSBDbGllbnQncyBjb250ZXh0IGdyb3VwIGhhcyBhbnkgb2YgdGhlIGNoYW5uZWxzIGFzIGEgZXh0ZXJuYWxDb250ZXh0R3JvdXBcblx0XHRcdFx0XHRjb25zdCBoYXNQbGF0Zm9ybUNvbnRleHRHcm91cDogYm9vbGVhbiA9IHBsYXRmb3JtQ29udGV4dEdyb3Vwcy5zb21lKFxuXHRcdFx0XHRcdFx0KHsgaWQgfTogUGxhdGZvcm1Db250ZXh0R3JvdXApID0+IGlkID09PSBleHRlcm5hbENvbnRleHRHcm91cEluZm8uaWRcblx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0aWYgKGhhc1BsYXRmb3JtQ29udGV4dEdyb3VwKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBjb2xvckNsaWVudDogQ29sb3JJbnRlcm9wQ2xpZW50ID0gZmluLkludGVyb3AuY29ubmVjdFN5bmModGhpcy5leHRlcm5hbEJyb2tlciwge30pO1xuXHRcdFx0XHRcdFx0YXdhaXQgY29sb3JDbGllbnQuam9pbkNvbnRleHRHcm91cChleHRlcm5hbENvbnRleHRHcm91cEluZm8uaWQpO1xuXHRcdFx0XHRcdFx0LyoqXG5cdFx0XHRcdFx0XHQgKiBAZnVuY3Rpb24gY29udGV4dEhhbmRsZXJcblx0XHRcdFx0XHRcdCAqIEBwYXJhbSBjb250ZXh0IG9iamVjdCBwYXNzZWQgZnJvbSB0aGUgc2V0Q29udGV4dCBtZXRob2QuXG5cdFx0XHRcdFx0XHQgKiBAcmVtYXJrc1xuXHRcdFx0XHRcdFx0ICogSWYgdGhlIG5ld0NvbnRleHQgdmFyaWFibGUgaGFzIGEgX2NsaWVudEluZm8gb2JqZWN0IHdpdGggYSB1dWlkIHJldHVybiB0aGUgY29udGV4dCBhcyBpc1xuXHRcdFx0XHRcdFx0ICogYmVjYXVzZSBpdCBpcyBpbml0aWFsbHkgc2V0IG9uIHRoZSBwbGF0Zm9ybUludGVyb3BDbGllbnQncyBicm9rZXIuXG5cdFx0XHRcdFx0XHQgKiBvdGhlcndpc2UgY29weSB0aGUgY29udGV4dCBhdHRyaWJ1dGVzIGFuZCB2YWx1ZXMgdG8gYSBuZXcgb2JqZWN0IGNvbnRhaW5pbmdcblx0XHRcdFx0XHRcdCAqIGEgX2NsaWVudEluZm8gYXR0cmlidXRlIHdpdGggdGhlIHV1aWQgb2YgdGhlIGNvbm5lY3RlZCBleHRlcm5hbEJyb2tlci5cblx0XHRcdFx0XHRcdCAqL1xuXHRcdFx0XHRcdFx0Y29uc3QgY29udGV4dEhhbmRsZXIgPSBhc3luYyAoY29udGV4dDogRXh0ZXJuYWxDb250ZXh0KTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0XHRcdFx0XHRcdGF3YWl0IHBsYXRmb3JtSW50ZXJvcENsaWVudC5qb2luQ29udGV4dEdyb3VwKGV4dGVybmFsQ29udGV4dEdyb3VwSW5mby5pZCk7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IG5ld0NvbnRleHQgPSBjb250ZXh0Ll9jbGllbnRJbmZvPy51dWlkXG5cdFx0XHRcdFx0XHRcdFx0PyBjb250ZXh0XG5cdFx0XHRcdFx0XHRcdFx0OiB7IC4uLmNvbnRleHQsIF9jbGllbnRJbmZvOiB7IHV1aWQ6IHRoaXMuZXh0ZXJuYWxCcm9rZXIgfSB9O1xuXHRcdFx0XHRcdFx0XHRhd2FpdCBwbGF0Zm9ybUludGVyb3BDbGllbnQuc2V0Q29udGV4dChuZXdDb250ZXh0KTtcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRhd2FpdCBjb2xvckNsaWVudC5hZGRDb250ZXh0SGFuZGxlcihjb250ZXh0SGFuZGxlcik7XG5cdFx0XHRcdFx0XHQvLyByZXR1cm4gdGhlIGNvbm5lY3RlZCBjb250ZXh0IGdyb3VwIGFuZCBjb3JyZXNwb25kZWQgY29sb3IgY2xpZW50LlxuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuZXh0ZXJuYWxDbGllbnRzLnNldChleHRlcm5hbENvbnRleHRHcm91cEluZm8uaWQsIGNvbG9yQ2xpZW50KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBQcm9taXNlLmFsbChleHRlcm5hbENvbnRleHRHcm91cFByb21pc2VzKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgTm90IGFibGUgdG8gc2V0dXAgaGFuZGxlcnMgZm9yIGV4dGVybmFsIGJyb2tlcnM6ICR7ZXJyb3J9YCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogQG1ldGhvZCBzZXRDb250ZXh0T25FeHRlcm5hbENsaWVudFxuXHRcdCAqIEBwYXJhbSBjb250ZXh0IGNvbnRleHQgb2JqZWN0IHBhc3NlZCBpbiBmcm9tIHRoZSBAc2V0Q29udGV4dCBtZXRob2QuXG5cdFx0ICogQHBhcmFtIGNsaWVudElkZW50aXR5IGNsaWVudElkZW50aXR5IG9iamVjdCBwYXNzZWQgaW4gZnJvbSB0aGUgQHNldENvbnRleHQgbWV0aG9kLlxuXHRcdCAqIEByZW1hcmtzIGlmIHRoZSBleHRlcm5hbENsaWVudHNNYXAgaGFzIHByZXZpb3VzbHkgZGVyaXZlZCBjb250ZXh0R3JvdXAgZ2V0IHRoZSBjb3JyZXNwb25kaW5nIGNvbG9yQ2xpZW50IGFuZCBzZXQgdGhlIGNvbnRleHQgb24gdGhlIG1hdGNoaW5nIGNvbG9yQ2xpZW50LlxuXHRcdCAqL1xuXG5cdFx0cHVibGljIGFzeW5jIHNldENvbnRleHRPbkV4dGVybmFsQ2xpZW50KFxuXHRcdFx0Y29udGV4dDogRXh0ZXJuYWxDb250ZXh0LFxuXHRcdFx0Y2xpZW50SWRlbnRpdHk6IE9wZW5GaW4uQ2xpZW50SWRlbnRpdHlcblx0XHQpIHtcblx0XHRcdC8vIHVzZSBhY2Nlc3NvciBzeW50YXggZm9yIHRoaXMuZ2V0Q2xpZW50U3RhdGUgYXMgaXQgaXMgbm90IGEgcHVibGljIGluaGVyaXRlZCBtZXRob2QgZnJvbSBJbnRlcm9wQnJva2VyXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2RvdC1ub3RhdGlvblxuXHRcdFx0Y29uc3Qgc3RhdGUgPSB0aGlzW1wiZ2V0Q2xpZW50U3RhdGVcIl0oY2xpZW50SWRlbnRpdHkpO1xuXHRcdFx0Y29uc3QgY3R4R3JvdXBJZCA9IHN0YXRlLmNvbnRleHRHcm91cElkIGFzIHN0cmluZztcblx0XHRcdGlmICh0aGlzLmV4dGVybmFsQ2xpZW50cy5oYXMoY3R4R3JvdXBJZCkpIHtcblx0XHRcdFx0Y29uc3QgY29sb3JDbGllbnQ6IENvbG9ySW50ZXJvcENsaWVudCA9IHRoaXMuZXh0ZXJuYWxDbGllbnRzLmdldChjdHhHcm91cElkKTtcblx0XHRcdFx0YXdhaXQgY29sb3JDbGllbnQuc2V0Q29udGV4dChjb250ZXh0KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBAb3ZlcnJpZGUgQG1ldGhvZCBzZXRDb250ZXh0XG5cdFx0ICogQHBhcmFtIHBheWxvYWQgb2JqZWN0IHRoYXQgaXMgcGFzc2VkIGluIHdoZW4gc2V0IGNvbnRleHQgaXMgY2FsbGVkIGZyb20gYW4gT3BlbkZpbiBlbnRpdHkgdXNpbmcgdGhlIGludGVyb3AgYXBpLlxuXHRcdCAqIEBwYXJhbSBjbGllbnRJZGVudGl0eSBvYmplY3QgY29udGFpbmluZyB0aGUgY2xpZW50SWRlbnRpdHkgb2YgdGhlIHNlbmRlci5cblx0XHQgKiBAZXhhbXBsZSAvLyBwbGVhc2UgcmVmZXIgdG8gdGhlIHdvcmtpbmcgZXhhbXBsZXMgY29kZSBwYW5lbCBpbiB0aGlzIHByb2plY3RzIGludGVyZmFjZS5cblx0XHQgKi9cblx0XHRwdWJsaWMgYXN5bmMgc2V0Q29udGV4dChcblx0XHRcdHBheWxvYWQ6IHsgY29udGV4dDogRXh0ZXJuYWxDb250ZXh0IH0sXG5cdFx0XHRjbGllbnRJZGVudGl0eTogT3BlbkZpbi5DbGllbnRJZGVudGl0eVxuXHRcdCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdFx0Ly8gY3JlYXRlIGEgbmV3IGNvbnRleHQgb2JqZWN0IGZvciBpbnRlcm9wIHNldENvbnRleHQgY2FsbHMgZnJvbSB0aGUgaW50ZXJvcCBvYmplY3Qgd2l0aGluIHRoZSBQbGF0Zm9ybSBDbGllbnQncyB3aW5kb3dzIG9yIHZpZXdzLlxuXHRcdFx0Y29uc3QgeyBjb250ZXh0IH0gPSBwYXlsb2FkO1xuXHRcdFx0aWYgKGNvbnRleHQuX2NsaWVudEluZm8pIHtcblx0XHRcdFx0Y29uc3Qge1xuXHRcdFx0XHRcdF9jbGllbnRJbmZvOiB7IHV1aWQgfVxuXHRcdFx0XHR9ID0gY29udGV4dDtcblx0XHRcdFx0Ly8gc2V0IGNvbnRleHQgb24gZXh0ZXJuYWwgYnJva2VyXG5cdFx0XHRcdGlmICgodXVpZCAhPT0gZmluLm1lLnV1aWQgJiYgdXVpZCAhPT0gdGhpcy5leHRlcm5hbEJyb2tlcikgfHwgdXVpZCA9PT0gdGhpcy5leHRlcm5hbEJyb2tlcikge1xuXHRcdFx0XHRcdGNvbnN0IG5ld0NvbnRleHQgPSBjb250ZXh0O1xuXHRcdFx0XHRcdGRlbGV0ZSBuZXdDb250ZXh0Ll9jbGllbnRJbmZvO1xuXHRcdFx0XHRcdHN1cGVyLnNldENvbnRleHQoeyAuLi5wYXlsb2FkLCBjb250ZXh0OiBuZXdDb250ZXh0IH0sIGNsaWVudElkZW50aXR5KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gSWYgdGhlcmUgaXMgbm8gX2NsaWVudEluZm8gb2JqZWN0IHByZXNlbnQgb24gdGhlIGNvbnRleHQgb2JqZWN0IHdlIHRyZWF0IGl0IGFzIGEgYnJhbmQgbmV3IG9iamVjdCBhbmQgc2V0IGl0IG9uIGJvdGggdGhlIHBsYXRmb3JtIGFuZCBleHRlcm5hbCBjbGllbnRzLlxuXHRcdFx0XHRjb25zdCBuZXdDb250ZXh0ID0geyAuLi5jb250ZXh0LCBfY2xpZW50SW5mbzogeyB1dWlkOiBmaW4ubWUudXVpZCB9IH07XG5cdFx0XHRcdGF3YWl0IHRoaXMuc2V0Q29udGV4dE9uRXh0ZXJuYWxDbGllbnQobmV3Q29udGV4dCwgY2xpZW50SWRlbnRpdHkpO1xuXHRcdFx0XHRzdXBlci5zZXRDb250ZXh0KHBheWxvYWQsIGNsaWVudElkZW50aXR5KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIG5ldyBPdmVycmlkZShwcm92aWRlciwgb3B0aW9ucywgLi4uYXJncyk7XG59XG5cbmZpbi5QbGF0Zm9ybS5pbml0KHsgaW50ZXJvcE92ZXJyaWRlIH0pLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9