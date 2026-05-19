/**
 * Minimal service worker for the clearCacheData example.
 * This worker does nothing meaningful — it exists solely so that
 * navigator.serviceWorker.getRegistrations() returns a visible
 * entry in the Current State panel, allowing you to observe it
 * being cleared by fin.System.clearCacheData({ dataTypes: ['serviceWorkers'] }).
 */
self.addEventListener("install", (event) => {
	self.skipWaiting();
});

self.addEventListener("activate", (event) => {
	event.waitUntil(self.clients.claim());
});
