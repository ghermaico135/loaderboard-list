/** @format */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Output Management',
    }),
  ],
  devServer: {
    static: './dist',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      /* eslint-disable */
			{
				test: /\.(scss)$/,
				use: [
					{
						loader: "style-loader", // inject CSS to page bootstrap
					},
					{
						loader: "css-loader", // translates CSS into CommonJS modules
					},
					{
						loader: "postcss-loader", // Run post css actions
						options: {
							plugins() {
								// post css plugins, can be exported to postcss.config.js
								return [require("precss"), require("autoprefixer")];
							},
						},
					},
					{
						loader: "sass-loader", // compiles Sass to CSS
					},
				],
			},
			/* eslint-disable */
		],
	},
	optimization: {
		runtimeChunk: "single",
	},
};
