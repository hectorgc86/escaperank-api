import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { salas, salasId } from './salas';

export interface valoracionesAttributes {
  id: number;
  estrellas?: number;
  comentario?: string;
  sala_id: string;
  estrella?: number;
}

export type valoracionesPk = "id";
export type valoracionesId = valoraciones[valoracionesPk];
export type valoracionesOptionalAttributes = "estrellas" | "comentario" | "estrella";
export type valoracionesCreationAttributes = Optional<valoracionesAttributes, valoracionesOptionalAttributes>;

export class valoraciones extends Model<valoracionesAttributes, valoracionesCreationAttributes> implements valoracionesAttributes {
  id!: number;
  estrellas?: number;
  comentario?: string;
  sala_id!: string;
  estrella?: number;

  // valoraciones belongsTo salas via sala_id
  sala!: salas;
  getSala!: Sequelize.BelongsToGetAssociationMixin<salas>;
  setSala!: Sequelize.BelongsToSetAssociationMixin<salas, salasId>;
  createSala!: Sequelize.BelongsToCreateAssociationMixin<salas>;

  static initModel(sequelize: Sequelize.Sequelize): typeof valoraciones {
    return valoraciones.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    estrellas: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    comentario: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    sala_id: {
      type: DataTypes.STRING(500),
      allowNull: false,
      references: {
        model: 'salas',
        key: 'id'
      }
    },
    estrella: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'valoraciones',
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
      {
        name: "fk_valoraciones_salas",
        using: "BTREE",
        fields: [
          { name: "sala_id" },
        ]
      },
    ]
  });
  }
}
