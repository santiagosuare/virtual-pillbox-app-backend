const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
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

module.exports = mongoose.model("user", userModel);
