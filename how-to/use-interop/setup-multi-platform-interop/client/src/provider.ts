import OpenFin, { fin } from '@openfin/core';
import { ExternalClientMap, BrokerUuid, InteropBrokerContext, ExternalInteropClient, ExternalContextGroups, PlatformInteropClient, PlatformContextGroups, ExternalContextGroup, ColorInteropClient, PlatformContextGroup, ColorClientsMap } from './shapes';


function interopOverride(InteropBroker: OpenFin.Constructor<OpenFin.InteropBroker>,
    provider?: OpenFin.ChannelProvider,
    options?: OpenFin.InteropBrokerOptions,
    ...args: any[]): OpenFin.InteropBroker {
    class Override extends InteropBroker {

        externalBrokers: BrokerUuid[];
        externalClients: ExternalClientMap;
        constructor(provider: OpenFin.ChannelProvider, options: OpenFin.InteropBrokerOptions, ...args: any[]) {
            super(provider, options, ...args);
            this.externalBrokers = ['platform-2'];
            this.externalClients = new Map();
            this.initializeBrokers();
        }

        async initializeBrokers(): Promise<void> {
            this.externalBrokers.forEach(async (uuid: BrokerUuid): Promise<void> => {
                const platform: OpenFin.Platform = fin.Platform.wrapSync({ uuid });

                if (await platform.Application.isRunning()) {
                    await this.setupContextGroups(uuid);
                }

                platform.on('platform-api-ready', async () => {
                    await this.setupContextGroups(uuid);
                });

                platform.Application.once('closed', () => {
                    this.externalClients.delete(uuid);
                });
            });
        }

        async setupContextGroups(uuid: BrokerUuid): Promise<void> {

            // client: create a InteropClient instance by connecting to a member of Override.externalBrokers.
            // externalContextGroups: using the created client instance, retrieve the externalBroker's context groups.
            const externalInteropClient: ExternalInteropClient = fin.Interop.connectSync(uuid, {});
            const externalContextGroups: ExternalContextGroups = await externalInteropClient.getContextGroups();

            // client: create a InteropClient instance by connecting to the current platforms interop broker.
            // platformContextGroups: using the created client instance, retrieve the current platform context groups.
            const platformInteropClient: PlatformInteropClient = fin.Interop.connectSync(fin.me.uuid, {});
            const platformContextGroups: PlatformContextGroups = await platformInteropClient.getContextGroups();

            // initialize map for tracking color channels from external context groups.
            const colorClientMap: ColorClientsMap = new Map();

            // These context group by differ from platformContextGroups -- we need to see what externalContextGroup are defined and create a client
            externalContextGroups.forEach(async (externalContextGroupInfo: ExternalContextGroup): Promise<void> => {
                // colorClient: create a InteropClient instance by connecting to a member of Override.externalBrokers at runtime.
                // join each externalContextGroup from the colorClient
                const colorClient: ColorInteropClient = fin.Interop.connectSync(uuid, {});
                await colorClient.joinContextGroup(externalContextGroupInfo.id);

                // check to see if a Platform Client's context group has any of the channels as a externalContextGroup
                const hasPlatformContextGroup: boolean = platformContextGroups.some(({ id }: PlatformContextGroup) => id === externalContextGroupInfo.id);

                if (hasPlatformContextGroup) {
                    // If the Platform Client shares a context group with an External Client
                    // We need to first identify the context has a uuid and it does not match the Platform Client's uuid
                    // We want to join the common context group from the Platform Client and set the context of the common channel 
                    // The key of the colorClient's context handler is to set the External Client's context on the Platform Client's context
                    // by ensuring the context's origin is not from the Platform Client.
                    await colorClient.addContextHandler(async (context: InteropBrokerContext): Promise<void> => {
                        if (!context.uuid || (context?.uuid && context.uuid !== fin.me.uuid)) {
                            await platformInteropClient.joinContextGroup(externalContextGroupInfo.id);
                            platformInteropClient.setContext({ ...context });
                        }
                    });
                }
                colorClientMap.set(externalContextGroupInfo.id, colorClient);
            });
            this.externalClients.set(uuid, colorClientMap);
        }

        async setContext({ context }: { context: InteropBrokerContext }, clientIdentity: OpenFin.ClientIdentity): Promise<void> {
            // create a new context object for interop setContext calls from the interop object within the Platform Client's windows or views.
            const newContext = { ...context, uuid: fin.me.uuid };
            if (this.externalClients.size > 0) {
                // If we have defined an External Client(s) we retrieve the details for the External Client based on the current instance of the Override class
                // The <state> variable here represents a client instance calls made from the interop object within the Platform Client's windows or views.
                // @ts-ignore
                const state = this.getClientState(clientIdentity);

                // For each External Client we need to check to see if we have an Color Client
                // The key of the colorClient's setContext method is to ensure that the context is not getting set on the External Client
                // by ensuring the context's origin is not an External client.
                this.externalClients.forEach((colorClientMap: ColorClientsMap, brokerUuid: BrokerUuid) => {
                    if (colorClientMap.has(state.contextGroupId) && (!context.uuid || (context?.uuid && context.uuid !== brokerUuid))) {
                        const colorClient: OpenFin.InteropClient = colorClientMap.get(state.contextGroupId);
                        colorClient.setContext(newContext);
                    }
                });
            }
            // Set the context on the on Platforms Interop Broker with the updated context object containing the Platform Provider's uuid.
            super.setContext({ context: newContext }, clientIdentity);
        }
    }
    return new Override(provider, options, ...args);
}

const platformConfig = fin.me.uuid === 'platform-1' ? { interopOverride } : null;

fin.Platform.init(platformConfig);
