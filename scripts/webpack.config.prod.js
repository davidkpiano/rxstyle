var path = require('path');

'use strict';

module.exports = {
  entry: path.join(__dirname, 'src/index'),
  output: {
    library: 'RxStyle',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
    ],
  },
  resolve: {
    extensions: ['', '.js'],
  },
  plugins: [],
  // devtool: 'inline-source-map'
};
