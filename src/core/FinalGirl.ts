// src/core/FinalGirl.ts
import { Sanity } from "./Sanity.js";

export class FinalGirl {
  private readonly id: string;
  private name: string;
  private sanity: Sanity;
  private currentPlaceId: string | null;

  constructor(
    id: string,
    name: string,
    sanity: Sanity,
    currentPlaceId: string | null = null
  ) {
    this.id = id;
    this.name = name;
    this.sanity = sanity;
    this.currentPlaceId = currentPlaceId;
  }

  public enterPlace(placeId: string): void {
    if (!placeId) {
      throw new Error("Invalid haunted place ID.");
    }
    this.currentPlaceId = placeId;
  }

  public getCurrentPlaceId(): string | null {
    return this.currentPlaceId;
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
