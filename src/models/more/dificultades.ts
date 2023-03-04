import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { salas, salasId } from './salas';

export interface dificultadesAttributes {
  id: string;
  tipo?: string;
  numero_salas?: number;
}

export type dificultadesPk = "id";
export type dificultadesId = dificultades[dificultadesPk];
export type dificultadesOptionalAttributes = "tipo" | "numero_salas";
export type dificultadesCreationAttributes = Optional<dificultadesAttributes, dificultadesOptionalAttributes>;

export class dificultades extends Model<dificultadesAttributes, dificultadesCreationAttributes> implements dificultadesAttributes {
  id!: string;
  tipo?: string;
  numero_salas?: number;

  // dificultades hasMany salas via dificultad_id
  salas!: salas[];
  getSalas!: Sequelize.HasManyGetAssociationsMixin<salas>;
  setSalas!: Sequelize.HasManySetAssociationsMixin<salas, salasId>;
  addSala!: Sequelize.HasManyAddAssociationMixin<salas, salasId>;
  addSalas!: Sequelize.HasManyAddAssociationsMixin<salas, salasId>;
  createSala!: Sequelize.HasManyCreateAssociationMixin<salas>;
  removeSala!: Sequelize.HasManyRemoveAssociationMixin<salas, salasId>;
  removeSalas!: Sequelize.HasManyRemoveAssociationsMixin<salas, salasId>;
  hasSala!: Sequelize.HasManyHasAssociationMixin<salas, salasId>;
  hasSalas!: Sequelize.HasManyHasAssociationsMixin<salas, salasId>;
  countSalas!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof dificultades {
    return dificultades.init({
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
    tableName: 'dificultades',
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
