import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { noticias, noticiasId } from './noticias';
import type { partidas, partidasId } from './partidas';
import type { salas, salasId } from './salas';

export interface equiposAttributes {
  id: number;
  nombre?: string;
  avatar?: string;
  activado: number;
}

export type equiposPk = "id";
export type equiposId = equipos[equiposPk];
export type equiposOptionalAttributes = "id" | "nombre" | "avatar" | "activado";
export type equiposCreationAttributes = Optional<equiposAttributes, equiposOptionalAttributes>;

export class equipos extends Model<equiposAttributes, equiposCreationAttributes> implements equiposAttributes {
  id!: number;
  nombre?: string;
  avatar?: string;
  activado!: number;

  // equipos hasMany noticias via equipo_id
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
  // equipos hasMany partidas via equipo_id
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
  // equipos belongsToMany salas via equipo_id and sala_id
  sala_id_salas!: salas[];
  getSala_id_salas!: Sequelize.BelongsToManyGetAssociationsMixin<salas>;
  setSala_id_salas!: Sequelize.BelongsToManySetAssociationsMixin<salas, salasId>;
  addSala_id_sala!: Sequelize.BelongsToManyAddAssociationMixin<salas, salasId>;
  addSala_id_salas!: Sequelize.BelongsToManyAddAssociationsMixin<salas, salasId>;
  createSala_id_sala!: Sequelize.BelongsToManyCreateAssociationMixin<salas>;
  removeSala_id_sala!: Sequelize.BelongsToManyRemoveAssociationMixin<salas, salasId>;
  removeSala_id_salas!: Sequelize.BelongsToManyRemoveAssociationsMixin<salas, salasId>;
  hasSala_id_sala!: Sequelize.BelongsToManyHasAssociationMixin<salas, salasId>;
  hasSala_id_salas!: Sequelize.BelongsToManyHasAssociationsMixin<salas, salasId>;
  countSala_id_salas!: Sequelize.BelongsToManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof equipos {
    return equipos.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    avatar: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    activado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'equipos',
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
    ]
  });
  }
}
