import { cloudInteropOverride } from "@openfin/cloud-interop";
import type OpenFin from "@openfin/core";
import { getManifestCustomSettings } from "./settings";

window.addEventListener("DOMContentLoaded", async () => {
	const customSettings = await getManifestCustomSettings();
	const interopOverrides = [];

	if (customSettings?.cloudInteropProvider?.enabled) {
		const { connectParams, token } = customSettings.cloudInteropProvider;
		if (connectParams.authenticationType === "jwt" && connectParams.jwtAuthenticationParameters && token) {
			connectParams.jwtAuthenticationParameters.jwtRequestCallback = (): string | object => token;
		}
		const initializedCloudInteropOverride = (await cloudInteropOverride(
			connectParams
		)) as unknown as OpenFin.ConstructorOverride<OpenFin.InteropBroker>;
		interopOverrides.push(initializedCloudInteropOverride);
	}
	fin.Platform.init({ interopOverride: interopOverrides }).catch((error) => console.error(error));
});
