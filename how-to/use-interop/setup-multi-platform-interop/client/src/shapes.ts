export type ExternalClientMap = Map<OpenFin.ApplicationIdentity["uuid"], OpenFin.InteropClient>;
export type ExternalInteropClient = OpenFin.InteropClient;
export type ExternalContextGroup = OpenFin.ContextGroupInfo;
export type ExternalContextGroups = ExternalContextGroup[];
export type PlatformInteropClient = OpenFin.InteropClient;
export type PlatformContextGroup = OpenFin.ContextGroupInfo;
export type PlatformContextGroups = OpenFin.ContextGroupInfo[];
export type ColorInteropClient = OpenFin.InteropClient;
export interface ExternalContext extends OpenFin.Context {
	_clientInfo?: {
		uuid: string;
	};
}
