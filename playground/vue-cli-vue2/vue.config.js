const { defineConfig } = require('@vue/cli-service')
const BuildNotifier = require('unplugin-build-notifier/webpack')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      BuildNotifier(),
    ],
  },
})
