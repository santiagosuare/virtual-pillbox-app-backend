const { sequelize } = require("../db/mysqlDB");
const { DataTypes } = require("sequelize");

const Medicine = sequelize.define(
  "medicamento",
  {
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Monodroga: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Laboratorio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Dosis: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Unidad_Medida: {
      type: DataTypes.ENUM,
      values: ["ml", "gr", "mg", "mcg", "U"],
      allowNull: false,
    },
    Foto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Presentacion: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Comentario: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

// User.hasOne(Obra_Social, { foreignKey: "Id_Obra_Social" });

// User.hasOne(Rutina, { foreignKey: "Id_Rutina" });

module.exports = Medicine;
