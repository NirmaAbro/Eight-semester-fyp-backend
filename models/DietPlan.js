const mongoose = require("mongoose");

// Define the Diet Plan schema
const dietPlanSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  weight: { type: Number, required: true },
  height: { type: String, required: true },
  activityLevel: { type: String, required: true },
  dietaryPreference: { type: String, required: true },
  goal: { type: String, required: true },
  illness: { type: Boolean, required: true },
  // planDetails: { type: String, required: true },
  responseone:{ type: String, required: true },
  responsetwo : { type: String, required: true },  //  for second response example 
});

// Create the Diet Plan model
const DietPlan = mongoose.model("DietPlan", dietPlanSchema);

module.exports = DietPlan;
