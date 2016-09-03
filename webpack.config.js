var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build/js/');
var SRC_DIR = path.resolve(__dirname, 'src/');

var config = {
    entry: [
        SRC_DIR + '/index.jsx'
    ],
    output: {
        path: BUILD_DIR,
        filename: '[name].js',
        chunkFilename: "[id].js"
    },
    resolve: {
        extensions: ['', '.jsx', '.scss', '.js', '.json', '.css'],  // along the way, subsequent file(s) to be consumed by webpack
        modulesDirectories: [
            'node_modules',
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                include: SRC_DIR,
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                loaders: ['style', 'css', 'sass'],
                include: SRC_DIR
            }
        ]
    }
};

module.exports = config;
