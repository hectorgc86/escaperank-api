import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";
import { Companyia } from "../interfaces/companyia.interface";
import { CiudadModel } from "./ciudad";
import { NoticiaModel } from "./noticia";
import { SalaModel } from "./sala";

export class CompanyiaModel extends Model<Companyia> {}

CompanyiaModel.init(
  {
    id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    direccion: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    telefono: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    web: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    tripAdvisor: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    facebook: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    latitud: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    longitud: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    numeroLocal: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    googleMaps: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    numeroOpiniones: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    codigoPostal: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    instagram: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    puntuacion: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    rango: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    ciudadId: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: "ciudades",
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "companyias",
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "id" }],
      },
      {
        name: "fk_companyias_ciudades",
        using: "BTREE",
        fields: [{ name: "ciudad_id" }],
      },
    ],
  }
);

NoticiaModel.belongsTo(CompanyiaModel, {
  as: "companyia",
  foreignKey: "companyiaId",
});
CompanyiaModel.hasMany(NoticiaModel, {
  as: "noticias",
  foreignKey: "companyiaId",
});
SalaModel.belongsTo(CompanyiaModel, {
  as: "companyia",
  foreignKey: "companyiaId",
});
CompanyiaModel.hasMany(SalaModel, { as: "salas", foreignKey: "companyiaId" });
