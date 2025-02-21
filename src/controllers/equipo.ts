import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  obtenerEquipo,
  obtenerEquipos,
  insertarEquipo,
  actualizarEquipo,
  borrarEquipo,
  obtenerEquiposUsuario,
} from "../services/equipo";

const getEquipo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await obtenerEquipo(id);
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo equipo", e);
  }
};

const getEquipos = async (req: Request, res: Response) => {
  try {
    const result = await obtenerEquipos();
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo equipos", e);
  }
};

const getEquiposUsuario = async (req: Request, res: Response) => {
  try {
    const { idUsuario } = req.params;
    const result = await obtenerEquiposUsuario(idUsuario);
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo equipos de un usuario", e);
  }
};

const postEquipo = async (req: Request, res: Response) => {
  try {
    const { equipoRequest } = req.body;
    const result = await insertarEquipo(equipoRequest);
    res.send({ result, mensaje: "Equipo guardado correctamente" });
  } catch (e) {
    handleHttp(res, "Error guardando equipo", e);
  }
};

const putEquipo = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const result = await obtenerEquipo(id);
    if (!result) {
      return res.send("No se encuentra equipo con ese id");
    }
    const updateResult = await actualizarEquipo(result, body);
    return res.send(updateResult);
  } catch (e) {
    handleHttp(res, "Error actualizando equipo", e);
  }
};

const deleteEquipo = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const result = await obtenerEquipo(id);
    if (!result) {
      return res.send("No se encuentra equipo con ese id");
    }
    const deleteResult = await borrarEquipo(result);
    res.send(deleteResult);
  } catch (e) {
    handleHttp(res, "Error borrando equipo", e);
  }
};

export {
  getEquipo,
  getEquipos,
  getEquiposUsuario,
  postEquipo,
  putEquipo,
  deleteEquipo,
};
