import { QueryTypes } from "sequelize";
import { imagekit } from "../config/imagekit";
import { Noticia } from "../interfaces/noticia.interface";
import { NoticiaModel } from "../models/noticia";
import * as crypto from "crypto";
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

const obtenerPublicacionesUsuario = async (idUsuario: string) => {
  const records = await NoticiaModel.sequelize?.query(
    "SELECT * FROM noticias WHERE equipo_id IN( SELECT DISTINCT equipo_id FROM equipos_usuarios WHERE usuario_id = :idUsuario ) OR usuario_id = :idUsuario ORDER by fecha DESC;",
    {
      replacements: { idUsuario: idUsuario },
      type: QueryTypes.SELECT,
      model: NoticiaModel,
      mapToModel: true,
    }
  );
  return records;
};


const obtenerNoticiasPorCompanyia = async (companyiaId: string) => {
  const records = await NoticiaModel.findAll({
    where: { companyiaId: companyiaId },
  });
  return records;
};

const insertarNoticia = async (noticia: Noticia) => {
  const genId = crypto.randomUUID();

  let fecha =
    noticia.fecha.year + "-" + noticia.fecha.month + "-" + noticia.fecha.day;
  noticia.fecha = fecha;

  const imgExtension = noticia.imagen?.split(";")[0].split("/")[1];

  noticia.imagen = genId + "." + imgExtension;
  const record = await NoticiaModel.create({ ...noticia });

  if (noticia.imagenBase64 != null) {
    await imagekit
      .upload({
        folder: "/img/noticias/",
        useUniqueFileName: false,
        file: noticia.imagenBase64, //required
        fileName: genId + "." + imgExtension, //required
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
  return record;
};

const actualizarNoticia = async (
  noticiaModel: NoticiaModel,
  noticia: Noticia
) => {
  let fecha =
  noticia.fecha.year + "-" + noticia.fecha.month + "-" + noticia.fecha.day;
noticia.fecha = fecha;

const genId = crypto.randomUUID();
  const imgExtension = noticia.imagenBase64?.split(";")[0].split("/")[1];
  let imagenBase64 = noticia.imagenBase64;
  if (imagenBase64!=undefined){
  noticia.imagen= genId + "." + imgExtension;
  }
  const record = await noticiaModel.update({ ...noticia });
  if (imagenBase64!=undefined){
    await imagekit.upload({
      folder: "/img/noticias/",
      useUniqueFileName:false,
      file :imagenBase64, //required
      fileName : genId + "." + imgExtension,   //required
      extensions: [
          {
              name: "google-auto-tagging",
              maxTags: 5,
              minConfidence: 95
          }
      ]
  }).then(response => {
      console.log(response);
  }).catch(error => {
      console.log(error);
  });
}
  
  
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
  obtenerPublicacionesUsuario,
  insertarNoticia,
  actualizarNoticia,
  borrarNoticia,
  obtenerNoticiasPorCompanyia
};
