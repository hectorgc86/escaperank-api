import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { login, registro } from "../services/auth";
import { LoginRequest } from "../interfaces/login.interface";

const postLogin = async ({ body }: LoginRequest, res: Response) => {
  try {
    const nocript = body.nocript ? true : false;

    const result = await login(body, nocript);
    res.send({
      usuarioId: body.usuario,
      accessToken: result,
    });
  } catch (e) {
    handleHttp(res, "Error en login", e);
  }
};

const postRegistro = async ({ body }: Request, res: Response) => {
  try {
    const result = await registro(body);
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error en registro", e);
  }
};

const getValidacion = async (req: Request, res: Response) => {
  res.send({ ok: true });
};

export { postLogin, postRegistro, getValidacion };
