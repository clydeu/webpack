const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    cache: true,
    devtool: 'source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.css$/,
                include: [
                    path.resolve(__dirname, 'src/css')
                ],
                loader: 'style-loader!css-loader'
            }]
    }
};