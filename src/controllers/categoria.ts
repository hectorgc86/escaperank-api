import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { obtenerCategorias } from "../services/categoria";

const getCategorias = async (req: Request, res: Response) => {
  try {
    const result = await obtenerCategorias();
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo categorías", e);
  }
};

export { getCategorias };
