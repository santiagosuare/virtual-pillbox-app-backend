const express = require("express");
const medicineRouter = express.Router();

const { CreateTable } = require("../controllers/medicine.controller");

medicineRouter.get("/create", CreateTable);

module.exports = medicineRouter;
