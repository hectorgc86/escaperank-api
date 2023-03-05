import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db";
import { Tematica } from "../interfaces/tematica.interface";
import { SalaModel } from "./sala";
import { SalasTematicasModel } from "./salas_tematicas";

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
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "id" }],
      },
    ],
  }
);

TematicaModel.hasMany(SalasTematicasModel, {
  as: "salas_tematicas",
  foreignKey: "tematica_id",
});
