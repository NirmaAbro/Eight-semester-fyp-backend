const DietPlan = require("../models/DietPlan");

const getUserDietPlan = async (req, res) => {
  const { user_id } = req.params;

  try {
    const userDietPlan = await DietPlan.find({ user_id })
      .populate("user_id") // Populate user data
      .exec();

    if (!userDietPlan) {
      return res.status(404).json({ message: "User or diet plan not found." });
    }

    res.status(200).json(userDietPlan);
  } catch (error) {
    console.error("Error fetching user diet plan:", error);
    res.status(500).json({ message: "Failed to fetch user diet plan." });
  }
};

module.exports = {
  getUserDietPlan,
};
