import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 80, // 環境によって変更
    watch: {
      usePolling: true
    },
    // todo プロキシが必要か見直し
    proxy: {
      '^/api': {
        // docker-compose.ymlに記載しているbackendのIPを指定
        target: 'http://app:3000',
        changeOrigin: true,
      },
    }
  },
})
