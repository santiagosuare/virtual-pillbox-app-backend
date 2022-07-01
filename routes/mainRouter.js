const express = require("express");
const router = express.Router();

//ROUTER
let user = require("./userRouter.js");
let medicalinsurance = require("./medicalinsuranceRouter.js");
let medicine = require("./medicineRouter");
let login = require("./loginRouter");

//ROUTES
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

router.use("/login", login);
router.use("/user", user);
router.use("/medicalinsurance", medicalinsurance);
router.use("/medicine", medicine);

module.exports = router;
