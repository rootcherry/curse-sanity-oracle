// tests/core/FinalGirl.test.ts
import { FinalGirl } from "../../src/core/FinalGirl.js";
import { Sanity } from "../../src/core/Sanity.js";

describe("FinalGirl Entity Domain", () => {
  it("should create a valid final girl and allow her to enter a haunted place", () => {
    // Arrange
    const initialSanity = new Sanity(100);
    const placeId = "location-michael-house";
    const laurieStrode = new FinalGirl(
      "finalGirl-01",
      "Laurie Strode",
      initialSanity
    );

    // Act
    laurieStrode.enterPlace(placeId);

    // Assert
    expect(laurieStrode.getId()).toBe("finalGirl-01");
    expect(laurieStrode.getName()).toBe("Laurie Strode");
    expect(laurieStrode.getSanity().getAmount()).toBe(100);
    expect(laurieStrode.getCurrentPlaceId()).toBe(placeId);
  });
});
