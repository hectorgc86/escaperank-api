import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db";
import { Tematica } from "../interfaces/tematica.interface";

export class TematicaModel extends Model<Tematica> {}

TematicaModel.init(
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
    tableName: "tematicas",
    timestamps: false,
    underscored: true,
  }
);
