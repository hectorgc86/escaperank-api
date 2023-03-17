import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { obtenerSalas } from "../services/sala";

const getSalas = async (req: Request, res: Response) => {
  try {
    const result = await obtenerSalas();
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo salas", e);
  }
};

export { getSalas };
