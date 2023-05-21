import { SalaModel } from "../models/sala";
import { CompanyiaModel } from "../models/companyia";
import { CiudadModel } from "../models/ciudad";
import { CategoriaModel } from "../models/categoria";
import { TematicaModel } from "../models/tematica";
import { PublicoModel } from "../models/publico";
import { DificultadModel } from "../models/dificultad";
import { Op, Sequelize } from "sequelize";
import { Sala } from "../interfaces/sala.interface";
import { SalasCategoriasModel } from "../models/salas_categorias";
import { SalasTematicasModel } from "../models/salas_tematicas";
import { SalasPublicoModel } from "../models/salas_publico";
import { imagekit } from "../config/imagekit";
import * as crypto from "crypto";

const obtenerSala = async (id: string) => {
  const record = await SalaModel.findOne({
    where: { id },
    include: [
      {
        model: CompanyiaModel,
        as: "companyia",
        include: [{ model: CiudadModel, as: "ciudad" }],
      },
      { model: CategoriaModel, as: "categorias" },
      { model: TematicaModel, as: "tematicas" },
      { model: PublicoModel, as: "publico" },
      { model: DificultadModel, as: "dificultad" },
    ],
  });
  return record;
};

const obtenerSalas = async (
  grupo: string,
  tipo: string,
  busqueda: string,
  offset: number,
  limit: number
) => {
  if (grupo === "Promocionada") {
    return obtenerSalasPromocionadas();
  }

  const records = await SalaModel.findAll({
    where: {
      [Op.or]: [
        {
          nombre: { [Op.substring]: busqueda },
        },
        {
          "$companyia.nombre$": {
            [Op.in]: Sequelize.literal(
              `(SELECT nombre FROM companyias WHERE nombre LIKE '%${busqueda}%')`
            ),
          },
        },
        {
          "$companyia.ciudad.nombre$": {
            [Op.in]: Sequelize.literal(
              `(SELECT nombre FROM ciudades WHERE nombre LIKE '%${busqueda}%')`
            ),
          },
        },
      ],
    },
    include: [
      {
        model: CompanyiaModel,
        as: "companyia",
        include: [{ model: CiudadModel, as: "ciudad" }],
      },
      {
        model: CategoriaModel,
        as: "categorias",
        where: { tipo: tipo },
        required: grupo === "Categoría",
      },
      {
        model: TematicaModel,
        as: "tematicas",
        where: { tipo: tipo },
        required: grupo === "Temática",
      },
      {
        model: PublicoModel,
        as: "publico",
        where: { tipo: tipo },
        required: grupo === "Público",
      },
      {
        model: DificultadModel,
        as: "dificultad",
        where: { tipo: tipo },
        required: grupo === "Dificultad",
      },
    ],
    offset,
    limit,
    subQuery: false,
  });

  return records;
};

const obtenerSalasPromocionadas = async () => {
  const records = await SalaModel.findAll({
    where: { promocionada: true },
    include: [
      {
        model: CompanyiaModel,
        as: "companyia",
        include: [{ model: CiudadModel, as: "ciudad" }],
      },
    ],
    limit: 10,
  });
  return records;
};

const obtenerSalasPorCompanyia = async (companyiaId: string) => {
  const records = await SalaModel.findAll({
    where: { companyiaId: companyiaId },
    include: [
      {
        model: CompanyiaModel,
        as: "companyia",
        include: [{ model: CiudadModel, as: "ciudad" }],
      },
      {
        model: CategoriaModel,
        as: "categorias",
      },
      {
        model: TematicaModel,
        as: "tematicas",
      },
      {
        model: PublicoModel,
        as: "publico",
      },
      {
        model: DificultadModel,
        as: "dificultad",
      },
    ],
  });
  return records;
};

