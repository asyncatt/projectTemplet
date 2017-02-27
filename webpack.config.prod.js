var webpack = require('webpack');
var path = require('path');
var pro = require('./project.json');
var CleanWebpackPlugin = require("clean-webpack-plugin");

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
      })
    ]
};
