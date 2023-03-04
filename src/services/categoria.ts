import { Categoria } from "../interfaces/categoria.interface";
import { CategoriaModel } from "../models/categoria";

const obtenerCategoria = async (id: string) => {
  const record = await CategoriaModel.findOne({ where: { id } });
  return record;
};

const obtenerCategorias = async () => {
  const records = await CategoriaModel.findAll();
  return records;
};

const insertarCategoria = async (categoria: Categoria) => {
  const record = await CategoriaModel.create({ ...categoria });
  return record;
};

const actualizarCategoria = async (
  categoriaModel: CategoriaModel,
  categoria: Categoria
) => {
  const record = await categoriaModel.update({ ...categoria });
  return record;
};

const borrarCategoria = async (categoriaModel: CategoriaModel) => {
  const record = await categoriaModel.destroy();
  return record;
};

export {
  obtenerCategoria,
  obtenerCategorias,
  insertarCategoria,
  actualizarCategoria,
  borrarCategoria,
};
