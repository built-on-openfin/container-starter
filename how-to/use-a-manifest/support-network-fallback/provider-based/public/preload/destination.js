/**
 * The destination part of the preload. Both routes serve it, and the preload imports it from the origin of
 * the page it is running on, so it always comes from the route the page was loaded from.
 *
 * It is a plain ES module with no imports, so the preload can load it with import() from either route.
 */
export const loadedFrom = new URL(import.meta.url).origin;

console.log(`[preload] destination part from ${loadedFrom}`);
