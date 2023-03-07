import { LoginRequest, Login } from "../interfaces/login.interface";
import { Perfil } from "../interfaces/perfil.interface";
import { UsuarioRequest } from "../interfaces/usuario.interface";
import { UsuarioModel } from "../models/usuario";
import { encrypt, verify } from "../utils/password.handle";
import { Sequelize } from "sequelize";
import { generarToken } from "../utils/jwt.handle";

const login = async (loginRequest: LoginRequest, nocript: boolean = false) => {
  let isCorrect: boolean;

  const usuarioExistente = await UsuarioModel.findOne({
    where: Sequelize.or(
      { email: loginRequest.usuario, contrasenya: loginRequest.contrasenya },
      Sequelize.and({
        nick: loginRequest.usuario,
        contrasenya: loginRequest.contrasenya,
      })
    ),
    include: "perfil",
  });

  if (!usuarioExistente) {
    return "No se encuentra el usuario";
  } else {
    return generarToken(loginRequest.usuario as string);
  }

  //   if (nocript) {
  //     const passHash = usuarioExistente.perfil.contrasenya;
  //     isCorrect = await verify(contrasenya, passHash);
  //   } else {
  //     isCorrect = contrasenya == usuarioExistente.contrasenya;
  //   }

  //   if (!isCorrect) {
  //     return "Contraseña incorrecta";
  //   }
};

const registro = async (usuarioRequest: UsuarioRequest) => {
  const nick = usuarioRequest.nick as string;
  const contrasenya = usuarioRequest.contrasenya as string;
  const email = usuarioRequest.email as string;
  const perfil = usuarioRequest.perfil as Perfil;

  const checkIs = await UsuarioModel.findOne({ where: { email: email } });

  if (checkIs) {
    return "Usuario ya existente";
  }

  const passHash = await encrypt(contrasenya);

  const registrar = await UsuarioModel.create({
    nick,
    email,
    perfil,
  });
};

export { login, registro };
