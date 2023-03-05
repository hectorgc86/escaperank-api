import { Dificultad } from "../interfaces/dificultad.interface";
import { DificultadModel } from "../models/dificultad";

const obtenerDificultad = async (id: string) => {
  const record = await DificultadModel.findOne({
    where: { id },
    include: "salas",
  });
  return record;
};

const obtenerDificultades = async () => {
  const records = await DificultadModel.findAll({ include: "salas" });
  return records;
};

const insertarDificultad = async (dificultad: Dificultad) => {
  const record = await DificultadModel.create({ ...dificultad });
  return record;
};

const actualizarDificultad = async (
  dificultadModel: DificultadModel,
  dificultad: Dificultad
) => {
  const record = await dificultadModel.update({ ...dificultad });
  return record;
};

const borrarDificultad = async (dificultadModel: DificultadModel) => {
  const record = await dificultadModel.destroy();
  return record;
};

export {
  obtenerDificultad,
  obtenerDificultades,
  insertarDificultad,
  actualizarDificultad,
  borrarDificultad,
};
