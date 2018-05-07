const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './assets/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader', // inject CSS to page
          use: [{
            loader: 'css-loader', // translates CSS into CommonJS modules
            options: {
              minimize: true,
              sourceMap: true,
            }
          }, {
            loader: 'postcss-loader', // Run post css actions
            options: {
              sourceMap: true,
              plugins: function () { // post css plugins, can be exported to postcss.config.js
                return [
                  require('precss'),
                  require('autoprefixer'),
                ];
              },
            },
          }, {
            loader: 'sass-loader', // compiles Sass to CSS
            options: {
              sourceMap: true,
            },
          }],
        }),
      },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new CopyWebpackPlugin([
      {from: './manifest.json', to: 'manifest.json'},
      {from: './assets/img/icon-144x144.png', to: 'img/icon-144x144.png'},
      {from: './assets/img/icon-512x512.png', to: 'img/icon-512x512.png'},
    ], {}),
    new HtmlWebpackPlugin({
      title: 'HTML Starter - homepage',
      template: './assets/html/index.htm',
    }),
    new HtmlWebpackPlugin({
      title: 'HTML Starter - category #1',
      template: './assets/html/category-01.htm',
      filename: 'category-01.htm',
    }),
    new HtmlWebpackPlugin({
      title: 'HTML Starter - category #2',
      template: './assets/html/category-02.htm',
      filename: 'category-02.htm',
    }),
    new HtmlWebpackPlugin({
      title: 'HTML Starter - category #3',
      template: './assets/html/category-03.htm',
      filename: 'category-03.htm',
    }),
    new HtmlWebpackPlugin({
      title: 'HTML Starter - category #4',
      template: './assets/html/category-04.htm',
      filename: 'category-04.htm',
    }),
    new HtmlWebpackPlugin({
      title: 'HTML Starter - category #5',
      template: './assets/html/category-05.htm',
      filename: 'category-05.htm',
    }),
    new HtmlWebpackPlugin({
      title: 'HTML Starter - category #6',
      template: './assets/html/category-06.htm',
      filename: 'category-06.htm',
    }),
    new HtmlWebpackPlugin({
      title: 'HTML Starter - category #7',
      template: './assets/html/category-07.htm',
      filename: 'category-07.htm',
    }),
    new HtmlWebpackPlugin({
      title: 'HTML Starter - category #8',
      template: './assets/html/category-08.htm',
      filename: 'category-08.htm',
    }),
    new HtmlWebpackPlugin({
      title: 'HTML Starter - category #9',
      template: './assets/html/category-09.htm',
      filename: 'category-09.htm',
    }),
    new HtmlWebpackPlugin({
      title: 'HTML Starter - product #1',
      template: './assets/html/product-01.htm',
      filename: 'product-01.htm',
    }),
    new ExtractTextPlugin('styles.css'),
  ]
};
