const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: ['@babel/polyfill', 'whatwg-fetch', './src/index.tsx'],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].[hash].js',
  },
  devServer: {
    disableHostCheck: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(m?js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: { config: { path: 'postcss.config.js' } },
          },

          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        exclude: path.resolve(__dirname, 'src/Icons/favicon.png'),
        use: [
          {
            loader: 'file-loader',

            options: {
              outputPath: 'images',
            },
          },
        ],
      },
      {
        test: /\.png$/i,
        include: path.resolve(__dirname, 'src/Icons/favicon.png'),
        use: [
          {
            loader: 'file-loader',

            options: {
              name: 'favicon.[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
};
