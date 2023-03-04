import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { salas, salasId } from './salas';
import type { salas_categorias, salas_categoriasId } from './salas_categorias';

export interface categoriasAttributes {
  id: string;
  tipo?: string;
  numero_salas?: number;
}

export type categoriasPk = "id";
export type categoriasId = categorias[categoriasPk];
export type categoriasOptionalAttributes = "tipo" | "numero_salas";
export type categoriasCreationAttributes = Optional<categoriasAttributes, categoriasOptionalAttributes>;

export class categorias extends Model<categoriasAttributes, categoriasCreationAttributes> implements categoriasAttributes {
  id!: string;
  tipo?: string;
  numero_salas?: number;

  // categorias belongsToMany salas via categoria_id and sala_id
  sala_id_salas_salas_categoria!: salas[];
  getSala_id_salas_salas_categoria!: Sequelize.BelongsToManyGetAssociationsMixin<salas>;
  setSala_id_salas_salas_categoria!: Sequelize.BelongsToManySetAssociationsMixin<salas, salasId>;
  addSala_id_salas_salas_categorium!: Sequelize.BelongsToManyAddAssociationMixin<salas, salasId>;
  addSala_id_salas_salas_categoria!: Sequelize.BelongsToManyAddAssociationsMixin<salas, salasId>;
  createSala_id_salas_salas_categorium!: Sequelize.BelongsToManyCreateAssociationMixin<salas>;
  removeSala_id_salas_salas_categorium!: Sequelize.BelongsToManyRemoveAssociationMixin<salas, salasId>;
  removeSala_id_salas_salas_categoria!: Sequelize.BelongsToManyRemoveAssociationsMixin<salas, salasId>;
  hasSala_id_salas_salas_categorium!: Sequelize.BelongsToManyHasAssociationMixin<salas, salasId>;
  hasSala_id_salas_salas_categoria!: Sequelize.BelongsToManyHasAssociationsMixin<salas, salasId>;
  countSala_id_salas_salas_categoria!: Sequelize.BelongsToManyCountAssociationsMixin;
  // categorias hasMany salas_categorias via categoria_id
  salas_categoria!: salas_categorias[];
  getSalas_categoria!: Sequelize.HasManyGetAssociationsMixin<salas_categorias>;
  setSalas_categoria!: Sequelize.HasManySetAssociationsMixin<salas_categorias, salas_categoriasId>;
  addSalas_categorium!: Sequelize.HasManyAddAssociationMixin<salas_categorias, salas_categoriasId>;
  addSalas_categoria!: Sequelize.HasManyAddAssociationsMixin<salas_categorias, salas_categoriasId>;
  createSalas_categorium!: Sequelize.HasManyCreateAssociationMixin<salas_categorias>;
  removeSalas_categorium!: Sequelize.HasManyRemoveAssociationMixin<salas_categorias, salas_categoriasId>;
  removeSalas_categoria!: Sequelize.HasManyRemoveAssociationsMixin<salas_categorias, salas_categoriasId>;
  hasSalas_categorium!: Sequelize.HasManyHasAssociationMixin<salas_categorias, salas_categoriasId>;
  hasSalas_categoria!: Sequelize.HasManyHasAssociationsMixin<salas_categorias, salas_categoriasId>;
  countSalas_categoria!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof categorias {
    return categorias.init({
    id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    tipo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    numero_salas: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'categorias',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
