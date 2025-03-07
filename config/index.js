const path = require('path');
const distPath = path.resolve(__dirname, '..', 'dist');

module.exports = {
  build: {
    dll: {
      basePath: '../common/js',
      fileName: '../common/js/lib.js',
      manifest: '../common/js/manifest.json',
      outputPath: '/static/common/js', // 生成目录
      publicPath: '/static/common/js', // 注入地址
    },
    host: 'http://localhost:8081',
    // env: require('./env'),
    port: 7081,
    index: path.resolve(distPath, 'index.html'),
    assetsRoot: path.resolve(distPath),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
  },
  dev: {
    dll: {
      basePath: '../common/debug',
      fileName: '../common/debug/lib.js',
      manifest: '../common/debug/manifest.json',
      outputPath: '/common/debug', // 生成目录
      publicPath: '/common/debug', // 注入地址
    },
    port: 3006,
    host: 'http://localhost:8081',
    assetsRoot: '../assets/',
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: false,
  },
}
