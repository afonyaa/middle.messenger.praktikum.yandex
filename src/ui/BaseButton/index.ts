import Component from '@core/runtime/Component';

import BaseButtonTemplate from './baseButton.hbs';
import { ComponentProps } from '@core/runtime/Component/interfaces';

export interface BaseButtonCustomProps {
  text?: string;
}

export type BaseButtonProps = ComponentProps<BaseButtonCustomProps>;

class BaseButton extends Component<BaseButtonProps> {
  constructor(props: BaseButtonProps) {
    super('button', props);
  }

  protected render(): Node {
    return this.compile(BaseButtonTemplate);
  }
}

export default BaseButton;
