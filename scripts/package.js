const { execSync } = require('child_process');
const fg = require('fast-glob');
const fs = require('fs-extra');
const replace = require('replace-in-file');
const yargs = require('yargs');
const packageJson = require('../package.json');
const URLBaseMap = new Map([
	['github', 'https://built-on-openfin.github.io'],
	['aws', 'https://samples.openfin.co']
]);
args = yargs(process.argv.slice(2))
	.usage('$0 [args]')
	.env('PKG_HOWTOS')
	.option('l', {
		alias: 'location',
		choices: Array.from(URLBaseMap.keys()),
		default: 'github',
		type: 'string',
		description: 'Publish location for which the package(s) should be adapted.'
	})
	.option('p', {
		alias: 'path',
		default: '',
		type: 'string',
		description: 'Path under which the HOWTOs should be placed in the publish location.'
	})
	.options('legacy', {
		default: false,
		type: 'boolean',
		description: "Package for github in the 'public/' folder."
	})
	.help()
	.alias('help', 'h').argv;

function packageHOWTOs(args) {
	let publishDir = `public-${args.location}`;

	if (args.legacy) {
		publishDir = 'public';
		args.location = 'github';
		args.l = args.location;
	}

	const baseURL = URLBaseMap.get(args.location);
	let hostFolder = args.path ? args.path : `container/v${packageJson.version}`;

	if (packageJson.howToCustomFolder !== undefined && packageJson.howToCustomFolder !== '') {
		hostFolder = packageJson.howToCustomFolder;
	}

	// Make a publish location specific copy to allow multiple package runs
	// for different locations.
	fs.rmSync(publishDir, { recursive: true, force: true });

	workspaces = fg.sync(packageJson.workspaces, { onlyDirectories: true });
	if (packageJson.packageExclude) {
		workspaces = workspaces.filter((item) => !packageJson.packageExclude.includes(item));
	}

	for (let i = 0; i < workspaces.length; i++) {
		const workspace = workspaces[i];
		let howto = workspace.split('/')[1];

		if (args.legacy) {
			execSync('npm run build-client', {
				cwd: workspace,
				stdio: 'inherit'
			});
		}

		const sourceDir = [workspace, 'public'].join('/');
		let targetDir;

		if (fs.existsSync(sourceDir)) {
			const parts = sourceDir.split('/');
			if (parts.length === 4) {
				howto += `-${parts[2]}`;
			}
			targetDir = [publishDir, howto].join('/');
			fs.copySync(sourceDir, targetDir);
		}

		try {
			const commonUrl = [baseURL, 'container-starter', hostFolder, 'common'].join('/');
			const commonOptions = [
				{
					files: `${targetDir}/**/*.json`,
					from: /http:\/\/localhost:5050\/common/g,
					to: commonUrl
				},
				{
					files: `${targetDir}/**/*.html`,
					from: /(src|href)="\/common/g,
					to: `$1="${commonUrl}`
				}
			];

			for (const common of commonOptions) {
				const commonResults = replace.sync(common);
				console.log('Replacement results for common:', commonResults);
				console.log(`Common URLs replaced with: ${commonUrl}`);
			}

			const rootUrl = [baseURL, 'container-starter', hostFolder, howto].join('/');
			const options = {
				files: `${targetDir}/**/*.json`,
				from: /http:\/\/localhost:5050/g,
				to: rootUrl
			};

			const results = replace.sync(options);
			console.log('Replacement results:', results);
			console.log(`URLs replaced with: ${rootUrl}`);
		} catch (error) {
			console.error('Error occurred:', error);
		}
	}
	console.log(`Packages prepared for publishing in: ${publishDir}/`);
}

packageHOWTOs(args);
