import { Router } from "express";
const userRouter = Router();

// Require User model in our routes module
import { readAllUsers, createUser, readUserById, deleteUser, updateUser } from "../controllers/user.controller.js";

//APIS
userRouter.get("/", readAllUsers);
userRouter.get("/:id", readUserById);
userRouter.post("/", createUser);
userRouter.delete("/:id", deleteUser);
userRouter.put("/:id", updateUser);

export default userRouter;
