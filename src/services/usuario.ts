import { Op, QueryTypes } from "sequelize";
import { Usuario } from "../interfaces/usuario.interface";
import { UsuariosAmigos } from "../interfaces/usuarios_amigos.interface";
import { UsuarioModel } from "../models/usuario";
import { UsuariosAmigosModel } from "../models/usuarios_amigos";
import { PerfilModel } from "../models/perfil";
import { Estado } from "../interfaces/estado.interface";

const obtenerUsuario = async (id: string) => {
  const record = await UsuarioModel.findOne({
    where: { id },
    include: "perfil",
    attributes: { exclude: ["contrasenya"] },
  });

  return record;
};

const obtenerUsuarios = async () => {
  const records = await UsuarioModel.findAll({
    include: "perfil",
    attributes: { exclude: ["contrasenya"] },
  });
  return records;
};

// const obtenerAmigosUsuario = async (id: string) => {
//   const records = await UsuarioModel.sequelize?.query(
//     "SELECT usuarios.* , usuarios_amigos.estado , perfiles.* " +
//       "FROM usuarios, usuarios_amigos, perfiles " +
//       "WHERE usuarios.id = usuarios_amigos.amigo_id " +
//       "AND usuarios_amigos.amigo_id = perfiles.usuario_id " +
//       "AND usuarios_amigos.usuario_id = :id " +
//       "AND usuarios_amigos.estado = 'aceptado' " +
//       "OR " +
//       "usuarios.id = usuarios_amigos.usuario_id " +
//       "AND usuarios_amigos.usuario_id = perfiles.usuario_id " +
//       "AND usuarios_amigos.amigo_id = :id " +
//       "AND(usuarios_amigos.estado = 'aceptado' OR usuarios_amigos.estado = 'pendiente')",
//     {
//       replacements: { id: id },
//       type: QueryTypes.SELECT,
//     }
//   );
//   return records;
// };

const obtenerAmigosUsuario = async (id: string) => {
  const records = await UsuarioModel.findAll({
    where: {
      [Op.or]: [
        {
          "$amigos->UsuariosAmigosModel.amigo_id$": id,
          "$amigos->UsuariosAmigosModel.estado$": "aceptado",
        },
        {
          "$amigos->UsuariosAmigosModel.usuario_id$": id,
          "$amigos->UsuariosAmigosModel.estado$": {
            [Op.or]: ["aceptado", "pendiente"],
          },
        },
      ],
    },
    include: [
      {
        model: UsuarioModel,
        as: "amigos",
        through: {
          attributes: ["estado"],
        },
      },
      {
        model: PerfilModel,
        as: "perfil",
      },
    ],
    attributes: { exclude: ["contrasenya"] },
  });

  return records.map((record) => {
    const estado = record.amigos![0].UsuariosAmigosModel.estado;
    const amigos = null;
    return {
      ...record.toJSON(),
      estado,
      amigos,
    };
  });
};

const obtenerUsuariosEquipo = async (idEquipo: string) => {
  const records = await UsuarioModel.sequelize?.query(
    "SELECT * FROM usuarios " +
      "WHERE id IN (" +
      "SELECT usuario_id FROM equipos_usuarios " +
      "WHERE equipo_id = :idEquipo)",
    {
      replacements: { idEquipo: idEquipo },
      type: QueryTypes.SELECT,
    }
  );
  return records;
};

const insertarUsuario = async (usuario: Usuario) => {
  const record = await UsuarioModel.create({ ...usuario });
  return record;
};

const insertarAmigo = async (id: number, emailAmigo: string) => {
  let record = null;

  const amigo = (await UsuarioModel.findOne({
    where: { email: emailAmigo },
  })) as Usuario;

  if (amigo == null || amigo.id == id) {
    return "No se ha encontrado ningún usuario con el correo introducido";
  }

  const usuarioAmigoModel = await UsuariosAmigosModel.findOne({
    where: { usuarioId: amigo.id, amigoId: id },
  });

  if (usuarioAmigoModel == null) {
    const usuarioAmigo: UsuariosAmigos = {
      usuarioId: amigo.id,
      amigoId: id,
      estado: Estado.pendiente,
    };
    record = await UsuariosAmigosModel.create({ ...usuarioAmigo });
  } else {
    const usuarioAmigoExistente: UsuariosAmigos = {
      usuarioId: amigo.id,
      amigoId: id,
      estado: Estado.pendiente,
    };
    record = await usuarioAmigoModel.update({ ...usuarioAmigoExistente });
  }
  return record;
};

const actualizarUsuario = async (
  usuarioModel: UsuarioModel,
  usuario: Usuario
) => {
  const record = await usuarioModel.update({ ...usuario });
  return record;
};

const borrarUsuario = async (usuarioModel: UsuarioModel) => {
  const record = await usuarioModel.destroy();
  return record;
};

const actualizarAmigo = async (id: number, idAmigo: number) => {
  const usuarioAmigoModel = (await UsuariosAmigosModel.findOne({
    where: {
      [Op.or]: [
        { usuarioId: id, amigoId: idAmigo },
        { usuarioId: idAmigo, amigoId: id },
      ],
    },
  })) as UsuariosAmigosModel;

  if (!usuarioAmigoModel) {
    return "No se puede actualizar amigo";
  }

  const usuarioAmigo: UsuariosAmigos = {
    amigoId: usuarioAmigoModel.dataValues.amigoId,
    usuarioId: usuarioAmigoModel.dataValues.usuarioId,
    estado: Estado.aceptado,
  };

  await usuarioAmigoModel.update(usuarioAmigo);

  return usuarioAmigoModel;
};

const borrarAmigo = async (id: number, idAmigo: number) => {
  const usuarioAmigoModel = (await UsuariosAmigosModel.findOne({
    where: {
      [Op.or]: [
        { usuarioId: id, amigoId: idAmigo },
        { usuarioId: idAmigo, amigoId: id },
      ],
    },
  })) as UsuariosAmigosModel;

  if (!usuarioAmigoModel) {
    return "No se puede borrar amigo";
  }

  const usuarioAmigo: UsuariosAmigos = {
    amigoId: usuarioAmigoModel.dataValues.amigoId,
    usuarioId: usuarioAmigoModel.dataValues.usuarioId,
    estado: Estado.borrado,
  };

  await usuarioAmigoModel.update(usuarioAmigo);

  return usuarioAmigoModel;
 
};

export {
  obtenerUsuario,
  obtenerUsuarios,
  obtenerAmigosUsuario,
  obtenerUsuariosEquipo,
  insertarUsuario,
  insertarAmigo,
  actualizarUsuario,
  actualizarAmigo,
  borrarUsuario,
  borrarAmigo,
};
