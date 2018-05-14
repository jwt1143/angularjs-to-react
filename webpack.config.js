const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	devtool: 'inline-source-map',
	entry: {
		app: './src/index.js',
	},
	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.js$/, 
				include: [ path.resolve('src') ],
				loader: 'babel-loader'
			},
			{
				test: /\.(html)$/,
				include: [ path.resolve('src/templates') ],
				loader: 'html-loader',
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({ 
			template: 'index.html',
		}),
	],
	devServer: {
		inline: true,
		overlay: true,
		open: true,
	}
};
