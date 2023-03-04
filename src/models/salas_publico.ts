import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db";
import { SalasPublico } from "../interfaces/salas_publico.interface";
import { PublicoModel } from "./publico";
import { SalaModel } from "./sala";

export class SalasPublicoModel extends Model<SalasPublico> {}

SalasPublicoModel.init(
  {
    salaId: {
      type: DataTypes.STRING(500),
      allowNull: false,
      primaryKey: true,
      references: {
        model: "salas",
        key: "id",
      },
    },
    publicoId: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: "publico",
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "salas_publico",
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "sala_id" }, { name: "publico_id" }],
      },
      {
        name: "fk_salaspublico_publico",
        using: "BTREE",
        fields: [{ name: "publico_id" }],
      },
      {
        name: "fk_salaspublico_salas",
        using: "BTREE",
        fields: [{ name: "sala_id" }],
      },
    ],
  }
);

// SalasPublicoModel.belongsTo(PublicoModel, {
//   as: "publico",
//   foreignKey: "publico_id",
// });

// SalasPublicoModel.belongsTo(SalaModel, { as: "sala", foreignKey: "sala_id" });
