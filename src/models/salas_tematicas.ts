import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";
import { SalasTematicas } from "../interfaces/salas_tematicas.interface";

export class SalasTematicasModel extends Model<SalasTematicas> {}

SalasTematicasModel.init(
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
    tematicaId: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: "tematicas",
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "salas_tematicas",
    timestamps: false,
    underscored: true,
  }
);

// SalasTematicasModel.belongsTo(SalaModel, { as: "sala", foreignKey: "sala_id" });

// SalasTematicasModel.belongsTo(TematicaModel, {
//   as: "tematica",
//   foreignKey: "tematica_id",
// });
