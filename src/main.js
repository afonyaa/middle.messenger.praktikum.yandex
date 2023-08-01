import SignUpPage, { SignUpPageRootURL } from '@pages/SignUp';
import SignInPage, { SignInPageRootURL } from '@pages/SignIn';
import MyProfilePage, { MyProfilePageRootURL } from '@pages/MyProfile';

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
