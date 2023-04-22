import { LoginRequest } from "../interfaces/login.interface";
import { Usuario } from "../interfaces/usuario.interface";
import { UsuarioModel } from "../models/usuario";
import { Op, Sequelize } from "sequelize";
import { generarToken } from "../utils/jwt.handle";
import { RegistroRequest } from "../interfaces/registro.interface";
import { PerfilModel } from "../models/perfil";
import { CompanyiaModel } from "../models/companyia";
import { CiudadModel } from "../models/ciudad";
import { Ciudad } from "../interfaces/ciudad.interface";
import { ProvinciaModel } from "../models/provincia";
import { Provincia } from "../interfaces/provincia.interface";

const login = async (loginRequest: LoginRequest, nocript: boolean = false) => {
  const usuarioExistente = (await UsuarioModel.findOne({
    where: Sequelize.or(
      { email: loginRequest.usuario, contrasenya: loginRequest.contrasenya },
      Sequelize.and({
        nick: loginRequest.usuario,
        contrasenya: loginRequest.contrasenya,
      })
    ),
    include: "perfil",
  })) as Usuario;

  if (!usuarioExistente) {
    throw "No se encuentra el usuario";
  } else {
    return generarToken(usuarioExistente.id as unknown as string);
  }
};

const registro = async (registroRequest: RegistroRequest) => {
  const { usuario, companyia } = registroRequest;
  const { nick, email, contrasenya, nombre, telefono, nacido } = usuario || {};

  const checkUsuario = await UsuarioModel.findOne({
    where: {
      [Op.or]: [{ email }, { nick }],
    },
  });

  if (checkUsuario) {
    return "Usuario ya existente";
  }

  const usuarioCreado = (await UsuarioModel.create({
    nick,
    email,
    contrasenya,
    activado: true,
  })) as Usuario;

  const perfil = await PerfilModel.create({
    nombre,
    telefono,
    numeroPartidas: 0,
    partidasGanadas: 0,
    partidasPerdidas: 0,
    avatar: "default.png",
    nacido,
    usuarioId: usuarioCreado.id,
  });

  if (companyia) {
    const ciudadId = await validarLocalizacionCompanyia(
      companyia.ciudad,
      companyia.provincia
    );

    const companyiaCreada = await CompanyiaModel.create({
      nombre: companyia.nombre,
      direccion: companyia.direccion + " " + companyia.numeroLocal,
      email: companyia.email,
      telefono: companyia.telefono,
      web: companyia.web,
      latitud: companyia.latitud,
      longitud: companyia.longitud,
      numeroLocal: companyia.numeroLocal,
      codigoPostal: companyia.codigoPostal,
      tripAdvisor: "",
      facebook: "",
      googleMaps: "",
      numeroOpiniones: "",
      instagram: "",
      puntuacion: "0",
      rango: "0",
      ciudadId,
    });
  }
};

async function validarLocalizacionCompanyia(
  ciudad: string | null | undefined,
  provincia: string | null | undefined
) {
  const result = (await CiudadModel.findOne({
    where: {
      nombre: {
        [Op.iLike]: `%${ciudad}%`,
      },
      "$provincia.nombre$": {
        [Op.iLike]: `%${provincia}%`,
      },
    },
    include: [
      {
        model: ProvinciaModel,
        as: "provincia",
        attributes: ["id", "nombre"],
      },
    ],
    limit: 1,
  })) as Ciudad;

  if (!result) {
    const checkProvincia = (await ProvinciaModel.findOrCreate({
      where: {
        nombre: provincia,
      },
      defaults: {
        latitud: "0",
        longitud: "0",
      },
    })) as Provincia;

    const checkCiudad = (await CiudadModel.create({
      nombre: ciudad,
      ciudadOrigen: ciudad,
      latitud: "0",
      longitud: "0",
      provinciaId: checkProvincia.id,
    })) as Ciudad;

    return checkCiudad.id;
  }

  return result.id;
}

export { login, registro };
