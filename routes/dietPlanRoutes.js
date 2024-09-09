// const express = require("express");
// const DietPlan = require("../models/DietPlan"); // Import the model

// const router = express.Router();

// // API route to store diet plans
// router.post("/diet-plans", async (req, res) => {
//   const {
//     name,
//     age,
//     gender,
//     weight,
//     height,
//     activityLevel,
//     dietaryPreference,
//     goal,
//     illness,
//     planDetails,
//   } = req.body;

//   try {
//     const newDietPlan = new DietPlan({
//       name,
//       age,
//       gender,
//       weight,
//       height,
//       activityLevel,
//       dietaryPreference,
//       goal,
//       illness,
//       planDetails,
//     });

//     await newDietPlan.save();
//     res.status(201).json({ message: "Diet Plan saved successfully" });
//   } catch (error) {
//     console.error("Error saving diet plan:", error);
//     res.status(500).json({ message: "Failed to save diet plan" });
//   }
// });

// module.exports = router;



const express = require("express");
const { saveDietPlan } = require("../controllers/dietPlanController");

const router = express.Router();

// API route to store diet plans
router.post("/diet-plans", saveDietPlan);

module.exports = router;

