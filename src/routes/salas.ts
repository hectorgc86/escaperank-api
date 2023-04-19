import { Router } from "express";
import { getRankingSala, getSala, getSalas } from "../controllers/sala";

const router = Router();

router.get("/", getSalas);
router.get("/:id", getSala);
router.get("/:id/ranking", getRankingSala);

export { router };
