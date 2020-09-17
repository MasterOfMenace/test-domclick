const path = require(`path`);

module.exports = {
  entry: `index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`),
  },

  devServer: {
    contentBase: path.join(__dirname, `public`),
    open: false,
    publicPath: `/`,
    port: 3000,
  },

  devtool: `source-map`,
};
