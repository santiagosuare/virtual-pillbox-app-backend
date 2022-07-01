const mongoose = require("mongoose");

const medicineModel = new mongoose.Schema({
  Nombre: {
    type: String,
    required: true,
    max: 100,
  },
  Monodroga: {
    type: String,
    required: true,
    max: 100,
  },
  Id_Laboratorio: {
    type: String,
    required: true,
    max: 100,
  },
  Dosis: {
    type: String,
    required: true,
    max: 100,
  },
  Unidad_Medida: {
    type: String,
    enum: ["ml", "gr", "mg", "U"],
    required: true,
  },
  foto: {
    type: String,
    required: true,
  },
  Presentacion: {
    type: String,
    required: true,
    max: 100,
  },
  Observaciones: {
    type: String,
    required: true,
    max: 100,
  },
});

module.exports = mongoose.model("medicine", medicineModel);
