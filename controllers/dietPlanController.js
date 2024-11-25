const DietPlan = require("../models/DietPlan");

// Controller to handle saving diet plan
const saveDietPlan = async (req, res) => {
  const {
    user_id,
    name,
    age,
    gender,
    weight,
    height,
    activityLevel,
    dietaryPreference,
    goal,
    illness,
    responseone,
    responsetwo,
  } = req.body;

  try {
    const newDietPlan = new DietPlan({
      user_id,
      name,
      age,
      gender,
      weight,
      height,
      activityLevel,
      dietaryPreference,
      goal,
      illness,
      // planDetails,
      responseone,
      responsetwo,
    });

    await newDietPlan.save();
    res
      .status(201)
      .json({ message: "Diet Plan saved successfully into database" });
    console.log("Diet plan saved successfully into database");
  } catch (error) {
    console.error("Error saving diet plan into database:", error);
    res.status(500).json({ message: "Failed to save diet plan into database" });
    console.log("Failed to save diet plan into database");
  }
};

// 1. Get all diet plans
const getAllDietPlans = async (req, res) => {
  try {
    const dietPlans = await DietPlan.find();
    res.status(200).json(dietPlans);
  } catch (error) {
    console.error("Error retrieving all diet plans:", error);
    res.status(500).json({ message: "Failed to retrieve diet plans" });
  }
};

// 2. Get a diet plan by ID
const getDietPlanById = async (req, res) => {
  const { id } = req.params;
  try {
    const dietPlan = await DietPlan.findById(id);
    if (!dietPlan) {
      return res.status(404).json({ message: "Diet Plan not found" });
    }
    res.status(200).json(dietPlan);
  } catch (error) {
    console.error("Error retrieving diet plan by ID:", error);
    res.status(500).json({ message: "Failed to retrieve diet plan by ID" });
  }
};

// 3. Update a diet plan by ID
const updateDietPlan = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedDietPlan = await DietPlan.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updatedDietPlan) {
      return res.status(404).json({ message: "Diet Plan not found" });
    }
    res.status(200).json({
      message: "Diet Plan updated successfully",
      data: updatedDietPlan,
    });
  } catch (error) {
    console.error("Error updating diet plan:", error);
    res.status(500).json({ message: "Failed to update diet plan" });
  }
};

// 4. Delete a diet plan by ID
const deleteDietPlan = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedDietPlan = await DietPlan.findByIdAndDelete(id);
    if (!deletedDietPlan) {
      return res.status(404).json({ message: "Diet Plan not found" });
    }
    res.status(200).json({ message: "Diet Plan deleted successfully" });
  } catch (error) {
    console.error("Error deleting diet plan:", error);
    res.status(500).json({ message: "Failed to delete diet plan" });
  }
};
const getDietPlansByUserId = async (req, res) => {
  const { user_id } = req.params;

  try {
    const dietPlans = await DietPlan.find({ user_id });
    if (!dietPlans || dietPlans.length === 0) {
      return res.status(404).json({ message: "No diet plans found for this user" });
    }
    res.status(200).json(dietPlans);
  } catch (error) {
    console.error("Error retrieving diet plans by user_id:", error);
    res.status(500).json({ message: "Failed to retrieve diet plans by user_id" });
  }
};

module.exports = {
  saveDietPlan,
  getAllDietPlans,
  getDietPlanById,
  updateDietPlan,
  deleteDietPlan,
  getDietPlansByUserId,
};
