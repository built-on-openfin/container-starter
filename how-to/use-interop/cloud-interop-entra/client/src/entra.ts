import {
	InteractionRequiredAuthError,
	PublicClientApplication,
	type AuthenticationResult,
	type RedirectRequest,
	type SilentRequest
} from "@azure/msal-browser";
import type { EntraSettings, EntraSignInResult, EntraTokenDetails } from "./shapes";

const DEFAULT_SCOPES = ["openid", "profile"];
const DEFAULT_TENANT = "organizations";
const REFRESH_BUFFER_RATIO = 0.8;
const FALLBACK_EXPIRY_MS = 3_600_000;
const SETTINGS_STORAGE_KEY = "cloud-interop-entra-settings";
const SIGNED_OUT_STORAGE_KEY = "cloud-interop-entra-signed-out";

/**
 * The claims we read from the ID token so that the values HERE needs can be logged.
 */
interface EntraIdTokenClaims {
	/**
	 * The audience the token was issued for, which is the client id for an ID token.
	 */
	aud?: string;

	/**
	 * The expiry of the token in seconds since the epoch.
	 */
	exp?: number;

	/**
	 * The issuer of the token, which is always tenant specific.
	 */
	iss?: string;

	/**
	 * The id of the tenant the signed in account belongs to.
	 */
	tid?: string;
}

/**
 * Read a value from the query string, treating empty values and placeholders
 * such as &lt;APPLICATION_CLIENT_ID&gt; as if they had not been specified.
 * @param params The query string parameters for the current page.
 * @param name The name of the parameter to read.
 * @returns The configured value or undefined if it has not been configured.
 */
function getConfiguredValue(params: URLSearchParams, name: string): string | undefined {
	const value = params.get(name)?.trim();

	if (value === undefined || value.length === 0 || value.startsWith("<")) {
		return;
	}

	return value;
}

/**
 * Read the Microsoft Entra ID settings from the query string of the current page. This lets the
 * same page be configured from a browser address bar or from the providerUrl in a manifest.
 * @param search The query string to read the settings from.
 * @returns The settings, or undefined if no client id has been configured.
 */
function getEntraSettingsFromQueryString(search: string): EntraSettings | undefined {
	const params = new URLSearchParams(search);
	const clientId = getConfiguredValue(params, "clientId");

	if (clientId === undefined) {
		return;
	}

	const scopes = getConfiguredValue(params, "scopes")
		?.split(",")
		.map((scope) => scope.trim())
		.filter((scope) => scope.length > 0);

	return {
		clientId,
		tenantId: getConfiguredValue(params, "tenantId"),
		authority: getConfiguredValue(params, "authority"),
		redirectUri: getConfiguredValue(params, "redirectUri"),
		loginHint: getConfiguredValue(params, "loginHint"),
		scopes: scopes?.length === 0 ? undefined : scopes
	};
}

/**
 * Read the settings that were stored before redirecting to Microsoft Entra ID. The redirect uri
 * cannot include the query string, so the settings have to survive the round trip another way.
 * @returns The stored settings, or undefined if nothing has been stored.
 */
function getStoredEntraSettings(): EntraSettings | undefined {
	const stored = window.sessionStorage.getItem(SETTINGS_STORAGE_KEY);

	if (stored === null) {
		return;
	}

	try {
		return JSON.parse(stored) as EntraSettings;
	} catch (error) {
		console.error("Unable to parse the stored Microsoft Entra ID settings", error);
	}
}

/**
 * Store the settings so that they are available when Microsoft Entra ID redirects back.
 * @param settings The settings to store.
 */
function storeEntraSettings(settings: EntraSettings): void {
	window.sessionStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
}

/**
 * Get the Microsoft Entra ID settings, preferring the query string of the current page and
 * falling back to the settings stored before the redirect to Microsoft Entra ID.
 * @param search The query string to read the settings from.
 * @returns The settings, or undefined if no client id has been configured.
 */
export function getEntraSettings(search: string): EntraSettings | undefined {
	return getEntraSettingsFromQueryString(search) ?? getStoredEntraSettings();
}

/**
 * Determine whether this page load is the one that Microsoft Entra ID redirected back to after a
 * sign out, rather than after a sign in. The flag is cleared as it is read so that it only
 * applies to the page load that immediately follows the sign out.
 * @returns True if the user has just signed out.
 */
export function wasSignedOut(): boolean {
	const signedOut = window.sessionStorage.getItem(SIGNED_OUT_STORAGE_KEY) !== null;
	window.sessionStorage.removeItem(SIGNED_OUT_STORAGE_KEY);
	return signedOut;
}

/**
 * Sign in to Microsoft Entra ID using a redirect. If the user needs to authenticate then the page
 * navigates to the Microsoft sign in page and this returns without a token, as the page is about
 * to unload. When the user returns the sign in completes and the cached ID token is handed back
 * through a synchronous callback, which is what cloud interop requires.
 * @param settings The settings used to configure MSAL.
 * @returns The result of the sign in.
 * @throws If MSAL cannot acquire a token or the token it returns has no ID token.
 */
