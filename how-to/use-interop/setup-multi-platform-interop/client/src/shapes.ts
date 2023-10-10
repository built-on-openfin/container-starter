import type OpenFin from "@openfin/core";
/**
 * Map of the external clients.
 */
export type ExternalClientMap = Map<OpenFin.ApplicationIdentity["uuid"], OpenFin.InteropClient>;

/**
 * External client context.
 */
export interface ExternalContext extends OpenFin.Context {
	/**
	 * The client information.
	 */
	_clientInfo?: {
		uuid: string;
	};
}
