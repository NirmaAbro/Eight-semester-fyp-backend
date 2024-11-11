// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

// const UserProfileSchema = new Schema({
//   name: String,
//   age: Number,
//   gender: String,
//   weight: Number,
//   height: String,
//   activityLevel: String,
//   dietaryPreference: String,
//   goal: String,
//   illness: Boolean,
//   planDetails: Object, // Stores diet plan details
// });

// const UserProfile = mongoose.model("UserProfileData", UserProfileSchema);

// // Export the model using CommonJS syntax
// module.exports = UserProfile;



const mongoose = require("mongoose");

const UserProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
  activityLevel: { type: String, required: true },
  dietaryPreference: { type: String, required: true },
  goal: { type: String, required: true },
  illness: { type: Boolean, required: true },
  planDetails: { type: Object, required: true },
});

module.exports = mongoose.model("UserProfile", UserProfileSchema);

