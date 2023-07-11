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
 * @function interopOverride function passed to Platform.init as an InitOption
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDLDBCQUEwQixDQUFDLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQztnQkFDbEUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7YUFDMUM7UUFDRixDQUFDO0tBQ0Q7SUFDRCxPQUFPLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBRUQsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2V0dXAtY3Jvc3MtcGxhdGZvcm0taW50ZXJvcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zZXR1cC1jcm9zcy1wbGF0Zm9ybS1pbnRlcm9wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2V0dXAtY3Jvc3MtcGxhdGZvcm0taW50ZXJvcC8uL2NsaWVudC9zcmMvcHJvdmlkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0eXBlIHtcblx0UGxhdGZvcm1JbnRlcm9wQ2xpZW50LFxuXHRQbGF0Zm9ybUNvbnRleHRHcm91cHMsXG5cdFBsYXRmb3JtQ29udGV4dEdyb3VwLFxuXHRDb2xvckludGVyb3BDbGllbnQsXG5cdEV4dGVybmFsSW50ZXJvcENsaWVudCxcblx0RXh0ZXJuYWxDbGllbnRNYXAsXG5cdEV4dGVybmFsQ29udGV4dEdyb3VwLFxuXHRFeHRlcm5hbENvbnRleHRHcm91cHMsXG5cdEV4dGVybmFsQ29udGV4dFxufSBmcm9tIFwiLi9zaGFwZXNcIjtcbi8qKlxuICogQGZ1bmN0aW9uIGludGVyb3BPdmVycmlkZSBmdW5jdGlvbiBwYXNzZWQgdG8gUGxhdGZvcm0uaW5pdCBhcyBhbiBJbml0T3B0aW9uXG4gKiBAcGFyYW0gSW50ZXJvcEJyb2tlciBjbGFzcyB1c2VkIHRvIGV4dGVuZCB0aGUgY3VzdG9tIG92ZXJyaWRlIHN1YmNsYXNzLlxuICogQHBhcmFtIHByb3ZpZGVyIGNoYW5uZWwgcHJvdmlkZXIgZm9yIHRoZSBpbml0aWFsaXplZCBwbGF0Zm9ybS5cbiAqIEBwYXJhbSBvcHRpb25zIGRlZmF1bHQgb3B0aW9ucyBzcGVjaWZpZWQgaW4gdGhlIG1hbmlmZXN0IGF0dHJpYnV0ZSBcInBsYXRmb3JtLmludGVyb3BCcm9rZXJDb25maWd1cmF0aW9uXCIuXG4gKiBAcGFyYW0gYXJncyBhZGRzIGFueSBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgcGFzc2VkIG9uIGluc3RhbnRpYXRpb24gb2YgYSBuZXcgT3ZlcnJpZGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGludGVyb3BPdmVycmlkZShcblx0SW50ZXJvcEJyb2tlcjogT3BlbkZpbi5Db25zdHJ1Y3RvcjxPcGVuRmluLkludGVyb3BCcm9rZXI+LFxuXHRwcm92aWRlcj86IE9wZW5GaW4uQ2hhbm5lbFByb3ZpZGVyLFxuXHRvcHRpb25zPzogT3BlbkZpbi5JbnRlcm9wQnJva2VyT3B0aW9ucyxcblx0Li4uYXJnczogdW5rbm93bltdXG4pOiBPcGVuRmluLkludGVyb3BCcm9rZXIge1xuXHQvKipcblx0ICogQHJlbWFya3Ncblx0ICogQ2xhc3MgdGhhdCBpbmhlcml0cyB0aGUgcHVibGljIEludGVyb3BCcm9rZXIgbWV0aG9kcyB0aGF0IGFsbG93cyB5b3UgdG8gb3ZlcnJpZGUgZXhpc3RpbmcgSW50ZXJvcEJyb2tlciBtZXRob2RzIGFuZCBhZGQgYW55IGN1c3RvbSBsb2dpYyB0byB0aGUgcmV0dXJuZWQgSW50ZXJvcEJyb2tlciBpbnN0YW5jZSB1c2VkIGJ5IHlvdXIgcGxhdGZvcm0uXG5cdCAqL1xuXHRjbGFzcyBPdmVycmlkZSBleHRlbmRzIEludGVyb3BCcm9rZXIge1xuXHRcdHB1YmxpYyBleHRlcm5hbEJyb2tlcjogc3RyaW5nO1xuXG5cdFx0cHVibGljIGV4dGVybmFsQ2xpZW50czogRXh0ZXJuYWxDbGllbnRNYXA7XG5cblx0XHRwdWJsaWMgb3ZlcnJpZGVBcmdzOiB1bmtub3duW107XG5cblx0XHRjb25zdHJ1Y3Rvcihcblx0XHRcdG92ZXJyaWRlUHJvdmlkZXI6IE9wZW5GaW4uQ2hhbm5lbFByb3ZpZGVyLFxuXHRcdFx0b3ZlcnJpZGVPcHRzOiBPcGVuRmluLkludGVyb3BCcm9rZXJPcHRpb25zLFxuXHRcdFx0Li4ub3ZlcnJpZGVBcmdzOiB1bmtub3duW11cblx0XHQpIHtcblx0XHRcdHN1cGVyKG92ZXJyaWRlUHJvdmlkZXIsIG92ZXJyaWRlT3B0cywgLi4ub3ZlcnJpZGVBcmdzKTtcblx0XHRcdHRoaXMuZXh0ZXJuYWxCcm9rZXIgPSBcInBsYXRmb3JtLTJcIjtcblx0XHRcdHRoaXMuZXh0ZXJuYWxDbGllbnRzID0gbmV3IE1hcCgpO1xuXHRcdFx0dGhpcy5vdmVycmlkZUFyZ3MgPSBvdmVycmlkZUFyZ3M7XG5cdFx0XHR0aGlzLm92ZXJyaWRlQXJncyA9IFsuLi50aGlzLm92ZXJyaWRlQXJncywgXCJjb25uZWN0LWV4dGVybmFsXCJdO1xuXHRcdFx0dGhpcy5pbml0aWFsaXplQnJva2VycygpLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEBtZXRob2QgaW5pdGlhbGl6ZUJyb2tlcnNcblx0XHQgKiAxLiBHZXRzIHRoZSBpbnN0YW5jZSBvZiB0aGUgc3BlY2lmaWVkIGV4dGVybmFsIHBsYXRmb3JtLlxuXHRcdCAqIDIuIEVuc3VyZSB0aGUgZXh0ZXJuYWwgcGxhdGZvcm0gYXBwbGljYXRpb24gaXMgcnVubmluZy5cblx0XHQgKiAzLiBFbnN1cmUgdGhhdCB0aGUgcGxhdGZvcm0gYXBpIGlzIGZpbmlzaGVkIGluaXRpYWxpemluZy5cblx0XHQgKiA0LiBSZXNldCB0aGUgbWFwIHRyYWNraW5nIHRoZSBleHRlcm5hbENsaWVudCBjb25uZWN0aW9ucy5cblx0XHQgKi9cblx0XHRwdWJsaWMgYXN5bmMgaW5pdGlhbGl6ZUJyb2tlcnMoKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0XHRjb25zdCBwbGF0Zm9ybTogT3BlbkZpbi5QbGF0Zm9ybSA9IGZpbi5QbGF0Zm9ybS53cmFwU3luYyh7IHV1aWQ6IHRoaXMuZXh0ZXJuYWxCcm9rZXIgfSk7XG5cblx0XHRcdGlmIChhd2FpdCBwbGF0Zm9ybS5BcHBsaWNhdGlvbi5pc1J1bm5pbmcoKSkge1xuXHRcdFx0XHRhd2FpdCB0aGlzLnNldHVwQ29udGV4dEdyb3VwcygpO1xuXHRcdFx0fVxuXG5cdFx0XHRhd2FpdCBwbGF0Zm9ybS5vbihcInBsYXRmb3JtLWFwaS1yZWFkeVwiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdGF3YWl0IHRoaXMuc2V0dXBDb250ZXh0R3JvdXBzKCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0YXdhaXQgcGxhdGZvcm0uQXBwbGljYXRpb24ub25jZShcImNsb3NlZFwiLCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMuZXh0ZXJuYWxDbGllbnRzID0gbmV3IE1hcCgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogQG1ldGhvZCBpbml0aWFsaXplQnJva2Vyc1xuXHRcdCAqIDEuIENyZWF0ZSBhIEludGVyb3BDbGllbnQgaW5zdGFuY2UgYnkgY29ubmVjdGluZyB0byBhIG1lbWJlciBvZiBPdmVycmlkZS5leHRlcm5hbEJyb2tlcnMuXG5cdFx0ICogMi4gZXh0ZXJuYWxDb250ZXh0R3JvdXBzOiB1c2luZyB0aGUgY3JlYXRlZCBjbGllbnQgaW5zdGFuY2UsIHJldHJpZXZlIHRoZSBleHRlcm5hbEJyb2tlcidzIGNvbnRleHQgZ3JvdXBzLlxuXHRcdCAqIDMuIENyZWF0ZSBhIEludGVyb3BDbGllbnQgaW5zdGFuY2UgYnkgY29ubmVjdGluZyB0byB0aGUgY3VycmVudCBwbGF0Zm9ybXMgaW50ZXJvcCBicm9rZXIuXG5cdFx0ICogNC4gUGxhdGZvcm1Db250ZXh0R3JvdXBzOiB1c2luZyB0aGUgY3JlYXRlZCBjbGllbnQgaW5zdGFuY2UsIHJldHJpZXZlIHRoZSBjdXJyZW50IHBsYXRmb3JtIGNvbnRleHQgZ3JvdXBzLlxuXHRcdCAqIDUuIENoZWNrIHRvIHdoaWNoIGV4dGVybmFsQ29udGV4dEdyb3VwcyBhbmQgcGxhdGZvcm1DT250ZXh0R3JvdXBzIGFyZSB0aGUgc2FtZS5cblx0XHQgKiA2LiBJZiB0aGUgcGxhdGZvcm1Db250ZXh0R3JvdXAgaXMgc2hhcmVkIHdpdGggYW4gZXh0ZXJuYWxDb250ZXh0R3JvdXAgY3JlYXRlIGEgY29sb3JDbGllbnQgYW5kIGpvaW4gdGhlIHNoYXJlZCBjb250ZXh0IGdyb3VwIGZyb20gdGhlIGNvbG9yQ2xpZW50LlxuXHRcdCAqIDcuIENyZWF0ZSBhIGNvbnRleHQgaGFuZGxlciBmb3IgdGhlIGNvbG9yQ2xpZW50LlxuXHRcdCAqL1xuXHRcdHB1YmxpYyBhc3luYyBzZXR1cENvbnRleHRHcm91cHMoKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0XHRjb25zdCBleHRlcm5hbEludGVyb3BDbGllbnQ6IEV4dGVybmFsSW50ZXJvcENsaWVudCA9IGZpbi5JbnRlcm9wLmNvbm5lY3RTeW5jKHRoaXMuZXh0ZXJuYWxCcm9rZXIsIHt9KTtcblx0XHRcdGNvbnN0IGV4dGVybmFsQ29udGV4dEdyb3VwczogRXh0ZXJuYWxDb250ZXh0R3JvdXBzID0gYXdhaXQgZXh0ZXJuYWxJbnRlcm9wQ2xpZW50LmdldENvbnRleHRHcm91cHMoKTtcblxuXHRcdFx0Y29uc3QgcGxhdGZvcm1JbnRlcm9wQ2xpZW50OiBQbGF0Zm9ybUludGVyb3BDbGllbnQgPSBmaW4uSW50ZXJvcC5jb25uZWN0U3luYyhmaW4ubWUudXVpZCwge30pO1xuXHRcdFx0Y29uc3QgcGxhdGZvcm1Db250ZXh0R3JvdXBzOiBQbGF0Zm9ybUNvbnRleHRHcm91cHMgPSBhd2FpdCBwbGF0Zm9ybUludGVyb3BDbGllbnQuZ2V0Q29udGV4dEdyb3VwcygpO1xuXG5cdFx0XHQvLyBBcnJheSBvZiBFeHRlcm5hbENsaWVudE1hcCBQcm9taXNlc1xuXHRcdFx0Y29uc3QgZXh0ZXJuYWxDb250ZXh0R3JvdXBQcm9taXNlczogUHJvbWlzZTxFeHRlcm5hbENsaWVudE1hcD5bXSA9IGV4dGVybmFsQ29udGV4dEdyb3Vwcy5tYXAoXG5cdFx0XHRcdGFzeW5jIChleHRlcm5hbENvbnRleHRHcm91cEluZm86IEV4dGVybmFsQ29udGV4dEdyb3VwKTogUHJvbWlzZTxFeHRlcm5hbENsaWVudE1hcD4gPT4ge1xuXHRcdFx0XHRcdC8vIGNoZWNrIHRvIHNlZSBpZiBhIFBsYXRmb3JtIENsaWVudCdzIGNvbnRleHQgZ3JvdXAgaGFzIGFueSBvZiB0aGUgY2hhbm5lbHMgYXMgYSBleHRlcm5hbENvbnRleHRHcm91cFxuXHRcdFx0XHRcdGNvbnN0IGhhc1BsYXRmb3JtQ29udGV4dEdyb3VwOiBib29sZWFuID0gcGxhdGZvcm1Db250ZXh0R3JvdXBzLnNvbWUoXG5cdFx0XHRcdFx0XHQoeyBpZCB9OiBQbGF0Zm9ybUNvbnRleHRHcm91cCkgPT4gaWQgPT09IGV4dGVybmFsQ29udGV4dEdyb3VwSW5mby5pZFxuXHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRpZiAoaGFzUGxhdGZvcm1Db250ZXh0R3JvdXApIHtcblx0XHRcdFx0XHRcdGNvbnN0IGNvbG9yQ2xpZW50OiBDb2xvckludGVyb3BDbGllbnQgPSBmaW4uSW50ZXJvcC5jb25uZWN0U3luYyh0aGlzLmV4dGVybmFsQnJva2VyLCB7fSk7XG5cdFx0XHRcdFx0XHRhd2FpdCBjb2xvckNsaWVudC5qb2luQ29udGV4dEdyb3VwKGV4dGVybmFsQ29udGV4dEdyb3VwSW5mby5pZCk7XG5cdFx0XHRcdFx0XHQvKipcblx0XHRcdFx0XHRcdCAqIEBmdW5jdGlvbiBjb250ZXh0SGFuZGxlclxuXHRcdFx0XHRcdFx0ICogQHBhcmFtIGNvbnRleHQgb2JqZWN0IHBhc3NlZCBmcm9tIHRoZSBzZXRDb250ZXh0IG1ldGhvZC5cblx0XHRcdFx0XHRcdCAqIEByZW1hcmtzXG5cdFx0XHRcdFx0XHQgKiBJZiB0aGUgbmV3Q29udGV4dCB2YXJpYWJsZSBoYXMgYSBfY2xpZW50SW5mbyBvYmplY3Qgd2l0aCBhIHV1aWQgcmV0dXJuIHRoZSBjb250ZXh0IGFzIGlzXG5cdFx0XHRcdFx0XHQgKiBiZWNhdXNlIGl0IGlzIGluaXRpYWxseSBzZXQgb24gdGhlIHBsYXRmb3JtSW50ZXJvcENsaWVudCdzIGJyb2tlci5cblx0XHRcdFx0XHRcdCAqIG90aGVyd2lzZSBjb3B5IHRoZSBjb250ZXh0IGF0dHJpYnV0ZXMgYW5kIHZhbHVlcyB0byBhIG5ldyBvYmplY3QgY29udGFpbmluZ1xuXHRcdFx0XHRcdFx0ICogYSBfY2xpZW50SW5mbyBhdHRyaWJ1dGUgd2l0aCB0aGUgdXVpZCBvZiB0aGUgY29ubmVjdGVkIGV4dGVybmFsQnJva2VyLlxuXHRcdFx0XHRcdFx0ICovXG5cdFx0XHRcdFx0XHRjb25zdCBjb250ZXh0SGFuZGxlciA9IGFzeW5jIChjb250ZXh0OiBFeHRlcm5hbENvbnRleHQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdFx0XHRcdFx0YXdhaXQgcGxhdGZvcm1JbnRlcm9wQ2xpZW50LmpvaW5Db250ZXh0R3JvdXAoZXh0ZXJuYWxDb250ZXh0R3JvdXBJbmZvLmlkKTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgbmV3Q29udGV4dCA9IGNvbnRleHQuX2NsaWVudEluZm8/LnV1aWRcblx0XHRcdFx0XHRcdFx0XHQ/IGNvbnRleHRcblx0XHRcdFx0XHRcdFx0XHQ6IHsgLi4uY29udGV4dCwgX2NsaWVudEluZm86IHsgdXVpZDogdGhpcy5leHRlcm5hbEJyb2tlciB9IH07XG5cdFx0XHRcdFx0XHRcdGF3YWl0IHBsYXRmb3JtSW50ZXJvcENsaWVudC5zZXRDb250ZXh0KG5ld0NvbnRleHQpO1xuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdGF3YWl0IGNvbG9yQ2xpZW50LmFkZENvbnRleHRIYW5kbGVyKGNvbnRleHRIYW5kbGVyKTtcblx0XHRcdFx0XHRcdC8vIHJldHVybiB0aGUgY29ubmVjdGVkIGNvbnRleHQgZ3JvdXAgYW5kIGNvcnJlc3BvbmRlZCBjb2xvciBjbGllbnQuXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5leHRlcm5hbENsaWVudHMuc2V0KGV4dGVybmFsQ29udGV4dEdyb3VwSW5mby5pZCwgY29sb3JDbGllbnQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IFByb21pc2UuYWxsKGV4dGVybmFsQ29udGV4dEdyb3VwUHJvbWlzZXMpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBOb3QgYWJsZSB0byBzZXR1cCBoYW5kbGVycyBmb3IgZXh0ZXJuYWwgYnJva2VyczogJHtlcnJvcn1gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBAbWV0aG9kIHNldENvbnRleHRPbkV4dGVybmFsQ2xpZW50XG5cdFx0ICogQHBhcmFtIGNvbnRleHQgY29udGV4dCBvYmplY3QgcGFzc2VkIGluIGZyb20gdGhlIEBzZXRDb250ZXh0IG1ldGhvZC5cblx0XHQgKiBAcGFyYW0gY2xpZW50SWRlbnRpdHkgY2xpZW50SWRlbnRpdHkgb2JqZWN0IHBhc3NlZCBpbiBmcm9tIHRoZSBAc2V0Q29udGV4dCBtZXRob2QuXG5cdFx0ICogQHJlbWFya3MgaWYgdGhlIGV4dGVybmFsQ2xpZW50c01hcCBoYXMgcHJldmlvdXNseSBkZXJpdmVkIGNvbnRleHRHcm91cCBnZXQgdGhlIGNvcnJlc3BvbmRpbmcgY29sb3JDbGllbnQgYW5kIHNldCB0aGUgY29udGV4dCBvbiB0aGUgbWF0Y2hpbmcgY29sb3JDbGllbnQuXG5cdFx0ICovXG5cblx0XHRwdWJsaWMgYXN5bmMgc2V0Q29udGV4dE9uRXh0ZXJuYWxDbGllbnQoXG5cdFx0XHRjb250ZXh0OiBFeHRlcm5hbENvbnRleHQsXG5cdFx0XHRjbGllbnRJZGVudGl0eTogT3BlbkZpbi5DbGllbnRJZGVudGl0eVxuXHRcdCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdFx0Ly8gdXNlIGFjY2Vzc29yIHN5bnRheCBmb3IgdGhpcy5nZXRDbGllbnRTdGF0ZSBhcyBpdCBpcyBub3QgYSBwdWJsaWMgaW5oZXJpdGVkIG1ldGhvZCBmcm9tIEludGVyb3BCcm9rZXJcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZG90LW5vdGF0aW9uXG5cdFx0XHRjb25zdCBzdGF0ZSA9IHRoaXNbXCJnZXRDbGllbnRTdGF0ZVwiXShjbGllbnRJZGVudGl0eSk7XG5cdFx0XHRjb25zdCBjdHhHcm91cElkID0gc3RhdGUuY29udGV4dEdyb3VwSWQgYXMgc3RyaW5nO1xuXHRcdFx0aWYgKHRoaXMuZXh0ZXJuYWxDbGllbnRzLmhhcyhjdHhHcm91cElkKSkge1xuXHRcdFx0XHRjb25zdCBjb2xvckNsaWVudDogQ29sb3JJbnRlcm9wQ2xpZW50ID0gdGhpcy5leHRlcm5hbENsaWVudHMuZ2V0KGN0eEdyb3VwSWQpO1xuXHRcdFx0XHRhd2FpdCBjb2xvckNsaWVudC5zZXRDb250ZXh0KGNvbnRleHQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEBvdmVycmlkZSBAbWV0aG9kIHNldENvbnRleHRcblx0XHQgKiBAcGFyYW0gcGF5bG9hZCBvYmplY3QgdGhhdCBpcyBwYXNzZWQgaW4gd2hlbiBzZXQgY29udGV4dCBpcyBjYWxsZWQgZnJvbSBhbiBPcGVuRmluIGVudGl0eSB1c2luZyB0aGUgaW50ZXJvcCBhcGkuXG5cdFx0ICogQHBhcmFtIGNsaWVudElkZW50aXR5IG9iamVjdCBjb250YWluaW5nIHRoZSBjbGllbnRJZGVudGl0eSBvZiB0aGUgc2VuZGVyLlxuXHRcdCAqIEBleGFtcGxlIC8vIHBsZWFzZSByZWZlciB0byB0aGUgd29ya2luZyBleGFtcGxlcyBjb2RlIHBhbmVsIGluIHRoaXMgcHJvamVjdHMgaW50ZXJmYWNlLlxuXHRcdCAqL1xuXHRcdHB1YmxpYyBhc3luYyBzZXRDb250ZXh0KFxuXHRcdFx0cGF5bG9hZDogeyBjb250ZXh0OiBFeHRlcm5hbENvbnRleHQgfSxcblx0XHRcdGNsaWVudElkZW50aXR5OiBPcGVuRmluLkNsaWVudElkZW50aXR5XG5cdFx0KTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0XHQvLyBjcmVhdGUgYSBuZXcgY29udGV4dCBvYmplY3QgZm9yIGludGVyb3Agc2V0Q29udGV4dCBjYWxscyBmcm9tIHRoZSBpbnRlcm9wIG9iamVjdCB3aXRoaW4gdGhlIFBsYXRmb3JtIENsaWVudCdzIHdpbmRvd3Mgb3Igdmlld3MuXG5cdFx0XHRjb25zdCB7IGNvbnRleHQgfSA9IHBheWxvYWQ7XG5cdFx0XHRpZiAoY29udGV4dC5fY2xpZW50SW5mbykge1xuXHRcdFx0XHRjb25zdCB7XG5cdFx0XHRcdFx0X2NsaWVudEluZm86IHsgdXVpZCB9XG5cdFx0XHRcdH0gPSBjb250ZXh0O1xuXHRcdFx0XHQvLyBzZXQgY29udGV4dCBvbiBleHRlcm5hbCBicm9rZXJcblx0XHRcdFx0aWYgKCh1dWlkICE9PSBmaW4ubWUudXVpZCAmJiB1dWlkICE9PSB0aGlzLmV4dGVybmFsQnJva2VyKSB8fCB1dWlkID09PSB0aGlzLmV4dGVybmFsQnJva2VyKSB7XG5cdFx0XHRcdFx0Y29uc3QgbmV3Q29udGV4dCA9IGNvbnRleHQ7XG5cdFx0XHRcdFx0ZGVsZXRlIG5ld0NvbnRleHQuX2NsaWVudEluZm87XG5cdFx0XHRcdFx0c3VwZXIuc2V0Q29udGV4dCh7IC4uLnBheWxvYWQsIGNvbnRleHQ6IG5ld0NvbnRleHQgfSwgY2xpZW50SWRlbnRpdHkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBJZiB0aGVyZSBpcyBubyBfY2xpZW50SW5mbyBvYmplY3QgcHJlc2VudCBvbiB0aGUgY29udGV4dCBvYmplY3Qgd2UgdHJlYXQgaXQgYXMgYSBicmFuZCBuZXcgb2JqZWN0IGFuZCBzZXQgaXQgb24gYm90aCB0aGUgcGxhdGZvcm0gYW5kIGV4dGVybmFsIGNsaWVudHMuXG5cdFx0XHRcdGNvbnN0IG5ld0NvbnRleHQgPSB7IC4uLmNvbnRleHQsIF9jbGllbnRJbmZvOiB7IHV1aWQ6IGZpbi5tZS51dWlkIH0gfTtcblx0XHRcdFx0YXdhaXQgdGhpcy5zZXRDb250ZXh0T25FeHRlcm5hbENsaWVudChuZXdDb250ZXh0LCBjbGllbnRJZGVudGl0eSk7XG5cdFx0XHRcdHN1cGVyLnNldENvbnRleHQocGF5bG9hZCwgY2xpZW50SWRlbnRpdHkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gbmV3IE92ZXJyaWRlKHByb3ZpZGVyLCBvcHRpb25zLCAuLi5hcmdzKTtcbn1cblxuZmluLlBsYXRmb3JtLmluaXQoeyBpbnRlcm9wT3ZlcnJpZGUgfSkuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=