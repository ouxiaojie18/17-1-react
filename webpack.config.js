'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer:{
        disableHostCheck:true
    },
    devtool: 'eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        // path.join(__dirname, 'app/final/index.js')
        path.join(__dirname, 'app/index.js')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            // template: './app/index.tpl.html',
            template: './index.tpl.html',
            inject: 'body',
            filename: './index.html'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        //new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    module: {
        // resolve: {
        //     extensions: ['', '.js', '.json']
        // },
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ['react', 'es2015'],
                plugins: [
                    ["import", {libraryName: "antd", style: "css"}]
                ] 
            }
        }, {
            test: /\.json?$/,
            loader: 'json-loader'
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.less/,
            loader: 'style-loader!css-loader!less-loader'
        }, {
          test: /\.(png|jpg|gif)$/,
          loader: 'url-loader?limit=8192',
        }
        ]
    }
};