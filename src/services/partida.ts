import { Partida } from "../interfaces/partida.interface";
import { PartidaModel } from "../models/partida";

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

const insertarPartida = async (partida: Partida) => {
  const record = await PartidaModel.create({ ...partida });
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
  insertarPartida,
  actualizarPartida,
  borrarPartida,
};
