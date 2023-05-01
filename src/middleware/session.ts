import { Response, NextFunction } from "express";
import { LoginRequest } from "../interfaces/login.interface";
import { verificarToken } from "../utils/jwt.handle";

const checkSession = (req: LoginRequest, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop();
    const isUser = verificarToken(`${jwt}`);
    if (!isUser) {
      res.status(401).send({ error: "Sesión no válida" });
    } else {
      req.usuario = isUser;
      next();
    }
  } catch (e) {
    res.status(401).send({ error: "Sesión no válida" });
  }
};

export { checkSession };
