/**
 * The preference page. It runs in a hidden window on the public origin, the gateway's origin, so it
 * can write the localStorage that the gateway reads. A page on the internal origin cannot, and an iframe
 * would get partitioned storage.
 *
 * It offers one channel action, registerLocationPreference, and only to the platform's own provider
 * window: same uuid, the provider window's name, and a connection URL that is one of the two provider
 * pages. Every other connection is rejected.
 */
import type OpenFin from "@openfin/core";
import {
	PREFERENCE_CHANNEL,
	PREFERENCE_KEY,
	PROVIDER_PATH,
	ROUTES,
	isRouteId,
	routeOrigin,
	type RouteId
} from "../../../shared/route-config";

const CONNECT_TIMEOUT_MS = 10000;

const PROVIDER_URLS = Object.values(ROUTES).map((route) => `${routeOrigin(route)}${PROVIDER_PATH}`);

const acceptedEndpoints = new Set<string>();

/**
 * Remove the query string and hash from a URL.
 * @param url The URL.
 * @returns The origin and path, or undefined if the URL cannot be parsed.
 */
function withoutQuery(url: string | undefined): string | undefined {
	if (!url) {
		return undefined;
	}
	try {
		const parsed = new URL(url);
		return `${parsed.origin}${parsed.pathname}`;
	} catch {
		return undefined;
	}
}

/**
 * Check a connecting client.
 * @param client The connecting client.
 * @returns Why the client is rejected, or undefined if it is accepted.
 */
function rejectionReason(client: OpenFin.ClientConnectionPayload): string | undefined {
	const platformUuid = fin.me.identity.uuid;
	if (client.uuid !== platformUuid) {
		return `uuid ${client.uuid} is not this platform`;
	}
	if (client.entityType !== "window" || client.name !== platformUuid) {
		return `${client.entityType} ${client.name} is not the platform provider window`;
	}
	const url = withoutQuery(client.connectionUrl);
	if (!url || !PROVIDER_URLS.includes(url)) {
		return `connection URL ${client.connectionUrl} is not a provider page`;
	}
	return undefined;
}

/**
 * Write the preference and read it back.
 * @param payload The action payload.
 * @returns The stored route.
 * @throws If the route is unknown or the value cannot be read back.
 */
function writePreference(payload: unknown): { route: RouteId; written: true } {
	const route = (payload as { route?: unknown } | undefined)?.route;
	if (!isRouteId(route)) {
		throw new Error(`Unknown route ${String(route)}`);
	}
	localStorage.setItem(PREFERENCE_KEY, route);
	if (localStorage.getItem(PREFERENCE_KEY) !== route) {
		throw new Error("The preference could not be read back");
	}
	return { route, written: true };
}

/**
 * Create the channel and close the window if no valid client connects in time.
 */
async function init(): Promise<void> {
	const timer = window.setTimeout(() => {
		console.warn(`No valid connection within ${CONNECT_TIMEOUT_MS / 1000} s, closing.`);
		fin.Window.getCurrentSync()
			.close()
			.catch(() => {});
	}, CONNECT_TIMEOUT_MS);

	const channel = await fin.InterApplicationBus.Channel.create(PREFERENCE_CHANNEL);

	// The listener is typed with ClientIdentity, but the runtime passes the full connection payload.
	channel.onConnection((identity) => {
		const reason = rejectionReason(identity as OpenFin.ClientConnectionPayload);
		if (reason) {
			console.warn(`Rejected a connection: ${reason}.`);
			throw new Error(`Connection rejected: ${reason}`);
		}
		acceptedEndpoints.add(identity.endpointId);
		window.clearTimeout(timer);
	});
	channel.onDisconnection((identity) => acceptedEndpoints.delete(identity.endpointId));

	channel.register("registerLocationPreference", async (payload: unknown, identity) => {
		const endpointId = "endpointId" in identity ? identity.endpointId : undefined;
		if (!endpointId || !acceptedEndpoints.has(endpointId)) {
			throw new Error("Not an accepted connection");
		}
		const result = writePreference(payload);
		console.log(`Stored the preference for the ${result.route} route.`);
		return result;
	});
}

window.addEventListener("DOMContentLoaded", () => {
	init().catch((error) => console.error("The preference page failed to start", error));
});
