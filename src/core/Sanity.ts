// src/core/Sanity.ts
export class Sanity {
  private readonly amount: number;

  constructor(amount: number) {
    this.validateRange(amount);
    this.amount = amount;
  }

  private validateRange(value: number): void {
    if (value < 0 || value > 100) {
      throw new Error("Sanity amount must be between 0 and 100.");
    }
  }

  public getAmount(): number {
    return this.amount;
  }

  public decrease(value: number): Sanity {
    const newAmount = this.amount - value;
    // Ensures that the sanity level never drops below 0
    const clampedAmount = newAmount < 0 ? 0 : newAmount;
    return new Sanity(clampedAmount);
  }

  public increase(value: number): Sanity {
    const newAmount = this.amount + value;
    // Ensures that the sanity value never exceeds 100
    const clampedAmount = newAmount > 100 ? 100 : newAmount;
    return new Sanity(clampedAmount);
  }

  public isCritical(): boolean {
    return this.amount <= 20;
  }
}
