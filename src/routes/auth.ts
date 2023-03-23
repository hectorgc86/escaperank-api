import { Router } from "express";
import { getValidacion, postLogin, postRegistro } from "../controllers/auth";
import { checkSession } from "../middleware/session";

const router = Router();

router.post("/login", postLogin);
router.get("/validar", checkSession, getValidacion);
router.post("/register", checkSession, postRegistro);

export { router };
