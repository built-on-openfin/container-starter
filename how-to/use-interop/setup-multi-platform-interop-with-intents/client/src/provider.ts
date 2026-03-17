import type OpenFin from "@openfin/core";
import { connectToExternalClient, validateBrokerConnection } from "./connection";
import type { ExternalClient, ExternalClientConnection } from "./shapes";
import { randomUUID } from "./util";

/**
 * Override the interop broker.
 * @param InteropBroker class used to extend the custom override subclass.
 * @returns The override.
 */
function interopOverride(InteropBroker: OpenFin.Constructor<OpenFin.InteropBroker>): OpenFin.InteropBroker {
	/**
	 * Class that inherits the public InteropBroker methods that allows you to override existing
	 * InteropBroker methods and add any custom logic to the returned InteropBroker instance used by your platform.
	 */
	class Override extends InteropBroker {
		public externalClients: ExternalClient[] = [];

		public externalClientConnections: ExternalClientConnection[] = [];

		/**
		 * Initialize and connect to external broker.
		 */
		constructor() {
			super();
			this.initializeConnections().catch((error) => console.error(error));
		}

		/**
		 * Handle the information for and intent.
		 * @param intentOptions The intent options.
		 * @param clientIdentity The client.
		 * @returns The intents mapped to app metadata.
		 */
		public async handleInfoForIntent(
			intentOptions: OpenFin.InfoForIntentOptions,
			clientIdentity: OpenFin.ClientIdentity
		): Promise<{
			intent: { name: string; displayName?: string };
			apps: (OpenFin.FDC3.v2_0.AppMetadata)[];
		}> {
			console.log("Received request for info for intent:", intentOptions, "From client identity:", clientIdentity);
			// This is where you would check the intentOptions against your directory of applications and their supported intents
			// and return the appropriate app metadata for the intent so that the client can make an informed decision about which app to route the intent to.
			// you can also go beyond checking just the intent name and also check the context types, etc...
			const response: {
			intent: { name: string; displayName?: string };
			apps: (OpenFin.FDC3.v2_0.AppMetadata)[];
			} = {
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

			if(response.apps.length === 0) {
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
		public async handleFiredIntent(
			intent: OpenFin.Intent<OpenFin.IntentMetadata<OpenFin.FDC3.v2_0.AppIdentifier>>,
			clientIdentity: OpenFin.ClientIdentity
		): Promise<{ source: { appId: string }, intent: string }> {
			console.log("Received request for a raised intent:", intent, "For client identity:", clientIdentity);
			// Validation would have occurred in isActionAuthorized but you could do additional validation here if needed before handling the intent.

			// This is where you could check your application directory to see if a specific app should handle the request or if you should
			// present an intent resolution picker to the user to choose which app they want to handle the intent, etc...

			// For a full implementation of an interop broker you can check out the workspace platform starter example in the built-on-openfin/workspace-starter repo.

			// This example is very basic.
			// * If an intent request comes in we check to see if any external clients match it (this example will pick the first matching external client but in a real world you would have an intent resolver).
			// * If we don't find a matching external client then we launch a webpage with the intent name and fire the intent to it.

			const intentName = intent.name;
			let targetExternalClient: ExternalClient | undefined;

			if(intent.metadata?.target?.appId && intent.metadata?.target?.appId !== fin.me.identity.uuid) {
				console.log(`Intent ${intentName} has a target app ${intent.metadata.target.appId}. Attempting to find a matching external client for it.`);
				targetExternalClient = this.externalClients
				.find((externalClient) => externalClient.uuid === intent.metadata?.target?.appId &&
				externalClient.interop.intents?.listensFor &&
				intentName in externalClient.interop.intents.listensFor);
				if (targetExternalClient) {
					if(targetExternalClient.appId && targetExternalClient.appId !== intent.metadata?.target?.appId) {
							console.warn(`The intent ${intentName} has a target appId ${intent.metadata.target.appId} that matches the uuid of an external client but it does not match the preferred appId for that external client. Updating it to ${targetExternalClient.appId}`);
							intent.metadata.target = { appId: targetExternalClient.appId,
								instanceId: intent.metadata.target.instanceId };
						}
					console.log(`Found matching external client ${targetExternalClient.uuid} for intent ${intentName} with target appId ${intent.metadata?.target?.appId}. Routing intent to it.`);
				} else {
					throw new Error("TargetAppUnavailable");
				}
			} else {
				// no appId specified in the target or it matches the current platform so go with default logic.
				targetExternalClient = this.externalClients
				.find((externalClient) => externalClient.interop.intents?.listensFor &&
				intentName in externalClient.interop.intents.listensFor);
			}

			if (targetExternalClient) {
				console.log(`Found matching external client ${targetExternalClient.uuid} for intent ${intentName}. Routing intent to it.`);
				const targetConnection = this.externalClientConnections
				.find((connection) => connection.uuid === targetExternalClient.uuid && connection.client);
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
			const targetIdentity = { uuid: fin.me.identity.uuid, name: `${intentName.toLocaleLowerCase()}-${randomUUID()}` };
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
		public async isConnectionAuthorized(id: OpenFin.ClientIdentity, payload?: unknown): Promise<boolean> {
			console.log("isConnectionAuthorized called with id", id, "payload", payload);
			if(id.uuid === fin.me.uuid) {
				console.log("Connection authorized for internal content", id.uuid);
				return true;
			}
			const allowedConnection = this.externalClients.find((externalClient) => externalClient.uuid === id.uuid);
			if(!allowedConnection) {
				console.log("Connection not authorized for external client", id.uuid);
				return false;
			}
			// The uuid is allowed but for external clients you want to validate more than that.
			// This is a very basic example where we are using the interopKey as a shared secret between the platforms to validate the connection
			// but in a real world scenario you would likely want to have a more robust validation process that could include checking a token,
			// making a request to a service with the provided custom data, etc...
			const isValid = await validateBrokerConnection(allowedConnection, payload ?? {});
			if(isValid) {
				console.log("Connection authorized for external client", id.uuid);
			} else {
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
		public async isActionAuthorized(action: string, payload: unknown,
			identity: OpenFin.ClientIdentity): Promise<boolean> {
			console.log("isActionAuthorized called with action", action, "payload", payload, "identity", identity);
			if(identity.uuid === fin.me.uuid) {
				console.log("Action authorized for internal content", identity.uuid);
				return true;
			}
			const connectionRules = this.externalClients
			.find((externalClient) => externalClient.uuid === identity.uuid);

			if(!connectionRules) {
				// all connections should have been blocked in isConnectionAuthorized but we will do a final check here to be safe and
				// we need to know what an external client is allowed to do.
				console.log("Action not authorized for external client", identity.uuid);
				return false;
			}
			if(action === "joinContextGroup" && payload && typeof payload === "object" && "contextGroupId" in payload && connectionRules.interop.userChannels?.allowedChannels) {
				// if we have defined allowed channels for this external client then we will check if the context group they are trying to join is in the allowed channels list. If it is not we will reject the action.
				const allowedChannels = connectionRules.interop.userChannels.allowedChannels;
				const isAllowedChannel = allowedChannels.includes(payload.contextGroupId as string);
				if (!isAllowedChannel) {
					console.warn(`Connection request from ${JSON.stringify(identity)} attempted to join context group ${payload.contextGroupId} which is not in the allowed channels list and was rejected.`);
					return false;
				}
				return true;
			}
			if(action === "intentHandlerRegistered" && payload && typeof payload === "object" && "handlerId" in payload && payload.handlerId === "intent-handler-ViewAnalysis" && connectionRules.interop?.intents?.listensFor) {
				const allowedIntentListeners = Object.keys(connectionRules.interop.intents.listensFor);
				const requestedIntent = payload.handlerId.replace("intent-handler-", "");
				if (!allowedIntentListeners.includes(requestedIntent)) {
					console.warn(`Connection request from ${JSON.stringify(identity)} attempted to register an intent handler for ${requestedIntent} which is not in the allowed intents list and was rejected.`);
					return false;
				}
				return true;
			}
			if(action === "fireIntent" && payload && typeof payload === "object" && "name" in payload && connectionRules.interop?.intents?.raises) {
					const allowedIntentsToRaise = Object.keys(connectionRules.interop.intents.raises);
					const requestedIntent = payload.name as string;
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
		public async initializeConnections(): Promise<void> {
			// This is just a basic example where you are calling a service to get a list of external clients for the current user. If you put the url in your manifest then
			// have your platform validate that the current manifest is the expected one.
			const externalClientEndpointUrl = location.href.replace("provider.html", `${fin.me.identity.uuid.toLocaleLowerCase().replaceAll(" ", "-")}-external-clients.json`);
			let fetchedExternalClients: ExternalClient[] = [];
			try {
				const response = await fetch(externalClientEndpointUrl);
				if (response.ok) {
					fetchedExternalClients = await response.json() as ExternalClient[];
					this.externalClients = fetchedExternalClients;
					console.log(`Fetched external clients from ${externalClientEndpointUrl}:`, fetchedExternalClients);
				} else {
					console.warn(`Failed to fetch external clients from ${externalClientEndpointUrl}. Using default external clients. Response status: ${response.status}`);
				}
			} catch (error) {
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
		private async validateAndConnect(externalClient: ExternalClient): Promise<void> {
			const connection = await connectToExternalClient(externalClient);
			this.externalClientConnections.push(connection);
			await connection.client.onDisconnection((event) => {
				console.warn(`Connection to external broker ${event.brokerName} was lost.`);
				// remove the connection from the externalConnections array
				// You can decide if you want to automatically attempt to reconnect here or if you want to require a manual refresh to reconnect.
				this.externalClientConnections = this.externalClientConnections
				.filter((c) => c.connectionId !== connection.connectionId);
			});
		}
	}
	return new Override();
}

fin.Platform.init({ interopOverride }).catch((error) => console.error(error));
