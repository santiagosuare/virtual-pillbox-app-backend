import mongoose from "mongoose";
const { Schema, model } = mongoose;

const medicalInsuranceModel = new Schema({
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

export default model("medicalinsurance", medicalInsuranceModel);
