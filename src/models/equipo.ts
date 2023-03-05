import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db";
import { Equipo } from "../interfaces/equipo.interface";
import { NoticiaModel } from "./noticia";
import { PartidaModel } from "./partida";
import { SalaModel } from "./sala";

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

// SalaModel.belongsToMany(EquipoModel, {
//   as: "equipo_id_equipos",
//   through: PartidaModel,
//   foreignKey: "sala_id",
//   otherKey: "equipo_id",
// });

NoticiaModel.belongsTo(EquipoModel, { as: "equipo", foreignKey: "equipo_id" });
EquipoModel.hasMany(NoticiaModel, { as: "noticias", foreignKey: "equipo_id" });

PartidaModel.belongsTo(EquipoModel, { as: "equipo", foreignKey: "equipo_id" });
EquipoModel.hasMany(PartidaModel, { as: "partidas", foreignKey: "equipo_id" });
