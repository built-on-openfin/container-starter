
/**
 * Displays a view with information about the OpenFin runtime.
 */

document.addEventListener('DOMContentLoaded', () => {
	try {
		init();
	} catch (error) {
		console.error(error);
	}
});

/**
 * Handles the launch event from the Jumplist.
 */
// eslint-disable-next-line no-unused-vars
function handleUseLastConfiguration() {
	// this handler is called when the app is being launched
	app.on('run-requested', (event) => {
		if(event.userAppConfigArgs['use-last-configuration']) {
			// your logic here
			console.log("[HANDLER] In Run-Requested Event.");
		}
	});
	// this handler is called when the app was already running when the launch was requested
	fin.desktop.main((args) => {
		if(args && args['use-last-configuration']) {
			// your logic here
			console.log("[HANDLER] In User-Last-Configuration Event.");
		}
	});
}
/**
 * Initialize the DOM elements.
 */
async function init() {
	let rvmInfo;

	try {
		rvmInfo = await fin.System.getRvmInfo();
	} catch (err) {
		console.error(err);
	}

	const rvmVersionElement = document.querySelector('#rvmVersion');
	rvmVersionElement.textContent = `v${rvmInfo?.version ?? 'unknown'}`;

	const rvmPathElement = document.querySelector('#rvmPath');
	rvmPathElement.textContent = rvmInfo?.path ?? 'unknown';

	const appLogDirectoryElement = document.querySelector('#appLogDirectory');
	appLogDirectoryElement.textContent = rvmInfo?.appLogDirectory ?? 'unknown';

	let runtimeInfo;
	try {
		runtimeInfo = await fin.System.getRuntimeInfo();
	} catch (err) {
		console.error(err);
	}

	const runtimeVersionElement = document.querySelector('#runtimeVersion');
	runtimeVersionElement.textContent = `v${runtimeInfo?.version ?? 'unknown'}`;

	const chromeVersionElement = document.querySelector('#chromeVersion');
	chromeVersionElement.textContent = `v${runtimeInfo?.chromeVersion ?? 'unknown'}`;

	const electronVersionElement = document.querySelector('#electronVersion');
	electronVersionElement.textContent = runtimeInfo?.electronVersion ?? 'unknown';

	const platformIdentityElement = document.querySelector('#platformIdentity');
	platformIdentityElement.textContent = platform?.identity?.uuid ?? 'unknown';
}
