import { Op, QueryTypes, Sequelize } from "sequelize";
import { Usuario, UsuarioRequest } from "../interfaces/usuario.interface";
import { UsuariosAmigos } from "../interfaces/usuarios_amigos.interface";
import { UsuarioModel } from "../models/usuario";
import { UsuariosAmigosModel } from "../models/usuarios_amigos";
import { PerfilModel } from "../models/perfil";
import { Estado } from "../interfaces/estado.interface";
import { imagekit } from "../config/imagekit";

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

  return Promise.all(
    records.map(async (record) => {
      const estado = record.amigos![0].UsuariosAmigosModel.estado;
      const amigos = null;
      const amigosComun = (await UsuarioModel.sequelize?.query(
        "SELECT COUNT(*) AS `counter` " +
          "FROM `usuarios_amigos` AS `ua1` " +
          "INNER JOIN `usuarios_amigos` AS `ua2` ON `ua1`.`amigo_id` = `ua2`.`amigo_id`" +
          " WHERE `ua1`.`usuario_id` = :usuarioId AND `ua2`.`usuario_id` = :amigoId AND `ua1`.`estado` = 'aceptado' AND `ua2`.`estado` = 'aceptado'",
        {
          replacements: { usuarioId: id, amigoId: record.id },
          type: QueryTypes.SELECT,
        }
      )) as UsuarioModel[] | undefined;

      const amigosComunCount =
        amigosComun && amigosComun.length > 0 ? amigosComun[0].counter : 0;

      return {
        ...record.toJSON(),
        estado: estado,
        amigos: amigos,
        amigosComun: amigosComunCount,
      };
    })
  );
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
  usuarioRequest: UsuarioRequest
) => {
  let perfilModificado;
  try {
    const perfilModel = await PerfilModel.findOne({
      where: { usuarioId: usuarioModel.id },
    });

    if (perfilModel) {
      const genId = crypto.randomUUID();
      const imgExtension = usuarioRequest.avatar?.split(";")[0].split("/")[1];

      if (usuarioRequest.avatarBase64 != undefined) {
        usuarioRequest.avatar= genId + "." + imgExtension;
        await imagekit
          .upload({
            folder: "/img/usuarios/",
            useUniqueFileName: false,
            file: usuarioRequest.avatarBase64,
            fileName: genId + "." + imgExtension,
            extensions: [
              {
                name: "google-auto-tagging",
                maxTags: 5,
                minConfidence: 95,
              },
            ],
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }

      perfilModificado = await perfilModel.update({ ...usuarioRequest });
    }

    const record = await usuarioModel.update({ ...usuarioRequest });

    if (perfilModificado) {
      record.setDataValue("perfil", perfilModificado.dataValues);
    }

    return record;
  } catch (error: any) {
    if (error.parent && error.parent.code === "ER_DUP_ENTRY") {
      throw new Error("El nick o email ya existen en la base de datos.");
    } else {
      throw error;
    }
  }
};

const borrarUsuario = async (usuarioModel: UsuarioModel) => {
  const updatedValues = { activado: false };

  const record = await usuarioModel.update(updatedValues);
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
