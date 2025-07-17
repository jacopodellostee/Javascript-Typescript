const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const TerserPlugin = require('terser-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: './src/scripts/main.js',
    output: { filename: '[name].bundle.js', path: path.resolve(__dirname, 'dist') },
    devServer: {
        static: {
            directory: path.join(__dirname, 'static'),
            publicPath: '/static',
            serveIndex: true
        }
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [[
                            '@babel/preset-env',
                            {
                                targets: { edge: '127', firefox: '128', chrome: '127', safari: '17.5', ie: '11' },
                                useBuiltIns: 'usage',
                                corejs: '3.21.1'
                            }
                        ]]
                    }
                }
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin()
        ],
    }
};
