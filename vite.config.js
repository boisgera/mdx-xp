import { defineConfig } from 'vite';
import mdx from '@mdx-js/rollup';
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
import civet from '@danielx/civet/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    { 
      enforce: 'pre', 
      ...mdx({
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeMathjax],
    }) 
  },
    civet({ "ts": "preserve" }), 
    react()
  ],
})