import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { obtenerProvincias } from "../services/provincia";

const getProvincias = async (req: Request, res: Response) => {
  try {
    const result = await obtenerProvincias();
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo provincias", e);
  }
};

export { getProvincias };
