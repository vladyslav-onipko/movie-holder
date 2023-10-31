const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/config.scss";
          @import "@/scss/mixins.scss";
        `
      }
    }
  },
  publicPath: '/movies/'
})