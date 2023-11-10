import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`App Listening on ${PORT}`);
});
