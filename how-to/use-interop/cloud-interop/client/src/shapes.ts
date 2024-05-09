import type { CloudInteropOverrideParams } from "@openfin/cloud-interop";

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
	connectParams: CloudInteropOverrideParams;
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
