import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { terser } from 'rollup-plugin-terser'
import { resolve } from 'path'
import { copyFileSync } from 'fs'

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'copy-dts',
      writeBundle() {
        // Copy TypeScript definitions to dist directory
        const srcDts = resolve(__dirname, 'index.d.ts')
        const destDts = resolve(__dirname, 'dist', 'index.d.ts')
        copyFileSync(srcDts, destDts)
        console.log('✅ TypeScript definitions copied to dist directory')
      }
    }
  ],
  build: {
    lib: {
      entry: './index.js',
      name: 'Vue3EventBus',
      fileName: (format) => `vue3-event-bus-plugin.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        plugins: [terser()]
      }
    }
  }
})