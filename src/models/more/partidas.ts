import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { equipos, equiposId } from './equipos';
import type { salas, salasId } from './salas';

export interface partidasAttributes {
  id: number;
  fecha?: string;
  minutos?: string;
  segundos?: string;
  imagen?: string;
  sala_id: string;
  equipo_id: number;
}

export type partidasPk = "id" | "sala_id" | "equipo_id";
export type partidasId = partidas[partidasPk];
export type partidasOptionalAttributes = "id" | "fecha" | "minutos" | "segundos" | "imagen";
export type partidasCreationAttributes = Optional<partidasAttributes, partidasOptionalAttributes>;

export class partidas extends Model<partidasAttributes, partidasCreationAttributes> implements partidasAttributes {
  id!: number;
  fecha?: string;
  minutos?: string;
  segundos?: string;
  imagen?: string;
  sala_id!: string;
  equipo_id!: number;

  // partidas belongsTo equipos via equipo_id
  equipo!: equipos;
  getEquipo!: Sequelize.BelongsToGetAssociationMixin<equipos>;
  setEquipo!: Sequelize.BelongsToSetAssociationMixin<equipos, equiposId>;
  createEquipo!: Sequelize.BelongsToCreateAssociationMixin<equipos>;
  // partidas belongsTo salas via sala_id
  sala!: salas;
  getSala!: Sequelize.BelongsToGetAssociationMixin<salas>;
  setSala!: Sequelize.BelongsToSetAssociationMixin<salas, salasId>;
  createSala!: Sequelize.BelongsToCreateAssociationMixin<salas>;

  static initModel(sequelize: Sequelize.Sequelize): typeof partidas {
    return partidas.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    minutos: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    segundos: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    imagen: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    sala_id: {
      type: DataTypes.STRING(500),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'salas',
        key: 'id'
      }
    },
    equipo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'equipos',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'partidas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "sala_id" },
          { name: "equipo_id" },
        ]
      },
      {
        name: "fk_partidas_salas",
        using: "BTREE",
        fields: [
          { name: "sala_id" },
        ]
      },
      {
        name: "fk_partidas_equipos",
        using: "BTREE",
        fields: [
          { name: "equipo_id" },
        ]
      },
    ]
  });
  }
}
