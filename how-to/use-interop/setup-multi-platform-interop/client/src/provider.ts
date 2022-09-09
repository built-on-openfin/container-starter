import type {
	PlatformInteropClient,
	PlatformContextGroups,
	PlatformContextGroup,
	ColorInteropClient,
	ExternalInteropClient,
	ExternalClientMap,
	ExternalContextGroup,
	ExternalContextGroups,
	ExternalContext
} from "./shapes";
/**
 * @function interopOverride function passed to Platform.init as an InitOption
 * @param InteropBroker class used to extend the custom override subclass.
 * @param provider channel provider for the initialized platform.
 * @param options default options specified in the manifest attribute "platform.interopBrokerConfiguration".
 * @param args adds any additional parameters passed on instantiation of a new Override instance.
 */
function interopOverride(
	InteropBroker: OpenFin.Constructor<OpenFin.InteropBroker>,
	provider?: OpenFin.ChannelProvider,
	options?: OpenFin.InteropBrokerOptions,
	...args: unknown[]
): OpenFin.InteropBroker {
	/**
	 * @remarks
	 * Class that inherits the public InteropBroker methods that allows you to override existing InteropBroker methods and add any custom logic to the returned InteropBroker instance used by your platform.
	 */
	class Override extends InteropBroker {
		public externalBroker: string;

		public externalClients: ExternalClientMap;

		public overrideArgs: unknown[];

		constructor(
			overrideProvider: OpenFin.ChannelProvider,
			overrideOpts: OpenFin.InteropBrokerOptions,
			...overrideArgs: unknown[]
		) {
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
		public async initializeBrokers(): Promise<void> {
			const platform: OpenFin.Platform = fin.Platform.wrapSync({ uuid: this.externalBroker });

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
		public async setupContextGroups(): Promise<void> {
			const externalInteropClient: ExternalInteropClient = fin.Interop.connectSync(this.externalBroker, {});
			const externalContextGroups: ExternalContextGroups = await externalInteropClient.getContextGroups();

			const platformInteropClient: PlatformInteropClient = fin.Interop.connectSync(fin.me.uuid, {});
			const platformContextGroups: PlatformContextGroups = await platformInteropClient.getContextGroups();

			// Array of ExternalClientMap Promises
			const externalContextGroupPromises: Promise<ExternalClientMap>[] = externalContextGroups.map(
				async (externalContextGroupInfo: ExternalContextGroup): Promise<ExternalClientMap> => {
					// check to see if a Platform Client's context group has any of the channels as a externalContextGroup
					const hasPlatformContextGroup: boolean = platformContextGroups.some(
						({ id }: PlatformContextGroup) => id === externalContextGroupInfo.id
					);

					if (hasPlatformContextGroup) {
						const colorClient: ColorInteropClient = fin.Interop.connectSync(this.externalBroker, {});
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
						const contextHandler = async (context: ExternalContext): Promise<void> => {
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
				}
			);
			try {
				await Promise.all(externalContextGroupPromises);
			} catch (error) {
				throw new Error(`Not able to setup handlers for external brokers: ${error}`);
			}
		}

		/**
		 * @method setContextOnExternalClient
		 * @param context context object passed in from the @setContext method.
		 * @param clientIdentity clientIdentity object passed in from the @setContext method.
		 * @remarks if the externalClientsMap has previously derived contextGroup get the corresponding colorClient and set the context on the matching colorClient.
		 */

		public async setContextOnExternalClient(
			context: ExternalContext,
			clientIdentity: OpenFin.ClientIdentity
		) {
			// use accessor syntax for this.getClientState as it is not a public inherited method from InteropBroker
			// eslint-disable-next-line @typescript-eslint/dot-notation
			const state = this["getClientState"](clientIdentity);
			const ctxGroupId = state.contextGroupId as string;
			if (this.externalClients.has(ctxGroupId)) {
				const colorClient: ColorInteropClient = this.externalClients.get(ctxGroupId);
				await colorClient.setContext(context);
			}
		}

		/**
		 * @override @method setContext
		 * @param payload object that is passed in when set context is called from an OpenFin entity using the interop api.
		 * @param clientIdentity object containing the clientIdentity of the sender.
		 * @example // please refer to the working examples code panel in this projects interface.
		 */
		public async setContext(
			payload: { context: ExternalContext },
			clientIdentity: OpenFin.ClientIdentity
		): Promise<void> {
			// create a new context object for interop setContext calls from the interop object within the Platform Client's windows or views.
			const { context } = payload;
			if (context._clientInfo) {
				const {
					_clientInfo: { uuid }
				} = context;
				// set context on external broker
				if ((uuid !== fin.me.uuid && uuid !== this.externalBroker) || uuid === this.externalBroker) {
					const newContext = context;
					delete newContext._clientInfo;
					super.setContext({ ...payload, context: newContext }, clientIdentity);
				}
			} else {
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
