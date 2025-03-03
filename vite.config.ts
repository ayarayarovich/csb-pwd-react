import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 7788
    },
    preview: {
        port: 7789
    },
    plugins: [react(), tsconfigPaths()]
})
