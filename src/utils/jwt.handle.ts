import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "token.01010101";

const generarToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: "1h",
  });

  return jwt;
};

const verificarToken = (jwt: string) => {
  const isOk = verify(jwt, JWT_SECRET);
  return isOk;
};

export { generarToken, verificarToken };
