/**
 * Launch parameters: init params (userAppConfigArgs), a custom scheme and a Windows jump list.
 *
 * The platform reads the params it was started with and listens for run-requested, which fires when the
 * platform is launched again while it is already running. Both paths go through describeLaunch, so a
 * custom scheme, a jump list task and a fin:// link with $$ params are all logged the same way. A custom
 * scheme link arrives as userAppConfigArgs.userRequestUri.
 *
 * On Windows it also registers the custom scheme and sets the jump list. Both point at the manifest this
 * platform was started from. The same file is used by both support-network-fallback samples.
 */
import type OpenFin from "@openfin/core";

/**
 * The custom scheme both samples register.
 */
export const CUSTOM_SCHEME = "here-sample-network-fallback";

/**
 * The launchSource value the jump list tasks send.
 */
export const JUMP_LIST_SOURCE = "jumplist";

/**
 * The operating systems this module tells apart.
 */
export type HostOs = "windows" | "mac" | "other";

/**
 * Where a set of launch params came from.
 */
export type LaunchSource = "custom scheme" | "jump list" | "init params";

/**
 * What the app view shows about launch params.
 */
export interface LaunchStatus {
	/**
	 * The operating system.
	 */
	os: HostOs;

	/**
	 * A custom scheme link to try.
	 */
	schemeLink: string;

	/**
	 * A deep link to this platform's manifest with init params.
	 */
	deepLink: string;

	/**
	 * What happened to the custom scheme registration and jump list.
	 */
	registration: string;
}

/**
 * Options for startLaunchParams.
 */
export interface LaunchParamsOptions {
	/**
	 * The running manifest URL.
	 */
	manifestUrl: string;

	/**
	 * The name the jump list tasks use.
	 */
	appName: string;

	/**
	 * Write a line to the log. Launch params are logged with the kind "launch".
	 */
	log: (message: string, kind?: "launch") => void;

	/**
	 * Called when the launch status changes.
	 */
	onStatus: (status: LaunchStatus) => void;
}

/**
 * Work out the operating system.
 * @returns The operating system.
 */
export async function detectOs(): Promise<HostOs> {
	let name = navigator.userAgent;
	try {
		const specs = await fin.System.getHostSpecs();
		name = specs.name;
	} catch {
		// Fall back to the user agent.
	}
	if (/windows/i.test(name)) {
		return "windows";
	}
	return /mac|darwin/i.test(name) ? "mac" : "other";
}

/**
 * Describe a set of launch params.
 * @param args The userAppConfigArgs.
 * @returns Where they came from and a readable list, or undefined if there are none.
 */
export function describeLaunch(
	args: OpenFin.UserAppConfigArgs | undefined
): { source: LaunchSource; params: string } | undefined {
	const entries = Object.entries(args ?? {});
	if (entries.length === 0) {
		return undefined;
	}
	const values = entries.flatMap(([, value]) => (Array.isArray(value) ? value : [value]));
	const schemeLink = values.find((value) => value.startsWith(`${CUSTOM_SCHEME}:`));
	let source: LaunchSource = "init params";
	if (schemeLink) {
		source = "custom scheme";
	} else if (args?.launchSource === JUMP_LIST_SOURCE) {
		source = "jump list";
	}
	const params = entries
		.map(([key, value]) => `${key}=${Array.isArray(value) ? value.join(",") : value}`)
		.join("; ");
	if (!schemeLink) {
		return { source, params };
	}
	const query = [...new URL(schemeLink).searchParams].map(([key, value]) => `${key}=${value}`).join("; ");
	return { source, params: query ? `${query} (from ${params})` : params };
}

/**
 * Build a fin:// or fins:// deep link to a manifest with init params.
 * @param manifestUrl The manifest URL.
 * @param params The params, sent as $$ query parameters.
 * @returns The deep link.
 */
export function deepLinkFor(manifestUrl: string, params: { [key: string]: string }): string {
	const link = manifestUrl.replace(/^https:/, "fins:").replace(/^http:/, "fin:");
	const query = Object.entries(params)
		.map(([key, value]) => `$$${key}=${encodeURIComponent(value)}`)
		.join("&");
	return `${link}${link.includes("?") ? "&" : "?"}${query}`;
}

/**
 * Build a custom scheme link.
 * @param value The sampleParam value.
 * @returns The link.
 */
