// src/core/ports/CurseRepository.ts
import { Curse } from "../Curse.js";

export interface CurseRepository {
  findById(id: string): Promise<Curse | null>;
  save(curse: Curse): Promise<void>;
}
