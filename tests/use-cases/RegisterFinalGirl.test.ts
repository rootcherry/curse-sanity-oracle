// tests/use-cases/RegisterFinalGirl.test.ts
import { InMemoryFinalGirlRepository } from "../../src/adapters/persistence/InMemoryFinalGirlRepository.js";
import { Sanity } from "../../src/core/Sanity.js";
import { RegisterFinalGirlUseCase } from "../../src/use-cases/RegisterFinalGirlUseCase.js";

describe("RegisterFinalGirl Use Case", () => {
  it("should register a new final girl and persist her data", async () => {
    // Arrange
    const repository = new InMemoryFinalGirlRepository();
    const sanity = new Sanity(100);
    const registerUseCase = new RegisterFinalGirlUseCase(repository);

    // Act
    const finalGirl = await registerUseCase.execute(
      "girl-01",
      "Sidney Prescott",
      sanity,
      null // currentPlaceId is initially null
    );

    // Assert
    expect(finalGirl.getName()).toBe("Sidney Prescott");
    expect(finalGirl.getSanity().getAmount()).toBe(100);

    // check if she was actually saved in the in-memory repository
    const savedGirl = await repository.findById("girl-01");
    expect(savedGirl).not.toBeNull();
    expect(savedGirl?.getId()).toBe("girl-01");
  });
});
