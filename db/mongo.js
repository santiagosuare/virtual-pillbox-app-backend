const connect = require("mongoose").connect;
const log4js = require("../logs/logs");
require("dotenv").config();

const url = process.env.DB_URL;

async function connectDB() {
  try {
    const client = await connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    log4js.info(`MongoDB connected: ${client.connection.host}`);
  } catch (error) {
    log4js.error(`MongoDB connection config error: ${error}`);
  }
}

module.exports = connectDB;
