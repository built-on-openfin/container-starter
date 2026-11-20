/**
 * Launch the sample the way a shortcut does: the RVM is started with the public manifest URL and
 * fetches the manifest itself. On Windows the RVM is started directly, because it blocks fin:// links to
 * manifests served over plain HTTP. Elsewhere the operating system opens the fin:// link.
 *
 * There is only one manifest. The gateway page it starts decides which route the platform runs on.
 *
 * Usage: node ./scripts/launch.mjs
 */
import { spawn } from 'child_process';
import { existsSync } from 'fs';
import path from 'path';

const CONTROL_PANEL = 'http://localhost:5082';

/**
 * Ask the control panel for the launch details.
 * @returns The manifest URL, fin:// link and direct RVM command.
 */
async function getLaunchDetails() {
	const response = await fetch(`${CONTROL_PANEL}/api/launch-url`);
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
 * Launch.
 */
async function run() {
	console.log('Launch support network fallback (provider-based)');
	console.log('=================================================');
	console.log();

	try {
		const details = await getLaunchDetails();
		console.log(`Manifest: ${details.manifestUrl}`);
		open(details);
		console.log();
		console.log('To start it yourself, run:');
		console.log(`  ${details.rvmCommand}`);
		console.log();
		console.log('The gateway logs its decision to the provider console; the app view shows it too.');
		console.log('Use "npm run kill" to close everything.');
	} catch (error) {
		console.error(`Could not reach the control panel at ${CONTROL_PANEL}. Is "npm run start" running?`);
		console.error(error.message);
	}
}

run().catch((error) => console.error(error));
