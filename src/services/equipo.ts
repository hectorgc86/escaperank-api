import { Op } from "sequelize";
import { Equipo, EquipoRequest } from "../interfaces/equipo.interface";
import { EquipoModel } from "../models/equipo";
import { UsuarioModel } from "../models/usuario";
import sequelize from "sequelize";
import { EquiposUsuariosModel } from "../models/equipos_usuarios";

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

const insertarEquipo = async (equipoRequest: EquipoRequest) => {
  const record = (await EquipoModel.create({
    nombre: equipoRequest.nombre,
    avatar: "",
    activado: true,
  })) as Equipo;

  for (const u of equipoRequest.usuarios!) {
    const usuario = await UsuarioModel.findByPk(u.id);
    if (usuario) {
      await EquiposUsuariosModel.create({
        usuarioId: u.id,
        equipoId: record.id,
      });
    }
  }

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
