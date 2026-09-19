// src/core/curse.ts
export class Curse {
    private readonly id: string; // UUID or string > number
    private name: string;
    private severity: number;
    private isActive: boolean;

    constructor(id: string, name: string, severity: number, isActive: boolean = true) {
        this.validateSeverity(severity);

        this.id = id;
        this.name = name;
        this.severity = severity;
        this.isActive = isActive;
    }

    private validateSeverity(severity: number): void {
        if (severity < 1 || severity > 10) {
            throw new Error("Curse severity must be between 1 and 10.");
        }
    }

    // Getters (Encapsulation)
    public getSeverity(): number {
        return this.severity;
    }

    public getName(): string {
        return this.name;
    }
}