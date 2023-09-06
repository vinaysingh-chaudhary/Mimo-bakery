import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import replace from '@rollup/plugin-replace';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [
        replace({
          'process.env.RAZORPAY_API_KEY': JSON.stringify(process.env.REACT_APP_API_KEY),
        }),
        // Other Rollup plugins...
      ],
    },
  },
})
