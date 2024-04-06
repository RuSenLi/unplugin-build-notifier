const { defineConfig } = require('@vue/cli-service')
const BuildNotifier = require('../../src/webpack')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      BuildNotifier(),
    ],
  },
})
