import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { salas, salasId } from './salas';
import type { tematicas, tematicasId } from './tematicas';

export interface salas_tematicasAttributes {
  sala_id: string;
  tematica_id: string;
}

export type salas_tematicasPk = "sala_id" | "tematica_id";
export type salas_tematicasId = salas_tematicas[salas_tematicasPk];
export type salas_tematicasCreationAttributes = salas_tematicasAttributes;

export class salas_tematicas extends Model<salas_tematicasAttributes, salas_tematicasCreationAttributes> implements salas_tematicasAttributes {
  sala_id!: string;
  tematica_id!: string;

  // salas_tematicas belongsTo salas via sala_id
  sala!: salas;
  getSala!: Sequelize.BelongsToGetAssociationMixin<salas>;
  setSala!: Sequelize.BelongsToSetAssociationMixin<salas, salasId>;
  createSala!: Sequelize.BelongsToCreateAssociationMixin<salas>;
  // salas_tematicas belongsTo tematicas via tematica_id
  tematica!: tematicas;
  getTematica!: Sequelize.BelongsToGetAssociationMixin<tematicas>;
  setTematica!: Sequelize.BelongsToSetAssociationMixin<tematicas, tematicasId>;
  createTematica!: Sequelize.BelongsToCreateAssociationMixin<tematicas>;

  static initModel(sequelize: Sequelize.Sequelize): typeof salas_tematicas {
    return salas_tematicas.init({
    sala_id: {
      type: DataTypes.STRING(500),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'salas',
        key: 'id'
      }
    },
    tematica_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tematicas',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'salas_tematicas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sala_id" },
          { name: "tematica_id" },
        ]
      },
      {
        name: "fk_salastematicas_tematicas",
        using: "BTREE",
        fields: [
          { name: "tematica_id" },
        ]
      },
      {
        name: "fk_salastematicas_salas",
        using: "BTREE",
        fields: [
          { name: "sala_id" },
        ]
      },
    ]
  });
  }
}
