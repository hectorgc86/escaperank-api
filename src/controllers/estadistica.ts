import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  obtenerEstadisticasCompanyia, obtenerEstadisticasSala,
} from "../services/estadisticas";

const getEstadisticasCompanyia = async (req: Request, res: Response) => {
  try {
    console.log(req.params);
    const { idCompanyia} = req.body;
    const result = await obtenerEstadisticasCompanyia(idCompanyia);
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo estadisticas", e);
  }
};

const getEstadisticasSala = async (req: Request, res: Response) => {
  try {
    const { idSala} = req.body;
    const result = await obtenerEstadisticasSala(idSala);
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo estadisticas", e);
  }
};



export {
  getEstadisticasCompanyia,
  getEstadisticasSala
};
