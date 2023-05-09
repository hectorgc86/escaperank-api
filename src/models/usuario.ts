import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";
import { Usuario } from "../interfaces/usuario.interface";
import { NoticiaModel } from "./noticia";
import { PerfilModel } from "./perfil";
import { UsuariosAmigosModel } from "./usuarios_amigos";
import { CompanyiaModel } from "./companyia";
import { EquipoModel } from "./equipo";
import { EquiposUsuariosModel } from "./equipos_usuarios";

export class UsuarioModel extends Model<Usuario> {
  id: any;
  counter: any;
  amigos: any;
}

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
    contrasenya: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    rol: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: "USER",
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
        name: "contrasenya",
        unique: true,
        using: "BTREE",
        fields: [{ name: "email" }],
      },
      {
        name: "nick",
        unique: false,
        using: "BTREE",
        fields: [{ name: "contrasenya" }],
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

NoticiaModel.belongsTo(UsuarioModel, {
  as: "usuario",
  foreignKey: "usuarioId",
});
UsuarioModel.hasMany(NoticiaModel, {
  as: "noticias",
  foreignKey: "usuarioId",
});

UsuarioModel.hasOne(PerfilModel, { as: "perfil", foreignKey: "usuarioId" });

PerfilModel.belongsTo(UsuarioModel, {
  as: "usuario",
  foreignKey: "usuarioId",
});

UsuarioModel.hasOne(CompanyiaModel, {
  as: "usuario",
  foreignKey: "usuarioId",
});

UsuarioModel.belongsToMany(EquipoModel, {
  through: EquiposUsuariosModel,
  foreignKey: "usuarioId",
  otherKey: "equipoId",
  as: "equipos",
});

EquipoModel.belongsToMany(UsuarioModel, {
  through: EquiposUsuariosModel,
  foreignKey: "equipoId",
  otherKey: "usuarioId",
  as: "usuarios",
});

UsuarioModel.belongsToMany(UsuarioModel, {
  through: UsuariosAmigosModel,
  foreignKey: "amigoId",
  otherKey: "usuarioId",
  as: "amigos",
});
