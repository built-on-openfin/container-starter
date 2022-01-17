const path = require('path');

module.exports = [
  {
    entry: './client/src/view-app.ts',
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
      filename: 'view-app.bundle.js',
      path: path.resolve(__dirname, '..', 'public', 'js'),
    },
  },
  {
    entry: './client/src/app.ts',
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
      filename: 'app.bundle.js',
      path: path.resolve(__dirname, '..', 'public', 'js'),
    },
  },
];
