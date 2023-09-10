import Handlebars from 'handlebars';
import BaseButton from '@ui/BaseButton/baseButton.hbs';
import BaseInput from '@ui/BaseInput/baseInput.hbs';

import SignUpPage, { SignUpPageRootURL } from '@pages/SignUp';
import SignInPage, { SignInPageRootURL } from '@pages/SignIn';
import MyProfilePage, {
  MyProfilePreviewPageRootURL,
  MyProfileEditPageRootURL,
} from '@pages/MyProfile';
import NotFoundPage from '@pages/ErrorPages/NotFound';

Handlebars.registerPartial('baseButton', BaseButton);
Handlebars.registerPartial('baseInput', BaseInput);

const root: HTMLElement | null = document.getElementById('root');

if (!root) {
  document.write('No root element specified');
} else {
  switch (window.location.pathname) {
    case SignInPageRootURL:
      root.innerHTML = SignInPage();
      break;
    case SignUpPageRootURL:
      root.innerHTML = SignUpPage();
      break;
    case MyProfileEditPageRootURL:
      root.innerHTML = MyProfilePage({ isPreview: false });
      break;
    case MyProfilePreviewPageRootURL:
      root.innerHTML = MyProfilePage({ isPreview: true });
      break;
    case '/':
      break;
    default:
      root.innerHTML = NotFoundPage();
  }
}
