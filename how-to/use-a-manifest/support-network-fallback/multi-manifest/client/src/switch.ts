import { SWITCHER_PAGE_PATH, SWITCHER_UUID } from "../../shared/route-config";
import { createGuardedChannel } from "./channel-guard";
import type { ResolvedRoutes } from "./routes";
import { SWITCH_REQUEST_CHANNEL, type SwitchRequest } from "./switcher/handover";

const HANDOVER_TIMEOUT_MS = 15000;

/**
 * Restart the platform on the other route.
 *
 * There is no API to tell the RVM to close one manifest and start another, so a small switcher app,
 * served by the destination route, waits for this platform to close and then launches the destination
 * manifest. It runs in the same runtime process, which keeps the runtime alive during the hand-over.
 *
 * The platform only quits once the switcher has collected the switch request, so a switcher that fails
 * to load leaves the platform running. Only the switcher window can collect the request.
 *
 * This sample has no ready signal and no recovery if the switcher fails after that. See
 * "Production hardening" in the README.
 * @param routes The resolved routes.
 * @param reason Why the switch is happening, for the logs.
 * @param onRejected Called with the reason when a connection to the request channel is rejected.
 */
export async function startSwitch(
	routes: ResolvedRoutes,
	reason: string,
	onRejected: (reason: string) => void
): Promise<void> {
	const other = routes.other;
	if (!other) {
		throw new Error("No other route to switch to");
	}
	const randomPart = Math.random().toString(36);
	const request: SwitchRequest = {
		platformUuid: routes.platformUuid,
		targetManifest: other.manifestUrl,
		switchId: `${Date.now().toString(36)}-${randomPart.slice(2, 8)}`,
		from: routes.current.id,
		to: other.id,
		toDisplayHost: other.displayHost,
		reason
	};

	let collected: (() => void) | undefined;
	const handedOver = new Promise<void>((resolve) => {
		collected = resolve;
	});
	const provider = await createGuardedChannel(
		SWITCH_REQUEST_CHANNEL,
		{ uuid: SWITCHER_UUID, entityType: "window", name: SWITCHER_UUID, path: SWITCHER_PAGE_PATH },
		{
			"get-request": async () => request,
			collected: async () => collected?.()
		},
		onRejected
	);

	let timer: number | undefined;
	try {
		await fin.System.launchManifest(other.switcherUrl);
		await Promise.race([
			handedOver,
			new Promise<never>((resolve, reject) => {
				timer = window.setTimeout(
					() =>
						reject(
							new Error(`The switcher did not collect the request within ${HANDOVER_TIMEOUT_MS / 1000} s`)
						),
					HANDOVER_TIMEOUT_MS
				);
			})
		]);
	} finally {
		window.clearTimeout(timer);
		await provider.destroy();
	}
	await fin.Platform.getCurrentSync().quit();
}
