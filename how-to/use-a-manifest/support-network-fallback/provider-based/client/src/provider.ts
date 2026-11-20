/**
 * The platform provider. The gateway navigated the provider window here, to the chosen route's provider,
 * so the provider's own origin is the current route. It opens the app window from that origin, starts the
 * health check, and switches by storing a preference for the gateway and restarting.
 */
import type OpenFin from "@openfin/core";
import { HEALTH_TIMEOUT_MS, isRouteId, ROUTES } from "../../shared/route-config";
import { createStatusChannel, type LogEntry, type StatusMessage } from "./channels";
import { readGatewayDecision } from "./gateway/decision";
import { checkHealth, startHealthLoop, type HealthResult } from "./health-check";
import { startLaunchParams, type LaunchStatus } from "./launch-params";
import { askUser } from "./prompt";
import { resolveRoutes, type ResolvedRoutes, type RouteInfo } from "./routes";
import { switchTo } from "./switch";

const LOG_LIMIT = 20;

let routes: ResolvedRoutes | undefined;
let channel: OpenFin.ChannelProvider | undefined;
let manifestUrl = "";
let switching = false;
let launch: LaunchStatus | undefined;
const gateway = readGatewayDecision(location.search);
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
		gateway,
		switching,
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
 * Check the destination, store the preference and restart. If the destination is not healthy, or any step
 * fails, the platform keeps running on its current route.
 * @param route The route to switch to.
 * @param reason Why, for the log.
 * @returns A message for the app view.
 */
async function switchRoute(route: RouteInfo, reason: string): Promise<string> {
	if (switching) {
		return "A switch is already in progress.";
	}
	switching = true;
	publishStatus();
	const target = await checkHealth(route.healthUrl, HEALTH_TIMEOUT_MS);
	if (!target.healthy) {
		switching = false;
		const message = `Not switching: ${route.displayHost} is ${target.detail}. Staying on ${routes?.current.displayHost}.`;
		log(message);
		return message;
	}
	log(`Switching to ${route.displayHost} (${reason}). Storing the preference, then restarting.`);
	try {
		await switchTo(route.id);
		return `Restarting on ${route.displayHost}.`;
	} catch (error) {
		switching = false;
		const message = `Switch failed: ${error instanceof Error ? error.message : String(error)}`;
		log(message);
		return message;
	}
}

/**
 * Ask the user, and switch if they accept.
 * @param resolved The resolved routes.
 * @param reason Why the switch is offered.
 */
async function offerSwitch(resolved: ResolvedRoutes, reason: string): Promise<void> {
	if (switching) {
		return;
	}
	const answer = await askUser({
		reason,
		fromDisplayHost: resolved.current.displayHost,
		toDisplayHost: resolved.other.displayHost
	});
	log(answer === "accept" ? "The user accepted the switch." : "The user declined the switch.");
	if (answer === "accept") {
		await switchRoute(resolved.other, reason);
	}
}

/**
 * Handle the in-app switcher. The user chose a route, so there is no prompt.
 * @param payload The request payload, { route }.
 * @returns A message for the app view.
 */
async function handleSwitchRequest(payload: unknown): Promise<string> {
	const route = (payload as { route?: unknown } | undefined)?.route;
	if (!routes || !isRouteId(route)) {
		return "Unknown route.";
	}
	if (route === routes.current.id) {
		return `Already running on ${routes.current.displayHost}.`;
	}
	return switchRoute(routes.other, `you chose ${ROUTES[route].displayHost} in the app`);
}

/**
 * Open the app window. The manifest has no snapshot, because the view must load from the route the
 * gateway chose, which is this provider's origin.
 * @param origin The provider's origin.
 */
async function openAppWindow(origin: string): Promise<void> {
	const snapshot = {
		windows: [
			{
				defaultWidth: 860,
				defaultHeight: 800,
				defaultCentered: true,
				layout: {
					content: [
						{
							type: "stack",
							content: [
								{
									type: "component",
									componentName: "view",
									componentState: {
										name: "support-network-fallback-provider-app",
										url: `${origin}/app.html`
									},
									title: "Network Fallback Provider-Based"
								}
							]
						}
					]
				}
			}
		]
	} as OpenFin.Snapshot;
	await fin.Platform.getCurrentSync().applySnapshot(snapshot);
}

/**
 * Log where this platform started from and how the gateway chose the route.
 * @param problem A problem found when resolving routes, if any.
 */
async function logStartup(problem: string | undefined): Promise<void> {
	const runtime = await fin.System.getVersion();
	log(
		`Started from ${manifestUrl} on route ${routes?.current.id ?? "unknown"} (provider ${location.origin}). ` +
			`Runtime ${runtime}. uuid ${fin.me.identity.uuid}. Preferred: ${routes?.preferred ? "yes" : "no"}.`
	);
	log(
		gateway
			? `Gateway chose this route by ${gateway.selectedBy}: ${gateway.detail}. Service worker: ${gateway.serviceWorker}.`
			: "This provider was not opened by the gateway."
	);
	if (problem) {
		log(problem);
	}
}

/**
 * Start the platform, open the app window and start the health check.
 */
async function init(): Promise<void> {
	await fin.Platform.init();

	const info = await fin.Application.getCurrentSync().getInfo();
	manifestUrl = info.manifestUrl;

	const resolved = resolveRoutes(location.origin);
	routes = resolved.routes;

	channel = await createStatusChannel(fin.me.identity.uuid, {
		"get-status": async () => buildStatus(),
		"switch-to": async (payload: unknown) => handleSwitchRequest(payload)
	});

	await logStartup(resolved.problem);

	startLaunchParams({
		manifestUrl,
		appName: "Network Fallback Provider-Based",
		log,
		onStatus: (status) => {
			launch = status;
			publishStatus();
		}
	}).catch((error) => log(`Launch params failed: ${String(error)}`));

	if (routes) {
		const known = routes;
		await openAppWindow(location.origin);
		startHealthLoop({
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
