import type { Sequelize } from "sequelize";
import { categorias as _categorias } from "./categorias";
import type { categoriasAttributes, categoriasCreationAttributes } from "./categorias";
import { ciudades as _ciudades } from "./ciudades";
import type { ciudadesAttributes, ciudadesCreationAttributes } from "./ciudades";
import { companyias as _companyias } from "./companyias";
import type { companyiasAttributes, companyiasCreationAttributes } from "./companyias";
import { dificultades as _dificultades } from "./dificultades";
import type { dificultadesAttributes, dificultadesCreationAttributes } from "./dificultades";
import { equipos as _equipos } from "./equipos";
import type { equiposAttributes, equiposCreationAttributes } from "./equipos";
import { noticias as _noticias } from "./noticias";
import type { noticiasAttributes, noticiasCreationAttributes } from "./noticias";
import { partidas as _partidas } from "./partidas";
import type { partidasAttributes, partidasCreationAttributes } from "./partidas";
import { perfiles as _perfiles } from "./perfiles";
import type { perfilesAttributes, perfilesCreationAttributes } from "./perfiles";
import { publico as _publico } from "./publico";
import type { publicoAttributes, publicoCreationAttributes } from "./publico";
import { salas as _salas } from "./salas";
import type { salasAttributes, salasCreationAttributes } from "./salas";
import { salas_categorias as _salas_categorias } from "./salas_categorias";
import type { salas_categoriasAttributes, salas_categoriasCreationAttributes } from "./salas_categorias";
import { salas_publico as _salas_publico } from "./salas_publico";
import type { salas_publicoAttributes, salas_publicoCreationAttributes } from "./salas_publico";
import { salas_tematicas as _salas_tematicas } from "./salas_tematicas";
import type { salas_tematicasAttributes, salas_tematicasCreationAttributes } from "./salas_tematicas";
import { tematicas as _tematicas } from "./tematicas";
import type { tematicasAttributes, tematicasCreationAttributes } from "./tematicas";
import { usuarios_amigos as _usuarios_amigos } from "./usuarios_amigos";
import type { usuarios_amigosAttributes, usuarios_amigosCreationAttributes } from "./usuarios_amigos";
import { valoraciones as _valoraciones } from "./valoraciones";
import type { valoracionesAttributes, valoracionesCreationAttributes } from "./valoraciones";

export {
  _categorias as categorias,
  _ciudades as ciudades,
  _companyias as companyias,
  _dificultades as dificultades,
  _equipos as equipos,
  _noticias as noticias,
  _partidas as partidas,
  _perfiles as perfiles,
  _publico as publico,
  _salas as salas,
  _salas_categorias as salas_categorias,
  _salas_publico as salas_publico,
  _salas_tematicas as salas_tematicas,
  _tematicas as tematicas,
  _usuarios_amigos as usuarios_amigos,
  _valoraciones as valoraciones,
};

