import { Op } from "sequelize";
import { Equipo } from "../interfaces/equipo.interface";
import { EquipoModel } from "../models/equipo";
import { UsuarioModel } from "../models/usuario";
import sequelize from "sequelize";
import { PerfilModel } from "../models/perfil";

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
  const equipos = await EquipoModel.findAll({
    where: {
      activado: true,
      id: {
        [Op.in]: sequelize.literal(
          `(SELECT equipo_id FROM equipos_usuarios WHERE usuario_id = ${idUsuario})`
        ),
      },
    },
    include: {
      model: UsuarioModel,
      as: "usuarios",
      where: { activado: true },
      through: { attributes: [] },
      include: ["perfil"],
    },
  });

  return equipos;
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
