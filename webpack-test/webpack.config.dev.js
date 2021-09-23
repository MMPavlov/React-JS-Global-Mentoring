const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js',
    },
    devtool: 'source-map',
    watch: true,
    devServer: {
        static: {
            directory: path.join(__dirname),
        },
        compress: true,
        port: 3000,
    },
});
