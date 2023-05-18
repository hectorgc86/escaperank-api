import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  obtenerNoticia,
  obtenerNoticias,
  insertarNoticia,
  actualizarNoticia,
  borrarNoticia,
  obtenerNoticiasUsuario,
  obtenerNoticiasPorCompanyia
} from "../services/noticia";

const getNoticia = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await obtenerNoticia(id);
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo noticia", e);
  }
};

const getNoticias = async (req: Request, res: Response) => {
  try {
    const result = await obtenerNoticias();
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo noticias", e);
  }
};

const getNoticiasUsuario = async (req: Request, res: Response) => {
  try {
    const { idUsuario } = req.params;
    const result = await obtenerNoticiasUsuario(idUsuario);
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo noticias del usuario", e);
  }
};

const getNoticiasCompanyia = async (req: Request, res: Response) => {
  try {
    const companyiaId = req.params.id as unknown as string;
    console.log(companyiaId);
    const result = await obtenerNoticiasPorCompanyia(companyiaId);
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo noticias", e);
  }
};

const postNoticia = async ({ body }: Request, res: Response) => {
  try {
    const result = await insertarNoticia(body);
    res.send({ result, mensaje: "Noticia guardada correctamente" });
  } catch (e) {
    handleHttp(res, "Error guardando noticia", e);
  }
};

const putNoticia = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const result = await obtenerNoticia(id);
    if (!result) {
      return res.send("No se encuentra noticia con ese id");
    }
    const updateResult = await actualizarNoticia(result, body);
    return res.send(updateResult);
  } catch (e) {
    handleHttp(res, "Error actualizando noticia", e);
  }
};

const deleteNoticia = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const result = await obtenerNoticia(id);
    if (!result) {
      return res.send("No se encuentra noticia con ese id");
    }
    const deleteResult = await borrarNoticia(result);
    res.send(deleteResult);
  } catch (e) {
    handleHttp(res, "Error borrando noticia", e);
  }
};

export {
  getNoticia,
  getNoticias,
  getNoticiasUsuario,
  postNoticia,
  putNoticia,
  deleteNoticia,
  getNoticiasCompanyia
};
