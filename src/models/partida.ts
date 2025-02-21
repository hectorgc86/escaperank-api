import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";
import { Partida } from "../interfaces/partida.interface";

export class PartidaModel extends Model<Partida> {}

PartidaModel.init(
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    minutos: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    segundos: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    imagen: {
      type: DataTypes.STRING(2000),
      allowNull: true,
    },
    salaId: {
      type: DataTypes.STRING(500),
      allowNull: false,
      primaryKey: true,
      references: {
        model: "salas",
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
    tableName: "partidas",
    timestamps: false,
    underscored: true,
  }
);
