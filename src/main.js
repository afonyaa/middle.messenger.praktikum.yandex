import SignInPage, { SignInPageRootURL } from '@pages/SignIn';
import SignUpPage, { SignUpPageRootURL } from '@pages/SignUp';

const root = document.getElementById('root');

switch (window.location.pathname) {
  case '/':
    break;
  case SignInPageRootURL:
    root.innerHTML = SignInPage();
    break;
  case SignUpPageRootURL:
    root.innerHTML = SignUpPage();
    break;
}
