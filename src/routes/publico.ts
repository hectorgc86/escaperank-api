import { Router } from "express";
import { getPublico } from "../controllers/publico";

const router = Router();

router.get("/", getPublico);

export { router };
