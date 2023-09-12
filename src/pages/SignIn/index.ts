import SignInTemplate from './signIn.hbs';
import Handlebars from 'handlebars';
import Component from '@core/runtime/Component';

export const SignInPageRootURL = '/sign-in';

interface SignInPageProps {}

class SignInPage extends Component<SignInPageProps> {
  constructor() {
    super('div', { settings: { withInternalId: true } });
  }
  render(): string {
    return Handlebars.compile(SignInTemplate)(this.props);
  }
}

export default SignInPage;
