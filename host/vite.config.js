import { defineConfig, loadEnv } from 'vite'
import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      react(),
      federation({
        name: 'app',
        remotes: {
          portalApp: env.APP_PORTAL_ENTRY,
          msrApp: env.APP_MSR_ENTRY,
        },
        shared: ['react', 'react-dom']
      })
    ],
    build: {
      target: 'esnext',
    }
  }
})
