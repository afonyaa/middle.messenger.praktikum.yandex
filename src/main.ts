import SignUpPage, { SignUpPageRootURL } from '@pages/SignUp';
import SignInPage, { SignInPageRootURL } from '@pages/SignIn';
import MyProfilePage, {
  MyProfilePreviewPageRootURL,
  MyProfileEditPageRootURL,
} from '@pages/MyProfile';
import NotFoundPage from '@pages/ErrorPages/NotFound';

const root: HTMLElement | null = document.getElementById('root');

if (!root) {
  document.write('No root element specified');
} else {
  switch (window.location.pathname) {
    case SignInPageRootURL:
      const signInPage = new SignInPage();
      root.appendChild(signInPage.getHTMLElement()!);
      break;
    case SignUpPageRootURL:
      root.appendChild(new SignUpPage().getHTMLElement()!);
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