export async function signInToEntra(settings: EntraSettings): Promise<EntraSignInResult> {
	const authority =
		settings.authority ?? `https://login.microsoftonline.com/${settings.tenantId ?? DEFAULT_TENANT}`;

	// Microsoft Entra ID matches the redirect uri exactly and restricts query parameters, so
	// redirect back to this page without the settings that are on its query string. Signing out
	// comes back to the same place, which Microsoft Entra ID also requires to be registered.
	const redirectUri = settings.redirectUri ?? `${window.location.origin}${window.location.pathname}`;

	const msal = new PublicClientApplication({
		auth: {
			clientId: settings.clientId,
			authority,
			redirectUri
		}
	});

	await msal.initialize();

	const scopes = settings.scopes ?? DEFAULT_SCOPES;

	// Complete the sign in on the redirect uri rather than navigating back to the url that
	// started it, which would load this page a second time while the platform is starting.
	let redirectResult = await msal.handleRedirectPromise({ navigateToLoginRequestUrl: false });
	let cachedToken = "";
	let signedInAccount: string | undefined;
	let tokenDetails: EntraTokenDetails | undefined;
	let refreshTimer: ReturnType<typeof setTimeout> | undefined;

	/**
	 * Acquire an ID token, using the response from a redirect or the MSAL cache where possible.
	 * @param allowInteraction True if the user can be redirected to the Microsoft sign in page.
	 * @returns The result of the token acquisition, or undefined if the page is being redirected.
	 * @throws If a token cannot be acquired without redirecting the user.
	 */
	async function acquireIdToken(allowInteraction: boolean): Promise<AuthenticationResult | undefined> {
		if (redirectResult !== null) {
			const result = redirectResult;
			redirectResult = null;
			return result;
		}

		const account = msal.getAllAccounts()[0];

		if (account !== undefined) {
			try {
				const silentRequest: SilentRequest = { scopes, account };
				return await msal.acquireTokenSilent(silentRequest);
			} catch (error: unknown) {
				if (!(error instanceof InteractionRequiredAuthError) || !allowInteraction) {
					throw error;
				}
			}
		} else if (!allowInteraction) {
			throw new Error("There is no signed in account to refresh the Microsoft Entra ID token for.");
		}

		// The settings are on the query string of this page, which the redirect uri cannot include.
		storeEntraSettings(settings);

		// The page unloads here, so no token is returned and the caller stops what it is doing.
		const redirectRequest: RedirectRequest = { scopes, loginHint: settings.loginHint };
		await msal.loginRedirect(redirectRequest);
	}

	/**
	 * Acquire a token, cache it and schedule the next refresh.
	 * @param allowInteraction True if the user can be redirected to the Microsoft sign in page.
	 * @returns True if a token was cached, false if the page is being redirected.
	 * @throws If the acquired result does not contain an ID token.
	 */
	async function fetchToken(allowInteraction: boolean): Promise<boolean> {
		const result = await acquireIdToken(allowInteraction);

		if (result === undefined) {
			return false;
		}

		if (!result.idToken) {
			throw new Error("MSAL returned an empty ID token. Ensure openid is among the scopes.");
		}

		cachedToken = result.idToken;
		signedInAccount = result.account?.username;

		const claims = result.idTokenClaims as EntraIdTokenClaims | undefined;

		// These are the values HERE needs to be able to validate the token. They are also
		// shown on the provider page so that they can be read without opening the console.
		tokenDetails = {
			iss: claims?.iss,
			aud: claims?.aud,
			tid: claims?.tid,
			jwksUri: `https://login.microsoftonline.com/${claims?.tid ?? DEFAULT_TENANT}/discovery/v2.0/keys`
		};

		console.log("Microsoft Entra ID token acquired", tokenDetails);

		let remainingMs = FALLBACK_EXPIRY_MS;

		if (typeof claims?.exp === "number") {
			const expiresAtMs = claims.exp * 1000;
			remainingMs = Math.max(expiresAtMs - Date.now(), 0);
		}

		if (refreshTimer !== undefined) {
			clearTimeout(refreshTimer);
		}

		refreshTimer = setTimeout(() => {
			// Refresh silently only. Redirecting once the platform is running would navigate the
			// provider away from the platform it is hosting.
			fetchToken(false).catch((error: unknown) =>
				console.error("Failed to refresh the Microsoft Entra ID token, keeping the previous token", error)
			);
		}, remainingMs * REFRESH_BUFFER_RATIO);

		return true;
	}

	/**
	 * Sign out of Microsoft Entra ID using a redirect, ending the session as well as clearing the
	 * MSAL cache, so that a different account can be used. This does not resolve, as the page
	 * navigates to Microsoft and unloads before it has a chance to.
	 * @returns Nothing.
	 */
	async function signOut(): Promise<void> {
		if (refreshTimer !== undefined) {
			clearTimeout(refreshTimer);
			refreshTimer = undefined;
		}

		cachedToken = "";
		signedInAccount = undefined;
		tokenDetails = undefined;

		// The settings have to survive the round trip through Microsoft, just as they do when
		// signing in, and the flag tells the page that loads afterwards that it got there by
		// signing out rather than by signing in.
		storeEntraSettings(settings);
		window.sessionStorage.setItem(SIGNED_OUT_STORAGE_KEY, "true");

		// The page unloads here, so nothing after this runs.
		await msal.logoutRedirect({ account: msal.getAllAccounts()[0], postLogoutRedirectUri: redirectUri });
	}

	const signedIn = await fetchToken(true);

	if (!signedIn) {
		return { isRedirecting: true };
	}

	return {
		isRedirecting: false,
		jwtRequestCallback: () => cachedToken,
		account: signedInAccount,
		tokenDetails,
		signOut
	};
}
