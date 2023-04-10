import { Router } from "express";
import { getSala, getSalas } from "../controllers/sala";

const router = Router();

router.get("/", getSalas);
router.get("/:id", getSala);

export { router };
