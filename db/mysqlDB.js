const { Sequelize } = require("sequelize");
const log4js = require("../logs/logs");
require("dotenv").config();

const config = {
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
  },
};

const sequelize = new Sequelize(
  config.connection.database,
  config.connection.user,
  config.connection.password,
  {
    host: config.connection.host,
    dialect: config.client,
  }
);

// Testing Connection
sequelize
  .authenticate()
  .then(() => {
    log4js.info("Connection to the DB has been established successfully.");
  })
  .catch((err) => {
    log4js.error("Unable to connect to the database:", err);
  });

module.exports = { sequelize };
