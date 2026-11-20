/**
 * The platform provider. It works out which route it is running on, starts the health check, and asks
 * the user before switching to the other route.
 */
import type OpenFin from "@openfin/core";
import { createStatusChannel, type LogEntry, type StatusMessage } from "./channels";
import { startHealthLoop, type HealthLoop, type HealthResult } from "./health-check";
import { startLaunchParams, type LaunchStatus } from "./launch-params";
import { askUser } from "./prompt";
import { resolveRoutes, type ManifestWithFallback, type ResolvedRoutes, type RouteInfo } from "./routes";
import { startSwitch } from "./switch";
import { switchArrivalChannelName, type SwitchArrival } from "./switcher/handover";

const LOG_LIMIT = 20;

let routes: ResolvedRoutes | undefined;
let loop: HealthLoop | undefined;
let channel: OpenFin.ChannelProvider | undefined;
let manifestUrl = "";
let launch: LaunchStatus | undefined;
const lastChecks: StatusMessage["lastChecks"] = {};
const logEntries: LogEntry[] = [];

/**
 * Add a line to the log, the console and the app view.
 * @param message What happened.
 * @param kind "launch" for launch params, which the app view highlights.
 */
function log(message: string, kind?: LogEntry["kind"]): void {
	const entry: LogEntry = { time: Date.now(), message, kind };
	console.log(`[${new Date(entry.time).toLocaleTimeString()}] ${message}`);
	logEntries.push(entry);
	logEntries.splice(0, Math.max(0, logEntries.length - LOG_LIMIT));
	publishStatus();
}

/**
 * Summarise a route for the app view.
 * @param route The route.
 * @returns The summary.
 */
function summary(route: RouteInfo | undefined): StatusMessage["current"] {
	return route && { id: route.id, displayHost: route.displayHost, origin: route.origin, color: route.color };
}

/**
 * Build the status the app view shows.
 * @returns The status.
 */
function buildStatus(): StatusMessage {
	return {
		current: summary(routes?.current),
		other: summary(routes?.other),
		manifestUrl,
		providerOrigin: location.origin,
		preferred: routes?.preferred ?? false,
		lastChecks,
		launch,
		log: logEntries
	};
}

/**
 * Send the latest status to the app view.
 */
function publishStatus(): void {
	if (channel) {
		Promise.all(channel.publish("status", buildStatus())).catch(() => {});
	}
}

/**
 * Ask the user, and switch if they accept. If the switch fails to start, the platform keeps running.
 * @param resolved The resolved routes.
 * @param reason Why the switch is offered.
 */
async function offerSwitch(resolved: ResolvedRoutes, reason: string): Promise<void> {
	const answer = await askUser({
		reason,
		fromDisplayHost: resolved.current.displayHost,
		toDisplayHost: resolved.other?.displayHost ?? ""
	});
	log(answer === "accept" ? "The user accepted the switch." : "The user declined the switch.");
	if (answer !== "accept") {
		return;
	}
	try {
		await startSwitch(resolved, reason);
	} catch (error) {
		log(`Switch failed to start: ${error instanceof Error ? error.message : String(error)}`);
	}
}

/**
 * Read the switch details if a switcher launched this platform.
 * @param platformUuid The platform uuid.
 * @returns The details, or undefined if this start was not a switch.
 */
async function readSwitchArrival(platformUuid: string): Promise<SwitchArrival | undefined> {
	try {
		const client = await fin.InterApplicationBus.Channel.connect(switchArrivalChannelName(platformUuid), {
			wait: false
		});
		const arrival = (await client.dispatch("get-arrival")) as SwitchArrival;
		await client.disconnect();
		return arrival;
	} catch {
		return undefined;
	}
}

/**
 * Log where this platform started from, and whether a switch arrived where it intended.
 * @param info The application info.
 * @param manifest The running manifest.
 * @param problem A problem found when resolving routes, if any.
 */
async function logStartup(
	info: OpenFin.ApplicationInfo,
	manifest: ManifestWithFallback,
	problem: string | undefined
): Promise<void> {
	const runtime = await fin.System.getVersion();
	const fallbacks = manifest.fallbackManifests?.map((entry) => entry.manifest).join(", ") ?? "none";
	log(
		`Started from ${info.manifestUrl} on route ${routes?.current.id ?? "unknown"} (provider ${location.origin}). ` +
			`Fallback manifests: ${fallbacks}. Runtime ${runtime}. uuid ${manifest.platform?.uuid ?? ""}. ` +
			`Preferred: ${routes?.preferred ? "yes" : "no"}.`
	);

	const arrival = await readSwitchArrival(manifest.platform?.uuid ?? fin.me.identity.uuid);
	if (arrival) {
		const asIntended = arrival.to === routes?.current.id;
		log(
			`Arrived from switch ${arrival.switchId} (${arrival.from} to ${arrival.to}): ${
				asIntended ? "on the intended route" : "NOT on the intended route, the RVM used the fallback"
			}.`
		);
	}
	if (problem) {
		log(problem);
	}
}

/**
 * Start the platform and the health check.
 */
async function init(): Promise<void> {
	await fin.Platform.init();

	const app = fin.Application.getCurrentSync();
	const manifest: ManifestWithFallback = await app.getManifest();
	const info = await app.getInfo();
	manifestUrl = info.manifestUrl;

	const resolved = resolveRoutes(manifest, location.origin, manifestUrl);
	routes = resolved.routes;

	channel = await createStatusChannel(manifest.platform?.uuid ?? fin.me.identity.uuid, {
		"get-status": async () => buildStatus(),
		"manual-switch": async () => loop?.requestSwitch() ?? false
	});

	await logStartup(info, manifest, resolved.problem);

	startLaunchParams({
		manifestUrl,
		appName: manifest.platform?.name ?? "Support Network Fallback",
		log,
		onStatus: (status) => {
			launch = status;
			publishStatus();
		}
	}).catch((error) => log(`Launch params failed: ${String(error)}`));

	if (routes) {
		const known = routes;
		loop = startHealthLoop({
			routes: known,
			onLog: log,
			onResult: (target: "current" | "other", result: HealthResult) => {
				lastChecks[target] = result;
				publishStatus();
			},
			onOffer: async (reason: string) => offerSwitch(known, reason)
		});
	}
}

init().catch((error) => console.error("Provider failed to start", error));
