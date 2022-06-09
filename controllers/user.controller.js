const log4js = require("../logs/logs");
const UserModel = require("../models/user.model");

module.exports = {
  // READ All User
  readAllUsers: async (req, res) => {
    try {
      const data = await UserModel.findAll({});
      if (data.length > 0) {
        log4js.info(`UserController: readAllUsers: ${data}`);
        res.status(200).json(data);
      } else {
        log4js.warn(`UserController: readAllUsers: No data found`);
        res.status(404).json({ message: "No data found" });
      }
    } catch (error) {
      log4js.error(`UserController: readAllUsers: ${error}`);
      res.send(error);
    }
  },

  // READ User by ID
  readUser: async (req, res) => {
    const id = req.params.id;
    const user = await UserModel.findByPk(id);
    if (user) {
      log4js.info(`UserController: readUser: ${user}`);
      res.status(200).json(user);
    } else {
      log4js.warn(`UserController: readUser: No data found`);
      res.status(404).json({ message: "No data found" });
    }
  },
};
