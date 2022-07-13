import mongoose from "mongoose";
import log4js from "../logs/logs.js";
import "dotenv/config";

const url = process.env.DB_URL;

const connectDB = async () => {
  await new Promise((resolve, reject) => {
    try {
      mongoose.connect(
        url,
        {},
        () => { 
          log4js.info("Connected to MongoDB");
          resolve();
        }
      );
    } catch (error) {
      log4js.error(`MongoDB connection error: ${error}`);
      reject();
    }
  });
}

export default connectDB;
