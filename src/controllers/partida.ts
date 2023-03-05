import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  obtenerPartida,
  obtenerPartidas,
  insertarPartida,
  actualizarPartida,
  borrarPartida,
} from "../services/partida";

const getPartida = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await obtenerPartida(id);
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo partida", e);
  }
};

const getPartidas = async (req: Request, res: Response) => {
  try {
    const result = await obtenerPartidas();
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo partidas", e);
  }
};

const postPartida = async (req: Request, res: Response) => {
  try {
    const result = await insertarPartida(req.body);
    res.send({ result, mensaje: "Partida guardada correctamente" });
  } catch (e) {
    handleHttp(res, "Error guardando partida", e);
  }
};

const putPartida = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const result = await obtenerPartida(id);
    if (!result) {
      return res.send("No se encuentra partida con ese id");
    }
    const updateResult = await actualizarPartida(result, body);
    return res.send(updateResult);
  } catch (e) {
    handleHttp(res, "Error actualizando partida", e);
  }
};

const deletePartida = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const result = await obtenerPartida(id);
    if (!result) {
      return res.send("No se encuentra partida con ese id");
    }
    const deleteResult = await borrarPartida(result);
    res.send(deleteResult);
  } catch (e) {
    handleHttp(res, "Error borrando partida", e);
  }
};

export { getPartida, getPartidas, postPartida, putPartida, deletePartida };
