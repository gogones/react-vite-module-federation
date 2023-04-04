import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  return{
    plugins: [
      react(),
      federation({
        name: "msr_app",
        exposes: {
          './MsrApp': './src/App'
        },
        shared: ['react', 'react-dom']
      })
    ],
    base: env.BASE_URL,
    build: {
      target: 'esnext',
      // Uncomment below if your css not load properly
      // cssCodeSplit: false
    }
  }
})
