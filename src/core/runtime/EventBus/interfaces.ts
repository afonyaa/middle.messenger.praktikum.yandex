export type EventBusListeners<Event extends string, Listener> = Record<
  Event,
  Listener[]
>;

export type EventBusListener<Payload> = (arg?: Payload) => void;
