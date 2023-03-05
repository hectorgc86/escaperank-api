import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";
import { Sala } from "../interfaces/sala.interface";
import { CategoriaModel } from "./categoria";
import { SalasCategoriasModel } from "./salas_categorias";
import { EquipoModel } from "./equipo";
import { PartidaModel } from "./partida";
import { PublicoModel } from "./publico";
import { SalasPublicoModel } from "./salas_publico";
import { TematicaModel } from "./tematica";
import { SalasTematicasModel } from "./salas_tematicas";
import { CompanyiaModel } from "./companyia";
import { DificultadModel } from "./dificultad";
import { ValoracionModel } from "./valoracion";

export class SalaModel extends Model<Sala> {}

SalaModel.init(
  {
    id: {
      type: DataTypes.STRING(500),
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    promocionada: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    },
    duracion: {
      type: DataTypes.STRING(11),
      allowNull: true,
    },
    minimoJugadores: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    maximoJugadores: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    precioMinimo: {
      type: DataTypes.STRING(11),
      allowNull: true,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    precioMaximo: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    urlReserva: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    edadPublico: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    proximamente: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    visto: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    modoCombate: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    textoCombate: {
      type: DataTypes.STRING(2000),
      allowNull: true,
    },
    salaIgual: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    enOferta: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    textoOferta: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    numeroResenyas: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    regaloBonus: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    disponibleIngles: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    adaptadoMinusvalidos: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    adaptadoCiegos: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    adaptadoSordos: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    adaptadoEmbarazadas: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    noClaustrofobicos: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    imagenAncha: {
      type: DataTypes.STRING(400),
      allowNull: true,
    },
    imagenEstrecha: {
      type: DataTypes.STRING(400),
      allowNull: true,
    },
    jugadoresIncluidos: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    precioJugadorAdicional: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    validez: {
      type: DataTypes.STRING(2000),
      allowNull: true,
    },
    comoReservar: {
      type: DataTypes.STRING(2000),
      allowNull: true,
    },
    terminosReserva: {
      type: DataTypes.STRING(2000),
      allowNull: true,
    },
    otrosDatos: {
      type: DataTypes.STRING(2000),
      allowNull: true,
    },
    companyiaId: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: "companyias",
        key: "id",
      },
    },
    dificultadId: {
      type: DataTypes.STRING(50),
      allowNull: true,
      references: {
        model: "dificultades",
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "salas",
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
        name: "fk_salas_companyias",
        using: "BTREE",
        fields: [{ name: "companyia_id" }],
      },
      {
        name: "fk_salas_dificultades",
        using: "BTREE",
        fields: [{ name: "dificultad_id" }],
      },
    ],
  }
);

// SalaModel.belongsToMany(CategoriaModel, {
//   as: "salas_categorias",
//   through: SalasCategoriasModel,
//   foreignKey: "sala_id",
//   otherKey: "categoria_id",
// });

SalaModel.belongsToMany(EquipoModel, {
  as: "equipo_id_equipos",
  through: PartidaModel,
  foreignKey: "sala_id",
  otherKey: "equipo_id",
});

SalaModel.belongsToMany(PublicoModel, {
  as: "publico_id_publicos",
  through: SalasPublicoModel,
  foreignKey: "sala_id",
  otherKey: "publico_id",
});

SalaModel.belongsToMany(TematicaModel, {
  as: "tematica_id_tematicas",
  through: SalasTematicasModel,
  foreignKey: "sala_id",
  otherKey: "tematica_id",
});

PartidaModel.belongsTo(SalaModel, { as: "sala", foreignKey: "sala_id" });
SalaModel.hasMany(PartidaModel, { as: "partidas", foreignKey: "sala_id" });

// SalaModel.hasMany(SalasPublicoModel, {
//   as: "salas_publicos",
//   foreignKey: "sala_id",
// });

// SalaModel.hasMany(SalasTematicasModel, {
//   as: "salas_tematicas",
//   foreignKey: "sala_id",
// });

ValoracionModel.belongsTo(SalaModel, { as: "sala", foreignKey: "sala_id" });
SalaModel.hasMany(ValoracionModel, {
  as: "valoraciones",
  foreignKey: "sala_id",
});
