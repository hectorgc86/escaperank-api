import { QueryTypes } from "sequelize";
import { TematicaModel } from "../models/tematica";

const obtenerTematicas = async () => {
  const records = await TematicaModel.sequelize?.query(
    "SELECT t.id, t.tipo, count(s.id) as numeroSalas FROM tematicas t inner join salas_tematicas st on st.tematica_id = t.id inner join salas s on s.id = st.sala_id group by t.id, t.tipo order by numeroSalas desc",
    {
      type: QueryTypes.SELECT,
    }
  );
  return records;
};

export { obtenerTematicas };
