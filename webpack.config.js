module.exports = {
  mode: 'development',
  context: __dirname,
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['*', '.js'],
  },
  entry: { main: ['./src/js/main.js'] },
  module: {
    rules: [
      {
        test: /\.handlebars$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'handlebars-loader'
          }
        ]
      }
    ]
  }
};
