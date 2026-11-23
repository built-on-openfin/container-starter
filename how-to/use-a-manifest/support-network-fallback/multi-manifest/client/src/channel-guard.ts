import type OpenFin from "@openfin/core";
import { ROUTES, routeOrigin } from "../../shared/route-config";

/**
 * The only client a channel accepts.
 */
export interface ExpectedClient {
	/**
	 * The client's uuid.
	 */
	uuid: string;

	/**
	 * The client's entity type.
	 */
	entityType: "window" | "view";

	/**
	 * The client's name.
	 */
	name: string;

	/**
	 * The path of the page the client must connect from, on either route.
	 */
	path: string;
}

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
 * @param expected The only client accepted.
 * @returns Why the client is rejected, or undefined if it is accepted.
 */
function rejectionReason(
	client: OpenFin.ClientConnectionPayload,
	expected: ExpectedClient
): string | undefined {
	if (client.uuid !== expected.uuid) {
		return `uuid ${client.uuid} is not ${expected.uuid}`;
	}
	if (client.entityType !== expected.entityType || client.name !== expected.name) {
		return `${client.entityType} ${client.name} is not the ${expected.entityType} ${expected.name}`;
	}
	const urls = Object.values(ROUTES).map((route) => `${routeOrigin(route)}${expected.path}`);
	const url = withoutQuery(client.connectionUrl);
	if (!url || !urls.includes(url)) {
		return `connection URL ${client.connectionUrl} is not ${expected.path} on a known route`;
	}
	return undefined;
}

/**
 * Create a channel that only one client can use. Every other connection is rejected, and actions from
 * anything but an accepted connection are refused.
 * @param channelName The channel name.
 * @param expected The only client accepted.
 * @param actions What to do for each action.
 * @param onRejected Called with the reason when a connection is rejected.
 * @returns The channel provider.
 */
export async function createGuardedChannel(
	channelName: string,
	expected: ExpectedClient,
	actions: { [action: string]: () => Promise<unknown> },
	onRejected: (reason: string) => void
): Promise<OpenFin.ChannelProvider> {
	const channel = await fin.InterApplicationBus.Channel.create(channelName);
	const acceptedEndpoints = new Set<string>();

	// The listener is typed with ClientIdentity, but the runtime passes the full connection payload.
	channel.onConnection((identity) => {
		const reason = rejectionReason(identity as OpenFin.ClientConnectionPayload, expected);
		if (reason) {
			onRejected(reason);
			throw new Error(`Connection rejected: ${reason}`);
		}
		acceptedEndpoints.add(identity.endpointId);
	});
	channel.onDisconnection((identity) => acceptedEndpoints.delete(identity.endpointId));

	for (const [action, handler] of Object.entries(actions)) {
		channel.register(action, async (_payload: unknown, identity) => {
			const endpointId = "endpointId" in identity ? identity.endpointId : undefined;
			if (!endpointId || !acceptedEndpoints.has(endpointId)) {
				throw new Error("Not an accepted connection");
			}
			return handler();
		});
	}
	return channel;
}
