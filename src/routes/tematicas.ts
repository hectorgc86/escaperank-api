import { Router } from "express";
import { getTematicas } from "../controllers/tematica";
import { checkSession } from "../middleware/session";

const router = Router();

router.get("/", checkSession, getTematicas);

export { router };
