import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";
import { Perfil } from "../interfaces/perfil.interface";

export class PerfilModel extends Model<Perfil> {}

PerfilModel.init(
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
    nacido: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    telefono: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    avatar: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    numeroPartidas: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    partidasGanadas: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    partidasPerdidas: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "usuarios",
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "perfiles",
    timestamps: false,
    underscored: true,
  }
);
