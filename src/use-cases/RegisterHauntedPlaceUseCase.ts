// src/use-cases/RegisterHauntedPlaceUseCase.ts
import { HauntedPlace } from "../core/HauntedPlace.js";
import { HauntedPlaceRepository } from "../core/ports/HauntedPlaceRepository.js";

export class RegisterHauntedPlaceUseCase {
  constructor(private hauntedPlaceRepository: HauntedPlaceRepository) {}

  public async execute(
    id: string,
    name: string,
    paranormalLevel: number,
    curseIds: string[] = []
  ): Promise<HauntedPlace> {
    // 1. Create the new Domain Entity (it already validates the “paranormal” level on its own)
    const hauntedPlace = new HauntedPlace(id, name, paranormalLevel, curseIds);

    // 2. Save the entity to the repository (persistence) through the Port
    await this.hauntedPlaceRepository.save(hauntedPlace);

    // 3. Return the created entity
    return hauntedPlace;
  }
}
