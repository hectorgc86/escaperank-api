import { QueryTypes } from "sequelize";
import { Usuario } from "../interfaces/usuario.interface";
import { UsuariosAmigos } from "../interfaces/usuarios_amigos.interface";
import { UsuarioModel } from "../models/usuario";
import { UsuariosAmigosModel } from "../models/usuarios_amigos";

const obtenerUsuario = async (id: string) => {
  const record = await UsuarioModel.findOne({
    where: { id },
    include: "perfil",
  });
  return record;
};

const obtenerUsuarios = async () => {
  const records = await UsuarioModel.findAll({ include: "perfil" });
  return records;
};

const obtenerAmigosUsuario = async (id: string) => {
  const records = await UsuarioModel.sequelize?.query(
    "SELECT usuarios.* , usuarios_amigos.estado , perfiles.* " +
      "FROM usuarios, usuarios_amigos, perfiles " +
      "WHERE usuarios.id = usuarios_amigos.amigo_id " +
      "AND usuarios_amigos.amigo_id = perfiles.usuario_id " +
      "AND usuarios_amigos.usuario_id = :id " +
      "AND usuarios_amigos.estado = 'aceptado' " +
      "OR " +
      "usuarios.id = usuarios_amigos.usuario_id " +
      "AND usuarios_amigos.usuario_id = perfiles.usuario_id " +
      "AND usuarios_amigos.amigo_id = :id " +
      "AND(usuarios_amigos.estado = 'aceptado' OR usuarios_amigos.estado = 'pendiente')",
    {
      replacements: { id: id },
      type: QueryTypes.SELECT,
    }
  );
  return records;
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
    return "No se puede agregar amigo";
  }

  const usuarioAmigoModel = await UsuariosAmigosModel.findOne({
    where: { usuarioId: id, amigoId: amigo.id },
  });

  if (usuarioAmigoModel == null) {
    const usuarioAmigo: UsuariosAmigos = {
      usuarioId: id,
      amigoId: amigo.id,
      estado: 0,
    };
    record = await UsuariosAmigosModel.create({ ...usuarioAmigo });
  } else {
    const usuarioAmigoExistente: UsuariosAmigos = {
      usuarioId: id,
      amigoId: amigo.id,
      estado: 1,
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

const actualizarAmigo = async (id: number, idAmigo: number) => {
  const usuarioAmigoModel = (await UsuariosAmigosModel.sequelize?.query(
    "SELECT * FROM usuarios_amigos " +
      "WHERE (usuario_id = :id and amigo_id = :idAmigo) or (usuario_id = :idAmigo and amigo_id = :id)",
    {
      replacements: { id: id, idAmigo: idAmigo },
      type: QueryTypes.SELECT,
    }
  )) as UsuariosAmigosModel[];

  if (usuarioAmigoModel == null) {
    return "No se puede actualizar amigo";
  }

  const usuarioAmigo: UsuariosAmigos = {
    usuarioId: id,
    amigoId: idAmigo,
    estado: 2,
  };

  const record = await usuarioAmigoModel[0].update({ ...usuarioAmigo });
  return record;
};

const borrarUsuario = async (usuarioModel: UsuarioModel) => {
  const record = await usuarioModel.destroy();
  return record;
};

const borrarAmigo = async (id: number, idAmigo: number) => {
  const usuarioAmigoModel = (await UsuariosAmigosModel.sequelize?.query(
    "SELECT * FROM usuarios_amigos " +
      "WHERE (usuario_id = :id and amigo_id = :idAmigo) or (usuario_id = :idAmigo and amigo_id = :id)",
    {
      replacements: { id: id, idAmigo: idAmigo },
      type: QueryTypes.SELECT,
    }
  )) as UsuariosAmigosModel[];

  if (usuarioAmigoModel == null) {
    return "No se puede borrar amigo";
  }

  const usuarioAmigo: UsuariosAmigos = {
    usuarioId: id,
    amigoId: idAmigo,
    estado: 0,
  };

  const record = await usuarioAmigoModel[0].update({ ...usuarioAmigo });
  return record;
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
