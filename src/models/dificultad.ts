import { DataTypes, Model, Optional } from "sequelize";
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

SalaModel.belongsTo(DificultadModel, {
  as: "dificultad",
  foreignKey: "dificultad_id",
});
DificultadModel.hasMany(SalaModel, {
  as: "salas",
  foreignKey: "dificultad_id",
});
