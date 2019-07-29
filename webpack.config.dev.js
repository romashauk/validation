const {resolve, join} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssPlugin = new ExtractTextPlugin('css/[name].[hash].css');

module.exports = {
    devtool: 'cheap-modules-source-map',
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        'react',
        'react-dom',
        'webpack-dev-server/client?http://localhost:7070',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [join(__dirname, 'src'), join(__dirname, 'node_modules')]
    },
    output: {
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        compress: true,
        hot: true,
        open: true,
        host: '0.0.0.0',
        port: 7070,
        disableHostCheck: true,
        contentBase: resolve(__dirname, 'public'),
        publicPath: '/',
        historyApiFallback: {
            index: 'public/index.html'
        }
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                loader: 'eslint-loader',
                include: resolve(__dirname, 'src')
            },
            {
                exclude: [
                    /\.html$/,
                    /\.(js|jsx)$/,
                    /\.css$/,
                    /\.json$/,
                    /\.scss$/
                ],
                loader: 'url-loader'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                include: resolve(__dirname, 'src')
            },
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 3,
                                sourceMap: true
                            }
                        },
                        'resolve-url-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                outputStyle: 'compact',
                                sourceMap: true,
                                sourceComments: true
                            }
                        }
                    ]
                })
            }
        ]
    },

    plugins: [
        cssPlugin,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html'
        }),
        new CopyWebpackPlugin([{from: './src/img', to: 'img'}], {
            copyUnmodified: false
        })
    ]
};
