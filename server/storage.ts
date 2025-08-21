import { type Presentation } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getPresentation(id: string): Promise<Presentation | undefined>;
  getAllPresentations(): Promise<Presentation[]>;
}

export class MemStorage implements IStorage {
  private presentations: Map<string, Presentation>;

  constructor() {
    this.presentations = new Map();
  }

  async getPresentation(id: string): Promise<Presentation | undefined> {
    return this.presentations.get(id);
  }

  async getAllPresentations(): Promise<Presentation[]> {
    return Array.from(this.presentations.values());
  }
}

export const storage = new MemStorage();
