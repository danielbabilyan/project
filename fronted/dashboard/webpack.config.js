const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/vue_engine.js',
    devtool: 'inline-source-map',
    stats: {
        children: false,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, "src"),
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.html$/,
                include: [
                    path.resolve(__dirname, "src"),
                ],
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: false
                    }
                }
            },
            {
                test: /\.less$/,
                include: path.resolve(__dirname, "src"),
                use: [
                    {
                        loader: "style-loader",
                        options: {
                            singleton : true,
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: "less-loader",
                        options: {
                            sourceMap: true,
                            sourceMapFileInline: true,
                        }
                    },

                ]
            },
        ]
    },
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'public/dist'),
    }
};