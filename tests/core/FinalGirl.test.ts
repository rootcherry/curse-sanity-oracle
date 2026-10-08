// tests/core/FinalGirl.test.ts
import { FinalGirl } from "../../src/core/FinalGirl.js";
import { Sanity } from "../../src/core/Sanity.js";

describe("FinalGirl Entity Domain", () => {
  it("should create a valid final girl with id, name and initial sanity", () => {
    // Arrange & Act
    const initialSanity = new Sanity(100);
    const laurieStrode = new FinalGirl(
      "finalGirl-01",
      "Laurie Strode",
      initialSanity
    );

    // Assert
    expect(laurieStrode.getId()).toBe("finalGirl-01");
    expect(laurieStrode.getName()).toBe("Laurie Strode");
    expect(laurieStrode.getSanity().getAmount()).toBe(100);
  });
});
