/**
 * Send launch params to the sample, whether or not it is running. If it is running, the provider gets a
 * run-requested event; if not, it starts with the params. Either way the app view highlights them.
 *
 * On Windows, init starts the RVM with --config set to the manifest URL plus $$ params, which is what a fin://
 * link becomes, because the RVM blocks fin:// links to manifests served over plain HTTP. The RVM ignores a
 * separate --user-app-config-args argument. Elsewhere it opens the fin://
 * link with $$ params.
 *
 * Usage:
 * - node ./scripts/deeplink.mjs init [value]: init params.
 * - node ./scripts/deeplink.mjs fin [value]: open the fin:// link with $$ params through the operating system.
 * - node ./scripts/deeplink.mjs scheme [value]: open a here-sample-network-fallback:// link.
 */
import { spawn } from 'child_process';
import { existsSync } from 'fs';
import path from 'path';

const CONTROL_PANEL = 'http://localhost:5082';
const CUSTOM_SCHEME = 'here-sample-network-fallback';

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
 * Open a link with the operating system.
 * @param link The link.
 */
function openLink(link) {
	console.log(`Opening ${link}`);
	if (process.platform === 'win32') {
		spawn('cmd', ['/c', 'start', '""', `"${link}"`], {
			detached: true,
			stdio: 'ignore',
			windowsVerbatimArguments: true
		}).unref();
	} else {
		spawn('open', [link], { detached: true, stdio: 'ignore' }).unref();
	}
}

/**
 * Start the RVM with a manifest URL that carries init params.
 * @param configUrl The manifest URL with $$ params.
 */
function startRvm(configUrl) {
	const rvm = path.join(process.env.LOCALAPPDATA ?? '', 'OpenFin', 'OpenFinRVM.exe');
	if (!existsSync(rvm)) {
		console.error(`The RVM was not found at ${rvm}.`);
		return;
	}
	console.log(`Starting ${rvm} --config=${configUrl}`);
	spawn(rvm, [`--config=${configUrl}`], {
		detached: true,
		stdio: 'ignore'
	}).unref();
}

/**
 * Read the command line and send the params.
 */
async function run() {
	const kind = process.argv[2] ?? 'init';
	const value = process.argv[3] ?? 'hello';
	const args = `sampleParam=${encodeURIComponent(value)}&launchSource=script`;

	if (kind === 'scheme') {
		openLink(`${CUSTOM_SCHEME}://open?sampleParam=${encodeURIComponent(value)}`);
		return;
	}

	const details = await getLaunchDetails();
	const query = args.replace(/(^|&)/g, '$1$$$$');
	const finLink = `${details.finLink}?${query}`;
	if (kind === 'fin' || process.platform !== 'win32') {
		openLink(finLink);
	} else {
		startRvm(`${details.manifestUrl}?${query}`);
	}
}

run().catch((error) => {
	console.error(`Could not send the deep link. Is "npm run start" running? ${error.message}`);
});
