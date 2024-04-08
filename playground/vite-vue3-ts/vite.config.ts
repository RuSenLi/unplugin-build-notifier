import { defineConfig } from 'vite'
import BuildNotifier from 'unplugin-build-notifier/vite'

export default defineConfig({
  plugins: [BuildNotifier()],
})
