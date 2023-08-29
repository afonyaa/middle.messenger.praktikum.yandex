import Handlebars from 'handlebars/runtime';
import BaseButton from '@ui/BaseButton/baseButton.hbs';
import BaseInput from '@ui/BaseInput/baseInput.hbs';
import BaseModal from '@ui/BaseModal/baseModal.hbs';

import SignUpPage, { SignUpPageRootURL } from '@pages/SignUp';
import SignInPage, { SignInPageRootURL } from '@pages/SignIn';
import MyProfilePage, { MyProfilePageRootURL } from '@pages/MyProfile';
import NotFoundPage from '@pages/ErrorPages/NotFound';

Handlebars.registerPartial('baseButton', BaseButton);
Handlebars.registerPartial('baseInput', BaseInput);
Handlebars.registerPartial('baseModal', BaseModal);

const root = document.getElementById('root');

switch (window.location.pathname) {
  case SignInPageRootURL:
    root.innerHTML = SignInPage();
    break;
  case SignUpPageRootURL:
    root.innerHTML = SignUpPage();
    break;
  case MyProfilePageRootURL:
    root.innerHTML = MyProfilePage();
    break;
  case '/':
    break;
  default:
    root.innerHTML = NotFoundPage();
}
