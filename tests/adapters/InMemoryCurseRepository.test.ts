// tests/adapters/InMemoryCurseRepository.test.ts
import { Curse } from "../../src/core/Curse.js";
import { InMemoryCurseRepository } from "../../src/adapters/persistence/InMemoryCurseRepository.js";

describe("InMemoryCurseRepository", () => {
  it("should save a Curse and find it by Id", async () => {
    // Arrange
    const curse = new Curse("curse-01", "Ring Malice", 5, true);
    const curseRepository = new InMemoryCurseRepository();

    // Act
    await curseRepository.save(curse);
    const foundCurse = await curseRepository.findById("curse-01");

    // Assert
    expect(foundCurse).not.toBeNull();
    expect(foundCurse?.getName()).toBe("Ring Malice");
    expect(foundCurse?.getSeverity()).toBe(5);
  });

  it("should return null if curse id does not exist", async () => {
    // Arrange
    const curseRepository = new InMemoryCurseRepository();

    // Act
    const foundCurse = await curseRepository.findById("non-existent-id");

    // Assert
    expect(foundCurse).toBeNull();
  });
});
