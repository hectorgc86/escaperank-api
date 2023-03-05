import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  obtenerDificultades,
  obtenerDificultad,
  insertarDificultad,
  actualizarDificultad,
  borrarDificultad,
} from "../services/dificultad";

const getDificultad = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await obtenerDificultad(id);
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo dificultad", e);
  }
};

const getDificultades = async (req: Request, res: Response) => {
  try {
    const result = await obtenerDificultades();
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo dificultades", e);
  }
};

const postDificultad = async (req: Request, res: Response) => {
  try {
    const result = await insertarDificultad(req.body);
    res.send({ result, mensaje: "Dificultad guardada correctamente" });
  } catch (e) {
    handleHttp(res, "Error guardando dificultad", e);
  }
};

const putDificultad = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const result = await obtenerDificultad(id);
    if (!result) {
      return res.send("No se encuentra dificultad con ese id");
    }
    const updateResult = await actualizarDificultad(result, body);
    return res.send(updateResult);
  } catch (e) {
    handleHttp(res, "Error actualizando dificultad", e);
  }
};

const deleteDificultad = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const result = await obtenerDificultad(id);
    if (!result) {
      return res.send("No se encuentra dificultad con ese id");
    }
    const deleteResult = await borrarDificultad(result);
    res.send(deleteResult);
  } catch (e) {
    handleHttp(res, "Error borrando dificultad", e);
  }
};

export {
  getDificultad,
  getDificultades,
  postDificultad,
  putDificultad,
  deleteDificultad,
};
