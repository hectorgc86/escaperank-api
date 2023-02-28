import { sequelize } from "../config/db";
import { DataTypes, Model } from "sequelize";
import { ICategoria } from "../interfaces/categoria.interface";

export class CategoriaModel extends Model<ICategoria> { };

CategoriaModel.init({
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  tipo: {
    type: DataTypes.STRING
  },
  numero_salas: {
    type: DataTypes.NUMBER
  }
}, {
  sequelize: sequelize,
  tableName: "categorias",
  timestamps: false
}
);
