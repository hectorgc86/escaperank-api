import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";
import { Equipo } from "../interfaces/equipo.interface";
import { NoticiaModel } from "./noticia";
import { PartidaModel } from "./partida";

export class EquipoModel extends Model<Equipo> {}

EquipoModel.init(
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    avatar: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    activado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    tableName: "equipos",
    timestamps: false,
    underscored: true,
  }
);

NoticiaModel.belongsTo(EquipoModel, { as: "equipo", foreignKey: "equipoId" });
EquipoModel.hasMany(NoticiaModel, { as: "noticias", foreignKey: "equipoId" });

PartidaModel.belongsTo(EquipoModel, { as: "equipo", foreignKey: "equipoId" });
EquipoModel.hasMany(PartidaModel, { as: "partidas", foreignKey: "equipoId" });
