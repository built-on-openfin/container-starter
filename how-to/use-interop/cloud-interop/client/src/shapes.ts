import type { CloudInteropOverrideParams } from "@openfin/cloud-interop";
import type { ConnectParameters } from "@openfin/cloud-interop-core-api";

/**
 * Settings for the cloud interop provider.
 */
export interface CloudInteropProviderSettings {
	/**
	 * Is the cloud interop provider enabled
	 */
	enabled: boolean;

	/**
	 * The connect parameters for the cloud interop provider.
	 */
	connectParams: CloudInteropOverrideParams & ConnectParameters;
}

/**
 * Custom settings for the application
 */
export interface CustomSettings {
	/**
	 * cloud related config
	 */
	cloudInteropProvider: CloudInteropProviderSettings;
}
