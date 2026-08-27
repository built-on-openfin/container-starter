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

	/**
	 * Optional JWT returned by jwtRequestCallback when authenticationType is "jwt".
	 */
	token?: string;
}

/**
 * Settings used to configure MSAL so that it can request a Microsoft Entra ID token.
 * These are passed to the provider on the query string of its url.
 */
export interface EntraSettings {
	/**
	 * The Application (client) ID from the Microsoft Entra ID app registration.
	 */
	clientId: string;

	/**
	 * The Directory (tenant) ID or a verified domain. If it is not specified the authority
	 * falls back to "organizations" so that the account used at sign in determines the tenant.
	 */
	tenantId?: string;

	/**
	 * A complete authority url. If specified it takes precedence over tenantId and supports
	 * cases such as "common", Azure AD B2C and the sovereign clouds.
	 */
	authority?: string;

	/**
	 * The redirect uri registered against the app registration as a single-page application.
	 * If it is not specified the origin of the current page is used.
	 */
	redirectUri?: string;

	/**
	 * A username to pre-populate on the Microsoft sign in page.
	 */
	loginHint?: string;

	/**
	 * The scopes to request, defaults to openid and profile.
	 */
	scopes?: string[];
}

/**
 * The values HERE needs in order to validate the tokens that jwtRequestCallback hands over.
 * They are taken from the claims of the acquired ID token, as the token is tenant specific
 * even when the sign in went through a multi tenant authority such as "organizations".
 */
export interface EntraTokenDetails {
	/**
	 * The issuer of the token, which is always tenant specific.
	 */
	iss?: string;

	/**
	 * The audience the token was issued for, which is the client id for an ID token.
	 */
	aud?: string;

	/**
	 * The id of the tenant the signed in account belongs to.
	 */
	tid?: string;

	/**
	 * The uri of the public keys that the token signature can be validated against.
	 */
	jwksUri: string;
}

/**
 * The result of signing in to Microsoft Entra ID.
 */
export interface EntraSignInResult {
	/**
	 * True when the page is navigating to the Microsoft sign in page. Nothing else should be
	 * started when this is set, as the page is about to unload.
	 */
	isRedirecting: boolean;

	/**
	 * Returns the cached ID token. This is present whenever a token was acquired and is
	 * synchronous because that is what the cloud interop jwtRequestCallback requires.
	 */
	jwtRequestCallback?: () => string;

	/**
	 * The username of the signed in account. This is present whenever a token was acquired.
	 */
	account?: string;

	/**
	 * The values HERE needs to validate the token. This is present whenever a token was acquired.
	 */
	tokenDetails?: EntraTokenDetails;

	/**
	 * Sign out of Microsoft Entra ID. This is present whenever a token was acquired. It does not
	 * resolve, as the page redirects to Microsoft and unloads.
	 */
	signOut?: () => Promise<void>;
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
