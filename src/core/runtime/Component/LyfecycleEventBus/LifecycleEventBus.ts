import { EventBusListener, EventBus } from '@core/runtime/EventBus';
import { Event, ListenerPayload } from './interfaces';

class LifeCycleEventBus extends EventBus<Event, ListenerPayload> {
  constructor() {
    super();
  }
  emit(event: Event) {
    super.emit(event);
  }
  off(event: Event, listener: EventBusListener<ListenerPayload>) {
    super.off(event, listener);
  }
  on(event: Event, listener: EventBusListener<ListenerPayload>) {
    super.on(event, listener);
  }
}

export default LifeCycleEventBus;
