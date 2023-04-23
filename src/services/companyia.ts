import { Companyia } from "../interfaces/companyia.interface";
import { CompanyiaModel } from "../models/companyia";

const obtenerCompanyia = async (id: string) => {
  const record = await CompanyiaModel.findOne({
    where: { id },
    include: ["noticias", "salas", "ciudad"],
  });
  return record;
};

const obtenerCompanyiaPorUsuario = async (idUsuario: number) => {
  const record = await CompanyiaModel.findOne({
    where: { usuarioId: idUsuario },
  });
  return record;
};

const obtenerCompanyias = async () => {
  const records = await CompanyiaModel.findAll({
    include: ["noticias", "salas", "ciudad"],
  });
  return records;
};

const insertarCompanyia = async (companyia: Companyia) => {
  const record = await CompanyiaModel.create({ ...companyia });
  return record;
};

const actualizarCompanyia = async (
  companyiaModel: CompanyiaModel,
  companyia: Companyia
) => {
  const record = await companyiaModel.update({ ...companyia });
  return record;
};

const borrarCompanyia = async (companyiaModel: CompanyiaModel) => {
  const record = await companyiaModel.destroy();
  return record;
};

export {
  obtenerCompanyia,
  obtenerCompanyiaPorUsuario,
  obtenerCompanyias,
  insertarCompanyia,
  actualizarCompanyia,
  borrarCompanyia,
};
