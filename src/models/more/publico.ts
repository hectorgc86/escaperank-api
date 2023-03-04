import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { salas, salasId } from './salas';
import type { salas_publico, salas_publicoId } from './salas_publico';

export interface publicoAttributes {
  id: string;
  tipo?: string;
  numero_salas?: number;
}

export type publicoPk = "id";
export type publicoId = publico[publicoPk];
export type publicoOptionalAttributes = "tipo" | "numero_salas";
export type publicoCreationAttributes = Optional<publicoAttributes, publicoOptionalAttributes>;

export class publico extends Model<publicoAttributes, publicoCreationAttributes> implements publicoAttributes {
  id!: string;
  tipo?: string;
  numero_salas?: number;

  // publico belongsToMany salas via publico_id and sala_id
  sala_id_salas_salas_publicos!: salas[];
  getSala_id_salas_salas_publicos!: Sequelize.BelongsToManyGetAssociationsMixin<salas>;
  setSala_id_salas_salas_publicos!: Sequelize.BelongsToManySetAssociationsMixin<salas, salasId>;
  addSala_id_salas_salas_publico!: Sequelize.BelongsToManyAddAssociationMixin<salas, salasId>;
  addSala_id_salas_salas_publicos!: Sequelize.BelongsToManyAddAssociationsMixin<salas, salasId>;
  createSala_id_salas_salas_publico!: Sequelize.BelongsToManyCreateAssociationMixin<salas>;
  removeSala_id_salas_salas_publico!: Sequelize.BelongsToManyRemoveAssociationMixin<salas, salasId>;
  removeSala_id_salas_salas_publicos!: Sequelize.BelongsToManyRemoveAssociationsMixin<salas, salasId>;
  hasSala_id_salas_salas_publico!: Sequelize.BelongsToManyHasAssociationMixin<salas, salasId>;
  hasSala_id_salas_salas_publicos!: Sequelize.BelongsToManyHasAssociationsMixin<salas, salasId>;
  countSala_id_salas_salas_publicos!: Sequelize.BelongsToManyCountAssociationsMixin;
  // publico hasMany salas_publico via publico_id
  salas_publicos!: salas_publico[];
  getSalas_publicos!: Sequelize.HasManyGetAssociationsMixin<salas_publico>;
  setSalas_publicos!: Sequelize.HasManySetAssociationsMixin<salas_publico, salas_publicoId>;
  addSalas_publico!: Sequelize.HasManyAddAssociationMixin<salas_publico, salas_publicoId>;
  addSalas_publicos!: Sequelize.HasManyAddAssociationsMixin<salas_publico, salas_publicoId>;
  createSalas_publico!: Sequelize.HasManyCreateAssociationMixin<salas_publico>;
  removeSalas_publico!: Sequelize.HasManyRemoveAssociationMixin<salas_publico, salas_publicoId>;
  removeSalas_publicos!: Sequelize.HasManyRemoveAssociationsMixin<salas_publico, salas_publicoId>;
  hasSalas_publico!: Sequelize.HasManyHasAssociationMixin<salas_publico, salas_publicoId>;
  hasSalas_publicos!: Sequelize.HasManyHasAssociationsMixin<salas_publico, salas_publicoId>;
  countSalas_publicos!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof publico {
    return publico.init({
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
    tableName: 'publico',
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
