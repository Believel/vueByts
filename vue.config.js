module.exports = {
  publicPath: '/live',    // 部署应用包时的基本URL
  outputDir: 'dist',      // 生成环境构建文件的目录
  devServer: {
    host: 'localhost',    // 主机地址
    port: 8089,           // 本地端口
    proxy: {              // 设置代理
      '^/v1/api': {
        target: 'http://www.a.com',  // 目标地址
        changeOrigin: true,          // 是否跨域
        onProxyReq: (proxyReq) => {
          // 可以在发送请求的设置请求头内容
          proxyReq.setHeader('Cookie', 'a=123')
        }
      }
    }
  }
}