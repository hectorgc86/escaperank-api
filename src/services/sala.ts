import { QueryTypes } from "sequelize";
import { SalaModel } from "../models/sala";

const obtenerSalas = async () => {
  const records = await SalaModel.sequelize?.query(
    "SELECT c.id, c.tipo, count(s.id) as numeroSalas FROM salas c inner join salas_salas sc on sc.sala_id = c.id inner join salas s on s.id = sc.sala_id group by c.id, c.tipo order by numeroSalas desc",
    {
      type: QueryTypes.SELECT,
    }
  );
  return records;
};

export { obtenerSalas };
