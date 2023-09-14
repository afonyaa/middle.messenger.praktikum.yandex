import Component from '@core/runtime/Component';
import { ComponentProps } from '@core/runtime/Component/interfaces';

export const retrieveChildrenAndProps = <Props>(
  propsAndChildren: ComponentProps<Props>,
) => {
  const props: ComponentProps<Props> | object = {};
  const children: ComponentProps<Props> | object = {};

  Object.entries(propsAndChildren).forEach(([key, value]) => {
    /** Типы будут поправлены, когда я пойму что тут с ними происходит вообще */
    if (value instanceof Component) {
      children[key as keyof typeof children] =
        value as (typeof children)[keyof typeof children];
    } else {
      props[key as keyof typeof props] =
        value as (typeof props)[keyof typeof props];
    }
  });

  return { children, props };
};
