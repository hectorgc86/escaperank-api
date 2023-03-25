import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";
import { Ciudad } from "../interfaces/ciudad.interface";
import { CompanyiaModel } from "./companyia";

export class CiudadModel extends Model<Ciudad> {}

CiudadModel.init(
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
    ciudadOrigen: {
      type: DataTypes.STRING(45),
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
    provinciaId: {
      type: DataTypes.STRING(50),
      allowNull: true,
      references: {
        model: "provincias",
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "ciudades",
    timestamps: false,
    underscored: true,
  }
);

CompanyiaModel.belongsTo(CiudadModel, {
  as: "ciudad",
  foreignKey: "ciudadId",
});

CiudadModel.hasMany(CompanyiaModel, {
  as: "companyias",
  foreignKey: "ciudadId",
});
