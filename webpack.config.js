const path = require(`path`);

module.exports = {
  entry: `./src/index.js`,
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

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node-modules/,
        use: {
          loader: `babel-loader`
        },
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: `style-loader`
          },
          {
            loader: `css-loader`,
            options: {
              modules: {
                localIdentName: `[local]`
              }
            }
          }
        ]
      }
    ],
  },

  devtool: `source-map`,
};
