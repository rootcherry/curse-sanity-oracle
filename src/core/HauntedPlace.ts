// src/core/HauntedPlace.ts
export class HauntedPlace {
  private readonly id: string;
  private name: string;
  private paranormalLevel: number;
  private curseIds: string[];

  constructor(
    id: string,
    name: string,
    paranormalLevel: number,
    curseIds: string[] = []
  ) {
    this.validateParanormalLevel(paranormalLevel);

    this.id = id;
    this.name = name;
    this.paranormalLevel = paranormalLevel;
    this.curseIds = curseIds;
  }

  private validateParanormalLevel(paranormalLevel: number): void {
    if (paranormalLevel < 1 || paranormalLevel > 100) {
      throw new Error("Paranormal level must be between 1 and 100.");
    }
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getParanormalLevel(): number {
    return this.paranormalLevel;
  }

  public getCurseIds(): string[] {
    return this.curseIds;
  }
}
