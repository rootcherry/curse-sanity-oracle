// src/adapters/cli/index.ts
import { Curse } from "../../core/Curse.js";
import { ApplyCurseToSurvivorUseCase } from "../../use-cases/ApplyCurseToSurvivorUseCase.js";

const survivorInitialSanity = 100;
const curse = new Curse("curse-001", "The Ring", 7);
const applyCurseUseCase = new ApplyCurseToSurvivorUseCase();
// "Survivor Sanity after curse: 30"
const sanityAfterCurse = applyCurseUseCase.execute(
  survivorInitialSanity,
  curse
);
console.log(`Survivor Sanity after curse: ${sanityAfterCurse.getAmount()}`);
