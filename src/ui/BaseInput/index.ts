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
    return this.compile(BaseInputTemplate);
  }
}

export default BaseInput;
