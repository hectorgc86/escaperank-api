import { Router } from "express";
import {
  getEquipos,
  getEquipo,
  postEquipo,
  putEquipo,
  deleteEquipo,
} from "../controllers/equipo";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", logMiddleware, getEquipos);
router.get("/:id", getEquipo);
router.put("/:id", putEquipo);
router.post("/", postEquipo);
router.delete("/:id", deleteEquipo);

export { router };
