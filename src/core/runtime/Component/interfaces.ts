import { Maybe } from '@/types';

export type ComponentBaseProps = {
  settings?: {
    withInternalId: true;
  };
  readonly id?: string;
  events?: ComponentEvents;
};

type ComponentEvents = Record<string, EventListenerOrEventListenerObject>;

export type ComponentProps<Props> = ComponentBaseProps & Props;

export type ComponentMeta<Props> = Maybe<{
  tagName: string;
  props: ComponentProps<Props>;
}>;

export type ComponentHTMLElement = Maybe<HTMLElement>;
