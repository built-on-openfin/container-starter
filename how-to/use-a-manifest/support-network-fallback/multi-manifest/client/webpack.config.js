const path = require('path');

/**
 * Create the webpack config for one entry point.
 * @param name The bundle name.
 * @param source The entry file, relative to client/src.
 * @returns The webpack config.
 */
function entry(name, source) {
	return {
		entry: `./client/src/${source}`,
		devtool: 'inline-source-map',
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: {
						loader: 'ts-loader',
						options: { configFile: path.resolve(__dirname, 'tsconfig.json') }
					},
					exclude: /node_modules/
				}
			]
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js']
		},
		output: {
			filename: `${name}.bundle.js`,
			path: path.resolve(__dirname, '..', 'public', 'js')
		}
	};
}

module.exports = [
	entry('provider', 'provider.ts'),
	entry('app', 'app.ts'),
	entry('switcher', 'switcher/switcher.ts')
];
