const path = require('path');
const HtmlWebpackPlagin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    resolve: {
        modules: [path.resolve(__dirname), 'node_modules'],
        extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlagin({
            template: './src/index.html',
        }),
    ],
};
