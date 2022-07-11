import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

const htmlPlugin = () => {
  return {
    name: 'html-transform',
    transformIndexHtml(html) {
      return html.replace(/<title>(.*?)<\/title>/, `<title>vue3-search-group-component</title>`)
    },
  }
}

const resolvePlugin = () => {
  return {
    name: 'resolve-muted',
    config: () => ({
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'], // 当前是默认值
      },
    }),
  }
}

const serverPlugin = () => {
  return {
    name: 'server-proxy',
    config: () => ({
      server: {
        proxy: {
          // 字符串简写写法
          '/foo': 'http://localhost:4567',
          // 选项写法
          '/api': {
            target: 'http://jsonplaceholder.typicode.com',
            changeOrigin: true,
            rewrite: path => path.replace(/^\/api/, ''),
          },
          // 正则表达式写法
          '^/fallback/.*': {
            target: 'http://jsonplaceholder.typicode.com',
            changeOrigin: true,
            rewrite: path => path.replace(/^\/fallback/, ''),
          },
          // 使用 proxy 实例
          '/api1': {
            target: 'http://jsonplaceholder.typicode.com',
            changeOrigin: true,
            configure: (proxy, options) => {
              // proxy 是 'http-proxy' 的实例
            },
          },
        },
      },
    }),
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), resolvePlugin(), htmlPlugin(), serverPlugin()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      name: 'QJ-SEARCH',
      output: {
        path: path.resolve(__dirname, './lib'),
        name: "[name].js",
        library: 'search',
        libraryTarget: 'umd', // 指定输出格式
        umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
      }
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
    sourcemap: () => {
      return import.meta.env.MODE == 'development'
    },
  },
})
