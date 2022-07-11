import OpenFin, { fin } from "@openfin/core";
import {
	ExternalClientMap,
	ExternalInteropClient,
	ExternalContextGroups,
	PlatformInteropClient,
	PlatformContextGroups,
	ExternalContextGroup,
	ColorInteropClient,
	PlatformContextGroup,
	ExternalContext
} from "./shapes";

function interopOverride(
	InteropBroker: OpenFin.Constructor<OpenFin.InteropBroker>,
	provider?: OpenFin.ChannelProvider,
	options?: OpenFin.InteropBrokerOptions,
	...args: unknown[]
): OpenFin.InteropBroker {
	class Override extends InteropBroker {
		public externalBroker: string;

		public externalClients: ExternalClientMap;

		constructor(
			overrideProvider: OpenFin.ChannelProvider,
			overrideOpts: OpenFin.InteropBrokerOptions,
			overrideArgs: unknown[]
		) {
			super(overrideProvider, overrideOpts, ...overrideArgs);
			this.externalBroker = "platform-2";
			this.externalClients = new Map();
			this.initializeBrokers().catch((error) => console.error(error));
		}

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

		public async setupContextGroups(): Promise<void> {
			// client: create a InteropClient instance by connecting to a member of Override.externalBrokers.
			// externalContextGroups: using the created client instance, retrieve the externalBroker's context groups.
			const externalInteropClient: ExternalInteropClient = fin.Interop.connectSync(this.externalBroker, {});
			const externalContextGroups: ExternalContextGroups = await externalInteropClient.getContextGroups();

			// client: create a InteropClient instance by connecting to the current platforms interop broker.
			// platformContextGroups: using the created client instance, retrieve the current platform context groups.
			const platformInteropClient: PlatformInteropClient = fin.Interop.connectSync(fin.me.uuid, {});
			const platformContextGroups: PlatformContextGroups = await platformInteropClient.getContextGroups();

			// These context group by differ from platformContextGroups -- we need to see what externalContextGroup are defined and create a client
			const externalContextGroupPromises: Promise<ExternalClientMap>[] = externalContextGroups.map(
				async (externalContextGroupInfo: ExternalContextGroup): Promise<ExternalClientMap> => {
					// check to see if a Platform Client's context group has any of the channels as a externalContextGroup
					const hasPlatformContextGroup: boolean = platformContextGroups.some(
						({ id }: PlatformContextGroup) => id === externalContextGroupInfo.id
					);

					if (hasPlatformContextGroup) {
						// colorClient: create a InteropClient instance by connecting to a member of Override.externalBrokers at runtime.
						// join each externalContextGroup from the colorClient
						const colorClient: ColorInteropClient = fin.Interop.connectSync(this.externalBroker, {});
						await colorClient.joinContextGroup(externalContextGroupInfo.id);

						// When a context is set on the colorClient join the  appropriate channel and set the context on the platform's client
						await colorClient.addContextHandler(async (context: ExternalContext): Promise<void> => {
							await platformInteropClient.joinContextGroup(externalContextGroupInfo.id);
							const newContext = context._clientInfo?.uuid
								? context
								: { ...context, _clientInfo: { uuid: this.externalBroker } };
							await platformInteropClient.setContext(newContext);
						});
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

		public async setContextOnExternalClient(
			context: ExternalContext,
			clientIdentity: OpenFin.ClientIdentity
		) {
			// If we have defined an External Client(s) we retrieve the details for the External Client based on the current instance of the Override class
			// The <state> variable here represents a client instance calls made from the interop object within the Platform Client's windows or views.
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			const state: { contextGroupId: string } = this.getClientState(clientIdentity);

			if (this.externalClients.has(state.contextGroupId)) {
				const colorClient: ColorInteropClient = this.externalClients.get(state.contextGroupId);
				await colorClient.setContext(context);
			}
		}

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
	const override = new Override(provider, options, args);
	return override;
}

fin.Platform.init({ interopOverride }).catch((error) => console.error(error));
