const baseWebpackConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

process.env.NODE_ENV === 'production'

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = merge(baseWebpackConfig, {
    output: {
        path: resolve('dist'),
        filename: "jumap.[hash].js",
    },
    plugins: [new CleanWebpackPlugin('dist', {root: resolve('')})]
});