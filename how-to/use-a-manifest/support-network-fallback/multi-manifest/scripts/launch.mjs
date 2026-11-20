/**
 * Launch the sample the way a shortcut does: the RVM is started with the manifest URL and fetches the
 * manifest itself. On Windows the RVM is started directly, because it blocks fin:// links to manifests
 * served over plain HTTP. Elsewhere the operating system opens the fin:// link.
 *
 * It does not use the node adapter, because the node adapter fetches the manifest before the RVM starts
 * and so fails before the RVM can use its fallback list.
 *
 * Usage:
 * - node ./scripts/launch.mjs: the internal route (normal identity).
 * - node ./scripts/launch.mjs public: the public route (normal identity).
 * - node ./scripts/launch.mjs fresh: the fresh identity on the internal route (first-launch scenario).
 */
import { spawn } from 'child_process';
import { existsSync } from 'fs';
import path from 'path';

const CONTROL_PANEL = 'http://localhost:5052';

/**
 * Ask the control panel for the launch details.
 * @param route The route to launch from.
 * @param identity The identity to launch.
 * @returns The manifest URL, fin:// link and direct RVM command.
 */
async function getLaunchDetails(route, identity) {
	const response = await fetch(`${CONTROL_PANEL}/api/launch-url?route=${route}&identity=${identity}`);
	if (!response.ok) {
		throw new Error(`The control panel returned ${response.status} ${response.statusText}.`);
	}
	return response.json();
}

/**
 * Start the RVM with the manifest URL. On Windows this runs the RVM directly, as a shortcut does;
 * elsewhere it opens the fin:// link with the operating system.
 * @param details The launch details.
 */
function open(details) {
	if (process.platform === 'win32') {
		const rvm = path.join(process.env.LOCALAPPDATA ?? '', 'OpenFin', 'OpenFinRVM.exe');
		if (!existsSync(rvm)) {
			console.error(`The RVM was not found at ${rvm}.`);
			return;
		}
		console.log(`Starting ${rvm} --config=${details.manifestUrl}`);
		spawn(rvm, [`--config=${details.manifestUrl}`], { detached: true, stdio: 'ignore' }).unref();
	} else {
		console.log(`Opening ${details.finLink}`);
		spawn('open', [details.finLink], { detached: true, stdio: 'ignore' }).unref();
	}
}

/**
 * Read the command line and launch.
 */
async function run() {
	const choice = process.argv[2];
	const route = choice === 'public' ? 'public' : 'internal';
	const identity = choice === 'fresh' ? 'fresh' : 'normal';

	console.log('Launch support network fallback');
	console.log('===============================');
	console.log();

	if (identity === 'fresh') {
		console.log(
			'WARNING: Launch only with the internal route down. A successful launch caches this identity.'
		);
		console.log('See "Resetting the fresh identity" in the README if it has been cached.');
		console.log();
	}

	try {
		const details = await getLaunchDetails(route, identity);
		console.log(`Manifest: ${details.manifestUrl}`);
		open(details);
		console.log();
		console.log('To start it yourself, run:');
		console.log(`  ${details.rvmCommand}`);
		console.log();
		console.log('Launch fallback (fallbackManifests) is handled by the RVM, which is Windows only.');
		console.log('RVM log: %LOCALAPPDATA%\\OpenFin\\logs\\rvm.log (look for FALLBACK_RESOLVER).');
		console.log('Use "npm run kill" to close everything.');
	} catch (error) {
		console.error(`Could not reach the control panel at ${CONTROL_PANEL}. Is "npm run start" running?`);
		console.error(error.message);
	}
}

run().catch((error) => console.error(error));
