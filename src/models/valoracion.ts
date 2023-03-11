import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db";
import { Valoracion } from "../interfaces/valoracion.interface";
import { SalaModel } from "./sala";

export class ValoracionModel extends Model<Valoracion> {}

ValoracionModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    estrellas: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    comentario: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    salaId: {
      type: DataTypes.STRING(500),
      allowNull: false,
      references: {
        model: "salas",
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "valoraciones",
    timestamps: false,
    underscored: true,
  }
);
