import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.ts";

import organizationRoutes from "./src/routes/organization.routes.ts"
import accountRoutes from "./src/routes/account.routes.ts"
import dealRoutes from "./src/routes/deal.routes.ts"

dotenv.config();
connectDB();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/organizations", organizationRoutes);
app.use("/api/accounts", accountRoutes);
app.use("/api/deals", dealRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
