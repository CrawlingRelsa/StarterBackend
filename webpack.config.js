const nodeExternals = require('webpack-node-externals')
const WebpackShellPlugin = require('webpack-shell-plugin');

const path = require('path');

module.exports = {
    entry: './src/index.ts',
    resolve: {
        extensions: ['.ts', '.js']
    },
    externals: [nodeExternals()],
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader' }
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    watch: process.env.NODE_ENV === 'development',
    plugins: [
        new WebpackShellPlugin({
          onBuildEnd: ['nodemon ' + path.resolve(__dirname, 'dist', 'main.js')]
        })
      ]
};