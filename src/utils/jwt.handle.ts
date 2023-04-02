import { sign, verify } from "jsonwebtoken";
import { Login } from "../interfaces/login.interface";
import moment from "moment";

const JWT_SECRET = process.env.JWT_SECRET || "token.01010101";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "3600s";

const generarToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });

  let expiracion = moment();

  expiracion = expiracion.add(
    JWT_EXPIRES_IN.substring(0, JWT_EXPIRES_IN.length - 1),
    "seconds"
  );

  const response: Login = {
    usuarioId: id,
    tipoToken: "jwt",
    expiraEn: expiracion.toLocaleString(),
    tokenAcceso: jwt,
  };

  return response;
};

const verificarToken = (jwt: string) => {
  const isOk = verify(jwt, JWT_SECRET);
  return isOk;
};

export { generarToken, verificarToken };
