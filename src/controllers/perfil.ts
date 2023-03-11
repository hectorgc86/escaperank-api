import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  obtenerPerfiles,
  obtenerPerfil,
  insertarPerfil,
  actualizarPerfil,
  borrarPerfil,
} from "../services/perfil";
import { Perfil } from "../interfaces/perfil.interface";

const getPerfil = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await obtenerPerfil(id);
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo perfil", e);
  }
};

const getPerfiles = async (req: Request, res: Response) => {
  try {
    const result = await obtenerPerfiles();
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo perfiles", e);
  }
};

const postPerfil = async (req: Request, res: Response) => {
  try {
    const result = await insertarPerfil(req.body);
    res.send({ result, mensaje: "Perfil guardado correctamente" });
  } catch (e) {
    handleHttp(res, "Error guardando perfil", e);
  }
};

const putPerfil = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const result = await obtenerPerfil(id);
    if (!result) {
      return res.send("No se encuentra perfil con ese id");
    }
    const updateResult = await actualizarPerfil(result, body);
    return res.send(updateResult);
  } catch (e) {
    handleHttp(res, "Error actualizando perfil", e);
  }
};

const deletePerfil = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const result = await obtenerPerfil(id);
    if (!result) {
      return res.send("No se encuentra perfil con ese id");
    }
    const deleteResult = await borrarPerfil(result);
    res.send(deleteResult);
  } catch (e) {
    handleHttp(res, "Error borrando perfil", e);
  }
};

export { getPerfil, getPerfiles, postPerfil, putPerfil, deletePerfil };