export function schemeLinkFor(value: string): string {
	return `${CUSTOM_SCHEME}://open?sampleParam=${encodeURIComponent(value)}`;
}

/**
 * Describe a launch for the log.
 * @param args The userAppConfigArgs.
 * @param when When they arrived.
 * @returns The log line, or undefined for a first launch with no params.
 */
function launchMessage(args: OpenFin.UserAppConfigArgs | undefined, when: string): string | undefined {
	const launch = describeLaunch(args);
	if (launch) {
		return `LAUNCH PARAMS RECEIVED (${launch.source}, ${when}): ${launch.params}`;
	}
	return when === "while running"
		? "LAUNCH RECEIVED (while running) with no params: the shortcut, the jump list's app entry or a plain manifest link."
		: undefined;
}

/**
 * Register the custom scheme for this manifest and set the jump list.
 * @param options The options.
 * @returns What happened, for the app view.
 */
async function registerWindowsEntryPoints(options: LaunchParamsOptions): Promise<string> {
	const results: string[] = [];
	try {
		const before = await fin.System.getCustomProtocolState(CUSTOM_SCHEME);
		const owner = before.state === "Registered" ? before.handlerManifestUrl : before.state.toLowerCase();
		await fin.System.registerCustomProtocol({ protocolName: CUSTOM_SCHEME });
		const after = await fin.System.getCustomProtocolState(CUSTOM_SCHEME);
		const now = after.state === "Registered" ? after.handlerManifestUrl : after.state.toLowerCase();
		const message =
			owner === now
				? `${CUSTOM_SCHEME}:// is registered to ${now}.`
				: `${CUSTOM_SCHEME}:// was ${before.state === "Registered" ? `registered to ${owner}` : owner}, now registered to ${now}.`;
		options.log(message);
		results.push(message);
	} catch (error) {
		const message = `Could not register ${CUSTOM_SCHEME}://: ${error instanceof Error ? error.message : String(error)}`;
		options.log(message);
		results.push(message);
	}

	try {
		const manifest: { platform?: { icon?: string }; shortcut?: { icon?: string } } =
			await fin.Application.getCurrentSync().getManifest();
		const iconPath = manifest.platform?.icon ?? manifest.shortcut?.icon;
		await fin.Application.getCurrentSync().setJumpList([
			{
				name: "Launch params",
				items: [
					{
						type: "task",
						title: "Open with a jump list param",
						description: `Launches ${options.appName} with $$launchSource=jumplist`,
						deepLink: deepLinkFor(options.manifestUrl, {
							launchSource: JUMP_LIST_SOURCE,
							sampleParam: "from-the-jump-list"
						}),
						iconPath,
						iconIndex: 0
					}
				]
			}
		]);
		const message = `Jump list set; its tasks point at ${options.manifestUrl}.`;
		options.log(message);
		results.push(message);
	} catch (error) {
		const message = `Could not set the jump list: ${error instanceof Error ? error.message : String(error)}`;
		options.log(message);
		results.push(message);
	}
	return results.join(" ");
}

/**
 * Log the params this platform started with, listen for later launches and, on Windows, register the
 * custom scheme and set the jump list.
 * @param options The options.
 */
export async function startLaunchParams(options: LaunchParamsOptions): Promise<void> {
	const app = fin.Application.getCurrentSync();
	const status: LaunchStatus = {
		os: "other",
		schemeLink: schemeLinkFor("hello"),
		deepLink: deepLinkFor(options.manifestUrl, { sampleParam: "hello" }),
		registration: "registering..."
	};
	/**
	 * Log a launch in the app view's log.
	 * @param args The userAppConfigArgs.
	 * @param when When they arrived.
	 */
	function received(args: OpenFin.UserAppConfigArgs | undefined, when: string): void {
		const message = launchMessage(args, when);
		if (message) {
			options.log(message, "launch");
		}
	}

	await app.on("run-requested", (event) => received(event.userAppConfigArgs, "while running"));

	const info = await app.getInfo();
	received(info.initialOptions.userAppConfigArgs, "at launch");

	const os = await detectOs();
	status.os = os;
	options.onStatus(status);

	const registration =
		os === "windows"
			? await registerWindowsEntryPoints(options)
			: `The custom scheme and jump list are Windows only; skipped on ${os}.`;
	if (os !== "windows") {
		options.log(registration);
	}
	status.registration = registration;
	options.onStatus(status);
}
