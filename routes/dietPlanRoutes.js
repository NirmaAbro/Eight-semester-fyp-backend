const express = require("express");
const { saveDietPlan } = require("../controllers/dietPlanController");

const router = express.Router();

// API route to store diet plans
router.post("/diet-plans", saveDietPlan);

module.exports = router;

