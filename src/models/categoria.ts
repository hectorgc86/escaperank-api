import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";
import { Categoria } from "../interfaces/categoria.interface";
import { SalaModel } from "./sala";
import { SalasCategoriasModel } from "./salas_categorias";

export class CategoriaModel extends Model<Categoria> {}

CategoriaModel.init(
  {
    id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
    },
    tipo: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    icono: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    colorIcono: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    numeroSalas: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "categorias",
    timestamps: false,
    underscored: true,
  }
);

CategoriaModel.belongsToMany(SalaModel, {
  as: "salas_categorias",
  through: SalasCategoriasModel,
  foreignKey: "categoriaId",
  otherKey: "salaId",
});
