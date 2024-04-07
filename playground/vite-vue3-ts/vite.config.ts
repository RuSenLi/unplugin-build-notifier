import { defineConfig } from 'vite'
import BuildNotifier from '../../dist/vite'

export default defineConfig({
  plugins: [BuildNotifier()],
})
