import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: ['three'],
    },
  },
  server: {
    port: 3000,
    strictPort: true,
  },
  preview: {
    port: 8080,
    strictPort: true,
  },
  css: {
    preprocessorOptions: {
      css: {
        // Включаем CSS Variables
        importFrom: 'src/App.css',
      },
    },
  },
});