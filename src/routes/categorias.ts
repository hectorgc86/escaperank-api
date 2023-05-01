import { Router } from "express";
import { getCategorias } from "../controllers/categoria";
import { checkSession } from "../middleware/session";

const router = Router();

router.get("/", getCategorias);

export { router };
