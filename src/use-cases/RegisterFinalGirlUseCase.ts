// src/use-cases/RegisterFinalGirlUseCase.ts
import { FinalGirl } from "../core/FinalGirl.js";
import { FinalGirlRepository } from "../core/ports/FinalGirlRepository.js";
import { Sanity } from "../core/Sanity.js";

export class RegisterFinalGirlUseCase {
  constructor(private finalGirlRepository: FinalGirlRepository) {}

  public async execute(
    id: string,
    name: string,
    sanity: Sanity,
    currentPlaceId: string | null
  ): Promise<FinalGirl> {
    const finalGirl = new FinalGirl(id, name, sanity, currentPlaceId);

    await this.finalGirlRepository.save(finalGirl);

    return finalGirl;
  }
}
