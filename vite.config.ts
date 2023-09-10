import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@ui': resolve(__dirname, './src/ui'),
      '@pages': resolve(__dirname, './src/pages'),
      '@core': resolve(__dirname, './src/core'),
    },
  },
  server: {
    port: 3000
  }
});
