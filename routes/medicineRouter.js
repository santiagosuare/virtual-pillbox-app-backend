const express = require("express");
const medicineRouter = express.Router();

const {
  CreateTable,
  readAllMedicines,
  readMedicine,
} = require("../controllers/medicine.controller");

// medicineRouter.get("/create", CreateTable);
medicineRouter.get("/", readAllMedicines);
medicineRouter.get("/:id", readMedicine);

module.exports = medicineRouter;
