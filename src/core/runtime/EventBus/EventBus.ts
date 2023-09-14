import { EventBusListener, EventBusListeners } from './interfaces';

abstract class EventBus<Event extends string, Payload> {
  private readonly listeners: EventBusListeners<
    Event,
    EventBusListener<Payload>
  > = {} as Record<Event, EventBusListener<Payload>[]>;

  protected constructor() {}

  public on(event: Event, listener: EventBusListener<Payload>) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener);
  }

  public emit(event: Event, payload: Payload) {
    const listeners: EventBusListener<Payload>[] = this.listeners[event];
    if (!listeners) {
      throw new Error('no listeners');
    }
    listeners.forEach((listener) => {
      listener(payload);
    });
  }

  public off(event: Event, listener: EventBusListener<Payload>) {
    if (!this.listeners[event]) {
      throw new Error('no listeners');
    }
    this.listeners[event] = this.listeners[event].filter(
      (listenerToKeep) => listenerToKeep !== listener,
    );
  }
}

export default EventBus;
