var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: [path.join(__dirname, 'src'),
                path.join(__dirname, 'node_modules')]
    }]
  }
};
