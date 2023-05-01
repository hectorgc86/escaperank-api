import { Router } from "express";
import { getDificultades } from "../controllers/dificultad";

const router = Router();

router.get("/", getDificultades);

export { router };
