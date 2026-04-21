import { defineConfig } from 'vite'
import mdx from '@mdx-js/rollup'
import civet from '@danielx/civet/vite';
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    { enforce: 'pre', ...mdx() },
    civet({ "ts": "preserve" }), 
    react()
  ],
})