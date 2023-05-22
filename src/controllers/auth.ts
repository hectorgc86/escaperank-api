import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { login, registro } from "../services/auth";
import { LoginRequest } from "../interfaces/login.interface";
import { RegistroRequest } from "../interfaces/registro.interface";

const postLogin = async ({ body }: LoginRequest, res: Response) => {
  try {
    const result = await login(body);
    res.send(result);
  } catch (e) {
    handleHttp(res, "Error en login", e);
  }
};

const postRegistro = async ({ body }: RegistroRequest, res: Response) => {
  try {
    const result = await registro(body);
    res.send(result);
  } catch (e) {
    handleHttp(res, e as string);
  }
};

const getValidacion = async (req: Request, res: Response) => {
  res.send({ ok: true });
};

export { postLogin, postRegistro, getValidacion };
