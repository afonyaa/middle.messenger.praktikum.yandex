import { LifeCycleEventBus } from './LyfecycleEventBus';
import { ComponentHTMLElement, ComponentMeta } from './interfaces';
import { DEFAULT_COMPONENT_TAG } from './constants';

class Component<Props extends object> {
  private element: ComponentHTMLElement = null;
  private eventBus: LifeCycleEventBus;
  private readonly meta: ComponentMeta<Props> = null;
  props: Props;

  protected constructor(
    tagName = DEFAULT_COMPONENT_TAG,
    initialProps = {} as Props,
  ) {
    this.meta = {
      tagName,
      props: initialProps,
    };
    this.props = this.makePropsProxy(initialProps);
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

  init() {
    this.createResources();
    this.eventBus.emit('render');
  }

  public dispatchDidMount() {
    this.eventBus.emit('didMount');
  }

  componentDidMount() {}

  setProps = (nextProps: Props) => {
    if (!nextProps) {
      return;
    }
    Object.assign(this.props, nextProps);
  };

  private _render() {
    if (this.element) {
      this.element.innerHTML = this.render();
    }
  }
  protected render(): string {
    return '';
  }

  private makePropsProxy(props: Props) {
    return new Proxy(props, {
      set: (target: Props, prop: string, value) => {
        target[prop as keyof typeof target] =
          value as (typeof target)[keyof typeof target];
        this.eventBus.emit('render');
        return true;
      },
    });
  }

  private createDocumentElement(tagName: string): ComponentHTMLElement {
    return document.createElement(tagName);
  }

  get getHTMLElement() {
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
