import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db";
import { Provincia } from "../interfaces/provincia.interface";
import { CiudadModel } from "./ciudad";

export class ProvinciaModel extends Model<Provincia> {}

ProvinciaModel.init(
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
    latitud: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    longitud: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "provincias",
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

CiudadModel.belongsTo(ProvinciaModel, {
  as: "ciudades",
  foreignKey: "provincia_id",
});
ProvinciaModel.hasMany(CiudadModel, {
  as: "ciudades",
  foreignKey: "provincia_id",
});
