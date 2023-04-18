import { SalaModel } from "../models/sala";
import { CompanyiaModel } from "../models/companyia";
import { CiudadModel } from "../models/ciudad";
import { CategoriaModel } from "../models/categoria";
import { TematicaModel } from "../models/tematica";
import { PublicoModel } from "../models/publico";
import { DificultadModel } from "../models/dificultad";
import { Op, Sequelize } from "sequelize";

const obtenerSala = async (id: string) => {
  const record = await SalaModel.findOne({
    where: { id },
    include: [
      {
        model: CompanyiaModel,
        as: "companyia",
        include: [{ model: CiudadModel, as: "ciudad" }],
      },
      { model: CategoriaModel, as: "categorias" },
      { model: TematicaModel, as: "tematicas" },
      { model: PublicoModel, as: "publico" },
      { model: DificultadModel, as: "dificultad" },
    ],
  });
  return record;
};

const obtenerSalas = async (
  grupo: string,
  tipo: string,
  busqueda: string,
  offset: number,
  limit: number
) => {
  if (grupo === "Promocionada") {
    return obtenerSalasPromocionadas();
  }

  const records = await SalaModel.findAll({
    where: {
      [Op.or]: [
        {
          nombre: { [Op.substring]: busqueda },
        },
        {
          descripcion: { [Op.substring]: busqueda },
        },
        {
          "$companyia.ciudad.nombre$": {
            [Op.in]: Sequelize.literal(
              `(SELECT nombre FROM ciudades WHERE nombre LIKE '%${busqueda}%')`
            ),
          },
        },
      ],
    },
    include: [
      {
        model: CompanyiaModel,
        as: "companyia",
        include: [{ model: CiudadModel, as: "ciudad" }],
      },
      {
        model: CategoriaModel,
        as: "categorias",
        where: { tipo: tipo },
        required: grupo === "Categoría",
      },
      {
        model: TematicaModel,
        as: "tematicas",
        where: { tipo: tipo },
        required: grupo === "Temática",
      },
      {
        model: PublicoModel,
        as: "publico",
        where: { tipo: tipo },
        required: grupo === "Público",
      },
      {
        model: DificultadModel,
        as: "dificultad",
        where: { tipo: tipo },
        required: grupo === "Dificultad",
      },
    ],
    offset,
    limit,
    subQuery: false,
  });

  return records;
};

const obtenerSalasPromocionadas = async () => {
  const records = await SalaModel.findAll({
    where: { promocionada: true },
    include: [
      {
        model: CompanyiaModel,
        as: "companyia",
        include: [{ model: CiudadModel, as: "ciudad" }],
      },
    ],
    limit: 10,
  });
  return records;
};

export { obtenerSala, obtenerSalas };
