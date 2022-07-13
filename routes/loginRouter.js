import { Router } from "express";
const loginRouter = Router();
import { userDaos } from "../daos/mainMongo.js";
const User = new userDaos();

import { generateToken } from "../controllers/login.controller.js";

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

export default loginRouter;
