import { Curse } from "../../src/core/Curse.js";

describe("Curse Entity Domain", () => {
  it("should create a valid curse when severity is between 1 and 10", () => {
    // Arrange & Act
    const curse = new Curse("curse-01", "Ring Malice", 5, true);

    // Assert
    expect(curse.getName()).toBe("Ring Malice");
    expect(curse.getSeverity()).toBe(5);
  });

  it("should throw an error when severity is greater than 10", () => {
    // Arrange, Act & Assert
    expect(() => {
      new Curse("curse-02", "Fatal Frame", 11, true);
    }).toThrow("Curse severity must be between 1 and 10.");
  });

  it("should throw an error when severity is less than 1", () => {
    // Arrange, Act & Assert
    expect(() => {
      new Curse("curse-03", "Silent Hill Fog", 0, true);
    }).toThrow("Curse severity must be between 1 and 10.");
  });
});