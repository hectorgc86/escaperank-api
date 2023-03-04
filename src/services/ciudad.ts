import { Ciudad } from "../interfaces/ciudad.interface";
import { CiudadModel } from "../models/ciudad";
import { CompanyiaModel } from "../models/companyia";

const obtenerCiudad = async (id: string) => {
  const record = await CiudadModel.findOne({
    where: { id },
    include: "companyias",
  });
  return record;
};

const obtenerCiudades = async () => {
  const records = await CiudadModel.findAll({ include: "companyias" });
  return records;
};

const insertarCiudad = async (ciudad: Ciudad) => {
  const record = await CiudadModel.create({ ...ciudad });
  return record;
};

const actualizarCiudad = async (ciudadModel: CiudadModel, ciudad: Ciudad) => {
  const record = await ciudadModel.update({ ...ciudad });
  return record;
};

const borrarCiudad = async (ciudadModel: CiudadModel) => {
  const record = await CiudadModel.destroy();
  return record;
};

export {
  obtenerCiudad,
  obtenerCiudades,
  insertarCiudad,
  actualizarCiudad,
  borrarCiudad,
};
