const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: "./app/index.js", // Arquivo de entrada
  output: {
    path: path.join(__dirname, "dist"), // Diretorio de saída
    filename: "bundle.js", // Arquivo de saída
    publicPath: "/", // Informa ao DevServe o diretorio do bundle
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, "app", "index.html"),
    }),
  ],
  module: {
    loaders: [
      {
        loader:'html-es6-template-loader',
        test: /\.html$/
      }
    ]
  }
};

// Valida se é desenvolvimento
if (process.env.NODE_ENV === "development") {
  config.watch = true;
  config.devtool = "source-map";
} else if (process.env.NODE_ENV === "hot") {
  config.devtool = "source-map";
  config.devServer = {
    hot: true, // recebe as atualizações sem recarregar a página
  };
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = config;
