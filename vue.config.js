module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://ttapi.research.itcast.cn/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api/': ''
        }
      }
    }
  }
}
