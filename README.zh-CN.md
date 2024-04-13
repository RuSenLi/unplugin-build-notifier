# unplugin-build-notifier

[![NPM version](https://img.shields.io/npm/v/unplugin-build-notifier?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-build-notifier)

使用该插件在项目打包完成后，可以收到系统通知消息并可按配置执行一些脚本（如默认打开当前项目根目录的文件资源管理器）。

<br>

<p align="left">
  <a href="https://cdn.jsdelivr.net/gh/RuSenLi/static@main/unplugin-build-notifier.png">
    <img src='https://cdn.jsdelivr.net/gh/RuSenLi/static@main/unplugin-build-notifier.png'/>
  </a>
</p>

###### 特点

- 💚 高优先级的系统通知，由 [node-notifier](https://www.npmjs.com/package/node-notifier) 提供支持
- ✨ 自动获取项目名称
- 📂 自动打开文件资源管理器
- 🔧 可配置的消息和点击行为
- 🚀 获取构建时间
- ⚡️ 支持 Vite、Webpack、Rspack、Vue CLI、Rollup、esbuild 等，由 <a href="https://github.com/unjs/unplugin">unplugin</a> 提供支持
- 🦾 完全支持 TypeScript

## 安装

```bash
npm i unplugin-build-notifier -D
yarn add unplugin-build-notifier -D
pnpm add unplugin-build-notifier -D
```

## 使用示例
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
 * 插件配置项。
 */
interface Options {
  /**
   * 在构建通知器中显示的消息。
   */
  message?: string

  /**
   * 在构建通知器中显示的图标的路径。
   */
  iconPath?: string

  /**
   * 当构建通知器被点击时执行的回调函数。
   */
  click?: () => void

  /**
   * 当构建通知器超时时执行的回调函数。
   */
  timeout?: () => void
}
```