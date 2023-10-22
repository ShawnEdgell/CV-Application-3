import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import ViteSvg from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [svelte(),
    ViteSvg()
  ],
  base: '/CV-Application-3/',
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  build: {
    target: 'esnext', 
    outDir: 'dist', 
    minify: 'terser',
    sourcemap: true
  },
})