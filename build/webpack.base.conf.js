const path = require('path');
const webpack = require("webpack");
const glob = require("glob");
const config = require('../config')
const pageConfig = require('../config/pageConfig')
// console.log(config);

// 分离css

//消除冗余的css
const purifyCssWebpack = require("purifycss-webpack");
// html模板
const htmlWebpackPlugin = require("html-webpack-plugin");
//静态资源输出
const copyWebpackPlugin = require("copy-webpack-plugin");

// const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

const rules = require("./webpack.rules.conf.js");
// 获取html-webpack-plugin参数的方法
var getHtmlConfig = function (name, chunks) {
	return {
		template: `./src/pages/${name}/index.html`,
		filename: `${name === 'indexEN' ? `en.html`: `${name}.html`}`,
		favicon: './temi.ico',
		// title: title,
		inject: true,
		hash: true, //开启hash  ?[hash]
		chunks: chunks,
		chunksSortMode(chunk1, chunk2) {
			const order = ['manifest', 'vendor', 'app'];
			const order1 = order.indexOf(chunk1.names[0]);
			const order2 = order.indexOf(chunk2.names[0]);
			return order1 - order2;
		},
		minify: process.env.NODE_ENV === "development" ? false : {
			removeComments: true, //移除HTML中的注释
			collapseWhitespace: true, //折叠空白区域 也就是压缩代码
			removeAttributeQuotes: true, //去除属性引用
		},
	};
};

module.exports = {
	entry: pageConfig.entry,
	resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': path.resolve('src')
    }
  },
	module: {
		rules: [...rules]
	},
	node: {
		fs: 'empty'
	},
	//将外部变量或者模块加载进来
	externals: {
		// 'jquery': 'window.jQuery'
	},
	plugins: [
		// 全局暴露统一入口
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			'window.jQuery': 'jquery',
		}),
		//静态资源输出
		new copyWebpackPlugin([{
			from: path.resolve(__dirname, "../src/assets"),
			to: './assets',
			ignore: ['.*']
		}]),
		// 消除冗余的css代码
		new purifyCssWebpack({
			paths: glob.sync(path.join(__dirname, "../src/pages/*/*.html"))
		}),

		// new AddAssetHtmlPlugin([
		// 	{
		// 		filepath: path.resolve(__dirname, config.dev.dll.fileName),
		// 		outputPath: path.join(config.dev.dll.outputPath),
		// 		publicPath: path.join(config.dev.dll.publicPath),
		// 		includeSourcemap: true,
		// 	},
		// ]),
	],
	// webpack4里面移除了commonChunksPulgin插件，放在了config.optimization里面,提取js， vendor名字可改
	optimization: {
		// runtimeChunk: {
		// 	name: "manifest"
		// },
		splitChunks: {
			cacheGroups: {
				// common: {
				// 	chunks: "initial",
				// 		name: "common",
				// 		minChunks: 2,
				// 		maxInitialRequests: 5,
				// 		minSize: 0
				// },
				vendor: {
					// test: /\.js$/,
					test: path.resolve(__dirname, '../node_modules'),
					chunks: "initial", //表示显示块的范围，有三个可选值：initial(初始块)、async(按需加载块)、all(全部块)，默认为all;
					name: "vendor", //拆分出来块的名字(Chunk Names)，默认由块名和hash值自动生成；
					minChunks: 1,
					reuseExistingChunk: true,
					enforce: true
				}
			}
		}
	},
}
// //配置页面

//自动生成html模板
pageConfig.htmlArray.forEach((element) => {
	module.exports.plugins.push(new htmlWebpackPlugin(getHtmlConfig(element._html, element.chunks)));
})

