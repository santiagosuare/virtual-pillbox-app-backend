const UserModel = require("../models/user.model");

module.exports = {
  // READ All User
  readAllUsers: async (req, res) => {
    const pepe = await UserModel.findAll({});
    res.send(pepe);
  },

  // READ User by ID
  readUser: async (req, res) => {
    const id = req.params.id;
    const user = await UserModel.findByPk(id);

    res.send(user ?? { error: "User not found" });
  },
};
