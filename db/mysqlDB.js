const { Sequelize } = require("sequelize");

const config = {
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "pillbox",
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

module.exports = { sequelize };
