import OpenFin from '@openfin/core';
export type ExternalClientMap = Map<OpenFin.ApplicationIdentity['uuid'], OpenFin.InteropClient>;
export type ColorClientsMap = Map<OpenFin.ContextGroupInfo['id'], OpenFin.InteropClient>;
export type EntityName = OpenFin.Identity['name'];
export type ExternalInteropClient = OpenFin.InteropClient;
export type ExternalContextGroup = OpenFin.ContextGroupInfo;
export type ExternalContextGroups = ExternalContextGroup[];
export type PlatformInteropClient = OpenFin.InteropClient;
export type PlatformContextGroup = OpenFin.ContextGroupInfo;
export type PlatformContextGroups = OpenFin.ContextGroupInfo[];
export type InteropBrokerProvider = OpenFin.ChannelProvider;
export type ColorInteropClient = OpenFin.InteropClient;
export type InteropContextHandler = OpenFin.ContextHandler;
export type InteropClientContext = OpenFin.Context;
export interface ExternalContext extends OpenFin.Context {
    _clientInfo?: {
        uuid: string;
    }    
}

