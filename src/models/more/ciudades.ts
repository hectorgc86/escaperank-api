import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { companyias, companyiasId } from './companyias';
import type { provincias, provinciasId } from './provincias';

export interface ciudadesAttributes {
  id: string;
  nombre?: string;
  ciudad_origen?: string;
  latitud?: string;
  longitud?: string;
  provincia_id?: string;
}

export type ciudadesPk = "id";
export type ciudadesId = ciudades[ciudadesPk];
export type ciudadesOptionalAttributes = "nombre" | "ciudad_origen" | "latitud" | "longitud" | "provincia_id";
export type ciudadesCreationAttributes = Optional<ciudadesAttributes, ciudadesOptionalAttributes>;

export class ciudades extends Model<ciudadesAttributes, ciudadesCreationAttributes> implements ciudadesAttributes {
  id!: string;
  nombre?: string;
  ciudad_origen?: string;
  latitud?: string;
  longitud?: string;
  provincia_id?: string;

  // ciudades hasMany companyias via ciudad_id
  companyia!: companyias[];
  getCompanyia!: Sequelize.HasManyGetAssociationsMixin<companyias>;
  setCompanyia!: Sequelize.HasManySetAssociationsMixin<companyias, companyiasId>;
  addCompanyium!: Sequelize.HasManyAddAssociationMixin<companyias, companyiasId>;
  addCompanyia!: Sequelize.HasManyAddAssociationsMixin<companyias, companyiasId>;
  createCompanyium!: Sequelize.HasManyCreateAssociationMixin<companyias>;
  removeCompanyium!: Sequelize.HasManyRemoveAssociationMixin<companyias, companyiasId>;
  removeCompanyia!: Sequelize.HasManyRemoveAssociationsMixin<companyias, companyiasId>;
  hasCompanyium!: Sequelize.HasManyHasAssociationMixin<companyias, companyiasId>;
  hasCompanyia!: Sequelize.HasManyHasAssociationsMixin<companyias, companyiasId>;
  countCompanyia!: Sequelize.HasManyCountAssociationsMixin;
  // ciudades belongsTo provincias via provincia_id
  provincium!: provincias;
  getProvincium!: Sequelize.BelongsToGetAssociationMixin<provincias>;
  setProvincium!: Sequelize.BelongsToSetAssociationMixin<provincias, provinciasId>;
  createProvincium!: Sequelize.BelongsToCreateAssociationMixin<provincias>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ciudades {
    return ciudades.init({
    id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ciudad_origen: {
      type: DataTypes.STRING(45),
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
    provincia_id: {
      type: DataTypes.STRING(50),
      allowNull: true,
      references: {
        model: 'provincias',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'ciudades',
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
        name: "fk_ciudades_provincias",
        using: "BTREE",
        fields: [
          { name: "provincia_id" },
        ]
      },
    ]
  });
  }
}
