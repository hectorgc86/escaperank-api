import { Router } from "express";
import {
  getCompanyias,
  getCompanyia,
  postCompanyia,
  putCompanyia,
  deleteCompanyia,
  getCompanyiasAValidar,
  putValidarCompanyia,
  putInvalidarCompanyia,
  putActivarCompanyia,
  putDesactivarCompanyia,
  getCompanyiasBusqueda
} from "../controllers/companyia";
import { checkSession } from "../middleware/session";

const router = Router();

router.get("/", checkSession, getCompanyias);
router.get("/buscar", checkSession, getCompanyiasBusqueda);
router.get("/nuevas", checkSession, getCompanyiasAValidar);
router.get("/:id", checkSession, getCompanyia);
router.put("/:id", checkSession, putCompanyia);
router.put("/:id/validar", checkSession, putValidarCompanyia);
router.put("/:id/invalidar", checkSession, putInvalidarCompanyia);
router.put("/:id/activar", checkSession, putActivarCompanyia);
router.put("/:id/desactivar", checkSession, putDesactivarCompanyia);
router.post("/", checkSession, postCompanyia);
router.delete("/:id", checkSession, deleteCompanyia);

export { router };
