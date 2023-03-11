import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { obtenerDificultades } from "../services/dificultad";

const getDificultades = async (req: Request, res: Response) => {
  try {
    const result = await obtenerDificultades();
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo dificultades", e);
  }
};

export { getDificultades };
