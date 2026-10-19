// src/use-cases/ExploreHauntedPlaceUseCase.ts
import { FinalGirlRepository } from "../core/ports/FinalGirlRepository.js";
import { HauntedPlaceRepository } from "../core/ports/HauntedPlaceRepository.js";

export class ExploreHauntedPlaceUseCase {
  constructor(
    private finalGirlRepository: FinalGirlRepository,
    private hauntedPlaceRepository: HauntedPlaceRepository
  ) {}

  public async execute(
    finalGirlId: string,
    hauntedPlaceId: string
  ): Promise<void> {
    // 1. Find the Final Girl in the repository
    const finalGirl = await this.finalGirlRepository.findById(finalGirlId);
    if (!finalGirl) {
      throw new Error("Final Girl not found.");
    }

    // 2. Find the Haunted Place in the repository
    const hauntedPlace =
      await this.hauntedPlaceRepository.findById(hauntedPlaceId);
    if (!hauntedPlace) {
      throw new Error("Haunted place not found.");
    }

    // 3. Execute domain behavior: the Final Girl enters the haunted place
    finalGirl.enterPlace(hauntedPlaceId);

    // 4. Persist the updated state back to the repository
    await this.finalGirlRepository.save(finalGirl);
  }
}
