const path = require('path'),
    resolvePath = path.resolve(__dirname, "./dist"),
    filename = "bundel.[contenthash].js",
    entry = './src/index.js';
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: entry,
    output: {
        filename: filename,
        path: resolvePath
    },
    mode: 'none', //- development & production
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader', 'css-loader'
            ]
        }]
    },
    plugins: [
        new CleanWebpackPlugin,
        new HtmlWebpackPlugin({ filename: 'index.html' })
    ],
    devServer: {
        static: {
            directory: resolvePath,
        },
        compress: true,
        port: 9000,
    },
}