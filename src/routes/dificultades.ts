import { Router } from "express";
import { getDificultades } from "../controllers/dificultad";
import { checkSession } from "../middleware/session";

const router = Router();

router.get("/", checkSession, getDificultades);

export { router };
