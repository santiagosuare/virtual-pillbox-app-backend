const { sequelize } = require("../db/mysqlDB");
const { DataTypes } = require("sequelize");

const MedicalInsurance = sequelize.define(
  "obra_social",
  {
    Id_Obra_Social: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Id_Usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "usuario",
        key: "Id_Usuario",
      },
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Plan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Numero_Afiliado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
    tableName: "obra_social",
  }
);

module.exports = MedicalInsurance;
