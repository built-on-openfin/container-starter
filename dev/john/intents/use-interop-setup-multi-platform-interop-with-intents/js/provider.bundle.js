/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client/src/connection.ts"
/*!**********************************!*\
  !*** ./client/src/connection.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   connectToExternalClient: () => (/* binding */ connectToExternalClient),
/* harmony export */   validateBrokerConnection: () => (/* binding */ validateBrokerConnection)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./client/src/util.ts");

/**
 * Requests a connection to an external client.
 * @param externalClient - the information about the external client to connect to, including uuid, manifestUrl, and any custom data needed for validation.
 * @returns interop client instance connected to the external client.
 */
async function connectToExternalClient(externalClient) {
    return new Promise((resolve, reject) => {
        const platform = fin.Platform.wrapSync({ uuid: externalClient.uuid });
        const connectionId = `${externalClient.uuid}-${(0,_util__WEBPACK_IMPORTED_MODULE_0__.randomUUID)()}`;
        platform.Application.isRunning()
            .then(async (isRunning) => {
            let success = false;
            try {
                if (isRunning) {
                    const brokerConnection = await validateAndReturnBrokerConnection(externalClient, platform);
                    resolve({ client: brokerConnection, uuid: externalClient.uuid, connectionId });
                    success = true;
                }
                else {
                    await platform.on("platform-api-ready", async () => {
                        const brokerConnection = await validateAndReturnBrokerConnection(externalClient, platform);
                        resolve({ client: brokerConnection, uuid: externalClient.uuid, connectionId });
                        success = true;
                    });
                }
            }
            catch (error) {
                reject(error);
            }
            return success;
        })
            .catch(() => reject(new Error(`Failed to connect to platform with uuid ${externalClient.uuid}`)));
    });
}
/**
 * Validates the connection to an external client.
 * @param externalClient - the information about the external client to connect to, including uuid, manifestUrl, and any custom data needed for validation.
 * @param externalClient.uuid - the uuid of the external client's platform.
 * @param externalClient.manifestUrl - the manifest url of the external client's platform, used for validation to ensure we are connecting to the expected platform.
 * @param externalClient.interopKey - a specific key used for interop validation.
 * @param payload - the custom data payload to validate against the external client's interop key.
 * @param payload.HERE_API - a specific key within the custom data to validate.
 * @returns A boolean indicating if the connection is valid.
 */
async function validateBrokerConnection(externalClient, payload) {
    const platform = fin.Platform.wrapSync({ uuid: externalClient.uuid });
    const isValidManifest = await validateManifestUrl(externalClient, platform);
    if (!isValidManifest) {
        console.error(`Validation failed for platform with uuid ${externalClient.uuid} due to manifest url mismatch.`);
        return false;
    }
    const isValidPayload = await validatePayload(externalClient, payload);
    if (!isValidPayload) {
        console.error(`Validation failed for platform with uuid ${externalClient.uuid} due to invalid custom data. Received HERE_API: ${payload.HERE_API}`);
        return false;
    }
    return true;
}
/**
 * Setup the connection to an external platform.
 * @param externalClient the external client information used to connect to the external platform and setup the context sharing groups.
 * @param platform the instance of the external platform used to setup the connection and context sharing groups.
 * @returns A connected InteropClient instance if the validation is successful, otherwise an error is thrown.
 */
async function validateAndReturnBrokerConnection(externalClient, platform) {
    const isValidPlatform = await validateManifestUrl(externalClient, platform);
    if (!isValidPlatform) {
        throw new Error(`The manifest url of the connected platform does not match the expected manifest url ${externalClient.manifestUrl} for ${externalClient.uuid}`);
    }
    const interopClient = fin.Interop.connectSync(externalClient.uuid, {
        HERE_API: externalClient.interopKey
    });
    return interopClient;
}
/**
 * Validates the connection to an external client by checking the manifest url and custom data.
 * @param externalClient - the information about the external client to connect to, including uuid, manifestUrl, and any custom data needed for validation.
 * @param platform - the instance of the external platform used to validate the manifest url.
 * @returns A boolean indicating if the connection is valid.
 */
async function validateManifestUrl(externalClient, platform) {
    const info = await platform.Application.getInfo();
    const isValid = info.manifestUrl === externalClient.manifestUrl;
    if (!isValid) {
        console.warn(`Validating connection to platform with uuid ${externalClient.uuid}. Expected manifest url: ${externalClient.manifestUrl}, Actual manifest url: ${info.manifestUrl}`);
    }
    return isValid;
}
/**
 * Validates the connection to an external broker by checking custom data.
 * This is a placeholder for any custom validation logic you want to implement for the connection.
 * For example, you could check if the custom data contains a specific key or value that you expect.
 * In this example, we are just checking if the HERE_API key exists and has a specific value.
 * @param externalClient - the information about the external client, including uuid, manifestUrl, and any custom data needed for validation.
 * @param payload - the custom data payload to validate against the connection's custom data.
 * @param payload.HERE_API - a specific key within the custom data to validate.
 * @returns A boolean indicating if the connection is valid based on the custom data validation.
 */
async function validatePayload(externalClient, payload) {
    const isPayloadValid = payload.HERE_API === externalClient.interopKey;
    if (!isPayloadValid) {
        // NOTE: YOU WOULD NOT WANT TO LOG SENSITIVE INFORMATION IN A PRODUCTION ENVIRONMENT. This is just for demonstration purposes to show how you could validate custom data on the connection and log for debugging if the validation fails.
        console.warn(`Validating connection to platform with uuid ${externalClient.uuid}. Expected HERE_API: ${externalClient.interopKey}, Actual HERE_API: ${payload.HERE_API}`);
    }
    return isPayloadValid;
}


/***/ },

/***/ "./client/src/util.ts"
/*!****************************!*\
  !*** ./client/src/util.ts ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   randomUUID: () => (/* binding */ randomUUID)
/* harmony export */ });
/**
 * Polyfills randomUUID if running in a non-secure context.
 * @returns The random UUID.
 */
