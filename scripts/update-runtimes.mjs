/**
 * This script updates the @openfin/core and @openfin/node-adapter package versions
 * across all projects in the how-to directory.
 *
 * Usage:
 * npm run update-runtime -- --core <version> --node-adapter <version>
 *
 * Examples:
 * npm run update-runtime -- --core 43.101.2 --node-adapter 43.101.2
 * npm run update-runtime -- --core 43.101.2
 * npm run update-runtime -- --node-adapter 43.101.2
 */

import FastGlob from 'fast-glob';
import fs from 'fs/promises';
import path from 'path';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

/**
 * Parse command line arguments.
 * @returns Parsed command line arguments.
 */
async function parseArgs() {
	const argv = await yargs(hideBin(process.argv))
		.option('core', {
			description: 'Version for @openfin/core package',
			type: 'string'
		})
		.option('node-adapter', {
			description: 'Version for @openfin/node-adapter package',
			type: 'string'
		})
		.help()
		.alias('help', 'h')
		.parseAsync();

	return argv;
}

/**
 * Execute the process.
 */
async function run() {
	console.log('Update OpenFin Versions');
	console.log('=======================');
	console.log();

	const args = await parseArgs();

	// Check that at least one version is specified
	if (!args.core && !args['node-adapter']) {
		console.error('Error: At least one version parameter must be specified.');
		console.error('Use --core and/or --node-adapter');
		throw error;
	}

	console.log('Update Parameters:');
	if (args.core) {
		console.log(`  @openfin/core: ${args.core}`);
	}
	if (args['node-adapter']) {
		console.log(`  @openfin/node-adapter: ${args['node-adapter']}`);
	}
	console.log();

	try {
		// Find all package.json files in the how-to directory
		const packageJsonFiles = await FastGlob('./how-to/*/package.json');

		console.log(`Found ${packageJsonFiles.length} package.json files`);
		console.log();

		let updatedCount = 0;

		for (const packageJsonPath of packageJsonFiles) {
			// const absolutePath = path.resolve(packageJsonPath);
			const projectName = path.dirname(packageJsonPath).split(path.sep)[1];

			try {
				const packageJsonContent = await fs.readFile(packageJsonPath, 'utf8');
				const packageJson = JSON.parse(packageJsonContent);

				let updated = false;

				// Update @openfin/core if specified
				if (args.core) {
					if (packageJson.devDependencies && packageJson.devDependencies['@openfin/core']) {
						packageJson.devDependencies['@openfin/core'] = args.core;
						updated = true;
						console.log(`  ${projectName}: Updated @openfin/core to ${args.core}`);
					}
					if (packageJson.dependencies && packageJson.dependencies['@openfin/core']) {
						packageJson.dependencies['@openfin/core'] = args.core;
						updated = true;
						console.log(`  ${projectName}: Updated @openfin/core to ${args.core}`);
					}
				}

				// Update @openfin/node-adapter if specified
				if (args['node-adapter']) {
					if (packageJson.devDependencies && packageJson.devDependencies['@openfin/node-adapter']) {
						packageJson.devDependencies['@openfin/node-adapter'] = args['node-adapter'];
						updated = true;
						console.log(`  ${projectName}: Updated @openfin/node-adapter to ${args['node-adapter']}`);
					}
					if (packageJson.dependencies && packageJson.dependencies['@openfin/node-adapter']) {
						packageJson.dependencies['@openfin/node-adapter'] = args['node-adapter'];
						updated = true;
						console.log(`  ${projectName}: Updated @openfin/node-adapter to ${args['node-adapter']}`);
					}
				}

				// Write the updated package.json back to file
				if (updated) {
					await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, '\t'), 'utf8');
					updatedCount++;
				}
			} catch (error) {
				console.error(`Error processing ${packageJsonPath}:`, error.message);
			}
		}

		console.log();
		console.log(`Update complete. Modified ${updatedCount} package.json file(s).`);
	} catch (error) {
		console.error('Error:', error.message);
		throw error;
	}
}

run().catch((err) => {
	console.error('Fatal error:', err);
	throw err;
});
