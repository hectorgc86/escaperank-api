import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { obtenerSalasPromocionadas } from "../services/sala";

const getSalasPromocionadas = async (req: Request, res: Response) => {
  try {
    const result = await obtenerSalasPromocionadas();
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo salas promocionadas", e);
  }
};

export { getSalasPromocionadas };
