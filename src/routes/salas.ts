import { Router } from "express";
import { getRankingSala, getSala, getSalas,getSalasCompanyia, postSala } from "../controllers/sala";

const router = Router();

router.get("/", getSalas);
router.get("/:id", getSala);
router.get("/companyia/:id", getSalasCompanyia);
router.get("/:id/ranking", getRankingSala);
router.post("/new", postSala);

export { router };