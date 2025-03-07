import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import stockRoutes from "./routes/stockRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect Database
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/stocks", stockRoutes);

const PORT = process.env.PORT || 5000;
app.get('/api/test', (req, res) => {
    res.json({ message: "API is working!" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
