import { defineConfig } from 'vite'
import BuildNotifier from '../../src/vite'

export default defineConfig({
  plugins: [BuildNotifier()],
})
