const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        d3: './src/d3/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'd3.html',
            title: 'D3 Projects',
            chunks: ['d3']
        })
    ],
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' }
        ]
    },
    devServer: {
        contentBase: './dist',
        inline: true,
        hot: true,
    }
}