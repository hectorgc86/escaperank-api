import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { companyias, companyiasId } from './companyias';
import type { equipos, equiposId } from './equipos';
import type { usuarios, usuariosId } from './usuarios';

export interface noticiasAttributes {
  id: number;
  fecha: Date;
  titular?: string;
  texto_corto?: string;
  texto_largo?: string;
  imagen?: string;
  link?: string;
  promocionada?: number;
  numero_favoritos?: number;
  numero_comentarios?: number;
  companyia_id?: string;
  usuario_id?: number;
  equipo_id?: number;
}

export type noticiasPk = "id";
export type noticiasId = noticias[noticiasPk];
export type noticiasOptionalAttributes = "id" | "fecha" | "titular" | "texto_corto" | "texto_largo" | "imagen" | "link" | "promocionada" | "numero_favoritos" | "numero_comentarios" | "companyia_id" | "usuario_id" | "equipo_id";
export type noticiasCreationAttributes = Optional<noticiasAttributes, noticiasOptionalAttributes>;

export class noticias extends Model<noticiasAttributes, noticiasCreationAttributes> implements noticiasAttributes {
  id!: number;
  fecha!: Date;
  titular?: string;
  texto_corto?: string;
  texto_largo?: string;
  imagen?: string;
  link?: string;
  promocionada?: number;
  numero_favoritos?: number;
  numero_comentarios?: number;
  companyia_id?: string;
  usuario_id?: number;
  equipo_id?: number;

  // noticias belongsTo companyias via companyia_id
  companyium!: companyias;
  getCompanyium!: Sequelize.BelongsToGetAssociationMixin<companyias>;
  setCompanyium!: Sequelize.BelongsToSetAssociationMixin<companyias, companyiasId>;
  createCompanyium!: Sequelize.BelongsToCreateAssociationMixin<companyias>;
  // noticias belongsTo equipos via equipo_id
  equipo!: equipos;
  getEquipo!: Sequelize.BelongsToGetAssociationMixin<equipos>;
  setEquipo!: Sequelize.BelongsToSetAssociationMixin<equipos, equiposId>;
  createEquipo!: Sequelize.BelongsToCreateAssociationMixin<equipos>;
  // noticias belongsTo usuarios via usuario_id
  usuario!: usuarios;
  getUsuario!: Sequelize.BelongsToGetAssociationMixin<usuarios>;
  setUsuario!: Sequelize.BelongsToSetAssociationMixin<usuarios, usuariosId>;
  createUsuario!: Sequelize.BelongsToCreateAssociationMixin<usuarios>;

  static initModel(sequelize: Sequelize.Sequelize): typeof noticias {
    return noticias.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    titular: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    texto_corto: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    texto_largo: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    imagen: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    link: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    promocionada: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    numero_favoritos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    numero_comentarios: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    companyia_id: {
      type: DataTypes.STRING(50),
      allowNull: true,
      references: {
        model: 'companyias',
        key: 'id'
      }
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    equipo_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'equipos',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'noticias',
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
        name: "fk_noticias_companyias",
        using: "BTREE",
        fields: [
          { name: "companyia_id" },
        ]
      },
      {
        name: "fk_noticias_usuarios",
        using: "BTREE",
        fields: [
          { name: "usuario_id" },
        ]
      },
      {
        name: "fk_news_equipos1",
        using: "BTREE",
        fields: [
          { name: "equipo_id" },
        ]
      },
    ]
  });
  }
}
