/**
 * Find and start the RVM on Windows and macOS, the way a shortcut does.
 */
import { spawn } from 'child_process';
import { existsSync } from 'fs';
import os from 'os';
import path from 'path';

/**
 * The places the RVM is installed by default on this operating system.
 * @returns The candidate paths, most likely first.
 */
function rvmCandidates() {
	if (process.platform === 'win32') {
		return [path.join(process.env.LOCALAPPDATA ?? '', 'OpenFin', 'OpenFinRVM.exe')];
	}
	if (process.platform === 'darwin') {
		const app = path.join('OpenFinRVM.app', 'Contents', 'MacOS', 'OpenFinRVM');
		return [path.join('/Applications', app), path.join(os.homedir(), 'Applications', app)];
	}
	return [];
}

/**
 * Find the RVM.
 * @returns The RVM path, or undefined if it is not installed where expected.
 */
export function findRvm() {
	return rvmCandidates().find((candidate) => existsSync(candidate));
}

/**
 * The command a user can run to start the RVM with a manifest URL.
 * @param configUrl The manifest URL.
 * @returns The command, or undefined on an operating system the sample does not support.
 */
export function rvmCommand(configUrl) {
	if (process.platform === 'win32') {
		return `"%LOCALAPPDATA%\\OpenFin\\OpenFinRVM.exe" --config="${configUrl}"`;
	}
	if (process.platform === 'darwin') {
		return `/Applications/OpenFinRVM.app/Contents/MacOS/OpenFinRVM --config="${configUrl}"`;
	}
}

/**
 * Start the RVM with a manifest URL.
 * @param configUrl The manifest URL, which may carry $$ init params.
 * @returns True if the RVM was found and started.
 */
export function startRvm(configUrl) {
	const rvm = findRvm();
	if (!rvm) {
		const searched = rvmCandidates();
		console.error(
			searched.length > 0
				? `The RVM was not found. Looked in: ${searched.join(', ')}`
				: `This sample can start the RVM on Windows and macOS only, not on ${process.platform}.`
		);
		return false;
	}
	console.log(`Starting ${rvm} --config=${configUrl}`);
	spawn(rvm, [`--config=${configUrl}`], { detached: true, stdio: 'ignore' }).unref();
	return true;
}
