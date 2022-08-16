const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';

  const config = {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'none' : 'source-map',
    watch: !isProduction,
    entry: ['./src/js/index.js', './src/css/index.styl', './src/index.pug'],
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'script.js',
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.pug$/,
          use: [

            {
              loader: "pug-loader"
            },
          ],
        },
        {
          test: /\.styl$/,
          use: [
            MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader'
          ]
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader, 'css-loader'
          ]
        },
        {
          test: /\.(svg)$/,
          type: 'asset/resource',
          generator: {
            filename: 'assets/svg/[hash][ext][query]'
          }
        }, {
          test: /\.(png|jpg|jpeg|gif)$/,
          type: 'asset/resource',
          generator: {
            filename: 'assets/img/[hash][ext][query]'
          }
        },
        // {
        //   test: /\.html$/,
        //   loader: 'html-loader',
        // },

      ]
    },

    plugins: [
      new CleanWebpackPlugin(),

      new HtmlWebpackPlugin({
        template: './src/index.pug',
        filename: 'index.html',
        minify: false,
      }),
      // new HtmlWebpackPugPlugin(),
      new MiniCssExtractPlugin({
        filename: 'style.css'
      })
    ],

    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      // compress: true,
      port: 9000,
    },
  }

  return config;
}