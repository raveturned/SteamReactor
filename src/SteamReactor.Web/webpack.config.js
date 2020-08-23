const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
};

module.exports = {
  entry: [
    'babel-polyfill',
    'whatwg-fetch',
    './react/index.jsx'
  ],
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'wwwroot'),
    filename: 'bundle.js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'eslint-loader' }
        ],
        exclude: /(node_modules|bower_components)/ },
      {
        test: /\.(gif|jp(e)g|png|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'images/[name].[hash].[ext]',
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  devtool: 'source-map',
  plugins: [
    // new webpack.optimize.OccurrenceOrderPlugin(), //?
    new webpack.DefinePlugin(GLOBALS),
    new webpack.ProvidePlugin({
      Promise: 'es6-promise',
      fetch: 'whatwg-fetch',
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './react/template.html',
      filename: './index.html',
    }),
  ],
};
