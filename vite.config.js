import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  root: resolve(__dirname, 'src'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        main: './src/index.html',
        profile: './src/pages/profile/profile.html',
      },
    },
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, './src/partials'),
      context: {
        username: 'Afonya',
      },
    }),
  ],
});
