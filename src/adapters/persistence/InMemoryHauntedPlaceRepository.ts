// src/adapters/persistence/InMemoryHauntedPlaceRepository.ts
import { HauntedPlace } from "../../core/HauntedPlace.js";
import { HauntedPlaceRepository } from "../../core/ports/HauntedPlaceRepository.js";

export class InMemoryHauntedPlaceRepository implements HauntedPlaceRepository {
  private places: HauntedPlace[] = [];

  public async findById(id: string): Promise<HauntedPlace | null> {
    const foundPlace = this.places.find((place) => place.getId() === id);
    return foundPlace || null;
  }

  public async save(hauntedPlace: HauntedPlace): Promise<void> {
    this.places.push(hauntedPlace);
  }
}