const guardarSala = async (sala: Sala) => {
  try {
    const genId = crypto.randomUUID();
    const imgExtension = sala.imagenEstrecha?.split(";")[0].split("/")[1];
    const result = await SalaModel.create(
      {
        id: genId,
        descripcion: sala.descripcion,
        minimoJugadores: sala.minimoJugadores,
        maximoJugadores: sala.maximoJugadores,
        nombre: sala.nombre,
        promocionada: sala.promocionada,
        duracion: sala.duracion,
        precioMinimo: sala.precioMinimo,
        precioMaximo: sala.precioMaximo,
        urlReserva: sala.urlReserva,
        edadPublico: sala.edadPublico,
        proximamente: sala.proximamente,
        visto: sala.visto,
        modoCombate: sala.modoCombate,
        textoCombate: sala.textoCombate,
        salaIgual: sala.salaIgual,
        enOferta: sala.enOferta,
        textoOferta: sala.textoOferta,
        numeroResenyas: sala.numeroResenyas,
        regaloBonus: sala.regaloBonus,
        disponibleIngles: sala.disponibleIngles,
        adaptadoMinusvalidos: sala.adaptadoMinusvalidos,
        adaptadoCiegos: sala.adaptadoCiegos,
        adaptadoSordos: sala.adaptadoSordos,
        adaptadoEmbarazadas: sala.adaptadoEmbarazadas,
        noClaustrofobicos: sala.noClaustrofobicos,
        imagenAncha: genId + "." + imgExtension,
        imagenEstrecha: genId + "." + imgExtension,
        jugadoresIncluidos: sala.jugadoresIncluidos,
        precioJugadorAdicional: sala.precioJugadorAdicional,
        validez: sala.validez,
        comoReservar: sala.comoReservar,
        terminosReserva: sala.terminosReserva,
        otrosDatos: sala.otrosDatos,
        companyiaId: sala.companyiaId,
        dificultadId: sala.dificultadId,
        categorias: sala.categorias,
        publico: sala.publico,
        tematicas: sala.tematicas,
      }
    );

    if (sala.tematicas != null && sala.tematicas.length > 0) {
      sala.tematicas.forEach(async (tematica) => {
        if (tematica != null && tematica.id != null) {
          const salaTematica = await SalasTematicasModel.create(
            {
              salaId: genId,
              tematicaId: tematica.id,
            }
          );
        }
      });
    }

    if (sala.categorias != null && sala.categorias.length > 0) {
      sala.categorias.forEach(async (categoria) => {
        if (categoria != null && categoria.id != null) {
          const salaCategoria = await SalasCategoriasModel.create(
            {
              salaId: genId,
              categoriaId: categoria.id,
            }
          );
        }
      });
    }

    if (sala.publico != null && sala.publico.length > 0) {
      sala.publico.forEach(async (publico) => {
        if (publico != null && publico.id != null) {
          const salaPublico = await SalasPublicoModel.create(
            {
              salaId: genId,
              publicoId: publico.id,
            }
          );
        }
      });
    }

    if (sala.imagenEstrecha!=null){
    await imagekit.upload({
      folder:"/img/salas/estrechas/",
      useUniqueFileName:false,
      file :sala.imagenEstrecha, //required
      fileName : genId + "." + imgExtension,   //required
      extensions: [
          {
              name: "google-auto-tagging",
              maxTags: 5,
              minConfidence: 95
          }
      ]
  }).then(response => {
      console.log(response);
  }).catch(error => {
      console.log(error);
  });
}

   // t.commit;
    return result;
  } catch (error) {
    // Deshacer la transacción en caso de error
    console.log("Error en la transacción, rollback realizado "+error);
  }
};

const actualizarSala = async (salaModel: SalaModel, sala: Sala) => {
  const genId = crypto.randomUUID();
  const imgExtension = sala.imagenEstrecha?.split(";")[0].split("/")[1];
  let imagen = sala.imagenEstrecha;
  if (imagen!=undefined){
  sala.imagenAncha= genId + "." + imgExtension;
  sala.imagenEstrecha= genId + "." + imgExtension;
  }
  const record = await salaModel.update({ ...sala });
  if (imagen!=undefined){
    await imagekit.upload({
      folder:"/img/salas/estrechas/",
      useUniqueFileName:false,
      file :imagen, //required
      fileName : genId + "." + imgExtension,   //required
      extensions: [
          {
              name: "google-auto-tagging",
              maxTags: 5,
              minConfidence: 95
          }
      ]
  }).then(response => {
      console.log(response);
  }).catch(error => {
      console.log(error);
  });
}
  return record;
};

const cerrarSala = async (salaModel: SalaModel, sala: Sala) =>{
  sala.desactivada=true;
  const record = await salaModel.update({ ...sala});
  return record;
}
const abrirSala = async (salaModel: SalaModel, sala: Sala)=>{
  sala.desactivada=false;
  const record = await salaModel.update({ ...sala});
  return record;
}


export { obtenerSala, obtenerSalas, obtenerSalasPorCompanyia, guardarSala,actualizarSala,cerrarSala,abrirSala };
