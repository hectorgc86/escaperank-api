import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";
import { SalasCategorias } from "../interfaces/salas_categorias.interface";
import { CategoriaModel } from "./categoria";
import { SalaModel } from "./sala";

export class SalasCategoriasModel extends Model<SalasCategorias> {}

SalasCategoriasModel.init(
  {
    salaId: {
      type: DataTypes.STRING(500),
      allowNull: false,
      primaryKey: true,
      references: {
        model: "salas",
        key: "id",
      },
    },
    categoriaId: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: "categorias",
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "salas_categorias",
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "sala_id" }, { name: "categoria_id" }],
      },
      {
        name: "fk_salascategorias_salas",
        using: "BTREE",
        fields: [{ name: "sala_id" }],
      },
      {
        name: "fk_salascategorias_categorias",
        using: "BTREE",
        fields: [{ name: "categoria_id" }],
      },
    ],
  }
);
