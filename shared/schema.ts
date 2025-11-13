import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const acModels = pgTable("ac_models", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  brand: text("brand").notNull(),
  type: text("type").notNull(),
  capacity: text("capacity").notNull(),
  coverage: text("coverage").notNull(),
  energyRating: text("energy_rating").notNull(),
  features: text("features").array().notNull(),
  imageUrl: text("image_url").notNull(),
});

export const insertAcModelSchema = createInsertSchema(acModels).omit({
  id: true,
});

export type InsertAcModel = z.infer<typeof insertAcModelSchema>;
export type AcModel = typeof acModels.$inferSelect;
