import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  obtenerCategoria,
  obtenerCategorias,
  insertarCategoria,
  actualizarCategoria,
  borrarCategoria,
} from "../services/categoria";

const getCategoria = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await obtenerCategoria(id);
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo categoría", e);
  }
};

const getCategorias = async (req: Request, res: Response) => {
  try {
    const result = await obtenerCategorias();
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo categorías", e);
  }
};

const postCategoria = async (req: Request, res: Response) => {
  try {
    const result = await insertarCategoria(req.body);
    res.send({ result, mensaje: "Categoría guardada correctamente" });
  } catch (e) {
    handleHttp(res, "Error guardando categoría", e);
  }
};

const putCategoria = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const result = await obtenerCategoria(id);
    if (!result) {
      return res.send("No se encuentra categoría con ese id");
    }
    const updateResult = await actualizarCategoria(result, body);
    return res.send(updateResult);
  } catch (e) {
    handleHttp(res, "Error actualizando categoría", e);
  }
};

const deleteCategoria = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const result = await obtenerCategoria(id);
    if (!result) {
      return res.send("No se encuentra categoría con ese id");
    }
    const deleteResult = await borrarCategoria(result);
    res.send(deleteResult);
  } catch (e) {
    handleHttp(res, "Error borrando categoría", e);
  }
};

export {
  getCategoria,
  getCategorias,
  postCategoria,
  putCategoria,
  deleteCategoria,
};
