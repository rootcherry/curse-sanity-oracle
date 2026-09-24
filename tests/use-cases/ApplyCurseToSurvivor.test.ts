// tests/use-case/ApplyCurseToSurvivor.test.ts
import { Curse } from "../../src/core/Curse.js";
import { InMemoryCurseRepository } from "../../src/adapters/persistence/InMemoryCurseRepository.js";
import { ApplyCurseToSurvivorUseCase } from "../../src/use-cases/ApplyCurseToSurvivorUseCase.js";

describe("ApplyCurseToSurvivor Use Case with Repository", () => {
  it("should apply the curse found by id to a survivor and return updated sanity", async () => {
    // Arrange
    const curseRepository = new InMemoryCurseRepository();
    const curse = new Curse("curse-jp-001", "Noroi", 5);

    // Save the curse to the “in-memory db" beforehand
    await curseRepository.save(curse);

    const applyCurseUseCase = new ApplyCurseToSurvivorUseCase(curseRepository);

    // Act
    const updatedSanity = await applyCurseUseCase.execute(100, "curse-jp-001");

    // Assert
    expect(updatedSanity.getAmount()).toBe(50);
  });

  it("should throw an error if the curse id does not exist in the repository", async () => {
    // Arrange
    const curseRepository = new InMemoryCurseRepository();
    const applyCurseUseCase = new ApplyCurseToSurvivorUseCase(curseRepository);

    // Act & Assert
    await expect(
      applyCurseUseCase.execute(100, "non-existent-curse")
    ).rejects.toThrow("Curse not found in the Multiverse.");
  });
});
