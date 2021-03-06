const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');// tree shaking 精简输出
module.exports = {
    entry: {
        main: './src/index.js',
        vendor: [
            'lodash'
        ]
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'output management'
        }),
        new webpack.HotModuleReplacementPlugin(), // 热更新
        new UglifyJSPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor' // common bundle name
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            },
            {
                test: /\.json$/,
                use: ['json-loader']
            }
        ]
    }
}
// https://doc.webpack-china.org/guides/author-libraries