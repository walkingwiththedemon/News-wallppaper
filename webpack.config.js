const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'scripts/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: ['env', 'stage-0', 'react'],
                        plugins: [
                            'transform-runtime',
                            'react-hot-loader/babel'
                        ],
                    }
                }
            },
            {
                test: /\.(css|sass)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    autoprefixer({
                                        browsers:['> 0.01%', 'last 15 version']
                                    })
                                ]
                            }
                        },
                        {
                            loader: 'sass-loader',
                        }
                    ]
                }),
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file-loader',
                exclude: '/node_modules/'
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        modules: [
            'node_modules'
        ],
    },
    plugins: [
        new HmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            hash: true
        }),
        new ExtractTextPlugin('styles/bundle.css')
    ],
    devServer: {
        contentBase: './src',
        compress: true,
        port: 8080,
        historyApiFallback: true
    }
}