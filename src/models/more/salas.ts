import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { categorias, categoriasId } from './categorias';
import type { companyias, companyiasId } from './companyias';
import type { dificultades, dificultadesId } from './dificultades';
import type { equipos, equiposId } from './equipos';
import type { partidas, partidasId } from './partidas';
import type { publico, publicoId } from './publico';
import type { salas_categorias, salas_categoriasId } from './salas_categorias';
import type { salas_publico, salas_publicoId } from './salas_publico';
import type { salas_tematicas, salas_tematicasId } from './salas_tematicas';
import type { tematicas, tematicasId } from './tematicas';
import type { valoraciones, valoracionesId } from './valoraciones';

export interface salasAttributes {
  id: string;
  nombre: string;
  promocionada: number;
  duracion?: string;
  minimo_jugadores?: number;
  maximo_jugadores?: number;
  precio_minimo?: string;
  descripcion?: string;
  precio_maximo?: string;
  url_reserva?: string;
  edad_publico?: string;
  proximamente?: string;
  visto?: string;
  modo_combate?: string;
  texto_combate?: string;
  sala_igual?: string;
  en_oferta?: string;
  texto_oferta?: string;
  numero_resenyas?: string;
  regalo_bonus?: string;
  disponible_ingles?: string;
  adaptado_minusvalidos?: string;
  adaptado_ciegos?: string;
  adaptado_sordos?: string;
  adaptado_embarazadas?: string;
  no_claustrofobicos?: string;
  imagen_ancha?: string;
  imagen_estrecha?: string;
  jugadores_incluidos?: string;
  precio_jugador_adicional?: string;
  validez?: string;
  como_reservar?: string;
  terminos_reserva?: string;
  otros_datos?: string;
  companyia_id: string;
  dificultad_id?: string;
}

export type salasPk = "id";
export type salasId = salas[salasPk];
export type salasOptionalAttributes = "promocionada" | "duracion" | "minimo_jugadores" | "maximo_jugadores" | "precio_minimo" | "descripcion" | "precio_maximo" | "url_reserva" | "edad_publico" | "proximamente" | "visto" | "modo_combate" | "texto_combate" | "sala_igual" | "en_oferta" | "texto_oferta" | "numero_resenyas" | "regalo_bonus" | "disponible_ingles" | "adaptado_minusvalidos" | "adaptado_ciegos" | "adaptado_sordos" | "adaptado_embarazadas" | "no_claustrofobicos" | "imagen_ancha" | "imagen_estrecha" | "jugadores_incluidos" | "precio_jugador_adicional" | "validez" | "como_reservar" | "terminos_reserva" | "otros_datos" | "dificultad_id";
export type salasCreationAttributes = Optional<salasAttributes, salasOptionalAttributes>;

export class salas extends Model<salasAttributes, salasCreationAttributes> implements salasAttributes {
  id!: string;
  nombre!: string;
  promocionada!: number;
  duracion?: string;
  minimo_jugadores?: number;
  maximo_jugadores?: number;
  precio_minimo?: string;
  descripcion?: string;
  precio_maximo?: string;
  url_reserva?: string;
  edad_publico?: string;
  proximamente?: string;
  visto?: string;
  modo_combate?: string;
  texto_combate?: string;
  sala_igual?: string;
  en_oferta?: string;
  texto_oferta?: string;
  numero_resenyas?: string;
  regalo_bonus?: string;
  disponible_ingles?: string;
  adaptado_minusvalidos?: string;
  adaptado_ciegos?: string;
  adaptado_sordos?: string;
  adaptado_embarazadas?: string;
  no_claustrofobicos?: string;
  imagen_ancha?: string;
  imagen_estrecha?: string;
  jugadores_incluidos?: string;
  precio_jugador_adicional?: string;
  validez?: string;
  como_reservar?: string;
  terminos_reserva?: string;
  otros_datos?: string;
  companyia_id!: string;
  dificultad_id?: string;

