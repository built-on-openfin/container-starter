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
            this._initializationComplete = this.initializeConnections().catch((error) => {
                console.error(error);
            });
        }
        /**
         * Handle the information for and intent.
         * @param intentOptions The intent options.
         * @param clientIdentity The client.
         * @returns The intents mapped to app metadata.
         */
        async handleInfoForIntent(intentOptions, clientIdentity) {
            console.log("Received request for info for intent:", intentOptions, "From client identity:", clientIdentity);
            // Wait for initialization to complete before checking external clients
            await this._initializationComplete;
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
            // Wait for initialization to complete before checking external clients
            await this._initializationComplete;
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
            // Wait for initialization to complete before checking external clients
            await this._initializationComplete;
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
            // External clients can only reach this point after passing isConnectionAuthorized, which ensures initialization is complete
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUVELEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NldHVwLWNyb3NzLXBsYXRmb3JtLWludGVyb3Atd2l0aC1pbnRlbnRzLy4vY2xpZW50L3NyYy9jb25uZWN0aW9uLnRzIiwid2VicGFjazovL3NldHVwLWNyb3NzLXBsYXRmb3JtLWludGVyb3Atd2l0aC1pbnRlbnRzLy4vY2xpZW50L3NyYy91dGlsLnRzIiwid2VicGFjazovL3NldHVwLWNyb3NzLXBsYXRmb3JtLWludGVyb3Atd2l0aC1pbnRlbnRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NldHVwLWNyb3NzLXBsYXRmb3JtLWludGVyb3Atd2l0aC1pbnRlbnRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zZXR1cC1jcm9zcy1wbGF0Zm9ybS1pbnRlcm9wLXdpdGgtaW50ZW50cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NldHVwLWNyb3NzLXBsYXRmb3JtLWludGVyb3Atd2l0aC1pbnRlbnRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2V0dXAtY3Jvc3MtcGxhdGZvcm0taW50ZXJvcC13aXRoLWludGVudHMvLi9jbGllbnQvc3JjL3Byb3ZpZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgT3BlbkZpbiB9IGZyb20gXCJAb3BlbmZpbi9jb3JlXCI7XG5pbXBvcnQgdHlwZSB7IEV4dGVybmFsQ2xpZW50LCBFeHRlcm5hbENsaWVudENvbm5lY3Rpb24gfSBmcm9tIFwiLi9zaGFwZXNcIjtcbmltcG9ydCB7IHJhbmRvbVVVSUQgfSBmcm9tIFwiLi91dGlsXCI7XG5cbi8qKlxuICogUmVxdWVzdHMgYSBjb25uZWN0aW9uIHRvIGFuIGV4dGVybmFsIGNsaWVudC5cbiAqIEBwYXJhbSBleHRlcm5hbENsaWVudCAtIHRoZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZXh0ZXJuYWwgY2xpZW50IHRvIGNvbm5lY3QgdG8sIGluY2x1ZGluZyB1dWlkLCBtYW5pZmVzdFVybCwgYW5kIGFueSBjdXN0b20gZGF0YSBuZWVkZWQgZm9yIHZhbGlkYXRpb24uXG4gKiBAcmV0dXJucyBpbnRlcm9wIGNsaWVudCBpbnN0YW5jZSBjb25uZWN0ZWQgdG8gdGhlIGV4dGVybmFsIGNsaWVudC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0V4dGVybmFsQ2xpZW50KFxuXHRleHRlcm5hbENsaWVudDogRXh0ZXJuYWxDbGllbnRcbik6IFByb21pc2U8RXh0ZXJuYWxDbGllbnRDb25uZWN0aW9uPiB7XG5cdHJldHVybiBuZXcgUHJvbWlzZTxFeHRlcm5hbENsaWVudENvbm5lY3Rpb24+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRjb25zdCBwbGF0Zm9ybTogT3BlbkZpbi5QbGF0Zm9ybSA9IGZpbi5QbGF0Zm9ybS53cmFwU3luYyh7IHV1aWQ6IGV4dGVybmFsQ2xpZW50LnV1aWQgfSk7XG5cdFx0Y29uc3QgY29ubmVjdGlvbklkID0gYCR7ZXh0ZXJuYWxDbGllbnQudXVpZH0tJHtyYW5kb21VVUlEKCl9YDtcblx0XHRwbGF0Zm9ybS5BcHBsaWNhdGlvbi5pc1J1bm5pbmcoKVxuXHRcdFx0LnRoZW4oYXN5bmMgKGlzUnVubmluZykgPT4ge1xuXHRcdFx0XHRsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGlmIChpc1J1bm5pbmcpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGJyb2tlckNvbm5lY3Rpb24gPSBhd2FpdCB2YWxpZGF0ZUFuZFJldHVybkJyb2tlckNvbm5lY3Rpb24oZXh0ZXJuYWxDbGllbnQsIHBsYXRmb3JtKTtcblx0XHRcdFx0XHRcdHJlc29sdmUoeyBjbGllbnQ6IGJyb2tlckNvbm5lY3Rpb24sIHV1aWQ6IGV4dGVybmFsQ2xpZW50LnV1aWQsIGNvbm5lY3Rpb25JZCB9KTtcblx0XHRcdFx0XHRcdHN1Y2Nlc3MgPSB0cnVlO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRhd2FpdCBwbGF0Zm9ybS5vbihcInBsYXRmb3JtLWFwaS1yZWFkeVwiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGJyb2tlckNvbm5lY3Rpb24gPSBhd2FpdCB2YWxpZGF0ZUFuZFJldHVybkJyb2tlckNvbm5lY3Rpb24oZXh0ZXJuYWxDbGllbnQsIHBsYXRmb3JtKTtcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZSh7IGNsaWVudDogYnJva2VyQ29ubmVjdGlvbiwgdXVpZDogZXh0ZXJuYWxDbGllbnQudXVpZCwgY29ubmVjdGlvbklkIH0pO1xuXHRcdFx0XHRcdFx0XHRzdWNjZXNzID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBzdWNjZXNzO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaCgoKSA9PiByZWplY3QobmV3IEVycm9yKGBGYWlsZWQgdG8gY29ubmVjdCB0byBwbGF0Zm9ybSB3aXRoIHV1aWQgJHtleHRlcm5hbENsaWVudC51dWlkfWApKSk7XG5cdH0pO1xufVxuXG4vKipcbiAqIFZhbGlkYXRlcyB0aGUgY29ubmVjdGlvbiB0byBhbiBleHRlcm5hbCBjbGllbnQuXG4gKiBAcGFyYW0gZXh0ZXJuYWxDbGllbnQgLSB0aGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGV4dGVybmFsIGNsaWVudCB0byBjb25uZWN0IHRvLCBpbmNsdWRpbmcgdXVpZCwgbWFuaWZlc3RVcmwsIGFuZCBhbnkgY3VzdG9tIGRhdGEgbmVlZGVkIGZvciB2YWxpZGF0aW9uLlxuICogQHBhcmFtIGV4dGVybmFsQ2xpZW50LnV1aWQgLSB0aGUgdXVpZCBvZiB0aGUgZXh0ZXJuYWwgY2xpZW50J3MgcGxhdGZvcm0uXG4gKiBAcGFyYW0gZXh0ZXJuYWxDbGllbnQubWFuaWZlc3RVcmwgLSB0aGUgbWFuaWZlc3QgdXJsIG9mIHRoZSBleHRlcm5hbCBjbGllbnQncyBwbGF0Zm9ybSwgdXNlZCBmb3IgdmFsaWRhdGlvbiB0byBlbnN1cmUgd2UgYXJlIGNvbm5lY3RpbmcgdG8gdGhlIGV4cGVjdGVkIHBsYXRmb3JtLlxuICogQHBhcmFtIGV4dGVybmFsQ2xpZW50LmludGVyb3BLZXkgLSBhIHNwZWNpZmljIGtleSB1c2VkIGZvciBpbnRlcm9wIHZhbGlkYXRpb24uXG4gKiBAcGFyYW0gcGF5bG9hZCAtIHRoZSBjdXN0b20gZGF0YSBwYXlsb2FkIHRvIHZhbGlkYXRlIGFnYWluc3QgdGhlIGV4dGVybmFsIGNsaWVudCdzIGludGVyb3Aga2V5LlxuICogQHBhcmFtIHBheWxvYWQuSEVSRV9BUEkgLSBhIHNwZWNpZmljIGtleSB3aXRoaW4gdGhlIGN1c3RvbSBkYXRhIHRvIHZhbGlkYXRlLlxuICogQHJldHVybnMgQSBib29sZWFuIGluZGljYXRpbmcgaWYgdGhlIGNvbm5lY3Rpb24gaXMgdmFsaWQuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2YWxpZGF0ZUJyb2tlckNvbm5lY3Rpb24oXG5cdGV4dGVybmFsQ2xpZW50OiBFeHRlcm5hbENsaWVudCxcblx0cGF5bG9hZDogeyBIRVJFX0FQST86IHN0cmluZyB9XG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcblx0Y29uc3QgcGxhdGZvcm06IE9wZW5GaW4uUGxhdGZvcm0gPSBmaW4uUGxhdGZvcm0ud3JhcFN5bmMoeyB1dWlkOiBleHRlcm5hbENsaWVudC51dWlkIH0pO1xuXHRjb25zdCBpc1ZhbGlkTWFuaWZlc3QgPSBhd2FpdCB2YWxpZGF0ZU1hbmlmZXN0VXJsKGV4dGVybmFsQ2xpZW50LCBwbGF0Zm9ybSk7XG5cdGlmICghaXNWYWxpZE1hbmlmZXN0KSB7XG5cdFx0Y29uc29sZS5lcnJvcihcblx0XHRcdGBWYWxpZGF0aW9uIGZhaWxlZCBmb3IgcGxhdGZvcm0gd2l0aCB1dWlkICR7ZXh0ZXJuYWxDbGllbnQudXVpZH0gZHVlIHRvIG1hbmlmZXN0IHVybCBtaXNtYXRjaC5gXG5cdFx0KTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0Y29uc3QgaXNWYWxpZFBheWxvYWQgPSBhd2FpdCB2YWxpZGF0ZVBheWxvYWQoZXh0ZXJuYWxDbGllbnQsIHBheWxvYWQpO1xuXHRpZiAoIWlzVmFsaWRQYXlsb2FkKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcblx0XHRcdGBWYWxpZGF0aW9uIGZhaWxlZCBmb3IgcGxhdGZvcm0gd2l0aCB1dWlkICR7ZXh0ZXJuYWxDbGllbnQudXVpZH0gZHVlIHRvIGludmFsaWQgY3VzdG9tIGRhdGEuIFJlY2VpdmVkIEhFUkVfQVBJOiAke3BheWxvYWQuSEVSRV9BUEl9YFxuXHRcdCk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIFNldHVwIHRoZSBjb25uZWN0aW9uIHRvIGFuIGV4dGVybmFsIHBsYXRmb3JtLlxuICogQHBhcmFtIGV4dGVybmFsQ2xpZW50IHRoZSBleHRlcm5hbCBjbGllbnQgaW5mb3JtYXRpb24gdXNlZCB0byBjb25uZWN0IHRvIHRoZSBleHRlcm5hbCBwbGF0Zm9ybSBhbmQgc2V0dXAgdGhlIGNvbnRleHQgc2hhcmluZyBncm91cHMuXG4gKiBAcGFyYW0gcGxhdGZvcm0gdGhlIGluc3RhbmNlIG9mIHRoZSBleHRlcm5hbCBwbGF0Zm9ybSB1c2VkIHRvIHNldHVwIHRoZSBjb25uZWN0aW9uIGFuZCBjb250ZXh0IHNoYXJpbmcgZ3JvdXBzLlxuICogQHJldHVybnMgQSBjb25uZWN0ZWQgSW50ZXJvcENsaWVudCBpbnN0YW5jZSBpZiB0aGUgdmFsaWRhdGlvbiBpcyBzdWNjZXNzZnVsLCBvdGhlcndpc2UgYW4gZXJyb3IgaXMgdGhyb3duLlxuICovXG5hc3luYyBmdW5jdGlvbiB2YWxpZGF0ZUFuZFJldHVybkJyb2tlckNvbm5lY3Rpb24oXG5cdGV4dGVybmFsQ2xpZW50OiBFeHRlcm5hbENsaWVudCxcblx0cGxhdGZvcm06IE9wZW5GaW4uUGxhdGZvcm1cbik6IFByb21pc2U8T3BlbkZpbi5JbnRlcm9wQ2xpZW50PiB7XG5cdGNvbnN0IGlzVmFsaWRQbGF0Zm9ybSA9IGF3YWl0IHZhbGlkYXRlTWFuaWZlc3RVcmwoZXh0ZXJuYWxDbGllbnQsIHBsYXRmb3JtKTtcblx0aWYgKCFpc1ZhbGlkUGxhdGZvcm0pIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRgVGhlIG1hbmlmZXN0IHVybCBvZiB0aGUgY29ubmVjdGVkIHBsYXRmb3JtIGRvZXMgbm90IG1hdGNoIHRoZSBleHBlY3RlZCBtYW5pZmVzdCB1cmwgJHtleHRlcm5hbENsaWVudC5tYW5pZmVzdFVybH0gZm9yICR7ZXh0ZXJuYWxDbGllbnQudXVpZH1gXG5cdFx0KTtcblx0fVxuXHRjb25zdCBpbnRlcm9wQ2xpZW50ID0gZmluLkludGVyb3AuY29ubmVjdFN5bmMoZXh0ZXJuYWxDbGllbnQudXVpZCwge1xuXHRcdEhFUkVfQVBJOiBleHRlcm5hbENsaWVudC5pbnRlcm9wS2V5XG5cdH0gYXMgT3BlbkZpbi5JbnRlcm9wQ29uZmlnKTtcblx0cmV0dXJuIGludGVyb3BDbGllbnQ7XG59XG5cbi8qKlxuICogVmFsaWRhdGVzIHRoZSBjb25uZWN0aW9uIHRvIGFuIGV4dGVybmFsIGNsaWVudCBieSBjaGVja2luZyB0aGUgbWFuaWZlc3QgdXJsIGFuZCBjdXN0b20gZGF0YS5cbiAqIEBwYXJhbSBleHRlcm5hbENsaWVudCAtIHRoZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZXh0ZXJuYWwgY2xpZW50IHRvIGNvbm5lY3QgdG8sIGluY2x1ZGluZyB1dWlkLCBtYW5pZmVzdFVybCwgYW5kIGFueSBjdXN0b20gZGF0YSBuZWVkZWQgZm9yIHZhbGlkYXRpb24uXG4gKiBAcGFyYW0gcGxhdGZvcm0gLSB0aGUgaW5zdGFuY2Ugb2YgdGhlIGV4dGVybmFsIHBsYXRmb3JtIHVzZWQgdG8gdmFsaWRhdGUgdGhlIG1hbmlmZXN0IHVybC5cbiAqIEByZXR1cm5zIEEgYm9vbGVhbiBpbmRpY2F0aW5nIGlmIHRoZSBjb25uZWN0aW9uIGlzIHZhbGlkLlxuICovXG5hc3luYyBmdW5jdGlvbiB2YWxpZGF0ZU1hbmlmZXN0VXJsKFxuXHRleHRlcm5hbENsaWVudDogRXh0ZXJuYWxDbGllbnQsXG5cdHBsYXRmb3JtOiBPcGVuRmluLlBsYXRmb3JtXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcblx0Y29uc3QgaW5mbyA9IGF3YWl0IHBsYXRmb3JtLkFwcGxpY2F0aW9uLmdldEluZm8oKTtcblx0Y29uc3QgaXNWYWxpZCA9IGluZm8ubWFuaWZlc3RVcmwgPT09IGV4dGVybmFsQ2xpZW50Lm1hbmlmZXN0VXJsO1xuXHRpZiAoIWlzVmFsaWQpIHtcblx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRgVmFsaWRhdGluZyBjb25uZWN0aW9uIHRvIHBsYXRmb3JtIHdpdGggdXVpZCAke2V4dGVybmFsQ2xpZW50LnV1aWR9LiBFeHBlY3RlZCBtYW5pZmVzdCB1cmw6ICR7ZXh0ZXJuYWxDbGllbnQubWFuaWZlc3RVcmx9LCBBY3R1YWwgbWFuaWZlc3QgdXJsOiAke2luZm8ubWFuaWZlc3RVcmx9YFxuXHRcdCk7XG5cdH1cblx0cmV0dXJuIGlzVmFsaWQ7XG59XG5cbi8qKlxuICogVmFsaWRhdGVzIHRoZSBjb25uZWN0aW9uIHRvIGFuIGV4dGVybmFsIGJyb2tlciBieSBjaGVja2luZyBjdXN0b20gZGF0YS5cbiAqIFRoaXMgaXMgYSBwbGFjZWhvbGRlciBmb3IgYW55IGN1c3RvbSB2YWxpZGF0aW9uIGxvZ2ljIHlvdSB3YW50IHRvIGltcGxlbWVudCBmb3IgdGhlIGNvbm5lY3Rpb24uXG4gKiBGb3IgZXhhbXBsZSwgeW91IGNvdWxkIGNoZWNrIGlmIHRoZSBjdXN0b20gZGF0YSBjb250YWlucyBhIHNwZWNpZmljIGtleSBvciB2YWx1ZSB0aGF0IHlvdSBleHBlY3QuXG4gKiBJbiB0aGlzIGV4YW1wbGUsIHdlIGFyZSBqdXN0IGNoZWNraW5nIGlmIHRoZSBIRVJFX0FQSSBrZXkgZXhpc3RzIGFuZCBoYXMgYSBzcGVjaWZpYyB2YWx1ZS5cbiAqIEBwYXJhbSBleHRlcm5hbENsaWVudCAtIHRoZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZXh0ZXJuYWwgY2xpZW50LCBpbmNsdWRpbmcgdXVpZCwgbWFuaWZlc3RVcmwsIGFuZCBhbnkgY3VzdG9tIGRhdGEgbmVlZGVkIGZvciB2YWxpZGF0aW9uLlxuICogQHBhcmFtIHBheWxvYWQgLSB0aGUgY3VzdG9tIGRhdGEgcGF5bG9hZCB0byB2YWxpZGF0ZSBhZ2FpbnN0IHRoZSBjb25uZWN0aW9uJ3MgY3VzdG9tIGRhdGEuXG4gKiBAcGFyYW0gcGF5bG9hZC5IRVJFX0FQSSAtIGEgc3BlY2lmaWMga2V5IHdpdGhpbiB0aGUgY3VzdG9tIGRhdGEgdG8gdmFsaWRhdGUuXG4gKiBAcmV0dXJucyBBIGJvb2xlYW4gaW5kaWNhdGluZyBpZiB0aGUgY29ubmVjdGlvbiBpcyB2YWxpZCBiYXNlZCBvbiB0aGUgY3VzdG9tIGRhdGEgdmFsaWRhdGlvbi5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gdmFsaWRhdGVQYXlsb2FkKFxuXHRleHRlcm5hbENsaWVudDogRXh0ZXJuYWxDbGllbnQsXG5cdHBheWxvYWQ6IHsgSEVSRV9BUEk/OiBzdHJpbmcgfVxuKTogUHJvbWlzZTxib29sZWFuPiB7XG5cdGNvbnN0IGlzUGF5bG9hZFZhbGlkID0gcGF5bG9hZC5IRVJFX0FQSSA9PT0gZXh0ZXJuYWxDbGllbnQuaW50ZXJvcEtleTtcblx0aWYgKCFpc1BheWxvYWRWYWxpZCkge1xuXHRcdC8vIE5PVEU6IFlPVSBXT1VMRCBOT1QgV0FOVCBUTyBMT0cgU0VOU0lUSVZFIElORk9STUFUSU9OIElOIEEgUFJPRFVDVElPTiBFTlZJUk9OTUVOVC4gVGhpcyBpcyBqdXN0IGZvciBkZW1vbnN0cmF0aW9uIHB1cnBvc2VzIHRvIHNob3cgaG93IHlvdSBjb3VsZCB2YWxpZGF0ZSBjdXN0b20gZGF0YSBvbiB0aGUgY29ubmVjdGlvbiBhbmQgbG9nIGZvciBkZWJ1Z2dpbmcgaWYgdGhlIHZhbGlkYXRpb24gZmFpbHMuXG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0YFZhbGlkYXRpbmcgY29ubmVjdGlvbiB0byBwbGF0Zm9ybSB3aXRoIHV1aWQgJHtleHRlcm5hbENsaWVudC51dWlkfS4gRXhwZWN0ZWQgSEVSRV9BUEk6ICR7ZXh0ZXJuYWxDbGllbnQuaW50ZXJvcEtleX0sIEFjdHVhbCBIRVJFX0FQSTogJHtwYXlsb2FkLkhFUkVfQVBJfWBcblx0XHQpO1xuXHR9XG5cdHJldHVybiBpc1BheWxvYWRWYWxpZDtcbn1cbiIsIi8qKlxuICogUG9seWZpbGxzIHJhbmRvbVVVSUQgaWYgcnVubmluZyBpbiBhIG5vbi1zZWN1cmUgY29udGV4dC5cbiAqIEByZXR1cm5zIFRoZSByYW5kb20gVVVJRC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbVVVSUQoKTogc3RyaW5nIHtcblx0aWYgKFwicmFuZG9tVVVJRFwiIGluIGdsb2JhbFRoaXMuY3J5cHRvKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG5cdFx0cmV0dXJuIGdsb2JhbFRoaXMuY3J5cHRvLnJhbmRvbVVVSUQoKTtcblx0fVxuXHQvLyBQb2x5ZmlsbCB0aGUgd2luZG93LmNyeXB0by5yYW5kb21VVUlEIGlmIHdlIGFyZSBydW5uaW5nIGluIGEgbm9uIHNlY3VyZSBjb250ZXh0IHRoYXQgZG9lc24ndCBoYXZlIGl0XG5cdC8vIHdlIGFyZSBzdGlsbCB1c2luZyB3aW5kb3cuY3J5cHRvLmdldFJhbmRvbVZhbHVlcyB3aGljaCBpcyBhbHdheXMgYXZhaWxhYmxlXG5cdC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMTE3NTIzLzI4MDAyMThcblx0LyoqXG5cdCAqIEdldCByYW5kb20gaGV4IHZhbHVlLlxuXHQgKiBAcGFyYW0gYyBUaGUgbnVtYmVyIHRvIGJhc2UgdGhlIHJhbmRvbSB2YWx1ZSBvbi5cblx0ICogQHJldHVybnMgVGhlIHJhbmRvbSB2YWx1ZS5cblx0ICovXG5cdGZ1bmN0aW9uIGdldFJhbmRvbUhleChjOiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG5cdFx0Y29uc3Qgcm5kID0gZ2xvYmFsVGhpcy5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KDEpKVswXSAmICgxNSA+PiAoTnVtYmVyKGMpIC8gNCkpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuXHRcdFx0KE51bWJlcihjKSBeIHJuZCkudG9TdHJpbmcoMTYpXG5cdFx0KTtcblx0fVxuXHRyZXR1cm4gXCIxMDAwMDAwMC0xMDAwLTQwMDAtODAwMC0xMDAwMDAwMDAwMDBcIi5yZXBsYWNlKC9bMDE4XS9nLCBnZXRSYW5kb21IZXgpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRpZiAoIShtb2R1bGVJZCBpbiBfX3dlYnBhY2tfbW9kdWxlc19fKSkge1xuXHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0eXBlIE9wZW5GaW4gZnJvbSBcIkBvcGVuZmluL2NvcmVcIjtcbmltcG9ydCB7IGNvbm5lY3RUb0V4dGVybmFsQ2xpZW50LCB2YWxpZGF0ZUJyb2tlckNvbm5lY3Rpb24gfSBmcm9tIFwiLi9jb25uZWN0aW9uXCI7XG5pbXBvcnQgdHlwZSB7IEV4dGVybmFsQ2xpZW50LCBFeHRlcm5hbENsaWVudENvbm5lY3Rpb24gfSBmcm9tIFwiLi9zaGFwZXNcIjtcbmltcG9ydCB7IHJhbmRvbVVVSUQgfSBmcm9tIFwiLi91dGlsXCI7XG5cbi8qKlxuICogT3ZlcnJpZGUgdGhlIGludGVyb3AgYnJva2VyLlxuICogQHBhcmFtIEludGVyb3BCcm9rZXIgY2xhc3MgdXNlZCB0byBleHRlbmQgdGhlIGN1c3RvbSBvdmVycmlkZSBzdWJjbGFzcy5cbiAqIEByZXR1cm5zIFRoZSBvdmVycmlkZS5cbiAqL1xuZnVuY3Rpb24gaW50ZXJvcE92ZXJyaWRlKEludGVyb3BCcm9rZXI6IE9wZW5GaW4uQ29uc3RydWN0b3I8T3BlbkZpbi5JbnRlcm9wQnJva2VyPik6IE9wZW5GaW4uSW50ZXJvcEJyb2tlciB7XG5cdC8qKlxuXHQgKiBDbGFzcyB0aGF0IGluaGVyaXRzIHRoZSBwdWJsaWMgSW50ZXJvcEJyb2tlciBtZXRob2RzIHRoYXQgYWxsb3dzIHlvdSB0byBvdmVycmlkZSBleGlzdGluZ1xuXHQgKiBJbnRlcm9wQnJva2VyIG1ldGhvZHMgYW5kIGFkZCBhbnkgY3VzdG9tIGxvZ2ljIHRvIHRoZSByZXR1cm5lZCBJbnRlcm9wQnJva2VyIGluc3RhbmNlIHVzZWQgYnkgeW91ciBwbGF0Zm9ybS5cblx0ICovXG5cdGNsYXNzIE92ZXJyaWRlIGV4dGVuZHMgSW50ZXJvcEJyb2tlciB7XG5cdFx0cHVibGljIGV4dGVybmFsQ2xpZW50czogRXh0ZXJuYWxDbGllbnRbXSA9IFtdO1xuXG5cdFx0cHVibGljIGV4dGVybmFsQ2xpZW50Q29ubmVjdGlvbnM6IEV4dGVybmFsQ2xpZW50Q29ubmVjdGlvbltdID0gW107XG5cblx0XHRwcml2YXRlIHJlYWRvbmx5IF9pbml0aWFsaXphdGlvbkNvbXBsZXRlOiBQcm9taXNlPHZvaWQ+O1xuXG5cdFx0LyoqXG5cdFx0ICogSW5pdGlhbGl6ZSBhbmQgY29ubmVjdCB0byBleHRlcm5hbCBicm9rZXIuXG5cdFx0ICovXG5cdFx0Y29uc3RydWN0b3IoKSB7XG5cdFx0XHRzdXBlcigpO1xuXHRcdFx0dGhpcy5faW5pdGlhbGl6YXRpb25Db21wbGV0ZSA9IHRoaXMuaW5pdGlhbGl6ZUNvbm5lY3Rpb25zKCkuY2F0Y2goKGVycm9yKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogSGFuZGxlIHRoZSBpbmZvcm1hdGlvbiBmb3IgYW5kIGludGVudC5cblx0XHQgKiBAcGFyYW0gaW50ZW50T3B0aW9ucyBUaGUgaW50ZW50IG9wdGlvbnMuXG5cdFx0ICogQHBhcmFtIGNsaWVudElkZW50aXR5IFRoZSBjbGllbnQuXG5cdFx0ICogQHJldHVybnMgVGhlIGludGVudHMgbWFwcGVkIHRvIGFwcCBtZXRhZGF0YS5cblx0XHQgKi9cblx0XHRwdWJsaWMgYXN5bmMgaGFuZGxlSW5mb0ZvckludGVudChcblx0XHRcdGludGVudE9wdGlvbnM6IE9wZW5GaW4uSW5mb0ZvckludGVudE9wdGlvbnMsXG5cdFx0XHRjbGllbnRJZGVudGl0eTogT3BlbkZpbi5DbGllbnRJZGVudGl0eVxuXHRcdCk6IFByb21pc2U8e1xuXHRcdFx0aW50ZW50OiB7IG5hbWU6IHN0cmluZzsgZGlzcGxheU5hbWU/OiBzdHJpbmcgfTtcblx0XHRcdGFwcHM6IE9wZW5GaW4uRkRDMy52Ml8wLkFwcE1ldGFkYXRhW107XG5cdFx0fT4ge1xuXHRcdFx0Y29uc29sZS5sb2coXG5cdFx0XHRcdFwiUmVjZWl2ZWQgcmVxdWVzdCBmb3IgaW5mbyBmb3IgaW50ZW50OlwiLFxuXHRcdFx0XHRpbnRlbnRPcHRpb25zLFxuXHRcdFx0XHRcIkZyb20gY2xpZW50IGlkZW50aXR5OlwiLFxuXHRcdFx0XHRjbGllbnRJZGVudGl0eVxuXHRcdFx0KTtcblx0XHRcdC8vIFdhaXQgZm9yIGluaXRpYWxpemF0aW9uIHRvIGNvbXBsZXRlIGJlZm9yZSBjaGVja2luZyBleHRlcm5hbCBjbGllbnRzXG5cdFx0XHRhd2FpdCB0aGlzLl9pbml0aWFsaXphdGlvbkNvbXBsZXRlO1xuXHRcdFx0Ly8gVGhpcyBpcyB3aGVyZSB5b3Ugd291bGQgY2hlY2sgdGhlIGludGVudE9wdGlvbnMgYWdhaW5zdCB5b3VyIGRpcmVjdG9yeSBvZiBhcHBsaWNhdGlvbnMgYW5kIHRoZWlyIHN1cHBvcnRlZCBpbnRlbnRzXG5cdFx0XHQvLyBhbmQgcmV0dXJuIHRoZSBhcHByb3ByaWF0ZSBhcHAgbWV0YWRhdGEgZm9yIHRoZSBpbnRlbnQgc28gdGhhdCB0aGUgY2xpZW50IGNhbiBtYWtlIGFuIGluZm9ybWVkIGRlY2lzaW9uIGFib3V0IHdoaWNoIGFwcCB0byByb3V0ZSB0aGUgaW50ZW50IHRvLlxuXHRcdFx0Ly8geW91IGNhbiBhbHNvIGdvIGJleW9uZCBjaGVja2luZyBqdXN0IHRoZSBpbnRlbnQgbmFtZSBhbmQgYWxzbyBjaGVjayB0aGUgY29udGV4dCB0eXBlcywgZXRjLi4uXG5cdFx0XHRjb25zdCByZXNwb25zZToge1xuXHRcdFx0XHRpbnRlbnQ6IHsgbmFtZTogc3RyaW5nOyBkaXNwbGF5TmFtZT86IHN0cmluZyB9O1xuXHRcdFx0XHRhcHBzOiBPcGVuRmluLkZEQzMudjJfMC5BcHBNZXRhZGF0YVtdO1xuXHRcdFx0fSA9IHtcblx0XHRcdFx0aW50ZW50OiB7IG5hbWU6IGludGVudE9wdGlvbnMubmFtZSwgZGlzcGxheU5hbWU6IGludGVudE9wdGlvbnMubmFtZSB9LFxuXHRcdFx0XHRhcHBzOiBbXVxuXHRcdFx0fTtcblxuXHRcdFx0Zm9yIChjb25zdCBleHRlcm5hbENsaWVudCBvZiB0aGlzLmV4dGVybmFsQ2xpZW50cykge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0ZXh0ZXJuYWxDbGllbnQuaW50ZXJvcC5pbnRlbnRzPy5saXN0ZW5zRm9yICYmXG5cdFx0XHRcdFx0aW50ZW50T3B0aW9ucy5uYW1lIGluIGV4dGVybmFsQ2xpZW50LmludGVyb3AuaW50ZW50cy5saXN0ZW5zRm9yXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJlc3BvbnNlLmFwcHMucHVzaCh7XG5cdFx0XHRcdFx0XHRhcHBJZDogZXh0ZXJuYWxDbGllbnQudXVpZCxcblx0XHRcdFx0XHRcdG5hbWU6IGV4dGVybmFsQ2xpZW50LnV1aWQsXG5cdFx0XHRcdFx0XHR0aXRsZTogZXh0ZXJuYWxDbGllbnQudGl0bGVcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAocmVzcG9uc2UuYXBwcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0Ly8gdGhlIHdheSB0aGlzIGV4YW1wbGUgYnJva2VyIGlzIHNldHVwIHJpZ2h0IG5vdyBpcyB0aGF0IGl0IHdpbGwgcGljayBhbiBleHRlcm5hbCBjbGllbnQgaWYgc3VwcG9ydHMgdGhlIGludGVudFxuXHRcdFx0XHQvLyBpZiBpdCBpc24ndCBydW5uaW5nIHRoZW4gaXQgbG9ncyBhIHdhcm5pbmcuXG5cdFx0XHRcdC8vIElmIG5vIGV4dGVybmFsIGFwcCBzdXBwb3J0cyB0aGUgaW50ZW50IGl0IHdpbGwgdHJ5IGFuZCBmaXJlIGl0IGludGVybmFsbHkgdG8gdGhlIGZkYzMgaW50ZW50IHRvb2wuXG5cdFx0XHRcdC8vIEdpdmVuIHRoYXQgbG9naWMgbGV0cyByZXR1cm4gdGhlIGN1cnJlbnQgcGxhdGZvcm0gaWYgbm8gZXh0ZXJuYWwgY2xpZW50IHN1cHBvcnRzIHRoZSBpbnRlbnRcblx0XHRcdFx0cmVzcG9uc2UuYXBwcy5wdXNoKHtcblx0XHRcdFx0XHRhcHBJZDogZmluLm1lLmlkZW50aXR5LnV1aWQsXG5cdFx0XHRcdFx0bmFtZTogZmluLm1lLmlkZW50aXR5LnV1aWQsXG5cdFx0XHRcdFx0dGl0bGU6IFwiVGhpcyBQbGF0Zm9ybVwiXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRjb25zb2xlLmluZm8oXG5cdFx0XHRcdFx0YE5vIGV4dGVybmFsIGNsaWVudHMgc3VwcG9ydCBpbnRlbnQgJHtpbnRlbnRPcHRpb25zLm5hbWV9LiBSZXR1cm5pbmcgdGhpcyBwbGF0Zm9ybSBhcyB0aGUgb25seSBvcHRpb24gdG8gaGFuZGxlIHRoZSBpbnRlbnQgYnV0IGl0IG1heSBub3QgYmUgYWJsZSB0byBoYW5kbGUgaXQgaWYgaXQgZG9lc24ndCBoYXZlIGEgbGlzdGVuZXIgZm9yIGl0LmBcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEhhbmRsZSBhIGZpcmVkIGludGVudC5cblx0XHQgKiBAcGFyYW0gaW50ZW50IFRoZSBpbnRlbnQgdG8gaGFuZGxlLlxuXHRcdCAqIEBwYXJhbSBjbGllbnRJZGVudGl0eSBUaGUgY2xpZW50IGlkZW50aXR5LlxuXHRcdCAqIEByZXR1cm5zIFRoZSBpbnRlbnQgcmVzb2x1dGlvbi5cblx0XHQgKi9cblx0XHRwdWJsaWMgYXN5bmMgaGFuZGxlRmlyZWRJbnRlbnQoXG5cdFx0XHRpbnRlbnQ6IE9wZW5GaW4uSW50ZW50PE9wZW5GaW4uSW50ZW50TWV0YWRhdGE8T3BlbkZpbi5GREMzLnYyXzAuQXBwSWRlbnRpZmllcj4+LFxuXHRcdFx0Y2xpZW50SWRlbnRpdHk6IE9wZW5GaW4uQ2xpZW50SWRlbnRpdHlcblx0XHQpOiBQcm9taXNlPHsgc291cmNlOiB7IGFwcElkOiBzdHJpbmcgfTsgaW50ZW50OiBzdHJpbmcgfT4ge1xuXHRcdFx0Y29uc29sZS5sb2coXCJSZWNlaXZlZCByZXF1ZXN0IGZvciBhIHJhaXNlZCBpbnRlbnQ6XCIsIGludGVudCwgXCJGb3IgY2xpZW50IGlkZW50aXR5OlwiLCBjbGllbnRJZGVudGl0eSk7XG5cdFx0XHQvLyBXYWl0IGZvciBpbml0aWFsaXphdGlvbiB0byBjb21wbGV0ZSBiZWZvcmUgY2hlY2tpbmcgZXh0ZXJuYWwgY2xpZW50c1xuXHRcdFx0YXdhaXQgdGhpcy5faW5pdGlhbGl6YXRpb25Db21wbGV0ZTtcblx0XHRcdC8vIFZhbGlkYXRpb24gd291bGQgaGF2ZSBvY2N1cnJlZCBpbiBpc0FjdGlvbkF1dGhvcml6ZWQgYnV0IHlvdSBjb3VsZCBkbyBhZGRpdGlvbmFsIHZhbGlkYXRpb24gaGVyZSBpZiBuZWVkZWQgYmVmb3JlIGhhbmRsaW5nIHRoZSBpbnRlbnQuXG5cblx0XHRcdC8vIFRoaXMgaXMgd2hlcmUgeW91IGNvdWxkIGNoZWNrIHlvdXIgYXBwbGljYXRpb24gZGlyZWN0b3J5IHRvIHNlZSBpZiBhIHNwZWNpZmljIGFwcCBzaG91bGQgaGFuZGxlIHRoZSByZXF1ZXN0IG9yIGlmIHlvdSBzaG91bGRcblx0XHRcdC8vIHByZXNlbnQgYW4gaW50ZW50IHJlc29sdXRpb24gcGlja2VyIHRvIHRoZSB1c2VyIHRvIGNob29zZSB3aGljaCBhcHAgdGhleSB3YW50IHRvIGhhbmRsZSB0aGUgaW50ZW50LCBldGMuLi5cblxuXHRcdFx0Ly8gRm9yIGEgZnVsbCBpbXBsZW1lbnRhdGlvbiBvZiBhbiBpbnRlcm9wIGJyb2tlciB5b3UgY2FuIGNoZWNrIG91dCB0aGUgd29ya3NwYWNlIHBsYXRmb3JtIHN0YXJ0ZXIgZXhhbXBsZSBpbiB0aGUgYnVpbHQtb24tb3BlbmZpbi93b3Jrc3BhY2Utc3RhcnRlciByZXBvLlxuXG5cdFx0XHQvLyBUaGlzIGV4YW1wbGUgaXMgdmVyeSBiYXNpYy5cblx0XHRcdC8vICogSWYgYW4gaW50ZW50IHJlcXVlc3QgY29tZXMgaW4gd2UgY2hlY2sgdG8gc2VlIGlmIGFueSBleHRlcm5hbCBjbGllbnRzIG1hdGNoIGl0ICh0aGlzIGV4YW1wbGUgd2lsbCBwaWNrIHRoZSBmaXJzdCBtYXRjaGluZyBleHRlcm5hbCBjbGllbnQgYnV0IGluIGEgcmVhbCB3b3JsZCB5b3Ugd291bGQgaGF2ZSBhbiBpbnRlbnQgcmVzb2x2ZXIpLlxuXHRcdFx0Ly8gKiBJZiB3ZSBkb24ndCBmaW5kIGEgbWF0Y2hpbmcgZXh0ZXJuYWwgY2xpZW50IHRoZW4gd2UgbGF1bmNoIGEgd2VicGFnZSB3aXRoIHRoZSBpbnRlbnQgbmFtZSBhbmQgZmlyZSB0aGUgaW50ZW50IHRvIGl0LlxuXG5cdFx0XHRjb25zdCBpbnRlbnROYW1lID0gaW50ZW50Lm5hbWU7XG5cdFx0XHRsZXQgdGFyZ2V0RXh0ZXJuYWxDbGllbnQ6IEV4dGVybmFsQ2xpZW50IHwgdW5kZWZpbmVkO1xuXG5cdFx0XHRpZiAoaW50ZW50Lm1ldGFkYXRhPy50YXJnZXQ/LmFwcElkICYmIGludGVudC5tZXRhZGF0YT8udGFyZ2V0Py5hcHBJZCAhPT0gZmluLm1lLmlkZW50aXR5LnV1aWQpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXG5cdFx0XHRcdFx0YEludGVudCAke2ludGVudE5hbWV9IGhhcyBhIHRhcmdldCBhcHAgJHtpbnRlbnQubWV0YWRhdGEudGFyZ2V0LmFwcElkfS4gQXR0ZW1wdGluZyB0byBmaW5kIGEgbWF0Y2hpbmcgZXh0ZXJuYWwgY2xpZW50IGZvciBpdC5gXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHRhcmdldEV4dGVybmFsQ2xpZW50ID0gdGhpcy5leHRlcm5hbENsaWVudHMuZmluZChcblx0XHRcdFx0XHQoZXh0ZXJuYWxDbGllbnQpID0+XG5cdFx0XHRcdFx0XHRleHRlcm5hbENsaWVudC51dWlkID09PSBpbnRlbnQubWV0YWRhdGE/LnRhcmdldD8uYXBwSWQgJiZcblx0XHRcdFx0XHRcdGV4dGVybmFsQ2xpZW50LmludGVyb3AuaW50ZW50cz8ubGlzdGVuc0ZvciAmJlxuXHRcdFx0XHRcdFx0aW50ZW50TmFtZSBpbiBleHRlcm5hbENsaWVudC5pbnRlcm9wLmludGVudHMubGlzdGVuc0ZvclxuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAodGFyZ2V0RXh0ZXJuYWxDbGllbnQpIHtcblx0XHRcdFx0XHRpZiAodGFyZ2V0RXh0ZXJuYWxDbGllbnQuYXBwSWQgJiYgdGFyZ2V0RXh0ZXJuYWxDbGllbnQuYXBwSWQgIT09IGludGVudC5tZXRhZGF0YT8udGFyZ2V0Py5hcHBJZCkge1xuXHRcdFx0XHRcdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XHRcdFx0XHRgVGhlIGludGVudCAke2ludGVudE5hbWV9IGhhcyBhIHRhcmdldCBhcHBJZCAke2ludGVudC5tZXRhZGF0YS50YXJnZXQuYXBwSWR9IHRoYXQgbWF0Y2hlcyB0aGUgdXVpZCBvZiBhbiBleHRlcm5hbCBjbGllbnQgYnV0IGl0IGRvZXMgbm90IG1hdGNoIHRoZSBwcmVmZXJyZWQgYXBwSWQgZm9yIHRoYXQgZXh0ZXJuYWwgY2xpZW50LiBVcGRhdGluZyBpdCB0byAke3RhcmdldEV4dGVybmFsQ2xpZW50LmFwcElkfWBcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRpbnRlbnQubWV0YWRhdGEudGFyZ2V0ID0ge1xuXHRcdFx0XHRcdFx0XHRhcHBJZDogdGFyZ2V0RXh0ZXJuYWxDbGllbnQuYXBwSWQsXG5cdFx0XHRcdFx0XHRcdGluc3RhbmNlSWQ6IGludGVudC5tZXRhZGF0YS50YXJnZXQuaW5zdGFuY2VJZFxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXG5cdFx0XHRcdFx0XHRgRm91bmQgbWF0Y2hpbmcgZXh0ZXJuYWwgY2xpZW50ICR7dGFyZ2V0RXh0ZXJuYWxDbGllbnQudXVpZH0gZm9yIGludGVudCAke2ludGVudE5hbWV9IHdpdGggdGFyZ2V0IGFwcElkICR7aW50ZW50Lm1ldGFkYXRhPy50YXJnZXQ/LmFwcElkfS4gUm91dGluZyBpbnRlbnQgdG8gaXQuYFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVGFyZ2V0QXBwVW5hdmFpbGFibGVcIik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIG5vIGFwcElkIHNwZWNpZmllZCBpbiB0aGUgdGFyZ2V0IG9yIGl0IG1hdGNoZXMgdGhlIGN1cnJlbnQgcGxhdGZvcm0gc28gZ28gd2l0aCBkZWZhdWx0IGxvZ2ljLlxuXHRcdFx0XHR0YXJnZXRFeHRlcm5hbENsaWVudCA9IHRoaXMuZXh0ZXJuYWxDbGllbnRzLmZpbmQoXG5cdFx0XHRcdFx0KGV4dGVybmFsQ2xpZW50KSA9PlxuXHRcdFx0XHRcdFx0ZXh0ZXJuYWxDbGllbnQuaW50ZXJvcC5pbnRlbnRzPy5saXN0ZW5zRm9yICYmXG5cdFx0XHRcdFx0XHRpbnRlbnROYW1lIGluIGV4dGVybmFsQ2xpZW50LmludGVyb3AuaW50ZW50cy5saXN0ZW5zRm9yXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0YXJnZXRFeHRlcm5hbENsaWVudCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcblx0XHRcdFx0XHRgRm91bmQgbWF0Y2hpbmcgZXh0ZXJuYWwgY2xpZW50ICR7dGFyZ2V0RXh0ZXJuYWxDbGllbnQudXVpZH0gZm9yIGludGVudCAke2ludGVudE5hbWV9LiBSb3V0aW5nIGludGVudCB0byBpdC5gXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGNvbnN0IHRhcmdldENvbm5lY3Rpb24gPSB0aGlzLmV4dGVybmFsQ2xpZW50Q29ubmVjdGlvbnMuZmluZChcblx0XHRcdFx0XHQoY29ubmVjdGlvbikgPT4gY29ubmVjdGlvbi51dWlkID09PSB0YXJnZXRFeHRlcm5hbENsaWVudC51dWlkICYmIGNvbm5lY3Rpb24uY2xpZW50XG5cdFx0XHRcdCk7XG5cdFx0XHRcdC8vIFRoaXMgaXMgYSBiYXNpYyBleGFtcGxlIGFzc3VtaW5nIHlvdSBvbmx5IHRhcmdldCBleHRlcm5hbCBjbGllbnRzIHRoYXQgYXJlIHJ1bm5pbmcuXG5cdFx0XHRcdC8vIFNvbWUgcGxhdGZvcm1zIGluY2x1ZGUgdGhlIGV4dGVybmFsIGNsaWVudCBhcyBhbiBhcHAgdGhhdCBjYW4gYmUgbGF1bmNoZWQgZWl0aGVyIHRocm91Z2ggdGhlIHBsYXRmb3JtJ3MgVUkgb3IgZnJvbSB0aGUgaW50ZXJvcCBicm9rZXIgaWYgdGhlIGNsaWVudCBpcyBub3QgYWxyZWFkeSBydW5uaW5nLlxuXHRcdFx0XHRpZiAodGFyZ2V0Q29ubmVjdGlvbikge1xuXHRcdFx0XHRcdGF3YWl0IHRhcmdldENvbm5lY3Rpb24uY2xpZW50LmZpcmVJbnRlbnQoaW50ZW50KTtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0c291cmNlOiB7IGFwcElkOiB0YXJnZXRDb25uZWN0aW9uLnV1aWQgfSxcblx0XHRcdFx0XHRcdGludGVudDogaW50ZW50Lm5hbWVcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFx0XHRgRXh0ZXJuYWwgaW50ZXJvcCBjbGllbnQgY29ubmVjdGlvbiBmb3IgJHt0YXJnZXRFeHRlcm5hbENsaWVudC51dWlkfSB3YXMgbm90IGZvdW5kLiBVbmFibGUgdG8gZmlyZSBpbnRlbnQuYFxuXHRcdFx0XHQpO1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUYXJnZXRBcHBVbmF2YWlsYWJsZVwiKTtcblx0XHRcdH1cblx0XHRcdC8vIEZvciB0aGlzIGV4YW1wbGUgd2UgYXJlIGdvaW5nIHRvIGxhdW5jaCBhIHVybCB0aGF0IG1hdGNoZXMgdGhlIGludGVudCBuYW1lIGFuZCBwYXNzIGl0IHRoZSBjb250ZXh0LlxuXHRcdFx0Y29uc3QgdXJsID1cblx0XHRcdFx0XCJodHRwczovL2J1aWx0LW9uLW9wZW5maW4uZ2l0aHViLmlvL2Rldi1leHRlbnNpb25zL21haW4vaW50ZXJvcC9mZGMzL2ludGVudC8yLTAvZmRjMy1pbnRlbnQtdmlldy5odG1sXCI7XG5cdFx0XHRjb25zdCB0YXJnZXRJZGVudGl0eSA9IHtcblx0XHRcdFx0dXVpZDogZmluLm1lLmlkZW50aXR5LnV1aWQsXG5cdFx0XHRcdG5hbWU6IGAke2ludGVudE5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKX0tJHtyYW5kb21VVUlEKCl9YFxuXHRcdFx0fTtcblx0XHRcdC8vIHRoaXMgY291bGQgYmUgYSB2aWV3IGluIHlvdXIgcGxhdGZvcm0gb3IgYSBjbGFzc2ljIHdpbmRvdyBhcyBzaG93biBoZXJlLiBVc3VhbGx5IHRoZSBsYXVuY2hpbmcgbG9naWMgaXMgbm90IGluIHRoZSBicm9rZXIgYnV0IGFic3RyYWN0ZWQgYXdheSBzbyB0aGF0IGl0IGNhbiBiZSByZXVzZWQgaW4gZGlmZmVyZW50IHBsYWNlcyBpbiB5b3VyIHBsYXRmb3JtIGJ1dCBmb3Igc2ltcGxpY2l0eSB3ZSBhcmUgbGF1bmNoaW5nIGl0IGhlcmUuXG5cdFx0XHRhd2FpdCBmaW4uV2luZG93LmNyZWF0ZSh7XG5cdFx0XHRcdG5hbWU6IHRhcmdldElkZW50aXR5Lm5hbWUsXG5cdFx0XHRcdHVybCxcblx0XHRcdFx0ZmRjM0ludGVyb3BBcGk6IFwiMi4wXCJcblx0XHRcdH0pO1xuXHRcdFx0YXdhaXQgc3VwZXIuc2V0SW50ZW50VGFyZ2V0KGludGVudCwgdGFyZ2V0SWRlbnRpdHkpO1xuXHRcdFx0Ly8gSWYgeW91IGhhZCBhbiBhcHAgZGlyZWN0b3J5IGZvciBjb250ZW50IGxhdW5jaGVkIGludGVybmFsbHkgdGhlIGFwcElkIHdvdWxkIHJlZmxlY3QgdGhlIHNlbGVjdGlvbiBtYWRlIChlLmcuIHRoZSBmZGMzIGludGVudCB0b29sIGluIHRoaXMgZXhhbXBsZSkgYW5kIHlvdSB3b3VsZCBiZSBhYmxlIHRvXG5cdFx0XHQvLyBkZXRlcm1pbmUgdGhlIGluc3RhbmNlIGlkLiBUaGUgYnVpbHQtb24tb3BlbmZpbi93b3Jrc3BhY2Utc3RhcnRlci9ob3ctdG8vd29ya3NwYWNlLXBsYXRmb3JtLXN0YXJ0ZXIgZXhhbXBsZSBoYXMgYSBtb3JlIHJvYnVzdCBleGFtcGxlIG9mIGFuIGludGVyb3AgYnJva2VyIGltcGxlbWVudGF0aW9uLlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0c291cmNlOiB7IGFwcElkOiBmaW4ubWUuaWRlbnRpdHkudXVpZCB9LFxuXHRcdFx0XHRpbnRlbnQ6IGludGVudC5uYW1lXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIElzIHRoZSBjb25uZWN0aW9uIGF1dGhvcml6ZWQuXG5cdFx0ICogQHBhcmFtIGlkIFRoZSBpZCBvZiB0aGUgY2xpZW50IGlkZW50aXR5IHRvIGNoZWNrLlxuXHRcdCAqIEBwYXJhbSBwYXlsb2FkIFRoZSBwYXlsb2FkIHRvIHNlbmQgd2l0aCB0aGUgYXV0aG9yaXphdGlvbiBjaGVjay5cblx0XHQgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBjb25uZWN0aW9uIGlzIGF1dGhvcml6ZWQuXG5cdFx0ICovXG5cdFx0cHVibGljIGFzeW5jIGlzQ29ubmVjdGlvbkF1dGhvcml6ZWQoaWQ6IE9wZW5GaW4uQ2xpZW50SWRlbnRpdHksIHBheWxvYWQ/OiB1bmtub3duKTogUHJvbWlzZTxib29sZWFuPiB7XG5cdFx0XHRjb25zb2xlLmxvZyhcImlzQ29ubmVjdGlvbkF1dGhvcml6ZWQgY2FsbGVkIHdpdGggaWRcIiwgaWQsIFwicGF5bG9hZFwiLCBwYXlsb2FkKTtcblx0XHRcdGlmIChpZC51dWlkID09PSBmaW4ubWUudXVpZCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkNvbm5lY3Rpb24gYXV0aG9yaXplZCBmb3IgaW50ZXJuYWwgY29udGVudFwiLCBpZC51dWlkKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHQvLyBXYWl0IGZvciBpbml0aWFsaXphdGlvbiB0byBjb21wbGV0ZSBiZWZvcmUgY2hlY2tpbmcgZXh0ZXJuYWwgY2xpZW50c1xuXHRcdFx0YXdhaXQgdGhpcy5faW5pdGlhbGl6YXRpb25Db21wbGV0ZTtcblx0XHRcdGNvbnN0IGFsbG93ZWRDb25uZWN0aW9uID0gdGhpcy5leHRlcm5hbENsaWVudHMuZmluZChcblx0XHRcdFx0KGV4dGVybmFsQ2xpZW50KSA9PiBleHRlcm5hbENsaWVudC51dWlkID09PSBpZC51dWlkXG5cdFx0XHQpO1xuXHRcdFx0aWYgKCFhbGxvd2VkQ29ubmVjdGlvbikge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkNvbm5lY3Rpb24gbm90IGF1dGhvcml6ZWQgZm9yIGV4dGVybmFsIGNsaWVudFwiLCBpZC51dWlkKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gVGhlIHV1aWQgaXMgYWxsb3dlZCBidXQgZm9yIGV4dGVybmFsIGNsaWVudHMgeW91IHdhbnQgdG8gdmFsaWRhdGUgbW9yZSB0aGFuIHRoYXQuXG5cdFx0XHQvLyBUaGlzIGlzIGEgdmVyeSBiYXNpYyBleGFtcGxlIHdoZXJlIHdlIGFyZSB1c2luZyB0aGUgaW50ZXJvcEtleSBhcyBhIHNoYXJlZCBzZWNyZXQgYmV0d2VlbiB0aGUgcGxhdGZvcm1zIHRvIHZhbGlkYXRlIHRoZSBjb25uZWN0aW9uXG5cdFx0XHQvLyBidXQgaW4gYSByZWFsIHdvcmxkIHNjZW5hcmlvIHlvdSB3b3VsZCBsaWtlbHkgd2FudCB0byBoYXZlIGEgbW9yZSByb2J1c3QgdmFsaWRhdGlvbiBwcm9jZXNzIHRoYXQgY291bGQgaW5jbHVkZSBjaGVja2luZyBhIHRva2VuLFxuXHRcdFx0Ly8gbWFraW5nIGEgcmVxdWVzdCB0byBhIHNlcnZpY2Ugd2l0aCB0aGUgcHJvdmlkZWQgY3VzdG9tIGRhdGEsIGV0Yy4uLlxuXHRcdFx0Y29uc3QgaXNWYWxpZCA9IGF3YWl0IHZhbGlkYXRlQnJva2VyQ29ubmVjdGlvbihhbGxvd2VkQ29ubmVjdGlvbiwgcGF5bG9hZCA/PyB7fSk7XG5cdFx0XHRpZiAoaXNWYWxpZCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkNvbm5lY3Rpb24gYXV0aG9yaXplZCBmb3IgZXh0ZXJuYWwgY2xpZW50XCIsIGlkLnV1aWQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJDb25uZWN0aW9uIG5vdCBhdXRob3JpemVkIGZvciBleHRlcm5hbCBjbGllbnQuIEl0IGZhaWxlZCB2YWxpZGF0aW9uLlwiLCBpZC51dWlkKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBpc1ZhbGlkO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIENhbGxlZCBiZWZvcmUgZXZlcnkgYWN0aW9uIHRvIGNoZWNrIGlmIHRoaXMgZW50aXR5IHNob3VsZCBiZSBhbGxvd2VkIHRvIHRha2UgdGhlIGFjdGlvbi5cblx0XHQgKiBSZXR1cm4gZmFsc2UgdG8gcHJldmVudCB0aGUgYWN0aW9uLlxuXHRcdCAqIEBwYXJhbSBhY3Rpb24gdGhlIHN0cmluZyBhY3Rpb24gdG8gYXV0aG9yaXplIGluIGNhbWVsIGNhc2Vcblx0XHQgKiBAcGFyYW0gcGF5bG9hZCB0aGUgZGF0YSBiZWluZyBzZW50IGZvciB0aGlzIGFjdGlvblxuXHRcdCAqIEBwYXJhbSBpZGVudGl0eSB0aGUgY29ubmVjdGlvbiBhdHRlbXB0aW5nIHRvIGRpc3BhdGNoIHRoaXMgYWN0aW9uXG5cdFx0ICogQHJldHVybnMgYm9vbGVhbiBvciBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byBib29sZWFuIGluZGljYXRpbmcgaWYgdGhlIGFjdGlvbiBpcyBhdXRob3JpemVkLlxuXHRcdCAqL1xuXHRcdHB1YmxpYyBhc3luYyBpc0FjdGlvbkF1dGhvcml6ZWQoXG5cdFx0XHRhY3Rpb246IHN0cmluZyxcblx0XHRcdHBheWxvYWQ6IHVua25vd24sXG5cdFx0XHRpZGVudGl0eTogT3BlbkZpbi5DbGllbnRJZGVudGl0eVxuXHRcdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuXHRcdFx0Y29uc29sZS5sb2coXCJpc0FjdGlvbkF1dGhvcml6ZWQgY2FsbGVkIHdpdGggYWN0aW9uXCIsIGFjdGlvbiwgXCJwYXlsb2FkXCIsIHBheWxvYWQsIFwiaWRlbnRpdHlcIiwgaWRlbnRpdHkpO1xuXHRcdFx0aWYgKGlkZW50aXR5LnV1aWQgPT09IGZpbi5tZS51dWlkKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiQWN0aW9uIGF1dGhvcml6ZWQgZm9yIGludGVybmFsIGNvbnRlbnRcIiwgaWRlbnRpdHkudXVpZCk7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gRXh0ZXJuYWwgY2xpZW50cyBjYW4gb25seSByZWFjaCB0aGlzIHBvaW50IGFmdGVyIHBhc3NpbmcgaXNDb25uZWN0aW9uQXV0aG9yaXplZCwgd2hpY2ggZW5zdXJlcyBpbml0aWFsaXphdGlvbiBpcyBjb21wbGV0ZVxuXHRcdFx0Y29uc3QgY29ubmVjdGlvblJ1bGVzID0gdGhpcy5leHRlcm5hbENsaWVudHMuZmluZChcblx0XHRcdFx0KGV4dGVybmFsQ2xpZW50KSA9PiBleHRlcm5hbENsaWVudC51dWlkID09PSBpZGVudGl0eS51dWlkXG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAoIWNvbm5lY3Rpb25SdWxlcykge1xuXHRcdFx0XHQvLyBhbGwgY29ubmVjdGlvbnMgc2hvdWxkIGhhdmUgYmVlbiBibG9ja2VkIGluIGlzQ29ubmVjdGlvbkF1dGhvcml6ZWQgYnV0IHdlIHdpbGwgZG8gYSBmaW5hbCBjaGVjayBoZXJlIHRvIGJlIHNhZmUgYW5kXG5cdFx0XHRcdC8vIHdlIG5lZWQgdG8ga25vdyB3aGF0IGFuIGV4dGVybmFsIGNsaWVudCBpcyBhbGxvd2VkIHRvIGRvLlxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkFjdGlvbiBub3QgYXV0aG9yaXplZCBmb3IgZXh0ZXJuYWwgY2xpZW50XCIsIGlkZW50aXR5LnV1aWQpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGFjdGlvbiA9PT0gXCJqb2luQ29udGV4dEdyb3VwXCIgJiZcblx0XHRcdFx0cGF5bG9hZCAmJlxuXHRcdFx0XHR0eXBlb2YgcGF5bG9hZCA9PT0gXCJvYmplY3RcIiAmJlxuXHRcdFx0XHRcImNvbnRleHRHcm91cElkXCIgaW4gcGF5bG9hZCAmJlxuXHRcdFx0XHRjb25uZWN0aW9uUnVsZXMuaW50ZXJvcC51c2VyQ2hhbm5lbHM/LmFsbG93ZWRDaGFubmVsc1xuXHRcdFx0KSB7XG5cdFx0XHRcdC8vIGlmIHdlIGhhdmUgZGVmaW5lZCBhbGxvd2VkIGNoYW5uZWxzIGZvciB0aGlzIGV4dGVybmFsIGNsaWVudCB0aGVuIHdlIHdpbGwgY2hlY2sgaWYgdGhlIGNvbnRleHQgZ3JvdXAgdGhleSBhcmUgdHJ5aW5nIHRvIGpvaW4gaXMgaW4gdGhlIGFsbG93ZWQgY2hhbm5lbHMgbGlzdC4gSWYgaXQgaXMgbm90IHdlIHdpbGwgcmVqZWN0IHRoZSBhY3Rpb24uXG5cdFx0XHRcdGNvbnN0IGFsbG93ZWRDaGFubmVscyA9IGNvbm5lY3Rpb25SdWxlcy5pbnRlcm9wLnVzZXJDaGFubmVscy5hbGxvd2VkQ2hhbm5lbHM7XG5cdFx0XHRcdGNvbnN0IGlzQWxsb3dlZENoYW5uZWwgPSBhbGxvd2VkQ2hhbm5lbHMuaW5jbHVkZXMocGF5bG9hZC5jb250ZXh0R3JvdXBJZCBhcyBzdHJpbmcpO1xuXHRcdFx0XHRpZiAoIWlzQWxsb3dlZENoYW5uZWwpIHtcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcdFx0XHRgQ29ubmVjdGlvbiByZXF1ZXN0IGZyb20gJHtKU09OLnN0cmluZ2lmeShpZGVudGl0eSl9IGF0dGVtcHRlZCB0byBqb2luIGNvbnRleHQgZ3JvdXAgJHtwYXlsb2FkLmNvbnRleHRHcm91cElkfSB3aGljaCBpcyBub3QgaW4gdGhlIGFsbG93ZWQgY2hhbm5lbHMgbGlzdCBhbmQgd2FzIHJlamVjdGVkLmBcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0YWN0aW9uID09PSBcImludGVudEhhbmRsZXJSZWdpc3RlcmVkXCIgJiZcblx0XHRcdFx0cGF5bG9hZCAmJlxuXHRcdFx0XHR0eXBlb2YgcGF5bG9hZCA9PT0gXCJvYmplY3RcIiAmJlxuXHRcdFx0XHRcImhhbmRsZXJJZFwiIGluIHBheWxvYWQgJiZcblx0XHRcdFx0cGF5bG9hZC5oYW5kbGVySWQgPT09IFwiaW50ZW50LWhhbmRsZXItVmlld0FuYWx5c2lzXCIgJiZcblx0XHRcdFx0Y29ubmVjdGlvblJ1bGVzLmludGVyb3A/LmludGVudHM/Lmxpc3RlbnNGb3Jcblx0XHRcdCkge1xuXHRcdFx0XHRjb25zdCBhbGxvd2VkSW50ZW50TGlzdGVuZXJzID0gT2JqZWN0LmtleXMoY29ubmVjdGlvblJ1bGVzLmludGVyb3AuaW50ZW50cy5saXN0ZW5zRm9yKTtcblx0XHRcdFx0Y29uc3QgcmVxdWVzdGVkSW50ZW50ID0gcGF5bG9hZC5oYW5kbGVySWQucmVwbGFjZShcImludGVudC1oYW5kbGVyLVwiLCBcIlwiKTtcblx0XHRcdFx0aWYgKCFhbGxvd2VkSW50ZW50TGlzdGVuZXJzLmluY2x1ZGVzKHJlcXVlc3RlZEludGVudCkpIHtcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcdFx0XHRgQ29ubmVjdGlvbiByZXF1ZXN0IGZyb20gJHtKU09OLnN0cmluZ2lmeShpZGVudGl0eSl9IGF0dGVtcHRlZCB0byByZWdpc3RlciBhbiBpbnRlbnQgaGFuZGxlciBmb3IgJHtyZXF1ZXN0ZWRJbnRlbnR9IHdoaWNoIGlzIG5vdCBpbiB0aGUgYWxsb3dlZCBpbnRlbnRzIGxpc3QgYW5kIHdhcyByZWplY3RlZC5gXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGFjdGlvbiA9PT0gXCJmaXJlSW50ZW50XCIgJiZcblx0XHRcdFx0cGF5bG9hZCAmJlxuXHRcdFx0XHR0eXBlb2YgcGF5bG9hZCA9PT0gXCJvYmplY3RcIiAmJlxuXHRcdFx0XHRcIm5hbWVcIiBpbiBwYXlsb2FkICYmXG5cdFx0XHRcdGNvbm5lY3Rpb25SdWxlcy5pbnRlcm9wPy5pbnRlbnRzPy5yYWlzZXNcblx0XHRcdCkge1xuXHRcdFx0XHRjb25zdCBhbGxvd2VkSW50ZW50c1RvUmFpc2UgPSBPYmplY3Qua2V5cyhjb25uZWN0aW9uUnVsZXMuaW50ZXJvcC5pbnRlbnRzLnJhaXNlcyk7XG5cdFx0XHRcdGNvbnN0IHJlcXVlc3RlZEludGVudCA9IHBheWxvYWQubmFtZSBhcyBzdHJpbmc7XG5cdFx0XHRcdGlmICghYWxsb3dlZEludGVudHNUb1JhaXNlLmluY2x1ZGVzKHJlcXVlc3RlZEludGVudCkpIHtcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcdFx0XHRgQ29ubmVjdGlvbiByZXF1ZXN0IGZyb20gJHtKU09OLnN0cmluZ2lmeShpZGVudGl0eSl9IGF0dGVtcHRlZCB0byBmaXJlIGFuIGludGVudCAke3JlcXVlc3RlZEludGVudH0gd2hpY2ggaXMgbm90IGluIHRoZSBhbGxvd2VkIGludGVudHMgbGlzdCBhbmQgd2FzIHJlamVjdGVkLmBcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEluaXRpYWxpemUgdGhlIGNvbm5lY3Rpb25zLlxuXHRcdCAqIDEuIEdldHMgdGhlIGluc3RhbmNlIG9mIHRoZSBzcGVjaWZpZWQgZXh0ZXJuYWwgcGxhdGZvcm0uXG5cdFx0ICogMi4gRW5zdXJlIHRoZSBleHRlcm5hbCBwbGF0Zm9ybSBhcHBsaWNhdGlvbiBpcyBydW5uaW5nLlxuXHRcdCAqIDMuIEVuc3VyZSB0aGF0IHRoZSBwbGF0Zm9ybSBhcGkgaXMgZmluaXNoZWQgaW5pdGlhbGl6aW5nLlxuXHRcdCAqIDQuIFJlc2V0IHRoZSBtYXAgdHJhY2tpbmcgdGhlIGV4dGVybmFsQ2xpZW50IGNvbm5lY3Rpb25zLlxuXHRcdCAqL1xuXHRcdHB1YmxpYyBhc3luYyBpbml0aWFsaXplQ29ubmVjdGlvbnMoKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0XHQvLyBUaGlzIGlzIGp1c3QgYSBiYXNpYyBleGFtcGxlIHdoZXJlIHlvdSBhcmUgY2FsbGluZyBhIHNlcnZpY2UgdG8gZ2V0IGEgbGlzdCBvZiBleHRlcm5hbCBjbGllbnRzIGZvciB0aGUgY3VycmVudCB1c2VyLiBJZiB5b3UgcHV0IHRoZSB1cmwgaW4geW91ciBtYW5pZmVzdCB0aGVuXG5cdFx0XHQvLyBoYXZlIHlvdXIgcGxhdGZvcm0gdmFsaWRhdGUgdGhhdCB0aGUgY3VycmVudCBtYW5pZmVzdCBpcyB0aGUgZXhwZWN0ZWQgb25lLlxuXHRcdFx0Y29uc3QgZXh0ZXJuYWxDbGllbnRFbmRwb2ludFVybCA9IGxvY2F0aW9uLmhyZWYucmVwbGFjZShcblx0XHRcdFx0XCJwcm92aWRlci5odG1sXCIsXG5cdFx0XHRcdGAke2Zpbi5tZS5pZGVudGl0eS51dWlkLnRvTG9jYWxlTG93ZXJDYXNlKCkucmVwbGFjZUFsbChcIiBcIiwgXCItXCIpfS1leHRlcm5hbC1jbGllbnRzLmpzb25gXG5cdFx0XHQpO1xuXHRcdFx0bGV0IGZldGNoZWRFeHRlcm5hbENsaWVudHM6IEV4dGVybmFsQ2xpZW50W10gPSBbXTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZXh0ZXJuYWxDbGllbnRFbmRwb2ludFVybCk7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuXHRcdFx0XHRcdGZldGNoZWRFeHRlcm5hbENsaWVudHMgPSAoYXdhaXQgcmVzcG9uc2UuanNvbigpKSBhcyBFeHRlcm5hbENsaWVudFtdO1xuXHRcdFx0XHRcdHRoaXMuZXh0ZXJuYWxDbGllbnRzID0gZmV0Y2hlZEV4dGVybmFsQ2xpZW50cztcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhgRmV0Y2hlZCBleHRlcm5hbCBjbGllbnRzIGZyb20gJHtleHRlcm5hbENsaWVudEVuZHBvaW50VXJsfTpgLCBmZXRjaGVkRXh0ZXJuYWxDbGllbnRzKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcdFx0XHRgRmFpbGVkIHRvIGZldGNoIGV4dGVybmFsIGNsaWVudHMgZnJvbSAke2V4dGVybmFsQ2xpZW50RW5kcG9pbnRVcmx9LiBVc2luZyBkZWZhdWx0IGV4dGVybmFsIGNsaWVudHMuIFJlc3BvbnNlIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXG5cdFx0XHRcdFx0YEVycm9yIGZldGNoaW5nIGV4dGVybmFsIGNsaWVudHMgZnJvbSAke2V4dGVybmFsQ2xpZW50RW5kcG9pbnRVcmx9LiBVc2luZyBkZWZhdWx0IGV4dGVybmFsIGNsaWVudHMuIEVycm9yOmAsXG5cdFx0XHRcdFx0ZXJyb3Jcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdGZvciAoY29uc3QgZXh0ZXJuYWxDbGllbnQgb2YgZmV0Y2hlZEV4dGVybmFsQ2xpZW50cykge1xuXHRcdFx0XHQvLyBubyBuZWVkIHRvIGF3YWl0IHRoZXNlIGNvbm5lY3Rpb25zIGFzIHRoZXkgbWF5IG5vdCBiZSBydW5uaW5nIHlldCBhbmQgd2lsbCByZXNvbHZlIHdoZW4gdGhleSBkbyBiZWNvbWUgYXZhaWxhYmxlLlxuXHRcdFx0XHR0aGlzLnZhbGlkYXRlQW5kQ29ubmVjdChleHRlcm5hbENsaWVudCkuY2F0Y2goKGVycm9yKSA9PlxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIGNvbm5lY3RpbmcgdG8gZXh0ZXJuYWwgYnJva2VyICR7ZXh0ZXJuYWxDbGllbnQudXVpZH06YCwgZXJyb3IpXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogU2V0cyB1cCB0aGUgY29ubmVjdGlvbiB0byBhbiBleHRlcm5hbCBicm9rZXIgYnkgdmFsaWRhdGluZyB0aGUgY29ubmVjdGlvbiBhbmQgdGhlbiBpbml0aWFsaXppbmcgdGhlIGJyb2tlci5cblx0XHQgKiBAcGFyYW0gZXh0ZXJuYWxDbGllbnQgdGhlIGV4dGVybmFsIGNsaWVudCBpbmZvcm1hdGlvbiB1c2VkIHRvIGNvbm5lY3QgdG8gdGhlIGV4dGVybmFsIHBsYXRmb3JtIGFuZCBzZXR1cCB0aGUgY29udGV4dCBzaGFyaW5nIGdyb3Vwcy5cblx0XHQgKiBAcmV0dXJucyB2b2lkXG5cdFx0ICovXG5cdFx0cHJpdmF0ZSBhc3luYyB2YWxpZGF0ZUFuZENvbm5lY3QoZXh0ZXJuYWxDbGllbnQ6IEV4dGVybmFsQ2xpZW50KTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0XHRjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgY29ubmVjdFRvRXh0ZXJuYWxDbGllbnQoZXh0ZXJuYWxDbGllbnQpO1xuXHRcdFx0dGhpcy5leHRlcm5hbENsaWVudENvbm5lY3Rpb25zLnB1c2goY29ubmVjdGlvbik7XG5cdFx0XHRhd2FpdCBjb25uZWN0aW9uLmNsaWVudC5vbkRpc2Nvbm5lY3Rpb24oKGV2ZW50KSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUud2FybihgQ29ubmVjdGlvbiB0byBleHRlcm5hbCBicm9rZXIgJHtldmVudC5icm9rZXJOYW1lfSB3YXMgbG9zdC5gKTtcblx0XHRcdFx0Ly8gcmVtb3ZlIHRoZSBjb25uZWN0aW9uIGZyb20gdGhlIGV4dGVybmFsQ29ubmVjdGlvbnMgYXJyYXlcblx0XHRcdFx0Ly8gWW91IGNhbiBkZWNpZGUgaWYgeW91IHdhbnQgdG8gYXV0b21hdGljYWxseSBhdHRlbXB0IHRvIHJlY29ubmVjdCBoZXJlIG9yIGlmIHlvdSB3YW50IHRvIHJlcXVpcmUgYSBtYW51YWwgcmVmcmVzaCB0byByZWNvbm5lY3QuXG5cdFx0XHRcdHRoaXMuZXh0ZXJuYWxDbGllbnRDb25uZWN0aW9ucyA9IHRoaXMuZXh0ZXJuYWxDbGllbnRDb25uZWN0aW9ucy5maWx0ZXIoXG5cdFx0XHRcdFx0KGMpID0+IGMuY29ubmVjdGlvbklkICE9PSBjb25uZWN0aW9uLmNvbm5lY3Rpb25JZFxuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBuZXcgT3ZlcnJpZGUoKTtcbn1cblxuZmluLlBsYXRmb3JtLmluaXQoeyBpbnRlcm9wT3ZlcnJpZGUgfSkuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=