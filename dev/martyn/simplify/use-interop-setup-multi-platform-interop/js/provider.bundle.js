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
 * @param provider channel provider for the initialized platform.
 * @param options default options specified in the manifest attribute "platform.interopBrokerConfiguration".
 * @param args adds any additional parameters passed on instantiation of a new Override instance.
 * @returns The override.
 */
function interopOverride(InteropBroker, provider, options, ...args) {
    /**
     * Class that inherits the public InteropBroker methods that allows you to override existing
     * InteropBroker methods and add any custom logic to the returned InteropBroker instance used by your platform.
     */
    class Override extends InteropBroker {
        /**
         * Create new instance of the broker.
         * @param overrideProvider The provider.
         * @param overrideOpts The options.
         * @param overrideArgs The args.
         */
        constructor(overrideProvider, overrideOpts, ...overrideArgs) {
            super(overrideProvider, overrideOpts, ...overrideArgs);
            this.externalBroker = "platform-2";
            this.externalClients = new Map();
            this.overrideArgs = overrideArgs;
            this.overrideArgs = [...this.overrideArgs, "connect-external"];
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
    return new Override(provider, options, ...args);
}
fin.Platform.init({ interopOverride }).catch((error) => console.error(error));


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztnQkFDdEUsTUFBTSxJQUFJLENBQUMsMEJBQTBCLENBQUMsVUFBVSxFQUFFLGNBQWMsQ0FBQyxDQUFDO2dCQUNsRSxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQzthQUMxQztRQUNGLENBQUM7S0FDRDtJQUNELE9BQU8sSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ2pELENBQUM7QUFFRCxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXR1cC1jcm9zcy1wbGF0Zm9ybS1pbnRlcm9wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NldHVwLWNyb3NzLXBsYXRmb3JtLWludGVyb3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zZXR1cC1jcm9zcy1wbGF0Zm9ybS1pbnRlcm9wLy4vY2xpZW50L3NyYy9wcm92aWRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHR5cGUgeyBFeHRlcm5hbENsaWVudE1hcCwgRXh0ZXJuYWxDb250ZXh0IH0gZnJvbSBcIi4vc2hhcGVzXCI7XG5cbi8qKlxuICogT3ZlcnJpZGUgdGhlIGludGVyb3AgYnJva2VyLlxuICogQHBhcmFtIEludGVyb3BCcm9rZXIgY2xhc3MgdXNlZCB0byBleHRlbmQgdGhlIGN1c3RvbSBvdmVycmlkZSBzdWJjbGFzcy5cbiAqIEBwYXJhbSBwcm92aWRlciBjaGFubmVsIHByb3ZpZGVyIGZvciB0aGUgaW5pdGlhbGl6ZWQgcGxhdGZvcm0uXG4gKiBAcGFyYW0gb3B0aW9ucyBkZWZhdWx0IG9wdGlvbnMgc3BlY2lmaWVkIGluIHRoZSBtYW5pZmVzdCBhdHRyaWJ1dGUgXCJwbGF0Zm9ybS5pbnRlcm9wQnJva2VyQ29uZmlndXJhdGlvblwiLlxuICogQHBhcmFtIGFyZ3MgYWRkcyBhbnkgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIHBhc3NlZCBvbiBpbnN0YW50aWF0aW9uIG9mIGEgbmV3IE92ZXJyaWRlIGluc3RhbmNlLlxuICogQHJldHVybnMgVGhlIG92ZXJyaWRlLlxuICovXG5mdW5jdGlvbiBpbnRlcm9wT3ZlcnJpZGUoXG5cdEludGVyb3BCcm9rZXI6IE9wZW5GaW4uQ29uc3RydWN0b3I8T3BlbkZpbi5JbnRlcm9wQnJva2VyPixcblx0cHJvdmlkZXI6IE9wZW5GaW4uQ2hhbm5lbFByb3ZpZGVyLFxuXHRvcHRpb25zOiBPcGVuRmluLkludGVyb3BCcm9rZXJPcHRpb25zLFxuXHQuLi5hcmdzOiB1bmtub3duW11cbik6IE9wZW5GaW4uSW50ZXJvcEJyb2tlciB7XG5cdC8qKlxuXHQgKiBDbGFzcyB0aGF0IGluaGVyaXRzIHRoZSBwdWJsaWMgSW50ZXJvcEJyb2tlciBtZXRob2RzIHRoYXQgYWxsb3dzIHlvdSB0byBvdmVycmlkZSBleGlzdGluZ1xuXHQgKiBJbnRlcm9wQnJva2VyIG1ldGhvZHMgYW5kIGFkZCBhbnkgY3VzdG9tIGxvZ2ljIHRvIHRoZSByZXR1cm5lZCBJbnRlcm9wQnJva2VyIGluc3RhbmNlIHVzZWQgYnkgeW91ciBwbGF0Zm9ybS5cblx0ICovXG5cdGNsYXNzIE92ZXJyaWRlIGV4dGVuZHMgSW50ZXJvcEJyb2tlciB7XG5cdFx0cHVibGljIGV4dGVybmFsQnJva2VyOiBzdHJpbmc7XG5cblx0XHRwdWJsaWMgZXh0ZXJuYWxDbGllbnRzOiBFeHRlcm5hbENsaWVudE1hcDtcblxuXHRcdHB1YmxpYyBvdmVycmlkZUFyZ3M6IHVua25vd25bXTtcblxuXHRcdC8qKlxuXHRcdCAqIENyZWF0ZSBuZXcgaW5zdGFuY2Ugb2YgdGhlIGJyb2tlci5cblx0XHQgKiBAcGFyYW0gb3ZlcnJpZGVQcm92aWRlciBUaGUgcHJvdmlkZXIuXG5cdFx0ICogQHBhcmFtIG92ZXJyaWRlT3B0cyBUaGUgb3B0aW9ucy5cblx0XHQgKiBAcGFyYW0gb3ZlcnJpZGVBcmdzIFRoZSBhcmdzLlxuXHRcdCAqL1xuXHRcdGNvbnN0cnVjdG9yKFxuXHRcdFx0b3ZlcnJpZGVQcm92aWRlcjogT3BlbkZpbi5DaGFubmVsUHJvdmlkZXIsXG5cdFx0XHRvdmVycmlkZU9wdHM6IE9wZW5GaW4uSW50ZXJvcEJyb2tlck9wdGlvbnMsXG5cdFx0XHQuLi5vdmVycmlkZUFyZ3M6IHVua25vd25bXVxuXHRcdCkge1xuXHRcdFx0c3VwZXIob3ZlcnJpZGVQcm92aWRlciwgb3ZlcnJpZGVPcHRzLCAuLi5vdmVycmlkZUFyZ3MpO1xuXHRcdFx0dGhpcy5leHRlcm5hbEJyb2tlciA9IFwicGxhdGZvcm0tMlwiO1xuXHRcdFx0dGhpcy5leHRlcm5hbENsaWVudHMgPSBuZXcgTWFwKCk7XG5cdFx0XHR0aGlzLm92ZXJyaWRlQXJncyA9IG92ZXJyaWRlQXJncztcblx0XHRcdHRoaXMub3ZlcnJpZGVBcmdzID0gWy4uLnRoaXMub3ZlcnJpZGVBcmdzLCBcImNvbm5lY3QtZXh0ZXJuYWxcIl07XG5cdFx0XHR0aGlzLmluaXRpYWxpemVCcm9rZXJzKCkuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogSW5pdGlhbGl6ZSB0aGUgYnJva2Vycy5cblx0XHQgKiAxLiBHZXRzIHRoZSBpbnN0YW5jZSBvZiB0aGUgc3BlY2lmaWVkIGV4dGVybmFsIHBsYXRmb3JtLlxuXHRcdCAqIDIuIEVuc3VyZSB0aGUgZXh0ZXJuYWwgcGxhdGZvcm0gYXBwbGljYXRpb24gaXMgcnVubmluZy5cblx0XHQgKiAzLiBFbnN1cmUgdGhhdCB0aGUgcGxhdGZvcm0gYXBpIGlzIGZpbmlzaGVkIGluaXRpYWxpemluZy5cblx0XHQgKiA0LiBSZXNldCB0aGUgbWFwIHRyYWNraW5nIHRoZSBleHRlcm5hbENsaWVudCBjb25uZWN0aW9ucy5cblx0XHQgKi9cblx0XHRwdWJsaWMgYXN5bmMgaW5pdGlhbGl6ZUJyb2tlcnMoKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0XHRjb25zdCBwbGF0Zm9ybTogT3BlbkZpbi5QbGF0Zm9ybSA9IGZpbi5QbGF0Zm9ybS53cmFwU3luYyh7IHV1aWQ6IHRoaXMuZXh0ZXJuYWxCcm9rZXIgfSk7XG5cblx0XHRcdGlmIChhd2FpdCBwbGF0Zm9ybS5BcHBsaWNhdGlvbi5pc1J1bm5pbmcoKSkge1xuXHRcdFx0XHRhd2FpdCB0aGlzLnNldHVwQ29udGV4dEdyb3VwcygpO1xuXHRcdFx0fVxuXG5cdFx0XHRhd2FpdCBwbGF0Zm9ybS5vbihcInBsYXRmb3JtLWFwaS1yZWFkeVwiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdGF3YWl0IHRoaXMuc2V0dXBDb250ZXh0R3JvdXBzKCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0YXdhaXQgcGxhdGZvcm0uQXBwbGljYXRpb24ub25jZShcImNsb3NlZFwiLCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMuZXh0ZXJuYWxDbGllbnRzID0gbmV3IE1hcCgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogU2V0dXAgdGhlIGNvbnRleHQgZ3JvdXBzXG5cdFx0ICogMS4gQ3JlYXRlIGEgSW50ZXJvcENsaWVudCBpbnN0YW5jZSBieSBjb25uZWN0aW5nIHRvIGEgbWVtYmVyIG9mIE92ZXJyaWRlLmV4dGVybmFsQnJva2Vycy5cblx0XHQgKiAyLiBleHRlcm5hbENvbnRleHRHcm91cHM6IHVzaW5nIHRoZSBjcmVhdGVkIGNsaWVudCBpbnN0YW5jZSwgcmV0cmlldmUgdGhlIGV4dGVybmFsQnJva2VyJ3MgY29udGV4dCBncm91cHMuXG5cdFx0ICogMy4gQ3JlYXRlIGEgSW50ZXJvcENsaWVudCBpbnN0YW5jZSBieSBjb25uZWN0aW5nIHRvIHRoZSBjdXJyZW50IHBsYXRmb3JtcyBpbnRlcm9wIGJyb2tlci5cblx0XHQgKiA0LiBQbGF0Zm9ybUNvbnRleHRHcm91cHM6IHVzaW5nIHRoZSBjcmVhdGVkIGNsaWVudCBpbnN0YW5jZSwgcmV0cmlldmUgdGhlIGN1cnJlbnQgcGxhdGZvcm0gY29udGV4dCBncm91cHMuXG5cdFx0ICogNS4gQ2hlY2sgdG8gd2hpY2ggZXh0ZXJuYWxDb250ZXh0R3JvdXBzIGFuZCBwbGF0Zm9ybUNvbnRleHRHcm91cHMgYXJlIHRoZSBzYW1lLlxuXHRcdCAqIDYuIElmIHRoZSBwbGF0Zm9ybUNvbnRleHRHcm91cCBpcyBzaGFyZWQgd2l0aCBhbiBleHRlcm5hbENvbnRleHRHcm91cCBjcmVhdGUgYSBjb2xvckNsaWVudCBhbmQgam9pbiB0aGUgc2hhcmVkIGNvbnRleHQgZ3JvdXAgZnJvbSB0aGUgY29sb3JDbGllbnQuXG5cdFx0ICogNy4gQ3JlYXRlIGEgY29udGV4dCBoYW5kbGVyIGZvciB0aGUgY29sb3JDbGllbnQuXG5cdFx0ICovXG5cdFx0cHVibGljIGFzeW5jIHNldHVwQ29udGV4dEdyb3VwcygpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRcdGNvbnN0IGV4dGVybmFsSW50ZXJvcENsaWVudDogT3BlbkZpbi5JbnRlcm9wQ2xpZW50ID0gZmluLkludGVyb3AuY29ubmVjdFN5bmModGhpcy5leHRlcm5hbEJyb2tlciwge30pO1xuXHRcdFx0Y29uc3QgZXh0ZXJuYWxDb250ZXh0R3JvdXBzOiBPcGVuRmluLkNvbnRleHRHcm91cEluZm9bXSA9XG5cdFx0XHRcdGF3YWl0IGV4dGVybmFsSW50ZXJvcENsaWVudC5nZXRDb250ZXh0R3JvdXBzKCk7XG5cblx0XHRcdGNvbnN0IHBsYXRmb3JtSW50ZXJvcENsaWVudDogT3BlbkZpbi5JbnRlcm9wQ2xpZW50ID0gZmluLkludGVyb3AuY29ubmVjdFN5bmMoZmluLm1lLnV1aWQsIHt9KTtcblx0XHRcdGNvbnN0IHBsYXRmb3JtQ29udGV4dEdyb3VwczogT3BlbkZpbi5Db250ZXh0R3JvdXBJbmZvW10gPVxuXHRcdFx0XHRhd2FpdCBwbGF0Zm9ybUludGVyb3BDbGllbnQuZ2V0Q29udGV4dEdyb3VwcygpO1xuXG5cdFx0XHQvLyBBcnJheSBvZiBFeHRlcm5hbENsaWVudE1hcCBQcm9taXNlc1xuXHRcdFx0Y29uc3QgZXh0ZXJuYWxDb250ZXh0R3JvdXBQcm9taXNlczogUHJvbWlzZTxFeHRlcm5hbENsaWVudE1hcCB8IHVuZGVmaW5lZD5bXSA9XG5cdFx0XHRcdGV4dGVybmFsQ29udGV4dEdyb3Vwcy5tYXAoXG5cdFx0XHRcdFx0YXN5bmMgKFxuXHRcdFx0XHRcdFx0ZXh0ZXJuYWxDb250ZXh0R3JvdXBJbmZvOiBPcGVuRmluLkNvbnRleHRHcm91cEluZm9cblx0XHRcdFx0XHQpOiBQcm9taXNlPEV4dGVybmFsQ2xpZW50TWFwIHwgdW5kZWZpbmVkPiA9PiB7XG5cdFx0XHRcdFx0XHQvLyBjaGVjayB0byBzZWUgaWYgYSBQbGF0Zm9ybSBDbGllbnQncyBjb250ZXh0IGdyb3VwIGhhcyBhbnkgb2YgdGhlIGNoYW5uZWxzIGFzIGEgZXh0ZXJuYWxDb250ZXh0R3JvdXBcblx0XHRcdFx0XHRcdGNvbnN0IGhhc1BsYXRmb3JtQ29udGV4dEdyb3VwOiBib29sZWFuID0gcGxhdGZvcm1Db250ZXh0R3JvdXBzLnNvbWUoXG5cdFx0XHRcdFx0XHRcdCh7IGlkIH06IE9wZW5GaW4uQ29udGV4dEdyb3VwSW5mbykgPT4gaWQgPT09IGV4dGVybmFsQ29udGV4dEdyb3VwSW5mby5pZFxuXHRcdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdFx0aWYgKGhhc1BsYXRmb3JtQ29udGV4dEdyb3VwKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGNvbG9yQ2xpZW50OiBPcGVuRmluLkludGVyb3BDbGllbnQgPSBmaW4uSW50ZXJvcC5jb25uZWN0U3luYyh0aGlzLmV4dGVybmFsQnJva2VyLCB7fSk7XG5cdFx0XHRcdFx0XHRcdGF3YWl0IGNvbG9yQ2xpZW50LmpvaW5Db250ZXh0R3JvdXAoZXh0ZXJuYWxDb250ZXh0R3JvdXBJbmZvLmlkKTtcblx0XHRcdFx0XHRcdFx0LyoqXG5cdFx0XHRcdFx0XHRcdCAqIEhhbmRsZSBhIGNvbnRleHQuXG5cdFx0XHRcdFx0XHRcdCAqIEBwYXJhbSBjb250ZXh0IG9iamVjdCBwYXNzZWQgZnJvbSB0aGUgc2V0Q29udGV4dCBtZXRob2QuXG5cdFx0XHRcdFx0XHRcdCAqIElmIHRoZSBuZXdDb250ZXh0IHZhcmlhYmxlIGhhcyBhIF9jbGllbnRJbmZvIG9iamVjdCB3aXRoIGEgdXVpZCByZXR1cm4gdGhlIGNvbnRleHQgYXMgaXNcblx0XHRcdFx0XHRcdFx0ICogYmVjYXVzZSBpdCBpcyBpbml0aWFsbHkgc2V0IG9uIHRoZSBwbGF0Zm9ybUludGVyb3BDbGllbnQncyBicm9rZXIuXG5cdFx0XHRcdFx0XHRcdCAqIG90aGVyd2lzZSBjb3B5IHRoZSBjb250ZXh0IGF0dHJpYnV0ZXMgYW5kIHZhbHVlcyB0byBhIG5ldyBvYmplY3QgY29udGFpbmluZ1xuXHRcdFx0XHRcdFx0XHQgKiBhIF9jbGllbnRJbmZvIGF0dHJpYnV0ZSB3aXRoIHRoZSB1dWlkIG9mIHRoZSBjb25uZWN0ZWQgZXh0ZXJuYWxCcm9rZXIuXG5cdFx0XHRcdFx0XHRcdCAqL1xuXHRcdFx0XHRcdFx0XHRjb25zdCBjb250ZXh0SGFuZGxlciA9IGFzeW5jIChjb250ZXh0OiBFeHRlcm5hbENvbnRleHQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdFx0XHRcdFx0XHRhd2FpdCBwbGF0Zm9ybUludGVyb3BDbGllbnQuam9pbkNvbnRleHRHcm91cChleHRlcm5hbENvbnRleHRHcm91cEluZm8uaWQpO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IG5ld0NvbnRleHQgPSBjb250ZXh0Ll9jbGllbnRJbmZvPy51dWlkXG5cdFx0XHRcdFx0XHRcdFx0XHQ/IGNvbnRleHRcblx0XHRcdFx0XHRcdFx0XHRcdDogeyAuLi5jb250ZXh0LCBfY2xpZW50SW5mbzogeyB1dWlkOiB0aGlzLmV4dGVybmFsQnJva2VyIH0gfTtcblx0XHRcdFx0XHRcdFx0XHRhd2FpdCBwbGF0Zm9ybUludGVyb3BDbGllbnQuc2V0Q29udGV4dChuZXdDb250ZXh0KTtcblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0YXdhaXQgY29sb3JDbGllbnQuYWRkQ29udGV4dEhhbmRsZXIoY29udGV4dEhhbmRsZXIpO1xuXHRcdFx0XHRcdFx0XHQvLyByZXR1cm4gdGhlIGNvbm5lY3RlZCBjb250ZXh0IGdyb3VwIGFuZCBjb3JyZXNwb25kZWQgY29sb3IgY2xpZW50LlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5leHRlcm5hbENsaWVudHMuc2V0KGV4dGVybmFsQ29udGV4dEdyb3VwSW5mby5pZCwgY29sb3JDbGllbnQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IFByb21pc2UuYWxsKGV4dGVybmFsQ29udGV4dEdyb3VwUHJvbWlzZXMpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBOb3QgYWJsZSB0byBzZXR1cCBoYW5kbGVycyBmb3IgZXh0ZXJuYWwgYnJva2VyczogJHtlcnJvcn1gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTZXQgdGhlIGNvbnRleHQgb24gYW4gZXh0ZXJuYWwgY2xpZW50LlxuXHRcdCAqIGlmIHRoZSBleHRlcm5hbENsaWVudHNNYXAgaGFzIHByZXZpb3VzbHkgZGVyaXZlZCBjb250ZXh0R3JvdXAgZ2V0IHRoZSBjb3JyZXNwb25kaW5nXG5cdFx0ICogY29sb3JDbGllbnQgYW5kIHNldCB0aGUgY29udGV4dCBvbiB0aGUgbWF0Y2hpbmcgY29sb3JDbGllbnQuXG5cdFx0ICogQHBhcmFtIGNvbnRleHQgY29udGV4dCBvYmplY3QgcGFzc2VkIGluIGZyb20gdGhlIEBzZXRDb250ZXh0IG1ldGhvZC5cblx0XHQgKiBAcGFyYW0gY2xpZW50SWRlbnRpdHkgY2xpZW50SWRlbnRpdHkgb2JqZWN0IHBhc3NlZCBpbiBmcm9tIHRoZSBAc2V0Q29udGV4dCBtZXRob2QuXG5cdFx0ICovXG5cdFx0cHVibGljIGFzeW5jIHNldENvbnRleHRPbkV4dGVybmFsQ2xpZW50KFxuXHRcdFx0Y29udGV4dDogRXh0ZXJuYWxDb250ZXh0LFxuXHRcdFx0Y2xpZW50SWRlbnRpdHk6IE9wZW5GaW4uQ2xpZW50SWRlbnRpdHlcblx0XHQpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRcdC8vIHVzZSBhY2Nlc3NvciBzeW50YXggZm9yIHRoaXMuZ2V0Q2xpZW50U3RhdGUgYXMgaXQgaXMgbm90IGEgcHVibGljIGluaGVyaXRlZCBtZXRob2QgZnJvbSBJbnRlcm9wQnJva2VyXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2RvdC1ub3RhdGlvblxuXHRcdFx0Y29uc3Qgc3RhdGUgPSB0aGlzW1wiZ2V0Q2xpZW50U3RhdGVcIl0oY2xpZW50SWRlbnRpdHkpO1xuXHRcdFx0Y29uc3QgY3R4R3JvdXBJZCA9IHN0YXRlLmNvbnRleHRHcm91cElkIGFzIHN0cmluZztcblx0XHRcdGlmICh0aGlzLmV4dGVybmFsQ2xpZW50cy5oYXMoY3R4R3JvdXBJZCkpIHtcblx0XHRcdFx0Y29uc3QgY29sb3JDbGllbnQgPSB0aGlzLmV4dGVybmFsQ2xpZW50cy5nZXQoY3R4R3JvdXBJZCk7XG5cdFx0XHRcdGlmIChjb2xvckNsaWVudCkge1xuXHRcdFx0XHRcdGF3YWl0IGNvbG9yQ2xpZW50LnNldENvbnRleHQoY29udGV4dCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTZXQgdGhlIGNvbnRleHQuXG5cdFx0ICogQHBhcmFtIHBheWxvYWQgb2JqZWN0IHRoYXQgaXMgcGFzc2VkIGluIHdoZW4gc2V0IGNvbnRleHQgaXMgY2FsbGVkIGZyb20gYW4gT3BlbkZpbiBlbnRpdHkgdXNpbmcgdGhlIGludGVyb3AgYXBpLlxuXHRcdCAqIEBwYXJhbSBwYXlsb2FkLmNvbnRleHQgVGhlIGNvbnRleHQgZm9yIHRoZSBwYXlsb2FkLlxuXHRcdCAqIEBwYXJhbSBjbGllbnRJZGVudGl0eSBvYmplY3QgY29udGFpbmluZyB0aGUgY2xpZW50SWRlbnRpdHkgb2YgdGhlIHNlbmRlci5cblx0XHQgKi9cblx0XHRwdWJsaWMgYXN5bmMgc2V0Q29udGV4dChcblx0XHRcdHBheWxvYWQ6IHsgY29udGV4dDogRXh0ZXJuYWxDb250ZXh0IH0sXG5cdFx0XHRjbGllbnRJZGVudGl0eTogT3BlbkZpbi5DbGllbnRJZGVudGl0eVxuXHRcdCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdFx0Ly8gY3JlYXRlIGEgbmV3IGNvbnRleHQgb2JqZWN0IGZvciBpbnRlcm9wIHNldENvbnRleHQgY2FsbHMgZnJvbSB0aGUgaW50ZXJvcCBvYmplY3Qgd2l0aGluIHRoZSBQbGF0Zm9ybSBDbGllbnQncyB3aW5kb3dzIG9yIHZpZXdzLlxuXHRcdFx0Y29uc3QgeyBjb250ZXh0IH0gPSBwYXlsb2FkO1xuXHRcdFx0aWYgKGNvbnRleHQuX2NsaWVudEluZm8pIHtcblx0XHRcdFx0Y29uc3Qge1xuXHRcdFx0XHRcdF9jbGllbnRJbmZvOiB7IHV1aWQgfVxuXHRcdFx0XHR9ID0gY29udGV4dDtcblx0XHRcdFx0Ly8gc2V0IGNvbnRleHQgb24gZXh0ZXJuYWwgYnJva2VyXG5cdFx0XHRcdGlmICgodXVpZCAhPT0gZmluLm1lLnV1aWQgJiYgdXVpZCAhPT0gdGhpcy5leHRlcm5hbEJyb2tlcikgfHwgdXVpZCA9PT0gdGhpcy5leHRlcm5hbEJyb2tlcikge1xuXHRcdFx0XHRcdGNvbnN0IG5ld0NvbnRleHQgPSBjb250ZXh0O1xuXHRcdFx0XHRcdGRlbGV0ZSBuZXdDb250ZXh0Ll9jbGllbnRJbmZvO1xuXHRcdFx0XHRcdHN1cGVyLnNldENvbnRleHQoeyAuLi5wYXlsb2FkLCBjb250ZXh0OiBuZXdDb250ZXh0IH0sIGNsaWVudElkZW50aXR5KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gSWYgdGhlcmUgaXMgbm8gX2NsaWVudEluZm8gb2JqZWN0IHByZXNlbnQgb24gdGhlIGNvbnRleHQgb2JqZWN0IHdlIHRyZWF0IGl0IGFzIGEgYnJhbmQgbmV3IG9iamVjdCBhbmQgc2V0IGl0IG9uIGJvdGggdGhlIHBsYXRmb3JtIGFuZCBleHRlcm5hbCBjbGllbnRzLlxuXHRcdFx0XHRjb25zdCBuZXdDb250ZXh0ID0geyAuLi5jb250ZXh0LCBfY2xpZW50SW5mbzogeyB1dWlkOiBmaW4ubWUudXVpZCB9IH07XG5cdFx0XHRcdGF3YWl0IHRoaXMuc2V0Q29udGV4dE9uRXh0ZXJuYWxDbGllbnQobmV3Q29udGV4dCwgY2xpZW50SWRlbnRpdHkpO1xuXHRcdFx0XHRzdXBlci5zZXRDb250ZXh0KHBheWxvYWQsIGNsaWVudElkZW50aXR5KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIG5ldyBPdmVycmlkZShwcm92aWRlciwgb3B0aW9ucywgLi4uYXJncyk7XG59XG5cbmZpbi5QbGF0Zm9ybS5pbml0KHsgaW50ZXJvcE92ZXJyaWRlIH0pLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9