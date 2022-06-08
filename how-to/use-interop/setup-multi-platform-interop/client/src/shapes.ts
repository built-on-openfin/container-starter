import OpenFin from '@openfin/core';
export type ExternalClientMap = Map<OpenFin.ApplicationIdentity['uuid'], ColorClientsMap>;
export type ColorClientsMap = Map<OpenFin.ContextGroupInfo['id'], ColorInteropClient>;
export type BrokerUuid = OpenFin.ApplicationIdentity['uuid'];
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
export interface InteropBrokerContext extends OpenFin.Context {
    id?: {
        [key: string]: string;
    };
    name?: string;
    type: string;
    uuid: BrokerUuid;
}
export type InteropClientContext = OpenFin.Context;
