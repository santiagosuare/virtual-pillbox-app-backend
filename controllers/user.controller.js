const Daos = require("../daos/mainMongo");
const User = new Daos.userDaos();
const log4js = require("../logs/logs");

module.exports = {
  // READ All User
  readAllUsers: async (req, res) => {
    try {
      const users = await User.readAllUsers();
      log4js.info(`Users: ${JSON.stringify(users)}`);
      res.status(200).send({
        status: 200,
        message: "Successfully read all users",
        data: users,
      });
    } catch (error) {
      log4js.error(`UserController: readAllUsers: ${error}`);
      res.status(500).send({
        status: 500,
        message: "Error reading all users",
        data: error,
      });
    }
  },

  // CREATE User
  createUser: async (req, res) => {
    try {
      const newUser = await User.createUser(req.body);
      log4js.info(`User Create: ${JSON.stringify(newUser)}`);
      res.status(201).send({
        status: 201,
        message: "Successfully created user",
        data: newUser,
      });
    } catch (error) {
      log4js.error(`UserController: createUser: ${error}`);
      res.status(500).send({
        status: 500,
        message: "Error creating user",
        data: error,
      });
    }
  },

  // READ User by ID
  readUserById: async (req, res) => {
    try {
      log4js.info(req.params.id);
      const user = await User.readUserById(req.params.id);
      log4js.info(`User: ${JSON.stringify(user)}`);
      res.status(200).send({
        status: 200,
        message: "Successfully read user",
        data: user,
      });
    } catch (error) {
      log4js.error(`UserController: readUserById: ${error}`);
      res.status(500).send({
        status: 500,
        message: "Error reading user",
        data: error,
      });
    }
  },

  // DELETE User by ID
  deleteUser: async (req, res) => {
    try {
      const user = await User.deleteUser(req.params.id);
      log4js.warn(`User Delete: ${JSON.stringify(user)}`);
      res.status(200).send({
        status: 200,
        message: "Successfully deleted user",
        data: user,
      });
    } catch (error) {
      log4js.error(`UserController: deleteUser: ${error}`);
      res.status(500).send({
        status: 500,
        message: "Error deleting user",
        data: error,
      });
    }
  },

  // UPDATE User by ID
  updateUser: async (req, res) => {
    try {
      const user = await User.updateUser(req.params.id, req.body);
      log4js.info(`User Update: ${JSON.stringify(user)}`);
      res.status(200).send({
        status: 200,
        message: "Successfully updated user",
        data: user,
      });
    } catch (error) {
      log4js.error(`UserController: updateUser: ${error}`);
      res.status(500).send({
        status: 500,
        message: "Error updating user",
        data: error,
      });
    }
  },
};
