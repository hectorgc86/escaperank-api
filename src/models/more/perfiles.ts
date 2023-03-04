import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { usuarios, usuariosId } from './usuarios';

export interface perfilesAttributes {
  id: number;
  nombre?: string;
  nacido?: string;
  telefono?: string;
  avatar?: string;
  numero_partidas?: number;
  partidas_ganadas?: number;
  partidas_perdidas?: number;
  usuario_id: number;
}

export type perfilesPk = "id" | "usuario_id";
export type perfilesId = perfiles[perfilesPk];
export type perfilesOptionalAttributes = "id" | "nombre" | "nacido" | "telefono" | "avatar" | "numero_partidas" | "partidas_ganadas" | "partidas_perdidas";
export type perfilesCreationAttributes = Optional<perfilesAttributes, perfilesOptionalAttributes>;

export class perfiles extends Model<perfilesAttributes, perfilesCreationAttributes> implements perfilesAttributes {
  id!: number;
  nombre?: string;
  nacido?: string;
  telefono?: string;
  avatar?: string;
  numero_partidas?: number;
  partidas_ganadas?: number;
  partidas_perdidas?: number;
  usuario_id!: number;

  // perfiles belongsTo usuarios via usuario_id
  usuario!: usuarios;
  getUsuario!: Sequelize.BelongsToGetAssociationMixin<usuarios>;
  setUsuario!: Sequelize.BelongsToSetAssociationMixin<usuarios, usuariosId>;
  createUsuario!: Sequelize.BelongsToCreateAssociationMixin<usuarios>;

  static initModel(sequelize: Sequelize.Sequelize): typeof perfiles {
    return perfiles.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    nacido: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    telefono: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    avatar: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    numero_partidas: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    partidas_ganadas: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    partidas_perdidas: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'perfiles',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "usuario_id" },
        ]
      },
      {
        name: "fk_perfiles_usuarios",
        using: "BTREE",
        fields: [
          { name: "usuario_id" },
        ]
      },
    ]
  });
  }
}
