// src/core/ports/FinalGirlRepository.ts
import { FinalGirl } from "../FinalGirl.js";

export interface FinalGirlRepository {
  findById(id: string): Promise<FinalGirl | null>;
  save(finalGirl: FinalGirl): Promise<void>;
}
