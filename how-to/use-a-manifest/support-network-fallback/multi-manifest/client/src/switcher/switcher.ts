/**
 * The switcher app (its manifest is built by server/src/deployment/manifests.ts). It is launched by the platform that is closing,
 * collects the switch request from it, waits for that platform to close, then launches the destination
 * manifest. It does not recover if something goes wrong; see "Production hardening" in the README.
 */
import { PROVIDER_PATH } from "../../../shared/route-config";
import { createGuardedChannel } from "../channel-guard";
import {
	SWITCH_REQUEST_CHANNEL,
	switchArrivalChannelName,
	type SwitchArrival,
	type SwitchRequest
} from "./handover";

const CLOSE_TIMEOUT_MS = 20000;
const ARRIVAL_TIMEOUT_MS = 10000;
const QUIT_DELAY_MS = 2000;
const FAILURE_QUIT_DELAY_MS = 15000;

/**
 * Show a line in the switcher window and the console.
 * @param text The line to show.
 * @param isError Whether it is an error.
 */
function show(text: string, isError = false): void {
	console.log(`[switcher] ${text}`);
	const line = document.createElement("li");
	line.textContent = `${new Date().toLocaleTimeString()} ${text}`;
	if (isError) {
		line.className = "error";
	}
	document.querySelector("#steps")?.append(line);
}

/**
 * Wait for an application to close.
 * Subscribe first, then check isRunning, so a close that already happened is not missed.
 * @param uuid The application uuid.
 * @param timeoutMs How long to wait.
 * @returns True if it closed in time.
 */
async function waitForClose(uuid: string, timeoutMs: number): Promise<boolean> {
	const app = fin.Application.wrapSync({ uuid });
	let finish: ((closedInTime: boolean) => void) | undefined;
	const closed = new Promise<boolean>((resolve) => {
		finish = resolve;
	});
	await app.once("closed", () => finish?.(true));
	if (!(await app.isRunning())) {
		return true;
	}
	const timer = window.setTimeout(() => finish?.(false), timeoutMs);
	const result = await closed;
	window.clearTimeout(timer);
	return result;
}

/**
 * Collect the switch request from the closing platform. Telling it the request was collected is what
 * lets it quit.
 * @returns The switch request.
 */
async function collectRequest(): Promise<SwitchRequest> {
	const client = await fin.InterApplicationBus.Channel.connect(SWITCH_REQUEST_CHANNEL, { wait: false });
	const request = (await client.dispatch("get-request")) as SwitchRequest;
	// The platform closes the channel and quits as soon as it hears this, so there may be no reply.
	client.dispatch("collected").catch(() => {});
	return request;
}

/**
 * Offer the arrival details to the platform about to be launched. Only its provider window can read them.
 * @param request The switch request.
 * @returns Once the channel exists, a promise that resolves when the new platform has read the details.
 */
async function offerArrival(request: SwitchRequest): Promise<{ wasRead: Promise<void> }> {
	const arrival: SwitchArrival = { switchId: request.switchId, from: request.from, to: request.to };
	let read: (() => void) | undefined;
	const wasRead = new Promise<void>((resolve) => {
		read = resolve;
	});
	await createGuardedChannel(
		switchArrivalChannelName(request.platformUuid),
		{ uuid: request.platformUuid, entityType: "window", name: request.platformUuid, path: PROVIDER_PATH },
		{
			"get-arrival": async () => {
				read?.();
				return arrival;
			}
		},
		(reason) => show(`Rejected an arrival channel connection: ${reason}.`, true)
	);
	return { wasRead };
}

/**
 * Run the switch.
 * @returns True if the destination manifest was launched.
 */
async function run(): Promise<boolean> {
	const request = await collectRequest();
	const { platformUuid, targetManifest, switchId, from, to, toDisplayHost, reason } = request;

	const heading = document.querySelector("#heading");
	if (heading) {
		heading.textContent = `Switching to ${toDisplayHost}...`;
	}
	show(`Switch ${switchId}: ${from} to ${to}. Reason: ${reason}`);

	show(`Waiting up to ${CLOSE_TIMEOUT_MS / 1000} s for ${platformUuid} to close.`);
	if (!(await waitForClose(platformUuid, CLOSE_TIMEOUT_MS))) {
		show("The platform did not close in time. Giving up (no recovery in this sample).", true);
		return false;
	}

	const arrival = await offerArrival(request);
	show(`Platform closed. Launching ${targetManifest}`);
	const manifest = await fin.System.launchManifest(targetManifest, {
		subscribe: (launch) => {
			launch.on("app-version-progress", (event) => show(`Trying ${event.manifest ?? event.srcManifest}`));
			launch.on("app-version-complete", (event) =>
				show(`Resolved ${event.srcManifest} to ${event.manifest ?? "(same)"}`)
			);
			launch.on("app-version-error", (event) => show(`Resolver error: ${event.error}`, true));
		}
	});
	show(`Started ${manifest.platform?.uuid ?? "app"}.`);

	let timer: number | undefined;
	const timedOut = new Promise<boolean>((resolve) => {
		timer = window.setTimeout(() => resolve(true), ARRIVAL_TIMEOUT_MS);
	});
	if (await Promise.race([arrival.wasRead.then(() => false), timedOut])) {
		show(`The new platform did not read the switch details within ${ARRIVAL_TIMEOUT_MS / 1000} s.`);
	} else {
		show("The new platform read the switch details.");
	}
	window.clearTimeout(timer);
	return true;
}

window.addEventListener("DOMContentLoaded", async () => {
	let succeeded = false;
	try {
		succeeded = await run();
	} catch (error) {
		show(`Switch failed: ${error instanceof Error ? error.message : String(error)}`, true);
	}
	const delay = succeeded ? QUIT_DELAY_MS : FAILURE_QUIT_DELAY_MS;
	show(`Closing in ${delay / 1000} s.`, !succeeded);
	setTimeout(async () => fin.Application.getCurrentSync().quit(), delay);
});
