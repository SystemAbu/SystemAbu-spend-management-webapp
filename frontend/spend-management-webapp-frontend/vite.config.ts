import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Koyebかどうかを判定し、ローカルの場合、.envを読み込む
  const isKoyeb = !!process.env.KOYEB_APP_NAME
  const env = loadEnv(isKoyeb ? 'koyeb' : mode, process.cwd(), '')

  return {
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
          // target: 'http://app:3000',
          target: env.VITE_API_BASE_URL,
          changeOrigin: true,
        },
      }
    },
  }
})
