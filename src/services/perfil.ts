import { Perfil } from "../interfaces/perfil.interface";
import { PerfilModel } from "../models/perfil";

const obtenerPerfil = async (id: string) => {
  const record = await PerfilModel.findOne({
    where: { id },
    include: "usuario",
  });
  return record;
};

const obtenerPerfiles = async () => {
  const records = await PerfilModel.findAll({ include: "usuario" });
  return records;
};

const insertarPerfil = async (perfil: Perfil) => {
  const record = await PerfilModel.create({ ...perfil });
  return record;
};

const actualizarPerfil = async (perfilModel: PerfilModel, perfil: Perfil) => {
  const record = await perfilModel.update({ ...perfil });
  return record;
};

const borrarPerfil = async (perfilModel: PerfilModel) => {
  const record = await perfilModel.destroy();
  return record;
};

export {
  obtenerPerfil,
  obtenerPerfiles,
  insertarPerfil,
  actualizarPerfil,
  borrarPerfil,
};
