const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRouter = require("./routes/AuthRouter");
const { connectMongoDB } = require("./config/connection");
require("dotenv").config();
console.log("JWT_SECRET:", process.env.JWT_SECRET); // Add this line to check if the secret is being read


const app = express();

require("dotenv").config();
// MongoDB connection
// connectMongoDB("mongodb://127.0.0.1:27017/Recipies");
connectMongoDB("mongodb://127.0.0.1:27017/FYP");
const PORT = process.env.PORT || 8080;

app.get("/ping", (req, res) => {
  res.send("PONG");
});

// app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use("/auth", AuthRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
