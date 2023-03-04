import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { usuarios, usuariosId } from './usuarios';

export interface usuarios_amigosAttributes {
  usuario_id: number;
  amigo_id: number;
  estado: 'pendiente' | 'aceptado' | 'borrado';
}

export type usuarios_amigosPk = "usuario_id" | "amigo_id";
export type usuarios_amigosId = usuarios_amigos[usuarios_amigosPk];
export type usuarios_amigosOptionalAttributes = "estado";
export type usuarios_amigosCreationAttributes = Optional<usuarios_amigosAttributes, usuarios_amigosOptionalAttributes>;

export class usuarios_amigos extends Model<usuarios_amigosAttributes, usuarios_amigosCreationAttributes> implements usuarios_amigosAttributes {
  usuario_id!: number;
  amigo_id!: number;
  estado!: 'pendiente' | 'aceptado' | 'borrado';

  // usuarios_amigos belongsTo usuarios via usuario_id
  usuario!: usuarios;
  getUsuario!: Sequelize.BelongsToGetAssociationMixin<usuarios>;
  setUsuario!: Sequelize.BelongsToSetAssociationMixin<usuarios, usuariosId>;
  createUsuario!: Sequelize.BelongsToCreateAssociationMixin<usuarios>;
  // usuarios_amigos belongsTo usuarios via amigo_id
  amigo!: usuarios;
  getAmigo!: Sequelize.BelongsToGetAssociationMixin<usuarios>;
  setAmigo!: Sequelize.BelongsToSetAssociationMixin<usuarios, usuariosId>;
  createAmigo!: Sequelize.BelongsToCreateAssociationMixin<usuarios>;

  static initModel(sequelize: Sequelize.Sequelize): typeof usuarios_amigos {
    return usuarios_amigos.init({
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    amigo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    estado: {
      type: DataTypes.ENUM('pendiente','aceptado','borrado'),
      allowNull: false,
      defaultValue: "pendiente"
    }
  }, {
    sequelize,
    tableName: 'usuarios_amigos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "usuario_id" },
          { name: "amigo_id" },
        ]
      },
      {
        name: "fk_usuariosamigos_amigos",
        using: "BTREE",
        fields: [
          { name: "amigo_id" },
        ]
      },
      {
        name: "fk_usuariosamigos_usuarios",
        using: "BTREE",
        fields: [
          { name: "usuario_id" },
        ]
      },
    ]
  });
  }
}
