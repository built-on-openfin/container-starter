/**
 * The gateway's service worker. Its scope is /gateway/, so it only controls the gateway and the
 * preference page; the providers and views on either route are never controlled by it.
 *
 * It caches the gateway's files so the gateway still loads if the public route is briefly unreachable.
 * Each cached file is fetched from the network first, with a short timeout, and the cache is used only
 * when the network fails. Every other request, including /health, goes to the network untouched.
 */
// CacheStorage is shared by the whole origin, so activation only deletes older caches with this prefix.
const CACHE_PREFIX = 'support-network-fallback-provider-gateway-';
const CACHE_NAME = `${CACHE_PREFIX}v1`;
const NETWORK_TIMEOUT_MS = 3000;
const CACHED_PATHS = [
	'/gateway/index.html',
	'/gateway/gateway.css',
	'/js/gateway.bundle.js',
	'/gateway/preference.html',
	'/js/preference.bundle.js'
];

self.addEventListener('install', (event) => {
	event.waitUntil(
		caches
			.open(CACHE_NAME)
			.then((cache) => cache.addAll(CACHED_PATHS))
			.then(() => self.skipWaiting())
	);
});

self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches
			.keys()
			.then((names) =>
				Promise.all(
					names
						.filter((name) => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
						.map((name) => caches.delete(name))
				)
			)
			.then(() => self.clients.claim())
	);
});

self.addEventListener('fetch', (event) => {
	const url = new URL(event.request.url);
	if (
		event.request.method !== 'GET' ||
		url.origin !== self.location.origin ||
		!CACHED_PATHS.includes(url.pathname)
	) {
		return;
	}
	event.respondWith(networkFirst(url));
});

/**
 * Fetch a cached file from the network, updating the cache, or answer from the cache if the network fails.
 * @param url The request URL.
 * @returns The response.
 */
async function networkFirst(url) {
	const cache = await caches.open(CACHE_NAME);
	const controller = new AbortController();
	const timer = setTimeout(() => controller.abort(), NETWORK_TIMEOUT_MS);
	try {
		const response = await fetch(url.href, { cache: 'no-store', signal: controller.signal });
		if (response.ok) {
			await cache.put(url.pathname, response.clone());
			return response;
		}
		return (await cache.match(url.pathname)) ?? response;
	} catch (error) {
		const cached = await cache.match(url.pathname);
		if (cached) {
			return cached;
		}
		throw error;
	} finally {
		clearTimeout(timer);
	}
}
