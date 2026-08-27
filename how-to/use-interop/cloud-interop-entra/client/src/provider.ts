import { cloudInteropOverride } from "@openfin/cloud-interop";
import type OpenFin from "@openfin/core";
import { getEntraSettings, signInToEntra, wasSignedOut } from "./entra";
import { getManifestCustomSettings } from "./settings";
import type { CustomSettings, EntraTokenDetails } from "./shapes";

const CONTAINER_MESSAGE = "This example needs to run inside of a HERE Container.";
const NO_TOKEN_VALUE = "Not signed in";
const NO_MANIFEST_VALUE = "Unknown, the manifest is only available inside of the container";
const SIGN_OUT_LABEL = typeof fin === "undefined" ? "Sign out" : "Sign out and quit";
const SIGNING_OUT_MESSAGE =
	typeof fin === "undefined"
		? "Signing out of Microsoft Entra ID..."
		: "Signing out of Microsoft Entra ID, the platform will quit once it completes...";

window.addEventListener("DOMContentLoaded", async () => {
	if (wasSignedOut() && typeof fin !== "undefined") {
		// Signing out navigated the provider window to Microsoft, which ended the platform that
		// was running in this document, so quit rather than leave it half started. In a browser
		// there is no platform, so the sign in below simply starts again.
		showMessage("Signed out of Microsoft Entra ID, quitting the platform...");

		try {
			await fin.Application.getCurrentSync().quit(true);
		} catch (error) {
			showMessage(`Signed out, but the platform could not be quit. ${formatError(error)}`);
			console.error("Unable to quit the platform after signing out", error);
		}

		return;
	}

	// Sign the user in before any HERE related code runs so that a token is available
	// by the time the platform and its cloud interop override are initialized.
	const entraSettings = getEntraSettings(window.location.search);
	let jwtRequestCallback: (() => string) | undefined;
	let tokenDetails: EntraTokenDetails | undefined;
	let signInMessage = "Microsoft Entra ID sign in skipped, no clientId was specified on the query string.";

	if (entraSettings !== undefined) {
		try {
			const signIn = await signInToEntra(entraSettings);

			if (signIn.isRedirecting) {
				// The page is navigating to the Microsoft sign in page, so the platform is
				// initialized on the page load that follows the redirect back.
				showMessage("Redirecting to the Microsoft sign in page...");
				return;
			}

			jwtRequestCallback = signIn.jwtRequestCallback;
			tokenDetails = signIn.tokenDetails;
			signInMessage = signIn.account
				? `Signed in to Microsoft Entra ID as ${signIn.account}.`
				: "Signed in to Microsoft Entra ID.";

			if (signIn.signOut) {
				setupSignOut(signIn.signOut);
			}
		} catch (error) {
			signInMessage = `Microsoft Entra ID sign in failed. ${formatError(error)}`;
			console.error("Microsoft Entra ID sign in failed", error);
		}
	}

	if (typeof fin === "undefined") {
		showMessage(`${signInMessage} ${CONTAINER_MESSAGE}`);
		showDetails(NO_MANIFEST_VALUE, tokenDetails);
		return;
	}

	showMessage(signInMessage);

	const customSettings = await getManifestCustomSettings();
	showDetails(customSettings?.cloudInteropProvider?.enabled ? "Yes" : "No", tokenDetails);

	await initializePlatform(customSettings, jwtRequestCallback);
});

/**
 * Show whether cloud interop is enabled, along with the values HERE needs to validate the token,
 * so that they can be read from the page instead of the console.
 * @param cloudInteropEnabled Whether cloud interop is enabled in the manifest custom settings.
 * @param tokenDetails The values HERE needs, or undefined if no token was acquired.
 */
function showDetails(cloudInteropEnabled: string, tokenDetails?: EntraTokenDetails): void {
	setText("#cloud-interop-enabled", cloudInteropEnabled);
	showTokenDetails(tokenDetails);
	document.querySelector("#details")?.classList.remove("hidden");
}

