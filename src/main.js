import SignInPage, { SignInPageRootURL } from '@pages/SignIn';

const root = document.getElementById('root');

switch (window.location.pathname) {
  case '/':
    break;
  case SignInPageRootURL:
    root.innerHTML = SignInPage();
}
