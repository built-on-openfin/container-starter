import type { Request, RequestHandler, Response } from "express";
import type { HealthDocument, HealthStatus } from "../../../shared/health-contract";

/**
 * Where the health handler gets its status from.
 */
export interface HealthSources {
	/**
	 * The current status of this route.
	 * @returns The status.
	 */
	status(): HealthStatus;
}

/**
 * Create the /health handler for a route.
 *
 * What counts as healthy is the platform owner's decision: for example whether the services the app
 * depends on behind this route are working. This sample simply reports what the sources say.
 * @param sources Where the status comes from.
 * @returns The request handler.
 */
export function createHealthHandler(sources: HealthSources): RequestHandler {
	return (req: Request, res: Response): void => {
		const document: HealthDocument = { status: sources.status() };
		res.set({
			"Cache-Control": "no-store",
			// The other route is checked cross-origin, so CORS must allow it.
			"Access-Control-Allow-Origin": "*"
		});
		res.json(document);
	};
}
