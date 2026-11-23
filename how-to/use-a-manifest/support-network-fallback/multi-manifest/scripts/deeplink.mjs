/**
 * Send launch params to the sample, whether or not it is running. If it is running, the provider gets a
 * run-requested event; if not, it starts with the params. Either way the app view highlights them.
 *
 * Windows only, like the rest of this sample. Init starts the RVM with --config set to the manifest URL plus
 * $$ params, which is what a fin:// link becomes. Starting the RVM directly also works on first run, when a
 * fin:// link would not install the app because these localhost manifests have no trusted application
 * configuration. The RVM ignores a separate --user-app-config-args argument. A scheme link starts whichever
 * manifest last registered the scheme.
 *
 * Usage:
 * - node ./scripts/deeplink.mjs init [value] [internal|public]: init params, for the internal manifest by default.
 * - node ./scripts/deeplink.mjs fin [value] [internal|public]: open the fin:// link with $$ params.
 * - node ./scripts/deeplink.mjs scheme [value]: open a here-sample-network-fallback:// link.
 */
import { spawn } from 'child_process';
import { existsSync } from 'fs';
import path from 'path';
import { isWindowsOrExplain } from './windows-only.mjs';

const CONTROL_PANEL = 'http://localhost:5052';
const CUSTOM_SCHEME = 'here-sample-network-fallback';

/**
 * Ask the control panel for the launch details.
 * @param route The route whose manifest to target.
 * @returns The manifest URL and fin:// link.
 */
async function getLaunchDetails(route) {
	const response = await fetch(`${CONTROL_PANEL}/api/launch-url?route=${route}&identity=normal`);
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
	spawn('cmd', ['/c', 'start', '""', `"${link}"`], {
		detached: true,
		stdio: 'ignore',
		windowsVerbatimArguments: true
	}).unref();
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
	if (!isWindowsOrExplain()) {
		return;
	}
	const kind = process.argv[2] ?? 'init';
	const value = process.argv[3] ?? 'hello';
	const args = `sampleParam=${encodeURIComponent(value)}&launchSource=script`;

	if (kind === 'scheme') {
		openLink(`${CUSTOM_SCHEME}://open?sampleParam=${encodeURIComponent(value)}`);
		return;
	}

	const route = process.argv[4] === 'public' ? 'public' : 'internal';
	const details = await getLaunchDetails(route);
	const query = args.replace(/(^|&)/g, '$1$$$$');
	if (kind === 'fin') {
		openLink(`${details.finLink}?${query}`);
	} else {
		startRvm(`${details.manifestUrl}?${query}`);
	}
}

run().catch((error) => {
	console.error(`Could not send the deep link. Is "npm run start" running? ${error.message}`);
});
