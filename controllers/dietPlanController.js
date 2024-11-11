const DietPlan = require("../models/DietPlan");

// Controller to handle saving diet plan
const saveDietPlan = async (req, res) => {
  const {
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
    responsetwo
  } = req.body;

  try {
    const newDietPlan = new DietPlan({
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
    res.status(201).json({ message: "Diet Plan saved successfully into database" });
    console.log("Diet plan saved successfully into database");
  } catch (error) {
    console.error("Error saving diet plan into database:", error);
    res.status(500).json({ message: "Failed to save diet plan into database" });
    console.log("Failed to save diet plan into database");
  }
};

module.exports = {
  saveDietPlan,
};
