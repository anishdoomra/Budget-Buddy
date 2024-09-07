const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://anishdoomra12124:SGEKgNxPQy6dqF3C@cluster0.lasivic.mongodb.net/');

    console.log(`Server running on ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDB;
