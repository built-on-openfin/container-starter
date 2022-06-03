import OpenFin, { fin } from '@openfin/core';
import { ExternalClientMap, ColorClientMap, BrokerUuid, InteropBrokerContext, ExternalInteropClient, ExternalContextGroups, PlatformInteropClient, PlatformContextGroups, ExternalContextGroup, ColorInteropClient, PlatformContextGroup } from './shapes';


function interopOverride(InteropBroker: OpenFin.Constructor<OpenFin.InteropBroker>,
    provider?: OpenFin.ChannelProvider,
    options?: OpenFin.InteropBrokerOptions,
    ...args: any[]): OpenFin.InteropBroker {
        class Override extends InteropBroker {
        
        externalBrokers: BrokerUuid[];
        externalClients: ExternalClientMap;
        #contextUuid
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

            // initialize map for tracking color channels from 
            const colorClientsMap: ColorClientMap = new Map();

            // These context group by differ from platformContextGroups,
            // We need to see what externalContextGroup are defined and create a client  
            externalContextGroups.forEach(async (externalContextGroupInfo: ExternalContextGroup): Promise<void> => {

                // colorClient: create a InteropClient instance by connecting to a member of Override.externalBrokers at runtime.
                // join each externalContextGroup from the colorClient
                const colorClient: ColorInteropClient = fin.Interop.connectSync(uuid, {});
                await colorClient.joinContextGroup(externalContextGroupInfo.id);

                // check to see if a Platform Client's context group have any of the channels as a externalContextGroup
                const hasPlatformContextGroup: boolean = platformContextGroups.some(({ id }: PlatformContextGroup) => id === externalContextGroupInfo.id);

                if (hasPlatformContextGroup) {
                    // should the context handler context param have a type?
                    await colorClient.addContextHandler(async (context: InteropBrokerContext): Promise<void> => {
                        if (!context.uuid || (context?.uuid && context.uuid !== fin.me.uuid)) {
                            await platformInteropClient.joinContextGroup(externalContextGroupInfo.id);
                            platformInteropClient.setContext({...context});
                        }
                    });
                }

                colorClientsMap.set(externalContextGroupInfo.id, colorClient);
            });

            this.externalClients.set(uuid, colorClientsMap);
        }

        async setContext({context}: {context: InteropBrokerContext}, clientIdentity: OpenFin.ClientIdentity): Promise<void> {
            const newContext = { ...context, uuid: fin.me.uuid };
            if (this.externalClients.size > 0) {
                //@ts-ignore is this private for a reason?  
                const state = this.getClientState(clientIdentity);

                this.externalClients.forEach((colorClientsMap: ColorClientMap, brokerUuid: BrokerUuid) => {
                    if (colorClientsMap.has(state.contextGroupId) && (!context.uuid || (context?.uuid && context.uuid !== brokerUuid))) {
                        const colorClient: OpenFin.InteropClient = colorClientsMap.get(state.contextGroupId);
                        colorClient.setContext(newContext);
                    }
                });
            }

            super.setContext({context: newContext }, clientIdentity);
        }
    }
    return new Override(provider, options, ...args);
}

const platformConfig = fin.me.uuid === 'platform-1' ? { interopOverride } : null;

fin.Platform.init(platformConfig);
