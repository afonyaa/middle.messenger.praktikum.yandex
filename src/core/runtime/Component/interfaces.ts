import { Maybe } from '@/types';

export type ComponentMeta<Props> = Maybe<{
  tagName: string;
  props: Props;
}>;

export type ComponentHTMLElement = Maybe<HTMLElement>;
