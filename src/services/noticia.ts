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
  insertarNoticia,
  actualizarNoticia,
  borrarNoticia,
};
