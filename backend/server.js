import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware

app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());

// Test route

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to HamroBazar API",
  });
});

// Health check

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend is working properly",
  });
});

// Server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`HamroBazar server running on port ${PORT}`);
});