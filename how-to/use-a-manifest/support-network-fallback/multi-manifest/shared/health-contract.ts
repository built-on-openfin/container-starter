/**
 * The /health contract. The server builds the document with it and the client reads it with it.
 *
 * What counts as healthy is the platform owner's decision. This sample only reports a status
 * that the control panel sets.
 */

/**
 * The status a route reports.
 */
export type HealthStatus = "healthy" | "unhealthy";

/**
 * The document returned by /health.
 */
export interface HealthDocument {
	/**
	 * The route's own view of its health.
	 */
	status: HealthStatus;
}

/**
 * Check whether a parsed /health body reports healthy.
 * @param body The parsed response body.
 * @returns True only for a document with status "healthy".
 */
export function isHealthy(body: unknown): boolean {
	return typeof body === "object" && body !== null && (body as { status?: unknown }).status === "healthy";
}
