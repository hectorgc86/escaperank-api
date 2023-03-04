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

// CategoriaModel.belongsToMany(SalaModel, {
//   as: "salas",
//   through: SalasCategoriasModel,
//   foreignKey: "categoria_id",
//   otherKey: "sala_id",
// });

CategoriaModel.hasMany(SalasCategoriasModel, {
  as: "salas_categorias",
  foreignKey: "categoria_id",
});
