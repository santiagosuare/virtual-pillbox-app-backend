const { sequelize } = require("../db/mysqlDB");
const { DataTypes } = require("sequelize");

const Rutine = sequelize.define(
  "rutina",
  {
    Id_Rutina: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Id_Usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "usuario",
        key: "Id_Usuario",
      },
    },
    Id_Medicamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "medicamento",
        key: "Id_Medicamento",
      },
    },
    Fecha_Inicio: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Fecha_Fin: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Horario_Consumo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
    tableName: "rutina",
  }
);

module.exports = Rutine;
