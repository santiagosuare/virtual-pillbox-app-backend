const express = require("express");
const loginRouter = express.Router();
const Daos = require("../daos/mainMongo");
const User = new Daos.userDaos();

const { generateToken } = require("../controllers/login.controller");

loginRouter.post("/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const user = await User.readUserById(req.params.id);
    console.log(user);
    if (user) {
      const token = generateToken(user);
      res.status(200).send({
        status: 200,
        message: "Successfully read user",
        data: user,
        token: token,
      });
    } else {
      res.status(404).send({
        status: 404,
        message: "User not found",
      });
    }
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: "Error reading user",
      data: error,
    });
  }
});

module.exports = loginRouter;
