import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      "~":path.resolve(__dirname,'src')   //将~设置成当前目录的src路径
    }
  },
  plugins: [vue(),WindiCSS()],
  server:{
    proxy:{
      '/api': {   //用/api来代替下面这串域名接口
        target: 'http://ceshi13.dishait.cn',
        changeOrigin: true,   //允许跨域
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }
})
