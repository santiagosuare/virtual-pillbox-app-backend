import { Router } from "express";
const medicalInsuranceRouter = Router();

import { readAllMedicalInsurances, createMedicalInsurance } from "../controllers/medicalinsurance.controller.js";

medicalInsuranceRouter.get("/", readAllMedicalInsurances);
medicalInsuranceRouter.post("/", createMedicalInsurance);

export default medicalInsuranceRouter;