function randomUUID() {
    if ("randomUUID" in globalThis.crypto) {
        // eslint-disable-next-line no-restricted-syntax
        return globalThis.crypto.randomUUID();
    }
    // Polyfill the window.crypto.randomUUID if we are running in a non secure context that doesn't have it
    // we are still using window.crypto.getRandomValues which is always available
    // https://stackoverflow.com/a/2117523/2800218
    /**
     * Get random hex value.
     * @param c The number to base the random value on.
     * @returns The random value.
     */
    function getRandomHex(c) {
        // eslint-disable-next-line no-bitwise
        const rnd = globalThis.crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(c) / 4));
        return (
        // eslint-disable-next-line no-bitwise
        (Number(c) ^ rnd).toString(16));
    }
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, getRandomHex);
}


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./client/src/provider.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connection */ "./client/src/connection.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./client/src/util.ts");


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
            this.externalClients = [];
            this.externalClientConnections = [];
            this.initializeConnections().catch((error) => console.error(error));
        }
        /**
         * Handle the information for and intent.
         * @param intentOptions The intent options.
         * @param clientIdentity The client.
         * @returns The intents mapped to app metadata.
         */
        async handleInfoForIntent(intentOptions, clientIdentity) {
            console.log("Received request for info for intent:", intentOptions, "From client identity:", clientIdentity);
            // This is where you would check the intentOptions against your directory of applications and their supported intents
            // and return the appropriate app metadata for the intent so that the client can make an informed decision about which app to route the intent to.
            // you can also go beyond checking just the intent name and also check the context types, etc...
            const response = {
                intent: { name: intentOptions.name, displayName: intentOptions.name },
                apps: []
            };
            for (const externalClient of this.externalClients) {
                if (externalClient.interop.intents?.listensFor &&
                    intentOptions.name in externalClient.interop.intents.listensFor) {
                    response.apps.push({
                        appId: externalClient.uuid,
                        name: externalClient.uuid,
                        title: externalClient.title
                    });
                }
            }
            if (response.apps.length === 0) {
                // the way this example broker is setup right now is that it will pick an external client if supports the intent
                // if it isn't running then it logs a warning.
                // If no external app supports the intent it will try and fire it internally to the fdc3 intent tool.
                // Given that logic lets return the current platform if no external client supports the intent
                response.apps.push({
                    appId: fin.me.identity.uuid,
                    name: fin.me.identity.uuid,
                    title: "This Platform"
                });
                console.info(`No external clients support intent ${intentOptions.name}. Returning this platform as the only option to handle the intent but it may not be able to handle it if it doesn't have a listener for it.`);
            }
            return response;
        }
        /**
         * Handle a fired intent.
         * @param intent The intent to handle.
         * @param clientIdentity The client identity.
         * @returns The intent resolution.
         */
        async handleFiredIntent(intent, clientIdentity) {
            console.log("Received request for a raised intent:", intent, "For client identity:", clientIdentity);
            // Validation would have occurred in isActionAuthorized but you could do additional validation here if needed before handling the intent.
            // This is where you could check your application directory to see if a specific app should handle the request or if you should
            // present an intent resolution picker to the user to choose which app they want to handle the intent, etc...
            // For a full implementation of an interop broker you can check out the workspace platform starter example in the built-on-openfin/workspace-starter repo.
            // This example is very basic.
            // * If an intent request comes in we check to see if any external clients match it (this example will pick the first matching external client but in a real world you would have an intent resolver).
            // * If we don't find a matching external client then we launch a webpage with the intent name and fire the intent to it.
            const intentName = intent.name;
            let targetExternalClient;
            if (intent.metadata?.target?.appId && intent.metadata?.target?.appId !== fin.me.identity.uuid) {
                console.log(`Intent ${intentName} has a target app ${intent.metadata.target.appId}. Attempting to find a matching external client for it.`);
                targetExternalClient = this.externalClients.find((externalClient) => externalClient.uuid === intent.metadata?.target?.appId &&
                    externalClient.interop.intents?.listensFor &&
                    intentName in externalClient.interop.intents.listensFor);
                if (targetExternalClient) {
                    if (targetExternalClient.appId && targetExternalClient.appId !== intent.metadata?.target?.appId) {
                        console.warn(`The intent ${intentName} has a target appId ${intent.metadata.target.appId} that matches the uuid of an external client but it does not match the preferred appId for that external client. Updating it to ${targetExternalClient.appId}`);
                        intent.metadata.target = {
                            appId: targetExternalClient.appId,
                            instanceId: intent.metadata.target.instanceId
                        };
                    }
                    console.log(`Found matching external client ${targetExternalClient.uuid} for intent ${intentName} with target appId ${intent.metadata?.target?.appId}. Routing intent to it.`);
                }
                else {
                    throw new Error("TargetAppUnavailable");
                }
            }
            else {
                // no appId specified in the target or it matches the current platform so go with default logic.
                targetExternalClient = this.externalClients.find((externalClient) => externalClient.interop.intents?.listensFor &&
                    intentName in externalClient.interop.intents.listensFor);
            }
            if (targetExternalClient) {
                console.log(`Found matching external client ${targetExternalClient.uuid} for intent ${intentName}. Routing intent to it.`);
                const targetConnection = this.externalClientConnections.find((connection) => connection.uuid === targetExternalClient.uuid && connection.client);
                // This is a basic example assuming you only target external clients that are running.
                // Some platforms include the external client as an app that can be launched either through the platform's UI or from the interop broker if the client is not already running.
                if (targetConnection) {
                    await targetConnection.client.fireIntent(intent);
                    return {
                        source: { appId: targetConnection.uuid },
                        intent: intent.name
                    };
                }
                console.warn(`External interop client connection for ${targetExternalClient.uuid} was not found. Unable to fire intent.`);
                throw new Error("TargetAppUnavailable");
            }
            // For this example we are going to launch a url that matches the intent name and pass it the context.
            const url = "https://built-on-openfin.github.io/dev-extensions/main/interop/fdc3/intent/2-0/fdc3-intent-view.html";
            const targetIdentity = {
                uuid: fin.me.identity.uuid,
                name: `${intentName.toLocaleLowerCase()}-${(0,_util__WEBPACK_IMPORTED_MODULE_1__.randomUUID)()}`
            };
            // this could be a view in your platform or a classic window as shown here. Usually the launching logic is not in the broker but abstracted away so that it can be reused in different places in your platform but for simplicity we are launching it here.
            await fin.Window.create({
                name: targetIdentity.name,
                url,
                fdc3InteropApi: "2.0"
            });
            await super.setIntentTarget(intent, targetIdentity);
            // If you had an app directory for content launched internally the appId would reflect the selection made (e.g. the fdc3 intent tool in this example) and you would be able to
            // determine the instance id. The built-on-openfin/workspace-starter/how-to/workspace-platform-starter example has a more robust example of an interop broker implementation.
            return {
                source: { appId: fin.me.identity.uuid },
                intent: intent.name
            };
        }
        /**
         * Is the connection authorized.
         * @param id The id of the client identity to check.
         * @param payload The payload to send with the authorization check.
         * @returns True if the connection is authorized.
         */
        async isConnectionAuthorized(id, payload) {
            console.log("isConnectionAuthorized called with id", id, "payload", payload);
            if (id.uuid === fin.me.uuid) {
                console.log("Connection authorized for internal content", id.uuid);
                return true;
            }
            const allowedConnection = this.externalClients.find((externalClient) => externalClient.uuid === id.uuid);
            if (!allowedConnection) {
                console.log("Connection not authorized for external client", id.uuid);
                return false;
            }
            // The uuid is allowed but for external clients you want to validate more than that.
            // This is a very basic example where we are using the interopKey as a shared secret between the platforms to validate the connection
            // but in a real world scenario you would likely want to have a more robust validation process that could include checking a token,
            // making a request to a service with the provided custom data, etc...
            const isValid = await (0,_connection__WEBPACK_IMPORTED_MODULE_0__.validateBrokerConnection)(allowedConnection, payload ?? {});
            if (isValid) {
                console.log("Connection authorized for external client", id.uuid);
            }
            else {
                console.log("Connection not authorized for external client. It failed validation.", id.uuid);
            }
            return isValid;
        }
        /**
         * Called before every action to check if this entity should be allowed to take the action.
         * Return false to prevent the action.
         * @param action the string action to authorize in camel case
         * @param payload the data being sent for this action
         * @param identity the connection attempting to dispatch this action
         * @returns boolean or a promise that resolves to boolean indicating if the action is authorized.
         */
        async isActionAuthorized(action, payload, identity) {
            console.log("isActionAuthorized called with action", action, "payload", payload, "identity", identity);
            if (identity.uuid === fin.me.uuid) {
                console.log("Action authorized for internal content", identity.uuid);
                return true;
            }
            const connectionRules = this.externalClients.find((externalClient) => externalClient.uuid === identity.uuid);
            if (!connectionRules) {
                // all connections should have been blocked in isConnectionAuthorized but we will do a final check here to be safe and
                // we need to know what an external client is allowed to do.
                console.log("Action not authorized for external client", identity.uuid);
                return false;
            }
            if (action === "joinContextGroup" &&
                payload &&
                typeof payload === "object" &&
                "contextGroupId" in payload &&
                connectionRules.interop.userChannels?.allowedChannels) {
                // if we have defined allowed channels for this external client then we will check if the context group they are trying to join is in the allowed channels list. If it is not we will reject the action.
                const allowedChannels = connectionRules.interop.userChannels.allowedChannels;
                const isAllowedChannel = allowedChannels.includes(payload.contextGroupId);
                if (!isAllowedChannel) {
                    console.warn(`Connection request from ${JSON.stringify(identity)} attempted to join context group ${payload.contextGroupId} which is not in the allowed channels list and was rejected.`);
                    return false;
                }
                return true;
            }
            if (action === "intentHandlerRegistered" &&
                payload &&
                typeof payload === "object" &&
                "handlerId" in payload &&
                payload.handlerId === "intent-handler-ViewAnalysis" &&
                connectionRules.interop?.intents?.listensFor) {
                const allowedIntentListeners = Object.keys(connectionRules.interop.intents.listensFor);
                const requestedIntent = payload.handlerId.replace("intent-handler-", "");
                if (!allowedIntentListeners.includes(requestedIntent)) {
                    console.warn(`Connection request from ${JSON.stringify(identity)} attempted to register an intent handler for ${requestedIntent} which is not in the allowed intents list and was rejected.`);
                    return false;
                }
                return true;
            }
            if (action === "fireIntent" &&
                payload &&
                typeof payload === "object" &&
                "name" in payload &&
                connectionRules.interop?.intents?.raises) {
                const allowedIntentsToRaise = Object.keys(connectionRules.interop.intents.raises);
                const requestedIntent = payload.name;
                if (!allowedIntentsToRaise.includes(requestedIntent)) {
                    console.warn(`Connection request from ${JSON.stringify(identity)} attempted to fire an intent ${requestedIntent} which is not in the allowed intents list and was rejected.`);
                    return false;
                }
                return true;
            }
            return true;
        }
        /**
         * Initialize the connections.
         * 1. Gets the instance of the specified external platform.
         * 2. Ensure the external platform application is running.
         * 3. Ensure that the platform api is finished initializing.
         * 4. Reset the map tracking the externalClient connections.
         */
        async initializeConnections() {
            // This is just a basic example where you are calling a service to get a list of external clients for the current user. If you put the url in your manifest then
            // have your platform validate that the current manifest is the expected one.
            const externalClientEndpointUrl = location.href.replace("provider.html", `${fin.me.identity.uuid.toLocaleLowerCase().replaceAll(" ", "-")}-external-clients.json`);
            let fetchedExternalClients = [];
            try {
                const response = await fetch(externalClientEndpointUrl);
                if (response.ok) {
                    fetchedExternalClients = (await response.json());
                    this.externalClients = fetchedExternalClients;
                    console.log(`Fetched external clients from ${externalClientEndpointUrl}:`, fetchedExternalClients);
                }
                else {
                    console.warn(`Failed to fetch external clients from ${externalClientEndpointUrl}. Using default external clients. Response status: ${response.status}`);
                }
            }
            catch (error) {
                console.error(`Error fetching external clients from ${externalClientEndpointUrl}. Using default external clients. Error:`, error);
            }
            for (const externalClient of fetchedExternalClients) {
                // no need to await these connections as they may not be running yet and will resolve when they do become available.
                this.validateAndConnect(externalClient).catch((error) => console.error(`Error connecting to external broker ${externalClient.uuid}:`, error));
            }
        }
        /**
         * Sets up the connection to an external broker by validating the connection and then initializing the broker.
         * @param externalClient the external client information used to connect to the external platform and setup the context sharing groups.
         * @returns void
         */
        async validateAndConnect(externalClient) {
            const connection = await (0,_connection__WEBPACK_IMPORTED_MODULE_0__.connectToExternalClient)(externalClient);
            this.externalClientConnections.push(connection);
            await connection.client.onDisconnection((event) => {
                console.warn(`Connection to external broker ${event.brokerName} was lost.`);
                // remove the connection from the externalConnections array
                // You can decide if you want to automatically attempt to reconnect here or if you want to require a manual refresh to reconnect.
                this.externalClientConnections = this.externalClientConnections.filter((c) => c.connectionId !== connection.connectionId);
            });
        }
    }
    return new Override();
}
fin.Platform.init({ interopOverride }).catch((error) => console.error(error));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aXRoLWludGVudHMvLi9jbGllbnQvc3JjL2Nvbm5lY3Rpb24udHMiLCJ3ZWJwYWNrOi8vc2V0dXAtY3Jvc3MtcGxhdGZvcm0taW50ZXJvcC13aXRoLWludGVudHMvLi9jbGllbnQvc3JjL3V0aWwudHMiLCJ3ZWJwYWNrOi8vc2V0dXAtY3Jvc3MtcGxhdGZvcm0taW50ZXJvcC13aXRoLWludGVudHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2V0dXAtY3Jvc3MtcGxhdGZvcm0taW50ZXJvcC13aXRoLWludGVudHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NldHVwLWNyb3NzLXBsYXRmb3JtLWludGVyb3Atd2l0aC1pbnRlbnRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2V0dXAtY3Jvc3MtcGxhdGZvcm0taW50ZXJvcC13aXRoLWludGVudHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zZXR1cC1jcm9zcy1wbGF0Zm9ybS1pbnRlcm9wLXdpdGgtaW50ZW50cy8uL2NsaWVudC9zcmMvcHJvdmlkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBPcGVuRmluIH0gZnJvbSBcIkBvcGVuZmluL2NvcmVcIjtcbmltcG9ydCB0eXBlIHsgRXh0ZXJuYWxDbGllbnQsIEV4dGVybmFsQ2xpZW50Q29ubmVjdGlvbiB9IGZyb20gXCIuL3NoYXBlc1wiO1xuaW1wb3J0IHsgcmFuZG9tVVVJRCB9IGZyb20gXCIuL3V0aWxcIjtcblxuLyoqXG4gKiBSZXF1ZXN0cyBhIGNvbm5lY3Rpb24gdG8gYW4gZXh0ZXJuYWwgY2xpZW50LlxuICogQHBhcmFtIGV4dGVybmFsQ2xpZW50IC0gdGhlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBleHRlcm5hbCBjbGllbnQgdG8gY29ubmVjdCB0bywgaW5jbHVkaW5nIHV1aWQsIG1hbmlmZXN0VXJsLCBhbmQgYW55IGN1c3RvbSBkYXRhIG5lZWRlZCBmb3IgdmFsaWRhdGlvbi5cbiAqIEByZXR1cm5zIGludGVyb3AgY2xpZW50IGluc3RhbmNlIGNvbm5lY3RlZCB0byB0aGUgZXh0ZXJuYWwgY2xpZW50LlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRXh0ZXJuYWxDbGllbnQoXG5cdGV4dGVybmFsQ2xpZW50OiBFeHRlcm5hbENsaWVudFxuKTogUHJvbWlzZTxFeHRlcm5hbENsaWVudENvbm5lY3Rpb24+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlPEV4dGVybmFsQ2xpZW50Q29ubmVjdGlvbj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdGNvbnN0IHBsYXRmb3JtOiBPcGVuRmluLlBsYXRmb3JtID0gZmluLlBsYXRmb3JtLndyYXBTeW5jKHsgdXVpZDogZXh0ZXJuYWxDbGllbnQudXVpZCB9KTtcblx0XHRjb25zdCBjb25uZWN0aW9uSWQgPSBgJHtleHRlcm5hbENsaWVudC51dWlkfS0ke3JhbmRvbVVVSUQoKX1gO1xuXHRcdHBsYXRmb3JtLkFwcGxpY2F0aW9uLmlzUnVubmluZygpXG5cdFx0XHQudGhlbihhc3luYyAoaXNSdW5uaW5nKSA9PiB7XG5cdFx0XHRcdGxldCBzdWNjZXNzID0gZmFsc2U7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aWYgKGlzUnVubmluZykge1xuXHRcdFx0XHRcdFx0Y29uc3QgYnJva2VyQ29ubmVjdGlvbiA9IGF3YWl0IHZhbGlkYXRlQW5kUmV0dXJuQnJva2VyQ29ubmVjdGlvbihleHRlcm5hbENsaWVudCwgcGxhdGZvcm0pO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZSh7IGNsaWVudDogYnJva2VyQ29ubmVjdGlvbiwgdXVpZDogZXh0ZXJuYWxDbGllbnQudXVpZCwgY29ubmVjdGlvbklkIH0pO1xuXHRcdFx0XHRcdFx0c3VjY2VzcyA9IHRydWU7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGF3YWl0IHBsYXRmb3JtLm9uKFwicGxhdGZvcm0tYXBpLXJlYWR5XCIsIGFzeW5jICgpID0+IHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgYnJva2VyQ29ubmVjdGlvbiA9IGF3YWl0IHZhbGlkYXRlQW5kUmV0dXJuQnJva2VyQ29ubmVjdGlvbihleHRlcm5hbENsaWVudCwgcGxhdGZvcm0pO1xuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKHsgY2xpZW50OiBicm9rZXJDb25uZWN0aW9uLCB1dWlkOiBleHRlcm5hbENsaWVudC51dWlkLCBjb25uZWN0aW9uSWQgfSk7XG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3MgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHN1Y2Nlc3M7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKCgpID0+IHJlamVjdChuZXcgRXJyb3IoYEZhaWxlZCB0byBjb25uZWN0IHRvIHBsYXRmb3JtIHdpdGggdXVpZCAke2V4dGVybmFsQ2xpZW50LnV1aWR9YCkpKTtcblx0fSk7XG59XG5cbi8qKlxuICogVmFsaWRhdGVzIHRoZSBjb25uZWN0aW9uIHRvIGFuIGV4dGVybmFsIGNsaWVudC5cbiAqIEBwYXJhbSBleHRlcm5hbENsaWVudCAtIHRoZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZXh0ZXJuYWwgY2xpZW50IHRvIGNvbm5lY3QgdG8sIGluY2x1ZGluZyB1dWlkLCBtYW5pZmVzdFVybCwgYW5kIGFueSBjdXN0b20gZGF0YSBuZWVkZWQgZm9yIHZhbGlkYXRpb24uXG4gKiBAcGFyYW0gZXh0ZXJuYWxDbGllbnQudXVpZCAtIHRoZSB1dWlkIG9mIHRoZSBleHRlcm5hbCBjbGllbnQncyBwbGF0Zm9ybS5cbiAqIEBwYXJhbSBleHRlcm5hbENsaWVudC5tYW5pZmVzdFVybCAtIHRoZSBtYW5pZmVzdCB1cmwgb2YgdGhlIGV4dGVybmFsIGNsaWVudCdzIHBsYXRmb3JtLCB1c2VkIGZvciB2YWxpZGF0aW9uIHRvIGVuc3VyZSB3ZSBhcmUgY29ubmVjdGluZyB0byB0aGUgZXhwZWN0ZWQgcGxhdGZvcm0uXG4gKiBAcGFyYW0gZXh0ZXJuYWxDbGllbnQuaW50ZXJvcEtleSAtIGEgc3BlY2lmaWMga2V5IHVzZWQgZm9yIGludGVyb3AgdmFsaWRhdGlvbi5cbiAqIEBwYXJhbSBwYXlsb2FkIC0gdGhlIGN1c3RvbSBkYXRhIHBheWxvYWQgdG8gdmFsaWRhdGUgYWdhaW5zdCB0aGUgZXh0ZXJuYWwgY2xpZW50J3MgaW50ZXJvcCBrZXkuXG4gKiBAcGFyYW0gcGF5bG9hZC5IRVJFX0FQSSAtIGEgc3BlY2lmaWMga2V5IHdpdGhpbiB0aGUgY3VzdG9tIGRhdGEgdG8gdmFsaWRhdGUuXG4gKiBAcmV0dXJucyBBIGJvb2xlYW4gaW5kaWNhdGluZyBpZiB0aGUgY29ubmVjdGlvbiBpcyB2YWxpZC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZhbGlkYXRlQnJva2VyQ29ubmVjdGlvbihcblx0ZXh0ZXJuYWxDbGllbnQ6IEV4dGVybmFsQ2xpZW50LFxuXHRwYXlsb2FkOiB7IEhFUkVfQVBJPzogc3RyaW5nIH1cbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuXHRjb25zdCBwbGF0Zm9ybTogT3BlbkZpbi5QbGF0Zm9ybSA9IGZpbi5QbGF0Zm9ybS53cmFwU3luYyh7IHV1aWQ6IGV4dGVybmFsQ2xpZW50LnV1aWQgfSk7XG5cdGNvbnN0IGlzVmFsaWRNYW5pZmVzdCA9IGF3YWl0IHZhbGlkYXRlTWFuaWZlc3RVcmwoZXh0ZXJuYWxDbGllbnQsIHBsYXRmb3JtKTtcblx0aWYgKCFpc1ZhbGlkTWFuaWZlc3QpIHtcblx0XHRjb25zb2xlLmVycm9yKFxuXHRcdFx0YFZhbGlkYXRpb24gZmFpbGVkIGZvciBwbGF0Zm9ybSB3aXRoIHV1aWQgJHtleHRlcm5hbENsaWVudC51dWlkfSBkdWUgdG8gbWFuaWZlc3QgdXJsIG1pc21hdGNoLmBcblx0XHQpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRjb25zdCBpc1ZhbGlkUGF5bG9hZCA9IGF3YWl0IHZhbGlkYXRlUGF5bG9hZChleHRlcm5hbENsaWVudCwgcGF5bG9hZCk7XG5cdGlmICghaXNWYWxpZFBheWxvYWQpIHtcblx0XHRjb25zb2xlLmVycm9yKFxuXHRcdFx0YFZhbGlkYXRpb24gZmFpbGVkIGZvciBwbGF0Zm9ybSB3aXRoIHV1aWQgJHtleHRlcm5hbENsaWVudC51dWlkfSBkdWUgdG8gaW52YWxpZCBjdXN0b20gZGF0YS4gUmVjZWl2ZWQgSEVSRV9BUEk6ICR7cGF5bG9hZC5IRVJFX0FQSX1gXG5cdFx0KTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0cmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogU2V0dXAgdGhlIGNvbm5lY3Rpb24gdG8gYW4gZXh0ZXJuYWwgcGxhdGZvcm0uXG4gKiBAcGFyYW0gZXh0ZXJuYWxDbGllbnQgdGhlIGV4dGVybmFsIGNsaWVudCBpbmZvcm1hdGlvbiB1c2VkIHRvIGNvbm5lY3QgdG8gdGhlIGV4dGVybmFsIHBsYXRmb3JtIGFuZCBzZXR1cCB0aGUgY29udGV4dCBzaGFyaW5nIGdyb3Vwcy5cbiAqIEBwYXJhbSBwbGF0Zm9ybSB0aGUgaW5zdGFuY2Ugb2YgdGhlIGV4dGVybmFsIHBsYXRmb3JtIHVzZWQgdG8gc2V0dXAgdGhlIGNvbm5lY3Rpb24gYW5kIGNvbnRleHQgc2hhcmluZyBncm91cHMuXG4gKiBAcmV0dXJucyBBIGNvbm5lY3RlZCBJbnRlcm9wQ2xpZW50IGluc3RhbmNlIGlmIHRoZSB2YWxpZGF0aW9uIGlzIHN1Y2Nlc3NmdWwsIG90aGVyd2lzZSBhbiBlcnJvciBpcyB0aHJvd24uXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHZhbGlkYXRlQW5kUmV0dXJuQnJva2VyQ29ubmVjdGlvbihcblx0ZXh0ZXJuYWxDbGllbnQ6IEV4dGVybmFsQ2xpZW50LFxuXHRwbGF0Zm9ybTogT3BlbkZpbi5QbGF0Zm9ybVxuKTogUHJvbWlzZTxPcGVuRmluLkludGVyb3BDbGllbnQ+IHtcblx0Y29uc3QgaXNWYWxpZFBsYXRmb3JtID0gYXdhaXQgdmFsaWRhdGVNYW5pZmVzdFVybChleHRlcm5hbENsaWVudCwgcGxhdGZvcm0pO1xuXHRpZiAoIWlzVmFsaWRQbGF0Zm9ybSkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdGBUaGUgbWFuaWZlc3QgdXJsIG9mIHRoZSBjb25uZWN0ZWQgcGxhdGZvcm0gZG9lcyBub3QgbWF0Y2ggdGhlIGV4cGVjdGVkIG1hbmlmZXN0IHVybCAke2V4dGVybmFsQ2xpZW50Lm1hbmlmZXN0VXJsfSBmb3IgJHtleHRlcm5hbENsaWVudC51dWlkfWBcblx0XHQpO1xuXHR9XG5cdGNvbnN0IGludGVyb3BDbGllbnQgPSBmaW4uSW50ZXJvcC5jb25uZWN0U3luYyhleHRlcm5hbENsaWVudC51dWlkLCB7XG5cdFx0SEVSRV9BUEk6IGV4dGVybmFsQ2xpZW50LmludGVyb3BLZXlcblx0fSBhcyBPcGVuRmluLkludGVyb3BDb25maWcpO1xuXHRyZXR1cm4gaW50ZXJvcENsaWVudDtcbn1cblxuLyoqXG4gKiBWYWxpZGF0ZXMgdGhlIGNvbm5lY3Rpb24gdG8gYW4gZXh0ZXJuYWwgY2xpZW50IGJ5IGNoZWNraW5nIHRoZSBtYW5pZmVzdCB1cmwgYW5kIGN1c3RvbSBkYXRhLlxuICogQHBhcmFtIGV4dGVybmFsQ2xpZW50IC0gdGhlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBleHRlcm5hbCBjbGllbnQgdG8gY29ubmVjdCB0bywgaW5jbHVkaW5nIHV1aWQsIG1hbmlmZXN0VXJsLCBhbmQgYW55IGN1c3RvbSBkYXRhIG5lZWRlZCBmb3IgdmFsaWRhdGlvbi5cbiAqIEBwYXJhbSBwbGF0Zm9ybSAtIHRoZSBpbnN0YW5jZSBvZiB0aGUgZXh0ZXJuYWwgcGxhdGZvcm0gdXNlZCB0byB2YWxpZGF0ZSB0aGUgbWFuaWZlc3QgdXJsLlxuICogQHJldHVybnMgQSBib29sZWFuIGluZGljYXRpbmcgaWYgdGhlIGNvbm5lY3Rpb24gaXMgdmFsaWQuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHZhbGlkYXRlTWFuaWZlc3RVcmwoXG5cdGV4dGVybmFsQ2xpZW50OiBFeHRlcm5hbENsaWVudCxcblx0cGxhdGZvcm06IE9wZW5GaW4uUGxhdGZvcm1cbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuXHRjb25zdCBpbmZvID0gYXdhaXQgcGxhdGZvcm0uQXBwbGljYXRpb24uZ2V0SW5mbygpO1xuXHRjb25zdCBpc1ZhbGlkID0gaW5mby5tYW5pZmVzdFVybCA9PT0gZXh0ZXJuYWxDbGllbnQubWFuaWZlc3RVcmw7XG5cdGlmICghaXNWYWxpZCkge1xuXHRcdGNvbnNvbGUud2Fybihcblx0XHRcdGBWYWxpZGF0aW5nIGNvbm5lY3Rpb24gdG8gcGxhdGZvcm0gd2l0aCB1dWlkICR7ZXh0ZXJuYWxDbGllbnQudXVpZH0uIEV4cGVjdGVkIG1hbmlmZXN0IHVybDogJHtleHRlcm5hbENsaWVudC5tYW5pZmVzdFVybH0sIEFjdHVhbCBtYW5pZmVzdCB1cmw6ICR7aW5mby5tYW5pZmVzdFVybH1gXG5cdFx0KTtcblx0fVxuXHRyZXR1cm4gaXNWYWxpZDtcbn1cblxuLyoqXG4gKiBWYWxpZGF0ZXMgdGhlIGNvbm5lY3Rpb24gdG8gYW4gZXh0ZXJuYWwgYnJva2VyIGJ5IGNoZWNraW5nIGN1c3RvbSBkYXRhLlxuICogVGhpcyBpcyBhIHBsYWNlaG9sZGVyIGZvciBhbnkgY3VzdG9tIHZhbGlkYXRpb24gbG9naWMgeW91IHdhbnQgdG8gaW1wbGVtZW50IGZvciB0aGUgY29ubmVjdGlvbi5cbiAqIEZvciBleGFtcGxlLCB5b3UgY291bGQgY2hlY2sgaWYgdGhlIGN1c3RvbSBkYXRhIGNvbnRhaW5zIGEgc3BlY2lmaWMga2V5IG9yIHZhbHVlIHRoYXQgeW91IGV4cGVjdC5cbiAqIEluIHRoaXMgZXhhbXBsZSwgd2UgYXJlIGp1c3QgY2hlY2tpbmcgaWYgdGhlIEhFUkVfQVBJIGtleSBleGlzdHMgYW5kIGhhcyBhIHNwZWNpZmljIHZhbHVlLlxuICogQHBhcmFtIGV4dGVybmFsQ2xpZW50IC0gdGhlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBleHRlcm5hbCBjbGllbnQsIGluY2x1ZGluZyB1dWlkLCBtYW5pZmVzdFVybCwgYW5kIGFueSBjdXN0b20gZGF0YSBuZWVkZWQgZm9yIHZhbGlkYXRpb24uXG4gKiBAcGFyYW0gcGF5bG9hZCAtIHRoZSBjdXN0b20gZGF0YSBwYXlsb2FkIHRvIHZhbGlkYXRlIGFnYWluc3QgdGhlIGNvbm5lY3Rpb24ncyBjdXN0b20gZGF0YS5cbiAqIEBwYXJhbSBwYXlsb2FkLkhFUkVfQVBJIC0gYSBzcGVjaWZpYyBrZXkgd2l0aGluIHRoZSBjdXN0b20gZGF0YSB0byB2YWxpZGF0ZS5cbiAqIEByZXR1cm5zIEEgYm9vbGVhbiBpbmRpY2F0aW5nIGlmIHRoZSBjb25uZWN0aW9uIGlzIHZhbGlkIGJhc2VkIG9uIHRoZSBjdXN0b20gZGF0YSB2YWxpZGF0aW9uLlxuICovXG5hc3luYyBmdW5jdGlvbiB2YWxpZGF0ZVBheWxvYWQoXG5cdGV4dGVybmFsQ2xpZW50OiBFeHRlcm5hbENsaWVudCxcblx0cGF5bG9hZDogeyBIRVJFX0FQST86IHN0cmluZyB9XG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcblx0Y29uc3QgaXNQYXlsb2FkVmFsaWQgPSBwYXlsb2FkLkhFUkVfQVBJID09PSBleHRlcm5hbENsaWVudC5pbnRlcm9wS2V5O1xuXHRpZiAoIWlzUGF5bG9hZFZhbGlkKSB7XG5cdFx0Ly8gTk9URTogWU9VIFdPVUxEIE5PVCBXQU5UIFRPIExPRyBTRU5TSVRJVkUgSU5GT1JNQVRJT04gSU4gQSBQUk9EVUNUSU9OIEVOVklST05NRU5ULiBUaGlzIGlzIGp1c3QgZm9yIGRlbW9uc3RyYXRpb24gcHVycG9zZXMgdG8gc2hvdyBob3cgeW91IGNvdWxkIHZhbGlkYXRlIGN1c3RvbSBkYXRhIG9uIHRoZSBjb25uZWN0aW9uIGFuZCBsb2cgZm9yIGRlYnVnZ2luZyBpZiB0aGUgdmFsaWRhdGlvbiBmYWlscy5cblx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRgVmFsaWRhdGluZyBjb25uZWN0aW9uIHRvIHBsYXRmb3JtIHdpdGggdXVpZCAke2V4dGVybmFsQ2xpZW50LnV1aWR9LiBFeHBlY3RlZCBIRVJFX0FQSTogJHtleHRlcm5hbENsaWVudC5pbnRlcm9wS2V5fSwgQWN0dWFsIEhFUkVfQVBJOiAke3BheWxvYWQuSEVSRV9BUEl9YFxuXHRcdCk7XG5cdH1cblx0cmV0dXJuIGlzUGF5bG9hZFZhbGlkO1xufVxuIiwiLyoqXG4gKiBQb2x5ZmlsbHMgcmFuZG9tVVVJRCBpZiBydW5uaW5nIGluIGEgbm9uLXNlY3VyZSBjb250ZXh0LlxuICogQHJldHVybnMgVGhlIHJhbmRvbSBVVUlELlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tVVVJRCgpOiBzdHJpbmcge1xuXHRpZiAoXCJyYW5kb21VVUlEXCIgaW4gZ2xvYmFsVGhpcy5jcnlwdG8pIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcblx0XHRyZXR1cm4gZ2xvYmFsVGhpcy5jcnlwdG8ucmFuZG9tVVVJRCgpO1xuXHR9XG5cdC8vIFBvbHlmaWxsIHRoZSB3aW5kb3cuY3J5cHRvLnJhbmRvbVVVSUQgaWYgd2UgYXJlIHJ1bm5pbmcgaW4gYSBub24gc2VjdXJlIGNvbnRleHQgdGhhdCBkb2Vzbid0IGhhdmUgaXRcblx0Ly8gd2UgYXJlIHN0aWxsIHVzaW5nIHdpbmRvdy5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzIHdoaWNoIGlzIGFsd2F5cyBhdmFpbGFibGVcblx0Ly8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIxMTc1MjMvMjgwMDIxOFxuXHQvKipcblx0ICogR2V0IHJhbmRvbSBoZXggdmFsdWUuXG5cdCAqIEBwYXJhbSBjIFRoZSBudW1iZXIgdG8gYmFzZSB0aGUgcmFuZG9tIHZhbHVlIG9uLlxuXHQgKiBAcmV0dXJucyBUaGUgcmFuZG9tIHZhbHVlLlxuXHQgKi9cblx0ZnVuY3Rpb24gZ2V0UmFuZG9tSGV4KGM6IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2Vcblx0XHRjb25zdCBybmQgPSBnbG9iYWxUaGlzLmNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMSkpWzBdICYgKDE1ID4+IChOdW1iZXIoYykgLyA0KSk7XG5cdFx0cmV0dXJuIChcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG5cdFx0XHQoTnVtYmVyKGMpIF4gcm5kKS50b1N0cmluZygxNilcblx0XHQpO1xuXHR9XG5cdHJldHVybiBcIjEwMDAwMDAwLTEwMDAtNDAwMC04MDAwLTEwMDAwMDAwMDAwMFwiLnJlcGxhY2UoL1swMThdL2csIGdldFJhbmRvbUhleCk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHR5cGUgT3BlbkZpbiBmcm9tIFwiQG9wZW5maW4vY29yZVwiO1xuaW1wb3J0IHsgY29ubmVjdFRvRXh0ZXJuYWxDbGllbnQsIHZhbGlkYXRlQnJva2VyQ29ubmVjdGlvbiB9IGZyb20gXCIuL2Nvbm5lY3Rpb25cIjtcbmltcG9ydCB0eXBlIHsgRXh0ZXJuYWxDbGllbnQsIEV4dGVybmFsQ2xpZW50Q29ubmVjdGlvbiB9IGZyb20gXCIuL3NoYXBlc1wiO1xuaW1wb3J0IHsgcmFuZG9tVVVJRCB9IGZyb20gXCIuL3V0aWxcIjtcblxuLyoqXG4gKiBPdmVycmlkZSB0aGUgaW50ZXJvcCBicm9rZXIuXG4gKiBAcGFyYW0gSW50ZXJvcEJyb2tlciBjbGFzcyB1c2VkIHRvIGV4dGVuZCB0aGUgY3VzdG9tIG92ZXJyaWRlIHN1YmNsYXNzLlxuICogQHJldHVybnMgVGhlIG92ZXJyaWRlLlxuICovXG5mdW5jdGlvbiBpbnRlcm9wT3ZlcnJpZGUoSW50ZXJvcEJyb2tlcjogT3BlbkZpbi5Db25zdHJ1Y3RvcjxPcGVuRmluLkludGVyb3BCcm9rZXI+KTogT3BlbkZpbi5JbnRlcm9wQnJva2VyIHtcblx0LyoqXG5cdCAqIENsYXNzIHRoYXQgaW5oZXJpdHMgdGhlIHB1YmxpYyBJbnRlcm9wQnJva2VyIG1ldGhvZHMgdGhhdCBhbGxvd3MgeW91IHRvIG92ZXJyaWRlIGV4aXN0aW5nXG5cdCAqIEludGVyb3BCcm9rZXIgbWV0aG9kcyBhbmQgYWRkIGFueSBjdXN0b20gbG9naWMgdG8gdGhlIHJldHVybmVkIEludGVyb3BCcm9rZXIgaW5zdGFuY2UgdXNlZCBieSB5b3VyIHBsYXRmb3JtLlxuXHQgKi9cblx0Y2xhc3MgT3ZlcnJpZGUgZXh0ZW5kcyBJbnRlcm9wQnJva2VyIHtcblx0XHRwdWJsaWMgZXh0ZXJuYWxDbGllbnRzOiBFeHRlcm5hbENsaWVudFtdID0gW107XG5cblx0XHRwdWJsaWMgZXh0ZXJuYWxDbGllbnRDb25uZWN0aW9uczogRXh0ZXJuYWxDbGllbnRDb25uZWN0aW9uW10gPSBbXTtcblxuXHRcdC8qKlxuXHRcdCAqIEluaXRpYWxpemUgYW5kIGNvbm5lY3QgdG8gZXh0ZXJuYWwgYnJva2VyLlxuXHRcdCAqL1xuXHRcdGNvbnN0cnVjdG9yKCkge1xuXHRcdFx0c3VwZXIoKTtcblx0XHRcdHRoaXMuaW5pdGlhbGl6ZUNvbm5lY3Rpb25zKCkuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogSGFuZGxlIHRoZSBpbmZvcm1hdGlvbiBmb3IgYW5kIGludGVudC5cblx0XHQgKiBAcGFyYW0gaW50ZW50T3B0aW9ucyBUaGUgaW50ZW50IG9wdGlvbnMuXG5cdFx0ICogQHBhcmFtIGNsaWVudElkZW50aXR5IFRoZSBjbGllbnQuXG5cdFx0ICogQHJldHVybnMgVGhlIGludGVudHMgbWFwcGVkIHRvIGFwcCBtZXRhZGF0YS5cblx0XHQgKi9cblx0XHRwdWJsaWMgYXN5bmMgaGFuZGxlSW5mb0ZvckludGVudChcblx0XHRcdGludGVudE9wdGlvbnM6IE9wZW5GaW4uSW5mb0ZvckludGVudE9wdGlvbnMsXG5cdFx0XHRjbGllbnRJZGVudGl0eTogT3BlbkZpbi5DbGllbnRJZGVudGl0eVxuXHRcdCk6IFByb21pc2U8e1xuXHRcdFx0aW50ZW50OiB7IG5hbWU6IHN0cmluZzsgZGlzcGxheU5hbWU/OiBzdHJpbmcgfTtcblx0XHRcdGFwcHM6IE9wZW5GaW4uRkRDMy52Ml8wLkFwcE1ldGFkYXRhW107XG5cdFx0fT4ge1xuXHRcdFx0Y29uc29sZS5sb2coXG5cdFx0XHRcdFwiUmVjZWl2ZWQgcmVxdWVzdCBmb3IgaW5mbyBmb3IgaW50ZW50OlwiLFxuXHRcdFx0XHRpbnRlbnRPcHRpb25zLFxuXHRcdFx0XHRcIkZyb20gY2xpZW50IGlkZW50aXR5OlwiLFxuXHRcdFx0XHRjbGllbnRJZGVudGl0eVxuXHRcdFx0KTtcblx0XHRcdC8vIFRoaXMgaXMgd2hlcmUgeW91IHdvdWxkIGNoZWNrIHRoZSBpbnRlbnRPcHRpb25zIGFnYWluc3QgeW91ciBkaXJlY3Rvcnkgb2YgYXBwbGljYXRpb25zIGFuZCB0aGVpciBzdXBwb3J0ZWQgaW50ZW50c1xuXHRcdFx0Ly8gYW5kIHJldHVybiB0aGUgYXBwcm9wcmlhdGUgYXBwIG1ldGFkYXRhIGZvciB0aGUgaW50ZW50IHNvIHRoYXQgdGhlIGNsaWVudCBjYW4gbWFrZSBhbiBpbmZvcm1lZCBkZWNpc2lvbiBhYm91dCB3aGljaCBhcHAgdG8gcm91dGUgdGhlIGludGVudCB0by5cblx0XHRcdC8vIHlvdSBjYW4gYWxzbyBnbyBiZXlvbmQgY2hlY2tpbmcganVzdCB0aGUgaW50ZW50IG5hbWUgYW5kIGFsc28gY2hlY2sgdGhlIGNvbnRleHQgdHlwZXMsIGV0Yy4uLlxuXHRcdFx0Y29uc3QgcmVzcG9uc2U6IHtcblx0XHRcdFx0aW50ZW50OiB7IG5hbWU6IHN0cmluZzsgZGlzcGxheU5hbWU/OiBzdHJpbmcgfTtcblx0XHRcdFx0YXBwczogT3BlbkZpbi5GREMzLnYyXzAuQXBwTWV0YWRhdGFbXTtcblx0XHRcdH0gPSB7XG5cdFx0XHRcdGludGVudDogeyBuYW1lOiBpbnRlbnRPcHRpb25zLm5hbWUsIGRpc3BsYXlOYW1lOiBpbnRlbnRPcHRpb25zLm5hbWUgfSxcblx0XHRcdFx0YXBwczogW11cblx0XHRcdH07XG5cblx0XHRcdGZvciAoY29uc3QgZXh0ZXJuYWxDbGllbnQgb2YgdGhpcy5leHRlcm5hbENsaWVudHMpIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGV4dGVybmFsQ2xpZW50LmludGVyb3AuaW50ZW50cz8ubGlzdGVuc0ZvciAmJlxuXHRcdFx0XHRcdGludGVudE9wdGlvbnMubmFtZSBpbiBleHRlcm5hbENsaWVudC5pbnRlcm9wLmludGVudHMubGlzdGVuc0ZvclxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZXNwb25zZS5hcHBzLnB1c2goe1xuXHRcdFx0XHRcdFx0YXBwSWQ6IGV4dGVybmFsQ2xpZW50LnV1aWQsXG5cdFx0XHRcdFx0XHRuYW1lOiBleHRlcm5hbENsaWVudC51dWlkLFxuXHRcdFx0XHRcdFx0dGl0bGU6IGV4dGVybmFsQ2xpZW50LnRpdGxlXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKHJlc3BvbnNlLmFwcHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdC8vIHRoZSB3YXkgdGhpcyBleGFtcGxlIGJyb2tlciBpcyBzZXR1cCByaWdodCBub3cgaXMgdGhhdCBpdCB3aWxsIHBpY2sgYW4gZXh0ZXJuYWwgY2xpZW50IGlmIHN1cHBvcnRzIHRoZSBpbnRlbnRcblx0XHRcdFx0Ly8gaWYgaXQgaXNuJ3QgcnVubmluZyB0aGVuIGl0IGxvZ3MgYSB3YXJuaW5nLlxuXHRcdFx0XHQvLyBJZiBubyBleHRlcm5hbCBhcHAgc3VwcG9ydHMgdGhlIGludGVudCBpdCB3aWxsIHRyeSBhbmQgZmlyZSBpdCBpbnRlcm5hbGx5IHRvIHRoZSBmZGMzIGludGVudCB0b29sLlxuXHRcdFx0XHQvLyBHaXZlbiB0aGF0IGxvZ2ljIGxldHMgcmV0dXJuIHRoZSBjdXJyZW50IHBsYXRmb3JtIGlmIG5vIGV4dGVybmFsIGNsaWVudCBzdXBwb3J0cyB0aGUgaW50ZW50XG5cdFx0XHRcdHJlc3BvbnNlLmFwcHMucHVzaCh7XG5cdFx0XHRcdFx0YXBwSWQ6IGZpbi5tZS5pZGVudGl0eS51dWlkLFxuXHRcdFx0XHRcdG5hbWU6IGZpbi5tZS5pZGVudGl0eS51dWlkLFxuXHRcdFx0XHRcdHRpdGxlOiBcIlRoaXMgUGxhdGZvcm1cIlxuXHRcdFx0XHR9KTtcblx0XHRcdFx0Y29uc29sZS5pbmZvKFxuXHRcdFx0XHRcdGBObyBleHRlcm5hbCBjbGllbnRzIHN1cHBvcnQgaW50ZW50ICR7aW50ZW50T3B0aW9ucy5uYW1lfS4gUmV0dXJuaW5nIHRoaXMgcGxhdGZvcm0gYXMgdGhlIG9ubHkgb3B0aW9uIHRvIGhhbmRsZSB0aGUgaW50ZW50IGJ1dCBpdCBtYXkgbm90IGJlIGFibGUgdG8gaGFuZGxlIGl0IGlmIGl0IGRvZXNuJ3QgaGF2ZSBhIGxpc3RlbmVyIGZvciBpdC5gXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiByZXNwb25zZTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBIYW5kbGUgYSBmaXJlZCBpbnRlbnQuXG5cdFx0ICogQHBhcmFtIGludGVudCBUaGUgaW50ZW50IHRvIGhhbmRsZS5cblx0XHQgKiBAcGFyYW0gY2xpZW50SWRlbnRpdHkgVGhlIGNsaWVudCBpZGVudGl0eS5cblx0XHQgKiBAcmV0dXJucyBUaGUgaW50ZW50IHJlc29sdXRpb24uXG5cdFx0ICovXG5cdFx0cHVibGljIGFzeW5jIGhhbmRsZUZpcmVkSW50ZW50KFxuXHRcdFx0aW50ZW50OiBPcGVuRmluLkludGVudDxPcGVuRmluLkludGVudE1ldGFkYXRhPE9wZW5GaW4uRkRDMy52Ml8wLkFwcElkZW50aWZpZXI+Pixcblx0XHRcdGNsaWVudElkZW50aXR5OiBPcGVuRmluLkNsaWVudElkZW50aXR5XG5cdFx0KTogUHJvbWlzZTx7IHNvdXJjZTogeyBhcHBJZDogc3RyaW5nIH07IGludGVudDogc3RyaW5nIH0+IHtcblx0XHRcdGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQgcmVxdWVzdCBmb3IgYSByYWlzZWQgaW50ZW50OlwiLCBpbnRlbnQsIFwiRm9yIGNsaWVudCBpZGVudGl0eTpcIiwgY2xpZW50SWRlbnRpdHkpO1xuXHRcdFx0Ly8gVmFsaWRhdGlvbiB3b3VsZCBoYXZlIG9jY3VycmVkIGluIGlzQWN0aW9uQXV0aG9yaXplZCBidXQgeW91IGNvdWxkIGRvIGFkZGl0aW9uYWwgdmFsaWRhdGlvbiBoZXJlIGlmIG5lZWRlZCBiZWZvcmUgaGFuZGxpbmcgdGhlIGludGVudC5cblxuXHRcdFx0Ly8gVGhpcyBpcyB3aGVyZSB5b3UgY291bGQgY2hlY2sgeW91ciBhcHBsaWNhdGlvbiBkaXJlY3RvcnkgdG8gc2VlIGlmIGEgc3BlY2lmaWMgYXBwIHNob3VsZCBoYW5kbGUgdGhlIHJlcXVlc3Qgb3IgaWYgeW91IHNob3VsZFxuXHRcdFx0Ly8gcHJlc2VudCBhbiBpbnRlbnQgcmVzb2x1dGlvbiBwaWNrZXIgdG8gdGhlIHVzZXIgdG8gY2hvb3NlIHdoaWNoIGFwcCB0aGV5IHdhbnQgdG8gaGFuZGxlIHRoZSBpbnRlbnQsIGV0Yy4uLlxuXG5cdFx0XHQvLyBGb3IgYSBmdWxsIGltcGxlbWVudGF0aW9uIG9mIGFuIGludGVyb3AgYnJva2VyIHlvdSBjYW4gY2hlY2sgb3V0IHRoZSB3b3Jrc3BhY2UgcGxhdGZvcm0gc3RhcnRlciBleGFtcGxlIGluIHRoZSBidWlsdC1vbi1vcGVuZmluL3dvcmtzcGFjZS1zdGFydGVyIHJlcG8uXG5cblx0XHRcdC8vIFRoaXMgZXhhbXBsZSBpcyB2ZXJ5IGJhc2ljLlxuXHRcdFx0Ly8gKiBJZiBhbiBpbnRlbnQgcmVxdWVzdCBjb21lcyBpbiB3ZSBjaGVjayB0byBzZWUgaWYgYW55IGV4dGVybmFsIGNsaWVudHMgbWF0Y2ggaXQgKHRoaXMgZXhhbXBsZSB3aWxsIHBpY2sgdGhlIGZpcnN0IG1hdGNoaW5nIGV4dGVybmFsIGNsaWVudCBidXQgaW4gYSByZWFsIHdvcmxkIHlvdSB3b3VsZCBoYXZlIGFuIGludGVudCByZXNvbHZlcikuXG5cdFx0XHQvLyAqIElmIHdlIGRvbid0IGZpbmQgYSBtYXRjaGluZyBleHRlcm5hbCBjbGllbnQgdGhlbiB3ZSBsYXVuY2ggYSB3ZWJwYWdlIHdpdGggdGhlIGludGVudCBuYW1lIGFuZCBmaXJlIHRoZSBpbnRlbnQgdG8gaXQuXG5cblx0XHRcdGNvbnN0IGludGVudE5hbWUgPSBpbnRlbnQubmFtZTtcblx0XHRcdGxldCB0YXJnZXRFeHRlcm5hbENsaWVudDogRXh0ZXJuYWxDbGllbnQgfCB1bmRlZmluZWQ7XG5cblx0XHRcdGlmIChpbnRlbnQubWV0YWRhdGE/LnRhcmdldD8uYXBwSWQgJiYgaW50ZW50Lm1ldGFkYXRhPy50YXJnZXQ/LmFwcElkICE9PSBmaW4ubWUuaWRlbnRpdHkudXVpZCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcblx0XHRcdFx0XHRgSW50ZW50ICR7aW50ZW50TmFtZX0gaGFzIGEgdGFyZ2V0IGFwcCAke2ludGVudC5tZXRhZGF0YS50YXJnZXQuYXBwSWR9LiBBdHRlbXB0aW5nIHRvIGZpbmQgYSBtYXRjaGluZyBleHRlcm5hbCBjbGllbnQgZm9yIGl0LmBcblx0XHRcdFx0KTtcblx0XHRcdFx0dGFyZ2V0RXh0ZXJuYWxDbGllbnQgPSB0aGlzLmV4dGVybmFsQ2xpZW50cy5maW5kKFxuXHRcdFx0XHRcdChleHRlcm5hbENsaWVudCkgPT5cblx0XHRcdFx0XHRcdGV4dGVybmFsQ2xpZW50LnV1aWQgPT09IGludGVudC5tZXRhZGF0YT8udGFyZ2V0Py5hcHBJZCAmJlxuXHRcdFx0XHRcdFx0ZXh0ZXJuYWxDbGllbnQuaW50ZXJvcC5pbnRlbnRzPy5saXN0ZW5zRm9yICYmXG5cdFx0XHRcdFx0XHRpbnRlbnROYW1lIGluIGV4dGVybmFsQ2xpZW50LmludGVyb3AuaW50ZW50cy5saXN0ZW5zRm9yXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGlmICh0YXJnZXRFeHRlcm5hbENsaWVudCkge1xuXHRcdFx0XHRcdGlmICh0YXJnZXRFeHRlcm5hbENsaWVudC5hcHBJZCAmJiB0YXJnZXRFeHRlcm5hbENsaWVudC5hcHBJZCAhPT0gaW50ZW50Lm1ldGFkYXRhPy50YXJnZXQ/LmFwcElkKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcdFx0XHRcdGBUaGUgaW50ZW50ICR7aW50ZW50TmFtZX0gaGFzIGEgdGFyZ2V0IGFwcElkICR7aW50ZW50Lm1ldGFkYXRhLnRhcmdldC5hcHBJZH0gdGhhdCBtYXRjaGVzIHRoZSB1dWlkIG9mIGFuIGV4dGVybmFsIGNsaWVudCBidXQgaXQgZG9lcyBub3QgbWF0Y2ggdGhlIHByZWZlcnJlZCBhcHBJZCBmb3IgdGhhdCBleHRlcm5hbCBjbGllbnQuIFVwZGF0aW5nIGl0IHRvICR7dGFyZ2V0RXh0ZXJuYWxDbGllbnQuYXBwSWR9YFxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGludGVudC5tZXRhZGF0YS50YXJnZXQgPSB7XG5cdFx0XHRcdFx0XHRcdGFwcElkOiB0YXJnZXRFeHRlcm5hbENsaWVudC5hcHBJZCxcblx0XHRcdFx0XHRcdFx0aW5zdGFuY2VJZDogaW50ZW50Lm1ldGFkYXRhLnRhcmdldC5pbnN0YW5jZUlkXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcblx0XHRcdFx0XHRcdGBGb3VuZCBtYXRjaGluZyBleHRlcm5hbCBjbGllbnQgJHt0YXJnZXRFeHRlcm5hbENsaWVudC51dWlkfSBmb3IgaW50ZW50ICR7aW50ZW50TmFtZX0gd2l0aCB0YXJnZXQgYXBwSWQgJHtpbnRlbnQubWV0YWRhdGE/LnRhcmdldD8uYXBwSWR9LiBSb3V0aW5nIGludGVudCB0byBpdC5gXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUYXJnZXRBcHBVbmF2YWlsYWJsZVwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gbm8gYXBwSWQgc3BlY2lmaWVkIGluIHRoZSB0YXJnZXQgb3IgaXQgbWF0Y2hlcyB0aGUgY3VycmVudCBwbGF0Zm9ybSBzbyBnbyB3aXRoIGRlZmF1bHQgbG9naWMuXG5cdFx0XHRcdHRhcmdldEV4dGVybmFsQ2xpZW50ID0gdGhpcy5leHRlcm5hbENsaWVudHMuZmluZChcblx0XHRcdFx0XHQoZXh0ZXJuYWxDbGllbnQpID0+XG5cdFx0XHRcdFx0XHRleHRlcm5hbENsaWVudC5pbnRlcm9wLmludGVudHM/Lmxpc3RlbnNGb3IgJiZcblx0XHRcdFx0XHRcdGludGVudE5hbWUgaW4gZXh0ZXJuYWxDbGllbnQuaW50ZXJvcC5pbnRlbnRzLmxpc3RlbnNGb3Jcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRhcmdldEV4dGVybmFsQ2xpZW50KSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFxuXHRcdFx0XHRcdGBGb3VuZCBtYXRjaGluZyBleHRlcm5hbCBjbGllbnQgJHt0YXJnZXRFeHRlcm5hbENsaWVudC51dWlkfSBmb3IgaW50ZW50ICR7aW50ZW50TmFtZX0uIFJvdXRpbmcgaW50ZW50IHRvIGl0LmBcblx0XHRcdFx0KTtcblx0XHRcdFx0Y29uc3QgdGFyZ2V0Q29ubmVjdGlvbiA9IHRoaXMuZXh0ZXJuYWxDbGllbnRDb25uZWN0aW9ucy5maW5kKFxuXHRcdFx0XHRcdChjb25uZWN0aW9uKSA9PiBjb25uZWN0aW9uLnV1aWQgPT09IHRhcmdldEV4dGVybmFsQ2xpZW50LnV1aWQgJiYgY29ubmVjdGlvbi5jbGllbnRcblx0XHRcdFx0KTtcblx0XHRcdFx0Ly8gVGhpcyBpcyBhIGJhc2ljIGV4YW1wbGUgYXNzdW1pbmcgeW91IG9ubHkgdGFyZ2V0IGV4dGVybmFsIGNsaWVudHMgdGhhdCBhcmUgcnVubmluZy5cblx0XHRcdFx0Ly8gU29tZSBwbGF0Zm9ybXMgaW5jbHVkZSB0aGUgZXh0ZXJuYWwgY2xpZW50IGFzIGFuIGFwcCB0aGF0IGNhbiBiZSBsYXVuY2hlZCBlaXRoZXIgdGhyb3VnaCB0aGUgcGxhdGZvcm0ncyBVSSBvciBmcm9tIHRoZSBpbnRlcm9wIGJyb2tlciBpZiB0aGUgY2xpZW50IGlzIG5vdCBhbHJlYWR5IHJ1bm5pbmcuXG5cdFx0XHRcdGlmICh0YXJnZXRDb25uZWN0aW9uKSB7XG5cdFx0XHRcdFx0YXdhaXQgdGFyZ2V0Q29ubmVjdGlvbi5jbGllbnQuZmlyZUludGVudChpbnRlbnQpO1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRzb3VyY2U6IHsgYXBwSWQ6IHRhcmdldENvbm5lY3Rpb24udXVpZCB9LFxuXHRcdFx0XHRcdFx0aW50ZW50OiBpbnRlbnQubmFtZVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XHRcdGBFeHRlcm5hbCBpbnRlcm9wIGNsaWVudCBjb25uZWN0aW9uIGZvciAke3RhcmdldEV4dGVybmFsQ2xpZW50LnV1aWR9IHdhcyBub3QgZm91bmQuIFVuYWJsZSB0byBmaXJlIGludGVudC5gXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlRhcmdldEFwcFVuYXZhaWxhYmxlXCIpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gRm9yIHRoaXMgZXhhbXBsZSB3ZSBhcmUgZ29pbmcgdG8gbGF1bmNoIGEgdXJsIHRoYXQgbWF0Y2hlcyB0aGUgaW50ZW50IG5hbWUgYW5kIHBhc3MgaXQgdGhlIGNvbnRleHQuXG5cdFx0XHRjb25zdCB1cmwgPVxuXHRcdFx0XHRcImh0dHBzOi8vYnVpbHQtb24tb3BlbmZpbi5naXRodWIuaW8vZGV2LWV4dGVuc2lvbnMvbWFpbi9pbnRlcm9wL2ZkYzMvaW50ZW50LzItMC9mZGMzLWludGVudC12aWV3Lmh0bWxcIjtcblx0XHRcdGNvbnN0IHRhcmdldElkZW50aXR5ID0ge1xuXHRcdFx0XHR1dWlkOiBmaW4ubWUuaWRlbnRpdHkudXVpZCxcblx0XHRcdFx0bmFtZTogYCR7aW50ZW50TmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpfS0ke3JhbmRvbVVVSUQoKX1gXG5cdFx0XHR9O1xuXHRcdFx0Ly8gdGhpcyBjb3VsZCBiZSBhIHZpZXcgaW4geW91ciBwbGF0Zm9ybSBvciBhIGNsYXNzaWMgd2luZG93IGFzIHNob3duIGhlcmUuIFVzdWFsbHkgdGhlIGxhdW5jaGluZyBsb2dpYyBpcyBub3QgaW4gdGhlIGJyb2tlciBidXQgYWJzdHJhY3RlZCBhd2F5IHNvIHRoYXQgaXQgY2FuIGJlIHJldXNlZCBpbiBkaWZmZXJlbnQgcGxhY2VzIGluIHlvdXIgcGxhdGZvcm0gYnV0IGZvciBzaW1wbGljaXR5IHdlIGFyZSBsYXVuY2hpbmcgaXQgaGVyZS5cblx0XHRcdGF3YWl0IGZpbi5XaW5kb3cuY3JlYXRlKHtcblx0XHRcdFx0bmFtZTogdGFyZ2V0SWRlbnRpdHkubmFtZSxcblx0XHRcdFx0dXJsLFxuXHRcdFx0XHRmZGMzSW50ZXJvcEFwaTogXCIyLjBcIlxuXHRcdFx0fSk7XG5cdFx0XHRhd2FpdCBzdXBlci5zZXRJbnRlbnRUYXJnZXQoaW50ZW50LCB0YXJnZXRJZGVudGl0eSk7XG5cdFx0XHQvLyBJZiB5b3UgaGFkIGFuIGFwcCBkaXJlY3RvcnkgZm9yIGNvbnRlbnQgbGF1bmNoZWQgaW50ZXJuYWxseSB0aGUgYXBwSWQgd291bGQgcmVmbGVjdCB0aGUgc2VsZWN0aW9uIG1hZGUgKGUuZy4gdGhlIGZkYzMgaW50ZW50IHRvb2wgaW4gdGhpcyBleGFtcGxlKSBhbmQgeW91IHdvdWxkIGJlIGFibGUgdG9cblx0XHRcdC8vIGRldGVybWluZSB0aGUgaW5zdGFuY2UgaWQuIFRoZSBidWlsdC1vbi1vcGVuZmluL3dvcmtzcGFjZS1zdGFydGVyL2hvdy10by93b3Jrc3BhY2UtcGxhdGZvcm0tc3RhcnRlciBleGFtcGxlIGhhcyBhIG1vcmUgcm9idXN0IGV4YW1wbGUgb2YgYW4gaW50ZXJvcCBicm9rZXIgaW1wbGVtZW50YXRpb24uXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRzb3VyY2U6IHsgYXBwSWQ6IGZpbi5tZS5pZGVudGl0eS51dWlkIH0sXG5cdFx0XHRcdGludGVudDogaW50ZW50Lm5hbWVcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogSXMgdGhlIGNvbm5lY3Rpb24gYXV0aG9yaXplZC5cblx0XHQgKiBAcGFyYW0gaWQgVGhlIGlkIG9mIHRoZSBjbGllbnQgaWRlbnRpdHkgdG8gY2hlY2suXG5cdFx0ICogQHBhcmFtIHBheWxvYWQgVGhlIHBheWxvYWQgdG8gc2VuZCB3aXRoIHRoZSBhdXRob3JpemF0aW9uIGNoZWNrLlxuXHRcdCAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGNvbm5lY3Rpb24gaXMgYXV0aG9yaXplZC5cblx0XHQgKi9cblx0XHRwdWJsaWMgYXN5bmMgaXNDb25uZWN0aW9uQXV0aG9yaXplZChpZDogT3BlbkZpbi5DbGllbnRJZGVudGl0eSwgcGF5bG9hZD86IHVua25vd24pOiBQcm9taXNlPGJvb2xlYW4+IHtcblx0XHRcdGNvbnNvbGUubG9nKFwiaXNDb25uZWN0aW9uQXV0aG9yaXplZCBjYWxsZWQgd2l0aCBpZFwiLCBpZCwgXCJwYXlsb2FkXCIsIHBheWxvYWQpO1xuXHRcdFx0aWYgKGlkLnV1aWQgPT09IGZpbi5tZS51dWlkKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiQ29ubmVjdGlvbiBhdXRob3JpemVkIGZvciBpbnRlcm5hbCBjb250ZW50XCIsIGlkLnV1aWQpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGFsbG93ZWRDb25uZWN0aW9uID0gdGhpcy5leHRlcm5hbENsaWVudHMuZmluZChcblx0XHRcdFx0KGV4dGVybmFsQ2xpZW50KSA9PiBleHRlcm5hbENsaWVudC51dWlkID09PSBpZC51dWlkXG5cdFx0XHQpO1xuXHRcdFx0aWYgKCFhbGxvd2VkQ29ubmVjdGlvbikge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkNvbm5lY3Rpb24gbm90IGF1dGhvcml6ZWQgZm9yIGV4dGVybmFsIGNsaWVudFwiLCBpZC51dWlkKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gVGhlIHV1aWQgaXMgYWxsb3dlZCBidXQgZm9yIGV4dGVybmFsIGNsaWVudHMgeW91IHdhbnQgdG8gdmFsaWRhdGUgbW9yZSB0aGFuIHRoYXQuXG5cdFx0XHQvLyBUaGlzIGlzIGEgdmVyeSBiYXNpYyBleGFtcGxlIHdoZXJlIHdlIGFyZSB1c2luZyB0aGUgaW50ZXJvcEtleSBhcyBhIHNoYXJlZCBzZWNyZXQgYmV0d2VlbiB0aGUgcGxhdGZvcm1zIHRvIHZhbGlkYXRlIHRoZSBjb25uZWN0aW9uXG5cdFx0XHQvLyBidXQgaW4gYSByZWFsIHdvcmxkIHNjZW5hcmlvIHlvdSB3b3VsZCBsaWtlbHkgd2FudCB0byBoYXZlIGEgbW9yZSByb2J1c3QgdmFsaWRhdGlvbiBwcm9jZXNzIHRoYXQgY291bGQgaW5jbHVkZSBjaGVja2luZyBhIHRva2VuLFxuXHRcdFx0Ly8gbWFraW5nIGEgcmVxdWVzdCB0byBhIHNlcnZpY2Ugd2l0aCB0aGUgcHJvdmlkZWQgY3VzdG9tIGRhdGEsIGV0Yy4uLlxuXHRcdFx0Y29uc3QgaXNWYWxpZCA9IGF3YWl0IHZhbGlkYXRlQnJva2VyQ29ubmVjdGlvbihhbGxvd2VkQ29ubmVjdGlvbiwgcGF5bG9hZCA/PyB7fSk7XG5cdFx0XHRpZiAoaXNWYWxpZCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkNvbm5lY3Rpb24gYXV0aG9yaXplZCBmb3IgZXh0ZXJuYWwgY2xpZW50XCIsIGlkLnV1aWQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJDb25uZWN0aW9uIG5vdCBhdXRob3JpemVkIGZvciBleHRlcm5hbCBjbGllbnQuIEl0IGZhaWxlZCB2YWxpZGF0aW9uLlwiLCBpZC51dWlkKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBpc1ZhbGlkO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIENhbGxlZCBiZWZvcmUgZXZlcnkgYWN0aW9uIHRvIGNoZWNrIGlmIHRoaXMgZW50aXR5IHNob3VsZCBiZSBhbGxvd2VkIHRvIHRha2UgdGhlIGFjdGlvbi5cblx0XHQgKiBSZXR1cm4gZmFsc2UgdG8gcHJldmVudCB0aGUgYWN0aW9uLlxuXHRcdCAqIEBwYXJhbSBhY3Rpb24gdGhlIHN0cmluZyBhY3Rpb24gdG8gYXV0aG9yaXplIGluIGNhbWVsIGNhc2Vcblx0XHQgKiBAcGFyYW0gcGF5bG9hZCB0aGUgZGF0YSBiZWluZyBzZW50IGZvciB0aGlzIGFjdGlvblxuXHRcdCAqIEBwYXJhbSBpZGVudGl0eSB0aGUgY29ubmVjdGlvbiBhdHRlbXB0aW5nIHRvIGRpc3BhdGNoIHRoaXMgYWN0aW9uXG5cdFx0ICogQHJldHVybnMgYm9vbGVhbiBvciBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byBib29sZWFuIGluZGljYXRpbmcgaWYgdGhlIGFjdGlvbiBpcyBhdXRob3JpemVkLlxuXHRcdCAqL1xuXHRcdHB1YmxpYyBhc3luYyBpc0FjdGlvbkF1dGhvcml6ZWQoXG5cdFx0XHRhY3Rpb246IHN0cmluZyxcblx0XHRcdHBheWxvYWQ6IHVua25vd24sXG5cdFx0XHRpZGVudGl0eTogT3BlbkZpbi5DbGllbnRJZGVudGl0eVxuXHRcdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuXHRcdFx0Y29uc29sZS5sb2coXCJpc0FjdGlvbkF1dGhvcml6ZWQgY2FsbGVkIHdpdGggYWN0aW9uXCIsIGFjdGlvbiwgXCJwYXlsb2FkXCIsIHBheWxvYWQsIFwiaWRlbnRpdHlcIiwgaWRlbnRpdHkpO1xuXHRcdFx0aWYgKGlkZW50aXR5LnV1aWQgPT09IGZpbi5tZS51dWlkKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiQWN0aW9uIGF1dGhvcml6ZWQgZm9yIGludGVybmFsIGNvbnRlbnRcIiwgaWRlbnRpdHkudXVpZCk7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgY29ubmVjdGlvblJ1bGVzID0gdGhpcy5leHRlcm5hbENsaWVudHMuZmluZChcblx0XHRcdFx0KGV4dGVybmFsQ2xpZW50KSA9PiBleHRlcm5hbENsaWVudC51dWlkID09PSBpZGVudGl0eS51dWlkXG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAoIWNvbm5lY3Rpb25SdWxlcykge1xuXHRcdFx0XHQvLyBhbGwgY29ubmVjdGlvbnMgc2hvdWxkIGhhdmUgYmVlbiBibG9ja2VkIGluIGlzQ29ubmVjdGlvbkF1dGhvcml6ZWQgYnV0IHdlIHdpbGwgZG8gYSBmaW5hbCBjaGVjayBoZXJlIHRvIGJlIHNhZmUgYW5kXG5cdFx0XHRcdC8vIHdlIG5lZWQgdG8ga25vdyB3aGF0IGFuIGV4dGVybmFsIGNsaWVudCBpcyBhbGxvd2VkIHRvIGRvLlxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkFjdGlvbiBub3QgYXV0aG9yaXplZCBmb3IgZXh0ZXJuYWwgY2xpZW50XCIsIGlkZW50aXR5LnV1aWQpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGFjdGlvbiA9PT0gXCJqb2luQ29udGV4dEdyb3VwXCIgJiZcblx0XHRcdFx0cGF5bG9hZCAmJlxuXHRcdFx0XHR0eXBlb2YgcGF5bG9hZCA9PT0gXCJvYmplY3RcIiAmJlxuXHRcdFx0XHRcImNvbnRleHRHcm91cElkXCIgaW4gcGF5bG9hZCAmJlxuXHRcdFx0XHRjb25uZWN0aW9uUnVsZXMuaW50ZXJvcC51c2VyQ2hhbm5lbHM/LmFsbG93ZWRDaGFubmVsc1xuXHRcdFx0KSB7XG5cdFx0XHRcdC8vIGlmIHdlIGhhdmUgZGVmaW5lZCBhbGxvd2VkIGNoYW5uZWxzIGZvciB0aGlzIGV4dGVybmFsIGNsaWVudCB0aGVuIHdlIHdpbGwgY2hlY2sgaWYgdGhlIGNvbnRleHQgZ3JvdXAgdGhleSBhcmUgdHJ5aW5nIHRvIGpvaW4gaXMgaW4gdGhlIGFsbG93ZWQgY2hhbm5lbHMgbGlzdC4gSWYgaXQgaXMgbm90IHdlIHdpbGwgcmVqZWN0IHRoZSBhY3Rpb24uXG5cdFx0XHRcdGNvbnN0IGFsbG93ZWRDaGFubmVscyA9IGNvbm5lY3Rpb25SdWxlcy5pbnRlcm9wLnVzZXJDaGFubmVscy5hbGxvd2VkQ2hhbm5lbHM7XG5cdFx0XHRcdGNvbnN0IGlzQWxsb3dlZENoYW5uZWwgPSBhbGxvd2VkQ2hhbm5lbHMuaW5jbHVkZXMocGF5bG9hZC5jb250ZXh0R3JvdXBJZCBhcyBzdHJpbmcpO1xuXHRcdFx0XHRpZiAoIWlzQWxsb3dlZENoYW5uZWwpIHtcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcdFx0XHRgQ29ubmVjdGlvbiByZXF1ZXN0IGZyb20gJHtKU09OLnN0cmluZ2lmeShpZGVudGl0eSl9IGF0dGVtcHRlZCB0byBqb2luIGNvbnRleHQgZ3JvdXAgJHtwYXlsb2FkLmNvbnRleHRHcm91cElkfSB3aGljaCBpcyBub3QgaW4gdGhlIGFsbG93ZWQgY2hhbm5lbHMgbGlzdCBhbmQgd2FzIHJlamVjdGVkLmBcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0YWN0aW9uID09PSBcImludGVudEhhbmRsZXJSZWdpc3RlcmVkXCIgJiZcblx0XHRcdFx0cGF5bG9hZCAmJlxuXHRcdFx0XHR0eXBlb2YgcGF5bG9hZCA9PT0gXCJvYmplY3RcIiAmJlxuXHRcdFx0XHRcImhhbmRsZXJJZFwiIGluIHBheWxvYWQgJiZcblx0XHRcdFx0cGF5bG9hZC5oYW5kbGVySWQgPT09IFwiaW50ZW50LWhhbmRsZXItVmlld0FuYWx5c2lzXCIgJiZcblx0XHRcdFx0Y29ubmVjdGlvblJ1bGVzLmludGVyb3A/LmludGVudHM/Lmxpc3RlbnNGb3Jcblx0XHRcdCkge1xuXHRcdFx0XHRjb25zdCBhbGxvd2VkSW50ZW50TGlzdGVuZXJzID0gT2JqZWN0LmtleXMoY29ubmVjdGlvblJ1bGVzLmludGVyb3AuaW50ZW50cy5saXN0ZW5zRm9yKTtcblx0XHRcdFx0Y29uc3QgcmVxdWVzdGVkSW50ZW50ID0gcGF5bG9hZC5oYW5kbGVySWQucmVwbGFjZShcImludGVudC1oYW5kbGVyLVwiLCBcIlwiKTtcblx0XHRcdFx0aWYgKCFhbGxvd2VkSW50ZW50TGlzdGVuZXJzLmluY2x1ZGVzKHJlcXVlc3RlZEludGVudCkpIHtcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcdFx0XHRgQ29ubmVjdGlvbiByZXF1ZXN0IGZyb20gJHtKU09OLnN0cmluZ2lmeShpZGVudGl0eSl9IGF0dGVtcHRlZCB0byByZWdpc3RlciBhbiBpbnRlbnQgaGFuZGxlciBmb3IgJHtyZXF1ZXN0ZWRJbnRlbnR9IHdoaWNoIGlzIG5vdCBpbiB0aGUgYWxsb3dlZCBpbnRlbnRzIGxpc3QgYW5kIHdhcyByZWplY3RlZC5gXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGFjdGlvbiA9PT0gXCJmaXJlSW50ZW50XCIgJiZcblx0XHRcdFx0cGF5bG9hZCAmJlxuXHRcdFx0XHR0eXBlb2YgcGF5bG9hZCA9PT0gXCJvYmplY3RcIiAmJlxuXHRcdFx0XHRcIm5hbWVcIiBpbiBwYXlsb2FkICYmXG5cdFx0XHRcdGNvbm5lY3Rpb25SdWxlcy5pbnRlcm9wPy5pbnRlbnRzPy5yYWlzZXNcblx0XHRcdCkge1xuXHRcdFx0XHRjb25zdCBhbGxvd2VkSW50ZW50c1RvUmFpc2UgPSBPYmplY3Qua2V5cyhjb25uZWN0aW9uUnVsZXMuaW50ZXJvcC5pbnRlbnRzLnJhaXNlcyk7XG5cdFx0XHRcdGNvbnN0IHJlcXVlc3RlZEludGVudCA9IHBheWxvYWQubmFtZSBhcyBzdHJpbmc7XG5cdFx0XHRcdGlmICghYWxsb3dlZEludGVudHNUb1JhaXNlLmluY2x1ZGVzKHJlcXVlc3RlZEludGVudCkpIHtcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcdFx0XHRgQ29ubmVjdGlvbiByZXF1ZXN0IGZyb20gJHtKU09OLnN0cmluZ2lmeShpZGVudGl0eSl9IGF0dGVtcHRlZCB0byBmaXJlIGFuIGludGVudCAke3JlcXVlc3RlZEludGVudH0gd2hpY2ggaXMgbm90IGluIHRoZSBhbGxvd2VkIGludGVudHMgbGlzdCBhbmQgd2FzIHJlamVjdGVkLmBcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEluaXRpYWxpemUgdGhlIGNvbm5lY3Rpb25zLlxuXHRcdCAqIDEuIEdldHMgdGhlIGluc3RhbmNlIG9mIHRoZSBzcGVjaWZpZWQgZXh0ZXJuYWwgcGxhdGZvcm0uXG5cdFx0ICogMi4gRW5zdXJlIHRoZSBleHRlcm5hbCBwbGF0Zm9ybSBhcHBsaWNhdGlvbiBpcyBydW5uaW5nLlxuXHRcdCAqIDMuIEVuc3VyZSB0aGF0IHRoZSBwbGF0Zm9ybSBhcGkgaXMgZmluaXNoZWQgaW5pdGlhbGl6aW5nLlxuXHRcdCAqIDQuIFJlc2V0IHRoZSBtYXAgdHJhY2tpbmcgdGhlIGV4dGVybmFsQ2xpZW50IGNvbm5lY3Rpb25zLlxuXHRcdCAqL1xuXHRcdHB1YmxpYyBhc3luYyBpbml0aWFsaXplQ29ubmVjdGlvbnMoKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0XHQvLyBUaGlzIGlzIGp1c3QgYSBiYXNpYyBleGFtcGxlIHdoZXJlIHlvdSBhcmUgY2FsbGluZyBhIHNlcnZpY2UgdG8gZ2V0IGEgbGlzdCBvZiBleHRlcm5hbCBjbGllbnRzIGZvciB0aGUgY3VycmVudCB1c2VyLiBJZiB5b3UgcHV0IHRoZSB1cmwgaW4geW91ciBtYW5pZmVzdCB0aGVuXG5cdFx0XHQvLyBoYXZlIHlvdXIgcGxhdGZvcm0gdmFsaWRhdGUgdGhhdCB0aGUgY3VycmVudCBtYW5pZmVzdCBpcyB0aGUgZXhwZWN0ZWQgb25lLlxuXHRcdFx0Y29uc3QgZXh0ZXJuYWxDbGllbnRFbmRwb2ludFVybCA9IGxvY2F0aW9uLmhyZWYucmVwbGFjZShcblx0XHRcdFx0XCJwcm92aWRlci5odG1sXCIsXG5cdFx0XHRcdGAke2Zpbi5tZS5pZGVudGl0eS51dWlkLnRvTG9jYWxlTG93ZXJDYXNlKCkucmVwbGFjZUFsbChcIiBcIiwgXCItXCIpfS1leHRlcm5hbC1jbGllbnRzLmpzb25gXG5cdFx0XHQpO1xuXHRcdFx0bGV0IGZldGNoZWRFeHRlcm5hbENsaWVudHM6IEV4dGVybmFsQ2xpZW50W10gPSBbXTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZXh0ZXJuYWxDbGllbnRFbmRwb2ludFVybCk7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuXHRcdFx0XHRcdGZldGNoZWRFeHRlcm5hbENsaWVudHMgPSAoYXdhaXQgcmVzcG9uc2UuanNvbigpKSBhcyBFeHRlcm5hbENsaWVudFtdO1xuXHRcdFx0XHRcdHRoaXMuZXh0ZXJuYWxDbGllbnRzID0gZmV0Y2hlZEV4dGVybmFsQ2xpZW50cztcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhgRmV0Y2hlZCBleHRlcm5hbCBjbGllbnRzIGZyb20gJHtleHRlcm5hbENsaWVudEVuZHBvaW50VXJsfTpgLCBmZXRjaGVkRXh0ZXJuYWxDbGllbnRzKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcdFx0XHRgRmFpbGVkIHRvIGZldGNoIGV4dGVybmFsIGNsaWVudHMgZnJvbSAke2V4dGVybmFsQ2xpZW50RW5kcG9pbnRVcmx9LiBVc2luZyBkZWZhdWx0IGV4dGVybmFsIGNsaWVudHMuIFJlc3BvbnNlIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXG5cdFx0XHRcdFx0YEVycm9yIGZldGNoaW5nIGV4dGVybmFsIGNsaWVudHMgZnJvbSAke2V4dGVybmFsQ2xpZW50RW5kcG9pbnRVcmx9LiBVc2luZyBkZWZhdWx0IGV4dGVybmFsIGNsaWVudHMuIEVycm9yOmAsXG5cdFx0XHRcdFx0ZXJyb3Jcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdGZvciAoY29uc3QgZXh0ZXJuYWxDbGllbnQgb2YgZmV0Y2hlZEV4dGVybmFsQ2xpZW50cykge1xuXHRcdFx0XHQvLyBubyBuZWVkIHRvIGF3YWl0IHRoZXNlIGNvbm5lY3Rpb25zIGFzIHRoZXkgbWF5IG5vdCBiZSBydW5uaW5nIHlldCBhbmQgd2lsbCByZXNvbHZlIHdoZW4gdGhleSBkbyBiZWNvbWUgYXZhaWxhYmxlLlxuXHRcdFx0XHR0aGlzLnZhbGlkYXRlQW5kQ29ubmVjdChleHRlcm5hbENsaWVudCkuY2F0Y2goKGVycm9yKSA9PlxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIGNvbm5lY3RpbmcgdG8gZXh0ZXJuYWwgYnJva2VyICR7ZXh0ZXJuYWxDbGllbnQudXVpZH06YCwgZXJyb3IpXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogU2V0cyB1cCB0aGUgY29ubmVjdGlvbiB0byBhbiBleHRlcm5hbCBicm9rZXIgYnkgdmFsaWRhdGluZyB0aGUgY29ubmVjdGlvbiBhbmQgdGhlbiBpbml0aWFsaXppbmcgdGhlIGJyb2tlci5cblx0XHQgKiBAcGFyYW0gZXh0ZXJuYWxDbGllbnQgdGhlIGV4dGVybmFsIGNsaWVudCBpbmZvcm1hdGlvbiB1c2VkIHRvIGNvbm5lY3QgdG8gdGhlIGV4dGVybmFsIHBsYXRmb3JtIGFuZCBzZXR1cCB0aGUgY29udGV4dCBzaGFyaW5nIGdyb3Vwcy5cblx0XHQgKiBAcmV0dXJucyB2b2lkXG5cdFx0ICovXG5cdFx0cHJpdmF0ZSBhc3luYyB2YWxpZGF0ZUFuZENvbm5lY3QoZXh0ZXJuYWxDbGllbnQ6IEV4dGVybmFsQ2xpZW50KTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0XHRjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgY29ubmVjdFRvRXh0ZXJuYWxDbGllbnQoZXh0ZXJuYWxDbGllbnQpO1xuXHRcdFx0dGhpcy5leHRlcm5hbENsaWVudENvbm5lY3Rpb25zLnB1c2goY29ubmVjdGlvbik7XG5cdFx0XHRhd2FpdCBjb25uZWN0aW9uLmNsaWVudC5vbkRpc2Nvbm5lY3Rpb24oKGV2ZW50KSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUud2FybihgQ29ubmVjdGlvbiB0byBleHRlcm5hbCBicm9rZXIgJHtldmVudC5icm9rZXJOYW1lfSB3YXMgbG9zdC5gKTtcblx0XHRcdFx0Ly8gcmVtb3ZlIHRoZSBjb25uZWN0aW9uIGZyb20gdGhlIGV4dGVybmFsQ29ubmVjdGlvbnMgYXJyYXlcblx0XHRcdFx0Ly8gWW91IGNhbiBkZWNpZGUgaWYgeW91IHdhbnQgdG8gYXV0b21hdGljYWxseSBhdHRlbXB0IHRvIHJlY29ubmVjdCBoZXJlIG9yIGlmIHlvdSB3YW50IHRvIHJlcXVpcmUgYSBtYW51YWwgcmVmcmVzaCB0byByZWNvbm5lY3QuXG5cdFx0XHRcdHRoaXMuZXh0ZXJuYWxDbGllbnRDb25uZWN0aW9ucyA9IHRoaXMuZXh0ZXJuYWxDbGllbnRDb25uZWN0aW9ucy5maWx0ZXIoXG5cdFx0XHRcdFx0KGMpID0+IGMuY29ubmVjdGlvbklkICE9PSBjb25uZWN0aW9uLmNvbm5lY3Rpb25JZFxuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBuZXcgT3ZlcnJpZGUoKTtcbn1cblxuZmluLlBsYXRmb3JtLmluaXQoeyBpbnRlcm9wT3ZlcnJpZGUgfSkuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=