# unplugin-build-notifier

When the build is complete, the system will send a notification and automatically open the file explorer at the root directory.

###### Features

- 💚 Notifications from the operating system
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
