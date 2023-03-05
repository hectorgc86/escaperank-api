import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  obtenerProvincia,
  obtenerProvincias,
  insertarProvincia,
  actualizarProvincia,
  borrarProvincia,
} from "../services/provincia";

const getProvincia = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await obtenerProvincia(id);
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo provincia", e);
  }
};

const getProvincias = async (req: Request, res: Response) => {
  try {
    const result = await obtenerProvincias();
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo provincias", e);
  }
};

const postProvincia = async (req: Request, res: Response) => {
  try {
    const result = await insertarProvincia(req.body);
    res.send({ result, mensaje: "Provincia guardada correctamente" });
  } catch (e) {
    handleHttp(res, "Error guardando provincia", e);
  }
};

const putProvincia = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const result = await obtenerProvincia(id);
    if (!result) {
      return res.send("No se encuentra provincia con ese id");
    }
    const updateResult = await actualizarProvincia(result, body);
    return res.send(updateResult);
  } catch (e) {
    handleHttp(res, "Error actualizando provincia", e);
  }
};

const deleteProvincia = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const result = await obtenerProvincia(id);
    if (!result) {
      return res.send("No se encuentra provincia con ese id");
    }
    const deleteResult = await borrarProvincia(result);
    res.send(deleteResult);
  } catch (e) {
    handleHttp(res, "Error borrando provincia", e);
  }
};

export {
  getProvincia,
  getProvincias,
  postProvincia,
  putProvincia,
  deleteProvincia,
};
