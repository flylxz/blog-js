const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', './src/script.js'],
  output: {
    path: __dirname + '/dist/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: __dirname + '/dist'
  },
  plugins: [
    new HtmlPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ],
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  }
};
