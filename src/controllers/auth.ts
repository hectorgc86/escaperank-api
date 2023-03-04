import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { login, registro } from "../services/auth";

const postLogin = async ({ body }: Request, res: Response) => {
  try {
    const result = await login(body);
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo categoría", e);
  }
};

const postRegistro = async (req: Request, res: Response) => {
  try {
    const result = await registro();
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error obteniendo categorías", e);
  }
};

export { postLogin, postRegistro }
