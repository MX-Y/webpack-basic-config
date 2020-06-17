const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, './disk'),
		filename: 'js/bundle.js',
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.scss$/i,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
				// inject CSS to page
				// translates CSS into CommonJS modules
				// Run postcss actions
				// compiles Sass to CSS
			},
			{
				test: /\.(png|jpg|gif|jpeg)$/,
				use: {
					loader: 'file-loader',
					options: {
						esModule: false, // 这里设置为false
						name: 'image/[name].[ext]?[hash]',
					},
				},
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: 'font/[name].[ext]?[hash]',
					},
				},
			},
			// {
			// 	test: /\.(png|jpg|gif|jpeg)$/,
			// 	use: [
			// 		{
			// 			loader: 'url-loader',
			// 			options: {
			// 				limit: 10240,
			// 			},
			// 		},
			// 	],
			// },
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Flowers Web',
			template: 'index.html',
		}),
		new CleanWebpackPlugin(),
	],
	devServer: {
		port: 8000,
		contentBase: 'public',
		proxy: {
			'/api/*': {
				target: 'http://localhost:3000',
			},
		},
	},
};
