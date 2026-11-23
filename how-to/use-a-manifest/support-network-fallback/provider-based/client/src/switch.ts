import type OpenFin from "@openfin/core";
import {
	GATEWAY_ROUTE,
	PREFERENCE_CHANNEL,
	PREFERENCE_PAGE_PATH,
	PREFERENCE_WINDOW_NAME,
	routeOrigin,
	type RouteId
} from "../../shared/route-config";

const CONNECT_TIMEOUT_MS = 10000;

/**
 * Reject if a promise does not settle in time.
 * @param promise The promise.
 * @param timeoutMs How long to wait.
 * @param message The error message on timeout.
 * @returns The promise's result.
 */
async function withTimeout<T>(promise: Promise<T>, timeoutMs: number, message: string): Promise<T> {
	let timer: number | undefined;
	try {
		return await Promise.race([
			promise,
			new Promise<never>((resolve, reject) => {
				timer = window.setTimeout(() => reject(new Error(message)), timeoutMs);
			})
		]);
	} finally {
		window.clearTimeout(timer);
	}
}

/**
 * Store a route preference for the gateway, then restart the platform so the gateway picks it up.
 *
 * The gateway is on the public origin and reads its own localStorage, which a page on the internal origin
 * cannot write. So a hidden preference page is opened on the public origin, and the provider asks it over
 * a channel to store the route. The restart only happens once the page confirms the value was written.
 *
 * If any step fails or times out, the platform keeps running on its current route.
 * @param route The route the gateway should choose at the next start.
 */
export async function switchTo(route: RouteId): Promise<void> {
	const helperIdentity = { uuid: fin.me.identity.uuid, name: PREFERENCE_WINDOW_NAME };
	await fin.Window.wrapSync(helperIdentity)
		.close(true)
		.catch(() => {});

	let helper: OpenFin.Window | undefined;
	let client: OpenFin.ChannelClient | undefined;
	try {
		helper = await fin.Window.create({
			name: PREFERENCE_WINDOW_NAME,
			url: `${routeOrigin(GATEWAY_ROUTE)}${PREFERENCE_PAGE_PATH}`,
			autoShow: false
		});
		client = await withTimeout(
			fin.InterApplicationBus.Channel.connect(PREFERENCE_CHANNEL, { wait: true }),
			CONNECT_TIMEOUT_MS,
			`The preference page did not accept a connection within ${CONNECT_TIMEOUT_MS / 1000} s`
		);
		const result = (await client.dispatch("registerLocationPreference", { route })) as
			| { route?: string; written?: boolean }
			| undefined;
		if (!result?.written || result.route !== route) {
			throw new Error("The preference page did not confirm the preference");
		}
	} finally {
		await client?.disconnect().catch(() => {});
		await helper?.close(true).catch(() => {});
	}

	await fin.Application.getCurrentSync().restart();
}
