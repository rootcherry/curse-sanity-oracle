// tests/use-cases/RegisterHauntedPlace.test.ts
import { InMemoryHauntedPlaceRepository } from "../../src/adapters/persistence/InMemoryHauntedPlaceRepository.js";
import { RegisterHauntedPlaceUseCase } from "../../src/use-cases/RegisterHauntedPlaceUseCase.js";

describe("RegisterHauntedPlace Use Case", () => {
  it("should register a new haunted place and persist it", async () => {
    // Arrange (Set up the fake db and the use case)
    const repository = new InMemoryHauntedPlaceRepository();
    const registerUseCase = new RegisterHauntedPlaceUseCase(repository);

    // Act (Runs the registration)
    const createdPlace = await registerUseCase.execute(
      "place-001",
      "Himuro Mansion",
      85,
      ["curse-01"]
    );

    // Assert (Check to see if it worked)
    expect(createdPlace.getName()).toBe("Himuro Mansion");
    expect(createdPlace.getParanormalLevel()).toBe(85);

    // Check whether it was actually saved in the in-memory database
    const savedPlace = await repository.findById("place-001");
    expect(savedPlace).not.toBeNull();
    expect(savedPlace?.getId()).toBe("place-001");
  });
});
