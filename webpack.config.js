const path = require('path');
// auto rename bundles if entry names changed.
const HtmlWebpackPlugin = require('html-webpack-plugin'); // installed via npm
const CleanWebpackPlugin = require('clean-webpack-plugin'); // installed via npm

// the clean options to use
let cleanOptions = {
  //root:     '/full/webpack/root/path',
  //exclude:  ['shared.js'],
  //verbose:  true,
  //dry:      false
}

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], cleanOptions),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  output: {
    filename: '[name].bundle.js', //'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
