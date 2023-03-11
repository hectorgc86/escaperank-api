import { ProvinciaModel } from "../models/provincia";

const obtenerProvincias = async () => {
  const records = await ProvinciaModel.findAll({
    include: "ciudades",
  });
  return records;
};

export { obtenerProvincias };
