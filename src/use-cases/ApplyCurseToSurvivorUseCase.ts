// src/use-cases/ApplyCurseToSurvivorUseCase.ts
import { CurseRepository } from "../core/ports/CurseRepository.js";
import { Sanity } from "../core/Sanity.js";

export class ApplyCurseToSurvivorUseCase {
  constructor(private curseRepository: CurseRepository) {}

  public async execute(
    currentSanityValue: number,
    curseId: string
  ): Promise<Sanity> {
    // 1. retrieve the curse from the “database” via the port (Interface)
    const curse = await this.curseRepository.findById(curseId);

    if (!curse) {
      throw new Error("Curse not found in the Multiverse.");
    }

    // 2. create the Sanity Value Object with the current value
    const currentSanity = new Sanity(currentSanityValue);

    // 3. calculate the damage based on the severity of the retrieved curse
    const damage = curse.getSeverity() * 10;

    // 4. apply the damage using the immutable method
    const updatedSanity = currentSanity.decrease(damage);

    // 5. return the new sanity state
    return updatedSanity;
  }
}
