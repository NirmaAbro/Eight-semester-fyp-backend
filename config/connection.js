const mongoose = require("mongoose");

const connectMongoDB = async (url) => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Mongoose error:", error);
  }
};

module.exports = { connectMongoDB };
