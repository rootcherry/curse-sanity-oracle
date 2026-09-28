// tests/use-case/ApplyCurseToSurvivor.test.ts
import { Curse } from "../../src/core/Curse.js";
import { CurseRepository } from "../../src/core/ports/CurseRepository.js";
import { ApplyCurseToSurvivorUseCase } from "../../src/use-cases/ApplyCurseToSurvivorUseCase.js";

// 1. Create a stub (test double) that implements the port
class CurseRepositoryStub implements CurseRepository {
  public async findById(id: string): Promise<Curse | null> {
    // Returns a fixed curse for any valid test ID
    return new Curse(id, "Mocked Curse", 5);
  }

  public async save(curse: Curse): Promise<void> {
    // In the stub, the save method can simply be an empty “mock,”
    // since our focus here is on testing the read operation (findById) in the use case.
    return Promise.resolve();
  }
}

describe("ApplyCurseToSurvivor Use Case with Stub", () => {
  it("should apply the curse found by id to a survivor and return updated sanity", async () => {
    // Arrange
    const curseRepository = new CurseRepositoryStub();
    const applyCurseUseCase = new ApplyCurseToSurvivorUseCase(curseRepository);

    // Act
    // Pass any ID, and the Stub will cast the curse on us with a severity of 5
    const updatedSanity = await applyCurseUseCase.execute(100, "any-curse-id");

    // Assert
    expect(updatedSanity.getAmount()).toBe(50); // 100 - (5 * 10) = 50
  });

  it("should throw an error if the curse id does not exist in the repository", async () => {
    // To test the error scenario, we can create a specific stub
    // that returns null for findById
    const notFoundRepository: CurseRepository = {
      async findById(id: string): Promise<Curse | null> {
        return null;
      },
      async save(curse: Curse): Promise<void> {
        return;
      },
    };

    const applyCurseUseCase = new ApplyCurseToSurvivorUseCase(
      notFoundRepository
    );

    // Act & Assert
    await expect(
      applyCurseUseCase.execute(100, "non-existent-curse")
    ).rejects.toThrow("Curse not found in the Multiverse.");
  });
});
