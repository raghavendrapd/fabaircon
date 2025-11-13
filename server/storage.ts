import { type AcModel, type InsertAcModel } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getAllAcModels(): Promise<AcModel[]>;
  getAcModel(id: string): Promise<AcModel | undefined>;
  createAcModel(model: InsertAcModel): Promise<AcModel>;
}

export class MemStorage implements IStorage {
  private acModels: Map<string, AcModel>;

  constructor() {
    this.acModels = new Map();
    this.seedData();
  }

  private seedData() {
    const models: InsertAcModel[] = [
      {
        name: "Premium Split AC",
        brand: "LG",
        type: "Split AC",
        capacity: "1.5 Ton",
        coverage: "150-180 sq ft",
        energyRating: "5 Star",
        features: [
          "Fast cooling technology",
          "Low noise operation",
          "Energy efficient compressor",
          "Auto clean function",
        ],
        imageUrl: "/assets/generated_images/Split_AC_unit_white_69b54d10.png",
      },
      {
        name: "Portable AC Unit",
        brand: "Honeywell",
        type: "Portable",
        capacity: "1 Ton",
        coverage: "120-150 sq ft",
        energyRating: "4 Star",
        features: [
          "Easy to move and install",
          "No permanent installation needed",
          "Built-in dehumidifier",
          "Remote control included",
        ],
        imageUrl: "/assets/generated_images/Portable_AC_unit_f1927014.png",
      },
      {
        name: "Window AC Classic",
        brand: "Carrier",
        type: "Window AC",
        capacity: "1.2 Ton",
        coverage: "130-160 sq ft",
        energyRating: "3 Star",
        features: [
          "Compact design",
          "Easy maintenance",
          "Reliable cooling",
          "Budget-friendly option",
        ],
        imageUrl: "/assets/generated_images/Window_AC_unit_cebc637b.png",
      },
      {
        name: "Cassette Ceiling AC",
        brand: "Daikin",
        type: "Cassette",
        capacity: "2 Ton",
        coverage: "250-300 sq ft",
        energyRating: "5 Star",
        features: [
          "360-degree airflow",
          "Ideal for offices",
          "Sleek ceiling design",
          "Powerful cooling capacity",
        ],
        imageUrl: "/assets/generated_images/Cassette_ceiling_AC_29a173d2.png",
      },
      {
        name: "Floor Standing Tower",
        brand: "Samsung",
        type: "Floor Standing",
        capacity: "1.8 Ton",
        coverage: "200-240 sq ft",
        energyRating: "4 Star",
        features: [
          "Modern tower design",
          "Space-saving footprint",
          "Advanced air purification",
          "Smart temperature control",
        ],
        imageUrl: "/assets/generated_images/Floor_standing_AC_e60e569d.png",
      },
      {
        name: "Dual Split System",
        brand: "Mitsubishi",
        type: "Multi-Split",
        capacity: "2.5 Ton",
        coverage: "300-350 sq ft",
        energyRating: "5 Star",
        features: [
          "Cool multiple rooms",
          "Individual room control",
          "Energy efficient operation",
          "Premium quality components",
        ],
        imageUrl: "/assets/generated_images/Dual_split_AC_system_1a0f6d94.png",
      },
    ];

    models.forEach((model) => {
      const id = randomUUID();
      const acModel: AcModel = { ...model, id };
      this.acModels.set(id, acModel);
    });
  }

  async getAllAcModels(): Promise<AcModel[]> {
    return Array.from(this.acModels.values());
  }

  async getAcModel(id: string): Promise<AcModel | undefined> {
    return this.acModels.get(id);
  }

  async createAcModel(insertModel: InsertAcModel): Promise<AcModel> {
    const id = randomUUID();
    const acModel: AcModel = { ...insertModel, id };
    this.acModels.set(id, acModel);
    return acModel;
  }
}

export const storage = new MemStorage();
