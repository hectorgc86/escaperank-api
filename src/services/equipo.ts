import { Equipo } from "../interfaces/equipo.interface";
import { EquipoModel } from "../models/equipo";
import { UsuarioModel } from "../models/usuario";

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

const obtenerEquiposUsuario = async (idUsuario: string) => {
  const records = await EquipoModel.findAll({
    where: { activado: true },
    include: [
      {
        model: UsuarioModel,
        as: "usuarios",
        where: { id: idUsuario },
        attributes: [],
      },
    ],
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
  obtenerEquiposUsuario,
  insertarEquipo,
  actualizarEquipo,
  borrarEquipo,
};
