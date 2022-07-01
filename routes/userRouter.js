const express = require("express");
const userRouter = express.Router();

// Require User model in our routes module
const {
  readAllUsers,
  createUser,
  readUserById,
  deleteUser,
  updateUser,
} = require("../controllers/user.controller");

//APIS
userRouter.get("/", readAllUsers);
userRouter.get("/:id", readUserById);
userRouter.post("/", createUser);
userRouter.delete("/:id", deleteUser);
userRouter.put("/:id", updateUser);

module.exports = userRouter;
