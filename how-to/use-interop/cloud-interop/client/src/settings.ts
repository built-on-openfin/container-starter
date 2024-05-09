import type OpenFin from "@openfin/core";
import type { CustomSettings } from "./shapes";

/**
 * Load the customSettings section from the application manifest.
 * @returns The custom settings from the manifest.
 */
export async function getManifestCustomSettings(): Promise<CustomSettings | undefined> {
	const app = await fin.Application.getCurrent();
	const manifest: OpenFin.Manifest & { customSettings?: CustomSettings } = await app.getManifest();
	return manifest.customSettings;
}
