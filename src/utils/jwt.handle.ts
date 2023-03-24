import { sign, verify } from "jsonwebtoken";
import { Login } from "../interfaces/login.interface";
import { Usuario } from "../interfaces/usuario.interface";

const JWT_SECRET = process.env.JWT_SECRET || "token.01010101";

const generarToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: "1h",
  });

  const response = {
    usuarioId: id,
    accessToken: jwt,
  };

  return response;
};

const verificarToken = (jwt: string) => {
  const isOk = verify(jwt, JWT_SECRET);
  return isOk;
};

export { generarToken, verificarToken };
