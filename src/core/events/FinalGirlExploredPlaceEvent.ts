// src/core/events/FinalGirlExploredPlaceEvent.ts
import { DomainEvent } from "./DomainEvent.js";

export class FinalGirlExploredPlaceEvent implements DomainEvent {
  public readonly occurredAt: Date;
  constructor(
    public readonly finalGirlId: string,
    public readonly hauntedPlaceId: string
  ) {
    this.occurredAt = new Date();
  }

  public getEventName(): string {
    return "FinalGirlExploredPlaceEvent";
  }
}
