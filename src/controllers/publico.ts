import { Request, Response } from "express";
import { obtenerPublico } from "../services/publico";
import { handleHttp } from "../utils/error.handle";

const getPublico = async (req: Request, res: Response) => {
  try {
    const result = await obtenerPublico();
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo público", e);
  }
};

export { getPublico };
