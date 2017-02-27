// webpack.config.js
var webpack = require('webpack');
var path = require('path');
const chalk = require('chalk');

var pro = require('./project.json')

console.log(chalk.green("start to run " + pro.name));
console.log(chalk.green("NODE_ENV: ", process.env.NODE_ENV));

/** 判断是否配置了入口
*/
if(typeof pro.entry === "undefined"){
  console.log(chalk.red("entry is undefind, please config the entry in project.json"));
}

var entry = pro.entry;//获取入口文件配置
var limit = pro.output.limit||8000;//图片文件转base64的大小限制（小于limit的图片将被转换为base64）
var eslint = pro.eslint;//是否开启eslint校验
var common = pro.output.common;//是否提取公共代码

var output;
!!pro.output.hash?output = './[name].[hash].js':output = './[name].js';//是否启用hash命名文件

var config = process.env.NODE_ENV === 'production' ? require(
  './webpack.config.prod.js') : require('./webpack.config.dev.js');

config.context = __dirname + "/src",
config.entry = entry,
config.output = {
      path: __dirname + '/dist/js/',
      publicPath: __dirname + '/dist/js/',
      filename: output
  };

var loaders = [{
  test: /\.(png|jpg|svg)$/,
  include: path.resolve(__dirname, 'src'),
  loader: 'url-loader?limit=' + limit + '&name=../images/[hash:8].[name].[ext]'
}, {
  test: /\.css$/,
  include: path.resolve(__dirname, 'src'),
  loader: "style-loader!css-loader"
}, {
  test: /\.js[x]?$/,
  include: path.resolve(__dirname, 'src'),
  exclude: /node_modules/,
  loader: 'babel-loader'
}, {
  test: /\.scss$/,
  include: path.resolve(__dirname, 'src'),
  loader: 'style-loader!css-loader!sass-loader'
}];


/** 如果启用eslint，将eslint-loader加入到pre loader之中。
*/
if(eslint){
  console.log(chalk.green("eslint is used..."));

  loaders.unshift({
    enforce: 'pre',
    test: /\.js[x]$/,
    loader: 'eslint-loader',
    exclude: /node_modules/
  });
};

config.module = {
  loaders: loaders
};

config.resolve = {
  extensions: [".js", ".json", ".jsx", ".css"],
  alias: {
    //    "react":path.resolve(__dirname, 'client/lib/react.min.js'),
  }
};

if(common){
  console.log(chalk.green("make common file..."));


  config.plugins.unshift(
    new webpack.optimize.CommonsChunkPlugin(pro.common)
  )

}

module.exports = config;
