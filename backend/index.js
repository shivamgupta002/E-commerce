import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

// ---------------- DataBase Connection ---------------------------
connectDB();

app.use(express.json());
app.use(cors());

// ---------------- Routes ---------------------------
// app.use()

app.listen(PORT, () => {
  console.log(`App Listening on ${PORT}`);
});
