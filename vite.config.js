import { defineConfig } from 'vite'
import civet from '@danielx/civet/vite';
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [civet({ "ts": "preserve" }), react()],
})