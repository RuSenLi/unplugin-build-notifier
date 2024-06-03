const { defineConfig } = require('@vue/cli-service')
const BuildNotifier = require('unplugin-build-notifier/webpack')
const isProd = require('node:process').env.NODE_ENV === 'production'

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      isProd ? BuildNotifier() : () => {},
    ],
  },
})
