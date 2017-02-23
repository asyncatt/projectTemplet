// webpack.config.js

var path = require('path');
var pro = require('./project.json')

console.log("start to run " + pro.name);
console.log("NODE_ENV: ", process.env.NODE_ENV);

var config = process.env.NODE_ENV === 'production' ? require(
  './webpack.config.prod.js') : require('./webpack.config.dev.js');

config.context = __dirname + "/src",
config.entry = {
    [pro.name]: './index.js',
  },
config.output = {
      path: __dirname + '/dist',
      publicPath: '/dist',
      filename: './[name].js'
  },
config.module = {
    loaders: [{
      test: /\.(png|jpg)$/,
      include: path.resolve(__dirname, 'src'),
      loader: 'url-loader'
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
    }]
  },
  config.resolve = {
    extensions: [".js", ".json", ".jsx", ".css"],
    alias: {
      //    "react":path.resolve(__dirname, 'client/lib/react.min.js'),
    }
  };
module.exports = config;
