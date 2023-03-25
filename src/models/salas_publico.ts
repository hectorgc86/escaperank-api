import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";
import { SalasPublico } from "../interfaces/salas_publico.interface";

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
  }
);

// SalasPublicoModel.belongsTo(SalaModel, { as: "sala", foreignKey: "sala_id" });
