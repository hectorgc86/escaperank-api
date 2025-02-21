import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db";
import { Publico } from "../interfaces/publico.interface";
import { SalaModel } from "./sala";
import { SalasPublico } from "../interfaces/salas_publico.interface";
import { SalasPublicoModel } from "./salas_publico";

export class PublicoModel extends Model<Publico> {}

PublicoModel.init(
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
    tableName: "publico",
    timestamps: false,
    underscored: true,
  }
);

SalasPublicoModel.belongsTo(PublicoModel, {
  as: "publico",
  foreignKey: "publicoId",
});
PublicoModel.hasMany(SalasPublicoModel, {
  as: "salas_publicos",
  foreignKey: "publicoId",
});
