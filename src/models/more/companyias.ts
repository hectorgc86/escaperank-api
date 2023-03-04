import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ciudades, ciudadesId } from './ciudades';
import type { noticias, noticiasId } from './noticias';
import type { salas, salasId } from './salas';

export interface companyiasAttributes {
  id: string;
  nombre?: string;
  direccion?: string;
  email?: string;
  telefono?: string;
  web?: string;
  trip_advisor?: string;
  facebook?: string;
  latitud?: string;
  longitud?: string;
  numero_local?: string;
  google_maps?: string;
  numero_opiniones?: string;
  codigo_postal?: string;
  instagram?: string;
  puntuacion?: string;
  rango?: string;
  ciudad_id: string;
}

export type companyiasPk = "id";
export type companyiasId = companyias[companyiasPk];
export type companyiasOptionalAttributes = "nombre" | "direccion" | "email" | "telefono" | "web" | "trip_advisor" | "facebook" | "latitud" | "longitud" | "numero_local" | "google_maps" | "numero_opiniones" | "codigo_postal" | "instagram" | "puntuacion" | "rango";
export type companyiasCreationAttributes = Optional<companyiasAttributes, companyiasOptionalAttributes>;

export class companyias extends Model<companyiasAttributes, companyiasCreationAttributes> implements companyiasAttributes {
  id!: string;
  nombre?: string;
  direccion?: string;
  email?: string;
  telefono?: string;
  web?: string;
  trip_advisor?: string;
  facebook?: string;
  latitud?: string;
  longitud?: string;
  numero_local?: string;
  google_maps?: string;
  numero_opiniones?: string;
  codigo_postal?: string;
  instagram?: string;
  puntuacion?: string;
  rango?: string;
  ciudad_id!: string;

  // companyias belongsTo ciudades via ciudad_id
  ciudad!: ciudades;
  getCiudad!: Sequelize.BelongsToGetAssociationMixin<ciudades>;
  setCiudad!: Sequelize.BelongsToSetAssociationMixin<ciudades, ciudadesId>;
  createCiudad!: Sequelize.BelongsToCreateAssociationMixin<ciudades>;
  // companyias hasMany noticias via companyia_id
  noticia!: noticias[];
  getNoticia!: Sequelize.HasManyGetAssociationsMixin<noticias>;
  setNoticia!: Sequelize.HasManySetAssociationsMixin<noticias, noticiasId>;
  addNoticium!: Sequelize.HasManyAddAssociationMixin<noticias, noticiasId>;
  addNoticia!: Sequelize.HasManyAddAssociationsMixin<noticias, noticiasId>;
  createNoticium!: Sequelize.HasManyCreateAssociationMixin<noticias>;
  removeNoticium!: Sequelize.HasManyRemoveAssociationMixin<noticias, noticiasId>;
  removeNoticia!: Sequelize.HasManyRemoveAssociationsMixin<noticias, noticiasId>;
  hasNoticium!: Sequelize.HasManyHasAssociationMixin<noticias, noticiasId>;
  hasNoticia!: Sequelize.HasManyHasAssociationsMixin<noticias, noticiasId>;
  countNoticia!: Sequelize.HasManyCountAssociationsMixin;
  // companyias hasMany salas via companyia_id
  salas!: salas[];
  getSalas!: Sequelize.HasManyGetAssociationsMixin<salas>;
  setSalas!: Sequelize.HasManySetAssociationsMixin<salas, salasId>;
  addSala!: Sequelize.HasManyAddAssociationMixin<salas, salasId>;
  addSalas!: Sequelize.HasManyAddAssociationsMixin<salas, salasId>;
  createSala!: Sequelize.HasManyCreateAssociationMixin<salas>;
  removeSala!: Sequelize.HasManyRemoveAssociationMixin<salas, salasId>;
  removeSalas!: Sequelize.HasManyRemoveAssociationsMixin<salas, salasId>;
  hasSala!: Sequelize.HasManyHasAssociationMixin<salas, salasId>;
  hasSalas!: Sequelize.HasManyHasAssociationsMixin<salas, salasId>;
  countSalas!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof companyias {
    return companyias.init({
    id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    telefono: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    web: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    trip_advisor: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    facebook: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    latitud: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    longitud: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    numero_local: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    google_maps: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    numero_opiniones: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    codigo_postal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    instagram: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    puntuacion: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    rango: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ciudad_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'ciudades',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'companyias',
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
        name: "fk_companyias_ciudades",
        using: "BTREE",
        fields: [
          { name: "ciudad_id" },
        ]
      },
    ]
  });
  }
}
