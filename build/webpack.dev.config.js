const baseWebpackConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
const webpack = require('webpack');

process.env.NODE_ENV === 'dev';

module.exports = merge(baseWebpackConfig, {
    output: {
        filename: "app.[hash].js",
    },
    devServer: {
        open: true,
        openPage: ''
    }
});