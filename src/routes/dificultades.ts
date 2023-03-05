import { Router } from "express";
import {
  getDificultades,
  getDificultad,
  postDificultad,
  putDificultad,
  deleteDificultad,
} from "../controllers/dificultad";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", logMiddleware, getDificultades);
router.get("/:id", getDificultad);
router.put("/:id", putDificultad);
router.post("/", postDificultad);
router.delete("/:id", deleteDificultad);

export { router };
