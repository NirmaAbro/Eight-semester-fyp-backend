const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
  role: { type: String, default: "user" },
  otp: { type: String, default: null },
  otpExpiresAt: { type: Date, default: null },
  createdAt: { type: Date, default: Date.now },
});


const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
