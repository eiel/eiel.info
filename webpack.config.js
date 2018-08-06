const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: devMode ? 'development' : 'production',
  entry: './src/index.js',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          devMode
            ? 'style-loader'
            : {
                loader: MiniCssExtractPlugin.loader,
                options: { publicPath: '../public' }
              },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }
};
