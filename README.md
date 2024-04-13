# unplugin-build-notifier

[![NPM version](https://img.shields.io/npm/v/unplugin-build-notifier?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-build-notifier)

[English](README.md) | [中文](README.zh-CN.md)

After packaging the project using this plugin, you will receive system notifications and can execute some scripts according to the configuration, such as opening the file explorer in the current project root directory by default.

<br>

<p align="left">
  <a href="https://cdn.jsdelivr.net/gh/RuSenLi/static@main/unplugin-build-notifier.png">
    <img src='https://cdn.jsdelivr.net/gh/RuSenLi/static@main/unplugin-build-notifier.png'/>
  </a>
</p>

###### Features

- 💚 High-priority system notifications, supported by [node-notifier](https://www.npmjs.com/package/node-notifier).
- ✨ Automatically obtain the project name
- 📂 Automatically open the file explorer
- 🔧 Configurable messages and click behavior
- 🚀 Get build time
- ⚡️ Supports Vite, Webpack, Rspack, Vue CLI, Rollup, esbuild and more, powered by <a href="https://github.com/unjs/unplugin">unplugin</a>.
- 🦾 Full TypeScript support.

## Install

```bash
npm i unplugin-build-notifier -D
yarn add unplugin-build-notifier -D
pnpm add unplugin-build-notifier -D
```

## Template Usage
<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import BuildNotifier from 'unplugin-build-notifier/vite'

export default defineConfig({
  plugins: [
    BuildNotifier({ /* options */ }),
  ],
})
```

Example: [`playground/`](./playground/)

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import BuildNotifier from 'unplugin-build-notifier/rollup'

export default {
  plugins: [
    BuildNotifier({ /* options */ }),
  ],
}
```

<br></details>


<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-build-notifier/webpack')({ /* options */ })
  ]
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default defineNuxtConfig({
  modules: [
    ['unplugin-build-notifier/nuxt', { /* options */ }],
  ],
})
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-build-notifier/webpack')({ /* options */ }),
    ],
  },
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'
import BuildNotifier from 'unplugin-build-notifier/esbuild'

build({
  plugins: [BuildNotifier()],
})
```

<br></details>

## Options

```ts
/**
 * plugin options.
 */
interface Options {
  /**
   * The message to display in the build notifier.
   */
  message?: string

  /**
   * The path to the icon to display in the build notifier.
   */
  iconPath?: string

  /**
   * The callback function to execute when the build notifier is clicked.
   */
  click?: () => void

  /**
   * The callback function to execute when the build notifier times out.
   */
  timeout?: () => void
}
```
