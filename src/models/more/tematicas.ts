import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { salas, salasId } from './salas';
import type { salas_tematicas, salas_tematicasId } from './salas_tematicas';

export interface tematicasAttributes {
  id: string;
  tipo?: string;
  numero_salas?: number;
}

export type tematicasPk = "id";
export type tematicasId = tematicas[tematicasPk];
export type tematicasOptionalAttributes = "tipo" | "numero_salas";
export type tematicasCreationAttributes = Optional<tematicasAttributes, tematicasOptionalAttributes>;

export class tematicas extends Model<tematicasAttributes, tematicasCreationAttributes> implements tematicasAttributes {
  id!: string;
  tipo?: string;
  numero_salas?: number;

  // tematicas belongsToMany salas via tematica_id and sala_id
  sala_id_salas_salas_tematicas!: salas[];
  getSala_id_salas_salas_tematicas!: Sequelize.BelongsToManyGetAssociationsMixin<salas>;
  setSala_id_salas_salas_tematicas!: Sequelize.BelongsToManySetAssociationsMixin<salas, salasId>;
  addSala_id_salas_salas_tematica!: Sequelize.BelongsToManyAddAssociationMixin<salas, salasId>;
  addSala_id_salas_salas_tematicas!: Sequelize.BelongsToManyAddAssociationsMixin<salas, salasId>;
  createSala_id_salas_salas_tematica!: Sequelize.BelongsToManyCreateAssociationMixin<salas>;
  removeSala_id_salas_salas_tematica!: Sequelize.BelongsToManyRemoveAssociationMixin<salas, salasId>;
  removeSala_id_salas_salas_tematicas!: Sequelize.BelongsToManyRemoveAssociationsMixin<salas, salasId>;
  hasSala_id_salas_salas_tematica!: Sequelize.BelongsToManyHasAssociationMixin<salas, salasId>;
  hasSala_id_salas_salas_tematicas!: Sequelize.BelongsToManyHasAssociationsMixin<salas, salasId>;
  countSala_id_salas_salas_tematicas!: Sequelize.BelongsToManyCountAssociationsMixin;
  // tematicas hasMany salas_tematicas via tematica_id
  salas_tematicas!: salas_tematicas[];
  getSalas_tematicas!: Sequelize.HasManyGetAssociationsMixin<salas_tematicas>;
  setSalas_tematicas!: Sequelize.HasManySetAssociationsMixin<salas_tematicas, salas_tematicasId>;
  addSalas_tematica!: Sequelize.HasManyAddAssociationMixin<salas_tematicas, salas_tematicasId>;
  addSalas_tematicas!: Sequelize.HasManyAddAssociationsMixin<salas_tematicas, salas_tematicasId>;
  createSalas_tematica!: Sequelize.HasManyCreateAssociationMixin<salas_tematicas>;
  removeSalas_tematica!: Sequelize.HasManyRemoveAssociationMixin<salas_tematicas, salas_tematicasId>;
  removeSalas_tematicas!: Sequelize.HasManyRemoveAssociationsMixin<salas_tematicas, salas_tematicasId>;
  hasSalas_tematica!: Sequelize.HasManyHasAssociationMixin<salas_tematicas, salas_tematicasId>;
  hasSalas_tematicas!: Sequelize.HasManyHasAssociationsMixin<salas_tematicas, salas_tematicasId>;
  countSalas_tematicas!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof tematicas {
    return tematicas.init({
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
    tableName: 'tematicas',
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
