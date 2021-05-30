import webpack, { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import path from 'path';
import HtmlWebpackPlugin from "html-webpack-plugin"
import { CleanWebpackPlugin } from "clean-webpack-plugin"

interface Configuration extends WebpackConfiguration {
	devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	devServer: {
		https: true,
		port: 3000,
		open: true,
		hot: true,
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			inject: "body",
		}),
	],
};

export default config;
