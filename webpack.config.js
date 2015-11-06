var webpack = require('webpack');
var path = require('path');
var srcPath = path.resolve(__dirname, 'src', 'app.js');
var dstPath = path.resolve(__dirname, 'web', 'js');

var nodeEnv = process.env.NODE_ENV || 'development';
var apiUrl = process.env.apiUrl || '';

var config = {

  // We change to normal source mapping
  devtool: 'cheap-module-source-map',
  entry: srcPath,
  output: {
    path: dstPath,
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        loader: 'ng-annotate-loader', // works RTL - example 'ng-annotate!jshint'
        exclude: /node_modules|coverage|scripts|web/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(nodeEnv),
        'appversion': JSON.stringify(require('./package.json').version),
        'apiUrl': JSON.stringify(apiUrl)
      }
    }),
    //new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ]
};

module.exports = config;