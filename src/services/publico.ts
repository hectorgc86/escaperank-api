import { QueryTypes } from "sequelize";
import { PublicoModel } from "../models/publico";

const obtenerPublico = async () => {
  const records = await PublicoModel.sequelize?.query(
    "SELECT p.id, p.tipo, count(s.id) as numeroSalas FROM publico p inner join salas_publico sp on sp.publico_id = p.id inner join salas s on s.id = sp.sala_id group by p.id, p.tipo order by numeroSalas desc",
    {
      type: QueryTypes.SELECT,
    }
  );
  return records;
};

export { obtenerPublico };
