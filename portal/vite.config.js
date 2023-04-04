import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        './NavbarPortal': './src/App',
        './PortalApp': './src/App'
      },
      shared: ['react','react-dom']
    })
  ],
  build: {
    target: 'esnext',
    cssCodeSplit: false
  }
})