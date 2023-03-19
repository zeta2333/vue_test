const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭语法检查
  pages: {
    index: {
      entry: 'src/main.js'
    }
  },
  // 开启代理服务器（方式一）
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // },
  // 开启代理服务器（方式一）
  devServer: {
    proxy: {
      '/pycro': {
        target: 'http://localhost:5000',
        pathRewrite: { '^/pycro': '' },
        ws: true,//用于支持websocket
        // changeOrigin: false //用于控制请求头中的Host值
      },
      '/duck': {
        target: 'http://localhost:5001',
        pathRewrite: { '^/duck': '' }
      }
    }
  }
})
