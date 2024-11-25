const express = require("express");
const cors = require("cors");
const AuthRouter = require("./routes/AuthRouter");
const dietPlanRoutes = require("./routes/dietPlanRoutes");
const { connectMongoDB } = require("./config/connection");
const userDataRoutes = require("./routes/userData");
require("dotenv").config();

const app = express();

// MongoDB connection
connectMongoDB("mongodb://127.0.0.1:27017/FYP");

const PORT = process.env.PORT || 8080;

app.get("/ping", (req, res) => {
  res.send("PONG");
});

app.use(express.json()); // Ensures that your Express app can parse incoming JSON data.
app.use(cors()); // Allows cross-origin requests

// Logging middleware
app.use((req, res, next) => {
  if (process.env.NODE_ENV !== "production") {
    console.log(`Received request: ${req.method} ${req.url}`);
  }
  next();
});

// Use the Auth, diet plan, and user profile routes
app.use("/auth", AuthRouter);
app.use("/api", dietPlanRoutes);
app.use("/api", userDataRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
