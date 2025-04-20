import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const challenges = pgTable("challenges", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  goal: text("goal").notNull(),
  userId: integer("user_id").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  completed: boolean("completed").default(false).notNull(),
});

export const satisfactionRatings = pgTable("satisfaction_ratings", {
  id: serial("id").primaryKey(),
  rating: integer("rating").notNull(),
  comments: text("comments"),
  userId: integer("user_id"),
  challengeId: integer("challenge_id"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// User schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// Challenge schemas
export const insertChallengeSchema = createInsertSchema(challenges).pick({
  title: true,
  description: true,
  goal: true,
  userId: true,
});

// Satisfaction rating schemas
export const insertSatisfactionRatingSchema = createInsertSchema(satisfactionRatings).pick({
  rating: true,
  comments: true,
  userId: true,
  challengeId: true,
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertChallenge = z.infer<typeof insertChallengeSchema>;
export type Challenge = typeof challenges.$inferSelect;

export type InsertSatisfactionRating = z.infer<typeof insertSatisfactionRatingSchema>;
export type SatisfactionRating = typeof satisfactionRatings.$inferSelect;
