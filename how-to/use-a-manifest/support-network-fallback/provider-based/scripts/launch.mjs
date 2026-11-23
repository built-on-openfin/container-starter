/**
 * Launch the sample the way a shortcut does: the RVM is started with the public manifest URL and
 * fetches the manifest itself. The RVM is started directly on Windows and macOS, rather than through a
 * fin:// link, because the RVM only installs an app from a fin:// or fins:// link (first run) when its
 * manifest has the trusted application configuration, which this localhost sample does not have.
 *
 * There is only one manifest. The gateway page it starts decides which route the platform runs on.
 *
 * Usage: node ./scripts/launch.mjs
 */
import { rvmCommand, startRvm } from './rvm.mjs';

const CONTROL_PANEL = 'http://localhost:5082';

/**
 * Ask the control panel for the launch details.
 * @returns The manifest URL and fin:// link.
 */
async function getLaunchDetails() {
	const response = await fetch(`${CONTROL_PANEL}/api/launch-url`);
	if (!response.ok) {
		throw new Error(`The control panel returned ${response.status} ${response.statusText}.`);
	}
	return response.json();
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
		startRvm(details.manifestUrl);
		const command = rvmCommand(details.manifestUrl);
		if (command) {
			console.log();
			console.log('To start it yourself, run:');
			console.log(`  ${command}`);
		}
		console.log();
		console.log('The gateway logs its decision to the provider console; the app view shows it too.');
		console.log('Use "npm run kill" to close everything.');
	} catch (error) {
		console.error(`Could not reach the control panel at ${CONTROL_PANEL}. Is "npm run start" running?`);
		console.error(error.message);
	}
}

run().catch((error) => console.error(error));
