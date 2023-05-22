import { Partida } from "../interfaces/partida.interface";
import { PartidaModel } from "../models/partida";
import { imagekit } from "../config/imagekit";
import * as crypto from "crypto";
import { insertarNoticia, insertarNoticiaPartida } from "./noticia";
import { Noticia } from "../interfaces/noticia.interface";
import { getSala } from "../controllers/sala";
import { obtenerSala } from "./sala";
import { obtenerEquipo, obtenerEquipoNumber, obtenerEquiposUsuario } from "./equipo";
import { Sala } from "../interfaces/salas_categorias.interface";
import { Equipo } from "../interfaces/equipo.interface";
import { Companyia } from "../interfaces/companyia.interface";
import { obtenerCompanyia } from "./companyia";
import { obtenerUsuariosEquipo } from "./usuario";
import { EquiposUsuarios } from "../interfaces/equipos_usuarios.interface";
import { Usuario } from "../interfaces/usuario.interface";

const obtenerPartida = async (id: string) => {
  const record = await PartidaModel.findOne({
    where: { id },
    include: ["equipo", "sala"],
  });
  return record;
};

const obtenerPartidas = async () => {
  const records = await PartidaModel.findAll({ include: ["equipo", "sala"] });
  return records;
};

const obtenerPartidasEquipo = async (idEquipo: string) => {
  const records = await PartidaModel.findAll({
    where: { equipoId: idEquipo },
    include: ["sala"],
  });
  return records;
};

const insertarPartida = async (partida: Partida) => {
  const genId = crypto.randomUUID();
  const imgExtension = ".jpg"
  const imagen:any = partida.imagen;
  partida.imagen = genId + "." + imgExtension;
  const record = await PartidaModel.create({ ...partida });

  if (partida.imagen != null) {
    await imagekit
      .upload({
        folder: "/img/partidas/",
        useUniqueFileName: false,
        file: imagen, //required
        fileName: genId + "." + imgExtension, //required
        extensions: [
          {
            name: "google-auto-tagging",
            maxTags: 5,
            minConfidence: 95,
          },
        ],
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }



    const sala = (await obtenerSala(partida.salaId as string)) as Sala;
    const equipo = (await obtenerEquipoNumber(partida.equipoId as number)) as Equipo;
    const companyia = (await obtenerCompanyia(sala.companyiaId as string)) as Companyia;
    const equipos_usuarios = (await obtenerUsuariosEquipo(equipo.id)) as Usuario[];
    let usuarios = "";
    
    equipos_usuarios.forEach(async (usuario) => {
      usuarios+= usuario.nick+", ";
      });

  const noticia: Noticia = {
    fecha: partida.fecha,
    titular: "Se ha jugado en "+ sala.nombre,
    textoCorto: "El equipo: "+equipo.nombre+" ha jugado una nueva partida en "+ companyia.ciudad?.nombre,
    textoLargo: "¡"+usuarios+" han realizado un tiempo de "+partida.minutos+" minutos con "+partida.segundos+" segundos! Los equipos de EscapeRank y"+ companyia.nombre +"os estamos muy agradecidos.",
    imagen:partida.imagen,
    promocionada:false,
    equipoId: partida.equipoId,
  }
  insertarNoticiaPartida(noticia);
  return record;
};

const actualizarPartida = async (
  partidaModel: PartidaModel,
  partida: Partida
) => {
  const record = await partidaModel.update({ ...partida });
  return record;
};

const borrarPartida = async (partidaModel: PartidaModel) => {
  const record = await partidaModel.destroy();
  return record;
};

export {
  obtenerPartida,
  obtenerPartidas,
  obtenerPartidasEquipo,
  insertarPartida,
  actualizarPartida,
  borrarPartida,
};
