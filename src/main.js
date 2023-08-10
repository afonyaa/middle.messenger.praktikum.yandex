import Handlebars from 'handlebars/runtime';
import BaseButton from '@ui/BaseButton/baseButton.hbs';

import SignUpPage, { SignUpPageRootURL } from '@pages/SignUp';
import SignInPage, { SignInPageRootURL } from '@pages/SignIn';
import MyProfilePage, { MyProfilePageRootURL } from '@pages/MyProfile';

Handlebars.registerPartial('baseButton', BaseButton);

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
}
