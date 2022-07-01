const express = require("express");
const medicineRouter = express.Router();

const {
  readAllMedicines,
  createMedicine,
} = require("../controllers/medicine.controller");

medicineRouter.get("/", readAllMedicines);
medicineRouter.post("/", createMedicine);

module.exports = medicineRouter;
