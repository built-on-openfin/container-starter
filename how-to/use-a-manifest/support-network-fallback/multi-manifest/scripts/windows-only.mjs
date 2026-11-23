/**
 * The multi-manifest approach depends on the RVM's fallbackManifests, which only the Windows RVM handles.
 */

/**
 * Check that this is Windows, and explain why the sample does not apply if it is not.
 * @returns True on Windows.
 */
export function isWindowsOrExplain() {
	if (process.platform === 'win32') {
		return true;
	}
	const system = process.platform === 'darwin' ? 'macOS' : process.platform;
	console.error(`The multi-manifest sample does not apply on ${system}.`);
	console.error(
		'It relies on fallbackManifests, which is handled by the RVM on Windows only, so there is no launch fallback here.'
	);
	console.error('Use the provider-based sample instead: ../provider-based (npm run client works on macOS).');
	process.exitCode = 1;
	return false;
}
