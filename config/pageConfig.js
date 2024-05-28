
// 配置多页面文件路径
module.exports = {
  "htmlArray": [{
		_html: 'index',
		chunks: [ 'index','manifest', 'vendor']
	}],
  "entry": {
		// 多入口文件
		index: './src/pages/index/index.js',
	}

}
