import Handlebars from 'handlebars/runtime';
import SignInTemplate from './signIn.hbs';
import baseInput from '@ui/BaseInput/baseInput.hbs';

export const SignInPageRootURL = '/signIn';

Handlebars.registerPartial('base-input', baseInput);

export default () => {
  return SignInTemplate();
};
