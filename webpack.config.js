const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const javascript = {
  test: /\.(js)$/,
  use: [{
    loader: 'babel-loader',
    options: { presets: ['es2015'] }
  }]
};

const css = {
  loader: 'css-loader',
  // options: { minimize: true } // uncomment this line to minimize the output css file
};

const style = {
  test: /\.(scss)$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [css, 'sass-loader']
  })
};

const html = {
  test: /\.(html)$/,
  use: 'html-loader'
};

const uglify = new webpack.optimize.UglifyJsPlugin({ // eslint-disable-line
  compress: { warnings: false }
});

const config = {
  entry: {
    'dist/App': './src/js/app.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: 'public'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [javascript, style, html]
  },
  plugins: [
    // uglify, // uncomment this line to uglify the output js file
    new CleanWebpackPlugin(['public']),
    new ExtractTextPlugin('dist/style.css'),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};

// process.noDeprecation = true;

module.exports = config;
