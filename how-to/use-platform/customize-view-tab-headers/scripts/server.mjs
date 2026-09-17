import { extractFile } from '@electron/asar';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { homedir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PORT = 5050;
const RUNTIME_VERSION = '45.150.101.1';
const PUBLIC_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'public');
const INJECTABLE_ROOT = 'node_modules/@openfin/renderer-injectables/out';
const CONTENT_TYPES = {
	'.css': 'text/css; charset=utf-8',
	'.html': 'text/html; charset=utf-8',
	'.ico': 'image/x-icon',
	'.js': 'text/javascript; charset=utf-8',
	'.json': 'application/json; charset=utf-8',
	'.svg': 'image/svg+xml'
};

createServer((request, response) => {
	const url = new URL(request.url ?? '/', `http://${request.headers.host ?? 'localhost'}`);
	const pathname = url.pathname === '/' ? '/manifest.fin.json' : decodeURIComponent(url.pathname);
	const staticPath = path.resolve(PUBLIC_ROOT, `.${pathname}`);

	if (staticPath.startsWith(PUBLIC_ROOT) && existsSync(staticPath) && statSync(staticPath).isFile()) {
		sendHeaders(response, staticPath);
		createReadStream(staticPath).pipe(response);
		return;
	}

	if (path.extname(pathname) === '.js') {
		const archivePath = getRuntimeArchivePath();
		if (archivePath) {
			try {
				const contents = extractFile(archivePath, `${INJECTABLE_ROOT}/${path.basename(pathname)}`);
				sendHeaders(response, pathname);
				response.end(contents);
				return;
			} catch {
				// The requested script is not a Runtime renderer injectable.
			}
		}
	}

	response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
	response.end('Not found');
}).listen(PORT, '0.0.0.0', () => {
	console.log(`Serving the example at http://localhost:${PORT}`);
});

/**
 * Find the Runtime archive after the node adapter has downloaded it.
 * @returns The archive path, when available.
 */
function getRuntimeArchivePath() {
	const candidates = [
		path.join(
			homedir(),
			'OpenFin',
			'runtime',
			RUNTIME_VERSION,
			'OpenFin.app',
			'Contents',
			'Resources',
			'app.asar'
		),
		path.join(homedir(), 'OpenFin', 'runtime', RUNTIME_VERSION, 'resources', 'app.asar'),
		path.join(process.env.LOCALAPPDATA ?? '', 'OpenFin', 'runtime', RUNTIME_VERSION, 'resources', 'app.asar')
	];
	return candidates.find((candidate) => existsSync(candidate));
}

/**
 * Set response headers for a static or Runtime-provided asset.
 * @param response The response.
 * @param filePath The asset path.
 */
function sendHeaders(response, filePath) {
	const contentType = CONTENT_TYPES[path.extname(filePath)] ?? 'application/octet-stream';
	response.writeHead(200, {
		'Cache-Control': 'no-store',
		'Content-Type': contentType
	});
}
