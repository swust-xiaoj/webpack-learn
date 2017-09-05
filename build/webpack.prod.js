const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'cheap-module-source-map',
    plugins: [
        new UglifyJSPlugin(), // 也可以在命令行中直接添加 --optimize-minize
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV':JSON.stringify('prod')
            }
        }), // same to `--define process.env.NODE_ENV = "'prod'"`
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor' // common bundle name
        })
    ]
});