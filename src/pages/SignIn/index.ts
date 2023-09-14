import SignInTemplate from './signIn.hbs';
import Component from '@core/runtime/Component';
import BaseButton, { BaseButtonProps } from '@ui/BaseButton';

export const SignInPageRootURL = '/sign-in';

interface SignInPageProps {
  ConfirmButton?: Component<BaseButtonProps>;
}

class SignInPage extends Component<SignInPageProps> {
  constructor() {
    super('div', {
      settings: { withInternalId: true },
      ConfirmButton: new BaseButton({
        text: 'Sign in',
        events: {},
        settings: {
          withInternalId: true,
        },
      }),
    });
  }
  protected render(): Node {
    return this.compile(SignInTemplate);
  }
}

export default SignInPage;
