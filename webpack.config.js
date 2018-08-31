const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';
const buildMode = process.env.BUILD === 'true';

module.exports = {
  mode: devMode ? 'development' : 'production',
  entry: buildMode ? './src/generate.js' : './src/index.js',
  plugins: [
    new MiniCssExtractPlugin({
      filename: buildMode ? '../public/[name].css' : '[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  target: buildMode ? 'node' : undefined,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          buildMode
            ? {
                loader: MiniCssExtractPlugin.loader,
                options: { publicPath: '../public' }
              }
            : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              context: './src/components',
              modules: true,
              localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
            }
          }
        ]
      },
      {
        test: /\.md$/,
        use: 'raw-loader'
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/',
              publicPath: '/assets/'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js']
  }
};

module.exports.serve = {
  add: async (app, middleware, options) => {
    app.use(async (ctx, next) => {
      ctx.request.url = ctx.request.url.replace('green-ribbon/', '');
      await next(ctx);
    });
    await middleware.webpack();
    await middleware.content();
  }
};
