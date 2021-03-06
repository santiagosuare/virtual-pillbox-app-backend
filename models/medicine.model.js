import mongoose from "mongoose";
const { Schema, model } = mongoose;

const medicineModel = new Schema({
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

export default model("medicine", medicineModel);
