import { 
  users, type User, type InsertUser,
  challenges, type Challenge, type InsertChallenge,
  satisfactionRatings, type SatisfactionRating, type InsertSatisfactionRating
} from "@shared/schema";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Challenge operations
  getAllChallenges(): Promise<Challenge[]>;
  getChallengeById(id: number): Promise<Challenge | undefined>;
  createChallenge(challenge: InsertChallenge): Promise<Challenge>;
  
  // Satisfaction rating operations
  getAllSatisfactionRatings(): Promise<SatisfactionRating[]>;
  getSatisfactionRatingsByChallengeId(challengeId: number): Promise<SatisfactionRating[]>;
  createSatisfactionRating(rating: InsertSatisfactionRating): Promise<SatisfactionRating>;
  
  // Dashboard statistics
  getDashboardStats(): Promise<any>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private challenges: Map<number, Challenge>;
  private satisfactionRatings: Map<number, SatisfactionRating>;
  
  private userId: number;
  private challengeId: number;
  private ratingId: number;

  constructor() {
    this.users = new Map();
    this.challenges = new Map();
    this.satisfactionRatings = new Map();
    
    this.userId = 1;
    this.challengeId = 1;
    this.ratingId = 1;
    
    // Add a default user for testing
    this.createUser({
      username: "testuser",
      password: "password123"
    });
    
    // Add some sample challenges
    this.createChallenge({
      title: "Reduce customer wait times",
      description: "Customers are waiting too long for support responses",
      goal: "Reduce wait times by 25%",
      userId: 1
    });
    
    this.createChallenge({
      title: "Improve onboarding process",
      description: "New employees are taking too long to get up to speed",
      goal: "Reduce onboarding time by 30%",
      userId: 1
    });
    
    // Add some sample ratings
    this.createSatisfactionRating({
      rating: 4,
      comments: "The process was easy to follow",
      userId: 1,
      challengeId: 1
    });
    
    this.createSatisfactionRating({
      rating: 3,
      comments: "Could use some improvement",
      userId: 1,
      challengeId: 1
    });
    
    this.createSatisfactionRating({
      rating: 5,
      comments: "Very intuitive",
      userId: 1,
      challengeId: 2
    });
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const now = new Date();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Challenge operations
  async getAllChallenges(): Promise<Challenge[]> {
    return Array.from(this.challenges.values());
  }
  
  async getChallengeById(id: number): Promise<Challenge | undefined> {
    return this.challenges.get(id);
  }
  
  async createChallenge(insertChallenge: InsertChallenge): Promise<Challenge> {
    const id = this.challengeId++;
    const now = new Date();
    const challenge: Challenge = { 
      ...insertChallenge, 
      id, 
      createdAt: now,
      completed: false
    };
    this.challenges.set(id, challenge);
    return challenge;
  }
  
  // Satisfaction rating operations
  async getAllSatisfactionRatings(): Promise<SatisfactionRating[]> {
    return Array.from(this.satisfactionRatings.values());
  }
  
  async getSatisfactionRatingsByChallengeId(challengeId: number): Promise<SatisfactionRating[]> {
    return Array.from(this.satisfactionRatings.values())
      .filter(rating => rating.challengeId === challengeId);
  }
  
  async createSatisfactionRating(insertRating: InsertSatisfactionRating): Promise<SatisfactionRating> {
    const id = this.ratingId++;
    const now = new Date();
    const rating: SatisfactionRating = { 
      ...insertRating, 
      id, 
      createdAt: now 
    };
    this.satisfactionRatings.set(id, rating);
    return rating;
  }
  
  // Dashboard statistics
  async getDashboardStats(): Promise<any> {
    const ratings = Array.from(this.satisfactionRatings.values());
    const averageRating = ratings.length > 0 
      ? ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length
      : 0;
      
    const positiveRatings = ratings.filter(r => r.rating >= 4).length;
    const positivePercentage = ratings.length > 0 
      ? (positiveRatings / ratings.length) * 100
      : 0;
      
    const activeChallenges = Array.from(this.challenges.values())
      .filter(c => !c.completed);
      
    const departmentFeedback = {
      "Sales": this.getRandomInRange(3, 5),
      "Support": this.getRandomInRange(3, 5),
      "Operations": this.getRandomInRange(3, 5),
      "Finance": this.getRandomInRange(3, 5),
      "Marketing": this.getRandomInRange(3, 5)
    };
      
    return {
      employeeSatisfaction: {
        average: averageRating.toFixed(1),
        change: "+0.3",
        positive: `${Math.round(positivePercentage)}%`
      },
      customerSatisfaction: {
        percentage: "92%",
        change: "+4%",
        responses: 312
      },
      processEfficiency: {
        percentage: "87%",
        change: "+2%"
      },
      activeChallenges: {
        count: activeChallenges.length,
        nearingCompletion: 2,
        onTrack: 3,
        atRisk: 2
      },
      departmentFeedback
    };
  }
  
  private getRandomInRange(min: number, max: number): number {
    return +(Math.random() * (max - min) + min).toFixed(1);
  }
}

export const storage = new MemStorage();
