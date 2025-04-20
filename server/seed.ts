import { db } from "./db";
import { users, challenges, satisfactionRatings } from "@shared/schema";

async function seed() {
  try {
    console.log("Starting database seeding...");

    // Check if we already have data
    const existingUsers = await db.select().from(users);
    if (existingUsers.length > 0) {
      console.log("Database already has data, skipping seed");
      return;
    }

    // Add a default user
    const [user] = await db
      .insert(users)
      .values({
        username: "testuser",
        password: "password123",
      })
      .returning();
    
    console.log(`Created user: ${user.username} with ID: ${user.id}`);

    // Add some sample challenges
    const challengeData = [
      {
        title: "Reduce customer wait times",
        description: "Customers are waiting too long for support responses",
        goal: "Reduce wait times by 25%",
        userId: user.id,
        createdAt: new Date(),
        completed: false
      },
      {
        title: "Improve onboarding process",
        description: "New employees are taking too long to get up to speed",
        goal: "Reduce onboarding time by 30%",
        userId: user.id,
        createdAt: new Date(),
        completed: false
      }
    ];

    const insertedChallenges = await db
      .insert(challenges)
      .values(challengeData)
      .returning();
    
    console.log(`Created ${insertedChallenges.length} challenges`);

    // Add sample satisfaction ratings
    const ratingsData = [
      {
        rating: 4,
        comments: "The process was easy to follow",
        userId: user.id,
        challengeId: insertedChallenges[0].id,
        createdAt: new Date()
      },
      {
        rating: 3,
        comments: "Could use some improvement",
        userId: user.id,
        challengeId: insertedChallenges[0].id,
        createdAt: new Date()
      },
      {
        rating: 5,
        comments: "Very intuitive",
        userId: user.id,
        challengeId: insertedChallenges[1].id,
        createdAt: new Date()
      }
    ];

    const insertedRatings = await db
      .insert(satisfactionRatings)
      .values(ratingsData)
      .returning();
    
    console.log(`Created ${insertedRatings.length} satisfaction ratings`);

    console.log("Database seeding completed successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

// In ES modules we don't use the require.main check
// Instead we just export the seed function
export default seed;