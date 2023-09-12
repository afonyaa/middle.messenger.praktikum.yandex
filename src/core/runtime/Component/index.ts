import { LifeCycleEventBus } from './LyfecycleEventBus';
import {
  ComponentHTMLElement,
  ComponentMeta,
  ComponentProps,
} from './interfaces';
import { DEFAULT_COMPONENT_TAG } from './constants';
import { v4 as makeUUID } from 'uuid';

class Component<Props> {
  private element: ComponentHTMLElement = null;
  private eventBus: LifeCycleEventBus;
  private readonly meta: ComponentMeta<Props> = null;
  props: ComponentProps<Props>;
  readonly id: string | null;

  protected constructor(
    tagName = DEFAULT_COMPONENT_TAG,
    initialProps = {} as ComponentProps<Props>,
  ) {
    this.meta = {
      tagName,
      props: initialProps,
    };
    this.id = initialProps?.settings?.withInternalId ? makeUUID() : null;
    this.props = this.makePropsProxy({ ...initialProps, __id: this.id });
    this.eventBus = new LifeCycleEventBus();
    this.registerLifecycleEvents();
    this.eventBus.emit('init');
  }

  private registerLifecycleEvents() {
    this.eventBus.on('init', this.init.bind(this));
    this.eventBus.on('didMount', this.componentDidMount.bind(this));
    this.eventBus.on('render', this._render.bind(this));
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

  private _render() {
    if (this.element) {
      this.element.innerHTML = this.render();
      this.addEvents();
    }
  }
  protected render(): string {
    return '';
  }

  private makePropsProxy(props: ComponentProps<Props>): ComponentProps<Props> {
    return new Proxy(props, {
      set: (target: ComponentProps<Props>, prop: string, value) => {
        if (prop === 'events') {
          this.removeEvents();
        }
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
      element.setAttribute('data-id', this.id);
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
