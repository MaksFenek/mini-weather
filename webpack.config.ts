const path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(m?js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
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
