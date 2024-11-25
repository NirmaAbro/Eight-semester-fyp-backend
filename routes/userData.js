const express = require("express");
const userDataRoutes = express.Router();
const { getUserDietPlan } = require("../controllers/userData");

// Route to get user and diet plans by user ID
userDataRoutes.get("/diet/:user_id", getUserDietPlan);

module.exports = userDataRoutes;
