const express = require("express");
const {
  saveDietPlan,
  deleteDietPlan,
  getAllDietPlans,
  getDietPlanById,
  updateDietPlan, getDietPlansByUserId

} = require("../controllers/dietPlanController");

const router = express.Router();

router.post("/dietplans", saveDietPlan);

router.get("/dietplans", getAllDietPlans);

router.get("/dietplans/user/:user_id", getDietPlansByUserId);
// Route to get a diet plan by ID
router.get("/dietplans/:id", getDietPlanById);

// Route to update a diet plan by ID
router.put("/dietplans/:id", updateDietPlan);

// Route to delete a diet plan by ID
router.delete("/dietplans/:id", deleteDietPlan);

module.exports = router;
