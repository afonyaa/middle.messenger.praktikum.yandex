import Handlebars from 'handlebars';
import Component from '@core/runtime/Component';

import BaseInputTemplate from './baseInput.hbs';

interface BaseInputProps {
  value?: string;
}

class BaseInput extends Component<BaseInputProps> {
  constructor(props: BaseInputProps) {
    super('div', props);
  }

  protected render(): string {
    return Handlebars.compile(BaseInputTemplate)(this.props);
  }
}

export default BaseInput;
