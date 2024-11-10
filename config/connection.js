const mongoose = require("mongoose");

const connectMongoDB = async (url) => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true, //enables the new connection management engine for MongoDB, improving stability and error handling.
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Mongoose error:", error);
  }
};

module.exports = { connectMongoDB };
