// tests/adapters/InMemoryFinalGirlRepository.test.ts
import { FinalGirl } from "../../src/core/FinalGirl.js";
import { Sanity } from "../../src/core/Sanity.js";
import { InMemoryFinalGirlRepository } from "../../src/adapters/persistence/InMemoryFinalGirlRepository.js";

describe("InMemoryFinalGirlRepository", () => {
  it("should save a Final Girl and find it by id", async () => {
    // Arrange
    const repository = new InMemoryFinalGirlRepository();
    const sanity = new Sanity(100);
    const finalGirl = new FinalGirl("girl-01", "Sidney Prescott", sanity);

    // Act
    await repository.save(finalGirl);
    const foundGirl = await repository.findById("girl-01");

    // Assert
    expect(foundGirl).not.toBeNull();
    expect(foundGirl?.getName()).toBe("Sidney Prescott");
  });

  it("should return null if final girl is not found", async () => {
    // Arrange
    const repository = new InMemoryFinalGirlRepository();

    // Act
    const foundGirl = await repository.findById("non-existent-id");

    // Assert
    expect(foundGirl).toBeNull();
  });
});
