import * as Sequelize from "sequelize";
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";
import { Noticia } from "../interfaces/noticia.interface";

export class NoticiaModel extends Model<Noticia> {}

NoticiaModel.init(
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    titular: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    textoCorto: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    textoLargo: {
      type: DataTypes.STRING(2000),
      allowNull: true,
    },
    imagen: {
      type: DataTypes.STRING(2000),
      allowNull: true,
    },
    link: {
      type: DataTypes.STRING(400),
      allowNull: true,
    },
    promocionada: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
    },
    numeroFavoritos: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    numeroComentarios: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    companyiaId: {
      type: DataTypes.STRING(50),
      allowNull: true,
      references: {
        model: "companyias",
        key: "id",
      },
    },
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "usuarios",
        key: "id",
      },
    },
    equipoId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "equipos",
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "noticias",
    timestamps: false,
    underscored: true,
  }
);
