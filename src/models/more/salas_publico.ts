import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { publico, publicoId } from './publico';
import type { salas, salasId } from './salas';

export interface salas_publicoAttributes {
  sala_id: string;
  publico_id: string;
}

export type salas_publicoPk = "sala_id" | "publico_id";
export type salas_publicoId = salas_publico[salas_publicoPk];
export type salas_publicoCreationAttributes = salas_publicoAttributes;

export class salas_publico extends Model<salas_publicoAttributes, salas_publicoCreationAttributes> implements salas_publicoAttributes {
  sala_id!: string;
  publico_id!: string;

  // salas_publico belongsTo publico via publico_id
  publico!: publico;
  getPublico!: Sequelize.BelongsToGetAssociationMixin<publico>;
  setPublico!: Sequelize.BelongsToSetAssociationMixin<publico, publicoId>;
  createPublico!: Sequelize.BelongsToCreateAssociationMixin<publico>;
  // salas_publico belongsTo salas via sala_id
  sala!: salas;
  getSala!: Sequelize.BelongsToGetAssociationMixin<salas>;
  setSala!: Sequelize.BelongsToSetAssociationMixin<salas, salasId>;
  createSala!: Sequelize.BelongsToCreateAssociationMixin<salas>;

  static initModel(sequelize: Sequelize.Sequelize): typeof salas_publico {
    return salas_publico.init({
    sala_id: {
      type: DataTypes.STRING(500),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'salas',
        key: 'id'
      }
    },
    publico_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'publico',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'salas_publico',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sala_id" },
          { name: "publico_id" },
        ]
      },
      {
        name: "fk_salaspublico_publico",
        using: "BTREE",
        fields: [
          { name: "publico_id" },
        ]
      },
      {
        name: "fk_salaspublico_salas",
        using: "BTREE",
        fields: [
          { name: "sala_id" },
        ]
      },
    ]
  });
  }
}
