const express = require("express");
const medicalInsuranceRouter = express.Router();

const {
  readAllMedicalInsurances,
  createMedicalInsurance,
} = require("../controllers/medicalinsurance.controller");

medicalInsuranceRouter.get("/", readAllMedicalInsurances);
medicalInsuranceRouter.post("/", createMedicalInsurance);

module.exports = medicalInsuranceRouter;
