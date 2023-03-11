import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  actualizarAmigo,
  actualizarUsuario,
  borrarAmigo,
  borrarUsuario,
  insertarAmigo,
  insertarUsuario,
  obtenerAmigosUsuario,
  obtenerUsuario,
  obtenerUsuarios,
  obtenerUsuariosEquipo,
} from "../services/usuario";

const getUsuario = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await obtenerUsuario(id);
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo usuario", e);
  }
};

const getUsuarios = async (req: Request, res: Response) => {
  try {
    const result = await obtenerUsuarios();
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo usuarios", e);
  }
};

const getAmigosUsuario = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await obtenerAmigosUsuario(id);
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo amigos usuario", e);
  }
};

const getUsuariosEquipo = async (req: Request, res: Response) => {
  try {
    const { idEquipo } = req.params;
    const result = await obtenerUsuariosEquipo(idEquipo);
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo usuarios de un equipo", e);
  }
};

const postUsuario = async (req: Request, res: Response) => {
  try {
    const result = await insertarUsuario(req.body);
    res.send({ result, mensaje: "Usuario guardado correctamente" });
  } catch (e) {
    handleHttp(res, "Error guardando usuario", e);
  }
};

const postAmigo = async (req: Request, res: Response) => {
  const id = req.params.id as any;
  const emailAmigo = req.body.emailAmigo;

  try {
    const result = await insertarAmigo(id, emailAmigo);
    res.send({ result, mensaje: "Amigo guardado correctamente" });
  } catch (e) {
    handleHttp(res, "Error guardando amigo", e);
  }
};

const putUsuario = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const result = await obtenerUsuario(id);
    if (!result) {
      return res.send("No se encuentra usuario con ese id");
    }
    const updateResult = await actualizarUsuario(result, body);
    return res.send(updateResult);
  } catch (e) {
    handleHttp(res, "Error actualizando usuario", e);
  }
};

const putAmigo = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params as any;
    const { emailAmigo } = body;

    const updateResult = await actualizarAmigo(id, emailAmigo);
    return res.send(updateResult);
  } catch (e) {
    handleHttp(res, "Error actualizando amigo", e);
  }
};

const deleteUsuario = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const result = await obtenerUsuario(id);

    if (!result) {
      return res.send("No se encuentra usuario con ese id");
    }
    const deleteResult = await borrarUsuario(result);
    res.send(deleteResult);
  } catch (e) {
    handleHttp(res, "Error borrando usuario", e);
  }
};

const deleteAmigo = async ({ params }: Request, res: Response) => {
  try {
    const { id, idAmigo } = params as any;

    const deleteResult = await borrarAmigo(id, idAmigo);
    res.send(deleteResult);
  } catch (e) {
    handleHttp(res, "Error borrando amigo", e);
  }
};

export {
  getUsuario,
  getUsuarios,
  getAmigosUsuario,
  getUsuariosEquipo,
  postUsuario,
  postAmigo,
  putUsuario,
  putAmigo,
  deleteUsuario,
  deleteAmigo,
};
