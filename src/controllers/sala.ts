import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  guardarSala,
  obtenerSala,
  obtenerSalas,
  obtenerSalasPorCompanyia,
  actualizarSala,
  cerrarSala,
  abrirSala
} from "../services/sala";
import { obtenerRankingSala } from "../services/estadisticas";

const getSala = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await obtenerSala(id);
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo sala", e);
  }
};

const getRankingSala = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await obtenerRankingSala(id);
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo ranking sala", e);
  }
};

const getSalas = async (req: Request, res: Response) => {
  try {
    const grupo = req.query.grupo as unknown as string;
    const tipo = req.query.tipo as unknown as string;
    const busqueda = req.query.busqueda as unknown as string;
    const offset = parseInt(req.query.offset as unknown as string);
    const limit = parseInt(req.query.limit as unknown as string);

    const result = await obtenerSalas(grupo, tipo, busqueda, offset, limit);
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo salas", e);
  }
};

const getSalasCompanyia = async (req: Request, res: Response) => {
  try {
    const companyiaId = req.params.id as unknown as string;
    console.log(companyiaId);
    const result = await obtenerSalasPorCompanyia(companyiaId);
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo salas", e);
  }
};

const postSala = async ({ body }: Request, res: Response) => {
  try {
    const result = await guardarSala(body);
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error guardando sala", e);
  }
};

const putCerrarSala = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const result = await obtenerSala(id);
    if (!result) {
      return res.send("No se encuentra sala con ese id");
    }
    const updateResult = await cerrarSala(result, body);
    return res.send(updateResult);
  } catch (e) {
    handleHttp(res, "Error actualizando ciudad", e);
  }
};

const putAbrirSala = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const result = await obtenerSala(id);
    if (!result) {
      return res.send("No se encuentra sala con ese id");
    }
    const updateResult = await abrirSala(result, body);
    return res.send(updateResult);
  } catch (e) {
    handleHttp(res, "Error actualizando ciudad", e);
  }
};

const putSala =  async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const result = await obtenerSala(id);
    if (!result) {
      return res.send("No se encuentra sala con ese id");
    }
    const updateResult = await actualizarSala(result, body);
    return res.send(updateResult);
  } catch (e) {
    handleHttp(res, "Error actualizando ciudad", e);
  }
};


export { getSala, getRankingSala, getSalas, getSalasCompanyia, postSala,putCerrarSala,putAbrirSala,putSala};
