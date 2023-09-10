import NotFoundPageTemplate from './notFound.hbs';
import Handlebars from 'handlebars';

export default () => {
  return Handlebars.compile(NotFoundPageTemplate)({});
};
