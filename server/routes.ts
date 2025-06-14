import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { DashboardMetrics, SystemHealth, ActivityItem } from "../client/src/types/dashboard";

export async function registerRoutes(app: Express): Promise<Server> {
  // Dashboard metrics endpoint
  app.get("/api/metrics", async (req, res) => {
    try {
      const metrics: DashboardMetrics = {
        activeModels: 12,
        trainingJobs: 3,
        accuracy: 94.7,
        systemLoad: 67
      };
      res.json(metrics);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch metrics" });
    }
  });

  // System health endpoint
  app.get("/api/system-health", async (req, res) => {
    try {
      const systemHealth: SystemHealth = {
        cpu: Math.floor(Math.random() * 100),
        memory: Math.floor(Math.random() * 100),
        gpu: Math.floor(Math.random() * 100),
        storage: Math.floor(Math.random() * 100)
      };
      res.json(systemHealth);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch system health" });
    }
  });

  // Activities endpoint
  app.get("/api/activities", async (req, res) => {
    try {
      const activities: ActivityItem[] = [
        {
          id: "1",
          type: "training",
          title: "Model training started",
          description: "ResNet-50 classification model",
          timestamp: "2 min ago",
          icon: "play",
          iconColor: "bg-blue-600"
        },
        {
          id: "2",
          type: "deployment",
          title: "Model deployment successful",
          description: "BERT-base sentiment analysis",
          timestamp: "15 min ago",
          icon: "check",
          iconColor: "bg-green-600"
        },
        {
          id: "3",
          type: "analysis",
          title: "Performance analysis completed",
          description: "Quarterly model evaluation",
          timestamp: "1 hour ago",
          icon: "chart",
          iconColor: "bg-purple-600"
        }
      ];
      res.json(activities);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch activities" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}