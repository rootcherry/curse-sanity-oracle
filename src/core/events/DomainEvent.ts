// src/core/events/DomainEvent.ts
export interface DomainEvent {
  occurredAt: Date;
  getEventName(): string;
}
