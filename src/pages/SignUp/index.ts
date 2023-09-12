import SignUpTemplate from './signUp.hbs';
import Handlebars from 'handlebars';
import Component from '@core/runtime/Component';
export const SignUpPageRootURL = '/sign-up';

interface SignUpPageProps {}

class SignUpPage extends Component<SignUpPageProps> {
  constructor() {
    super('div', { settings: { withInternalId: true } });
  }
  render() {
    return Handlebars.compile(SignUpTemplate)(this.props);
  }
}

export default SignUpPage;
