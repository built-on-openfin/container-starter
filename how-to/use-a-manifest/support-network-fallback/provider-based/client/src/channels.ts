import type OpenFin from "@openfin/core";
import { STATUS_CHANNEL, type RouteId } from "../../shared/route-config";
import type { GatewayDecision } from "./gateway/decision";
import type { HealthResult } from "./health-check";

/**
 * A short description of a route for display.
 */
export interface RouteSummary {
	/**
	 * The route id.
	 */
	id: RouteId;

	/**
	 * The host the route stands in for.
	 */
	displayHost: string;

	/**
	 * The route origin.
	 */
	origin: string;

	/**
	 * The badge colour.
	 */
	color: string;
}

/**
 * One line of the provider's log.
 */
export interface LogEntry {
	/**
	 * When it happened.
	 */
	time: number;

	/**
	 * What happened.
	 */
	message: string;
}

/**
 * What the provider sends to the app view.
 */
export interface StatusMessage {
	/**
	 * The route the platform is running on, if known.
	 */
	current?: RouteSummary;

	/**
	 * The route that could be switched to, if known.
	 */
	other?: RouteSummary;

	/**
	 * The running manifest URL.
	 */
	manifestUrl: string;

	/**
	 * The provider origin.
	 */
	providerOrigin: string;

	/**
	 * Whether the current route is the preferred one.
	 */
	preferred: boolean;

	/**
	 * How the gateway chose this route, if the provider was opened by the gateway.
	 */
	gateway?: Omit<GatewayDecision, "route">;

	/**
	 * True while a switch is being made.
	 */
	switching: boolean;

	/**
	 * The last check of each route, if any.
	 */
	lastChecks: { current?: HealthResult; other?: HealthResult };

	/**
	 * The last 20 log entries, newest last.
	 */
	log: LogEntry[];
}

/**
 * Requests the app view can send to the provider.
 * - get-status: returns the StatusMessage.
 * - switch-to: payload { route }, returns a message for the app view.
 */
export type ViewRequest = "get-status" | "switch-to";

/**
 * The channel name for a platform.
 * @param platformUuid The platform uuid.
 * @returns The channel name.
 */
export function statusChannelName(platformUuid: string): string {
	return `${STATUS_CHANNEL}/${platformUuid}`;
}

/**
 * Create the status channel in the provider.
 * @param platformUuid The platform uuid.
 * @param handlers What to do for each view request.
 * @returns The channel provider, used to publish status.
 */
export async function createStatusChannel(
	platformUuid: string,
	handlers: { [request in ViewRequest]: (payload: unknown) => Promise<unknown> }
): Promise<OpenFin.ChannelProvider> {
	const channel = await fin.InterApplicationBus.Channel.create(statusChannelName(platformUuid));
	for (const [request, handler] of Object.entries(handlers)) {
		channel.register(request, handler);
	}
	return channel;
}

/**
 * Connect to the status channel from the app view.
 * @param platformUuid The platform uuid.
 * @param onStatus Called with every status update.
 * @returns The channel client, used to send requests.
 */
export async function connectToStatusChannel(
	platformUuid: string,
	onStatus: (status: StatusMessage) => void
): Promise<OpenFin.ChannelClient> {
	const client = await fin.InterApplicationBus.Channel.connect(statusChannelName(platformUuid), {
		wait: true
	});
	client.register("status", (payload: unknown) => onStatus(payload as StatusMessage));
	return client;
}
