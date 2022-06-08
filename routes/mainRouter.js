const express = require("express");
const router = express.Router();

//ROUTER
let user = require("./userRouter.js");
let medicine = require("./medicineRouter");

//ROUTES
router.use("/user", user);
router.use("/medicine", medicine);

module.exports = router;
