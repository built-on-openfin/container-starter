/**
 * The health check. checkHealth is used once by the gateway at launch, and the loop runs in the
 * provider while the platform is running. Deliberately bare: a fixed interval, one request per route, and
 * an offer to switch whenever the current route is unhealthy and the other route is healthy. See
 * "Production hardening" in the README for what a real app would add.
 */
import { isHealthy } from "../../shared/health-contract";
import { HEALTH_POLL_INTERVAL_MS, HEALTH_TIMEOUT_MS } from "../../shared/route-config";
import type { ResolvedRoutes } from "./routes";

/**
 * The result of one /health request.
 */
export interface HealthResult {
	/**
	 * When the check finished.
	 */
	time: number;

	/**
	 * True only for an HTTP 200 JSON document with status "healthy".
	 */
	healthy: boolean;

	/**
	 * What happened, for the log.
	 */
	detail: string;
}

/**
 * What the health loop needs from the provider.
 */
export interface HealthLoopOptions {
	/**
	 * The resolved routes.
	 */
	routes: ResolvedRoutes;

	/**
	 * Called with a log message.
	 */
	onLog: (message: string) => void;

	/**
	 * Called after each check.
	 */
	onResult: (target: "current" | "other", result: HealthResult) => void;

	/**
	 * Called to offer a switch. The loop does no checks until the returned promise settles.
	 */
	onOffer: (reason: string) => Promise<void>;

	/**
	 * True while a switch started outside the loop is in progress. The loop does no checks meanwhile.
	 */
	isSwitching: () => boolean;
}

/**
 * Controls for a running health loop.
 */
export interface HealthLoop {
	/**
	 * Stop checking.
	 */
	stop(): void;
}

/**
 * Request a /health endpoint. Anything other than a healthy document counts as unhealthy: a refused
 * connection, a timeout, an HTTP error, or a response that is not the expected JSON (for example a
 * sign-in page).
 * @param healthUrl The /health URL to check.
 * @param timeoutMs How long to wait.
 * @returns The result. It never throws.
 */
export async function checkHealth(healthUrl: string, timeoutMs: number): Promise<HealthResult> {
	const controller = new AbortController();
	const timer = setTimeout(() => controller.abort(), timeoutMs);
	let detail: string;
	let healthy = false;
	try {
		const response = await fetch(healthUrl, { signal: controller.signal, cache: "no-store" });
		if (response.status === 200) {
			let body: unknown;
			try {
				body = await response.json();
			} catch {}
			healthy = isHealthy(body);
			detail = healthy ? "healthy" : "unhealthy";
		} else {
			detail = `returning HTTP ${response.status}`;
		}
	} catch {
		detail = controller.signal.aborted ? `not answering within ${timeoutMs} ms` : "unreachable";
	} finally {
		clearTimeout(timer);
	}
	return { time: Date.now(), healthy, detail };
}

/**
 * Start checking the current route every HEALTH_POLL_INTERVAL_MS. The other route is only checked
 * while the current route is unhealthy.
 * @param options What the loop needs.
 * @returns Controls for the loop.
 */
export function startHealthLoop(options: HealthLoopOptions): HealthLoop {
	const { routes, onLog, onResult, onOffer, isSwitching } = options;
	const { current, other } = routes;
	let offerOpen = false;

	/**
	 * Whether the loop should hold off.
	 * @returns True while an offer is open or a switch is in progress.
	 */
	function busy(): boolean {
		return offerOpen || isSwitching();
	}
	let lastCurrentDetail: string | undefined;
	let lastOtherDetail: string | undefined;

	/**
	 * Offer a switch and hold the loop until the offer is answered.
	 * @param reason Why the switch is offered.
	 */
	async function offer(reason: string): Promise<void> {
		offerOpen = true;
		onLog(`Offering a switch: ${reason}`);
		try {
			await onOffer(reason);
		} catch (error) {
			onLog(`Switch offer failed: ${String(error)}`);
		} finally {
			offerOpen = false;
		}
	}

	/**
	 * One round: check the current route, and the other route if the current one is unhealthy.
	 */
	async function tick(): Promise<void> {
		if (busy()) {
			return;
		}
		const result = await checkHealth(current.healthUrl, HEALTH_TIMEOUT_MS);
		if (busy()) {
			return;
		}
		onResult("current", result);
		if (result.detail !== lastCurrentDetail) {
			onLog(`${current.displayHost} is ${result.detail}.`);
			lastCurrentDetail = result.detail;
		}
		if (result.healthy) {
			return;
		}

		const otherResult = await checkHealth(other.healthUrl, HEALTH_TIMEOUT_MS);
		if (busy()) {
			return;
		}
		onResult("other", otherResult);
		if (otherResult.detail !== lastOtherDetail) {
			onLog(`${other.displayHost} is ${otherResult.detail}.`);
			lastOtherDetail = otherResult.detail;
		}
		if (otherResult.healthy) {
			await offer(`${current.displayHost} is ${result.detail} and ${other.displayHost} is healthy.`);
		}
	}

	const interval = window.setInterval(() => {
		tick().catch((error) => onLog(`Health check failed: ${String(error)}`));
	}, HEALTH_POLL_INTERVAL_MS);
	tick().catch((error) => onLog(`Health check failed: ${String(error)}`));

	return {
		stop: (): void => window.clearInterval(interval)
	};
}
