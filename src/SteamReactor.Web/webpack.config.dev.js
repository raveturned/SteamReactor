const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: [
        'babel-polyfill',
        'whatwg-fetch',
        './react/index.jsx'
    ],
    target: 'web',
    resolve: {
        extensions: [".js", ".jsx"]
    },
    output: {
        path: path.resolve(__dirname, 'wwwroot'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    { loader: 'babel-loader' },
                    { loader: 'eslint-loader' }
                ],
                exclude: /node_modules/ },
            {
                test: /\.(gif|jp(e)g|png|svg)$/,
                use: {
                    loader: "file-loader",
                    options: {
                    name: "images/[name].[hash].[ext]",
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { 
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                            },
                        },
                    },
                ]
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.ProvidePlugin({
            Promise: 'es6-promise',
            fetch: 'whatwg-fetch',
        }),      
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './react/template.html',
            filename: './index.html'
        }),
    ]
};