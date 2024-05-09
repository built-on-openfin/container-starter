import { cloudInteropOverride } from "@openfin/cloud-interop";
import type OpenFin from "@openfin/core";
import { getManifestCustomSettings } from "./settings";

window.addEventListener("DOMContentLoaded", async () => {
	const customSettings = await getManifestCustomSettings();
	const interopOverrides = [];

	if (customSettings?.cloudInteropProvider?.enabled) {
		const initializedCloudInteropOverride = (await cloudInteropOverride(
			customSettings?.cloudInteropProvider?.connectParams
		)) as unknown as OpenFin.ConstructorOverride<OpenFin.InteropBroker>;
		interopOverrides.push(initializedCloudInteropOverride);
	}
	fin.Platform.init({ interopOverride: interopOverrides }).catch((error) => console.error(error));
});
