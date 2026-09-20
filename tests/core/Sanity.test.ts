// tests/core/Sanity.test.ts
import { Sanity } from "../../src/core/Sanity.js";

describe("Sanity Value Object", () => {
  it("should create a valid sanity when amount is between 0 and 100", () => {
    // Arrange & Act
    const sanity = new Sanity(75);

    // Assert
    expect(sanity.getAmount()).toBe(75);
    expect(sanity.isCritical()).toBe(false);
  });

  it("should throw an error when amount is greater than 100", () => {
    // Arrange, Act & Assert
    expect(() => {
      new Sanity(105);
    }).toThrow("Sanity amount must be between 0 and 100.");
  });

  it("should throw an error when amount is less than 0", () => {
    // Arrange, Act & Assert
    expect(() => {
      new Sanity(-5);
    }).toThrow("Sanity amount must be between 0 and 100.");
  });

  it("should return a new Sanity instance with decreased amount without mutating the original", () => {
    // Arrange
    const initialSanity = new Sanity(50);

    // Act
    const decreasedSanity = initialSanity.decrease(30);

    // Assert
    expect(initialSanity.getAmount()).toBe(50); // Imutabilidade provada!
    expect(decreasedSanity.getAmount()).toBe(20);
  });

  it("should clamp decreased sanity to 0 if it goes below zero", () => {
    // Arrange
    const sanity = new Sanity(10);

    // Act
    const result = sanity.decrease(50);

    // Assert
    expect(result.getAmount()).toBe(0);
  });

  it("should return true if sanity is critical (<= 20)", () => {
    // Arrange
    const sanity = new Sanity(15);

    // Assert
    expect(sanity.isCritical()).toBe(true);
  });
});
