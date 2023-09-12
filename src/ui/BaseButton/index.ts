import Handlebars from 'handlebars';
import Component from '@core/runtime/Component';

import BaseButtonTemplate from './baseButton.hbs';

interface BaseButtonProps {
  text?: string;
}

class BaseButton extends Component<BaseButtonProps> {
  constructor(props: BaseButtonProps) {
    super('button', props);
  }

  protected render(): string {
    return Handlebars.compile(BaseButtonTemplate)(this.props);
  }
}

export default BaseButton;
