


// // import UserProfile from "../models/UserProfile.js";
// const UserProfile = require("../models/UserProfileSchema");

// // Save user profile to database
// const saveUserProfile = async (req, res) => {
//   try {
//     const { name, age, gender, weight, height, activityLevel, dietaryPreference, goal, illness, planDetails } = req.body;

//     // Create new user profile
//     const newUserProfile = new UserProfile({
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

//     // Save the new user profile to the database
//     await newUserProfile.save();
//     res.status(201).json({ message: "User profile saved successfully", userProfile: newUserProfile });
//   } catch (error) {
//     res.status(400).json({ message: "Error saving user profile", error });
//   }
// };

// // Get user profile by ID
// const getUserProfileById = async (req, res) => {
//   try {
//     const userProfile = await UserProfile.findById(req.params.id);
//     if (!userProfile) {
//       return res.status(404).json({ message: "User profile not found" });
//     }
//     res.status(200).json({ userProfile });
//   } catch (error) {
//     res.status(400).json({ message: "Error fetching user profile", error });
//   }
// };

// // Export the functions
// module.exports = {
//   saveUserProfile,
//   getUserProfileById
// };


const UserProfile = require("../models/UserProfileSchema");

// Save user profile to database
const saveUserProfile = async (req, res) => {
  try {
    const { name, age, gender, weight, height, activityLevel, dietaryPreference, goal, illness, planDetails } = req.body;

    const newUserProfile = new UserProfile({
      name,
      age,
      gender,
      weight,
      height,
      activityLevel,
      dietaryPreference,
      goal,
      illness,
      planDetails,
    });

    await newUserProfile.save();
    res.status(201).json({ message: "User profile saved successfully", userProfile: newUserProfile });
  } catch (error) {
    res.status(400).json({ message: "Error saving user profile", error });
  }
};

const getUserProfileById = async (req, res) => {
  try {
    const userProfile = await UserProfile.findById(req.params.id);
    if (!userProfile) {
      return res.status(404).json({ message: "User profile not found" });
    }
    res.status(200).json({ userProfile });
  } catch (error) {
    res.status(400).json({ message: "Error fetching user profile", error });
  }
};

module.exports = {
  saveUserProfile,
  getUserProfileById
};

