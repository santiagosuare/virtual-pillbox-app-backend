import express from "express";
const loginRouter = express.Router();
import * as Daos from "../daos/mainMongo";
const User = new Daos.userDaos();
import log4js from "../logs/logs";

import { generateToken } from "../controllers/login.controller.js";

loginRouter.post("/", async (req, res) => {
  try {
    const { Usuario, Password } = req.body;

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

export default loginRouter;
