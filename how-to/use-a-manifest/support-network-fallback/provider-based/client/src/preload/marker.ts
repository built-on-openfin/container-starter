/**
 * What the preload records on the page, so the app view can show what ran.
 */
export interface PreloadMarker {
	/**
	 * True once the public part has run.
	 */
	publicPart: boolean;

	/**
	 * What happened to the destination part, for display.
	 */
	destination: string;
}

/**
 * The window property the preload writes the marker to.
 */
export const PRELOAD_MARKER_KEY = "networkFallbackPreload";

/**
 * The window event the preload fires whenever the marker changes. The destination part loads
 * asynchronously, so it can settle after the page has started.
 */
export const PRELOAD_MARKER_EVENT = "network-fallback-preload";

/**
 * Read the marker from the current window.
 * @returns The marker, or undefined if the preload has not run.
 */
export function readPreloadMarker(): PreloadMarker | undefined {
	return (window as unknown as { [key: string]: PreloadMarker | undefined })[PRELOAD_MARKER_KEY];
}

/**
 * Write the marker to the current window and announce the change.
 * @param marker The marker.
 */
export function writePreloadMarker(marker: PreloadMarker): void {
	(window as unknown as { [key: string]: PreloadMarker | undefined })[PRELOAD_MARKER_KEY] = marker;
	window.dispatchEvent(new CustomEvent(PRELOAD_MARKER_EVENT));
}
