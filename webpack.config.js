var webpack = require('webpack');
const { join } = require('path');

var config = {
    context: join(__dirname, 'src'), // `__dirname` is root of project and `src` is source
    entry: {
        app: './app.js',
    },
    output: {
        path: join(__dirname, 'dist'), // `dist` is the destination
        filename: '[name].bundle.js',
    },

    module: {
        rules: [{
            test: /\.(sass|scss)$/, //Check for sass or scss file names
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ]
        }]
    }, devtool: "eval-source-map" // Default development sourcemap
};

// Check if build is running in production mode, then change the sourcemap type
if (process.env.NODE_ENV === "production") {
    config.devtool = "source-map";

    // Can do more here
    // JSUglify plugin
    // Offline plugin
    // Bundle styles seperatly using plugins etc,
}


module.exports = config;