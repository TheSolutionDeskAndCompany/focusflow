import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertChallengeSchema, insertSatisfactionRatingSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all challenges
  app.get("/api/challenges", async (req, res) => {
    try {
      const challenges = await storage.getAllChallenges();
      res.json(challenges);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch challenges" });
    }
  });

  // Get challenge by ID
  app.get("/api/challenges/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const challenge = await storage.getChallengeById(id);
      
      if (!challenge) {
        return res.status(404).json({ message: "Challenge not found" });
      }
      
      res.json(challenge);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch challenge" });
    }
  });

  // Create a new challenge
  app.post("/api/challenges", async (req, res) => {
    try {
      const validatedData = insertChallengeSchema.parse({
        ...req.body,
        userId: req.body.userId || 1, // Default userId for demonstration
      });
      
      const newChallenge = await storage.createChallenge(validatedData);
      res.status(201).json(newChallenge);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid challenge data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create challenge" });
    }
  });

  // Get all satisfaction ratings
  app.get("/api/ratings", async (req, res) => {
    try {
      const ratings = await storage.getAllSatisfactionRatings();
      res.json(ratings);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch satisfaction ratings" });
    }
  });

  // Get satisfaction ratings by challenge ID
  app.get("/api/challenges/:id/ratings", async (req, res) => {
    try {
      const challengeId = parseInt(req.params.id);
      const ratings = await storage.getSatisfactionRatingsByChallengeId(challengeId);
      res.json(ratings);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch satisfaction ratings" });
    }
  });

  // Submit a new satisfaction rating
  app.post("/api/ratings", async (req, res) => {
    try {
      const validatedData = insertSatisfactionRatingSchema.parse({
        ...req.body,
        userId: req.body.userId || 1, // Default userId for demonstration
      });
      
      const newRating = await storage.createSatisfactionRating(validatedData);
      res.status(201).json(newRating);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid rating data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create satisfaction rating" });
    }
  });

  // Get dashboard statistics
  app.get("/api/dashboard/stats", async (req, res) => {
    try {
      const stats = await storage.getDashboardStats();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch dashboard statistics" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
