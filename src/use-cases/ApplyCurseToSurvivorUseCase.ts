// src/use-cases/ApplyCurseToSurvivorUseCase.ts
import { Curse } from "../core/Curse.js";
import { Sanity } from "../core/Sanity.js";
export class ApplyCurseToSurvivorUseCase {
  public execute(currentSanityValue: number, curse: Curse): Sanity {
    // 1. Create the Sanity Value Object with the current value
    const currentSanity = new Sanity(currentSanityValue);

    // 2. Define the business rule for damage:
    // Example: Each severity point of the curse subtracts 10 sanity points
    const damage = curse.getSeverity() * 10;

    // 3. Apply the damage using the Value Object’s immutable method
    const updateSanity = currentSanity.decrease(damage);

    // 4. Return the new sanity state
    return updateSanity;
  }
}
