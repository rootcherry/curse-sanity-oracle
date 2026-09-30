// tests/use-cases/LinkCurseToHauntedPlace.test.ts
import { Curse } from "../../src/core/Curse.js";
import { HauntedPlace } from "../../src/core/HauntedPlace.js";
import { InMemoryCurseRepository } from "../../src/adapters/persistence/InMemoryCurseRepository.js";
import { InMemoryHauntedPlaceRepository } from "../../src/adapters/persistence/InMemoryHauntedPlaceRepository.js";
import { LinkCurseToHauntedPlaceUseCase } from "../../src/use-cases/LinkCurseToHauntedPlaceUseCase.js";

describe("Link Curse to Haunted Place Use Case", () => {
  it("should successfully link a curse to an existing haunted place", async () => {
    // 1. Arrange: Prepare repositories, domain entities, and the use case
    const curseRepository = new InMemoryCurseRepository();
    const hauntedPlaceRepository = new InMemoryHauntedPlaceRepository();

    const curse = new Curse("curse-01", "The Ring", 8);
    const hauntedPlace = new HauntedPlace("place-01", "Himuro Mansion", 90, []);

    // Save initial entities to our in-memory "databases"
    await curseRepository.save(curse);
    await hauntedPlaceRepository.save(hauntedPlace);

    const useCase = new LinkCurseToHauntedPlaceUseCase(
      curseRepository,
      hauntedPlaceRepository
    );

    // 2. Act: Execute the use case linking them by ID
    await useCase.execute("place-01", "curse-01");

    // 3. Assert: Verify that the haunted place now contains the curse ID
    const updatedPlace = await hauntedPlaceRepository.findById("place-01");
    expect(updatedPlace).not.toBeNull();
    expect(updatedPlace?.getCurseIds()).toStrictEqual(["curse-01"]);
  });

  it("should throw an error if the haunted place does not exist", async () => {
    // Arrange
    const curseRepository = new InMemoryCurseRepository();
    const hauntedPlaceRepository = new InMemoryHauntedPlaceRepository();

    const curse = new Curse("curse-01", "The Ring", 8);
    await curseRepository.save(curse);

    const useCase = new LinkCurseToHauntedPlaceUseCase(
      curseRepository,
      hauntedPlaceRepository
    );

    // Act & Assert
    await expect(
      useCase.execute("non-existent-place", "curse-01")
    ).rejects.toThrow("Haunted place not found");
  });

  it("should throw an error if the curse does not exist", async () => {
    // Arrange
    const curseRepository = new InMemoryCurseRepository();
    const hauntedPlaceRepository = new InMemoryHauntedPlaceRepository();

    const hauntedPlace = new HauntedPlace("place-01", "Himuro Mansion", 90, []);
    await hauntedPlaceRepository.save(hauntedPlace);

    const useCase = new LinkCurseToHauntedPlaceUseCase(
      curseRepository,
      hauntedPlaceRepository
    );

    // Act & Assert
    await expect(
      useCase.execute("place-01", "non-existent-curse")
    ).rejects.toThrow("Curse not found");
  });
});
