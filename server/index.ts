import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.ts";

dotenv.config();
connectDB();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
