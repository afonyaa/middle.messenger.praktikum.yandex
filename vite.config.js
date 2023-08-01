import { defineConfig } from 'vite';
import { resolve } from 'path';

import Handlebars from 'handlebars';

export default defineConfig({
  build: {
    outDir: resolve(__dirname, 'dist'),
  },
  plugins: [
    {
      name: 'precompile-hbs-file',
      transform(src, id) {
        if (/\.(hbs)$/.test(id)) {

          // language=javascript
          const code = `
            import HandlebarsRuntime from 'handlebars/runtime';
            export default HandlebarsRuntime.template(${Handlebars.precompile(src)});
          `
          return {
            code
          }
        }
      },
    },
  ],
    resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@ui': resolve(__dirname, './src/ui'),
      '@pages': resolve(__dirname, './src/pages'),
    },
  },
});

