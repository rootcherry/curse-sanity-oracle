// tests/use-cases/ExploreHauntedPlace.test.ts
import { FinalGirl } from "../../src/core/FinalGirl.js";
import { HauntedPlace } from "../../src/core/HauntedPlace.js";
import { Sanity } from "../../src/core/Sanity.js";
import { InMemoryFinalGirlRepository } from "../../src/adapters/persistence/InMemoryFinalGirlRepository.js";
import { InMemoryHauntedPlaceRepository } from "../../src/adapters/persistence/InMemoryHauntedPlaceRepository.js";
import { ExploreHauntedPlaceUseCase } from "../../src/use-cases/ExploreHauntedPlaceUseCase.js";

describe("Explore Haunted Place Use Case", () => {
  it("should allow a Final Girl to explore a haunted place and update her current location", async () => {
    // 1. Arrange: Prepare repositories and save initial entities
    const finalGirlRepository = new InMemoryFinalGirlRepository();
    const hauntedPlaceRepository = new InMemoryHauntedPlaceRepository();

    const sanity = new Sanity(100);
    const finalGirl = new FinalGirl("girl-sidney", "Sidney Prescott", sanity);
    const hauntedPlace = new HauntedPlace(
      "place-woodsboro",
      "Woodsboro High School",
      75,
      []
    );

    await finalGirlRepository.save(finalGirl);
    await hauntedPlaceRepository.save(hauntedPlace);

    const useCase = new ExploreHauntedPlaceUseCase(
      finalGirlRepository,
      hauntedPlaceRepository
    );

    // 2. Act: Execute the use case passing their IDs
    await useCase.execute("girl-sidney", "place-woodsboro");

    // 3. Assert: Verify that the Final Girl's current location was updated in the repository
    const updatedGirl = await finalGirlRepository.findById("girl-sidney");
    expect(updatedGirl).not.toBeNull();
    expect(updatedGirl?.getCurrentPlaceId()).toBe("place-woodsboro");
  });
});
