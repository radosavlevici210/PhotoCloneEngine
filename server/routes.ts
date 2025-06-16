import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { DashboardMetrics, SystemHealth, ActivityItem } from "../client/src/types/dashboard";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint for production monitoring
  app.get("/api/health", async (req, res) => {
    try {
      // Check database connectivity
      const users = await storage.getUser(1);
      
      res.json({
        status: "healthy",
        timestamp: new Date().toISOString(),
        version: process.env.npm_package_version || "1.0.0",
        database: "connected",
        memory: process.memoryUsage(),
        uptime: process.uptime(),
        environment: process.env.NODE_ENV || "development"
      });
    } catch (error) {
      res.status(503).json({
        status: "unhealthy",
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // AI/ML Training endpoints
  app.post("/api/training/start", async (req, res) => {
    try {
      const { modelName, modelType, parameters } = req.body;
      
      if (!modelName || !modelType) {
        return res.status(400).json({
          error: "Model name and type are required",
          timestamp: new Date().toISOString()
        });
      }

      // Simulate training job creation
      const trainingJob = {
        id: Date.now().toString(),
        modelName,
        modelType,
        parameters,
        status: "running",
        progress: 0,
        startTime: new Date().toISOString()
      };

      res.json({
        success: true,
        trainingJob,
        message: `Training started for ${modelName}`
      });
    } catch (error) {
      res.status(500).json({
        error: "Failed to start training",
        timestamp: new Date().toISOString()
      });
    }
  });

  app.post("/api/algorithms/execute", async (req, res) => {
    try {
      const { algorithmId, parameters } = req.body;
      
      if (!algorithmId) {
        return res.status(400).json({
          error: "Algorithm ID is required",
          timestamp: new Date().toISOString()
        });
      }

      // Simulate algorithm execution
      const execution = {
        id: Date.now().toString(),
        algorithmId,
        parameters,
        status: "running",
        progress: 0,
        startTime: new Date().toISOString()
      };

      res.json({
        success: true,
        execution,
        message: `Algorithm ${algorithmId} execution started`
      });
    } catch (error) {
      res.status(500).json({
        error: "Failed to execute algorithm",
        timestamp: new Date().toISOString()
      });
    }
  });

  app.get("/api/models", async (req, res) => {
    try {
      // Simulate model listing
      const models = [
        {
          id: "1",
          name: "PhotoClone ResNet-50",
          type: "classification",
          status: "trained",
          accuracy: 94.7,
          lastTrained: "2025-06-16T07:00:00Z"
        },
        {
          id: "2", 
          name: "BERT Sentiment Analysis",
          type: "nlp",
          status: "training",
          accuracy: 89.2,
          lastTrained: "2025-06-16T06:30:00Z"
        },
        {
          id: "3",
          name: "Neural Style Transfer",
          type: "generation",
          status: "deployed",
          accuracy: 92.1,
          lastTrained: "2025-06-16T05:45:00Z"
        }
      ];

      res.json(models);
    } catch (error) {
      res.status(500).json({
        error: "Failed to fetch models",
        timestamp: new Date().toISOString()
      });
    }
  });

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
      res.status(500).json({ 
        error: "Failed to fetch metrics",
        timestamp: new Date().toISOString()
      });
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
      res.status(500).json({ 
        error: "Failed to fetch system health",
        timestamp: new Date().toISOString()
      });
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
        },
        {
          id: "4",
          type: "success",
          title: "Enterprise migration completed",
          description: "PhotoClone AI Dashboard ready for production",
          timestamp: "just now",
          icon: "check-circle",
          iconColor: "bg-emerald-600"
        }
      ];
      res.json(activities);
    } catch (error) {
      res.status(500).json({ 
        error: "Failed to fetch activities",
        timestamp: new Date().toISOString()
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}