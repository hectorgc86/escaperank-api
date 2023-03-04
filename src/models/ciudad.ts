import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";
import { Ciudad } from "../interfaces/ciudad.interface";
import { CompanyiaModel } from "./companyia";
import { ProvinciaModel } from "./provincia";

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
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "id" }],
      },
      {
        name: "fk_ciudades_provincias",
        using: "BTREE",
        fields: [{ name: "provincia_id" }],
      },
    ],
  }
);

CiudadModel.hasMany(CompanyiaModel, {
  as: "companyias",
  foreignKey: "ciudad_id",
});

// CiudadModel.belongsTo(ProvinciaModel, {
//   as: "ciudades",
//   foreignKey: "provincia_id",
// });
