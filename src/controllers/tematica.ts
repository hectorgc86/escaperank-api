import { Request, Response } from "express";
import { obtenerTematicas } from "../services/tematica";
import { handleHttp } from "../utils/error.handle";

const getTematicas = async (req: Request, res: Response) => {
  try {
    const result = await obtenerTematicas();
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo temáticas", e);
  }
};

export { getTematicas };
