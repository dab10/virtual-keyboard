const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin'); // WORK WITH HTML (TURN TO FOLDER DIST WITH OTHER FILES CHANGES)
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // CLEAN FOLDER DIST WHEN "NPM START"
const CopyWebpackPlugin = require('copy-webpack-plugin'); // FAVICON
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // FOR CSS
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin'); // FOR MINIMIZE CSS
const TerserWebpackPlugin = require('terser-webpack-plugin'); // FOR MINIMIZE JS

const isDev = process.env.NODE_ENV === 'development'; // VAR FOR DEVELOPMENT OR PRODUCTION
const isProd = !isDev;

const optimization = () => {
  const config = { // CREATE COMMON FILE WITH COMMON LIBRARIES INSTEAD OF EACH LIBRRY FROM EACH FILE
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: 'single',
  };

  if (isProd) { // in relation to dev or prod CREATE all or minimize CSS, JS
    config.minimizer = [
      new CssMinimizerWebpackPlugin(),
      new TerserWebpackPlugin(),
    ];
  }

  return config;
};

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[fullhash].${ext}`); // in relation to dev or prod CREATE all or minimize filename CSS, JS

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',

  },
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist'),

  },
  optimization: optimization(),
  devServer: { // WEBPACK-DEV-SERVER
    port: 4200, // CHOOSE PORT
    hot: isDev,

  },
  devtool: isDev ? 'source-map' : false, // View initial files css, js, etc.
  plugins: [
    new HTMLWebpackPlugin({ // WORK WITH HTML (TURN TO FOLDER DIST WITH OTHER FILES CHANGES)
      template: './src/index.html', // PATTERN FOR FINISH HTML
      minify: {
        collapseWhitespace: isProd, // MINIMIZE HTML FOR PRODUCTION
      },
    }),
    new CleanWebpackPlugin(), // CLEAN FOLDER DIST WHEN "NPM START"
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/favicon.ico'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/, // FILE EXTENSION .CSS
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // NEW FOR WORK WITH CSS
      },
      {
        test: /\.(png|jpg|svg|gif)$/, // FILE EXTENSION PICTURE
        type: 'asset/resource', // INSTEAD OF ['file-loader']?
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/, // FILE EXTENSION FONTS
        type: 'asset/resource', // INSTEAD OF ['file-loader']?
      },
      {
        test: /\.xml$/, // FILE EXTENSION .XML
        use: ['xml-loader'], // LOADER
      },
      {
        test: /\.csv$/, // FILE EXTENSION .CSV
        use: ['csv-loader'], // LOADER
      },
      {
        test: /\.less$/, // FILE EXTENSION .LESS
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'], // WORK WITH LESS
      },
      {
        test: /\.s[ac]ss$/, // FILE EXTENSION .SCSS
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'], // WORK WITH SCSS
      },
    ],
  },
};
