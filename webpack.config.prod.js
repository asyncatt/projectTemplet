var webpack = require('webpack');
var path = require('path');
var pro = require('./project.json');
var CleanWebpackPlugin = require("clean-webpack-plugin");
var ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
    devtool: 'cheap-source-map',

    plugins: [
      new CleanWebpackPlugin([
          'dist/js'
      ], {
          root: __dirname,
          verbose: true,
          dry: false,
          exclude: []
      }),
      new ImageminPlugin({
        // disable: process.env.NODE_ENV !== 'production', // Disable during development
        pngquant: {
          quality: '50-90'
        }
      })
    ]
};
