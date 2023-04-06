import { Router } from "express";
import {
  getEstadisticasCompanyia,getEstadisticasSala
} from "../controllers/estadistica";
import { checkSession } from "../middleware/session";

const router = Router();

router.post("/companyia", checkSession, getEstadisticasCompanyia);
router.post("/sala", checkSession, getEstadisticasSala);


export { router };
