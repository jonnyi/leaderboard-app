var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve('public'),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.js.map'
  },
  devServer: {
    contentBase: './public'
  },
  module: {
    rules: [
      {
        //Babel and react loader
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        // CSS compilers
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: 'bundle.js.map'
    })
  ]
};
