var webpack = require('webpack');
var path = require('path');
var pro = require('./project.json')

// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var CopyWebpackPlugin = require('copy-webpack-plugin');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var config = {};
var js_name = pro.bundlename.js||'app';
var css_name = pro.bundlename.css||'style';
var port = 9000;

config.devtool = "source-map";

config.devServer = {
  contentBase: path.join(__dirname, "/"),
  compress: true,
  port: port,
  hot: true,
  inline: true
}
config.plugins = [
  // new webpack.LoaderOptionsPlugin({
  //   options: {
  //     devServer: {
  //       contentBase: "./", //本地服务器所加载的页面所在的目录
  //       colors: true, //终端中输出结果为彩色
  //       historyApiFallback: true, //不跳转
  //       inline: true, //实时刷新
  //       hot: true
  //     }
  //   }
  // }),
  new webpack.HotModuleReplacementPlugin(),
  new OpenBrowserPlugin({ url: 'http://localhost:' + port })

]


module.exports = config;