export type {
  categoriasAttributes,
  categoriasCreationAttributes,
  ciudadesAttributes,
  ciudadesCreationAttributes,
  companyiasAttributes,
  companyiasCreationAttributes,
  dificultadesAttributes,
  dificultadesCreationAttributes,
  equiposAttributes,
  equiposCreationAttributes,
  noticiasAttributes,
  noticiasCreationAttributes,
  partidasAttributes,
  partidasCreationAttributes,
  perfilesAttributes,
  perfilesCreationAttributes,
  publicoAttributes,
  publicoCreationAttributes,
  salasAttributes,
  salasCreationAttributes,
  salas_categoriasAttributes,
  salas_categoriasCreationAttributes,
  salas_publicoAttributes,
  salas_publicoCreationAttributes,
  salas_tematicasAttributes,
  salas_tematicasCreationAttributes,
  tematicasAttributes,
  tematicasCreationAttributes,
  usuarios_amigosAttributes,
  usuarios_amigosCreationAttributes,
  valoracionesAttributes,
  valoracionesCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const categorias = _categorias.initModel(sequelize);
  const ciudades = _ciudades.initModel(sequelize);
  const companyias = _companyias.initModel(sequelize);
  const dificultades = _dificultades.initModel(sequelize);
  const equipos = _equipos.initModel(sequelize);
  const noticias = _noticias.initModel(sequelize);
  const partidas = _partidas.initModel(sequelize);
  const perfiles = _perfiles.initModel(sequelize);
  const publico = _publico.initModel(sequelize);
  const salas = _salas.initModel(sequelize);
  const salas_categorias = _salas_categorias.initModel(sequelize);
  const salas_publico = _salas_publico.initModel(sequelize);
  const salas_tematicas = _salas_tematicas.initModel(sequelize);
  const tematicas = _tematicas.initModel(sequelize);
  const usuarios_amigos = _usuarios_amigos.initModel(sequelize);
  const valoraciones = _valoraciones.initModel(sequelize);

  categorias.belongsToMany(salas, { as: 'sala_id_salas_salas_categoria', through: salas_categorias, foreignKey: "categoria_id", otherKey: "sala_id" });
  equipos.belongsToMany(salas, { as: 'sala_id_salas', through: partidas, foreignKey: "equipo_id", otherKey: "sala_id" });
  publico.belongsToMany(salas, { as: 'sala_id_salas_salas_publicos', through: salas_publico, foreignKey: "publico_id", otherKey: "sala_id" });
  salas.belongsToMany(categorias, { as: 'categoria_id_categoria', through: salas_categorias, foreignKey: "sala_id", otherKey: "categoria_id" });
  salas.belongsToMany(equipos, { as: 'equipo_id_equipos', through: partidas, foreignKey: "sala_id", otherKey: "equipo_id" });
  salas.belongsToMany(publico, { as: 'publico_id_publicos', through: salas_publico, foreignKey: "sala_id", otherKey: "publico_id" });
  salas.belongsToMany(tematicas, { as: 'tematica_id_tematicas', through: salas_tematicas, foreignKey: "sala_id", otherKey: "tematica_id" });
  tematicas.belongsToMany(salas, { as: 'sala_id_salas_salas_tematicas', through: salas_tematicas, foreignKey: "tematica_id", otherKey: "sala_id" });
  usuarios.belongsToMany(usuarios, { as: 'amigo_id_usuarios', through: usuarios_amigos, foreignKey: "usuario_id", otherKey: "amigo_id" });
  usuarios.belongsToMany(usuarios, { as: 'usuario_id_usuarios', through: usuarios_amigos, foreignKey: "amigo_id", otherKey: "usuario_id" });
  salas_categorias.belongsTo(categorias, { as: "categorium", foreignKey: "categoria_id"});
  categorias.hasMany(salas_categorias, { as: "salas_categoria", foreignKey: "categoria_id"});
  companyias.belongsTo(ciudades, { as: "ciudad", foreignKey: "ciudad_id"});
  ciudades.hasMany(companyias, { as: "companyia", foreignKey: "ciudad_id"});
  noticias.belongsTo(companyias, { as: "companyium", foreignKey: "companyia_id"});
  companyias.hasMany(noticias, { as: "noticia", foreignKey: "companyia_id"});
  salas.belongsTo(companyias, { as: "companyium", foreignKey: "companyia_id"});
  companyias.hasMany(salas, { as: "salas", foreignKey: "companyia_id"});
  salas.belongsTo(dificultades, { as: "dificultad", foreignKey: "dificultad_id"});
  dificultades.hasMany(salas, { as: "salas", foreignKey: "dificultad_id"});
  noticias.belongsTo(equipos, { as: "equipo", foreignKey: "equipo_id"});
  equipos.hasMany(noticias, { as: "noticia", foreignKey: "equipo_id"});
  partidas.belongsTo(equipos, { as: "equipo", foreignKey: "equipo_id"});
  equipos.hasMany(partidas, { as: "partidas", foreignKey: "equipo_id"});
  ciudades.belongsTo(provincias, { as: "provincium", foreignKey: "provincia_id"});
  provincias.hasMany(ciudades, { as: "ciudades", foreignKey: "provincia_id"});
  salas_publico.belongsTo(publico, { as: "publico", foreignKey: "publico_id"});
  publico.hasMany(salas_publico, { as: "salas_publicos", foreignKey: "publico_id"});
  partidas.belongsTo(salas, { as: "sala", foreignKey: "sala_id"});
  salas.hasMany(partidas, { as: "partidas", foreignKey: "sala_id"});
  salas_categorias.belongsTo(salas, { as: "sala", foreignKey: "sala_id"});
  salas.hasMany(salas_categorias, { as: "salas_categoria", foreignKey: "sala_id"});
  salas_publico.belongsTo(salas, { as: "sala", foreignKey: "sala_id"});
  salas.hasMany(salas_publico, { as: "salas_publicos", foreignKey: "sala_id"});
  salas_tematicas.belongsTo(salas, { as: "sala", foreignKey: "sala_id"});
  salas.hasMany(salas_tematicas, { as: "salas_tematicas", foreignKey: "sala_id"});
  valoraciones.belongsTo(salas, { as: "sala", foreignKey: "sala_id"});
  salas.hasMany(valoraciones, { as: "valoraciones", foreignKey: "sala_id"});
  salas_tematicas.belongsTo(tematicas, { as: "tematica", foreignKey: "tematica_id"});
  tematicas.hasMany(salas_tematicas, { as: "salas_tematicas", foreignKey: "tematica_id"});
  noticias.belongsTo(usuarios, { as: "usuario", foreignKey: "usuario_id"});
  usuarios.hasMany(noticias, { as: "noticia", foreignKey: "usuario_id"});
  perfiles.belongsTo(usuarios, { as: "usuario", foreignKey: "usuario_id"});
  usuarios.hasMany(perfiles, { as: "perfiles", foreignKey: "usuario_id"});
  usuarios_amigos.belongsTo(usuarios, { as: "usuario", foreignKey: "usuario_id"});
  usuarios.hasMany(usuarios_amigos, { as: "usuarios_amigos", foreignKey: "usuario_id"});
  usuarios_amigos.belongsTo(usuarios, { as: "amigo", foreignKey: "amigo_id"});
  usuarios.hasMany(usuarios_amigos, { as: "amigo_usuarios_amigos", foreignKey: "amigo_id"});

  return {
    categorias: categorias,
    ciudades: ciudades,
    companyias: companyias,
    dificultades: dificultades,
    equipos: equipos,
    noticias: noticias,
    partidas: partidas,
    perfiles: perfiles,
    publico: publico,
    salas: salas,
    salas_categorias: salas_categorias,
    salas_publico: salas_publico,
    salas_tematicas: salas_tematicas,
    tematicas: tematicas,
    usuarios_amigos: usuarios_amigos,
    valoraciones: valoraciones,
  };
}
