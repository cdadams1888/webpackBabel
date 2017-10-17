 const path = require('path');

module.exports = {
    entry: __dirname + "/index.jsx",
    output: {
        path: __dirname + "/dist/assets",
        filename: "bundle.js",
        publicPath: "assets"
    },
    devServer: {
        inline: true,
        contentBase: __dirname + "/dist",
        port: 3000
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ["env", "stage-0", "react"]
            }
        }]
    }
}


