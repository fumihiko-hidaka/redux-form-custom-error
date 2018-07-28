const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    mode: 'development',
    entry: {
      app: [
        './src/app.jsx',
      ],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.js[x]?$/,
          exclude: /node_modules\/.*/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015', 'stage-0'],
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: `${__dirname}/src/index.html`,
      }),
    ],
  },
];
