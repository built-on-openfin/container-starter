import { cloudInteropOverride,CloudInteropOverrideParams } from "@openfin/cloud-interop";
import type OpenFin from "@openfin/core";
import { getManifestCustomSettings } from "./settings";

window.addEventListener("DOMContentLoaded", async () => {
	const customSettings = await getManifestCustomSettings();
	const interopOverrides = [];

	// TEMP WORKAROUND TO CREATE CONNECT PARAMS

	const jwtConnectParams:CloudInteropOverrideParams = {
		url: "<PLEASE ASK OPENFIN FOR A URL>",
		authenticationType: "jwt",
  		jwtAuthenticationParameters: {
    		authenticationId: "<PLEASE ASK OPENFIN FOR THE AUTH ID>",
    		jwtRequestCallback: () => "<PLEASE ASK OPENFIN FOR JWT DETAILS TO CREATE TOKEN>"
  		},
		platformId: customSettings?.cloudInteropProvider?.connectParams?.platformId as string,
		sourceId: customSettings?.cloudInteropProvider?.connectParams?.sourceId,
		sourceDisplayName: customSettings?.cloudInteropProvider?.connectParams?.sourceDisplayName
	}

	const basicConnectParams:CloudInteropOverrideParams = {
		url: "<PLEASE ASK OPENFIN FOR A URL>",
		authenticationType: "basic",
		basicAuthenticationParameters: {
			username: "<PLEASE ASK OPENFIN FOR A USER ID>",
			password: "<PLEASE ASK OPENFIN FOR A PASSWORD>"
		},
		platformId: customSettings?.cloudInteropProvider?.connectParams?.platformId as string,
		sourceId: customSettings?.cloudInteropProvider?.connectParams?.sourceId,
		sourceDisplayName: customSettings?.cloudInteropProvider?.connectParams?.sourceDisplayName
	}

	// END 

	if (customSettings?.cloudInteropProvider?.enabled) {
		const initializedCloudInteropOverride = (await cloudInteropOverride(
		// TEMP WORKAROUND
		//customSettings?.cloudInteropProvider?.connectParams
		//basicConnectParams
		jwtConnectParams
		)) as unknown as OpenFin.ConstructorOverride<OpenFin.InteropBroker>;
		interopOverrides.push(initializedCloudInteropOverride);
	}
	fin.Platform.init({ interopOverride: interopOverrides }).catch((error) => console.error(error));
});
