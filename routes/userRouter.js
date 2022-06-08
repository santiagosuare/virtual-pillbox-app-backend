const express = require("express");
const userRouter = express.Router();

// Require User model in our routes module
const { readAllUsers, readUser } = require("../controllers/user.controller");

//APIS
userRouter.get("/", readAllUsers);
userRouter.get("/:id", readUser);

module.exports = userRouter;
