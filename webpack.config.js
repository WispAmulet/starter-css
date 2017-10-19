const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const autoprefixer = require('autoprefixer');

const javascript = {
  test: /\.(js)$/,
  use: [{
    loader: 'babel-loader',
    options: { presets: ['es2015'] }
  }]
};

// const postcss = {
//   loader: 'postcss-loader',
//   options: {
//     plugins() { return [autoprefixer({ browsers: 'last 3 versions' })]; }
//   }
// };

const style = {
  test: /\.(scss)$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'sass-loader']
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
    // uglify,
    new CleanWebpackPlugin(['public']),
    new ExtractTextPlugin('dist/style.css'),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};

// process.noDeprecation = true;

module.exports = config;
