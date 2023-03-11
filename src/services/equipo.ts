import { QueryTypes } from "sequelize";
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

const obtenerEquiposUsuario = async (idUsuario: string) => {
  const records = await EquipoModel.sequelize?.query(
    "SELECT * FROM equipos " +
      "WHERE id " +
      "IN(SELECT equipo_id " +
      "FROM equipos_usuarios " +
      "WHERE usuario_id = :idUsuario) " +
      "AND activado = 1",
    {
      replacements: { idUsuario: idUsuario },
      type: QueryTypes.SELECT,
    }
  );
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
