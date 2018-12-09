const path = require('path');
// auto rename bundles if entry names changed.
const HtmlWebpackPlugin = require('html-webpack-plugin'); // installed via npm
const CleanWebpackPlugin = require('clean-webpack-plugin'); // installed via npm
const webpack = require('webpack'); // initially added for hot module reload

// the clean options to use
let cleanOptions = {
  //root:     '/full/webpack/root/path',
  //exclude:  ['shared.js'],
  //verbose:  true,
  //dry:      false
}

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], cleanOptions),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js', //'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
