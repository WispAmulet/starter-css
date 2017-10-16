const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
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

const styles = {
  test: /\.(scss)$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'sass-loader']
  })
};

const uglify = new webpack.optimize.UglifyJsPlugin({ // eslint-disable-line
  compress: { warnings: false }
});

const config = {
  entry: {
    App: './src/js/app.js'
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [javascript, styles]
  },
  plugins: [
    // uglify,
    new ExtractTextPlugin('style.css')
  ]
};

// process.noDeprecation = true;

module.exports = config;
