// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'js/app',
    assetsPublicPath: '/',   //修改打包时 生成静态文件引用地址 根目录 相对路径 等
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8090,
    autoOpenBrowser: true,
    assetsSubDirectory: 'js/app',
    assetsPublicPath: '/',
    proxyTable: {
      '/signin' : {
        target: 'https://lab.new.dataos.io/',
        secure: false,
        changeOrigin: true,

      },
       "/apis": {
           target: "https://new.dataos.io:8443", // 目标url地址
           secure: false,
           changeOrigin: true,
       },
      "/oapi/v1": {
        target: "https://new.dataos.io:8443", // 目标url地址
        secure: false,
        changeOrigin: true,
      },
       "/apis/prd.asiainfo.com": {
           target: "https://lab.new.dataos.io", // 目标url地址
           secure: false,
           changeOrigin: true,
       },
       "/lapi/": {
           target: "https://lab.new.dataos.io", // 目标url地址
           secure: false,
           changeOrigin: true,
       },
       "/v2/": {
           target: "http://192.168.1.139:5000", // 目标url地址
           secure: false,
           changeOrigin: true,
       },
       "/lapi/v1/namespaces": {
           target: "https://volume.datafoundry.new.dataos.io", // 目标url地址
           secure: false,
           changeOrigin: true,
       },
       "/v1/repos/": {
           target: "https://lab.new.dataos.io", // 目标url地址
           secure: false,
           changeOrigin: true,
       },
       "/integration/v1/services": {
           target: "https://datafoundry.payment.app.dataos.io", // 目标url地址
           secure: false,
           changeOrigin: true,
       },
       "/integration/v1/": {
           target: "https://datafoundry.payment.app.dataos.io", // 目标url地址
           secure: false,
           changeOrigin: true,
       },

       "/hawkular/": {
           target: "https://hawkular-metrics.new.dataos.io", // 目标url地址
           secure: false,
           changeOrigin: true,
       },

       "/registry/": {
           target: "https://datafoundry.payment.app.dataos.io", // 目标url地址
           secure: false,
           changeOrigin: true,
       },
      "/ws/": {
           target: "https://new.dataos.io:8443", // 目标url地址
           secure: false,
           changeOrigin: true,
           pathRewrite: {'^/ws/' : '/'},
           ws:true
       },

    },



    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
