import { Router } from "express";
const medicineRouter = Router();

import { readAllMedicines, createMedicine } from "../controllers/medicine.controller.js";

medicineRouter.get("/", readAllMedicines);
medicineRouter.post("/", createMedicine);

export default medicineRouter;
