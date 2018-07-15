const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


var clientConfig = (function webpackConfig(){

  var config = Object.assign({});

  config.mode = 'production';

  config.entry = './src/js/index.js';

  config.output = {
    filename: 'js/script.js',
    path: path.resolve(__dirname, 'dist/prod')
  };

  config.module = {
    rules: [
      {
        test: /\.js$/,
        // exclude: /node_modules/,
        use: {
            loader: 'babel-loader'
          }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
        		options: { 
                    minimize: true,
                    url: false,
                    sourceMap: false
                }
          },
          {
            loader: 'postcss-loader',
                options: {
                    sourceMap: false
                }
          }
        ]
      }

    ]
  };

  config.devtool = false;

  config.resolve = {};

  config.plugins = [];

  config.plugins.push(
    new HtmlWebpackPlugin({
      h1: 'production',
	    template: 'src/template/index.html'
    })
  );

  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    })
  );

  config.plugins.push(
    new CopyWebpackPlugin([
      {
        from: 'assets/img',
        to: 'assets/img/[name].[ext]',
      }
    ])
  );

  config.plugins.push(
    new CopyWebpackPlugin([
      {
        from: 'assets/fonts',
        to: 'assets/fonts/[name].[ext]',
      }
    ])
  );

  return config;

});

module.exports = clientConfig;