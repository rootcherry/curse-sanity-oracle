// tests/core/HauntedPlace.test.ts
import { HauntedPlace } from "../../src/core/HauntedPlace.js";

describe("Haunted Place Entity Domain", () => {
  it("should create a valid haunted place when paranormal level is between 1 and 100", () => {
    const hauntedPlace = new HauntedPlace(
      "place-001",
      "Himuro Mansion",
      66,
      []
    );

    expect(hauntedPlace.getName()).toBe("Himuro Mansion");
    expect(hauntedPlace.getParanormalLevel()).toBe(66);
  });

  it("should throw an error when paranormal level is greater than 100", () => {
    expect(() => {
      new HauntedPlace("place-001", "Himuro Mansion", 666, []);
    }).toThrow("Paranormal level must be between 1 and 100.");
  });

  it("should throw an error when paranormal level is less than 1", () => {
    expect(() => {
      new HauntedPlace("place-001", "Himuro Mansion", 0, []);
    }).toThrow("Paranormal level must be between 1 and 100.");
  });

  it("should add a curse without duplicates", () => {
    const hauntedPlace = new HauntedPlace(
      "place-001",
      "Himuro Mansion",
      66,
      []
    );

    hauntedPlace.addCurse("Rope Curse");
    hauntedPlace.addCurse("Rope Curse"); // Try adding a duplicate to test the rule!

    // Use toStrictEqual to compare the contents of arrays.
    expect(hauntedPlace.getCurseIds()).toStrictEqual(["Rope Curse"]);
  });
});
