import { pgTable, text, serial, integer, boolean, timestamp, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const models = pgTable("models", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  type: text("type").notNull(),
  status: text("status").notNull(),
  accuracy: decimal("accuracy", { precision: 5, scale: 2 }),
  createdAt: timestamp("created_at").defaultNow(),
});

export const trainingJobs = pgTable("training_jobs", {
  id: serial("id").primaryKey(),
  modelId: integer("model_id").references(() => models.id),
  status: text("status").notNull(),
  progress: integer("progress").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

export const systemMetrics = pgTable("system_metrics", {
  id: serial("id").primaryKey(),
  cpuUsage: integer("cpu_usage"),
  memoryUsage: integer("memory_usage"),
  gpuUsage: integer("gpu_usage"),
  storageUsage: integer("storage_usage"),
  timestamp: timestamp("timestamp").defaultNow(),
});

export const activities = pgTable("activities", {
  id: serial("id").primaryKey(),
  type: text("type").notNull(),
  title: text("title").notNull(),
  description: text("description"),
  timestamp: timestamp("timestamp").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
});

export const insertModelSchema = createInsertSchema(models).omit({
  id: true,
  createdAt: true,
});

export const insertTrainingJobSchema = createInsertSchema(trainingJobs).omit({
  id: true,
  createdAt: true,
});

export const insertSystemMetricsSchema = createInsertSchema(systemMetrics).omit({
  id: true,
  timestamp: true,
});

export const insertActivitySchema = createInsertSchema(activities).omit({
  id: true,
  timestamp: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertModel = z.infer<typeof insertModelSchema>;
export type Model = typeof models.$inferSelect;
export type InsertTrainingJob = z.infer<typeof insertTrainingJobSchema>;
export type TrainingJob = typeof trainingJobs.$inferSelect;
export type InsertSystemMetrics = z.infer<typeof insertSystemMetricsSchema>;
export type SystemMetrics = typeof systemMetrics.$inferSelect;
export type InsertActivity = z.infer<typeof insertActivitySchema>;
export type Activity = typeof activities.$inferSelect;
