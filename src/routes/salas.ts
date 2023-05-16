import { Router } from "express";
import { getRankingSala, getSala, getSalas,getSalasCompanyia, postSala,putCerrarSala,putAbrirSala,putSala } from "../controllers/sala";
import { checkSession } from "../middleware/session";

const router = Router();

router.get("/", getSalas);
router.get("/:id", getSala);
router.get("/companyia/:id", getSalasCompanyia);
router.get("/:id/ranking", getRankingSala);
router.post("/new",checkSession, postSala);
router.put("/:id/cerrar",checkSession, putCerrarSala);
router.put("/:id/abrir",checkSession, putAbrirSala);
router.put("/:id",checkSession, putSala);

export { router };