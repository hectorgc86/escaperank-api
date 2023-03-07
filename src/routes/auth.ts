import { Router } from "express";
import { postLogin, postRegistro } from "../controllers/auth";
import { checkSession } from "../middleware/session";

const router = Router();

router.post("/login", postLogin);
router.post("/register", checkSession, postRegistro);

export { router };
