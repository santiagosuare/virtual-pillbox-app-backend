const express = require("express");
const loginRouter = express.Router();
const Daos = require("../daos/mainMongo");
const User = new Daos.userDaos();
const log4js = require("../logs/logs");

const { generateToken } = require("../controllers/login.controller");

loginRouter.post("/", async (req, res) => {
  try {
    const { Usuario, Password } = req.body;

    console.log(Usuario);
    console.log(Password);

    const user = await User.getUserByUsername(Usuario);

    if (user) {
      const token = generateToken(user);
      log4js.info(user, token);
      res.status(200).send({
        status: 200,
        message: "Successfully read user",
        data: user,
        token: token,
      });
    } else {
      log4js.error("No user login");
      res.status(404).send({
        status: 404,
        message: "User not found",
      });
    }
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: "Internal server error",
    });
  }
});

// loginRouter.post("/", async (req, res) => {
//   const { Usuario } = req.body;
//   const user = await User.getUserByUsername(Usuario);
//   try {
//     const token = generateToken(Usuario);
//     res.status(200).json({
//       data: user,
//       token: token,
//     });
//   } catch (error) {
//     res.status(500).json({
//       error,
//     });
//   }
// });

module.exports = loginRouter;