/**
 * Show the values HERE needs to validate the token.
 * @param tokenDetails The values HERE needs, or undefined if no token is currently held.
 */
function showTokenDetails(tokenDetails?: EntraTokenDetails): void {
	setText("#token-iss", tokenDetails?.iss ?? NO_TOKEN_VALUE);
	setText("#token-aud", tokenDetails?.aud ?? NO_TOKEN_VALUE);
	setText("#token-jwks-uri", tokenDetails?.jwksUri ?? NO_TOKEN_VALUE);
}

/**
 * Show the sign out button and sign the user out when it is clicked. Signing out redirects this
 * window to Microsoft, which ends the platform running in it, so inside the container the button
 * says so and the application quits on the page load that follows.
 * @param signOut The function that signs the user out of Microsoft Entra ID.
 */
function setupSignOut(signOut: () => Promise<void>): void {
	const signOutButton = document.querySelector<HTMLButtonElement>("#sign-out");

	if (!signOutButton) {
		return;
	}

	signOutButton.textContent = SIGN_OUT_LABEL;
	signOutButton.classList.remove("hidden");

	signOutButton.addEventListener("click", async () => {
		signOutButton.disabled = true;
		showMessage(SIGNING_OUT_MESSAGE);

		try {
			// This does not return, as the page redirects to Microsoft and unloads.
			await signOut();
		} catch (error) {
			signOutButton.disabled = false;
			showMessage(`Microsoft Entra ID sign out failed. ${formatError(error)}`);
			console.error("Microsoft Entra ID sign out failed", error);
		}
	});
}

/**
 * Initialize the platform, applying the cloud interop override if it has been enabled.
 * @param customSettings The custom settings from the manifest.
 * @param jwtRequestCallback The callback that returns the Microsoft Entra ID token, if a user signed in.
 */
async function initializePlatform(
	customSettings?: CustomSettings,
	jwtRequestCallback?: () => string
): Promise<void> {
	const interopOverrides: OpenFin.ConstructorOverride<OpenFin.InteropBroker>[] = [];

	if (customSettings?.cloudInteropProvider?.enabled) {
		const { connectParams, token } = customSettings.cloudInteropProvider;

		if (connectParams.authenticationType === "jwt" && connectParams.jwtAuthenticationParameters) {
			// The Microsoft Entra ID token is preferred, but a token can also be pasted into
			// the manifest custom settings when testing without an app registration.
			if (jwtRequestCallback !== undefined) {
				connectParams.jwtAuthenticationParameters.jwtRequestCallback = jwtRequestCallback;
			} else if (token) {
				connectParams.jwtAuthenticationParameters.jwtRequestCallback = (): string | object => token;
			} else {
				console.error("Cloud interop is configured to use jwt authentication but no token is available.");
			}
		}

		const initializedCloudInteropOverride = (await cloudInteropOverride(
			connectParams
		)) as unknown as OpenFin.ConstructorOverride<OpenFin.InteropBroker>;
		interopOverrides.push(initializedCloudInteropOverride);
	}

	fin.Platform.init({ interopOverride: interopOverrides }).catch((error) => console.error(error));
}

/**
 * Show a message on the page. The provider window is hidden inside the container,
 * so this is only visible when the page is opened in a browser.
 * @param message The message to show.
 */
function showMessage(message: string): void {
	setText("#status", message);
	console.log(message);
}

/**
 * Set the text of an element on the page.
 * @param selector The selector for the element to set the text of.
 * @param text The text to show.
 */
function setText(selector: string, text: string): void {
	const element = document.querySelector(selector);

	if (element) {
		element.textContent = text;
	}
}

/**
 * Get the message from an error of an unknown type.
 * @param error The error to get the message from.
 * @returns The message for the error.
 */
function formatError(error: unknown): string {
	if (error instanceof Error) {
		return error.message;
	}

	return String(error);
}
