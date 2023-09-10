import SignInTemplate from './signIn.hbs';
import Handlebars from 'handlebars';

export const SignInPageRootURL = '/sign-in';

export default () => {
  return Handlebars.compile(SignInTemplate)({});
};
