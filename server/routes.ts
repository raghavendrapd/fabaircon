import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // AC Models routes
  app.get("/api/ac-models", async (req, res) => {
    try {
      const models = await storage.getAllAcModels();
      res.json(models);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch AC models" });
    }
  });

  app.get("/api/ac-models/:id", async (req, res) => {
    try {
      const model = await storage.getAcModel(req.params.id);
      if (!model) {
        return res.status(404).json({ error: "AC model not found" });
      }
      res.json(model);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch AC model" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
