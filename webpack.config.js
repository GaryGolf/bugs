var debug =process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports={
	context: __dirname + "/src"
	entry: "./js/client.js",
	devtool: debug ? "sourcemap" : null,
	module: {
		loaders: [
			{
				test: \/.jsx?$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				query: { 
					presets: ['react','es2015']
					//plugins: ['react-html-attrs']
				}
			}
		]
	}
	output: {
		path: __dirname + "/public",
		filename: "js/bundle.js"
	}
	
}