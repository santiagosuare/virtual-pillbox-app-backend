const { sequelize } = require("../db/mysqlDB");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "usuario",
  {
    DNI: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Fecha_Nacimiento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Obra_Social: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Id_Rutina: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

// User.hasOne(Obra_Social, { foreignKey: "Id_Obra_Social" });

// User.hasOne(Rutina, { foreignKey: "Id_Rutina" });

module.exports = User;
