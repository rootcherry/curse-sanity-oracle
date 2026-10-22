// src/core/events/EventDispatcher.ts
import { DomainEvent } from "./DomainEvent.js";

type EventCallback = (event: DomainEvent) => Promise<void> | void;

export class EventDispatcher {
  private handlers: { [eventName: string]: EventCallback[] } = {};

  public register(eventName: string, callback: EventCallback): void {
    if (!this.handlers[eventName]) {
      this.handlers[eventName] = [];
    }
    this.handlers[eventName].push(callback);
  }

  public async dispatch(event: DomainEvent): Promise<void> {
    const eventName = event.getEventName();
    if (this.handlers[eventName]) {
      for (const callback of this.handlers[eventName]) {
        await callback(event);
      }
    }
  }
}
