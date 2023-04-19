import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { obtenerSala, obtenerSalas } from "../services/sala";
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

export { getSala, getRankingSala, getSalas };
