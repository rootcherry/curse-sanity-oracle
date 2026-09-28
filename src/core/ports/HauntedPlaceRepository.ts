// src/core/ports/HauntedPlaceRepository.ts
import { HauntedPlace } from "../HauntedPlace.js";

export interface HauntedPlaceRepository {
  findById(id: string): Promise<HauntedPlace | null>;
  save(hauntedPlace: HauntedPlace): Promise<void>;
}
