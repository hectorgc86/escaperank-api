import { SalaModel } from "../models/sala";
import { CompanyiaModel } from "../models/companyia";
import { CiudadModel } from "../models/ciudad";

const obtenerSalasPromocionadas = async () => {
  const records = await SalaModel.findAll({
    include: [
      {
        model: CompanyiaModel,
        as: "companyia",
        include: [{ model: CiudadModel, as: "ciudad" }],
      },
    ],
    limit: 10,
  });
  return records;
};

export { obtenerSalasPromocionadas };
