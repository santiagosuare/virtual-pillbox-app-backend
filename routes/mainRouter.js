import { Router } from "express";
const router = Router();

//ROUTER
import user from "./userRouter.js";
import medicalinsurance from "./medicalinsuranceRouter.js";
import medicine from "./medicineRouter.js";
import login from "./loginRouter.js";

//ROUTES
router.use((req, res, next) => {
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

export default router;
