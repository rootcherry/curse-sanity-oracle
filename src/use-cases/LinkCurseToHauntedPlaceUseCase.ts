// src/use-cases/LinkCurseToHauntedPlaceUseCase.ts
// src/use-cases/LinkCurseToHauntedPlaceUseCase.ts
import { CurseRepository } from "../core/ports/CurseRepository.js";
import { HauntedPlaceRepository } from "../core/ports/HauntedPlaceRepository.js";

export class LinkCurseToHauntedPlaceUseCase {
  constructor(
    private curseRepository: CurseRepository,
    private hauntedPlaceRepository: HauntedPlaceRepository
  ) {}

  public async execute(hauntedPlaceId: string, curseId: string): Promise<void> {
    // 1. Search for the haunted location by ID
    const hauntedPlace =
      await this.hauntedPlaceRepository.findById(hauntedPlaceId);
    if (!hauntedPlace) {
      throw new Error("Haunted place not found");
    }

    // 2. Searches for the curse by ID to ensure it exists in the Multiverse.
    const curse = await this.curseRepository.findById(curseId);
    if (!curse) {
      throw new Error("Curse not found");
    }

    // 3. Adds the curse to the location using the dynamic ID provided in the parameter.
    hauntedPlace.addCurse(curseId);

    // 4. Saves the updated location to the repository (with await!)
    await this.hauntedPlaceRepository.save(hauntedPlace);
  }
}
