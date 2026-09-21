import { Curse } from "../../src/core/Curse.js";
import { ApplyCurseToSurvivorUseCase } from "../../src/use-cases/ApplyCurseToSurvivorUseCase.js";

describe("ApplyCurseToSurvivor Use Case", () => {
  it("should decrease survivor sanity correctly based on curse severity", () => {
    // Arange (Set up)
    const curseSeverity = 5;
    const initialSanity = 100;
    const expectedSanityAfterCurse = 50; // 100 - (5 * 10)

    const curse = new Curse("curse-jp-001", "The Ring Curse", curseSeverity);
    const applyCurseUseCase = new ApplyCurseToSurvivorUseCase();

    // Act (Invoking)
    const updatedSanity = applyCurseUseCase.execute(initialSanity, curse);

    // Assert (Verify)
    expect(updatedSanity.getAmount()).toBe(expectedSanityAfterCurse);
  });
});
