import { defineConfig } from 'vite';
import { resolve } from 'path';
import precompileHbsPlugin from './config/vitePlugins/precompileHbsPlugin';

export default defineConfig({
  build: {
    outDir: resolve(__dirname, 'dist'),
  },
  plugins: [precompileHbsPlugin],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@ui': resolve(__dirname, './src/ui'),
      '@pages': resolve(__dirname, './src/pages'),
    },
  },
});
