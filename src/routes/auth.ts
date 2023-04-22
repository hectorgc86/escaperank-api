import { Router } from "express";
import { getValidacion, postLogin, postRegistro } from "../controllers/auth";
import { checkSession } from "../middleware/session";

const router = Router();

router.post("/login", postLogin);
router.post("/registro", postRegistro);
router.get("/validar", checkSession, getValidacion);

export { router };
