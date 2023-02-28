import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle"; 
import { CategoriaModel } from '../models/categoria';

const getCategoria = async (req: Request, res: Response) => {
  try{
    const { id } = req.params;
    const record = await CategoriaModel.findOne({ where: { id }});
    return res.send(record);
  }catch(e){
    handleHttp(res, "Error obteniendo categoría", e);
  }
};

const getCategorias = async (req: Request, res: Response) => {
  try{
    const records = await CategoriaModel.findAll();
    return res.send(records);
  }catch(e){
    handleHttp(res, "Error obteniendo categorías", e);
  }
};

const putCategoria = async (req: Request, res: Response) => {
  try{
    const { id } = req.params;
    const record = await CategoriaModel.findOne({ where: { id }});

    if(!record){
      return res.send("No se encuentra categoría con ese id");
    }
    const updateRecord = await record.update({});
    return res.send(updateRecord);
  }catch(e){
    handleHttp(res, "Error actualizando categoría", e);
  }
;}


const postCategoria = async (req: Request, res: Response) => {
  try{
    const record = await CategoriaModel.create({...req.body });
    return res.send({ record, mensaje: "Categoría guardada correctamente"});
  }catch(e){
    handleHttp(res, "Error guardando categoría", e);
  }
};


const deleteCategoria = async (req: Request, res: Response) => {
  try{
    const { id } = req.params;
    const record = await CategoriaModel.findOne({ where: { id }});

    if(!record){
      return res.send("No se encuentra categoría con ese id");
    }
    const deleteRecord = await record.destroy();
    return res.send(deleteRecord);
  }catch(e){
    handleHttp(res, "Error borrando categoría", e);
  }
};

export { getCategoria, getCategorias, putCategoria, postCategoria, deleteCategoria }
