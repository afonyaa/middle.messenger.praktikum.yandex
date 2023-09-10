import SignUpTemplate from './signUp.hbs';
import Handlebars from 'handlebars';
export const SignUpPageRootURL = '/sign-up';

export default () => {
  return Handlebars.compile(SignUpTemplate)({});
};
