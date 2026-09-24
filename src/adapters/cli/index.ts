// src/adapters/cli/index.ts
import { Curse } from "../../core/Curse.js";
import { InMemoryCurseRepository } from "../../adapters/persistence/InMemoryCurseRepository.js";
import { ApplyCurseToSurvivorUseCase } from "../../use-cases/ApplyCurseToSurvivorUseCase.js";

async function main() {
  // 1. Initialize the persistence adapter (our in-memory database)
  const curseRepository = new InMemoryCurseRepository();

  // 2. Populate the database with an initial curse from the Multiverse
  const curse = new Curse("curse-001", "The Ring", 7);
  await curseRepository.save(curse);

  // 3. Instantiate the Use Case by injecting the repository (Dependency Injection)
  const applyCurseUseCase = new ApplyCurseToSurvivorUseCase(curseRepository);

  // 4. Execute it by passing the curse's ID instead of the entire object
  const survivorInitialSanity = 100;
  const sanityAfterCurse = await applyCurseUseCase.execute(
    survivorInitialSanity,
    "curse-001"
  );

  console.log(`Survivor Sanity after curse: ${sanityAfterCurse.getAmount()}`);
}

main();
