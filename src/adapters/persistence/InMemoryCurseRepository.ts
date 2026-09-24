// src/adapters/persistence/InMemoryCurseRepository.ts
import { Curse } from "../../core/Curse.js";
import { CurseRepository } from "../../core/ports/CurseRepository.js";

export class InMemoryCurseRepository implements CurseRepository {
  // fake db in memory
  private curses: Curse[] = [];

  public async findById(id: string): Promise<Curse | null> {
    // simulate an asynchronous search in the array
    const foundCurse = this.curses.find((curse) => curse.getId() === id);

    // if not found, return null
    return foundCurse || null;
  }

  public async save(curse: Curse): Promise<void> {
    // simulate persistence by adding to the array
    this.curses.push(curse);
  }
}
