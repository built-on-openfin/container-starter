/**
 * What the closing platform, the switcher and the new platform pass to each other.
 *
 * launchManifest's userAppConfigArgs do not reach an app that the launch starts, so the details travel
 * over the bus instead. The switcher runs in the same runtime as the platform, so it can connect.
 */
import type { RouteId } from "../../../shared/route-config";

/**
 * What the closing platform hands to the switcher.
 */
export interface SwitchRequest {
	/**
	 * The platform to wait for.
	 */
	platformUuid: string;

	/**
	 * The manifest to launch once the platform has closed.
	 */
	targetManifest: string;

	/**
	 * Identifies this switch in the logs on both sides.
	 */
	switchId: string;

	/**
	 * The route being left.
	 */
	from: RouteId;

	/**
	 * The route being moved to.
	 */
	to: RouteId;

	/**
	 * The host being moved to, for display.
	 */
	toDisplayHost: string;

	/**
	 * Why the switch is happening.
	 */
	reason: string;
}

/**
 * What the switcher hands to the platform it launched.
 */
export type SwitchArrival = Pick<SwitchRequest, "switchId" | "from" | "to">;

/**
 * The channel the closing platform offers the switch request on.
 */
export const SWITCH_REQUEST_CHANNEL = "support-network-fallback/switch-request";

/**
 * The channel the switcher offers the arrival details on, for the platform it launches.
 * @param platformUuid The platform uuid.
 * @returns The channel name.
 */
export function switchArrivalChannelName(platformUuid: string): string {
	return `support-network-fallback/switch-arrival/${platformUuid}`;
}
