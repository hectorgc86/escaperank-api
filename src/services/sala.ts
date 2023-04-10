import { SalaModel } from "../models/sala";
import { CompanyiaModel } from "../models/companyia";
import { CiudadModel } from "../models/ciudad";
import { CategoriaModel } from "../models/categoria";
import { TematicaModel } from "../models/tematica";
import { PublicoModel } from "../models/publico";
import { DificultadModel } from "../models/dificultad";

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
  offset: number,
  limit: number
) => {
  if (grupo === "Promocionada") {
    return obtenerSalasPromocionadas();
  }

  let include = [];

  include.push({
    model: CompanyiaModel,
    as: "companyia",
    include: [{ model: CiudadModel, as: "ciudad" }],
  });

  if (grupo === "Categoría") {
    include.push({
      model: CategoriaModel,
      where: { tipo: tipo },
      as: "categorias",
    });
  } else if (grupo === "Temática") {
    include.push({
      model: TematicaModel,
      where: { tipo: tipo },
      as: "tematicas",
    });
  } else if (grupo === "Público") {
    include.push({
      model: PublicoModel,
      where: { tipo: tipo },
      as: "publico",
    });
  } else if (grupo === "Dificultad") {
    include.push({
      model: DificultadModel,
      where: { tipo: tipo },
      as: "dificultad",
    });
  }

  const records = await SalaModel.findAll({
    include,
    offset,
    limit,
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
