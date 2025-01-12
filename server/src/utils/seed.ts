import mongoose from "mongoose";
import Organization from "../models/organization.model.ts";
import Account from "../models/account.model.ts";
import Deal from "../models/deal.model.ts";
import connectDB from "../config/db.ts";
import dotenv from "dotenv";

dotenv.config();

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    connectDB();
    console.log("Connected to MongoDB");

    // Clear existing data
    await Organization.deleteMany({});
    await Account.deleteMany({});
    await Deal.deleteMany({});
    console.log("Database cleared");

    // Create Organizations
    const organizations = await Organization.insertMany([
      { name: "Organization Alpha" },
      { name: "Organization Beta" },
      { name: "Organization Gamma" },
    ]);
    console.log("Organizations seeded:", organizations);

    // Create Accounts
    const accounts = await Account.insertMany([
      // Organization Alpha
      { name: "Amazon", organization: organizations[0]._id },
      { name: "Nike", organization: organizations[0]._id },
      { name: "Apple", organization: organizations[0]._id },

      // Organization Beta
      { name: "Tesla", organization: organizations[1]._id },
      { name: "SpaceX", organization: organizations[1]._id },
      { name: "Ford", organization: organizations[1]._id },

      // Organization Gamma
      { name: "Microsoft", organization: organizations[2]._id },
      { name: "Google", organization: organizations[2]._id },
      { name: "Netflix", organization: organizations[2]._id },
    ]);
    console.log("Accounts seeded:", accounts);

    // Helper function to get account IDs
    const getAccountId = (name: string) =>
      accounts.find((acc) => acc.name === name)?._id;

    // Create Deals
    const deals = await Deal.insertMany([
      // Deals for Amazon
      {
        startDate: new Date("2023-01-01"),
        endDate: new Date("2023-12-31"),
        value: 5000,
        status: "Build Proposal",
        account: getAccountId("Amazon"),
      },
      {
        startDate: new Date("2024-01-01"),
        endDate: new Date("2024-12-31"),
        value: 20000,
        status: "Pitch Proposal",
        account: getAccountId("Amazon"),
      },

      // Deals for Nike
      {
        startDate: new Date("2023-06-01"),
        endDate: new Date("2023-12-31"),
        value: 10000,
        status: "Negotiation",
        account: getAccountId("Nike"),
      },
      {
        startDate: new Date("2025-01-01"),
        endDate: new Date("2025-12-31"),
        value: 15000,
        status: "Active",
        account: getAccountId("Nike"),
      },

      // Deals for Apple
      {
        startDate: new Date("2023-05-01"),
        endDate: new Date("2023-10-31"),
        value: 12000,
        status: "Completed",
        account: getAccountId("Apple"),
      },

      // Deals for Tesla
      {
        startDate: new Date("2023-03-01"),
        endDate: new Date("2024-03-01"),
        value: 50000,
        status: "Active",
        account: getAccountId("Tesla"),
      },
      {
        startDate: new Date("2024-06-01"),
        endDate: new Date("2025-06-01"),
        value: 30000,
        status: "Pending",
        account: getAccountId("Tesla"),
      },

      // Deals for SpaceX
      {
        startDate: new Date("2024-02-01"),
        endDate: new Date("2024-12-31"),
        value: 60000,
        status: "Negotiation",
        account: getAccountId("SpaceX"),
      },

      // Deals for Ford
      {
        startDate: new Date("2023-01-01"),
        endDate: new Date("2023-06-01"),
        value: 25000,
        status: "Pitch Proposal",
        account: getAccountId("Ford"),
      },

      // Deals for Microsoft
      {
        startDate: new Date("2023-08-01"),
        endDate: new Date("2024-08-01"),
        value: 80000,
        status: "Build Proposal",
        account: getAccountId("Microsoft"),
      },

      // Deals for Google
      {
        startDate: new Date("2024-03-01"),
        endDate: new Date("2024-12-31"),
        value: 40000,
        status: "Active",
        account: getAccountId("Google"),
      },

      // Deals for Netflix
      {
        startDate: new Date("2024-07-01"),
        endDate: new Date("2025-07-01"),
        value: 70000,
        status: "Pending",
        account: getAccountId("Netflix"),
      },
    ]);
    console.log("Deals seeded:", deals);

    // Close the database connection
    mongoose.connection.close();
    console.log("Database connection closed");
  } catch (error) {
    console.error("Error seeding the database:", error);
    mongoose.connection.close();
  }
};

seedDatabase();
