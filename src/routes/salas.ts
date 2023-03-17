import { Router } from "express";
import { getSalas } from "../controllers/sala";
import { checkSession } from "../middleware/session";

const router = Router();

router.get("/", checkSession, getSalas);

export { router };
