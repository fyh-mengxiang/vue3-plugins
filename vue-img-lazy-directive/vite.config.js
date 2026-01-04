import { defineConfig } from 'vite';
import babel from '@rollup/plugin-babel';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.js',
      name: 'VueLazyLoad',
      fileName: (format) => `img-lazy.${format}.js`,
      formats: ['es', 'umd', 'cjs']
    },
    outDir: 'dist',
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        // 确保每个格式只包含对应的导出代码
        exports: 'named'
      },
      plugins: [
        babel({
          babelHelpers: 'bundled',
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: ['defaults', 'ie >= 11'],
                  esmodules: false
                },
                modules: false,
                useBuiltIns: 'usage',
                corejs: 3
              }
            ]
          ],
          exclude: 'node_modules/**'
        })
      ]
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      ecma: 5,
      ie8: true,
      safari10: true
    },
    sourcemap: true
  }
});