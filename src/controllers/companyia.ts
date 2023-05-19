import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  obtenerCompanyia,
  obtenerCompanyias,
  insertarCompanyia,
  actualizarCompanyia,
  borrarCompanyia,
  obtenerCompanyiasAValidar,
  validarCompanyia,
  desactivarCompanyia,
  activarCompanyia,
  invalidarCompanyia
} from "../services/companyia";

const getCompanyia = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await obtenerCompanyia(id);
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo companyia", e);
  }
};

const getCompanyias = async (req: Request, res: Response) => {
  try {
    const result = await obtenerCompanyias();
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo companyias", e);
  }
};

const getCompanyiasAValidar = async (req: Request, res: Response) => {
  try {
    const result = await obtenerCompanyiasAValidar();
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo companyias", e);
  }
};

const postCompanyia = async (req: Request, res: Response) => {
  try {
    const result = await insertarCompanyia(req.body);
    res.send({ result, mensaje: "Companyia guardada correctamente" });
  } catch (e) {
    handleHttp(res, "Error guardando companyia", e);
  }
};

const putCompanyia = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const result = await obtenerCompanyia(id);
    if (!result) {
      return res.send("No se encuentra companyia con ese id");
    }
    const updateResult = await actualizarCompanyia(result, body);
    return res.send(updateResult);
  } catch (e) {
    handleHttp(res, "Error actualizando companyia", e);
  }
};

const putValidarCompanyia = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const result = await obtenerCompanyia(id);
    if (!result) {
      return res.send("No se encuentra companyia con ese id");
    }
    const updateResult = await validarCompanyia(result, body);
    return res.send(updateResult);
  } catch (e) {
    handleHttp(res, "Error validando companyia", e);
  }
};
const putInvalidarCompanyia = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const result = await obtenerCompanyia(id);
    if (!result) {
      return res.send("No se encuentra companyia con ese id");
    }
    const updateResult = await invalidarCompanyia(result, body);
    return res.send(updateResult);
  } catch (e) {
    handleHttp(res, "Error validando companyia", e);
  }
};

const putDesactivarCompanyia = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const result = await obtenerCompanyia(id);
    if (!result) {
      return res.send("No se encuentra companyia con ese id");
    }
    const updateResult = await desactivarCompanyia(result, body);
    return res.send(updateResult);
  } catch (e) {
    handleHttp(res, "Error desactivando companyia", e);
  }
};

const putActivarCompanyia = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const result = await obtenerCompanyia(id);
    if (!result) {
      return res.send("No se encuentra companyia con ese id");
    }
    const updateResult = await activarCompanyia(result, body);
    return res.send(updateResult);
  } catch (e) {
    handleHttp(res, "Error desactivando companyia", e);
  }
};


const deleteCompanyia = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const result = await obtenerCompanyia(id);
    if (!result) {
      return res.send("No se encuentra companyia con ese id");
    }
    const deleteResult = await borrarCompanyia(result);
    res.send(deleteResult);
  } catch (e) {
    handleHttp(res, "Error borrando companyia", e);
  }
};

export {
  getCompanyia,
  getCompanyias,
  postCompanyia,
  putCompanyia,
  deleteCompanyia,
  getCompanyiasAValidar,
  putValidarCompanyia,
  putInvalidarCompanyia,
  putActivarCompanyia,
  putDesactivarCompanyia
};
