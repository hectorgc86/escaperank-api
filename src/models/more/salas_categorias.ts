import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { categorias, categoriasId } from './categorias';
import type { salas, salasId } from './salas';

export interface salas_categoriasAttributes {
  sala_id: string;
  categoria_id: string;
}

export type salas_categoriasPk = "sala_id" | "categoria_id";
export type salas_categoriasId = salas_categorias[salas_categoriasPk];
export type salas_categoriasCreationAttributes = salas_categoriasAttributes;

export class salas_categorias extends Model<salas_categoriasAttributes, salas_categoriasCreationAttributes> implements salas_categoriasAttributes {
  sala_id!: string;
  categoria_id!: string;

  // salas_categorias belongsTo categorias via categoria_id
  categorium!: categorias;
  getCategorium!: Sequelize.BelongsToGetAssociationMixin<categorias>;
  setCategorium!: Sequelize.BelongsToSetAssociationMixin<categorias, categoriasId>;
  createCategorium!: Sequelize.BelongsToCreateAssociationMixin<categorias>;
  // salas_categorias belongsTo salas via sala_id
  sala!: salas;
  getSala!: Sequelize.BelongsToGetAssociationMixin<salas>;
  setSala!: Sequelize.BelongsToSetAssociationMixin<salas, salasId>;
  createSala!: Sequelize.BelongsToCreateAssociationMixin<salas>;

  static initModel(sequelize: Sequelize.Sequelize): typeof salas_categorias {
    return salas_categorias.init({
    sala_id: {
      type: DataTypes.STRING(500),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'salas',
        key: 'id'
      }
    },
    categoria_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'categorias',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'salas_categorias',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sala_id" },
          { name: "categoria_id" },
        ]
      },
      {
        name: "fk_salascategorias_salas",
        using: "BTREE",
        fields: [
          { name: "sala_id" },
        ]
      },
      {
        name: "fk_salascategorias_categorias",
        using: "BTREE",
        fields: [
          { name: "categoria_id" },
        ]
      },
    ]
  });
  }
}
