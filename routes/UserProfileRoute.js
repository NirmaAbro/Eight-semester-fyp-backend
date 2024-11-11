// const express = require("express");
// const { saveUserProfile, getUserProfileById } = require("../controllers/UserProfiledatasaveController");

// const router = express.Router();

// // Route to save user profile
// router.post("/", saveUserProfile);

// // Route to fetch user profile by ID
// router.get("/:id", getUserProfileById);

// module.exports = router;

const express = require("express");
const {
  saveUserProfile,
  getUserProfileById,
} = require("../controllers/UserProfiledatasaveController");

const router = express.Router();

// Route to save user profile
router.post("/", saveUserProfile);

// Route to fetch user profile by ID
router.get("/:id", getUserProfileById);

module.exports = router;
