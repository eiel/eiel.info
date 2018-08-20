const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';
const buildMode = process.env.BUILD === 'true';

module.exports = {
  mode: devMode ? 'development' : 'production',
  entry: buildMode ? './src/generate.js' : './src/index.js',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../public/[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          devMode && false
            ? 'style-loader'
            : {
                loader: MiniCssExtractPlugin.loader,
                options: { publicPath: '../public' }
              },
          {
            loader: 'css-loader',
            options: {
              context: './src/components',
              modules: true,
              localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
            }
          }
        ]
      }
    ]
  }
};
