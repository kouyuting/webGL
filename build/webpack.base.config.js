const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: [
        resolve("src/main.js")
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src')],
                query: {
                    presets: ['es2015']
                }
            }
            // {
            //     test: /\.css$/,
            //     use: [
            //         { loader: 'style-loader' },
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 modules: true,
            //                 minimize: process.env.NODE_ENV !== 'dev',
            //                 sourceMap: process.env.NODE_ENV !== 'dev'
            //             }
            //         }
            //     ]
            // }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'jumap demo'
      }),
    ],
}