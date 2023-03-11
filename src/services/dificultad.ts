import { QueryTypes } from "sequelize";
import { DificultadModel } from "../models/dificultad";

const obtenerDificultades = async () => {
  const records = await DificultadModel.sequelize?.query(
    "SELECT d.id, d.tipo, count(s.id) as numeroSalas FROM dificultades d inner join salas s on s.dificultad_id = d.id group by d.id, d.tipo",
    {
      type: QueryTypes.SELECT,
    }
  );
  return records;
};

export { obtenerDificultades };
