import { Login, LoginRequest } from "../interfaces/login.interface";
import { Usuario } from "../interfaces/usuario.interface";
import { UsuarioModel } from "../models/usuario";
import { Op, Sequelize, Transaction, col, fn } from "sequelize";
import { generarToken } from "../utils/jwt.handle";
import { RegistroRequest } from "../interfaces/registro.interface";
import { PerfilModel } from "../models/perfil";
import { CompanyiaModel } from "../models/companyia";
import { CiudadModel } from "../models/ciudad";
import { Ciudad } from "../interfaces/ciudad.interface";
import { ProvinciaModel } from "../models/provincia";
import { Provincia } from "../interfaces/provincia.interface";
import { obtenerCompanyiaPorUsuario } from "./companyia";
import { Companyia } from "../interfaces/companyia.interface";
import { sequelize } from "../config/db";

const login = async (loginRequest: LoginRequest) => {
  const usuarioExistente = (await UsuarioModel.findOne({
    where: Sequelize.or(
      {
        email: loginRequest.usuario,
        contrasenya: loginRequest.contrasenya,
        activado: true,
      },
      Sequelize.and({
        nick: loginRequest.usuario,
        contrasenya: loginRequest.contrasenya,
        activado: true,
      })
    ),
    include: "perfil",
  })) as Usuario;

  if (!usuarioExistente) {
    throw "No se encuentra el usuario";
  } else {
    let response: Login = generarToken(
      usuarioExistente.id as unknown as string
    );

    if (usuarioExistente.rol === "GAMEMASTER") {
      let companyia = (await obtenerCompanyiaPorUsuario(
        usuarioExistente.id!
      )) as Companyia;

      response.companyiaId = companyia !== null ? companyia.id: null;
    }

    response.rol = usuarioExistente.rol;

    return response;
  }
};

const registro = async (registroRequest: RegistroRequest) => {
  const { usuario, companyia } = registroRequest;
  const { nick, email, contrasenya, nombre, telefono, nacido } = usuario || {};

  try {
    await sequelize.transaction(async (transaction) => {
      const checkUsuario = await UsuarioModel.findOne({
        where: {
          [Op.or]: [{ email }, { nick }],
        },
      });

      if (checkUsuario) {
        throw new Error("Usuario ya existente");
      }

      const usuarioCreado = (await UsuarioModel.create(
        {
          nick,
          email,
          contrasenya,
          rol: companyia == null ? "USER": "GAMEMASTER",
          activado: true,
        },
        { transaction }
      )) as Usuario;

      const perfil = await PerfilModel.create(
        {
          nombre,
          telefono,
          numeroPartidas: 0,
          partidasGanadas: 0,
          partidasPerdidas: 0,
          avatar: "user.png",
          nacido,
          usuarioId: usuarioCreado.id
        },
        { transaction }
      );

      if (companyia) {
        const ciudadId = await validarLocalizacionCompanyia(
          companyia,
          transaction
        );

        const genId = crypto.randomUUID();

        await CompanyiaModel.create({
          id: genId,
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
          usuarioId: usuarioCreado!.id,
          ciudadId,
        }, { transaction });
      }
    });
  } catch (error: any) {
    throw error.message;
  }
};

async function validarLocalizacionCompanyia(
  companyia: any,
  transaction: Transaction
) {
  const ciudad: string | null | undefined = companyia.ciudad!;
  const provincia: string | null | undefined = companyia.provincia!;
  const latitud: string | null | undefined = companyia.latitud!;
  const longitud: string | null | undefined = companyia.longitud!;

  let resultProvincia = (await ProvinciaModel.findOne({
    where: sequelize.where(
      sequelize.fn("LOWER", sequelize.col("ProvinciaModel.nombre")),
      "LIKE",
      `%${ciudad!.toLowerCase()}%`
    ),
  })) as Provincia;

  if (resultProvincia == null) {
    const newProvincia = (await CiudadModel.create(
      {
        nombre: provincia,
        latitud: latitud,
        longitud: longitud,
      },
      { transaction }
    )) as Provincia;

    resultProvincia = newProvincia;
  }

  let resultCiudad = (await CiudadModel.findOne({
    where: sequelize.where(
      sequelize.fn("LOWER", sequelize.col("CiudadModel.nombre")),
      "LIKE",
      `%${ciudad!.toLowerCase()}%`
    ),
  })) as Ciudad;

  if (resultCiudad == null) {
    const newCiudad = (await CiudadModel.create(
      {
        nombre: ciudad,
        ciudadOrigen: ciudad,
        latitud: latitud,
        longitud: longitud,
        provinciaId: resultProvincia.id,
      },
      { transaction }
    )) as Ciudad;

    resultCiudad = newCiudad;
  }

  return resultCiudad.id;
}

export { login, registro };
