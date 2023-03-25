import { QueryTypes } from "sequelize";
import { Noticia } from "../interfaces/noticia.interface";
import { NoticiaModel } from "../models/noticia";

const obtenerNoticia = async (id: string) => {
  const record = await NoticiaModel.findOne({
    where: { id },
    include: ["equipo", "companyia", "usuario"],
  });
  return record;
};

const obtenerNoticias = async () => {
  const records = await NoticiaModel.findAll({
    include: ["equipo", "companyia", "usuario"],
  });
  return records;
};

const obtenerNoticiasUsuario = async (idUsuario: string) => {
  const records = await NoticiaModel.sequelize?.query(
    "SELECT * FROM noticias WHERE equipo_id IN(SELECT DISTINCT equipo_id FROM equipos_usuarios WHERE usuario_id IN(SELECT DISTINCT amigo_id FROM usuarios_amigos WHERE (usuario_id = :idUsuario OR amigo_id = :idUsuario))) OR promocionada = 1 OR usuario_id = :idUsuario ORDER by fecha DESC;",
    {
      replacements: { idUsuario: idUsuario },
      type: QueryTypes.SELECT,
      model: NoticiaModel,
      mapToModel: true,
    }
  );
  return records;
};

const insertarNoticia = async (noticia: Noticia) => {
  const record = await NoticiaModel.create({ ...noticia });
  return record;
};

const actualizarNoticia = async (
  noticiaModel: NoticiaModel,
  noticia: Noticia
) => {
  const record = await noticiaModel.update({ ...noticia });
  return record;
};

const borrarNoticia = async (noticiaModel: NoticiaModel) => {
  const record = await noticiaModel.destroy();
  return record;
};

export {
  obtenerNoticia,
  obtenerNoticias,
  obtenerNoticiasUsuario,
  insertarNoticia,
  actualizarNoticia,
  borrarNoticia,
};
