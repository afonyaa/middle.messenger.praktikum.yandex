import Handlebars from 'handlebars';
import { LifeCycleEventBus } from './LyfecycleEventBus';
import {
  ComponentHTMLElement,
  ComponentMeta,
  ComponentProps,
} from './interfaces';
import { DATA_ID_ATTRIBUTE, DEFAULT_COMPONENT_TAG } from './constants';
import { v4 as makeUUID } from 'uuid';
import { retrieveChildrenAndProps } from './utils/retrieveChildrenAndProps';

class Component<Props> {
  private element: ComponentHTMLElement = null;
  private eventBus: LifeCycleEventBus;
  private readonly meta: ComponentMeta<Props> = null;
  props: ComponentProps<Props>;
  readonly id: string | null;
  children: Record<string, Component<never>>;

  protected constructor(
    tagName = DEFAULT_COMPONENT_TAG,
    initialProps = {} as ComponentProps<Props>,
  ) {
    const { children } = retrieveChildrenAndProps(initialProps);
    this.children = children as ComponentProps<never>;

    this.meta = {
      tagName,
      props: initialProps,
    };
    this.id = initialProps?.settings?.withInternalId ? makeUUID() : null;
    this.props = this.makePropsProxy({ ...initialProps, id: this.id });
    this.eventBus = new LifeCycleEventBus();

    this.registerLifecycleEvents();

    this.eventBus.emit('init');
  }

  private registerLifecycleEvents() {
    this.eventBus.on('init', this.init.bind(this));
    this.eventBus.on('didMount', this.componentDidMount.bind(this));
    this.eventBus.on('render', this.delegateRender.bind(this));
  }

  private createResources() {
    const tagName = this.meta?.tagName;
    this.element = tagName ? this.createDocumentElement(tagName) : null;
  }

  private addEvents() {
    const events = this.props.events;
    if (events) {
      Object.keys(events).forEach((eventName) => {
        if (this.element) {
          this.element.addEventListener(eventName, events[eventName]);
        }
      });
    }
  }
  private removeEvents() {
    const events = this.props.events;
    if (events) {
      Object.keys(events).forEach((eventName) => {
        if (this.element) {
          this.element.removeEventListener(eventName, events[eventName]);
        }
      });
    }
  }

  init() {
    this.createResources();
    this.eventBus.emit('render');
  }

  public dispatchDidMount() {
    this.eventBus.emit('didMount');
  }

  componentDidMount() {}

  setProps = (nextProps: Props | ComponentProps<Props>) => {
    if (!nextProps) {
      return;
    }
    Object.assign(this.props, nextProps);
  };

  protected compile(template: string): Node {
    const propsAndStubs = { ...this.props };
    Object.entries(this.children).forEach(([key, value]) => {
      propsAndStubs[key as keyof typeof propsAndStubs] =
        `<div ${DATA_ID_ATTRIBUTE}="${value.id}"></div>` as (typeof propsAndStubs)[keyof typeof propsAndStubs];
    });

    const fragment = this.createDocumentElement('template') as HTMLElement;
    fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);
    Object.values(this.children).forEach((child) => {
      const stub: HTMLElement = // @ts-ignore
        (fragment.content as unknown as HTMLElement).querySelector(
          `[${DATA_ID_ATTRIBUTE}="${child.id}"]`,
        ) as HTMLElement;
      stub.replaceWith(child.getHTMLElement() as Node);
    });
    // @ts-ignore
    // eslint-disable-next-line
    return fragment.content;
  }

  private delegateRender() {
    if (this.element) {
      this.element.innerHTML = '';
      this.element.appendChild(this.render());
      this.addEvents();
    }
  }
  protected render(): Node {
    return '' as unknown as Node;
  }

  private makePropsProxy(props: ComponentProps<Props>): ComponentProps<Props> {
    return new Proxy(props, {
      set: (target: ComponentProps<Props>, prop: string, value) => {
        if (prop === 'events') {
          this.removeEvents();
        }
        /** Типы будут поправлены, когда я пойму что тут с ними происходит вообще */
        target[prop as keyof typeof target] =
          value as (typeof target)[keyof typeof target];
        this.eventBus.emit('render');
        return true;
      },
    });
  }

  private createDocumentElement(tagName: string): ComponentHTMLElement {
    const element = document.createElement(tagName);
    if (this.id) {
      element.setAttribute(DATA_ID_ATTRIBUTE, this.id);
    }
    return element;
  }

  getHTMLElement(): ComponentHTMLElement {
    return this.element;
  }

  show() {
    if (this.element) {
      this.element.style.display = 'block';
    }
  }

  hide() {
    if (this.element) {
      this.element.style.display = 'none';
    }
  }
}

export default Component;
