import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";
import { EquiposUsuarios } from "../interfaces/equipos_usuarios.interface";

export class EquiposUsuariosModel extends Model<EquiposUsuarios> {}

EquiposUsuariosModel.init(
  {
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "usuarios",
        key: "id",
      },
    },
    equipoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "equipos",
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "equipos_usuarios",
    timestamps: false,
    underscored: true,
  }
);
