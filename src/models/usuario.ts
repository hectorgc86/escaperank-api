import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";
import { Usuario } from "../interfaces/usuario.interface";
import { NoticiaModel } from "./noticia";
import { PerfilModel } from "./perfil";
import { UsuariosAmigosModel } from "./usuarios_amigos";

export class UsuarioModel extends Model<Usuario> {}

UsuarioModel.init(
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    nick: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "UKmsc0amciyjnaxc7adtucv478g",
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "UKkfsp0s1tflm1cwlj8idhqsad0",
    },
    activado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    tableName: "usuarios",
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "id" }],
      },
      {
        name: "email",
        unique: true,
        using: "BTREE",
        fields: [{ name: "email" }],
      },
      {
        name: "nick",
        unique: true,
        using: "BTREE",
        fields: [{ name: "nick" }],
      },
      {
        name: "UKkfsp0s1tflm1cwlj8idhqsad0",
        unique: true,
        using: "BTREE",
        fields: [{ name: "email" }],
      },
      {
        name: "UKmsc0amciyjnaxc7adtucv478g",
        unique: true,
        using: "BTREE",
        fields: [{ name: "nick" }],
      },
    ],
  }
);

// UsuarioModel.belongsToMany(UsuarioModel, {
//   as: "amigo_id_usuarios",
//   through: UsuariosAmigosModel,
//   foreignKey: "usuario_id",
//   otherKey: "amigo_id",
// });

// UsuarioModel.belongsToMany(UsuarioModel, {
//   as: "usuario_id_usuarios",
//   through: UsuariosAmigosModel,
//   foreignKey: "amigo_id",
//   otherKey: "usuario_id",
// });

UsuarioModel.hasMany(NoticiaModel, {
  as: "noticias",
  foreignKey: "usuario_id",
});

UsuarioModel.hasMany(PerfilModel, { as: "perfiles", foreignKey: "usuario_id" });

UsuarioModel.hasMany(UsuariosAmigosModel, {
  as: "usuarios_amigos",
  foreignKey: "usuario_id",
});

UsuarioModel.hasMany(UsuariosAmigosModel, {
  as: "amigo_usuarios_amigos",
  foreignKey: "amigo_id",
});
