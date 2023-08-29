import Handlebars from 'handlebars';

export default {
  name: 'precompile-hbs-file',
  transform(src, id) {
    if (/\.(hbs)$/.test(id)) {
      // language=javascript
      const code = `
            import HandlebarsRuntime from 'handlebars/runtime';
            export default HandlebarsRuntime.template(${Handlebars.precompile(
              src,
            )});
          `;
      return {
        code,
      };
    }
  },
};
