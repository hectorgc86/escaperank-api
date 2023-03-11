import { Router } from "express";
import { getPublico } from "../controllers/publico";
import { checkSession } from "../middleware/session";

const router = Router();

router.get("/", checkSession, getPublico);

export { router };
