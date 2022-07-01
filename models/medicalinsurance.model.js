const mongoose = require("mongoose");

const medicalInsuranceModel = new mongoose.Schema({
  Nombre: {
    type: String,
    required: true,
    max: 100,
  },
  Plan: {
    type: String,
    required: true,
    max: 100,
  },
  Numero_Afiliado: {
    type: String,
    required: true,
    max: 100,
  },
});

module.exports = mongoose.model("medicalinsurance", medicalInsuranceModel);
