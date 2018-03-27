const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './public/index.jsx',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, './public/dist')
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
	            loader: "babel-loader",
	            exclude: [/node_modules/],
	            query: {
	                presets: ['es2015', 'react'],
	                plugins: ['transform-decorators-legacy', 'transform-class-properties']
	            }
	        }
		]
	}
};