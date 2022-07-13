import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userModel = new Schema({
  id: {},
  DNI: {
    type: Number,
    required: true,
    max: 1000000000,
  },
  Nombre: {
    type: String,
    required: true,
    max: true,
  },
  Apellido: {
    type: String,
    required: true,
    max: 100,
  },
  Usuario: {
    type: String,
    required: true,
    max: 100,
  },
  Password: {
    type: String,
    required: true,
    max: 100,
  },
  Direccion: {
    type: String,
    required: true,
    max: 100,
  },
  Fecha_Nacimiento: {
    type: Date,
    required: true,
  },
});

export default model("user", userModel);
