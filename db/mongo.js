import mongoose from "mongoose";
import log4js from "../logs/logs.js";
import "dotenv/config";

const url = process.env.DB_URL;

async function connectDB() {
  try {
    mongoose.connect(
      url,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      e => log4js.error(`MongoDB connection config error: ${e}`)
    );
  } catch (error) {
    log4js.error(`MongoDB connection error: ${error}`);
  }
}

export default connectDB;
