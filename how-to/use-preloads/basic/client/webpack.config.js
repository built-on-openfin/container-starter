const path = require('path');

module.exports = [
  {
    entry: './client/src/preload-platform.ts',
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
      filename: 'preload-platform.bundle.js',
      path: path.resolve(__dirname, '..', 'public', 'js'),
    },
  },
  {
    entry: './client/src/preload-window.ts',
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
      filename: 'preload-window.bundle.js',
      path: path.resolve(__dirname, '..', 'public', 'js'),
    },
  },
  {
    entry: './client/src/preload-view.ts',
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
      filename: 'preload-view.bundle.js',
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
  }
];
