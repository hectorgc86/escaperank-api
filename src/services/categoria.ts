import { QueryTypes } from "sequelize";
import { CategoriaModel } from "../models/categoria";

const obtenerCategorias = async () => {
  const records = await CategoriaModel.sequelize?.query(
    "SELECT c.id, c.tipo, c.icono, c.color_icono as colorIcono, count(s.id) as numeroSalas FROM categorias c inner join salas_categorias sc on sc.categoria_id = c.id inner join salas s on s.id = sc.sala_id group by c.id, c.tipo, c.icono, c.color_icono order by numeroSalas desc",
    {
      type: QueryTypes.SELECT,
    }
  );
  return records;
};

export { obtenerCategorias };