  // salas belongsTo companyias via companyia_id
  companyium!: companyias;
  getCompanyium!: Sequelize.BelongsToGetAssociationMixin<companyias>;
  setCompanyium!: Sequelize.BelongsToSetAssociationMixin<companyias, companyiasId>;
  createCompanyium!: Sequelize.BelongsToCreateAssociationMixin<companyias>;
  // salas belongsTo dificultades via dificultad_id
  dificultad!: dificultades;
  getDificultad!: Sequelize.BelongsToGetAssociationMixin<dificultades>;
  setDificultad!: Sequelize.BelongsToSetAssociationMixin<dificultades, dificultadesId>;
  createDificultad!: Sequelize.BelongsToCreateAssociationMixin<dificultades>;
  // salas belongsToMany categorias via sala_id and categoria_id
  categoria_id_categoria!: categorias[];
  getCategoria_id_categoria!: Sequelize.BelongsToManyGetAssociationsMixin<categorias>;
  setCategoria_id_categoria!: Sequelize.BelongsToManySetAssociationsMixin<categorias, categoriasId>;
  addCategoria_id_categorium!: Sequelize.BelongsToManyAddAssociationMixin<categorias, categoriasId>;
  addCategoria_id_categoria!: Sequelize.BelongsToManyAddAssociationsMixin<categorias, categoriasId>;
  createCategoria_id_categorium!: Sequelize.BelongsToManyCreateAssociationMixin<categorias>;
  removeCategoria_id_categorium!: Sequelize.BelongsToManyRemoveAssociationMixin<categorias, categoriasId>;
  removeCategoria_id_categoria!: Sequelize.BelongsToManyRemoveAssociationsMixin<categorias, categoriasId>;
  hasCategoria_id_categorium!: Sequelize.BelongsToManyHasAssociationMixin<categorias, categoriasId>;
  hasCategoria_id_categoria!: Sequelize.BelongsToManyHasAssociationsMixin<categorias, categoriasId>;
  countCategoria_id_categoria!: Sequelize.BelongsToManyCountAssociationsMixin;
  // salas belongsToMany equipos via sala_id and equipo_id
  equipo_id_equipos!: equipos[];
  getEquipo_id_equipos!: Sequelize.BelongsToManyGetAssociationsMixin<equipos>;
  setEquipo_id_equipos!: Sequelize.BelongsToManySetAssociationsMixin<equipos, equiposId>;
  addEquipo_id_equipo!: Sequelize.BelongsToManyAddAssociationMixin<equipos, equiposId>;
  addEquipo_id_equipos!: Sequelize.BelongsToManyAddAssociationsMixin<equipos, equiposId>;
  createEquipo_id_equipo!: Sequelize.BelongsToManyCreateAssociationMixin<equipos>;
  removeEquipo_id_equipo!: Sequelize.BelongsToManyRemoveAssociationMixin<equipos, equiposId>;
  removeEquipo_id_equipos!: Sequelize.BelongsToManyRemoveAssociationsMixin<equipos, equiposId>;
  hasEquipo_id_equipo!: Sequelize.BelongsToManyHasAssociationMixin<equipos, equiposId>;
  hasEquipo_id_equipos!: Sequelize.BelongsToManyHasAssociationsMixin<equipos, equiposId>;
  countEquipo_id_equipos!: Sequelize.BelongsToManyCountAssociationsMixin;
  // salas hasMany partidas via sala_id
  partidas!: partidas[];
  getPartidas!: Sequelize.HasManyGetAssociationsMixin<partidas>;
  setPartidas!: Sequelize.HasManySetAssociationsMixin<partidas, partidasId>;
  addPartida!: Sequelize.HasManyAddAssociationMixin<partidas, partidasId>;
  addPartidas!: Sequelize.HasManyAddAssociationsMixin<partidas, partidasId>;
  createPartida!: Sequelize.HasManyCreateAssociationMixin<partidas>;
  removePartida!: Sequelize.HasManyRemoveAssociationMixin<partidas, partidasId>;
  removePartidas!: Sequelize.HasManyRemoveAssociationsMixin<partidas, partidasId>;
  hasPartida!: Sequelize.HasManyHasAssociationMixin<partidas, partidasId>;
  hasPartidas!: Sequelize.HasManyHasAssociationsMixin<partidas, partidasId>;
  countPartidas!: Sequelize.HasManyCountAssociationsMixin;
  // salas belongsToMany publico via sala_id and publico_id
  publico_id_publicos!: publico[];
  getPublico_id_publicos!: Sequelize.BelongsToManyGetAssociationsMixin<publico>;
  setPublico_id_publicos!: Sequelize.BelongsToManySetAssociationsMixin<publico, publicoId>;
  addPublico_id_publico!: Sequelize.BelongsToManyAddAssociationMixin<publico, publicoId>;
  addPublico_id_publicos!: Sequelize.BelongsToManyAddAssociationsMixin<publico, publicoId>;
  createPublico_id_publico!: Sequelize.BelongsToManyCreateAssociationMixin<publico>;
  removePublico_id_publico!: Sequelize.BelongsToManyRemoveAssociationMixin<publico, publicoId>;
  removePublico_id_publicos!: Sequelize.BelongsToManyRemoveAssociationsMixin<publico, publicoId>;
  hasPublico_id_publico!: Sequelize.BelongsToManyHasAssociationMixin<publico, publicoId>;
  hasPublico_id_publicos!: Sequelize.BelongsToManyHasAssociationsMixin<publico, publicoId>;
  countPublico_id_publicos!: Sequelize.BelongsToManyCountAssociationsMixin;
  // salas hasMany salas_categorias via sala_id
  salas_categoria!: salas_categorias[];
  getSalas_categoria!: Sequelize.HasManyGetAssociationsMixin<salas_categorias>;
  setSalas_categoria!: Sequelize.HasManySetAssociationsMixin<salas_categorias, salas_categoriasId>;
  addSalas_categorium!: Sequelize.HasManyAddAssociationMixin<salas_categorias, salas_categoriasId>;
  addSalas_categoria!: Sequelize.HasManyAddAssociationsMixin<salas_categorias, salas_categoriasId>;
  createSalas_categorium!: Sequelize.HasManyCreateAssociationMixin<salas_categorias>;
  removeSalas_categorium!: Sequelize.HasManyRemoveAssociationMixin<salas_categorias, salas_categoriasId>;
  removeSalas_categoria!: Sequelize.HasManyRemoveAssociationsMixin<salas_categorias, salas_categoriasId>;
  hasSalas_categorium!: Sequelize.HasManyHasAssociationMixin<salas_categorias, salas_categoriasId>;
  hasSalas_categoria!: Sequelize.HasManyHasAssociationsMixin<salas_categorias, salas_categoriasId>;
  countSalas_categoria!: Sequelize.HasManyCountAssociationsMixin;
  // salas hasMany salas_publico via sala_id
  salas_publicos!: salas_publico[];
  getSalas_publicos!: Sequelize.HasManyGetAssociationsMixin<salas_publico>;
  setSalas_publicos!: Sequelize.HasManySetAssociationsMixin<salas_publico, salas_publicoId>;
  addSalas_publico!: Sequelize.HasManyAddAssociationMixin<salas_publico, salas_publicoId>;
  addSalas_publicos!: Sequelize.HasManyAddAssociationsMixin<salas_publico, salas_publicoId>;
  createSalas_publico!: Sequelize.HasManyCreateAssociationMixin<salas_publico>;
  removeSalas_publico!: Sequelize.HasManyRemoveAssociationMixin<salas_publico, salas_publicoId>;
  removeSalas_publicos!: Sequelize.HasManyRemoveAssociationsMixin<salas_publico, salas_publicoId>;
  hasSalas_publico!: Sequelize.HasManyHasAssociationMixin<salas_publico, salas_publicoId>;
  hasSalas_publicos!: Sequelize.HasManyHasAssociationsMixin<salas_publico, salas_publicoId>;
  countSalas_publicos!: Sequelize.HasManyCountAssociationsMixin;
  // salas hasMany salas_tematicas via sala_id
  salas_tematicas!: salas_tematicas[];
  getSalas_tematicas!: Sequelize.HasManyGetAssociationsMixin<salas_tematicas>;
  setSalas_tematicas!: Sequelize.HasManySetAssociationsMixin<salas_tematicas, salas_tematicasId>;
  addSalas_tematica!: Sequelize.HasManyAddAssociationMixin<salas_tematicas, salas_tematicasId>;
  addSalas_tematicas!: Sequelize.HasManyAddAssociationsMixin<salas_tematicas, salas_tematicasId>;
  createSalas_tematica!: Sequelize.HasManyCreateAssociationMixin<salas_tematicas>;
  removeSalas_tematica!: Sequelize.HasManyRemoveAssociationMixin<salas_tematicas, salas_tematicasId>;
  removeSalas_tematicas!: Sequelize.HasManyRemoveAssociationsMixin<salas_tematicas, salas_tematicasId>;
  hasSalas_tematica!: Sequelize.HasManyHasAssociationMixin<salas_tematicas, salas_tematicasId>;
  hasSalas_tematicas!: Sequelize.HasManyHasAssociationsMixin<salas_tematicas, salas_tematicasId>;
  countSalas_tematicas!: Sequelize.HasManyCountAssociationsMixin;
  // salas belongsToMany tematicas via sala_id and tematica_id
  tematica_id_tematicas!: tematicas[];
  getTematica_id_tematicas!: Sequelize.BelongsToManyGetAssociationsMixin<tematicas>;
  setTematica_id_tematicas!: Sequelize.BelongsToManySetAssociationsMixin<tematicas, tematicasId>;
  addTematica_id_tematica!: Sequelize.BelongsToManyAddAssociationMixin<tematicas, tematicasId>;
  addTematica_id_tematicas!: Sequelize.BelongsToManyAddAssociationsMixin<tematicas, tematicasId>;
  createTematica_id_tematica!: Sequelize.BelongsToManyCreateAssociationMixin<tematicas>;
  removeTematica_id_tematica!: Sequelize.BelongsToManyRemoveAssociationMixin<tematicas, tematicasId>;
  removeTematica_id_tematicas!: Sequelize.BelongsToManyRemoveAssociationsMixin<tematicas, tematicasId>;
  hasTematica_id_tematica!: Sequelize.BelongsToManyHasAssociationMixin<tematicas, tematicasId>;
  hasTematica_id_tematicas!: Sequelize.BelongsToManyHasAssociationsMixin<tematicas, tematicasId>;
  countTematica_id_tematicas!: Sequelize.BelongsToManyCountAssociationsMixin;
  // salas hasMany valoraciones via sala_id
  valoraciones!: valoraciones[];
  getValoraciones!: Sequelize.HasManyGetAssociationsMixin<valoraciones>;
  setValoraciones!: Sequelize.HasManySetAssociationsMixin<valoraciones, valoracionesId>;
  addValoracione!: Sequelize.HasManyAddAssociationMixin<valoraciones, valoracionesId>;
  addValoraciones!: Sequelize.HasManyAddAssociationsMixin<valoraciones, valoracionesId>;
  createValoracione!: Sequelize.HasManyCreateAssociationMixin<valoraciones>;
  removeValoracione!: Sequelize.HasManyRemoveAssociationMixin<valoraciones, valoracionesId>;
  removeValoraciones!: Sequelize.HasManyRemoveAssociationsMixin<valoraciones, valoracionesId>;
  hasValoracione!: Sequelize.HasManyHasAssociationMixin<valoraciones, valoracionesId>;
  hasValoraciones!: Sequelize.HasManyHasAssociationsMixin<valoraciones, valoracionesId>;
  countValoraciones!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof salas {
    return salas.init({
    id: {
      type: DataTypes.STRING(500),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    promocionada: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    duracion: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    minimo_jugadores: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    maximo_jugadores: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    precio_minimo: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    precio_maximo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    url_reserva: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    edad_publico: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    proximamente: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    visto: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    modo_combate: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    texto_combate: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    sala_igual: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    en_oferta: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    texto_oferta: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    numero_resenyas: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    regalo_bonus: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    disponible_ingles: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    adaptado_minusvalidos: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    adaptado_ciegos: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    adaptado_sordos: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    adaptado_embarazadas: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    no_claustrofobicos: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    imagen_ancha: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    imagen_estrecha: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    jugadores_incluidos: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    precio_jugador_adicional: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    validez: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    como_reservar: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    terminos_reserva: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    otros_datos: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    companyia_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'companyias',
        key: 'id'
      }
    },
    dificultad_id: {
      type: DataTypes.STRING(50),
      allowNull: true,
      references: {
        model: 'dificultades',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'salas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "fk_salas_companyias",
        using: "BTREE",
        fields: [
          { name: "companyia_id" },
        ]
      },
      {
        name: "fk_salas_dificultades",
        using: "BTREE",
        fields: [
          { name: "dificultad_id" },
        ]
      },
    ]
  });
  }
}
