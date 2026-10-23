import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dns from "node:dns";
import authRoutes from "./routes/authRoutes.js";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

dotenv.config();


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully!");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
  }
};

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);


// const app = express();
// app.use("/api/auth", authRoutes);

// app.use(cors());
// app.use(express.json());

app.get("/", (req, res) => {
  res.send("Nexora Backend is running!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


