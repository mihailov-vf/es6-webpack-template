var webpack = require('webpack');

module.exports = {
    entry: ['./app/app'],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {presets: ['es2015']}
            }
        ]
    }
}