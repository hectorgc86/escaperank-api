import { Equipo } from "../interfaces/equipo.interface";
import { EquipoModel } from "../models/equipo";

const obtenerEquipo = async (id: string) => {
  const record = await EquipoModel.findOne({
    where: { id },
    include: ["noticias", "partidas"],
  });
  return record;
};

const obtenerEquipos = async () => {
  const records = await EquipoModel.findAll({
    include: ["noticias", "partidas"],
  });
  return records;
};

const insertarEquipo = async (equipo: Equipo) => {
  const record = await EquipoModel.create({ ...equipo });
  return record;
};

const actualizarEquipo = async (equipoModel: EquipoModel, equipo: Equipo) => {
  const record = await equipoModel.update({ ...equipo });
  return record;
};

const borrarEquipo = async (equipoModel: EquipoModel) => {
  const record = await equipoModel.destroy();
  return record;
};

export {
  obtenerEquipo,
  obtenerEquipos,
  insertarEquipo,
  actualizarEquipo,
  borrarEquipo,
};
