import { Provincia } from "../interfaces/provincia.interface";
import { ProvinciaModel } from "../models/provincia";

const obtenerProvincia = async (id: string) => {
  const record = await ProvinciaModel.findOne({
    where: { id },
    include: "ciudades",
  });
  return record;
};

const obtenerProvincias = async () => {
  const records = await ProvinciaModel.findAll({
    include: "ciudades",
  });
  return records;
};

const insertarProvincia = async (provincia: Provincia) => {
  const record = await ProvinciaModel.create({ ...provincia });
  return record;
};

const actualizarProvincia = async (
  provinciaModel: ProvinciaModel,
  provincia: Provincia
) => {
  const record = await provinciaModel.update({ ...provincia });
  return record;
};

const borrarProvincia = async (provinciaModel: ProvinciaModel) => {
  const record = await provinciaModel.destroy();
  return record;
};

export {
  obtenerProvincia,
  obtenerProvincias,
  insertarProvincia,
  actualizarProvincia,
  borrarProvincia,
};
