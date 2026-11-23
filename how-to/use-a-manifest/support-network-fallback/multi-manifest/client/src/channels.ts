import type OpenFin from "@openfin/core";
import { APP_PATH, APP_VIEW_NAME, STATUS_CHANNEL, type RouteId } from "../../shared/route-config";
import { createGuardedChannel } from "./channel-guard";
import type { HealthResult } from "./health-check";
import type { LaunchStatus } from "./launch-params";

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

	/**
	 * "launch" for launch params, which the app view highlights.
	 */
	kind?: "launch";
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
	 * The route that could be switched to, if any.
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
	 * Whether the running manifest is the preferred one (it has a shortcut block).
	 */
	preferred: boolean;

	/**
	 * The last check of each route, if any.
	 */
	lastChecks: { current?: HealthResult; other?: HealthResult };

	/**
	 * The deep links to try and what happened to the custom scheme and jump list.
	 */
	launch?: LaunchStatus;

	/**
	 * The last 20 log entries, newest last.
	 */
	log: LogEntry[];
}

/**
 * Requests the app view can send to the provider.
 */
export type ViewRequest = "get-status" | "manual-switch";

/**
 * The channel name for a platform, so two identities in one runtime do not collide.
 * @param platformUuid The platform uuid.
 * @returns The channel name.
 */
export function statusChannelName(platformUuid: string): string {
	return `${STATUS_CHANNEL}/${platformUuid}`;
}

/**
 * Create the status channel in the provider. Only the platform's own app view can connect: same uuid,
 * the app view's name, and a connection URL that is one of the two app pages. Every other connection is
 * rejected, and requests from anything but an accepted connection are refused.
 * @param platformUuid The platform uuid.
 * @param handlers What to do for each view request.
 * @param onRejected Called with the reason when a connection is rejected.
 * @returns The channel provider, used to publish status.
 */
export async function createStatusChannel(
	platformUuid: string,
	handlers: { [request in ViewRequest]: () => Promise<unknown> },
	onRejected: (reason: string) => void
): Promise<OpenFin.ChannelProvider> {
	return createGuardedChannel(
		statusChannelName(platformUuid),
		{ uuid: platformUuid, entityType: "view", name: APP_VIEW_NAME, path: APP_PATH },
		handlers,
		onRejected
	);
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
