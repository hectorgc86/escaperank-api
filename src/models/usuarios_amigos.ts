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
