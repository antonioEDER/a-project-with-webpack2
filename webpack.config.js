const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextWebpackPlugin({
  filename: '[name].[contenthash:8].bundle.css',
  disable: false,
});

const config = {
  entry: './app/index.js', // Arquivo de entrada
  output: {
    path: path.join(__dirname, 'dist'), // Diretorio de saída
    filename: 'bundle.js', // Arquivo de saída
    publicPath: '/', // Informa ao DevServe o diretorio do bundle
  },
  plugins: [
    // eslint-disable-next-line new-cap
    new htmlWebpackPlugin({
      template: path.join(__dirname, 'app', 'index.html'),
    }),
    extractSass,
  ],
  module: {
    loaders: [ // ou rules
      {
        loader: 'html-es6-template-loader',
        test: /\.html$/,
        exclude(filePath) {
          return filePath === path.join(__dirname, 'app', 'index.html');
        },
        query: {
          transpile: true,
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015'], // transpila para um JS mais recente
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(s[ca]ss)$/,
        loader: extractSass.extract({
          use: [
            { loader: 'css-loader' },
            { loader: 'sass-loader' },
          ],
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.(jpe?g|png|gif|svg)/,
        use: [
          {
            loader: 'url-loader',
            query: {
              limit: 10000,
              name: '[name].[hash:8].[ext]',
            },
          },
          { loader: 'image-webpack-loader' },
        ],
      },
    ],
  },
};

// Valida se é desenvolvimento
if (process.env.NODE_ENV === 'development') {
  config.watch = true;
  config.devtool = 'source-map';
} else if (process.env.NODE_ENV === 'hot') {
  config.devtool = 'source-map';
  config.devServer = {
    hot: true, // recebe as atualizações sem recarregar a página
  };
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = config;
