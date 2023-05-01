import { Router } from "express";
import { getTematicas } from "../controllers/tematica";

const router = Router();

router.get("/", getTematicas);

export { router };
