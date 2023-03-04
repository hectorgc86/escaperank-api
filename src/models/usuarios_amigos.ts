import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";
import { UsuariosAmigos } from "../interfaces/usuarios_amigos.interface";
import { UsuarioModel } from "./usuario";

export class UsuariosAmigosModel extends Model<UsuariosAmigos> {}

UsuariosAmigosModel.init(
  {
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "usuarios",
        key: "id",
      },
    },
    amigoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "usuarios",
        key: "id",
      },
    },
    estado: {
      type: DataTypes.ENUM("pendiente", "aceptado", "borrado"),
      allowNull: false,
      defaultValue: "pendiente",
    },
  },
  {
    sequelize,
    tableName: "usuarios_amigos",
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "usuario_id" }, { name: "amigo_id" }],
      },
      {
        name: "fk_usuariosamigos_amigos",
        using: "BTREE",
        fields: [{ name: "amigo_id" }],
      },
      {
        name: "fk_usuariosamigos_usuarios",
        using: "BTREE",
        fields: [{ name: "usuario_id" }],
      },
    ],
  }
);

// UsuariosAmigosModel.belongsTo(UsuarioModel, {
//   as: "usuario",
//   foreignKey: "usuario_id",
// });

// UsuariosAmigosModel.belongsTo(UsuarioModel, {
//   as: "amigo",
//   foreignKey: "amigo_id",
// });
