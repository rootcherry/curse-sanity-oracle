// tests/core/EventDispatcher.test.ts
import { EventDispatcher } from "../../src/core/events/EventDispatcher.js";
import { DomainEvent } from "../../src/core/events/DomainEvent.js";

// A dummy event for testing purposes
class TestEvent implements DomainEvent {
  public readonly occurredAt = new Date();
  constructor(public readonly payload: string) {}
  public getEventName(): string {
    return "TestEvent";
  }
}

describe("EventDispatcher Core", () => {
  it("should register and dispatch an event to its handler", async () => {
    // Arrange
    const dispatcher = new EventDispatcher();
    let handlerWasCalled = false;
    let receivedPayload = "";

    // Register a listener (handler)
    dispatcher.register("TestEvent", async (event: DomainEvent) => {
      handlerWasCalled = true;
      receivedPayload = (event as TestEvent).payload;
    });

    // Act
    const event = new TestEvent("Horror Multiverse Active");
    await dispatcher.dispatch(event);

    // Assert
    expect(handlerWasCalled).toBe(true);
    expect(receivedPayload).toBe("Horror Multiverse Active");
  });
});
