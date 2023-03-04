import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  obtenerCiudades,
  insertarCiudad,
  obtenerCiudad,
  actualizarCiudad,
  borrarCiudad,
} from "../services/ciudad";

const getCiudad = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await obtenerCiudad(id);
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo ciudad", e);
  }
};

const getCiudades = async (req: Request, res: Response) => {
  try {
    const result = await obtenerCiudades();
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo ciudades", e);
  }
};

const postCiudad = async (req: Request, res: Response) => {
  try {
    const result = await insertarCiudad(req.body);
    res.send({ result, mensaje: "Ciudad guardada correctamente" });
  } catch (e) {
    handleHttp(res, "Error guardando ciudad", e);
  }
};

const putCiudad = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const result = await obtenerCiudad(id);
    if (!result) {
      return res.send("No se encuentra ciudad con ese id");
    }
    const updateResult = await actualizarCiudad(result, body);
    return res.send(updateResult);
  } catch (e) {
    handleHttp(res, "Error actualizando ciudad", e);
  }
};

const deleteCiudad = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const result = await obtenerCiudad(id);
    if (!result) {
      return res.send("No se encuentra ciudad con ese id");
    }
    const deleteResult = await borrarCiudad(result);
    res.send(deleteResult);
  } catch (e) {
    handleHttp(res, "Error borrando ciudad", e);
  }
};

export { getCiudad, getCiudades, postCiudad, putCiudad, deleteCiudad };
