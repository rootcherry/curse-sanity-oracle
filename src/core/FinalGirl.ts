// src/core/FinalGirl.ts
import { Sanity } from "./Sanity.js";

export class FinalGirl {
  private readonly id: string;
  private name: string;
  private sanity: Sanity;

  constructor(id: string, name: string, sanity: Sanity) {
    this.id = id;
    this.name = name;
    this.sanity = sanity;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getSanity(): Sanity {
    return this.sanity;
  }
}
