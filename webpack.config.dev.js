var webpack = require('webpack');
var path = require('path');
var pro = require('./project.json')

// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var CopyWebpackPlugin = require('copy-webpack-plugin');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var config = {};

var port = pro.server.port;

config.devtool = "source-map";

config.devServer = {
  // contentBase: path.join(__dirname, "/"),
  publicPath: pro.output.publicPath,
  historyApiFallback: true,
  compress: true,
  port: port,
  hot: true,
  inline: true
}
config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new OpenBrowserPlugin({ url: 'http://localhost:' + port + '/views'})
]


module.exports = config;
