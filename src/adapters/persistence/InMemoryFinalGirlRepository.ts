// src/adapters/persistence/InMemoryFinalGirlRepository.ts
import { FinalGirl } from "../../core/FinalGirl.js";
import { FinalGirlRepository } from "../../core/ports/FinalGirlRepository.js";

export class InMemoryFinalGirlRepository implements FinalGirlRepository {
  private finalGirls: FinalGirl[] = [];

  public async findById(id: string): Promise<FinalGirl | null> {
    const foundGirl = this.finalGirls.find((girl) => girl.getId() === id);
    return foundGirl || null;
  }

  public async save(finalGirl: FinalGirl): Promise<void> {
    this.finalGirls.push(finalGirl);
  }
}
