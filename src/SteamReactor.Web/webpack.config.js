const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: ['es6-promise', 'whatwg-fetch','./react/index.jsx'],
    target: 'web',
    resolve: {
        extensions: [".js", ".jsx"]
    },
    output: {
        path: path.resolve(__dirname, 'wwwroot'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.(js|jsx)$/, loaders: ['babel-loader', 'eslint-loader'], exclude: /node_modules/ }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.ProvidePlugin({
            Promise: 'es6-promise',
            fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
        }),      
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './react/template.html',
            filename: './index.html'
        })]
};