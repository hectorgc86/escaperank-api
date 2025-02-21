import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";
import { Dificultad } from "../interfaces/dificultad.interface";
import { SalaModel } from "./sala";

export class DificultadModel extends Model<Dificultad> {}

DificultadModel.init(
  {
    id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
    },
    tipo: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    icono: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    colorIcono: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    numeroSalas: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "dificultades",
    timestamps: false,
    underscored: true,
  }
);

SalaModel.belongsTo(DificultadModel, {
  as: "dificultad",
  foreignKey: "dificultadId",
});
DificultadModel.hasMany(SalaModel, {
  as: "salas",
  foreignKey: "dificultadId",
});
