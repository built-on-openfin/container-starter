const path = require('path');

module.exports = [
    {
        entry: './client/src/provider.ts',
        devtool: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        output: {
            filename: 'provider.bundle.js',
            path: path.resolve(__dirname, '..', 'public', 'js'),
        },
    },
    {
        entry: './client/src/view.ts',
        devtool: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        output: {
            filename: 'view.bundle.js',
            path: path.resolve(__dirname, '..', 'public', 'js'),
        },
    },
    {
        entry: './client/src/window.ts',
        devtool: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        output: {
            filename: 'window.bundle.js',
            path: path.resolve(__dirname, '..', 'public', 'js'),
        },
    }
];
